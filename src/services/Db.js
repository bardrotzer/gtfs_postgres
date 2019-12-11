import pgpromise from 'pg-promise';


let db;


const init = () => {
  const pgp = pgpromise();
  console.log(process.env.PGPORT);
  db = pgp({
    port: process.env.PGPORT,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
  });
  return db;
};


  export {
    db,
    init,

  }