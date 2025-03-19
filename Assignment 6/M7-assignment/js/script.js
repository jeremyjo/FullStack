// Create Add Employee functionality

// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.getElementById("addForm");
form[0].focus();

let employeeTable = document.getElementById("employees");

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER

let employeeCount = document.getElementById("empCount");
employeeCount.value = 0;

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    let employeeID = form[0].value;
    let employeeFullName = form[1].value;
    let employeeExtension = form[2].value;
    let employeeEmail = form[3].value;
    let employeeDepartment = form[4].value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE

    let createdNewRow = employeeTable.insertRow();

    displayUserData(employeeID);
    displayUserData(employeeFullName);
    displayUserData(employeeExtension);
    displayUserData(employeeEmail);
    displayUserData(employeeDepartment);

    function displayUserData(field) {
        // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
        let createdNewCell = createdNewRow.insertCell();

        let th = document.createElement('th');

        // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
        let cellContents = document.createTextNode(field);

        th.appendChild(cellContents);

        createdNewCell.appendChild(th);
    }

    // CREATE THE DELETE BUTTON
    let deleteButton = document.createElement('button');
    deleteButton.className = "btn btn-danger btn-sm float-right delete";
    let textDeleteButton = document.createTextNode('x');

    deleteButton.appendChild(textDeleteButton);

    let createdNewCell = createdNewRow.insertCell();
    createdNewCell.appendChild(deleteButton);

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    form[0].focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    currentEmployeeCount = parseInt(employeeCount.value);
    currentEmployeeCount += 1;
    employeeCount.value = currentEmployeeCount;

})

// DELETE EMPLOYEE

employeeTable.addEventListener('click', (e) => {
        if (e.target.classList.contains("delete") ) {
            if (confirm(`Confirm deletion of ${e.target.parentElement.parentElement.children[1].children[0].innerHTML}`) ) {
                console.log(e.target.parentElement.parentElement.children[1].children[0].innerHTML);
                employeeTable.deleteRow(e.target.parentElement.parentElement.rowIndex);
                employeeCount.value -= 1;
            }
        }
    } 
);
