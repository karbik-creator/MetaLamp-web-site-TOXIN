import './index.scss'
import {Datepicker,Select} from '../../bundle'


/*new Pagination('pagination', {
    countElementsInPage: 20
});*/

new Datepicker(".datepicker", "ДД.ММ.ГГГГ");

const select = new Select(".select__wrapper", {
  heading: "гости",
    placeholder: "Сколько гостей",
    data: [
      { id: 1, value: "Взрослые", count: 0 },
      { id: 2, value: "Дети", count: 0 },
      { id: 3, value: "Младенцы", count: 0 },
    ],
});
