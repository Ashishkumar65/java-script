let myaccount ={
	name: 'ashish kumar',
	expanse:0,
	income: 0,
}
let addexpanse=function(account,amount){
	account.expanse=account.expanse+amount;
}
let addincome=function(account,income){
	account.income=account.income+income;
}
let resetaccount=function(account){
	account.expanse=0;
	account.income=0;

}
let getaccountsummary=function(account){
	let balance=account.income-account.expanse
	return `account for ${account.name} has $${balance} .$${account.income} in income. $${account.expanse} in expanse
`
}

addincome(myaccount,5000)
addexpanse(myaccount,1000)
addexpanse(myaccount,1000)
 console.log (getaccountsummary(myaccount))
 resetaccount(myaccount)
  console.log (getaccountsummary(myaccount))