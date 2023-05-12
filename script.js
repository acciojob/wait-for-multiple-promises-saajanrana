

function promise1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          document.getElementsById("one").innerHTML=  resolve("promisse1");
			document.getElementsById("two").innerHTML=  resolve("1sec"); 
        }, 1000);
       });
}
function promise2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        document.getElementsById("one").innerHTML=resolve("promise2");
            document.getElementsById("two").innerHTML=  resolve("2sec"); 
        }, 2000);
       });
}
       function promise3(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
              document.getElementsById("one").innerHTML =  resolve("promise3");
document.getElementsById("two").innerHTML=  resolve("3sec"); 

            }, 3000);
           });
    
       }
       Promise.all([promise1(),promise2(),promise3()]).then((res)=>{
        console.log(res);
       });