# Train Schedules
This tool will digest transport data in a postgres database.

# Installation

The trans schedules is running on ``node express` using `yarn` as package manager. The database used is a `postgres` databse, I have not cared to write any abstraction around this database, but feel free. 

## repo and code

To iinitialise the repo run.

```bash
  # in the current repository
  yarn install
```

## database

The database structure is in `files/db_structure.sql` just import it. Data is presently in development (that is why I wrote this code), so it is not included. Anyways, the databse mimics the structure of gtfs files, just import some text files and off you go.

## environment

Connection to database and vital paths are fetched from an `.env` file. I have included a `.env.default` file. Copy it over and substitute the values with your own

```bash
  # in the current repository
  cp .env.default .env
```

# running

Once dependencies are added and database is set up.

```bash
  # in the current repository

  # to run the code in debug mode
  yarn serve

  # build for production
  # this will build the files to ./dist
  # I use pm2 to manage the process and keep it running
  yarn build
```
  
Happy coding

