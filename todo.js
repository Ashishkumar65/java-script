const todos=[{
    text:'order cat food',
    completed:false
},
{
    text:'clean kitchen',
    completed:false

},
{
    text:'buy food',
    completed:true
},
{
    text:'do work',
    completed:false
},
{
    text:'exercise',
    completed:true
},]
const filters={
    searchText:'',
    hidecompleted:false
}

const renderedtodos =function(todos,filters){
    let filterdtodos =todos.filter(function(todo){
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })
        filterdtodos=filterdtodos.filter(function(todo){
            if(filters.hidecompleted){
                return !todo.completed

            }
            else {
                return true
            }
        })
const incompleted = filterdtodos.filter(function(todo){
    return !todo.completed

})
document.querySelector('#todos').innerHTML=''


const summary = document.createElement('h2')
summary.textContent=`you have ${incompleted.length} todos left`
document.querySelector('#todos').appendChild(summary)

filterdtodos.forEach(function(todo){
    const twe = document.createElement('p')
    twe.textContent = todo.text
    document.querySelector('#todos').appendChild(twe)
})
 }

      

renderedtodos(todos,filters)









document.querySelector('#search-text').addEventListener('input',function(e){
    filters.searchText=e.target.value
    renderedtodos(todos,filters)
})
document.querySelector('#new-todo').addEventListener('submit',function(e){
    e.preventDefault()
    todos.push({
        text:e.target.elements.text.value,
        completed:false
    })
    renderedtodos(todos,filters)
    e.target.elements.text.value=''
})

document.querySelector('#hidecompleted').addEventListener('change',function(e){
    filters.hidecompleted=e.target.checked
    renderedtodos(todos,filters)

})