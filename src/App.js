const input = document.querySelector("input");
const btAdd = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

btAdd.addEventListener("click", (e) => {
  e.preventDefault();
  const text = input.value;

  if (text !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;
    empty.textContent = "No tienes tareas pendientes.";

    input.value = "";
    ul.appendChild(li);
    li.appendChild(p);
    li.appendChild(addDeleteBtn());

    empty.style.display = "none";

    li.addEventListener("click", () => {
      li.style.textDecoration = "line-through";
    });

    function addDeleteBtn() {
      const deleteBtn = document.createElement("button");

      deleteBtn.textContent = "X";
      deleteBtn.className = "btn-delete";

      deleteBtn.addEventListener("click", (e) => {
        const item = e.target.parentElement;
        ul.removeChild(item);

        const items = document.querySelectorAll("li");

        if (items.length === 0) {
          empty.style.display = "block";
        }
      });

      return deleteBtn;
    }
  } else {
    empty.textContent = "Rellena los campos";
  }
})