# TrendGame
> Only the trendiest. Search Google Trends for any topic of interest and see news articles corresponding to spikes in interest.

## Team

- [Alex](https://github.com/aseiden)
- [Eric](https://github.com/epan)
- [Fu Fei](https://github.com/dufufeisdu)
- [Prateek](https://github.com/BhattPrateek)

## Usage
> Go to URL: [https://trend-game.herokuapp.com/](https://trend-game.herokuapp.com/)

## Requirements

- Node
- NPM
- API key for [Aylien News API](https://newsapi.aylien.com/)
- Postgres

## Development

### Installing dependencies

From the root directory:

`npm install`

### Initializing the database

Deployed Heroku Postgres DB:

1. Provision your app with a Heroku Postgres db.
2. Find the db's url in the config vars for your app and copy it.
3. Paste it in setupDatabse.js as per the instructions in that file.
4. Use node to run setupDatabase.js.  If you get 3 console log statements confirming table creation, you're good to go!

Local DB:

1. Install a local version of PostgreSQL.  Recommend using brew to manage installation.
2. Create a db in your local PostgreSQL server cluster.
3. Follow the instructions in dbLocalConnection.DUMMY.js and populate it with the information for the db/user.
4. Edit setupDatabase.js to point at your local DB.  NOTE: The instructions and structure in this file are intended for populating deployed Heroku Postgres dbs with the schema.  For a local DB, just point the connection at your local db by setting the connection in require('knex') to your local db's information.  You can find this information in dbLocalConnection.js (assuming you've made it as per step 3).
5. Use node to run setupDatabase.js.  If you get 3 console log statements confirming table creation, you're good to go!

### Running locally

From the root directory:

1. In one terminal window, run `> npm run dev`
2. In another terminal window, run `> npm run start:watch`
3. go to [http://127.0.0.1:8080](http://127.0.0.1:8080)
4. Don't forget you'll need an [Aylien News API key](https://newsapi.aylien.com/)

### Roadmap

View [project roadmap](https://trello.com/b/BjnjAi3J/roadmap)

View [app plan](https://docs.google.com/document/d/1nDF9P4ReoH7WA3XBcZ-r-DGHGFVo0wpsa2f1SZEy1HU/edit?usp=sharing) (includes schemas and architecture diagrams, etc)

## Contributing
See [CONTRIBUTING.md](https://github.com/TrendGame/TrendGame/blob/master/CONTRIBUTING.md) for contribution guidelines.
