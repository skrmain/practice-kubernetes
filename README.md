# todo-infra

## Notes

```sh
# To run image in docker
docker run -p 8000:8000 --env-file .env --rm skrmain/todo-api

docker run -it --rm node:20-alpine sh

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

## Minikube commands

```sh
minikube start
minikube stop
minikube delete
minikube status
minikube node add

# To Load local image in minikube
minikube image load shopping-api:v1

# To get images in minikube
minikube image ls
```
