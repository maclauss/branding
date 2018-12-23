#!/bin/bash

declare project=maximeclauss-perso
declare version=`git rev-parse --short HEAD`
declare application=`cat application.txt`

if [[ $# -eq 1 ]]
  then
    version=$1
fi

# create health check
gcloud compute http-health-checks create ${application}-health-check \
    --check-interval="10s" \
    --healthy-threshold=2 \
    --unhealthy-threshold=3 \
    --port=80 \
    --request-path="/health" \
    --timeout="5s" \
    --project ${project}

# create instance group
gcloud compute instance-groups managed create ${application}-instance-group \
    --base-instance-name ${application}-instance-group \
    --size 1 \
    --template ${application}-instance-template-${version} \
    --zone us-central1-a \
    --project ${project}

gcloud compute instance-groups managed set-autoscaling ${application}-instance-group \
    --min-num-replicas 1 \
    --max-num-replicas 2 \
    --target-cpu-utilization 0.6 \
    --cool-down-period 90 \
    --zone us-central1-a \
    --project ${project}

gcloud beta compute instance-groups managed set-autohealing ${application}-instance-group \
    --initial-delay 240 \
    --http-health-check ${application}-health-check \
    --zone us-central1-a \
    --project ${project}

# create backend service
gcloud compute backend-services create ${application}-backend-service \
    --protocol http \
    --timeout 90s \
    --connection-draining-timeout 300s \
    --http-health-checks ${application}-health-check \
    --global \
    --project ${project}

# add instances to the backend service
gcloud compute backend-services add-backend ${application}-backend-service \
    --balancing-mode UTILIZATION \
    --max-utilization 0.8 \
    --capacity-scaler 1 \
    --instance-group ${application}-instance-group \
    --instance-group-zone us-central1-a \
    --global \
    --project ${project}

# Set named ports
gcloud compute instance-groups managed set-named-ports ${application}-instance-group \
    --named-ports http:80 \
    --zone us-central1-a \
    --project ${project}

# create ip addresses
gcloud compute addresses create ${application}-ipv4-address \
    --ip-version=IPV4 \
    --network-tier STANDARD \
    --region us-central1 \
    --project ${project}

# create url-maps
gcloud compute url-maps create ${application}-url-map \
    --default-service ${application}-backend-service \
    --project ${project}

# create ssl certificate
gcloud compute ssl-certificates create ${application}-ssl-certificate \
    --certificate certificates/certificate.crt \
    --private-key certificates/private.key

# create https proxy
gcloud compute target-https-proxies create ${application}-https-proxy \
    --url-map ${application}-url-map \
    --ssl-certificates ${application}-ssl-certificate \
    --project ${project}

# create forwarding rules
gcloud compute forwarding-rules create ${application}-https-cr-rule \
    --address ${application}-ipv4-address \
    --target-https-proxy ${application}-https-proxy \
    --ports 443 \
    --region us-central1 \
    --project ${project}
