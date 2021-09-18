/*
const todo=['ef', 'c++', 'ds&algo', 'js', 'react' ]

console.log( `i have to complete these ${todo.length} things in october`)

console.log(` complete ${todo[1]} in sept` )

console.log(` complete ${todo[todo.length-2]} in august` )

/*const todos=['order food','clean kitchen','buy food','exercise']

todos.splice(2,1)

todos.push('work hard')

todos.shift()

todos[1]='study'

console.log(todos)

console.log(`you have to complete${todos.length} work` )

todos.forEach(function(todos,index){
	const num=index+1

	console.log(`${num} ${todos}`)
})

for(let count=0;count<todos.length;count++){
	const num=count+1
	
	const todo=todos[count]

	console.log(`${num}. ${todo}`)
}*/


const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: true
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]

const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })

    if (index > -1) {
        todos.splice(index, 1)
    }
}

const getThingsToDo = function (todos) {
    return todos.filter(function (todo) {
        return !todo.completed
    })
}

console.log(getThingsToDo(todos))
 
// deleteTodo(todos, '!!buy food')
// console.log(todos)