console.log('helloworld!');

$(window).on('load', function () {
    setTimeout(function(){
        $('.loading').fadeOut(800);
    },2500);
});

$(window).on('load', function () {
    const mapHeight = document.getElementById('content__map').scrollHeight;
    const mapWidth = document.getElementById('content__map').scrollWidth;
    $('.content__overlay').css('height', mapHeight);
    $('.content__overlay').css('width', mapWidth);
});

$(function () {
    $(window).resize(function () {
        const mapHeight = document.getElementById('content__map').scrollHeight;
        const mapWidth = document.getElementById('content__map').scrollWidth;
        $('.content__overlay').css('height', mapHeight);
        $('.content__overlay').css('width', mapWidth);
    });
});

$('.content__shop-01').click(function(){
    $('.modal').css('display','block');
    $('.modal__content').html('<h2 class="modal__title">フクロウ&エキゾチックアニマルカフェ<br>わたどーる</h2><p class="modal__text">とにかくいろんな動物がいます。<br>スタッフが親切に触って良い動物を教えてくれます。<br>ドリンクは缶オアペットボトルのセルフテイクになっており、コロナ対策も万全！</p><img src="./image/shop_modal/photo00001.jpg"><img src="./image/shop_modal/photo00002.jpg">');
    console.log('open');
});

$('.content__shop-02').click(function(){
    $('.modal').css('display','block');
    $('.modal__content').html('<h2 class="modal__title">うさぎのWONDERLAND</h2><p class="modal__text">メルヘン感満点の店内でウサギと触れ合えるカフェです。<br>インスタ映えにもおすすめ♪<br>ウサギと触れ合うスペースと飲食スペースはうさぎを鑑賞できるようガラスで仕切られています。</p><img src="./image/shop_modal/S__112443394.jpg"><img src="./image/shop_modal/S__112443396.jpg"><img src="./image/shop_modal/S__42737891.jpg"><img src="./image/shop_modal/S__42737895.jpg">');
    console.log('open');
});

$('.content__shop-03').click(function(){
    $('.modal').css('display','block');
    $('.modal__content').html('<h2 class="modal__title">CAT CAFE MOCHA</h2><p class="modal__text">落ち着いた雰囲気の店内で個性豊かな猫たちと触れ合うことができます。<br>人気の漫画やゲームを無料で楽しめて、ドリンクは飲み放題。<br>追加料金の猫用おやつで一躍人気者に！<br>カップル割がある為、カップルでのご来店がオススメ</p><img src="./image/shop_modal/photo00025.jpg"><img src="./image/shop_modal/IMG_1281.JPG"><img src="./image/shop_modal/S__42737878.jpg">');
    console.log('open');
});

$('.content__shop-04').click(function(){
    $('.modal').css('display','block');
    $('.modal__content').html('<h2 class="modal__title">HARRYWOOD</h2><p class="modal__text">二人で一匹のハリネズミと触れ合えます。<br>素手が怖い方にはグローブの貸し出しも無料で行っています。<br>落ち着いた雰囲気の店内で座りながらゆっくり触れ合うことができます。</p><img src="./image/shop_modal/S__112435202.jpg"><img src="./image/shop_modal/S__112435204.jpg"><img src="./image/shop_modal/S__42737886.jpg">');
    console.log('open');
});

$('.content__square-01').click(function(){
    $('.modal').css('display','block');
    $('.modal__content').html('<h2 class="modal__title">CAT CAFE MOCHA</h2><p class="modal__text">落ち着いた雰囲気の店内で個性豊かな猫たちと触れ合うことができます。<br>人気の漫画やゲームを無料で楽しめて、ドリンクは飲み放題。<br>追加料金の猫用おやつで一躍人気者に！<br>カップル割がある為、カップルでのご来店がオススメ</p><img src="./image/shop_modal/photo00025.jpg"><img src="./image/shop_modal/IMG_1281.JPG"><img src="./image/shop_modal/S__42737878.jpg">');
    console.log('open');
});

$('.content__square-02').click(function(){
    $('.modal').css('display','block');
    $('.modal__content').html('<h2 class="modal__title">フクロウ&エキゾチックアニマルカフェ<br>わたどーる</h2><p class="modal__text">とにかくいろんな動物がいます。<br>スタッフが親切に触って良い動物を教えてくれます。<br>ドリンクは缶オアペットボトルのセルフテイクになっており、コロナ対策も万全！</p><img src="./image/shop_modal/photo00001.jpg"><img src="./image/shop_modal/photo00002.jpg">');
    console.log('open');
});

$('.content__square-03').click(function(){
    $('.modal').css('display','block');
    $('.modal__content').html('<h2 class="modal__title">HARRYWOOD</h2><p class="modal__text">二人で一匹のハリネズミと触れ合えます。<br>素手が怖い方にはグローブの貸し出しも無料で行っています。<br>落ち着いた雰囲気の店内で座りながらゆっくり触れ合うことができます。</p><img src="./image/shop_modal/S__112435202.jpg"><img src="./image/shop_modal/S__112435204.jpg"><img src="./image/shop_modal/S__42737886.jpg">');
    console.log('open');
});

$('.content__square-04').click(function(){
    $('.modal').css('display','block');
    $('.modal__content').html('<h2 class="modal__title">うさぎのWONDERLAND</h2><p class="modal__text">メルヘン感満点の店内でウサギと触れ合えるカフェです。<br>インスタ映えにもおすすめ♪<br>ウサギと触れ合うスペースと飲食スペースはうさぎを鑑賞できるようガラスで仕切られています。</p><img src="./image/shop_modal/S__112443394.jpg"><img src="./image/shop_modal/S__112443396.jpg"><img src="./image/shop_modal/S__42737891.jpg"><img src="./image/shop_modal/S__42737895.jpg">');
    console.log('open');
});

$('.modal__header').click(function(){
    $('.modal').css('display','none');
    console.log('close');
});
