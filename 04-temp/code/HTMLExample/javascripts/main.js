var employees = []
var startId = 0
//alert(`Danh sach : ${JSON.stringify(employees)}, tong so: ${employees.length} ong`)
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
    var departmentElement = document.getElementById("department")
    var department = departmentElement.options[departmentElement.selectedIndex].value 
    var newEmployee = {name, dateOfBirth, gender, languages: languageStr, department}
    return newEmployee
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
    var table = document.getElementById("tblEmployees");
    var row = table.insertRow(startId);

    // var row = document.createElement("TR");
    // row.setAttribute("id", `${employeeObject.id}`);
    // //Name
    // var nameColumn = document.createElement("TD");
    // var nameColumnData = document.createTextNode(employeeObject.name);
    // nameColumn.appendChild(nameColumnData);
    // document.getElementById(employeeObject.id).appendChild(nameColumn);    
    // //Department
    // var departmentColumn = document.createElement("TD");
    // var departmentColumnData = document.createTextNode(employeeObject.department);
    // departmentColumn.appendChild(departmentColumnData);
    // document.getElementById(employeeObject.id).appendChild(departmentColumn);
    // //Date of birth
    // var dobColumn = document.createElement("TD");
    // var dobColumnData = document.createTextNode(employeeObject.dateOfBirth);
    // dobColumn.appendChild(dobColumnData);
    // document.getElementById(employeeObject.id).appendChild(dobColumn);
    // //Gender
    // var genderColumn = document.createElement("TD");
    // var genderColumnData = document.createTextNode(employeeObject.gender);
    // genderColumn.appendChild(genderColumnData);
    // document.getElementById(employeeObject.id).appendChild(genderColumn);
    // //Language
    // var languageColumn = document.createElement("TD");
    // var languageColumnData = document.createTextNode(employeeObject.languages);
    // languageColumn.appendChild(languageColumnData);
    // document.getElementById(employeeObject.id).appendChild(languageColumn);
    // //Delete
    // var finalColumn = document.createElement("TD");
    // var btnDelete = document.createElement('input');
    // btnDelete.type = "button";
    // btnDelete.className = "btn";
    // btnDelete.value = entry.email;
    // //btnDelete.onclick = (function(entry) {return function() {chooseUser(entry);}})(entry);
    // td.appendChild(btn);

    // finalColumn.appendChild(finalColumnData);
    // document.getElementById(employeeObject.id).appendChild(finalColumn);
}
function btnDeleteEmployee(id) {    
    employees = employees.filter(function (employee) {
        return employee.id === id
    })    
    document.getElementById("employees").deleteRow(id);
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