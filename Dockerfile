FROM nginx:1.25-alpine

LABEL version="1.0"
LABEL description="Imagem Nginx personalizada para o projeto Guitar Soul"

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*


COPY . .


EXPOSE 80


CMD ["nginx", "-g", "daemon off;"]