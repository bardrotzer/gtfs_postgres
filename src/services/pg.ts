import pgpromise from 'pg-promise';

const pgp = pgpromise();

type User = {
  user: any;
  host: any;
  database: any;
  password: any;
  port: any;
}

const config = <User>{};
config.user = process.env.PGUSER;
config.host = process.env.PGHOST;
config.database = process.env.PGDATABASE;
config.password = process.env.PGPASSWORD;
config.port = process.env.PGPORT;

export default pgp(config);