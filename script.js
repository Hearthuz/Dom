var inputFirstName = document.getElementById('inputFirstName')
var inputLastName = document.getElementById('inputLastName')
var inputGender = document.getElementById('inputGender')
var insertRow = document.getElementById('insertRow')
var counter = document.getElementById('counter')

let showCounter = 0

insertRow.addEventListener('click', function(e) {
    let firstName = inputFirstName.value
    let lastName = inputLastName.value
    let gender = inputGender.value
    showCounter += 1
    counter.innerText = showCounter
    var table = document.getElementById("outputTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = gender;
    cell2.innerHTML = firstName;
    cell3.innerHTML = lastName;
})

