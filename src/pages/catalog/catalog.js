import './catalog.scss'
import {Datepicker,Select} from '../../bundle'

new Select("#select1>.select>.select__wrapper", {
    heading: "гости",
    placeholder: "Сколько гостей",
    data: [
      { id: 1, value: "Взрослые", count: 0 },
      { id: 2, value: "Дети", count: 0 },
      { id: 3, value: "Младенцы", count: 0 },
    ],
});

new Select("#select2>.select>.select__wrapper", {
  heading: "удобства номера",
  placeholder: "Выбирите удобства",
  data: [
    { id: 1, value: "спальни", count: 0 },
    { id: 2, value: "кровати", count: 0 },
    { id: 3, value: "ванные комнаты", count: 0 },
  ],
});


