// import something here
import {
  configure,
  extend,
  ValidationObserver,
  ValidationProvider
} from 'vee-validate'

import { 
  required, 
  email, 
  max, 
  min, 
  numeric, 
  is_not, 
  confirmed, 
  min_value, 
  max_value 
} from 'vee-validate/dist/rules';
// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
export default async ({ app, router, Vue }) => {
  // something to do
  Vue.component('ValidationProvider', ValidationProvider)
  Vue.component('ValidationObserver', ValidationObserver)
}
// Add build-in rules
// extend('required', required)
extend('required', {
  ...required,
  message: 'This field is required'
});
extend('email', email)