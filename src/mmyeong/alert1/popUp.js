
function buttonEffect() {
    const modalBg = document.querySelector('.popUp1');
    modalBg.classList.toggle('show');
    if (modalBg.classList.contains('show')) {
        document.querySelector("body").style.overflow = 'hidden';
    }
}


function modalEffect(e) {
    const modalBg = document.querySelector('.popUp1');
    if (e.target == modalBg){
        modalBg.classList.toggle('show');
        if (modalBg.classList.contains('show')) {
            document.querySelector("body").style.overflow = 'hidden';
        }
    }
}

