function colorLabel(element) {
    let id = element.id
    var chbox;
    chbox=document.getElementById(id);
      if (chbox.checked) {
            document.getElementById(`${id}Label`).classList.add('color-checked-active');
      }
      else {
          document.getElementById(`${id}Label`).classList.remove('color-checked-active');
      }
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

    document.addEventListener('click', function(eventTwo) {
        if (!eventTwo.target.matches('.hero__header-llist-btn')) {
            var dropdownsTwo = document.getElementsByClassName("hero__header-llist-btn");
            var t;
            for (t = 0; t < dropdownsTwo.length; t++) {
                var openDropdownTwo = dropdownsTwo[t];
                if (!event.target.closest('.dropdown-content') && openDropdownTwo.classList.contains('hero__header-llist-btn_active')) {
                    openDropdownTwo.classList.remove('hero__header-llist-btn_active');
                }
            }
        }
    });

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
    


      function menuBtnOne() {
        document.getElementById("myDropdownOne").classList.toggle("show");
        document.getElementById("rectangleOne").classList.toggle("hero__header-llist-btn_active");
    }
    
    function menuBtnTwo() {
        document.getElementById("myDropdownTwo").classList.toggle("show");
        document.getElementById("rectangleTwo").classList.toggle("hero__header-llist-btn_active");
    }

    function menuBtnThree() {
        document.getElementById("myDropdownThree").classList.toggle("show");
        document.getElementById("rectangleThree").classList.toggle("hero__header-llist-btn_active");
    }

    function dropdownMenuUser() {
        document.getElementById("dropdown-menu-user").classList.toggle("show");
        document.getElementById("btnDropdownUser").classList.toggle("menu-dropdown-user-img");
    }
    


    document.querySelector('#btnMenu').addEventListener('click', function(){
        document.querySelector('#dropMenu').classList.toggle('menu-drop-is-active');
        document.querySelector('#btnMenu').classList.toggle('btn-menu-close');
      })
      

// Кнопка "Читать далее"
function showMore() {
    document.querySelector('.peculiarities-two-container').style.display = "block";
    document.querySelector('.peculiarities-read-btn').style.display = "none";
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



//Кнопка фильтры на адаптиве (появление чекбоксов)

const philter = document.querySelector('.catalog-philter')

philter.addEventListener('click', () => {
    document.querySelector('.catalog-checkbox-ul').classList.toggle("catalog-checkbox-ul-show");
    document.querySelector('.catalog-philter').classList.toggle("catalog-philter-active");
    document.querySelector('.filter-icon').classList.toggle("filter-icon-active");
})


//Кнопка по умолчанию на адаптиве (появление сортировки )

const sort = document.querySelector('.sort-left-link')

sort.addEventListener('click', () => {
    document.querySelector('.sort-container').classList.toggle("sort-container-show");
})