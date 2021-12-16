import './formElements.scss'
import '../../elements/logo/logo'
import '../../elements/text_field/text_field'
import '../../elements/select/select'
import '../../elements/masked_text_field/masked_text_field'
import '../../elements/datepicker/datepicker'
import '../../elements/subscriptionTextField/subscriptionTextField'
import '../../elements/expandable-checkbox-list/expandable-checkbox-list'
import '../../elements/richCheckbox/richCheckbox'
import '../../elements/bulletlist/bulletlist'
import '../../elements/info_list/info_list'
import '../../elements/review/review'
import '../../elements/radio_btn/radio_btn'
import '../../elements/toggle_btn/toggle_btn'
import '../../elements/like_btn/like_btn'
import '../../elements/rateTrack/rateTrack'
import '../../elements/btn/btn'
import '../../elements/pagination/pagination'
import '../../elements/rangeSlider/rangeSlider'
import {RangeSlider} from '../../elements/rangeSlider/rangeSlider'
const rangeSlider = new RangeSlider({
    name: "Range Slider",
    el: '&#8381',
    width: 266,
    step: 1000,
    min: 0,
    max: 15000,
    valueOne: 5000,
    valueSecond: 10000,
});