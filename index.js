let body = document.body;
const tasktitle = document.querySelector(".tasktitle");
const description =document.querySelector("description");
const completiondate = document.querySelector("completiondate");
const taskbtn = document.querySelector(".submit");    
const tasks = document.querySelector("tasklist")
const dropdown = document.querySelector("dropdown");

taskbtn.addEventListener('click');
tasks.addEventListener('click');
dropdown.addEventListener('change');


function addtask(event) {
event.preventdefault();

    let div = document.createElement("div");   
    div.classList.add('tasksdiv');
    body.appendChild(div);

    let taskdisp = document.createElement("li");
    taskdisp.classList.add('taskdisp');
    taskdisp.innerText = tasktitle.value;
    div.appendChild(taskdisp);
      
    tasklist.appendChild(div);   

    function savetolocalstorage(tasks){
      localStorage.setItem("tasks",task)
    };
    const completebutton = document.createElement("button");
    completebutton.innerHTML =<i class="fa-solid fa-check"></i>;
    
    const trashbutton = document.createElement("button");
    trashbutton.innerHTML = <i class="fa-solid fa-trash"></i>;
};


