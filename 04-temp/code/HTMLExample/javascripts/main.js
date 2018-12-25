var employees = []
var startId = 0
function loadInputEmployee() {
    var name = document.getElementById('name').value
    var dateOfBirth = new Date(document.getElementById('dob')).value
    var gender = document.getElementById('gender').value
    var languages = document.querySelector('.checkboxLanguage:checked').value
    var department = document.querySelector('#department :selected').value    
    return {name, dateOfBirth, gender, languages, department}
}
function btnAddDepartment() {    

}
function btnAddEmployee() {
    var newDepartment = loadInputEmployee()
    startId = startId + 1
    newDepartment.id = startId
    employees.push(newDepartment)
    addRowDataToTable(newDepartment)
}
function addRowDataToTable(employeeObject) {
    var row = document.createElement("TR");
    row.setAttribute("id", `${employeeObject.id}`);
    //Name
    var nameColumn = document.createElement("TD");
    var nameColumnData = document.createTextNode(employeeObject.name);
    nameColumn.appendChild(nameColumnData);
    document.getElementById(employeeObject.id).appendChild(nameColumn);    
    //Department
    var departmentColumn = document.createElement("TD");
    var departmentColumnData = document.createTextNode(employeeObject.department);
    departmentColumn.appendChild(departmentColumnData);
    document.getElementById(employeeObject.id).appendChild(departmentColumn);
    //Date of birth
    var dobColumn = document.createElement("TD");
    var dobColumnData = document.createTextNode(employeeObject.dateOfBirth);
    dobColumn.appendChild(dobColumnData);
    document.getElementById(employeeObject.id).appendChild(dobColumn);
    //Gender
    var genderColumn = document.createElement("TD");
    var genderColumnData = document.createTextNode(employeeObject.gender);
    genderColumn.appendChild(genderColumnData);
    document.getElementById(employeeObject.id).appendChild(genderColumn);
    //Language
    var languageColumn = document.createElement("TD");
    var languageColumnData = document.createTextNode(employeeObject.languages);
    languageColumn.appendChild(languageColumnData);
    document.getElementById(employeeObject.id).appendChild(languageColumn);
    //Delete
    var finalColumn = document.createElement("TD");
    var btnDelete = document.createElement('input');
    btnDelete.type = "button";
    btnDelete.className = "btn";
    btnDelete.value = entry.email;
    btnDelete.onclick = (function(entry) {return function() {chooseUser(entry);}})(entry);
    td.appendChild(btn);

    finalColumn.appendChild(finalColumnData);
    document.getElementById(employeeObject.id).appendChild(finalColumn);
}
function btnDeleteEmployee(id) {    
    employees = employees.filter(function (employee) {
        return employee.id === id
    })    
    document.getElementById("employees").deleteRow(id);
}