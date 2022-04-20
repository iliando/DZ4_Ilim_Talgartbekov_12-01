const url = 'https://jsonplaceholder.typicode.com/users';

const xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.responseType = 'json';
xhr.onload = function () {
    const list = document.getElementById('list')
    if (xhr.status >= 200 && xhr.status <=204) {
        console.log(xhr.response)
        xhr.response.forEach(e => {
            list.innerHTML += `
            <div class="list">
            <ul>
            <p>Имя: ${e.name}</p>
            <li>Почта: ${e.email}</li>
            </ul>
            </div>
            `
        })
    }
}
xhr.send()

// 2 задание

const name = document.getElementById('name');
const surname = document.getElementById('surname');
const btn = document.getElementById('btn');

function sendUserInfo () {
    const xhr = new XMLHttpRequest();
    if (!name.value.trim() || !surname.value.trim()){
        alert("заполните все поле")
    }else {
        const info = {
            name: name.value,
            username: surname.value
        }
        xhr.open('POST', url);

        xhr.responseType = 'json'

        xhr.onload = function () {
            console.log("Добро пожаловать " + name.value, surname.value)
        }

        xhr.setRequestHeader("Content-Type", "application/json")

        xhr.send(JSON.stringify(info));
    }
}

btn.addEventListener('click', sendUserInfo);