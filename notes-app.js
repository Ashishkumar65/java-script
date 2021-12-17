const notes = [{
  title: 'my next trip',
  body: 'I would like to go to Spain'
}, {
  title: 'Habbits to work on',
  body: 'Exercise. Eating a bit better.'
}, {
  title: 'Office modification',
  body: 'Get a new seat'
}]

const filters={
      text: ''
}

const rendernotes=function(notes,filters){
  const filterednotes=notes.filter(function(note){
    return note.title.toLowerCase().includes(filters.text.toLowerCase())
  })
   document.querySelector('#notes').innerHTML=''
  filterednotes.forEach(function(note){
    const noteEl=document.createElement('p')
    noteEl.textContent=note.title
    document.querySelector('#notes').appendChild(noteEl)
  })
}


rendernotes(notes,filters)


document.querySelector('#create-note').addEventListener('click',function(e){
  e.target.textContent='the button was clicked'
})




document.querySelector('#search-text').addEventListener('input',function(e){
  filters.text=e.target.value
  rendernotes(notes,filters)
})

document.querySelector('#filter-by').addEventListener('change',function(e){
  console.log(e.target.value)
})