# Terraform

Infrastructure as Code untuk TAVP.

## DigitalOcean Droplet

```hcl
resource "digitalocean_droplet" "tavp" {
  image  = "ubuntu-22-04-x64"
  name   = "tavp-server"
  region = "sgp1"
  size   = "s-1vcpu-1gb"
  
  ssh_keys = [var.ssh_key_id]
}
```

## AWS EC2

```hcl
resource "aws_instance" "tavp" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t3.micro"
  
  tags = {
    Name = "tavp-server"
  }
}
```

## Commands

```bash
terraform init
terraform plan
terraform apply
```

## Link

- [DigitalOcean](/deployment/digitalocean)
