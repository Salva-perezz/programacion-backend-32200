import { awsService } from "../lib/aws.js";

const TABLE_NAME = "product-inventory";
const SNS_TOPIC_ARN = "arn:aws:sns:us-east-1:495702199171:notificaciones";

const getProducts = async (req, res) => {
  try {
    const params = {
      TableName: TABLE_NAME,
    };

    const products = awsService.scanDynamoRecords(params);

    res.json(products);
  } catch (err) {
    throw { err };
  }
};

const createProduct = async (req, res) => {
  const params = {
    TableName: TABLE_NAME,
    Item: req.body,
  };
  try {
    await awsService.dynamodb.put(params).promise();

    const product = JSON.stringify(req.body);

    await awsService.sns
      .publish({
        Message: `New product added: ${product}`,
        Subject: "New product",
        TopicArn: SNS_TOPIC_ARN,
      })
      .promise();

    const body = {
      Operation: "SAVE",
      Message: "SUCCESS",
      Item: req.body,
    };

    res.json(body);
  } catch (error) {
    console.log("Error", error);
    res.sendStatus(500);
  }
};

const updateProduct = async (req, res) => {
  try {
    const item = {
      ...req.body,
      productId: Number(req.params.id),
    };

    const params = {
      TableName: TABLE_NAME,
      Item: item,
    };

    await awsService.dynamodb.put(params).promise();

    const updatedProduct = JSON.stringify(req.body);

    await awsService.sns
      .publish({
        Message: `Product updated: ${updatedProduct}`,
        Subject: "Product updated",
        TopicArn: SNS_TOPIC_ARN,
      })
      .promise();

    const body = {
      Operation: "UPDATE",
      Message: "SUCCESS",
      Item: item,
    };

    res.json(body);
  } catch (err) {
    throw { err };
  }
};

const deleteProduct = async (req, res) => {
  try {
    const params = {
      TableName: TABLE_NAME,
      Key: {
        productId: Number(req.params.id),
      },
      ReturnValues: "ALL_OLD",
    };

    const dynamoResponse = await awsService.dynamodb.delete(params).promise();

    await awsService.sns
      .publish({
        Message: `Product deleted: ${JSON.stringify(dynamoResponse)}`,
        Subject: "Product deleted",
        TopicArn: SNS_TOPIC_ARN,
      })
      .promise();

    const body = {
      Operation: "DELET",
      Message: "SUCCESS",
      Item: dynamoResponse,
    };

    res.json(body);
  } catch (err) {
    throw { err };
  }
};

export const productController = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
