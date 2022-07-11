# Tweet To Blog

NodeJS, Express dan Mongodb(Mongoose)

Ubah tweet menjadi posting blog.
- Ini akan menyaring "retweet", "balas ke orang lain", dan "hanya tautan/media".
- Thread akan berubah menjadi single post

## Getting Started
```bash
git clone https://github.com/fajaragngn/tweetToBlog
cd tweetToBlog
```
```bash
npm install && npm i dotenv@8.2.0 && npm i ejs@3.1.6 && npm i express@4.17.1 && npm i mongoose@5.12.7 && npm i needle@2.6.0 && npm i slugify@1.5.0
```
```bash
brew install mongodb-community@5.0
```
if windows [Download](https://www.mongodb.com/try/download/community?tck=docs_server)
```bash
brew services start mongodb-community@5.0
```

## Usage

create .env file based on .env example, Get values from [Developer Twitter](https://developer.twitter.com/en)
```bash
mongo
```
```bash
node app.js
```

Open [http://localhost:3000](http://localhost:3000)

![gif](https://github.com/fajaragngn/tweetToBlog/screecord.gif)



## Usecase

- Orang yang ingin membuat blog dari twitter
- Untuk orang yang ingin mendokumentasikan tweet mereka sebagai blog (simpan secara permanen atau mungkin dapat memperbarui/menghapus nanti)


## Max Result
@services/TwitterService
changes MAX_RESULTS untuk nomor apa pun yang Anda inginkan untuk menconvert tweet untuk pertama kalinya