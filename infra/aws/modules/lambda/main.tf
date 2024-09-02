data "archive_file" "graphql_api_code_archive" {
  type        = "zip"
  source_file = "./dist/graphql_api/index.js"
  output_path = "./dist/graphql_api/graphql_api.zip"
}

resource "aws_lambda_function" "graphql_api_lambda" {
  function_name = "graphql-api"
  handler       = "index.handler"
  runtime       = "nodejs20.x"
  role = aws_iam_role.graphql_api_exec_role.arn
  memory_size = 128
  timeout    = 10
  
  source_code_hash = data.archive_file.graphql_api_code_archive.output_base64sha256
  filename         = data.archive_file.graphql_api_code_archive.output_path

  environment {
    variables = {
      DB_URL    = var.database_url
    }
  }
}

resource "aws_iam_role" "graphql_api_exec_role" {
  name = "GraphQLAPIExecRole"
  assume_role_policy = file("./modules/lambda/iam_policies/LambdaAssumeRolePolicy.json")
}

resource "aws_iam_role_policy_attachment" "graphql_api_attach" {
  role       = aws_iam_role.graphql_api_exec_role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}