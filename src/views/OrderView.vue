<template>

    <div v-bind:style="{ backgroundImage: 'url(' + back + ')' }" 
      style="z-index: 0; position: fixed; left: 0; top: 0; background-repeat: no-repeat;width: 100%;height: 100%;background-size: cover;">
    </div>

    <div style="position: relative">
        <div class="adaptive">

            <div>
            <h1 style="position: relative; text-align: center; margin: 0; background-color: #b1a0c7;">Прайс-лист</h1>
            <h4 style="position: relative; text-align: center; margin: 0; background-color: #ccc0da; font-style: italic;">Цены указаны на 04.07.23</h4>

            </div>

            <div class="header">

                <img style="height: 96px;" src="../assets/pics/logo.jpg" >

                <div>

                <h1 style="position: relative; text-align: center; margin: 0;">Азбука цветов</h1>
                <h2 class="address" style="position: relative; text-align: center; margin: 0;">Пулковское шоссе, 120 Санкт-Петербург</h2>
                </div>

                <div class="phone">
                <a href="tel:+79052700065">
                    <img alt="cart" class="cart" src="@/assets/phone.svg" width="48" height="48" />
                </a>
                </div>

                <div class="contacts">
                <h2 style="position: relative; text-align: center; margin: 0;">Контакты: 
                    <a href="tel:+79052700065">+79052700065</a>, 
                    <a href="tel:+79817338935">+79817338935</a></h2>
                <h2 style="position: relative; text-align: center; margin: 0;">E-mail: anastasiy.azbuka@icloud.com</h2>
                <h2 style="position: relative; text-align: center; margin: 0;">WhatsApp: <a href="https://wa.me/+79052700065">+79052700065</a></h2>
        
            </div>

            </div>

            <div class="menu">

            </div>

            <div>

                <h1 class="title">Оформление заказа</h1>

                <div class="basket-goods__header row d-none d-md-flex" style="display: flex;">
                    <div class="basket-goods__cell basket-goods__description col-md-4" style="width: 30%;">Наименование</div>
                    <div class="basket-goods__cell col-md-2 offset-md-1 offset-xl-0" style="width: 30%;">Цена</div>
                    <div class="basket-goods__cell col-md-2" style="width: 20%;">Количество</div>
                    <div class="basket-goods__cell col-md-2" style="width: 20%;">Сумма</div>
                </div>


                <div class="basket-goods__good row">
                    <div class="basket-goods__cell basket-goods__description col-12 col-md-5 col-xl-4" style="    width: 42%;   padding: 15px 15px;">
                        <div class="basket-goods__index">1.</div>
                        <img src="/upload/resize_cache/iblock/72e/k5lmfl2770wiqtu6ulmdncko8jd5co79/115_115_1/DSC_2540.jpg" alt="Букет из 5 ароматных лилий" class="image basket-goods__image" draggable="false">
                        <div class="basket-goods__text">
                            <h3 class="basket-goods__string title basket-goods__title">Букет из 5 ароматных лилий</h3>

                        </div>
                    </div>
                    <div class="basket-goods__cell basket-goods__prices col-md-2 d-none d-md-flex" style="width: 17%;">
                        <div class="basket-goods__good-price d-none d-md-flex">
                        3 070р. </div>
                    </div>
                    <div class="basket-goods__cell basket-goods__good-quantity col-4 col-md-2">
                        <button class="button basket-goods__button minusBbtn" type="button">
                        <img src="../assets/minus-small.webp" class="icon" draggable="false">
                        </button>
                        <input type="text" id="QUANTITY_INPUT_531190" name="QUANTITY_531190" value="1" data-min="1" class="input basket-goods__input">
                        <button class="button basket-goods__button plusBbtn" type="button">
                        <img src="../assets/plus-small.webp" class="icon" draggable="false">
                        </button>
                    </div>
                    <div class="basket-goods__cell basket-goods__good-total col-5 col-md-2" style="    width: 15%;   padding: 15px 15px;">3 070р.</div>
                    <div class="basket-goods__cell col-1 offset-md-0 offset-xl-1">
                        <button data-href="/ajax/requestUpdateBasket.php?basketAction=delete&amp;id=531190" class="button basket-goods__button-close cartItemDelete" type="button">
                            <img src="../assets/close.webp" class="icon" draggable="false">
                        </button>
                    </div>
                </div>







            </div>


        </div>
    </div>
</template>

<script>

export default {

    props: {
        items: { type: Array }
    }

}

</script>

<style scoped>

.basket-goods__header {
    padding-bottom: 30px;
    color: #8a8a8a;
    border-bottom: 1px solid #dcdcdc;
}

.basket-goods__description {
    justify-content: flex-start;
}

.basket-goods__cell {
    display: flex;
    justify-content: center;
    align-items: center;
}

.basket-goods__good {
    height: 140px;
    border-bottom: 1px solid #dcdcdc;
}
.row {
    display: flex;
    margin-right: -15px;
    margin-left: -15px;
}


.basket-goods__description {
    justify-content: flex-start;
}
.basket-goods__cell {
    display: flex;
    justify-content: center;
    align-items: center;
}

.basket-goods__image {
    margin-left: 15px;
}
.basket-goods__text {
    margin-left: 40px;
}

.basket-goods__prices {
    flex-direction: column;
    gap: 10px;
}

.basket-goods__button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10px;
    height: 10px;
}

.button {
    background: 0 0;
    border: none;
    cursor: pointer;
    outline: none;
}


.basket-goods__input {
    padding: 0 10px;
    width: 70px;
    font-family: exo2 medium;
    font-size: 12pt;
    color: #151515;
    text-align: center;
}
.input {
    color: #8a8a8a;
    border: none;
    border-radius: 5px;
    outline: none;
}


.basket-goods__good-total {
    font-family: exo2 bold;
    font-size: 12pt;
    color: #f13a5f;
}
.basket-goods__cell {
    display: flex;
    justify-content: center;
    align-items: center;
}


</style>