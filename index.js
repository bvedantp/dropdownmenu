import './input.scss';

let mainBody = document.querySelector('body');
/*
for(let i=0;i<dropButton.length;i++){
    dropButton[i].addEventListener('click', ()=> {
        dropMenu[i].classList.toggle('invisible');
        //dropMenu[i].style.maxHeight = null;
    })
}*/

export default function addDropDownButton (buttonName, arrayName) {
    let dropDown = document.createElement('div');
    dropDown.classList.add('drop-down');
    let button = document.createElement('button');
    button.classList.add('drop-button');
    button.innerText = `${buttonName}`;
    let dropMenu = document.createElement('div');
    dropMenu.classList.add('drop-menu');

    mainBody.appendChild(dropDown);
    dropDown.appendChild(button);
    dropDown.appendChild(dropMenu);

    for(let i=0; i<arrayName.length;i++){
        let menuItem = document.createElement('a');
        menuItem.innerText = `${arrayName[i]}`;
        menuItem.setAttribute('href', '#');
        dropMenu.appendChild(menuItem);
    }

    button.addEventListener('click', ()=> {
        dropMenu.classList.toggle('invisible');
    })

}
/*
<div class="drop-down">
<button class="drop-button">Menu</button>
<div class="drop-menu">
<a href="#">Item 1</a>
<a href="#">Item 2</a>
<a href="#">Item 3</a>
</div>
</div>
*/

//now compile using webpack and export module

//addDropDownButton('Menu',['Item1','Item3','Item2']);

