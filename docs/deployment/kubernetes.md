# Kubernetes

Deploy TAVP dengan Kubernetes.

## Deployment

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: tavp-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: tavp
  template:
    metadata:
      labels:
        app: tavp
    spec:
      containers:
      - name: tavp
        image: tavp/app:latest
        ports:
        - containerPort: 80
```

## Service

```yaml
apiVersion: v1
kind: Service
metadata:
  name: tavp-service
spec:
  selector:
    app: tavp
  ports:
  - port: 80
  type: LoadBalancer
```

## Commands

```bash
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```

## Link

- [Terraform](/deployment/terraform)
