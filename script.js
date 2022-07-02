selectedRow = null;
function OnFormSubmit() {

    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null) {
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
    formData["fname"] = document.getElementById("fname").value;
    formData["pname"] = document.getElementById("pname").value;
    formData["tname"] = document.getElementById("tname").value;
    formData["fradio"] = document.getElementById("fradio").value;
    formData["fsdate"] = document.getElementById("fsdate").value;
    formData["ltdate"] = document.getElementById("ltdate").value;
    return formData;

}

function insertNewRecord(data) {
    var table = document.getElementById("tasklist").getElementsByTagName("thead")[0];
    var newRow = table.insertRow(table.length);
   
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fname;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.pname;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.tname;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.fradio;

    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.fsdate;

    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.ltdate;

    cell7 = newRow.insertCell(6);
    cell7.innerHTML = `<button onClick= "onEdit(this)">Edit</button>
                       <button onClick="onDelete(this)">Delete</button>`;
}

function resetFormData(){
    document.getElementById("fname").value="";
    document.getElementById("pname").value="";
    document.getElementById("tname").value="";
    document.getElementById("fradio").value="";
    document.getElementById("fsdate").value="";
    document.getElementById("ltdate").value="";
    selectedRow = null;

}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("pname").value = selectedRow.cell[1].innerHTML;
    document.getElementById("tname").value = selectedRow.cells[2].innerHTML;
    document.getElementById("fradio").value = selectedRow.cells[3].innerHTML;
    document.getElementById("fsdate").value = selectedRow.cells[4].innerHTML;
    document.getElementById("ltdate").value = selectedRow.cells[5].innerHTML;

}

function updateData(formData){
      selectedRow.cells[0].innerHTML = formData.fname;
      selectedRow.cells[1].innerHTML = formData.pname;
      selectedRow.cells[2].innerHTML = formData.tname;
      selectedRow.cells[3].innerHTML = formData.fradio;
      selectedRow.cells[4].innerHTML = formData.fsdate;
      selectedRow.cells[5].innerHTML = formData.ltdate;
}

function onDelete(td){
    if(confirm("Are u sure you wants to delete!")){
        row=td.parentElement.parentElement;
        document.getElementById("tasklist").deleteRow(row.rowIndex);
        resetFormData();
    }

}

function clearError(){
    errors = document.getElementsByClassName("formerror");
    for (let items of errors){
        items.innerHTML="";

    }
}
function seterror(id,error){
element=document.getElementById(id);
element.getElementsByClassName("formerror")[0].innerHTML = error;
}



function validate(){
    
    var returnVal=true;
    clearError();

    var fname = document.getElementById("fname").value;
    if(fname.length==0){
        seterror("name","Please enter your Name!");
        returnVal=false;
    }


    var Email = document.getElementById("Email").value;
    if(Email.length==0){
        seterror("email","Please enter your Email!");
        returnVal=false;
    }

    var mnumber = document.getElementById("mnumber").value;
    if(mnumber.length==0){
        seterror("phone","Please enter your Mobile Number!");
        returnVal=false;
    }

    if(isNaN(mnumber)){
        seterror("phone","please enter numbers only!");
        returnVal=false;
    }

    // if(mnumber.length>10){
    //         seterror("phone","Please enter 10 Digit number");
    //         returnVal = false;
    //     }

    var pname = document.getElementById("pname").value;
    if(pname.length==0){
        seterror("project","Project name can't be empty!");
        returnVal = false;
    }

    
    var tname = document.getElementById("tname").value;
    if(tname.length==0){
        seterror("task","Task name can't be empty!");
        returnVal = false;
    }

    // var radio = document.getElementById("radio").value;
    // if(radio.value.length <=0){
    //     seterror("radio","Task status can't be empty!");
    //     returnVal = false;
    // }

    var fname = document.forms.myForm.fradio.value;
    if(fname.length == 0){
        seterror("radio","Please select any!");
        returnVal = false;
    }
  

        var fsdate= document.getElementById("fsdate").value;
        if(fsdate.length == 0){
            seterror("sdate","Date cant be empty!");
            returnVal = false;
        }
        var ltdate = document.getElementById("ltdate").value;
        if(ltdate.length == 0){
            seterror("tdate","Date cant be empty!");
            returnVal = false;
        }
        return returnVal;    

}


function radio(){
    let radio= document.forms.myForm.fradio;
    let radioVal ="";
    for(let i=0;i<radio.length;i++){
        if(radio[i].checked) {
            radioVal = radio[i].value; 
        }
        document.getElementById("fradio").value = radioVal;
    }
}

// function checkButton() {  
//     if(document.getElementById('summer').checked) { 
//         document.getElementById("disp").innerHTML 
//             = document.getElementById("summer").value 
//             + " radio button is checked"; 
//     } 
//     else if(document.getElementById('winter').checked) { 
//         document.getElementById("disp").innerHTML 
//             = document.getElementById("winter").value 
//             + " radio button is checked";   
//     } 
//     else if(document.getElementById('rainy').checked) { 
//         document.getElementById("disp").innerHTML 
//             = document.getElementById("rainy").value 
//             + " radio button is checked";   
//     } 
//     else if(document.getElementById('autumn').checked) { 
//         document.getElementById("disp").innerHTML 
//             = document.getElementById("autumn").value 
//             + " radio button is checked";   
//     }
//     else { 
//         document.getElementById("error").innerHTML 
//             = "You have not selected any season"; 
//     } 
// }