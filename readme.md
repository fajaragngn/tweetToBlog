# Tweet To Blog [Node.js]

Ubah tweet menjadi posting blog.
- Ini akan menyaring "retweet", "balas ke orang lain", dan "hanya tautan/media".
- Thread akan berubah menjadi single post
- Techstack: NodeJS, Express dan Mongodb (Mongoose) sebagai database

## Getting Started
```bash
1. npm install && npm i dotenv@8.2.0 && npm i ejs@3.1.6 && npm i express@4.17.1 && npm i mongoose@5.12.7 && npm i needle@2.6.0 && npm i slugify@1.5.0
2. brew install mongodb-community@5.0
if windows
https://www.mongodb.com/try/download/community?tck=docs_server
3. brew services start mongodb-community@5.0
```

## Usage

```bash
1. run mongo
2. node app.js
3. create env file based on .env example (Get values from (developer twitter app)[https://developer.twitter.com/en] )
```

## Usecase

- Orang yang ingin membuat blog dari twitter
- Untuk orang yang ingin mendokumentasikan tweet mereka sebagai blog (simpan secara permanen atau mungkin dapat memperbarui/menghapus nanti)


## Max Result
@services/TwitterService
changes MAX_RESULTS untuk nomor apa pun yang Anda inginkan untuk menconvert tweet untuk pertama kalinya