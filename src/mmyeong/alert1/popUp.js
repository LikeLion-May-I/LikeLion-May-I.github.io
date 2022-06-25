function buttonEffect(e) {
    const modal = document.querySelector('.popUp1');
    const popUp1__body = document.querySelector('.popUp1__body');
    
    if (e.target != popUp1__body){
        modal.classList.toggle('show');
        if (modal.classList.contains('show')) {
            document.querySelector("body").style.overflow = 'hidden';
        }
    }
}

