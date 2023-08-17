FROM node:alpine
WORKDIR /app
COPY . /app/
RUN npm install 
ENV NEXT_PUBLIC_MONGO_URI=mongodb+srv://Jatin:Suntu%401008@cluster0.13xzk.mongodb.net/?retryWrites=true&w=majority
ENV NEXT_PUBLIC_CRYPTO_SECRET=secret1008
EXPOSE 3000
CMD ["npm","run","dev"]