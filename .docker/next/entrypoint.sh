#!/bin/sh

if [ "$APP_ENV" = "development" ]; then
    pnpm install
fi

exec "$@"