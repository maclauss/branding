#!/bin/bash

declare project=maximeclauss-perso
declare environment=production
declare version=`git rev-parse --short HEAD`
declare application=`cat application.txt`

if [[ $# -eq 1 ]]
  then
    version=$1
fi

echo "Deploying ${application}:${version} to ${environment}"

gcloud compute instances delete ${application}

gcloud compute instances create ${application} \
    --source-instance-template ${application}-instance-template-${version} \
    --address branding-ipv4-address \
    --zone us-central1-a \
    --project ${project}
