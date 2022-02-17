

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.tabs__btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.tab__content').forEach(function (tabContent) {
        tabContent.classList.remove('tab__content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add(`tab__content-active`)
      document.querySelectorAll('.tabs__btn').forEach(function (tabContent) {
        tabContent.classList.remove('reviews-btn-active')
      })
      this.classList.add('reviews-btn-active')
    })
  })
})


//Появление контейнера инпут

let dropInput = document.getElementById('inputActive');

function dropContent() {
    inputDrop=document.getElementById('inputActive');
    if(inputDrop.focus) {
        document.getElementById('drop-input').classList.add('show-drop-input');
        document.getElementById('headerForm').classList.add('input-container-border');
    }
}

dropInput.addEventListener('click', dropContent)

//Закрытие контейнера ипут

const input = document.querySelector('#inputActive');
const div = document.querySelector('#drop-input');

document.addEventListener( 'click', (e) => {
	const withinDiv = e.composedPath().includes(div);
    const withinInput = e.composedPath().includes(input);

	if ( ! withinDiv && ! withinInput ) {
		document.getElementById('drop-input').classList.remove('show-drop-input');
        document.getElementById('headerForm').classList.remove('input-container-border');
	}
})

//Свайпер баннер

const swiperBanner = new Swiper('.swiper-banner', {
  
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-banner-next',
    prevEl: '.swiper-banner-prev',
  },
  autoplay: {
    delay: 10000,
  },
  disableOnInteraction: false,
  pagination: {
    el: '.swiper-pagination',
  },
})

//свайпер скидки

const swiperSale = new Swiper('.swiper-sale', {
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-sale-next',
    prevEl: '.swiper-sale-prev',
  },
  centeredSlides: false,
  breakpoints: {
    
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    800: {
      slidesPerView: 2.2,
      spaceBetween: 30
    },    
    1038: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1134: {
      slidesPerView: 3,
      spaceBetween: 80,
    }
  }
})
window.innerWidth <= 768 ? swiperSale.destroy() : ''


const swiperCooking = new Swiper('.swiper-cooking', {
  slidesPerView: 1,
  spaceBetween: 10,
  grabCursor:true,
  navigation: {
    nextEl: '.swiper-cooking-next',
    prevEl: '.swiper-cooking-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    }
  }
})

window.innerWidth <= 1340 ? swiperCooking.destroy() : ''

//Свайпер отзывы

