//abbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
function reloadDateOfBirth() {    
    var days = document.getElementById("days")   
    for(var i = 1; i<=31; i++){
        var option = document.createElement("option");
        option.setAttribute("value", `${i}`);
        option.innerHTML = `${i}`
        days.appendChild(option)
    }
}
reloadDateOfBirth();
return
/*
var employees = []
var departments = ["Administration","Technical","Sales"]
var startId = 0
reloadDepartments()
function loadInputEmployee() {
    var name = document.getElementById('name').value
    var dateOfBirth =  document.getElementById('dob').value    
    var gender = document.querySelector('input[name="gender"]:checked').value
    var languages = document.querySelectorAll('input.checkboxLanguage:checked')
    languageStr = ""
    languages.forEach(function (language){
        //ternary 
        languageStr = languageStr.length > 0 ? `${languageStr}<br>${language.value}`: `${language.value}`
    }) 
    // for(var i = 0; i < languages.length; i++) {
    //     var language = languages[i]
    //     languageStr = languageStr.length > 0 ? `${languageStr}<br>${language.value}`: `${language.value}`
    // } 
    var departmentElement = document.getElementById("departments")
    var department = departmentElement.options[departmentElement.selectedIndex].value 
    var newEmployee = {name, dateOfBirth, gender, languages: languageStr, department}
    return newEmployee
}
function btnAddDepartment() {    
    var newDepartment = prompt("Please enter your new department:", "");
    if (newDepartment == null || newDepartment == "") {
        //do nothing
    } else {
        departments.push(newDepartment)
        reloadDepartments()
    }
}
function reloadDepartments() {    
    var selectDepartments = document.getElementById("departments")   
    if(!selectDepartments) {
        return
    }
    while (selectDepartments.length > 0) {
        selectDepartments.remove(selectDepartments.length-1);
    }
    departments.forEach(function (department){
        var option = document.createElement("option");
        option.setAttribute("value", department);
        option.innerHTML = department
        selectDepartments.appendChild(option)
    })
}
var validateInput = function () {
    var name = document.getElementById('name').value.trim()
    var dateOfBirth =  document.getElementById('dob').value.trim()   
    if (name.length == 0 || dateOfBirth.length == 0){
        return false
    }
    return true
}
function btnAddEmployee(event) {
    if(validateInput() == false) {
        return
        //Ko lam gi them
    }
    var newEmployee = loadInputEmployee()        
    newEmployee.id = startId
    employees.push(newEmployee)
    addRowDataToTable(newEmployee)
    event.preventDefault()
}
function addRowDataToTable(employeeObject) {
    startId = startId + 1
    var table = document.getElementById("tblEmployees");
    var row = table.insertRow(startId);
    var cellName = row.insertCell(0);//column 0
    cellName.innerHTML = employeeObject.name

    var cellDepartment = row.insertCell(1);//column 1
    cellDepartment.innerHTML = employeeObject.department

    var cellDOB= row.insertCell(2);
    cellDOB.innerHTML = `${employeeObject.dateOfBirth}`

    var cellGender= row.insertCell(3);
    cellGender.innerHTML = employeeObject.gender

    var cellLanguages= row.insertCell(4);
    cellLanguages.innerHTML = employeeObject.languages
    
    var cellFinal= row.insertCell(5);    
    cellFinal.innerHTML = `<a href="#" role="button" onclick="deleteEmployee(${employeeObject.id})">Delete</a>`        
}
function reloadData() {
    var table = document.getElementById("tblEmployees");
    while(table.rows.length > 1) {        
        table.deleteRow(table.rows.length - 1)
    }    
    startId = 0
    employees.forEach(function(employee){        
        addRowDataToTable(employee)
    })
}
function deleteEmployee(id) {    
    if (confirm("Are you sure you want to delete this ?")) {
        employees = employees.filter(function (employee) {
            return employee.id != id
        })    
        reloadData()    
    }
}

//Kieu gi cung vao day
// var student = {
//     //key - value
//     name: "Nam",
//     dob: "11-12-2000",    
//     "full name": "Nguyen Duc Hoang"
// }
//Phan nay lam test
//alert('ten sinh vien la: '+student.name) //concatenation = noi tring
// var age = 40
// //alert(`t11en sinh vien la: ${student.name}`) //string template
// //Add an attribute to an existing object
// student.department = "sales and marketing"
// //alert(`student = ${JSON.stringify(student)}`) //stringify = convert to String
// //alert(`student = ${student}`) //no-convert
// //Thu thuat chuyen 1 number sang string
// // var x = 1233344
// // var str = `${x}` 
// //alert(student["full name"])

// //Gia su 1 ong dang ky
// var mrHoang = {
//     name: "Hoang",
//     dob: '25-10-1979',    
// }
// startId = startId + 1
// mrHoang.id = startId
// employees.push(mrHoang) //push = them 1 phan tu vao list(array)
// var mrLoc = {
//     name: "Nguyen Van Loc",
//     dob: '25-10-2000',    
// }
// startId = startId + 1 //auto-increment
// mrLoc.id = startId
// employees.push(mrLoc)
// var mrHuy = {
//     name: "An Huy",
//     dob: '25-10-1999',    
// }
// startId = startId + 1
// mrHuy.id = startId
// employees.push(mrHuy)

// //delete bang cach filter
// employees = employees.filter(function(employee) {
//     //return employee.name != "Nguyen Van Loc" 
//     //xoa theo id
//     return employee.id != 3
// })