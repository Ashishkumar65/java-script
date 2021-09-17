let convertor=function(f){
	return{farenhite: f,
		celsius: (f-32)*(5/9),
		kelvin: (f+459.67)*(5/9),

	}
}
let temp=convertor(73);
console.log(temp)
console.log(temp.kelvin);
console.log(temp.celsius)