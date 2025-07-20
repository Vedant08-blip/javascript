//HOW TO FIND DUPLICATE ARRAY IN JS ?
//Solution
    const arrnumber = [1, 2, 3, 4, 2, 4, 1, ]
    const DUPLICATE = arrnumber.filter((ele, index, arr) => arr.indexOf(ele) !== index)
    console.log(DUPLICATE);
    