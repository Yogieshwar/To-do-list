let todoValue=document.querySelector(".todo-input")
let listItem=document.querySelector(".list-items")
let addBtn=document.querySelector(".addbtn")

let currentTaskElement; // Variable to store the current task being edited
let isEdditing=false; //flag to track editing stste



//event for add button for Add button
addBtn.addEventListener("click",()=>{
    if(isEdditing){
        updateTask();
    }else{
        updateLists()
    }
})

//event for enter button
todoValue.addEventListener("keypress",(e)=>{
    if(e.key==="Enter"){
        if(isEdditing){
            updateTask();
        }else{
            updateLists()
        }

    }
})    


 

//function for updateing task lists
function updateLists(){
   // alert(todoValue.value)
   if(todoValue.value==""){
    alert("Enter your Tasks")
    return;
   }
   let li=document.createElement("li")
   let todoItems=`<div>${todoValue.value}</div><div><i class="bi bi-pen editbtn"></i><i class="bi bi-arrow-up arrowup"></i><i class="bi bi-arrow-down arrowdown"></i><i class="bi bi-trash deletebtn"></i></div>`

   li.innerHTML=todoItems;
   listItem.appendChild(li);
   let editBtn=li.querySelector(".editbtn")
   let deleteBtn=li.querySelector(".deletebtn")
   let upBtn=li.querySelector(".arrowup")
   let downBtn=li.querySelector(".arrowdown")


   //event for edit button
 editBtn.addEventListener("click",()=>{
   editTask(li);


 })

 //event for delete button
 deleteBtn.addEventListener("click",()=>{
    deleteTask(li);
 })
 //event to move up
 upBtn.addEventListener("click",()=>{
    moveTaskUp(li);

 })

 //event to move down
 downBtn.addEventListener("click",()=>{
    moveTaskDown(li);

 })

 //clear input field after editing/adding
 todoValue.value="";

}

//function for editing a task
function editTask(li){
    let taskText=li.querySelector("div").innerText;
    todoValue.value=taskText;

    currentTaskElement=li; //store the current element
    isEdditing=true;




}

//function to update tasks
function updateTask(){
    let taskText=todoValue.value;

    if(taskText===""){
        alert("Enter your task")
    }
    currentTaskElement.querySelector("div").innerText=taskText;
    isEdditing=false;//reset editing flag
    currentTaskElement=null;
    todoValue.value="";

}

// function to delete a task
function deleteTask(li){
    li.remove();
}

// Function to move task up
function moveTaskUp(li) {
    let prevLi = li.previousElementSibling;
    if (prevLi) {
        listItem.insertBefore(li, prevLi);
    }
}

//function to move task down
function  moveTaskDown(li){
    let nextLi=li.nextElementSibling;
    if(nextLi){
        listItem.insertBefore(nextLi,li)
    }
}
    


