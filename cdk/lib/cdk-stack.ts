import * as cdk from 'aws-cdk-lib';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigw from 'aws-cdk-lib/aws-apigateway';
import { Construct } from 'constructs';

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const table = new dynamodb.Table(this, 'LensConfigTable', { 
      partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING }, 
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST, 
    });

    const createItemLambdaFn = new lambda.Function(this, 'createItemLambda', {
      code: lambda.Code.fromAsset('./lambda/'),
      handler: 'lens_lambda.createItemHandler',
      runtime: lambda.Runtime.NODEJS_16_X,
    }).addEnvironment('TABLE_NAME', table.tableName);
    table.grantWriteData(createItemLambdaFn)

    new apigw.LambdaRestApi(this, 'createItemApi', {
      handler: createItemLambdaFn,
      proxy: false,
    }).root
      .addResource('save_config')
      .addMethod('POST')

    const listItemsLambdaFn = new lambda.Function(this, 'listItemsLambda', {
      code: lambda.Code.fromAsset('./lambda/'),
      handler: 'lens_lambda.listItemsHandler',
      runtime: lambda.Runtime.NODEJS_16_X,
    }).addEnvironment('TABLE_NAME', table.tableName);
    table.grantReadData(listItemsLambdaFn)

    new apigw.LambdaRestApi(this, 'listItemsApi', {
      handler: listItemsLambdaFn,
      proxy: false,
    }).root
      .addResource('list_configs')
      .addMethod('GET')
  }
}
