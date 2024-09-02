module "vpc" {
  source              = "./modules/vpc"
  aws_region          = var.aws_region
  vpc_cidr            = var.vpc_cidr
  private_subnet_cidrs = var.private_subnet_cidrs
}

module "aurora" {
  source            = "./modules/aurora"
  db_name           = var.db_name
  db_username       = var.db_username
  db_password       = var.db_password
  vpc_id            = module.vpc.vpc_id
  private_subnet_ids = module.vpc.private_subnet_ids
  lambda_rds_sg_id = module.vpc.lambda_rds_sg_id
}

module "lambda" {
  source = "./modules/lambda"
  database_url           = module.aurora.database_url
}

module "api_gateway" {
  source                        = "./modules/api_gateway"
  graphql_api_lambda_invoke_arn = module.lambda.graphql_api_lambda_invoke_arn
  graphql_api_lambda_name       = module.lambda.graphql_api_lambda_name
}