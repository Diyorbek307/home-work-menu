let logo = document.querySelector('.logo')
let del = document.querySelector('.nuke')
let bod = document.querySelector('.bod')
let menu = document.querySelector('.dad_menu')
let burger = document.querySelector('.burger_ww')

logo.onclick = () => {
    del.classList.add('inf')
    bod.classList.remove('bod')
    menu.classList.add('act')
   
}
 menu.onclick = () => {
        burger.classList.add('burger')
        burger.classList.toggle('burger_ww')

       
    }
