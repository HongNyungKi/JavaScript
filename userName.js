// querySelctor에는 IDBCursor,class,tag 다 지정할 수 있고 찾은 첫번째 것을 가져온다.
// querySelectorAll은 찾은 모든걸 가져와서 배열(array를 준다.)

const form = documnet.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit")
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName()
}
init();