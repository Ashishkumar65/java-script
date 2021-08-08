let gradecal=function(studentsmarks,totalmarks){
	let percent=(studentsmarks*100)/totalmarks;
	if (percent>=90) {
		return `you got A(${percent})`
	}
	else if (percent>=80 ) {
		return `you got B(${percent})`
		
}
else if (percent>=70 ) {
		return `you got c(${percent})`
		
}
 else if (percent>=60 ) {
		return `you got d(${percent})`
		
}
else{
	return `you got f(${percent})`
		
}

}
let result =gradecal(77,90)
console.log(result)