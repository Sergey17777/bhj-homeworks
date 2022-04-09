const banners = document.querySelectorAll('.reveal');
const viewPortSize = window.innerHeight;

window.addEventListener('scroll', function() {
    for (let item of banners) {
        const ads = {tob, bottom} = item.getBoundingClientRect();
        if ((viewPortSize - ads.top - 120 >= 0) && (ads.bottom - 100 >= 0)) { 
            /*вычитание 120 пикселей от верхней границы элемента 
            и 100 пикселей от нижней границы элемента добавил для 
            визуализации событий - появление/исчезание баннера. */
            item.classList.add('reveal_active');
        }
        else {
            item.classList.remove('reveal_active');
        }
    }
});
