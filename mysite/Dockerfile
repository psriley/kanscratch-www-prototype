FROM  python:3.8.10
ENV PYTHONUNBUFFERED=1
WORKDIR /mysite
RUN pip install django django-cors-headers
# copy from the current directory of the Dockerfile to /api in the image
COPY . .
EXPOSE 8000
