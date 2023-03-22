//Question 4
function lessThan100(a,b){
    return a+b<100;
}
console.log(lessThan100(90,60));
console.log(lessThan100(30,50));

//Question 5
function addUp(n){
    let sum=0;
    for (i=1; i<=n; i++)
    sum+=i;
    return sum;
}
console.log(addUp(5));
console.log(addUp(100));


//Question 6
function oddishOrEvenish(a){
    a=a.toString();
    let b=0;
    for(let i=0;i<a.length;i++){
        b+=parseInt(a[i]);
    }
    if(b%2==1)
    return "Oddish";
    else
    return "Evenish";
};
console.log(oddishOrEvenish(56));
console.log(oddishOrEvenish(4008));
console.log(oddishOrEvenish(43));