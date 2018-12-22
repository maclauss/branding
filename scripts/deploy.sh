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

gcloud beta compute instance-groups managed rolling-action start-update ${application}-instance-group \
    --version template=${application}-instance-template-${version} \
    --max-surge 1 \
    --zone us-central1-a \
    --project ${project}
