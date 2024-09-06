const input = document.querySelector(".input");
const btn = document.querySelector(".btnAdd");
const result = document.querySelector(".result");
let localSaveM = JSON.parse(localStorage.getItem("tasks")) || [];

// При загрузке страницы загружаем задачи из localStorage
window.onload = () => {
    localSaveM.forEach(task => createDeleteElements(task));

    let search = document.querySelector(".search");
    search.oninput = function () {
        let value = this.value.trim();
        let list = document.querySelectorAll(".li");

        if (value != "") {
            list.forEach(el => {
                if (el.innerText.search(value) === -1) {
                    el.classList.add("hide");
                } else {
                    el.classList.remove("hide");
                }
            });
        } else {
            list.forEach(el => {
                el.classList.remove("hide");
            });
        }
    }
};

btn.addEventListener("click", (e) => {
    if (input.value === "") {
        alert("Enter Text");
        return;
    }
    createDeleteElements(input.value);
    localSaveM.push(input.value);
    localStorage.setItem("tasks", JSON.stringify(localSaveM));
    input.value = "";
});

function createDeleteElements(value) {
    // create todo
    const li = document.createElement("li");
    li.className = "li";
    li.textContent = value;

    // create delete button
    const delSpanBtn = document.createElement("span");
    li.appendChild(delSpanBtn);

    const btn = document.createElement("btn"); // исправлено на button
    btn.className = "btn";
    btn.textContent = "Delete";
    delSpanBtn.appendChild(btn);

    // create edit button
    const spanEditBtn = document.createElement("span");
    li.appendChild(spanEditBtn);

    const editBtn = document.createElement("btn"); // исправлено на button
    editBtn.className = "editBtn";
    editBtn.textContent = "Edit";
    spanEditBtn.appendChild(editBtn);

    // remove todo
    btn.addEventListener("click", (e) => {
        result.removeChild(li);

        // Обновляем localSaveM и localStorage
        localSaveM = localSaveM.filter(task => task !== value);
        localStorage.setItem("tasks", JSON.stringify(localSaveM));
    });

    // edit todo
    editBtn.addEventListener("click", (e) => {
        const createNewInput = document.createElement("input");
        createNewInput.className = "nonActiveInput";
        createNewInput.type = "text";
        createNewInput.value = li.firstChild.textContent;
        li.replaceChild(createNewInput, li.firstChild);

        // keypress
        createNewInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                li.replaceChild(document.createTextNode(createNewInput.value), createNewInput);

                // Обновляем localSaveM и localStorage
                const taskIndex = localSaveM.indexOf(value);
                if (taskIndex > -1) {
                    localSaveM[taskIndex] = createNewInput.value;
                    localStorage.setItem("tasks", JSON.stringify(localSaveM));
                }
            }
        });
    });

    // active class
    li.addEventListener("click", (e) => {
        if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'SPAN' && e.target.className !== 'nonActiveInput') {
            li.classList.toggle("li-active");
        }
    });

    result.appendChild(li);
}
