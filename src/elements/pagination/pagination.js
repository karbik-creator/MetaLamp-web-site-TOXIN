import './pagination.scss'
import './img/arrow_forward_white_24dp.svg'

const getTemplatePagination = function (numbers) {
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
            arrayNumbers[i] === '...' ? array.push(`<div class="pagination__item" data-page="dots">${arrayNumbers[i]}</div>`) :
                array.push(`<div class="pagination__item ${arrayNumbers[i] === 1 ? '__item-active' : ''}" data-page="${arrayNumbers[i]}" tabindex='0'>${arrayNumbers[i]}</div>`)
        }
        return array
    });
    return `
    <div class="pagination__list"> 
    <div class="pagination__item __item-prev" data-type="prev" tabindex='0'>
    <span class="material-icons" data-type="prev"> arrow_forward</span>
    </div>
    ${countItem().join('')}
    <div class="pagination__item __item-next" data-type="next" tabindex='0'>
    <span class="material-icons" data-type="next"> arrow_forward</span>
    </div>
    </div>
    <div class="pagination__text">1 – 12 из 100+ вариантов аренды</div>
    `
}


class Pagination {
    constructor(selector, options) {
        this.element = document.querySelector(selector);
        this.options = options;
        this.render();
    }
    render() {
        const { countElementsInPage } = this.options;
        this.element.innerHTML = '';
        this.element.insertAdjacentHTML('afterbegin', getTemplatePagination(countElementsInPage));
        this.setup(this.element);

    }
    setup(element) {
        this.pages = element.querySelectorAll('li');
        this.btnNextPage = element.querySelector('[data-type="next"]');
        this.btnPrevPage = element.querySelector('[data-type="prev"]');
        this.paginationList = element.querySelector('.pagination__list');
        this.clickHandler = this.clickHandler.bind(this);
        element.addEventListener('click', this.clickHandler);
        element.addEventListener('keyup', this.clickHandler);
        this.pageActive = 1;
        this.li = '';
    }
    clickHandler(event) {
        if (event.code === 'Space' || event.type === 'click') {
            const { type } = event.target.dataset;
            if (type === 'page') {
                this.pageActive = parseInt(event.target.dataset.page);
                this.toggle(event.currentTarget, event.target)
            }
            if (type === 'next') {
                this.nextPage()
            }
            if (type === 'prev') {
                this.prevPage()
            }
        }
    }
    toggle(elementParent, page) {
        if (elementParent.querySelectorAll('.pagination__item.__item-active').length > 0) {
            this.pages.forEach(item => item.classList.remove('__item-active'))
        }
        page.classList.toggle('__item-active')
        if (page.dataset.page > 1) {
            this.btnPrevPage.classList.add('active')
        } else {
            this.btnPrevPage.classList.remove('active')
        }
    }
    nextPage() {
        let prevNumberPage = this.pageActive;
        this.pageActive >= this.options.countElementsInPage ? this.pageActive = 1 : this.pageActive++;
        if (this.pageActive > 1) {
            this.btnPrevPage.classList.add('active');

        } else {
            this.btnPrevPage.classList.remove('active')
        }
        if (this.pageActive === 4) {
            this.li = this.paginationList.querySelector(`[data-page='2']`);

            this.li.setAttribute('data-page', `dots`)
            this.li.innerHTML = '...';
            this.li = this.paginationList.querySelector(`[data-page='3']`);
            this.li.setAttribute('data-page', `${this.pageActive}`)
            this.li.innerHTML = this.pageActive;
        }
        if (this.pageActive > 4 && this.pageActive < this.options.countElementsInPage - 2) {
            this.li = this.paginationList.querySelector(`[data-page='${prevNumberPage}']`);
            this.li.setAttribute('data-page', `${this.pageActive}`);
            this.li.innerHTML = this.pageActive;
        }
        if (this.pageActive < 4 || this.pageActive > this.options.countElementsInPage - 2) {
            if (prevNumberPage === this.options.countElementsInPage) {
                this.element.innerHTML = '';
                this.element.insertAdjacentHTML('afterbegin', getTemplatePagination(this.options.countElementsInPage));
                this.setup( this.element)
            }else{
                let prevElementPage = this.paginationList.querySelector(`[data-page='${prevNumberPage}']`);
            prevElementPage.classList.remove('__item-active');
            let activeElementPage = this.paginationList.querySelector(`[data-page='${this.pageActive}']`);
            console.log(activeElementPage)
            activeElementPage.classList.add('__item-active');
            }
            
        }
        if (this.pageActive === this.options.countElementsInPage - 2) {
            this.li = this.paginationList.querySelector(`[data-page='${prevNumberPage}']`);
            this.li.setAttribute('data-page', `${this.pageActive}`);
            this.li.innerHTML = this.pageActive;
            this.li = this.paginationList.querySelectorAll(`[data-page='dots']`)[1];
            this.li.setAttribute('data-page', `${this.pageActive + 1}`)
            this.li.innerHTML = this.pageActive + 1;
        }

    }
    prevPage() {
        /*let prevPage = this.pageActive;
        this.pageActive <= 1 ? this.pageActive = this.pages.length : this.pageActive--;
        if (this.pageActive === 1) {
            this.btnPrevPage.classList.remove('active')
        } else {
            this.btnPrevPage.classList.add('active')
        }
        this.pages.forEach((item, index) => {
            if (index + 1 == prevPage) {
                item.classList.remove('__item-active');
            }
            if (index + 1 == this.pageActive) {
                item.classList.add('__item-active');
            }
        })*/
    }

}

