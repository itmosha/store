#!/bin/sh

python manage.py makemigrations
python manage.py migrate
python manage.py migrate --run-syncdb
python -m uvicorn --host 0.0.0.0 store_backend.asgi:application
