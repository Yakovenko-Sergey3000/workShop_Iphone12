'use strict'

document.addEventListener('DOMContentLoaded', () => {

const tabs = () => {
    const cardDetailChangeElems = document.querySelectorAll('.card-detail__change'),
        cardDetailsTitleElem = document.querySelector('.card-details__title'),
        cardImage = document.querySelector('.card__image_item'),
        priceElem = document.querySelector('.card-details__price'),
        descriptionMemory = document.querySelector('.description__memory');
        
    
    const data = [
        {
            name: 'Смартфон Apple iPhone 12 Pro 128GB Graphite',
            img: 'img/iPhone-graphite.png',
            price: 95990,
            memoryROM: 128 
        },
        {
            name: 'Смартфон Apple iPhone 12 Pro 256GB Silver',
            img: 'img/iPhone-silver.png',
            price: 120990,
            memoryROM: 256 
        },
        {
            name: 'Смартфон Apple iPhone 12 Pro 128GB Pacific Blue',
            img: 'img/iPhone-blue.png',
            price: 99990,
            memoryROM: 128 
        }
    ];

    const deactive = () => {
        cardDetailChangeElems.forEach(btn => btn.classList.remove('active'));
    } 

    cardDetailChangeElems.forEach((btn, i) => {
        btn.addEventListener('click', (e) => {
            if (!btn.classList.contains('active')) {
                deactive()
                btn.classList.add('active')

                cardDetailsTitleElem.textContent = data[i].name;
                cardImage.src = data[i].img; 
                priceElem.textContent = data[i].price + '₽';
                descriptionMemory.textContent = `Встроенная память (ROM) ${data[i].memoryROM} ГБ`;
            }
        });
    });

    
    
}

const accordion = () => {

    const characteristicsList= document.querySelector('.characteristics__list'),
        characteristicsItem = document.querySelectorAll('.characteristics__item');

        const open = (btn, dropDown) => {
            dropDown.style.height = `${dropDown.scrollHeight}px`
            btn.classList.add('active');
            dropDown.classList.add('active');
        };

        const close = (btn, dropDown) => {
            dropDown.style.height = '';
            btn.classList.remove('active');
            dropDown.classList.remove('active');
            
        };

        const closeAllDrop = (btn, dropDown) => {
            characteristicsItem.forEach((elem, i) => {
                if(elem.children[0] !== btn && elem.children[1] !== dropDown) {
                    close(elem.children[0], elem.children[1]);
                }
            })
        }
        

        characteristicsList.addEventListener('click', (e) => {
            if (e.target && e.target.classList.contains('characteristics__title')){
                const parent = e.target.closest('.characteristics__item');
                const description = parent.querySelector('.characteristics__description');
                closeAllDrop();
                description.classList.contains('active') ? close(e.target, description) : open(e.target, description)
                
                
            };
        })


};

const modal = () => {
    const  modal = document.querySelector('.modal'),
        cardDetailsButtonBuy = document.querySelector('.card-details__button_buy'),
        cardDetailsButtonDelivery = document.querySelector('.card-details__button_delivery'),
        modalSubtitle= modal.querySelector('.modal__subtitle'),
        cardDetailsTitle = document.querySelector('.card-details__title'),
        modalTitle = modal.querySelector('.modal__title');
        
        console.log(modalTitle);

        const escapeHandler = (e) => {
            console.log('Допилить окно');
            if(e.code === 'Escape') {
                    modal.classList.remove('open');
            }
        }
    
        const openModal = () => {

            modal.classList.add('open');
            document.body.style.overflow = 'hidden';
            modalTitle.textContent = cardDetailsTitle.textContent;
            document.addEventListener('keydown', escapeHandler) 

        }

        const closeModal = () => {
            modal.classList.remove('open');
                document.body.style.overflow = '';
            document.removeEventListener('keydown', escapeHandler) 

        }
        

        const  btnOpenModal = (btn) => {
            btn.addEventListener('click', () => {
                openModal();
                modalSubtitle.textContent = btn === cardDetailsButtonBuy ? 'Оплата' : 'Доставка и оплата'
        })
        }

        btnOpenModal(cardDetailsButtonBuy);
        btnOpenModal(cardDetailsButtonDelivery);

        modal.addEventListener('click', (e) => {
            if(e.target && e.target.classList.contains('modal__close') || e.target.classList.contains('open') ){
                closeModal();
            }
        })
}
    
tabs();
accordion();
modal();
});