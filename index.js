let body = document.body;
const tasktitle = document.querySelector(".tasktitle");
const description =document.querySelector(".description");
const completiondate = document.querySelector(".completiondate");
const taskbtn = document.querySelector(".submit");    
const tasks = document.querySelector(".tasklist");
const dropdown = document.querySelector(".dropdown");
const complete_tasks= document.querySelector(".complete_tasks");
const complist= document.querySelector(".complist");
let taskarr = [];

let task = {
    title:"", 
    description:"",
    time:"",
    complete:false 
};

 let title = tasktitle.addEventListener('input', ()=>{
    task.title = tasktitle.value});

 let desc = description.addEventListener('input', ()=>{
    task.description = description.value});

let time = completiondate.addEventListener('input', ()=>{
    task.time = completiondate.value});

taskarr.push(task);

function displaytasks(){

 taskarr.forEach(job=>{
     tasks.innerHTML += 
     `<li>
       <p>Todo: ${job.title} </p>
       <p>Description:${job.description}</p>
       <p>Completion date:${job.time}</p>
       <input type= "checkbox" >
       <button onclick=" delete " class="delete"> Delete</button>
      </li>`
    
      function sliceArray(taskarr, checkbox) {
        if (checkbox.checked) {
          return taskarr.slice(1, 1);
        } else {
          return taskarr;
        }
      }
      
    
    });

 console.log(taskarr);
}

taskbtn.addEventListener('click', displaytasks);



