
import { getName } from '@/validators/stops';
import baseValidator from '@/validators/baseValidator';


export default (path: string) => {
  switch(path) {
    case '/stops/get/name':
      return getName;
    default: 
      console.log(`no validation added for ${path}`);
    return baseValidator;
  }
} 