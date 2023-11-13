const inputElement = document.getElementById("title")
const createBtn = document.getElementById("btn_add")
const listElement = document.getElementById("list")

const notes = []

function renderBtn(){
    if (inputElement.value.length > 0){
        let newNote = {
            title: inputElement.value,
            completed: false,
        }
        notes.unshift(newNote)

        renderNotes() 
        inputElement.value = ''
      }  
}
function renderNotes(){
    listElement.innerHTML = ""
    for(i=0; i<notes.length ; i++){
        listElement.insertAdjacentHTML("beforeend", renderNewNote(notes[i], i))
    }
}
function renderNewNote(notes,i){
    return  ` 
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span class= "${notes.completed ? 'text-decoration-line-through' : ''}"> ${notes.title}</span>
        <span>
            <span class="btn btn-sm btn-${notes.completed ? 'warning' : 'success'}"
                        data-index="${i}"
                        data-type="done">
                &check;
            </span>
            <span class="btn btn-sm btn-danger "
                        data-index="${i}"
                        data-type="delete">
                X
            </span>
        </span>
    </li>`
}
listElement.onclick = function(event){
    if(event.target.dataset.index){
        const index = parseInt(event.target.dataset.index)
        const type = event.target.dataset.type

        if(type==='done'){
            notes[index].completed = !notes[index].completed
        } else if (type === 'delete'){
            notes.splice(index,1)
        }
        renderNotes()
    }
}