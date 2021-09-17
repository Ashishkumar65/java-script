let myaccont ={
	name: 'ashish kumar',
	expanse:0,
	income: 0,
}
let addexpanse=function(accont,amount){
	accont.expanse=add.expanse+amount;
}
let addincome=function(accont,income){
	account.income=accont.income+amount;
}
let resetaccont=function(accont){
	accont.expanse=0;
	accont.income=0;

}
let getaccontsummary=function(accont){
	let balance=accont.income-accont.expanse
	return `account for ${account.name} has $${balance} .$${accont.income} in income. $${accont.expanse} in expanse
`
}

addincome(myaccount,5000)
addexpanse(myaccont,1000)
addexpanse(myaccont,1000)
 console.log (getaccontsummary(myaccount))