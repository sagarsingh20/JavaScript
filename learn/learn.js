const listsContainer = document.querySelector("[data-lists]");
const newListForm = document.querySelector('[data-new-list-form]');
const newListInput = document.querySelector('[data-new-list-input]');
const deleteList = document.querySelector('[data-delete-list]')
const deleteRemoveAll= document.querySelector('[data-delete-list-all]')

const LOCAL_STORAGE_LIST_KEY="task_lists"
let lists= JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [ ]

//Not submit Null and add value
newListForm.addEventListener('submit', e =>{
    e.preventDefault()
    const listName = newListInput.value;
    if(listName == null || listName === "") return
    const list= createList(listName);
    newListInput.value=null;
    lists.push(list)
    saveAndrender()
})

deleteList.addEventListener("click" , e=>{
    console.log(e)
})

deleteRemoveAll.addEventListener("click", e=>{
    console.log(e)
    //localStorage.removeItem(LOCAL_STORAGE_LIST_KEY);
    listsContainer.remove();
    saveAndrender()
})

function createList(name){
    return { "id": new Date().getTime() , "name": name} // , "tasks":[] 
}

function saveAndrender(){
    save();
    render();
}

function save(){
   localStorage.setItem( LOCAL_STORAGE_LIST_KEY ,JSON.stringify(lists))
}

function render(){
    clearElement(listsContainer)
    lists.forEach(list=>{
        const listElement= document.createElement('li')
        listElement.dataset.listId= list.id
        listElement.classList.add("list-name")
        listElement.innerText=list.name;
        listsContainer.appendChild(listElement)
    })
}

function clearElement(element){
    while(element.firstChild){
        element.removeChild(element.firstChild)
    }
}

render()