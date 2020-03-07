import $ from 'jquery'
import './app1.css'

const $button1 = $('#add');
const $button2 = $('#reduce');
const $button3 = $('#mul');
const $button4 = $('#divide');

$button1.on('click', () => {
    let $num = $('#num');
    let num = parseInt($num.text());
    $num.text(num += 1)
})

$button2.on('click', () => {
    let $num = $('#num');
    let num = parseInt($num.text());
    $num.text(num -= 1)
})

$button3.on('click', () => {
    let $num = $('#num');
    let num = parseInt($num.text());
    $num.text(num *= 2)
})

$button4.on('click', () => {
    let $num = $('#num');
    let num = parseInt($num.text());
    $num.text(num /= 2)
})