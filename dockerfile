
# ETAPA 1: App Angular

# Paso 1: Uso node alpine (muy liviano)
FROM node:alpine as build

# Paso 2: seteo el directorio de trabajo
WORKDIR /usr/local/app

# Paso 3: copio la app al directorio de trabajo
COPY ./ /usr/local/app/

# Paso 4: instalar dependencias
RUN npm install

# Paso 5: Transpilar la app
RUN npm run build


#ETAPA 2: nginx

# Paso 1: Uso nginx alpine
FROM nginx:stable-alpine

# Paso 2: Copio la app transpilada al directorio de nginx
COPY --from=build /usr/local/app/dist /usr/share/nginx/html

# Paso 3: Exponer puerto 80 de NGINX
EXPOSE 80
