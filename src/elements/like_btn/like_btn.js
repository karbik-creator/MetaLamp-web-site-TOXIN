import './like_btn.scss'

class LikeBtn {
    constructor(selector) {
        this.elements = document.querySelectorAll(selector);
        this.setup()
    }

    setup(){
        this.elements.forEach(element=>{
            element.addEventListener('click', this.toggle)
        })
    }

    toggle(event){
        let likeBtn = event.currentTarget;
        let countLike = likeBtn.querySelector('.like-btn__count');
        likeBtn.classList.toggle('__btn-active');
        if(likeBtn.classList.contains('__btn-active')){
            countLike.innerHTML = 1 + parseInt(countLike.innerHTML);
        }else{
            countLike.innerHTML = parseInt(countLike.innerHTML)-1;
        }
    }
}

new LikeBtn('.like-btn');