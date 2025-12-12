// const n = 20;
// for(let i = 1; i <= n; i++) {
//     if(i % 2 == 0 && i % 5 == 0) {
//        console.log(i);
//     }
   
// }




function fizzbuzz(n){
    for(let i=1;i<=n;i++){
        if(i%3==0 && i%5==0){
            console.log("fizzbuzz");
        }else if(i%3==0){
            console.log("fizz");
        }else if(i%5==0){
            console.log("buzz");
        }else{
            console.log(i);
        }   
    }
}
// fizzbuzz(15);



