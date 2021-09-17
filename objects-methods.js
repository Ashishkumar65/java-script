 let resturant ={
     name:'delhistreet',
     guestcapacity:75,
     guestcount:0,
	checkavailibility:function(partysize){
		let seatleft=this.guestcapacity-this.guestcount
		return partysize<=seatleft
	},
	seatparty:function(partysize){
		this.guestcount=this.guestcount+partysize
	},
	removeparty:function(partysize){
		this.guestcount=this.guestcount-partysize

	}
}    
   
resturant.seatparty(72)
console.log(resturant.checkavailibility(5))
resturant.removeparty(6)
console.log(resturant.checkavailibility(7))