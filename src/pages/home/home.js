import './home.scss'
import '../../elements/templates/template-main/template-main'
import '../../elements/form_search/form_search'
import { Select } from '../../elements/select/select'
import { Datepicker } from '../../elements/datepicker/datepicker'

const select = new Select('.select', {
  data: [{
    select: true,
    nameConter: 'Взрослые',
    value: ["гость","гостя","гостей"],
    count: 0
  },
  {
    select: true,
    nameConter: 'Дети',
    value: ["гость","гостя","гостей"],
    count: 0
  },
  {
    select: false,
    nameConter: 'Младенцы',
    value: ["младенец","младенца","младенцев"],
    count: 0
  }], placeholder: 'Сколько гостей', header: 'Гости'
});

const datepicker = new Datepicker('.datepicker', {
  format: 'ДД.ММ.ГГГГ',
  placeholder: "ДД.ММ.ГГГГ",
  countInput: 2,
  name: ['прибытие','выезд']
});