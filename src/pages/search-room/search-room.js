import './search-room.scss'
import '../../elements/templates/template-main/template-main'
import '../../elements/datepicker/datepicker'
import { Datepicker } from '../../elements/datepicker/datepicker'
import '../../elements/select/select'
import { Select } from '../../elements/select/select'
import '../../elements/rangeSlider/rangeSlider'
import { RangeSlider } from '../../elements/rangeSlider/rangeSlider'
import '../../elements/checkboxlist/checkbox__list'
import '../../elements/pagination/pagination'
import '../../elements/richCheckbox/richCheckbox'
import '../../elements/expandable-checkbox-list/expandable-checkbox-list'
import { Slider } from '../../elements/slider/slider'
import * as $ from '../../../node_modules/jquery/src/jquery'
import '../../../node_modules/paginationjs/src/pagination'

import '../../elements/card-room/card-room'

const datepicker = new Datepicker('.datepicker', {
  format: 'ДД.МММ',
  placeholder: "ДД.МММ - ДД.МММ",
  countInput: 1,
  name: ['даты пребывания в отеле']
});

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

const rangeSlider = new RangeSlider({
  name: "диапазон цены",
  el: '&#8381',
  width: 266,
  step: 1000,
  min: 0,
  max: 15000,
  valueOne: 5000,
  valueSecond: 10000,
});
const comfortList = new Select('.select__comfort__list > .select', {
  data: [{
    select: false,
    nameConter: 'спальни',
    value: ['спальня', 'спальни', 'спален'],
    count: 2
  },
  {
    select: false,
    nameConter: 'кровати',
    value: ['кровать', 'кровати', 'кровать'],
    count: 2
  },
  {
    select: false,
    nameConter: 'ванные комнаты',
    value: ['ванная комната', 'ванные комнаты', 'ванных комнат'],
    count: 0
  }], placeholder: 'Комнаты', header: 'удобства номера'
});

const slider = new Slider('.slider');

$('.pagination__list').pagination({
  dataSource: [1, 2, 3, 4, 5, 6, 7, '...' , 35],
    pageSize: 1,
    autoHidePrevious: true,
    autoHideNext: true
})

let cardsRoom = document.querySelectorAll('.card');

