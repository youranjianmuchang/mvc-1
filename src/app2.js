import $ from 'jquery'
import './app2.css'

const $tab = $('#app2 .tab-bar');
const $content = $('#app2 .tab-content');

$tab.on('click', 'li', (e) => {
    let $currentEl = $(e.currentTarget);
    $currentEl.addClass('selected').siblings().removeClass('selected');
    let index = $currentEl.index();
    $content.children().eq(index).addClass('active').siblings().removeClass('active');
})

$content.children().eq(0).trigger('click');
$tab.children().eq(0).trigger('click');