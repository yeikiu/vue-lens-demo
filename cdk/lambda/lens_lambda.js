const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

exports.createItemHandlerV2 = async (createItemEvent) => {
  try {
    const data = JSON.parse(createItemEvent.body)
    const Item = {
      ...data,
      id: new Date().getTime().toString(),
    }
    await docClient.put({
      TableName : process.env.TABLE_NAME,
      Item,
    }).promise();

    return Item;

  } catch (err) {
    return err;
  }
};

exports.listItemsHandlerV2 = async () => {
  try {
    const tableData = await docClient.scan({
      TableName : process.env.TABLE_NAME,
    }).promise();

    return tableData;

  } catch (err) {
    return { error: err }
  }
}
