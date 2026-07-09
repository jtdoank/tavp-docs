# AWS

Deploy TAVP di Amazon Web Services.

## EC2

```bash
# Launch instance
aws ec2 run-instances \
  --image-id ami-0c55b159cbfafe1f0 \
  --instance-type t3.micro \
  --key-name tavp-key
```

## RDS

```bash
# Create database
aws rds create-db-instance \
  --db-instance-identifier tavp-db \
  --db-instance-class db.t3.micro \
  --engine mysql \
  --master-username admin \
  --master-user-password secret
```

## S3

```bash
# Create bucket
aws s3 mb s3://tavp-uploads
```

## Pricing

- EC2: ~$10/month
- RDS: ~$15/month
- S3: Pay per use

## Link

- [cPanel](/deployment/cpanel)
