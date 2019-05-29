Array.prototype.myEach = function (cb) {
    for(let i=0; i<this.length;i++) {
        cb(this[i]);
    }
};

const each_arr = [1,2,3,4,5];
const cb = (el) => {
    console.log(el);
}

console.log('My Each: ');
console.log(each_arr.myEach(cb));
console.log(each_arr.myEach(cb));



Array.prototype.myMap = function(cb2){
    results = [];
    // for (let i=0; i<this.length; i++){
    //     results.push(cb2(this[i]));
    // }
    this.myEach((el) => results.push(cb2(el)) );
    return results;
};

const cb2 = function(el){
    return el*2;
}

console.log('My Map: ');
console.log(each_arr.myMap(cb2));

Array.prototype.myReduce = function (cb2, initialValue) {
    // let duplicate = this.dup
    let start = 0;
    if (initialValue === undefined){
        initialValue = this[0];
        start = 1;
        // initialValue = this.shift;
    }
    accumulator = initialValue;
    // for (let i=start;i<this.length;i++) {
    //     accumulator += cb2(this[i]);
    // }
    this.slice(start).myEach((el) => accumulator += cb2(el))
    return accumulator;
}

const cb3 = function(el){
    return el;
}
console.log('My Reduce: ');
console.log([1, 2, 3].myReduce(cb3));
console.log([1,2,3].myReduce(cb2));