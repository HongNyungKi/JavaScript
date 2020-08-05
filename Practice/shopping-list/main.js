"use strict";

const items = document.querySelector(".items");
const input = document.querySelector(".footer__input");
const addBtn = document.querySelector(".footer__button");

function onAdd() {
  const text = input.value;
  if (text === "") {
    input.focus();
    return;
  }
  const item = createItem(text);
  items.appendChild(item);
  item.scrollIntoView({
    block: "center"
  });
  input.value = "";
  input.focus();
}

let id = 0;

function createItem(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item__row");
  itemRow.setAttribute("data-id", id)
  itemRow.innerHTML = `
        <div class="item">
          <span class="item__name">${text}</span>
          <button class="item__delete">
            <i class="far fa-trash-alt" data-id=${id}></i>
          </button>
        </div>
        <div class="item__divider"></div>`;
  id++;
  return itemRow;
}

addBtn.addEventListener("click", () => {
  onAdd();
});
input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    onAdd();
  }
});

items.addEventListener('click', event => {
  // if (event.target.nodeName === 'I') {
  //   console.log('click')
  // }
  // nodeName 으로 구분하기 보단 dataset에 id가 있는지의 여부에따라 이벤트발생시키기
  const id = event.target.dataset.id;
  if (id) {
    const toBeDelete = document.querySelector(`.item__row[data-id="${id}"]`);
    toBeDelete.remove();
  }
})