# todo-infra

## Notes

```sh
docker build -t shopping-api .
docker tag shopping-api:latest shopping-api:v1

# To run image in docker
docker run -p 3000:3000 shopping-api

# To Load local image in minikube
minikube image load shopping-api:v1

# To get images in minikube
minikube image ls

# To Create the deployment/service in Kubernetes
kubectl apply -f deploy.yml
kubectl apply -f service.yml

# To Do Port Forward
kubectl port-forward service/shopping-api-service 3000:3000

# To get service url from minikube
minikube service shopping-api-service


# To scale down a deployment -- for temporary stop or reduce the replicas
kubectl scale deployment <deployment-name> --replicas 0 -n <namespace>

# To delete the deployment
kubectl delete deployment <deployment-name> -n <namespace>

# To logs all pods logs -- https://kubernetes.io/docs/reference/kubectl/generated/kubectl_logs/
kubectl logs -f deployment/shopping-api-deployment  --all-pods=true --max-log-requests=11
```
