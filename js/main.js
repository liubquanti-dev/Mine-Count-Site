container = document.querySelector('.container');
// map = document.querySelector('.roll');

book_anim = document.querySelector('.book_anim');
book_opened = false

// const mapPosition = document.querySelector('.map').offsetTop;
const bookPosition = document.querySelector('.book').offsetTop;
// console.log('Map ', mapPosition, ' Book ', bookPosition);
// container.addEventListener('scroll', function () {
//     const scrollPosition = container.scrollTop;
//     console.log(scrollPosition)

//     map.classList.remove('rolled')
//     map.classList.remove('unrolled')
//     map.classList.remove('rolling')

//     let newClass = '';
//     switch (true) {
//         case (scrollPosition >= map.height / 2 && scrollPosition < mapPosition): {
//             newClass = 'rolling'
//             break;
//         }
//         case (scrollPosition >= mapPosition): {
//             newClass = 'unrolled'
//             break;
//         }
//         default: newClass = 'rolled';
//     }

//     // if (scrollPosition >= bookPosition) {
//     //     if (!book_opened) {
//     //         book_anim.play();
//     //         book_opened = true;
//     //     }
//     // }
//     map.classList.add(newClass);
// });

book_anim.addEventListener('click', (event) => {
    book_anim.play();
})

book_anim.addEventListener('ended', (event) => {
    window.location.href = "https://mcount.fun";
})