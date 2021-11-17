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
        if(event.target.offsetParent.dataset.type === 'like_btn'){
            let button = event.target.offsetParent;
            button.classList.toggle('active');
            let countLike = button.querySelector('.countLike');
            if(button.classList.contains('active')){
                countLike.innerHTML = 1 + parseInt(countLike.innerHTML);
            }else{
                countLike.innerHTML = parseInt(countLike.innerHTML)-1;
            }
            
        }

    }
}

new LikeBtn('.like_btn');