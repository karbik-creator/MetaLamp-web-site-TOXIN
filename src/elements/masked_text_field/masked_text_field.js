import './masked_text_field.scss'
import '../text_field/text_field'
import * as $ from 'jquery'
import "../../../node_modules/inputmask/dist/jquery.inputmask";


$(document).ready(function(){
  $('[data-type="masked_text_field"]').inputmask("99.99.9999",{ "placeholder": "ДД.ММ.ГГГГ" });
});