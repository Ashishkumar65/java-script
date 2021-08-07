let isguestonevegan=true;
let isguesttwovegan=false;

if(isguestonevegan && isguesttwovegan){
	console.log('only offer vegan food')
}
else if(isguestonevegan ||isguesttwovegan){
	console.log('make sure to offer some vegan dishes')
}

else{
	console.log('offer whatever you have!')
}