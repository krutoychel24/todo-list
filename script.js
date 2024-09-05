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

//search

window.onload = () => {
    let search = document.querySelector(".search")
    search.oninput = function() {
        console.log(search.value)
        let value = this.value.trim();
        let list = document.querySelectorAll(".li")

        if (value != "") {
            list.forEach(el => {
                if (el.innerText.search(value) === -1) {
                    el.classList.add("hide")
                } else {
                    el.classList.remove("hide")
                }
            })
        } else {
            list.forEach(el => {
                el.classList.remove("hide")
            });
        }
    }
}

function createDeleteElements(value){
    console.log(value)

    //create todo

    const li = document.createElement("li")
    li.className = "li"
    li.textContent = value

    //create delete button

    const btn = document.createElement("btn")
    btn.className = "btn"
    btn.textContent = "Delete"
    li.appendChild(btn)

    //create edit button

    const editBtn = document.createElement("editBtn")
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

