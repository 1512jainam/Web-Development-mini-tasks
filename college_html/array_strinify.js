let arr=[[2,3,4],[5,6,7],[9,8,0]];

for(let i=0;i<arr.length;i++){
    console.log(arr[i].join(','));
}

let s=JSON.stringify(arr);
console.log(s);