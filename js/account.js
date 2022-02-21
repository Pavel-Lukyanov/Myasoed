window.addEventListener('DOMContentLoaded', function () {


    // Валидация формы
    var selector = document.querySelector("input[type='tel']");
    var im = new Inputmask("+7 (999)-999-99-99");

    im.mask(selector);


    const validation = new JustValidate('#form');

    validation

        .addField('#name', [
            {
                rule: 'required',
                errorMessage: 'Введите имя',
            },
        ])
        .addField('#secondName', [
            {
                rule: 'required',
                errorMessage: 'Введите фамилию',
            },
        ])
        .addField('#phone', [
            {
                rule: 'required',
                errorMessage: 'Введите телефон',
            },
            {
                rule: 'customRegexp',
                value: /^(\+)?(\(\d{2,3}\) ?\d|\d)(([ \-]?\d)|( ?\(\d{2,3}\) ?)){5,12}\d$/,
                errorMessage: 'Введите корректный телефон',
            },
        ])
        .addField('#email', [
            {
                rule: 'required',
                errorMessage: 'Введите Email',
            },
            {
                rule: 'email',
                errorMessage: 'Введите корректный Email',
            },
        ])
        .addField('#password', [
            {
              rule: 'required',
              errorMessage: 'Введите пароль',
            },  
            {
                rule: 'minLength',
                value: 6,
                errorMessage: 'Мин. кол-во символов 6',
            },              
          ])
          .addField('#passwordConfirm', [
            {
              rule: 'required',
              errorMessage: 'Введите пароль',
            },
            {
              validator: (value, fields) => {
                if (
                  fields['#password'] &&
                  fields['#passwordConfirm'].elem
                ) {
                  const repeatPasswordValue =
                    fields['#password'].elem.value;

                  return value === repeatPasswordValue;
                }

                return true;
              },
              errorMessage: 'Пароли не совпадают',
            },
          ])

        
});




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






//Появление блока у главного инпута при нажатии на него

let dropInput = document.getElementById('inputActive');

function dropContent() {
    inputDrop=document.getElementById('inputActive');
    if(inputDrop.focus) {
        document.getElementById('drop-input').classList.add('show-drop-input');
        document.getElementById('headerForm').classList.add('input-container-border');
    }
}

dropInput.addEventListener('click', dropContent)

//Закрытие блока у главного инпута при нажатии на него

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
  