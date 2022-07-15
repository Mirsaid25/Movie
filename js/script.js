/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        {
            id: Math.random(),
            name: "ЛОган" 
        },
        {
            id: Math.random(),
            name: "Лига справедливости"
        },
        {
            id: Math.random(),
            name: "Ла-ла лэнд" 
        },
        {
            id: Math.random(),
            name: "Одержимость" 
        },
        {
            id: Math.random(),
            name: "Скотт Пилигрим против..." 
        }
    ]
};


let check = document.querySelector('.check')
let form = document.forms.add

form.onsubmit = (e) => {
    e.preventDefault()
    
    let movie = {
        id: Math.random()
    }

    let fm = new FormData(form)
    

    fm.forEach((value, key) => {
        movie[key] = value
    })

    if(check.checked === true) {
        movieDB.liked.push(movie)
        console.log(movieDB.liked);
    } else {
        movieDB.movies.push(movie)
        console.log(movieDB.movies);
    }
}


let rec = document.querySelector(".promo__adv")

let img_rec = rec.querySelectorAll("img")


img_rec.forEach(item =>{
    item.style.display = "none"

})

let text = document.querySelector(".promo__genre")
let promo__title = document.querySelector(".promo__title")
let promo__descr = document.querySelector(".promo__descr")
let w1 = document.querySelector(".w1")
let w2 = document.querySelector(".w2")
let w3 = document.querySelector(".w3")
text.innerHTML = "драма".toLocaleUpperCase()


let promo__bg = document.querySelector(".promo__bg")
// promo__bg.style.background = "red"
promo__bg.style.backgroundImage = "url('../img/bg.jpg');"
// background-image: url(../img/mars.webp);


// ---------------------------------------------------------------

let btn = document.querySelectorAll(".promo__menu-item ")

function btn0() {
    location.reload()
}

function btn1() {
    promo__bg.style.backgroundPosition = "center"
    promo__bg.style.backgroundSize = ""
    promo__bg.style.backgroundImage = "url(../img/btn1.jfif)"
    text.innerHTML = "комедия".toLocaleUpperCase()
    text.style.color = "red"
    promo__title.innerHTML = "Человек против пчелы"
    promo__title.style.color = "red"
    promo__descr.innerHTML = "Атёр: Роуэн Аткинсон"
    promo__descr.style.color = "red"
    w1.innerHTML = "СЕРИАЛЫ"
    w2.innerHTML = "СЕРИАЛ"
    w3.innerHTML = "сериала" 
}

function btn2() {
    promo__bg.style.backgroundPosition = "center"
    promo__bg.style.backgroundImage = "url(../img/btn2.jpg)"
    text.innerHTML = "мультик".toLocaleUpperCase()
    text.style.color = "red"
    promo__title.innerHTML = "КУНГ-ФУ КРОЛИК"
    promo__title.style.color = "red"
    promo__descr.innerHTML = "Атёр: Роуэн Аткинсон"
    promo__descr.style.color = "red"
    w1.innerHTML = "МУЛЬТИКИ"
    w2.innerHTML = "МУЛЬТИК"
    w3.innerHTML = "мультика" 
}

function btn3() {
    promo__bg.style.backgroundPosition = "center"
    promo__bg.style.backgroundSize = "auto"
    promo__bg.style.backgroundImage = "url(../img/btn3.jfif)"
    text.innerHTML = "музыка".toLocaleUpperCase()
    promo__title.innerHTML = "YAMAKASI"
    promo__descr.innerHTML = "Испольнители: Miyagi & Andy panda"
    promo__descr.style.color = ""
    promo__title.style.color = ""
    text.style.color = ""
    w1.innerHTML = "МУЗЫКИ"
    w2.innerHTML = "МУЗЫКУ"
    w3.innerHTML = "музыки" 
}

function btn4() {
    promo__bg.style.backgroundPosition = "center"
    promo__bg.style.backgroundSize = ""
    promo__bg.style.backgroundImage = "url(../img/btn4.webp)"
    text.innerHTML = "Трейлеры".toLocaleUpperCase()
    text.style.color = ""
    promo__title.innerHTML = "Мстители"
    promo__title.style.color = ""
    promo__descr.innerHTML = "скоро"
    promo__descr.style.color = ""
    w1.innerHTML = "Трейлеры".toUpperCase()
    w2.innerHTML = "Трейлер".toUpperCase()
    w3.innerHTML = "трейлерa" 
}

btn.forEach(item=>{
        item.onclick = () => {
            btn.forEach(item2=>{
                if(item2.classList.contains("promo__menu-item_active")){
                    item2.classList.remove("promo__menu-item_active")
                }
            })
            item.classList.add("promo__menu-item_active")

            let number_btn = +item.attributes["data-n"].value

            btn.forEach(item3=>{
                if (number_btn === 0){
                    btn0()
                }
                if (number_btn === 1){
                    btn1()
                } 
                if (number_btn === 2){
                    btn2()
                }
                if (number_btn === 3){
                    btn3()
                }
                if (number_btn === 4){
                    btn4()
                }
                console.log(number_btn);
            })


            
            // console.log(number_btn);
        }
        // console.log(item);
})




