# Node.js'in Long-Term Support (LTS) sürümünü temel al
FROM node:18-alpine

# Uygulama için çalışma dizini oluştur
WORKDIR /usr/src/app

# package.json ve package-lock.json dosyalarını kopyala
COPY backend/package*.json ./

# Bağımlılıkları yükle
RUN npm install

# Uygulama kaynak kodunu kopyala
COPY backend/ .

# Uygulamanın çalışacağı port'u belirt
EXPOSE 3000

# Uygulamayı başlat
CMD [ "node", "src/server.js" ]