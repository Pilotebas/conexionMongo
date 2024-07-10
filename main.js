import { movis } from './js/module/movis.js';


let movie = new movis();
console.log(await movie.getBlurayMoviesOver200Copies());