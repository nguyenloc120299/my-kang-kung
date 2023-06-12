const image1 = document.getElementById('img1');
const image2 = document.getElementById('img2');
const image3 = document.getElementById('img3');
const image4 = document.getElementById('img4');
const image5 = document.getElementById('img5');
const image6 = document.getElementById('img6');
const predict = document.getElementById('predict')

function swapImages() {
    image1.classList.add('move-left');
    image2.classList.add('move-left');
    image4.classList.add('move-left');
    image5.classList.add('move-left');

    setTimeout(() => {
        image1.src = 'assets/images/layer-loading/Frame 150-1.png';
        image3.src = 'assets/images/layer-loading/Frame 149-1.png';
        image4.src = 'assets/images/layer-loading/Frame 151-1.png';
        image5.src = 'assets/images/layer-loading/Frame 150.png';
    }, 200);

    setTimeout(() => {
        image1.classList.remove('move-left');
        image2.classList.remove('move-left');
        image4.classList.remove('move-left');
        image5.classList.remove('move-left');
        image3.classList.add('move-right');
        image6.classList.add('move-right');
    }, 300);

    setTimeout(() => {
        image3.classList.remove('move-right');
        image6.classList.remove('move-right');
    }, 500);
}

setTimeout(swapImages, 500);


$(function () {
    $('#daterange').daterangepicker({
        opens: 'center'
    }, function (start, end, label) {
        console.log('A date range was chosen: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
});

