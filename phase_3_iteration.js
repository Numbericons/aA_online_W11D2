Array.prototype.bubbleSort = function(){
    let isSorted = false;

    while (!isSorted){
        isSorted = true;
        for (let i=0; i<this.length-1; i++){
            if (this[i] > this[i+1]){
                let temp = this[i];
                this[i] = this[i+1];
                this[i+1] = temp;
                isSorted = false;
            }
        }
    }
    return this;
};

console.log('Bubble Sort: ');
console.log([5,3,2,1,4].bubbleSort());

String.prototype.substrings = function() {
    let sub_str_arr = [];
    for (let i=0; i<this.length;i++){
        for (let j=i+1; j <= this.length; j++) {
            sub_str_arr.push(this.slice(i, j));
        } 
    }
    return sub_str_arr;
}

console.log('Substrings: ');
console.log("cat".substrings());