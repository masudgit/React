import {createStore} from 'redux' //es-6 syntax
import cakeReducer from './cakes/cakeReducer'

const store = createStore(cakeReducer);

export default store
