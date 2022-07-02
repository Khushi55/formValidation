slectedRow = null;
function OnFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (slectedRow == null) {
            insertNewRecord(formData);
        }
        else {
            updateData(formData);
        }
        resetFormData();
    }
}
function readFormData() {
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["project"] = document.getElementById("project").value;
    formData["task"] = document.getElementById("task").value;
    formData["fradio"] = document.getElementById("fradio").value;
    formData["fsdate"] = document.getElementById("fsdate").value;
    formData["edate"] = document.getElementById("edate").value;
    return formData;
}
function insertNewRecord(data) {
    var table = document.getElementById("tasklist").getElementsByTagName("thead")[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.project;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.task;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.fradio;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.fsdate;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.edate;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = `<button onclick="onEdit(this)">Edit</button>
                        <button onclick="onDelete(this)">Delete</button>`;

}

function resetFormData() {
    document.getElementById("name").value = " ";
    document.getElementById("project").value = " ";
    document.getElementById("task").value = " ";
    document.getElementById("fradio").value = " ";
    document.getElementById("fsdate").value = "";
    document.getElementById("edate").value = "";
    slectedRow = null;

}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("project").value = selectedRow.cells[1].innerHTML;
    document.getElementById("task").value = selectedRow.cells[2].innerHTML;
    document.getElementById("fradio").value = selectedRow.cells[3].innerHTML;
    document.getElementById("fsdate").value = selectedRow.cells[4].innerHTML;
    document.getElementById("edate").value = selectedRow.cells[5].innerHTML;

}

function updateData(formData) {
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.project;
    selectedRow.cells[2].innerHTML = formData.task;
    selectedRow.cells[3].innerHTML = formData.fradio;
    selectedRow.cells[4].innerHTML = formData.fsdate;
    selectedRow.cells[5].innerHTML = formData.edate;

}

function onDelete(td){
    if(confirm("Are you sure you wants to delete!")){
        row = td.parentElement.parentElement;
        document.getElementById("tasklist").deleteRow(row.rowIndex);
        resetFormData();

    }
}

function clearError(){
    errors=document.getElementsByClassName("formerror");
    for(let item of errors){
        item.innerHTML="";
    }
}
function seterror(id, error){
    element =document.getElementById(id);
    element.getElementsByClassName("formerror")[0].innerHTML = error;
}

function validate(){

    var returnVal = true;
    clearError();

    var name=document.getElementById("name").value;
    if(name.length==0){
        seterror("fname","Please enter your name");
        returnVal=false;
    }
    var email=document.getElementById("email").value;
    if(email.length==0){
        seterror("femail","Please enter your email");
        returnVal=false;
    }
    var phone=document.getElementById("phone").value;
    if(phone.length==0){
        seterror("fphone","Please enter your phone number");
        returnVal=false;
    }
    if(isNaN(phone)){
        seterror("fphone","Please enter numbers only");
        returnVal=false;
    }
    var project=document.getElementById("project").value;
    if(project.length==0){
        seterror("fproject","Please enter your project");
        returnVal=false;
    }
    var task=document.getElementById("task").value;
    if(task.length==0){
        seterror("ftask","Please enter your task");
        returnVal=false;
    }

    var status=document.forms.myForm.fradio.value;
    if(status.length==0){
        seterror("radio","Please set any!");
        returnVal=false;
    }

    var fsdate=document.getElementById("fsdate").value;
    if(fsdate.length==0){
        seterror("startdate","Please enter Start date");
        returnVal=false;
    }
    var edate=document.getElementById("edate").value;
    if(edate.length==0){
        seterror("enddate","Please enter end date");
        returnVal=false;
    
   
    
    }
    return returnVal;

}

function radio(){
    let radio = document.forms.myForm.fradio;
    let radioVal="";
    for(let i=0;i<radio.length;i++){
        if(radio[i].checked){
            radioVal=radio[i].value;

        }
        document.getElementById("fradio").value=radioVal;
    }
}
