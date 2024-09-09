FROM node:20-alpine3.18

WORKDIR /app

COPY package*.json ./

RUN npm install
ENV VITE_API_META_URL=http://localhost:5000

COPY . .

RUN npm run build

EXPOSE 4173

CMD npm run preview