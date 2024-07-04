//npm update actualiza las dependendencias, busca nuevas versiones etc

import {connect} from './helper/db/connect.js';
import { movis } from './js/module/movis.js';


let obj2 = new connect("Carlos")
onsole.log(obj2)
let mongo = new movis()
console.log(await mongo.getAllMovis());