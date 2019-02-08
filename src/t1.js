const path=require('path');
console.log('module f1');

export function f1() {
    console.log('src/f1');
    console.log(`${path.resolve(__dirname,'f1')}`);
	return 'src/f1'
}