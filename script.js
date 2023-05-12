

function promise1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          document.getElementsById("one").innerHTML=  resolve("promisse1");
        }, 1000);
       });
}
function promise2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        document.getElementsById("one").innerHTML=resolve("promise2");
            
        }, 2000);
       });
}
       function promise3(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
              document.getElementsById("one").innerHTML =  resolve("promise3");
            }, 3000);
           });
    
       }
       Promise.all([promise1(),promise2(),promise3()]).then((res)=>{
        console.log(res);
       });