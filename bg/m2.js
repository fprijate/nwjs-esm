const path=require('path')
console.log('loading module m2...')

export default  function f2() {

    let xx=path.resolve(__dirname,'f2');
    console.log('m2/f2');
}