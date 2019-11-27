let ourForm = document.getElementById("ourForm")
let ourField = document.getElementById("ourField")
let ourList = document.getElementById("ourList")

ourForm.addEventListener("submit", (e) => {
    e.preventDefault() 
    alert("you clicked")
    //createItem(ourField.value)
})
//function createItem(x){
  //  ourList.insertAdjacentHTML("beforeend", x)
//}
    


