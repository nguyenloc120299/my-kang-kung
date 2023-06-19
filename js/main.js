const image1 = document.getElementById('img1');
const image2 = document.getElementById('img2');
const image3 = document.getElementById('img3');
const image4 = document.getElementById('img4');
const image5 = document.getElementById('img5');
const image6 = document.getElementById('img6');
const predict = document.getElementById('predict')
const bgAnimation = document.getElementById('bg-animation')
const mainPredict = document.getElementById('main-predict');
const submitBtn = document.getElementById('submitBtn');
const confirmPredict = document.getElementById('confirm-predict')
if (submitBtn)
    submitBtn.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default behavior of the link

        mainPredict.style.display = 'none';
        confirmPredict.style.display = 'block'
    });



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
        image3.classList.add('move-left');
        image6.classList.add('move-left');
    }, 300);

    setTimeout(() => {
        const tempSrc = image1.src;
        image1.src = image3.src;
        image3.src = tempSrc;

        const tempClass = image1.classList;
        image1.classList = image3.classList;
        image3.classList = tempClass;

        const tempSrc2 = image4.src;
        image4.src = image6.src;
        image6.src = tempSrc2;

        const tempClass2 = image4.classList;
        image4.classList = image6.classList;
        image6.classList = tempClass2;

        setTimeout(() => {
            bgAnimation.classList.add('bg-animation');
            image1.classList.remove('move-left');
            image3.classList.remove('move-left');
            image4.classList.remove('move-left');
            image6.classList.remove('move-left');
        }, 100);

    }, 500);

    setTimeout(() => {
        bgAnimation.classList.remove('bg-animation');
    }, 1700);
}

setTimeout(swapImages, 700);


setTimeout(swapImages, 700);




