var employees = []
var startId = 0
function loadInputEmployee() {
    var name = document.getElementById('name').value
    var dateOfBirth = new Date(document.getElementById('dob').value)
    var gender = document.getElementById('gender').value
    var languages = document.querySelector('.checkboxLanguage:checked').value
    var department = document.querySelector('#department :selected').value    
    return {name, dateOfBirth, gender, languages, department}
}
function btnAddDepartment() {
    
}
function btnAddEmployee() {
    var newDepartment = loadInputEmployee()
    newDepartment = startId + 1
    employees.push(newDepartment)
}
function fetchDataToTable() {

}
function btnDeleteEmployee() {

}