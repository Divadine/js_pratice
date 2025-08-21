let tasks=JSON.parse(localStorage.getItem('tasks')) || []
let resultElement= document.getElementById('result')

function renderTask(array) {
     resultElement.innerHTML=''
     array.forEach((item ,index)=> {
        resultElement.innerHTML += `<div>

                                        <h1><input type="checkbox" onchange="toggleComplete(${item.id})" ${item.iscompleted ? "checked": ""}>${item.name} - ${item.iscompleted ? "completed": ""} </h1>
                                        <button onclick="deletetask(${item.id})"> Delete </button>

                                    </div> `
        
    });
    
}
renderTask(tasks)
document.getElementById('addBtn').addEventListener('click',()=>{
    let value=document.getElementById('taskInput').value
    let obj= {id:Date.now(),name:value, iscompleted:false}
    tasks.push(obj)
    localStorage.setItem('tasks',JSON.stringify(tasks))
    renderTask(tasks)
})

function deletetask(taskID) {
    tasks=tasks.filter(item => item.id != taskID)
    localStorage.setItem('tasks',JSON.stringify(tasks))
    renderTask(tasks)

   
}

document.getElementById('searchInput').addEventListener('keyup',()=>{
    let searchKey=document.getElementById('searchInput').value 
    let searchedTasks=tasks.filter(item =>{
        return item.name.includes(searchKey)
    })

    renderTask(searchedTasks)
})

function toggleComplete(taskID) {
    tasks=tasks.map((item)=>{
        if (item.id==taskID){
            item.iscompleted =!item.iscompleted
            return item
        }else{
            return item
        }

    })
    localStorage.setItem('tasks',JSON.stringify(tasks))
    renderTask(tasks)
}
