let prom1 = new Promise((resolve,reject)=>{
	resolve("")
},(Math.floor(Math.random() * 3000)))

let prom2 = new Promise((resolve,reject)=>{
	resolve("")
},(Math.floor(Math.random() * 3000)))

let prom3 = new Promise((resolve,reject)=>{
	resolve("")
},(Math.floor(Math.random() * 3000)))

window.promises = [prom1, prom2, prom3 ];
Promise.all	(promises)
.then((value)=>{
	document.getElementById("output").innerText = value ;
})
.catch((err)=>{
	console.log("error");