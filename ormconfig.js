console.log('processe.env.DATABSE_URL : ', process.env.DATABASE_URL)
module.exports = {
  "url": process.env.DATABASE_URL,
  "type": "postgres",
  "port": 5433,
  "entities": [
    "dist/models/**/*.js"
  ],
  "migrations": [
    "dist/database/migrations/**/*.js"
  ],
  "cli": {
    "migrationsDir": [
      "src/migrations/"
    ],
    "entitiesDir": "src/models"
  }
}