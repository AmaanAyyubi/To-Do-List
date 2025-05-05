const inputBox = document.getElementById("input-box");
const listContianer = document.getElementById("list-container");

function addtask(){
    if(inputBox.value === ''){
        alert("You must write something !!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContianer.append(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00D7";
        li.appendChild(span);
    }

    inputBox.value = "";
    saveData();
}

listContianer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data",listContianer.innerHTML);
}

function showTask(){
    listContianer.innerHTML = localStorage.getItem("data");
}

showTask();