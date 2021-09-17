let ispaasswordvalid =function(password){

	/*if(password.length>=8 &&!password.includes('password')){
		return true;

	lse{
	}*/
	return password.length>=8 &&!password.includes('password')

}
console.log(ispaasswordvalid('dgsfanh'))
console.log(ispaasswordvalid('password'))
console.log(ispaasswordvalid('dgsdhshgsdugcjh'))