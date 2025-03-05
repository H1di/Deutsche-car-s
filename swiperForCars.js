const swiperForCars = new Swiper('.swiperForCars', {
            loop: true,
            slidesPerView: 3,
            spaceBetween: 10,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            
            breakpoints: {
                400: {
                    slidesPerView: 1,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                }
            },

            autoplay: {
            },
        });

