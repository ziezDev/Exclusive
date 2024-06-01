// arraylist used 
const arrayList = ['Home', 'Contact', 'About', 'Sign Up']
const links = document.getElementById('linkList')
for (let i=0; i < arrayList.length; i++) {
    links.innerHTML += `<a class="main-item-link" href=""> ${arrayList[i]}</a>`
}
const array = [`Woman's Fashion`, `Men's Fashion`, `Electronics`, `Home & Lifestyle`, `Medicine
`, `Sports & Outdoor`, `Baby's & Toys`, `Groceries & Pets`, `Health & Beauty`]
const menuList = document.getElementById('menuList')
for (let i=0; i < array.length; i++) {
    menuList.innerHTML += `<div class="fashion-text-box">
    <span> ${array[i]} </span>
    <img id="image_${i}" class="fashion-text-box-img-first" src="./img/arrow.svg" alt="arrow-svg">
    </div>`
    if (i === 0 || i === 1) {
        if (document.getElementById(`image_${i}`)) {
            document.getElementById(`image_${i}`).style.display = 'block'
        }
    }
}
// object list used
// const arrayObjList = [
//     { title: 'Home', link: 'http://127.0.0.1:5500/index.html' }, 
//     { title: 'Contact', link: 'http://127.0.0.1:5500/index.html' }, 
//     { title: 'About', link: 'http://127.0.0.1:5500/index.html' }, 
//     { title: 'Sign Up', link: 'http://127.0.0.1:5500/index.html' } 
// ]
// const links = document.getElementById('linkList')
// for (let i=0; i < arrayObjList.length; i++) {
//     links.innerHTML += `<a class="main-item-link" href="${arrayObjList[i].link}"> ${arrayObjList[i].title}</a>`
// }