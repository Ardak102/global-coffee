const formBtn = document.getElementById('btn');
const modal = document.getElementById('modal');
const poppin = document.getElementById('poppin')
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const yesWindow = document.getElementById('yes-window');
const noWindow = document.getElementById('no-window');
const yesAnim = document.getElementById('yes-anim');
const noAnim = document.getElementById('no-anim');

function getPoppin() {
    poppin.style.transform = 'translateY(0)'
}

formBtn.addEventListener('click', () => {
        modal.style.transform = 'translateY(0)'
        setTimeout(getPoppin, 3000)

    })

yesBtn.addEventListener('click', () => {
    yesWindow.style.transform = 'translateY(0)'
    yesAnim.style.transition = '.4s linear'
    yesAnim.style.transform = 'translateY(0)'
})

noBtn.addEventListener('click', () => {
    noWindow.style.transform = 'translateY(0)'
    noAnim.style.transition = '.4s linear'
    noAnim.style.transform = 'translateY(0)'
})

yesWindow.addEventListener('click', () => {
    yesWindow.style.transform = 'translate(-100%)'
    poppin.style.transform = 'translate(-100%)'
    modal.style.transform = 'translate(-100%)'
})

noWindow.addEventListener('click', () => {
    noWindow.style.transform = 'translate(-100%)'
    poppin.style.transform = 'translate(-100%)'
    modal.style.transform = 'translate(-100%)'
})

