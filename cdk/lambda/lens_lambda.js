const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

exports.createItemHandler = async (createItemEvent) => {
  console.log({ createItemEvent })
  try {
    const data = JSON.parse(createItemEvent.body)
    await docClient.put({
      TableName : process.env.TABLE_NAME,
      Item: {
        ...data,
        id: new Date().getTime().toString(),
      }
    }).promise();

    return 'CONFIG SAVED';

  } catch (err) {
    return err;
  }
};

exports.listItemsHandler = async () => {
  try {
    const tableData = await docClient.scan({
      TableName : process.env.TABLE_NAME,
    }).promise();

    return tableData;

  } catch (err) {
    return { error: err }
  }
}
