function range(start, end){
    
    if (start === end) {
        return [];
    }

    let sub_range = range(start, end-1);
    sub_range.push(end-1);
    return sub_range;
}

console.log("Range: ");
console.log(range(1, 5))
// [1,2,3,4]

function sumRec(arr){
    if (arr.length === 0) {
        return 0;
    }

    return arr[0] + sumRec(arr.slice(1))
    //[5].slice(1)
}

console.log("sumRec: ");
console.log(sumRec([1,2,3,4,5]))

function exponent(base, exp){
    if (exp === 0){
        return 1;
    }
    return base * exponent(base, exp-1);
}

console.log("exponent: ");
console.log(exponent(5, 2))

function exponent2(base, exp){
    if (exp === 0){
        return 1;
    }
    if (exp % 2 === 0){
        return exponent2(base,exp/2) ** 2;
    } else{
        return base * exponent2(base, (exp - 1) / 2) ** 2;
    }
}

console.log("exponent2: ");
console.log(exponent2(5, 3))

function fibonnaci_of(n){
    let fibs = [0, 1]
    while (fibs.length < n){
        fibs.push(fibs[fibs.length-1] + fibs[fibs.length-2]);
    }
    return fibs[n-1];
}

function fibonacci(n){

    if (n === 0){
        return [];
    } else if(n === 1){
        return [0];
    } else if(n === 2){
        return [0,1];
    }

    let fibs = fibonacci(n-1);
    fibs.push(fibonnaci_of(n));

    return fibs;
}

console.log('Fibonnacci');
console.log(fibonacci(5));
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

function deepDup(arr) {
    // let containsSubArrays = false;
    for (i=0;i<arr.length;i++) {
        if (arr[i] instanceof Array) {
            // containsSubArrays = true;
            arr[i] = deepDup(arr[i]);
        }
    }
    
    // if (containsSubArrays === false) {
    //     return arr;
    // }
    return arr;
}
console.log('deepDup: ');
const toDupArr = [1,2,[3,4,[5,6],7]]
let duped = deepDup([1,2,[3,4,[5,6],7]]);
console.log(duped);
console.log(toDupArr === duped);
toDupArr.push(8);
console.log(toDupArr);
console.log(duped);

function bsearch(arr, target){
    if (arr.length === 0){
        return -1;
    }

    let midIndex = Math.floor(arr.length / 2);
    let midNum = arr[midIndex];

    if (target === midNum){
        return midIndex;
    } else if (target < midNum) {
        let left = arr.slice(0, midIndex);
        return bsearch(left ,target)
    } else {
        let right = arr.slice(midIndex + 1);
        let rightResult = bsearch(right, target);
        if (rightResult === -1){
            return -1
        } else {
            return midIndex + 1 + rightResult;
        }
    }
}

console.log('bsearch: ');
console.log(bsearch([2, 3, 4, 5, 7, 8], 1));

function merge(arr1, arr2) {
    let merged_arr = [];
    while (arr1.length > 0 && arr2.length > 0) {
        let el;
        if (arr1[0] < arr2[0]) {
            el = arr1.shift();
        } else {
            el = arr2.shift();
        }
        merged_arr.push(el);
    }

    return merged_arr.concat(arr1, arr2);
}

function mergesort(arr) {
    if (arr.length < 2) {
        return arr;
    } else {
        let mid = Math.floor(arr.length / 2);
        let ls = mergesort(arr.slice(0, mid));
        let rs = mergesort(arr.slice(mid));
        // debugger
        return merge(ls, rs);
    }
}



console.log('mergesort: ');
console.log(mergesort([3, 7, 2, 5, 7, 4, 9, 1]));
// console.log(merge([1,3,5,7],[2,4,6,8]));

