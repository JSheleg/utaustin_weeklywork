const Benchmark = require('benchmark');
const {linear, recursive} = require('./fibonacci');

// const numbers = [];
// for (let i = 0; i < 40000; i++) {
//     numbers.push(Math.floor(Math.random() * 10000) + 1);
// }

// const num = Math.floor(Math.random()*10 +1);

const num = 10;

const suite = new Benchmark.Suite();

suite
    .add('linear approach', function(){
        linear(num);
    })
    .add('recursive', function(){
        recursive(num);
    })
    .on('complete', function(){
        this.forEach(result => console.log(`${result.name} averaged ${result.stats.mean*1000} milliseconds.`));
    })
    .run();  