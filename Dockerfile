# Use a imagem oficial do Nginx como base
FROM nginx:latest

# Copie os arquivos HTML para o diretório padrão do Nginx
COPY . /usr/share/nginx/html/
