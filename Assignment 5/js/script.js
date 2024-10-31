const $ = (elementId) => document.getElementById(elementId)
nameElement = $('name')
idElement = $('id')
extElement = $('ext')
emailElement = $('email')
departmentElement = $('department')
submitElement = $('submit')
let form = document.querySelector('#empForm')

form.addEventListener('submit', (e) => {
// submitElement.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(`${idElement.name}: ${idElement.value}`)
    console.log(`${nameElement.name}: ${nameElement.value}`)
    console.log(`${extElement.name}: ${extElement.value}`)
    console.log(`${emailElement.name}: ${emailElement.value}`)
    console.log(`${departmentElement.name}: ${departmentElement.value}`)
})