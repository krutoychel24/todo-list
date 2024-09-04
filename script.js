const input = document.querySelector(".input")
const btn = document.querySelector(".btnAdd")
const result = document.querySelector(".result")

btn.addEventListener("click", (e) => {
    if (input.value === "") {
        alert("Enter Text");
        return
    } 
    createDeleteElements(input.value)
    input.value = ""
    
})

function createDeleteElements(value){
    console.log(value)

    //create todo

    const li = document.createElement("li")
    li.className = "li"
    li.textContent = value

    const btn = document.createElement("btn")
    btn.className = "btn"
    btn.textContent = "delete"
    li.appendChild(btn)

    //remove todo

    btn.addEventListener("click", (e) => {
        result.removeChild(li)
    })

    //active class

    li.addEventListener("click", (e) => {
       li.classList.toggle("li-active")
    })


    result.appendChild(li)
}