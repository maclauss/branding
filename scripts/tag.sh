#!/bin/bash

declare project=maximeclauss-perso
declare version=`git rev-parse --short HEAD`
declare application=`cat application.txt`
declare environment=production

echo "Tagging ${application}:${version} to ${environment}"

./gradlew clean
./gradlew build
docker build -t ${application}:${version} .
docker tag ${application}:${version} gcr.io/${project}/${application}:${version}
docker push gcr.io/${project}/${application}:${version}

gcloud beta compute instance-templates create-with-container ${application}-instance-template-${version} \
    --machine-type g1-small \
    --tags allow-health-check \
    --container-image gcr.io/${project}/${application}:${version} \
    --container-env environment=${environment} \
    --project ${project}
