<?
    $blockId = $_POST['blockId']; // ID блока
?>

<!-- Шаблон ответа -->
<div class="personal-modal-photo">
    <img src="tmp/sert-big.jpg" alt="">
</div>
<div class="personal-modal-descr">
    <h2>Сертификат подтверждающий репутацию компании <? echo($blockId) ?></h2>
</div>
<div class="sert-nav">
    <a  data-id="1" href="#" class="sert-nav__prev changePage"></a>
    <a  data-id="3" href="#" class="sert-nav__next changePage"></a>
</div>

