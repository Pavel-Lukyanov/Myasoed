window.addEventListener('DOMContentLoaded',function(){


 // Валидация формы
 var selector = document.querySelector("input[type='tel']");
 var im = new Inputmask("+7 (999)-999-99-99");

 im.mask(selector);


const validation = new JustValidate('#form');

validation

  .addField('#name', [
    {
        rule: 'required',
        errorMessage: 'Введите имя фамилию',
    },
    {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Минимальная длина 3 символа',
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
  .addField('#phone', [
    {
        rule: 'required',
        errorMessage: 'Введите телефон',
      },
    {
        rule: 'customRegexp',
        value:  /^(\+)?(\(\d{2,3}\) ?\d|\d)(([ \-]?\d)|( ?\(\d{2,3}\) ?)){5,12}\d$/,
        errorMessage: 'Введите корректный телефон',
    },
  ])

});



//Удаление текста из инпута по кнопке

document.querySelector('.close-btn-input').addEventListener('click', function() {
    document.getElementById('address').value = "";
})


//Если чекбокс соглашения активен, разрешить отправку формы

let checkbox = document.getElementById('agreement')
let btnSubmit = document.getElementById('btnSubmit');

checkbox.addEventListener('click', function() {
    if (checkbox.checked) {
        /* btnSubmit.setAttribute('disabled', true); */
        btnSubmit.disabled = false;
        btnSubmit.style.opacity = "1";
    } else {
        /* btnSubmit.setAttribute('disabled'); */
        btnSubmit.disabled = true;
        btnSubmit.style.opacity = "0.4";
    }
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




//Появление контейнера инпут address

let dropInputAddress = document.getElementById('address');

dropInputAddress.addEventListener('click', dropContentAddress)

function dropContentAddress() {
    inputDropAddress=document.getElementById('address');
    if(inputDropAddress.focus) {
        document.getElementById('drop-address').classList.add('show-drop-address');
        document.getElementById('address').classList.add('modal-input-active');
    }
}

//Закрытие контейнера ипут address

const inputAddress = document.querySelector('#address');
const divAddress = document.querySelector('#drop-address');

document.addEventListener( 'click', (e) => {
    const withinDivAddress = e.composedPath().includes(divAddress);
    const withinInputAddress = e.composedPath().includes(inputAddress);

    if ( ! withinDivAddress && ! withinInputAddress ) {
        document.getElementById('drop-address').classList.remove('show-drop-address');
        document.getElementById('address').classList.remove('modal-input-active');
    }
})


//Внесение значения в инпут при клике и закрытие drop-addrea

const dropAddresses = document.querySelectorAll('.drop-address .address-modal')
dropAddresses.forEach(el => el.addEventListener('click', function (){
    document.querySelector('#address').value = el.innerText;
    document.getElementById('drop-address').classList.remove('show-drop-address');
    document.getElementById('address').classList.remove('modal-input-active');
}))




// Popups
class Popup {
    constructor(popupElement) {
        this._popupElement = popupElement;
        this._closeButton = this._popupElement.querySelector('.popup__close');
        this._img = this._popupElement.id === "photo" ? this._popupElement.querySelector('.popup__img') : null;
        this._source = this._img ? this._img.previousElementSibling : null;
        this._handleEscClose = this._handleEscClose.bind(this)
        this._openingLinks = document.querySelectorAll(`[data-pointer="${this._popupElement.id}"]`)
        this.setEventListeners()
    }

    open(el) {
        if (this._img) this._img.src = el.src
        if (this._source) this._source.srcset = el.src
        document.body.style.overflow = "hidden";
        this._popupElement.classList.add('popup_opened')
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        if (this._img) this._img.src = ""
        this._popupElement.classList.remove('popup_opened');
        document.body.style.overflow = "visible";
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose(evt) {
        if (evt.keyCode === 27) {
            this.close();
        }
    }

    _handleOverlayClick(evt) {
        if (evt.target === evt.currentTarget) {
            this.close();
        }
    }

    setEventListeners() {
        this._openingLinks.forEach(link => link.addEventListener('click', (e) => { e.preventDefault(); this.open(e.target) }))
        this._closeButton.addEventListener('click', () => this.close());
        this._popupElement.addEventListener('click', this._handleOverlayClick.bind(this));
    }
}

const popups = document.querySelectorAll('.popup')

if (popups.length > 0) popups.forEach(item => new Popup(item))


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

