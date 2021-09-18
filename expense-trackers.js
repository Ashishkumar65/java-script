const account={
	
	name :'ashish-kumar',

	income :[],

	addincome :function(description,amount){

		this.income.push({

			description:'description',

			amount :amount
		})
	},
	
	expenses :[],

	addexpenses  :function(description,amount){

		this.expenses.push({

			description:'descrption',

			amount:amount

		})
	},
	getaccountsummary:function(){

		let totalincome=0

		this.income.forEach(function(income){

			totalincome=totalincome+income.amount
		})

		let totalexpenses=0

		this.expenses.forEach(function(expenses){

			totalexpenses=totalexpenses+expenses.amount
		})

		let accountbalance= totalincome-totalexpenses

		return `${this.name} has  a balance of rs ${accountbalance} . rs ${totalincome} in income. rs ${totalexpenses} in expenses`
	}
}

  account.addexpenses('rent',3500)

   account.addexpenses('mess',4500)

    account.addexpenses('water&maid',500)

     account.addexpenses('pocketmoney',4500)

     account.addincome('job',20000)

     console.log(account.getaccountsummary)