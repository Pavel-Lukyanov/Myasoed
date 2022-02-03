const swiper = new Swiper('.swiper-similar', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    grabCursor:true,
    slidesPerView: 3,
    spaceBetween: 75,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        
        768: {
          slidesPerView: 2
        },
        872: {
          slidesPerView: 2.5,
          spaceBetween: 30
        },
        1023: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        1148: {
          slidesPerView: 3,
          spaceBetween: 75
        }
      }
  });
  window.innerWidth <= 768 ? swiper.destroy() : '';


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


document.querySelector('#btnMenu').addEventListener('click', function(){
    document.querySelector('#dropMenu').classList.toggle('menu-drop-is-active');
    document.querySelector('#btnMenu').classList.toggle('btn-menu-close');
  })
  


  //Стилизация кнопки "В корзину при нажатии"

if (document.documentElement.clientWidth <= 768) {

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
        })
    }
}