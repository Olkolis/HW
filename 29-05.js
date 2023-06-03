1//
function arr(j) {
    let sum = j.reduce((a, b) => a + b, 0);

    console.log(sum);   
};
arrSum([22, 4, 3.3]); //29.3

function arrSum(j) {
    let sum = 0;
    for(let i = 0; i < j.length; i++) {
        sum += j[i];
    }
    console.log(sum)
}
arrSum([2, -4, 15]); //13

2//
function arrCountGT0(j) {
    let um = j.filter(item => item > 0)
    let su = um.length;

    console.log(su);
}
arrCountGT0([22, 4, 3.3]); //3

3//
function arrFilterLTM(j) {
    let u = j.reduce((a, b) => a + b, 0);
    let um = j.filter(item => item < u)

    console.log(um);
};
arrFilterLTM([22, 4, 3.3]); // 22 + 4 + 3.3 = 29.3 / 3 = 9. 76... --> [4, 3.3]

4//
function arrSort(num) {
    num.sort(function(a, b) {
    return a - b;
});
    console.log(num);
}
arrSort([22, 4, 3.3]); // [3.3, 4, 22]

5//
function arrSortReverse(num) {
    num.sort((a, b) => b - a);
    console.log(num);
}
arrSortReverse([22, 4, 3.3]);  // [22, 4, 3.3]

6//
function arrMed(num) {
    num.sort((a, b) => a - b);
    let u;

    if(num.length % 2){
      u = num[Math.floor(num.length / 2)];
    } else {
      u = (num[(num.length / 2)] + num[(num.length / 2) - 1]) / 2;
    }
    console.log(u);
  }
  

arrMed([22, 4, 3.3]); // 4
arrMed([2, -4, 15]); // 2
arrMed([2, -4, 15, 22]); // 8.5
