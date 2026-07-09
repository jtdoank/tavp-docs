# DigitalOcean

Deploy TAVP di DigitalOcean.

## Options

### 1. Droplet

VPS untuk full control.

```bash
# Create droplet via CLI
doctl compute droplet create tavp-server \
  --image ubuntu-22-04-x64 \
  --size s-1vcpu-1gb \
  --region sgp1
```

### 2. App Platform

PaaS, no server management.

```yaml
# .do/app.yaml
name: tavp
services:
- name: web
  build:
    dockerfile: Dockerfile
  instance_size: basic-xxs
  instance_count: 1
```

### 3. Managed Database

MySQL managed by DigitalOcean.

```bash
doctl databases create tavp-db --engine mysql --size db-s-1vcpu-1gb
```

## Pricing

- Droplet: $5/month
- App Platform: $5/month
- Managed Database: $15/month

## Link

- [AWS](/deployment/aws)
