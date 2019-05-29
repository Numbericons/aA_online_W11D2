Array.prototype.uniq = function() {
    let unique_els = [];
    for (let i = 0; i < this.length; i++) {
        if (unique_els.indexOf(this[i]) === -1){
            unique_els.push(this[i]);
        }
    }
    return unique_els
};

Array.prototype.twoSum = function() {
    let position_pairs = [];
    for (let i = 0; i < this.length; i++) {
        for (let j = (i+1); i < this.length; i++) {
            if (this[i] + this[j] === 0) {
                position_pairs.push([i, j]);
            }
        }
    }
    return position_pairs
};

Array.prototype.transpose = function () {
    let transposed = [];

    for (let i=0; i<this[0].length; i++){
        sub_arr = [];
        for (let j=0; j<this.length; j++){
            // sub_arr.push(this[i][j]);
            sub_arr.push(this[j][i]);
        }
        transposed.push(sub_arr);
    }

    return transposed;
};

// this => arr

arr = [1,2,3,4,2,3];
arr2 = [1,2,3,4,-2,-3];
console.log('Two Sum: ');
console.log(arr2.twoSum());

console.log('Transpose: ');
console.log([ [1, 2],[3, 4]].transpose());
console.log([ [1, 2],[3, 4], [5, 6]].transpose());

    //[[1, 3], [2, 4]]
