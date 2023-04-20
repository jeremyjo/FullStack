// async/await to load JSON data

export async function fetchEmployees() {
    try {
        const response = await fetch('employees.json')
        const employees = await response.json()
    }
    
    catch(error) {
        console.log(error)
    }

}

fetchEmployees()


// return to buildGrin() function