const swiperReviews = new Swiper('.swiper-reviews', {
  spaceBetween: 20,
  grabCursor:true,
  freeMode: true,
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  navigation: {
    nextEl: '.swiper-reviews-next',
    prevEl: '.swiper-reviews-prev',
  },
  observeParents: true,
  observeSlideChildren: true,
  observer: true,
  loop: true,
  scrollbar: {
    el: '.swiper-reviews-scrollbar',
  },
  breakpoints: {
    320: {
      slidesPerView: 1.1,
      spaceBetween:15,
    },
    444: {
      slidesPerView: 1.5,
      spaceBetween:15,
    },
    554: {
      slidesPerView: 2,
      spaceBetween:15,
    },
    834: {
      slidesPerView: 3,
      spaceBetween: 15
    },
    1068: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});


const swiperInstagram = new Swiper('.swiper-instagram', {
  grabCursor:true,
  freeMode: true,
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  navigation: {
    nextEl: '.swiper-instagram-next',
    prevEl: '.swiper-instagram-prev',
  },
  scrollbar: {
    el: '.swiper-instagram-scrollbar',
  },
  slidesPerView: 4,
  spaceBetween: 30,

  breakpoints: {
    320: {
      slidesPerView: 1.2
    },
    440: {
      slidesPerView: 1.2
    },
    500: {
      slidesPerView: 1.4
    },
    545: {
      slidesPerView: 1.6
    },
    602: {
      slidesPerView: 1.8
    },
    666: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    834: {
      slidesPerView: 3,
      spaceBetween: 15
    },
    1068: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});



//Подробнее

const btns = document.querySelectorAll('.reviews-card-txt-more')

if (btns.length > 0) {

  btns.forEach(btn => {
    const dots = btn.parentNode.querySelector('.dots')
    const more = btn.parentNode.querySelector('.more')

    if (dots && more) {
      more.style.display = "none";

      btn.addEventListener('click', () => {

        if (dots.style.display === "none") {
          dots.style.display = "inline";
          btn.innerHTML = "подробнее";
          more.style.display = "none";
        } else {
          dots.style.display = "none";
          btn.innerHTML = "скрыть";
          more.style.display = "inline";
        }
      })
    }
  })
}

//Стилизация кнопки "В корзину при нажатии"
const shoppingBtns = document.querySelectorAll('.sale-card_btn')

if (shoppingBtns.length > 0) {

    shoppingBtns.forEach(btn => {
        const defaultBtn = btn.parentNode.querySelector('.sale-btn-default')
        const editBtn = btn.parentNode.querySelector('.sale-btn-edit')

        if (defaultBtn) {
            editBtn.style.display = "none";
            btn.addEventListener('click', () => {
                editBtn.style.display = "flex";
                defaultBtn.style.display = "none";
            })
        }
        //Возвращение кнопки в исходное состояние при клике вне нее
        document.addEventListener('click', (e) => {
            const closeBtn = document.querySelectorAll('.sale-card_btn');
            if (!e.target.closest('.sale-card_btn')) {
                closeBtn.forEach(function (el) {
                    defaultBtn.style.display = "flex";
                    editBtn.style.display = "none";
                })
            }
        })
    })
}



//Выпадающее меню

    //Появление выпадающего меню

    function menuBtnOne() {
      document.getElementById("myDropdownOne").classList.toggle("show");
      document.getElementById("rectangleOne").classList.toggle("hero__header-llist-Two_active");
      window.onclick = function (event) {
          if (!event.target.matches('.dropbtn')) {
              var dropdowns = document.getElementsByClassName("dropdown-content");
              var i;
              for (i = 0; i < dropdowns.length; i++) {
                  var openDropdown = dropdowns[i];
                  if (openDropdown.classList.contains('show')) {
                      openDropdown.classList.remove('show');
                  }
              }
          }
      };
  
      document.addEventListener('click', function(eventTwo) {
          if (!eventTwo.target.matches('.hero__header-llist-btn')) {
              var dropdownsTwo = document.getElementsByClassName("hero__header-llist-btn");
              var t;
              for (t = 0; t < dropdownsTwo.length; t++) {
                  var openDropdownTwo = dropdownsTwo[t];
                  if (openDropdownTwo.classList.contains('hero__header-llist-btn_active')) {
                      openDropdownTwo.classList.remove('hero__header-llist-btn_active');
                  }
              }
          }
      });
  }


  // Закрытие выпадающего меню при клике в другую область
  window.onclick = function (event) {
      if (!event.target.matches('.dropbtn')) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
              var openDropdown = dropdowns[i];
              if (!event.target.closest('.dropdown-content') &&  openDropdown.classList.contains('show')) {
                  openDropdown.classList.remove('show');
              }
          }
      }
  };

  document.addEventListener('click', function(eventThree) {
      if (!eventThree.target.matches('.header_user-img')) {
          var dropdownsTwo = document.getElementsByClassName("header_user-img");
          var t;
          for (t = 0; t < dropdownsTwo.length; t++) {
              var openDropdownTwo = dropdownsTwo[t];
              if (!event.target.closest('.dropdown-content') &&openDropdownTwo.classList.contains('menu-dropdown-user-img')) {
                  openDropdownTwo.classList.remove('menu-dropdown-user-img');
              }
          }
      }
  });
  

  function dropdownMenuUser() {
      document.getElementById("dropdown-menu-user").classList.toggle("show");
      document.getElementById("btnDropdownUser").classList.toggle("menu-dropdown-user-img");
  }
  
//Бургер меню
  document.querySelector('#btnMenu').addEventListener('click', function(){
    document.querySelector('#dropMenu').classList.toggle('menu-drop-is-active');
    document.querySelector('#btnMenu').classList.toggle('btn-menu-close');
  })
  


  //Читать далее "особенности мяса"

  function showMore() {
    document.querySelector('.peculiarities-two-container').style.display = "block";
    document.querySelector('.peculiarities-read-btn').style.display = "none";
  }
