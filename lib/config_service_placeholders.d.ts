import * as AWS from '../clients/all';
export abstract class ConfigurationServicePlaceholders {
  acm?: AWS.ACM.Types.ClientConfiguration;
  apigateway?: AWS.APIGateway.Types.ClientConfiguration;
  applicationautoscaling?: AWS.ApplicationAutoScaling.Types.ClientConfiguration;
  appstream?: AWS.AppStream.Types.ClientConfiguration;
  autoscaling?: AWS.AutoScaling.Types.ClientConfiguration;
  batch?: AWS.Batch.Types.ClientConfiguration;
  budgets?: AWS.Budgets.Types.ClientConfiguration;
  clouddirectory?: AWS.CloudDirectory.Types.ClientConfiguration;
  cloudformation?: AWS.CloudFormation.Types.ClientConfiguration;
  cloudfront?: AWS.CloudFront.Types.ClientConfiguration;
  cloudhsm?: AWS.CloudHSM.Types.ClientConfiguration;
  cloudsearch?: AWS.CloudSearch.Types.ClientConfiguration;
  cloudsearchdomain?: AWS.CloudSearchDomain.Types.ClientConfiguration;
  cloudtrail?: AWS.CloudTrail.Types.ClientConfiguration;
  cloudwatch?: AWS.CloudWatch.Types.ClientConfiguration;
  cloudwatchevents?: AWS.CloudWatchEvents.Types.ClientConfiguration;
  cloudwatchlogs?: AWS.CloudWatchLogs.Types.ClientConfiguration;
  codebuild?: AWS.CodeBuild.Types.ClientConfiguration;
  codecommit?: AWS.CodeCommit.Types.ClientConfiguration;
  codedeploy?: AWS.CodeDeploy.Types.ClientConfiguration;
  codepipeline?: AWS.CodePipeline.Types.ClientConfiguration;
  cognitoidentity?: AWS.CognitoIdentity.Types.ClientConfiguration;
  cognitoidentityserviceprovider?: AWS.CognitoIdentityServiceProvider.Types.ClientConfiguration;
  cognitosync?: AWS.CognitoSync.Types.ClientConfiguration;
  configservice?: AWS.ConfigService.Types.ClientConfiguration;
  cur?: AWS.CUR.Types.ClientConfiguration;
  datapipeline?: AWS.DataPipeline.Types.ClientConfiguration;
  devicefarm?: AWS.DeviceFarm.Types.ClientConfiguration;
  directconnect?: AWS.DirectConnect.Types.ClientConfiguration;
  directoryservice?: AWS.DirectoryService.Types.ClientConfiguration;
  discovery?: AWS.Discovery.Types.ClientConfiguration;
  dms?: AWS.DMS.Types.ClientConfiguration;
  dynamodb?: AWS.DynamoDB.Types.ClientConfiguration;
  dynamodbstreams?: AWS.DynamoDBStreams.Types.ClientConfiguration;
  ec2?: AWS.EC2.Types.ClientConfiguration;
  ecr?: AWS.ECR.Types.ClientConfiguration;
  ecs?: AWS.ECS.Types.ClientConfiguration;
  efs?: AWS.EFS.Types.ClientConfiguration;
  elasticache?: AWS.ElastiCache.Types.ClientConfiguration;
  elasticbeanstalk?: AWS.ElasticBeanstalk.Types.ClientConfiguration;
  elb?: AWS.ELB.Types.ClientConfiguration;
  elbv2?: AWS.ELBv2.Types.ClientConfiguration;
  emr?: AWS.EMR.Types.ClientConfiguration;
  es?: AWS.ES.Types.ClientConfiguration;
  elastictranscoder?: AWS.ElasticTranscoder.Types.ClientConfiguration;
  firehose?: AWS.Firehose.Types.ClientConfiguration;
  gamelift?: AWS.GameLift.Types.ClientConfiguration;
  glacier?: AWS.Glacier.Types.ClientConfiguration;
  health?: AWS.Health.Types.ClientConfiguration;
  iam?: AWS.IAM.Types.ClientConfiguration;
  importexport?: AWS.ImportExport.Types.ClientConfiguration;
  inspector?: AWS.Inspector.Types.ClientConfiguration;
  iot?: AWS.Iot.Types.ClientConfiguration;
  iotdata?: AWS.IotData.Types.ClientConfiguration;
  kinesis?: AWS.Kinesis.Types.ClientConfiguration;
  kinesisanalytics?: AWS.KinesisAnalytics.Types.ClientConfiguration;
  kms?: AWS.KMS.Types.ClientConfiguration;
  lambda?: AWS.Lambda.Types.ClientConfiguration;
  lexruntime?: AWS.LexRuntime.Types.ClientConfiguration;
  lightsail?: AWS.Lightsail.Types.ClientConfiguration;
  machinelearning?: AWS.MachineLearning.Types.ClientConfiguration;
  marketplacecommerceanalytics?: AWS.MarketplaceCommerceAnalytics.Types.ClientConfiguration;
  marketplacemetering?: AWS.MarketplaceMetering.Types.ClientConfiguration;
  mturk?: AWS.MTurk.Types.ClientConfiguration;
  mobileanalytics?: AWS.MobileAnalytics.Types.ClientConfiguration;
  opsworks?: AWS.OpsWorks.Types.ClientConfiguration;
  opsworkscm?: AWS.OpsWorksCM.Types.ClientConfiguration;
  organizations?: AWS.Organizations.Types.ClientConfiguration;
  pinpoint?: AWS.Pinpoint.Types.ClientConfiguration;
  polly?: AWS.Polly.Types.ClientConfiguration;
  rds?: AWS.RDS.Types.ClientConfiguration;
  redshift?: AWS.Redshift.Types.ClientConfiguration;
  rekognition?: AWS.Rekognition.Types.ClientConfiguration;
  resourcegroupstaggingapi?: AWS.ResourceGroupsTaggingAPI.Types.ClientConfiguration;
  route53?: AWS.Route53.Types.ClientConfiguration;
  route53domains?: AWS.Route53Domains.Types.ClientConfiguration;
  s3?: AWS.S3.Types.ClientConfiguration;
  servicecatalog?: AWS.ServiceCatalog.Types.ClientConfiguration;
  ses?: AWS.SES.Types.ClientConfiguration;
  shield?: AWS.Shield.Types.ClientConfiguration;
  simpledb?: AWS.SimpleDB.Types.ClientConfiguration;
  sms?: AWS.SMS.Types.ClientConfiguration;
  snowball?: AWS.Snowball.Types.ClientConfiguration;
  sns?: AWS.SNS.Types.ClientConfiguration;
  sqs?: AWS.SQS.Types.ClientConfiguration;
  ssm?: AWS.SSM.Types.ClientConfiguration;
  storagegateway?: AWS.StorageGateway.Types.ClientConfiguration;
  stepfunctions?: AWS.StepFunctions.Types.ClientConfiguration;
  sts?: AWS.STS.Types.ClientConfiguration;
  support?: AWS.Support.Types.ClientConfiguration;
  swf?: AWS.SWF.Types.ClientConfiguration;
  xray?: AWS.XRay.Types.ClientConfiguration;
  waf?: AWS.WAF.Types.ClientConfiguration;
  wafregional?: AWS.WAFRegional.Types.ClientConfiguration;
  workdocs?: AWS.WorkDocs.Types.ClientConfiguration;
  workspaces?: AWS.WorkSpaces.Types.ClientConfiguration;
  codestar?: AWS.CodeStar.Types.ClientConfiguration;
  lexmodelbuildingservice?: AWS.LexModelBuildingService.Types.ClientConfiguration;
  marketplaceentitlementservice?: AWS.MarketplaceEntitlementService.Types.ClientConfiguration;
  athena?: AWS.Athena.Types.ClientConfiguration;
  greengrass?: AWS.Greengrass.Types.ClientConfiguration;
  dax?: AWS.DAX.Types.ClientConfiguration;
  migrationhub?: AWS.MigrationHub.Types.ClientConfiguration;
  cloudhsmv2?: AWS.CloudHSMV2.Types.ClientConfiguration;
  glue?: AWS.Glue.Types.ClientConfiguration;
  mobile?: AWS.Mobile.Types.ClientConfiguration;
  pricing?: AWS.Pricing.Types.ClientConfiguration;
  costexplorer?: AWS.CostExplorer.Types.ClientConfiguration;
  mediaconvert?: AWS.MediaConvert.Types.ClientConfiguration;
  medialive?: AWS.MediaLive.Types.ClientConfiguration;
  mediapackage?: AWS.MediaPackage.Types.ClientConfiguration;
  mediastore?: AWS.MediaStore.Types.ClientConfiguration;
  mediastoredata?: AWS.MediaStoreData.Types.ClientConfiguration;
  appsync?: AWS.AppSync.Types.ClientConfiguration;
  guardduty?: AWS.GuardDuty.Types.ClientConfiguration;
  mq?: AWS.MQ.Types.ClientConfiguration;
  comprehend?: AWS.Comprehend.Types.ClientConfiguration;
  iotjobsdataplane?: AWS.IoTJobsDataPlane.Types.ClientConfiguration;
  kinesisvideoarchivedmedia?: AWS.KinesisVideoArchivedMedia.Types.ClientConfiguration;
  kinesisvideomedia?: AWS.KinesisVideoMedia.Types.ClientConfiguration;
  kinesisvideo?: AWS.KinesisVideo.Types.ClientConfiguration;
  sagemakerruntime?: AWS.SageMakerRuntime.Types.ClientConfiguration;
  sagemaker?: AWS.SageMaker.Types.ClientConfiguration;
  translate?: AWS.Translate.Types.ClientConfiguration;
  resourcegroups?: AWS.ResourceGroups.Types.ClientConfiguration;
  alexaforbusiness?: AWS.AlexaForBusiness.Types.ClientConfiguration;
  cloud9?: AWS.Cloud9.Types.ClientConfiguration;
  serverlessapplicationrepository?: AWS.ServerlessApplicationRepository.Types.ClientConfiguration;
}
export interface ConfigurationServiceApiVersions {
  acm?: AWS.ACM.Types.apiVersion;
  apigateway?: AWS.APIGateway.Types.apiVersion;
  applicationautoscaling?: AWS.ApplicationAutoScaling.Types.apiVersion;
  appstream?: AWS.AppStream.Types.apiVersion;
  autoscaling?: AWS.AutoScaling.Types.apiVersion;
  batch?: AWS.Batch.Types.apiVersion;
  budgets?: AWS.Budgets.Types.apiVersion;
  clouddirectory?: AWS.CloudDirectory.Types.apiVersion;
  cloudformation?: AWS.CloudFormation.Types.apiVersion;
  cloudfront?: AWS.CloudFront.Types.apiVersion;
  cloudhsm?: AWS.CloudHSM.Types.apiVersion;
  cloudsearch?: AWS.CloudSearch.Types.apiVersion;
  cloudsearchdomain?: AWS.CloudSearchDomain.Types.apiVersion;
  cloudtrail?: AWS.CloudTrail.Types.apiVersion;
  cloudwatch?: AWS.CloudWatch.Types.apiVersion;
  cloudwatchevents?: AWS.CloudWatchEvents.Types.apiVersion;
  cloudwatchlogs?: AWS.CloudWatchLogs.Types.apiVersion;
  codebuild?: AWS.CodeBuild.Types.apiVersion;
  codecommit?: AWS.CodeCommit.Types.apiVersion;
  codedeploy?: AWS.CodeDeploy.Types.apiVersion;
  codepipeline?: AWS.CodePipeline.Types.apiVersion;
  cognitoidentity?: AWS.CognitoIdentity.Types.apiVersion;
  cognitoidentityserviceprovider?: AWS.CognitoIdentityServiceProvider.Types.apiVersion;
  cognitosync?: AWS.CognitoSync.Types.apiVersion;
  configservice?: AWS.ConfigService.Types.apiVersion;
  cur?: AWS.CUR.Types.apiVersion;
  datapipeline?: AWS.DataPipeline.Types.apiVersion;
  devicefarm?: AWS.DeviceFarm.Types.apiVersion;
  directconnect?: AWS.DirectConnect.Types.apiVersion;
  directoryservice?: AWS.DirectoryService.Types.apiVersion;
  discovery?: AWS.Discovery.Types.apiVersion;
  dms?: AWS.DMS.Types.apiVersion;
  dynamodb?: AWS.DynamoDB.Types.apiVersion;
  dynamodbstreams?: AWS.DynamoDBStreams.Types.apiVersion;
  ec2?: AWS.EC2.Types.apiVersion;
  ecr?: AWS.ECR.Types.apiVersion;
  ecs?: AWS.ECS.Types.apiVersion;
  efs?: AWS.EFS.Types.apiVersion;
  elasticache?: AWS.ElastiCache.Types.apiVersion;
  elasticbeanstalk?: AWS.ElasticBeanstalk.Types.apiVersion;
  elb?: AWS.ELB.Types.apiVersion;
  elbv2?: AWS.ELBv2.Types.apiVersion;
  emr?: AWS.EMR.Types.apiVersion;
  es?: AWS.ES.Types.apiVersion;
  elastictranscoder?: AWS.ElasticTranscoder.Types.apiVersion;
  firehose?: AWS.Firehose.Types.apiVersion;
  gamelift?: AWS.GameLift.Types.apiVersion;
  glacier?: AWS.Glacier.Types.apiVersion;
  health?: AWS.Health.Types.apiVersion;
  iam?: AWS.IAM.Types.apiVersion;
  importexport?: AWS.ImportExport.Types.apiVersion;
  inspector?: AWS.Inspector.Types.apiVersion;
  iot?: AWS.Iot.Types.apiVersion;
  iotdata?: AWS.IotData.Types.apiVersion;
  kinesis?: AWS.Kinesis.Types.apiVersion;
  kinesisanalytics?: AWS.KinesisAnalytics.Types.apiVersion;
  kms?: AWS.KMS.Types.apiVersion;
  lambda?: AWS.Lambda.Types.apiVersion;
  lexruntime?: AWS.LexRuntime.Types.apiVersion;
  lightsail?: AWS.Lightsail.Types.apiVersion;
  machinelearning?: AWS.MachineLearning.Types.apiVersion;
  marketplacecommerceanalytics?: AWS.MarketplaceCommerceAnalytics.Types.apiVersion;
  marketplacemetering?: AWS.MarketplaceMetering.Types.apiVersion;
  mturk?: AWS.MTurk.Types.apiVersion;
  mobileanalytics?: AWS.MobileAnalytics.Types.apiVersion;
  opsworks?: AWS.OpsWorks.Types.apiVersion;
  opsworkscm?: AWS.OpsWorksCM.Types.apiVersion;
  organizations?: AWS.Organizations.Types.apiVersion;
  pinpoint?: AWS.Pinpoint.Types.apiVersion;
  polly?: AWS.Polly.Types.apiVersion;
  rds?: AWS.RDS.Types.apiVersion;
  redshift?: AWS.Redshift.Types.apiVersion;
  rekognition?: AWS.Rekognition.Types.apiVersion;
  resourcegroupstaggingapi?: AWS.ResourceGroupsTaggingAPI.Types.apiVersion;
  route53?: AWS.Route53.Types.apiVersion;
  route53domains?: AWS.Route53Domains.Types.apiVersion;
  s3?: AWS.S3.Types.apiVersion;
  servicecatalog?: AWS.ServiceCatalog.Types.apiVersion;
  ses?: AWS.SES.Types.apiVersion;
  shield?: AWS.Shield.Types.apiVersion;
  simpledb?: AWS.SimpleDB.Types.apiVersion;
  sms?: AWS.SMS.Types.apiVersion;
  snowball?: AWS.Snowball.Types.apiVersion;
  sns?: AWS.SNS.Types.apiVersion;
  sqs?: AWS.SQS.Types.apiVersion;
  ssm?: AWS.SSM.Types.apiVersion;
  storagegateway?: AWS.StorageGateway.Types.apiVersion;
  stepfunctions?: AWS.StepFunctions.Types.apiVersion;
  sts?: AWS.STS.Types.apiVersion;
  support?: AWS.Support.Types.apiVersion;
  swf?: AWS.SWF.Types.apiVersion;
  xray?: AWS.XRay.Types.apiVersion;
  waf?: AWS.WAF.Types.apiVersion;
  wafregional?: AWS.WAFRegional.Types.apiVersion;
  workdocs?: AWS.WorkDocs.Types.apiVersion;
  workspaces?: AWS.WorkSpaces.Types.apiVersion;
  codestar?: AWS.CodeStar.Types.apiVersion;
  lexmodelbuildingservice?: AWS.LexModelBuildingService.Types.apiVersion;
  marketplaceentitlementservice?: AWS.MarketplaceEntitlementService.Types.apiVersion;
  athena?: AWS.Athena.Types.apiVersion;
  greengrass?: AWS.Greengrass.Types.apiVersion;
  dax?: AWS.DAX.Types.apiVersion;
  migrationhub?: AWS.MigrationHub.Types.apiVersion;
  cloudhsmv2?: AWS.CloudHSMV2.Types.apiVersion;
  glue?: AWS.Glue.Types.apiVersion;
  mobile?: AWS.Mobile.Types.apiVersion;
  pricing?: AWS.Pricing.Types.apiVersion;
  costexplorer?: AWS.CostExplorer.Types.apiVersion;
  mediaconvert?: AWS.MediaConvert.Types.apiVersion;
  medialive?: AWS.MediaLive.Types.apiVersion;
  mediapackage?: AWS.MediaPackage.Types.apiVersion;
  mediastore?: AWS.MediaStore.Types.apiVersion;
  mediastoredata?: AWS.MediaStoreData.Types.apiVersion;
  appsync?: AWS.AppSync.Types.apiVersion;
  guardduty?: AWS.GuardDuty.Types.apiVersion;
  mq?: AWS.MQ.Types.apiVersion;
  comprehend?: AWS.Comprehend.Types.apiVersion;
  iotjobsdataplane?: AWS.IoTJobsDataPlane.Types.apiVersion;
  kinesisvideoarchivedmedia?: AWS.KinesisVideoArchivedMedia.Types.apiVersion;
  kinesisvideomedia?: AWS.KinesisVideoMedia.Types.apiVersion;
  kinesisvideo?: AWS.KinesisVideo.Types.apiVersion;
  sagemakerruntime?: AWS.SageMakerRuntime.Types.apiVersion;
  sagemaker?: AWS.SageMaker.Types.apiVersion;
  translate?: AWS.Translate.Types.apiVersion;
  resourcegroups?: AWS.ResourceGroups.Types.apiVersion;
  alexaforbusiness?: AWS.AlexaForBusiness.Types.apiVersion;
  cloud9?: AWS.Cloud9.Types.apiVersion;
  serverlessapplicationrepository?: AWS.ServerlessApplicationRepository.Types.apiVersion;
}
