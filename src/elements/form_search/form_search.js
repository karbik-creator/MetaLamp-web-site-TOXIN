import './form_search.scss'
import '../datepicker/datepicker'
import {getTemplateDatepicker,Datepicker} from '../datepicker/datepicker'
import '../select/select'
import select from '../select/select'
import '../btn/btn'

new Datepicker(".datepicker",{
    placeholder:"ДД.ММ.ГГГГ",
    countInput:2,
    name:['Прибытие','Выезд']
});

