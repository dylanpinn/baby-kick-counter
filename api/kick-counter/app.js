const dynamodb = require("aws-sdk/clients/dynamodb");
const docClient = new dynamodb.DocumentClient();
const tableName = process.env.KICK_COUNTER_TABLE;

/**
 * Record the time of kicks in DynamoDB table.
 */
exports.lambdaHandler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    throw new Error(
      `postMethod only accepts POST method, you tried: ${event.httpMethod} method.`
    );
  }
  // All log statements are written to CloudWatch
  console.info("received:", event);

  // Get time from the body.
  const body = JSON.parse(event.body);
  console.log(event);
  const kickDate = body.kickDate;
  const kickTime = body.kickTime;

  // Creates a new item.
  const params = {
    TableName: tableName,
    Item: { id: `${kickDate} ${kickTime}` },
  };

  const result = await docClient.put(params).promise();

  const response = {
    statusCode: 200,
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };

  // All log statements are written to CloudWatch
  console.info(
    `response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`
  );
  return response;
};
