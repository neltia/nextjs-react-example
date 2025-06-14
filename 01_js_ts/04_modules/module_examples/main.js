// ESM 사용 시
import { add } from '../es6_modules/math.js';
console.log(add(1, 2));

// CommonJS 사용 시
const math = require('../commonjs_modules/math.js');
console.log(math.add(3, 4));