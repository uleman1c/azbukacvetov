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

            <div v-if="!items.length && !successDialog.hidden">

                <h1 class="title">Заказ успешно оформлен</h1>

            </div>
            <div v-if="!items.length && successDialog.hidden">

                <h1 class="title">В корзине нет товаров</h1>

            </div>
            <div v-if="items.length && successDialog.hidden">

                <h1 class="title">Оформление заказа</h1>

                <div class="basket-goods__header row d-none d-md-flex" style="display: flex;">
                    <div class="basket-goods__cell basket-goods__description col-md-4" style="width: 30%;">Наименование</div>
                    <div class="basket-goods__cell col-md-2 offset-md-1 offset-xl-0" style="width: 30%;">Цена</div>
                    <div class="basket-goods__cell col-md-2" style="width: 20%;">Количество</div>
                    <div class="basket-goods__cell col-md-2" style="width: 20%;">Сумма</div>
                </div>


                <OrderItemView v-for="item, index in items"
                    v-bind:index="index" 
                    v-bind:item="item"
                    v-on:change-quantity="onChangeQuantity"
                    v-on:del-item="delItem" 
                />

                <div>
                    <input v-model="name" type="text" style="margin-top: 10px; padding: 10px; width: 95%;" placeholder="Имя">
                </div>
                <div>
                    <input v-model="phone"  type="text" style="margin-top: 10px; padding: 10px; width: 95%;" placeholder="Телефон">
                    <div v-if="wrongPhone" style="color: red;">Неправильный номер телефона</div>
                </div>
                    <button style="position: relative; left: 50%; margin-top: 10px; transform: translate(-50%, 0px);         padding: 15px 30px;   font-size: 11pt; 
                  color: #f13a5f; background-color: #ffffff; border-color: #f13a5f; border: 1.5px solid;  border-radius: 5px; cursor: pointer;  width: 170px;"
                  v-on:click="order()"
                  >Заказать</button>
            </div>


        </div>
    </div>

    <div v-if="false" class="popupDialog" style="position: absolute; top: 20%; left: 50%; transform: translate(-50%, 0px); 
      background-color: white; border: 2px solid; padding: 10px;" 
      v-bind:hidden="successDialog.hidden">
    
      <button style="position: relative; left: 50%; margin-top: 10px; transform: translate(-50%, 0px);         padding: 15px 30px;   font-size: 11pt; 
                  color: #f13a5f; background-color: #ffffff; border-color: #f13a5f; border: 1.5px solid;  border-radius: 5px; cursor: pointer;  width: 170px;"
                  v-on:click="okSuccessDialog()"
                  >Ок</button>


    </div>


</template>

<script>

import OrderItemView from './OrderItemView.vue';

import datestr from '@/datestr'

export default {
    props: {
        
    },
    components: { OrderItemView },

    data(){

        return {

            items: [],

            name: '', phone: '', wrongPhone: false,

            successDialog: { hidden: true }


        }

    },

    mounted(){

        const azs = localStorage.getItem('azSettings') || '{}'
        this.azSettings = JSON.parse(azs)

        if (!this.azSettings.user) {

            this.azSettings.user = { id: uuid(), name: '', phone: '' }

            localStorage.setItem('azSettings', JSON.stringify(this.azSettings))
        
        }

        this.azSettings.cart = this.azSettings.cart || []

        document.title = 'Оформление заказа'

        

        this.items = this.azSettings.cart

        this.name = this.azSettings.user.name
        this.phone = this.azSettings.user.phone
        this.wrongPhone = false

        this.successDialog.hidden = true

    },

    methods: {

        okSuccessDialog(){

            this.$router.push('/')

        },

        order(){

            let curPhone  = this.phone.replace(/\D/g, "").substr(-10)

            if (curPhone.length===10) {
                
                this.azSettings.user.name = this.name
                this.azSettings.user.phone = this.phone

                const hystory = this.azSettings.hystory || []

                hystory.push( { date: datestr.dateToYMDHMS(new Date()), items: this.items } )

                this.azSettings.hystory = hystory
                this.azSettings.cart = []

                this.items = []

                localStorage.setItem('azSettings', JSON.stringify(this.azSettings))

                this.successDialog.hidden = false

            } else {

                this.wrongPhone = true

            }


        },



        delItem(item){

            this.azSettings.cart = this.azSettings.cart.filter(c => c.id != item.id)

            localStorage.setItem('azSettings', JSON.stringify(this.azSettings))
        
            this.items = this.azSettings.cart

        },

        onChangeQuantity(item, delta){

            item.quantity = item.quantity + delta

            if (item.quantity == 0) {
                item.quantity = 1
            }

            localStorage.setItem('azSettings', JSON.stringify(this.azSettings))


        }

    }

}

</script>

<style>

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


</style>