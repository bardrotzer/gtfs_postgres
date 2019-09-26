import { db } from '@/services/Db';

const search = (request) => {
  let param;
  if (request.exact) {
    param = request.query;
  } else {
    param = `${request.query}`
  }
  return db.any('SELECT * FROM stops WHERE stop_name % $1', [param])
  .then((data) => {
     return data;
  })
  .catch((error) => {
      console.error(error);
  });
  // return new Promise((resolve, reject), {
  //   return {
  //     stops: 'Gothenburg'
  //   };
  // }

};

const get = (id) => {
  return id;
};

export default {
  search,

}