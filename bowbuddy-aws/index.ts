import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";

const dearcScorecardsTable = new aws.dynamodb.Table("dearc-scorecards-table", {
    attributes: [
        { name: "id", type: "S" },
    ],
    hashKey: "id",
    writeCapacity: 5,
    readCapacity: 5
});

let statusCode = 200;
const headers = {
    "Content-Type": "application/json"
};


const endpoint = new awsx.apigateway.API("dearc-scorecard", {

    routes: [
        {
            method: "GET",
            path: "/scorecards/{id}",
            eventHandler: async (ev, ctx) => {

                const scorecardId = ev.pathParameters!["id"];
                let client = new aws.sdk.DynamoDB.DocumentClient();
                const scorecard = await client.get({TableName: dearcScorecardsTable.name.get(), Key: { id: scorecardId}}).promise();
                return {
                    statusCode,
                    body: JSON.stringify(scorecard),
                    headers
                };
            }
        },
        {
            method: "GET",
            path: "/scorecards",
            eventHandler: async (ev, ctx) => {
                let client = new aws.sdk.DynamoDB.DocumentClient();
                let body;
                body = await client.scan({ TableName: dearcScorecardsTable.name.get()}).promise();
                return {
                    statusCode,
                    body: JSON.stringify(body),
                    headers
                };
            }
        },
        {
            method: "PUT",
            path: "/scorecards",
            eventHandler: async (ev, ctx) => {
                let client = new aws.sdk.DynamoDB.DocumentClient();

                let body;
                let statusCode = 200;
                const headers = {
                    "Content-Type": "application/json"
                };
                if (ev.body) {
                    let requestJSON = null;
                    if (ev.isBase64Encoded) {
                        const buff = Buffer.from(ev.body, "base64");
                        requestJSON = JSON.parse(buff.toString());
                    } else {
                        requestJSON = JSON.parse(ev.body);
                    }
                    await client
                      .put({
                        TableName: dearcScorecardsTable.name.get(),
                        Item: requestJSON
                      })
                      .promise();
                    body = `Put item ${requestJSON.id}`;
                } else {
                    body = "Need to upload a scorecard!";
                    statusCode = 500;
                }

                return {
                    statusCode,
                    body: JSON.stringify(body),
                    headers
                };
            }
        },

    ]

});

export const url = endpoint.url;
export const table = dearcScorecardsTable.name;





