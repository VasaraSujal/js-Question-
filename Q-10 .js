// with function 

function count(arr){
    var even =0;
    var odd=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            even=even+1;
        }else{
            odd=odd+1;
        }
    }console.log(even);
    console.log(odd);
    }
    count(arr=[1, 2, 3, 4, 5]);


// without function 

var arr=[1, 2, 3, 4, 5]
var even =0;
var odd=0;

for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        even=even+1;
    }else{
        odd=odd+1;
    }
}
console.log(even);
console.log(odd);