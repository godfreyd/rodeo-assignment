#!/bin/sh

# export NGINXPROXY

envsubst '$NODE_HOST' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf

exec "$@"

