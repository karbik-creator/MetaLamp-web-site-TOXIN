import './room-details.scss'
import '../../elements/templates/template-main/template-main'
import '../../elements/info_list/info_list'
import '../../elements/form_booking/form_booking'
import '../../elements/review/review'
import '../../elements/bulletlist/bulletlist'
import { Datepicker} from '../../elements/datepicker/datepicker'
import { Select } from '../../elements/select/select'

const datepicker = new Datepicker('.datepicker', {
    format: 'ДД.ММ.ГГГГ',
    placeholder: "ДД.ММ.ГГГГ",
    countInput: 2,
    name: ['прибытие', 'выезд']
});

const select = new Select('.select', {
    data: [{
        select: true,
        nameConter: 'Взрослые',
        value: ["гость", "гостя", "гостей"],
        count: 0
    },
    {
        select: true,
        nameConter: 'Дети',
        value: ["гость", "гостя", "гостей"],
        count: 0
    },
    {
        select: false,
        nameConter: 'Младенцы',
        value: ["младенец", "младенца", "младенцев"],
        count: 0
    }], placeholder: 'Сколько гостей', header: 'Гости'
});

