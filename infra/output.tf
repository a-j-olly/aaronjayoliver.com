output "vpc_id" {
  description = "The ID of the VPC"
  value       = module.vpc.vpc_id
}

output "db_endpoint" {
  description = "The endpoint of the Aurora PostgreSQL database"
  value       = module.aurora.db_endpoint
}