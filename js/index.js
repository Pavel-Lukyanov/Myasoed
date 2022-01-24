

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
  // Default parameters
  slidesPerView: 1,

  // Responsive breakpoints
  // Navigation arrows

  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-banner-next',
    prevEl: '.swiper-banner-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
})
//свайпер скидки

const swiperSale = new Swiper('.swiper-sale', {
  // Default parameters
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-sale-next',
    prevEl: '.swiper-sale-prev',
  },
  centeredSlides: false,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
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
    // when window width is >= 640px
    1108: {
      slidesPerView: 3,
      spaceBetween: 80,
    }
  }
})


const swiperCooking = new Swiper('.swiper-cooking', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: '.swiper-cooking-next',
    prevEl: '.swiper-cooking-prev',
  },
  // Responsive breakpoints

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    }
  }
})

//Свайпер отзывы

const swiperReviews = new Swiper('.swiper-reviews', {
  // Default parameters
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: '.swiper-reviews-next',
    prevEl: '.swiper-reviews-prev',
  },
})


const swiperInstagram = new Swiper('.swiper-instagram', {
  loop: true,
  navigation: {
    nextEl: '.swiper-instagram-next',
    prevEl: '.swiper-instagram-prev',
  },
  // Default parameters
  slidesPerView: 4,
  spaceBetween: 30,

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
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
  

  document.querySelector('#btnMenu').addEventListener('click', function(){
    document.querySelector('#dropMenu').classList.toggle('menu-drop-is-active');
    document.querySelector('#btnMenu').classList.toggle('btn-menu-close');
  })
  