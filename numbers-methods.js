let makeguess=function(guess){
	let min=1
	max=5
	let number=Math.floor(Math.random()* (max-min+1))+min
	return guess===number
}

console.log(makeguess(4))