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

    //create delete button

    const btn = document.createElement("btn")
    btn.className = "btn"
    btn.textContent = "delete"
    li.appendChild(btn)

    //create edit button

    const editBtn = document.createElement("button")
    editBtn.className = "editBtn"
    editBtn.textContent = "Edit"
    li.appendChild(editBtn)

    //remove todo

    btn.addEventListener("click", (e) => {
        result.removeChild(li)
    })

    //edit btn

    editBtn.addEventListener("click", (e) => {
        const createNewInput = document.createElement("input")
        createNewInput.type = "text"
        createNewInput.value = li.firstChild.textContent
        li.replaceChild(createNewInput, li.firstChild)

        //keypress
 
        createNewInput.addEventListener("keypress", (e) => {
            if(e.key === "Enter"){
                li.replaceChild(document.createTextNode(createNewInput.value), createNewInput)
            }
            
        })
        
    })

    //active class

    li.addEventListener("click", (e) => {
       li.classList.toggle("li-active")
    })
    


    result.appendChild(li)

    
}

