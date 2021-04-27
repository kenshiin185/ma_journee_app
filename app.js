var taskList = [];
var msg1 = "Aucune tâche pour le moment";
var msg2 = "Taches en cours ..."
var display = true;

var save = localStorage.getItem("taskList");
const saved = save.split(',');

function addTask() {//ajout d'une tache dans le tableau
    var taskEl = document.querySelector('input').value;
    taskList.push(taskEl);
    console.log('liste = ', taskList);
    document.querySelector('input').value = "";

    localStorage.setItem("taskList", taskList);
    console.log("liste enregistée", localStorage.getItem("taskList"));
    displayTasks();
    location.reload()
}

function reset() {
    // document.querySelector('.msg').innerHTML = msg1;
    console.log('liste = ', taskList);
    for (let i = 0; i < taskList.length; i++) {

        document.querySelector('.task').outerHTML = "";
    }
    this.taskList = [];
    localStorage.clear("taskList");
    document.querySelector('.msg').innerHTML = msg1;
    document.querySelector('.modale').classList.add('hidden');
    document.querySelector('.wrapAdd').classList.remove('hidden');
    document.querySelector('.aFaire').classList.remove('hidden');
}

function openModal() {
    document.querySelector('.modale').classList.remove('hidden');
    document.querySelector('.wrapAdd').classList.add('hidden');
    document.querySelector('.aFaire').classList.add('hidden');
}

function closeModal() {
    document.querySelector('.modale').classList.add('hidden');
    document.querySelector('.wrapAdd').classList.remove('hidden');
    document.querySelector('.aFaire').classList.remove('hidden');
}

if (localStorage.getItem("taskList") !== "") {
    save = localStorage.getItem("taskList");
    taskList = saved;
    console.log(taskList)
    function displayTasks() {//affichage des taches

        for (let i = 0; i < taskList.length; i++) {
            var checkEl = document.createElement('input');
            checkEl.type = 'checkbox';
            var labelEl = document.createElement('label').innerHTML = taskList[i];
            var almostTask = document.createElement('div');
            almostTask.className = 'task';
            almostTask.append(checkEl);
            almostTask.append(labelEl);

            var liste = document.querySelector('.todolist');
            liste.append(almostTask);
        }
        const saved = save.split(',');
        almostTask = saved;
        document.querySelector('.msg').innerHTML = msg2;

    }

} else {

    document.querySelector('.msg').innerHTML = msg1;
}


displayTasks();
