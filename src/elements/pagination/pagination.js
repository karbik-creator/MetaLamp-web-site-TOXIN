import './pagination.scss'

export const getTemplatePagination = function (numbers) {
    const countItem = (() => {
        let array = [];
        let arrayNumbers = [];
        if (numbers > 5) { arrayNumbers = [1, 2, 3, '...', numbers] }
        if (numbers <= 5) {
            for (let i = 1; i <= numbers; i++) {
                arrayNumbers.push(i)
            }
        }
        for (let i = 0; i < arrayNumbers.length; i++) {
            arrayNumbers[i] == 1 ? array.push(`<div class="pagination__item active" data-type="page" data-page="${arrayNumbers[i]}">${arrayNumbers[i]}</div>`) :
                array.push(`<div class="pagination__item" data-type="page" data-page="${arrayNumbers[i]}">${arrayNumbers[i]}</div>`)
        }
        return array
    });
    return `<div class="pagination__wrapper">
    <div class="pagination__list"> 
    ${countItem().join('')}
    <div class="pagination__item__next" data-type="next"></div>
    </div>
    <div class="pagination__text">1 – 12 из 100+ вариантов аренды</div>
    </div>
    `
}


export class Pagination {
    constructor(id, options) {
        this.element = document.getElementById(id);
        this.options = options;
        this.render();
        this.setup();
    }
    render() {
        const { countElementsInPage } = this.options;
        this.element.insertAdjacentHTML('afterbegin', getTemplatePagination(countElementsInPage))
    }
    setup() {
        this.pages = this.element.querySelectorAll('.pagination__item')
        this.btnNextPage = this.element.querySelector('.pagination__item__next')
        this.clickHandler = this.clickHandler.bind(this);
        this.element.addEventListener('click', this.clickHandler)
        this.pageActive = 1;
    }
    clickHandler(event) {
        const { type } = event.target.dataset;
        if (type === 'page') {
            this.pageActive = parseInt(event.target.dataset.page);
            this.toggle(event.target)
        }
        if (type === 'next') {
            this.nextPage()
        }
    }
    toggle(element) {
        if (this.element.querySelectorAll('.pagination__item.active').length > 0) {
            this.pages.forEach(item => item.classList.remove('active'))
        }
        element.classList.toggle('active')
    }
    nextPage() {
        let prevPage = this.pageActive;
        this.pageActive >= this.pages.length ? this.pageActive = 1 : this.pageActive++;
        this.pages.forEach((item, index) => {
            if (index + 1 == prevPage) {
                item.classList.remove('active');
            }
            if (index + 1 == this.pageActive) {
                item.classList.add('active');
            }
        })



    }

}

new Pagination('pagination',{countElementsInPage:5})

