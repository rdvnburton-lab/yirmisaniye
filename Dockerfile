# --- 1. AŞAMA: BACKEND BUILDER ---
# Backend bağımlılıklarını ve kaynak kodunu hazırlar.
FROM node:20-alpine AS backend-builder

WORKDIR /usr/src/app
COPY backend/package*.json ./
RUN npm install --omit=dev
COPY backend/ ./

# --- 2. AŞAMA: FRONTEND BUILDER ---
# Angular projesini derler ve statik dosyaları oluşturur.
FROM node:20-alpine AS frontend-builder

WORKDIR /usr/src/app
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./

# Angular projesini build et. Çıktı /usr/src/app/dist/yirmisaniye/ klasörüne oluşacaktır.
# Not: 'yirmisaniye' kısmı frontend/angular.json dosyanızdaki proje adıyla eşleşmelidir.
RUN npm run build

# --- 3. AŞAMA: PRODUCTION ---
# Son ve küçük imajı oluşturur.
FROM node:20-alpine

WORKDIR /usr/src/app

# Backend dosyalarını backend-builder'dan kopyala
COPY --from=backend-builder /usr/src/app/node_modules ./node_modules
COPY --from=backend-builder /usr/src/app/package*.json ./
COPY --from=backend-builder /usr/src/app/src ./src

# Derlenmiş frontend dosyalarını frontend-builder'dan kopyala
# Bu dosyaları backend'in sunacağı 'public' klasörüne taşıyoruz.
COPY --from=frontend-builder /usr/src/app/dist/yirmisaniye ./public

# Güvenlik için root yerine node kullanıcısına geç
USER node

# Uygulamanın çalışacağı port'u belirt
EXPOSE 3000

# Uygulamayı başlat
CMD [ "node", "src/server.js" ]
