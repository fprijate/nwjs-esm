import {f3} from './t3.js';
console.log('module src/f2');
f3();

export function f2() {
    console.log('src/f2');
	return 'src/f2'
}