<template>

    <div v-bind:hidden="hidden" class="basket-window" style="right: 15px; top: 150px;">
    
        <BasketItemView v-for="item in items"
            v-bind:item="item"
            v-on:remove-item="removeItem"/>

        <div class="basket-window__footer">
            <button onclick="location.href='/basket/'" class="button-text basket-window__button" type="button">Оформить заказ</button>
        </div>        

    </div>

</template>

<script>

import BasketItemView from './BasketItemView.vue';

export default {
    props: {
        hidden: { type: Boolean },
        items: { type: Array }
    },
    components: { BasketItemView },

    methods: {

        removeItem(item){

            this.$emit('remove-item-from-basket', item)
        }


    }
}

</script>

<style>

.basket-window {
    position: absolute;
    width: 370px;
    background-color: #fff;
    border-radius: 5px;
    z-index: 5;
    box-shadow: 0 0 16px rgba(0,0,0,.5);
}

.basket-window__footer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 70px;
    background-color: #f13a5f;
    border-radius: 5px;
}

.button-text {
    padding: 15px 30px;
    font-family: exo2 semibold;
    font-size: 13pt;
    color: #fff;
    background-color: #f13a5f;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    outline: none;
}

.basket-window__button {
    color: #f13a5f;
    background-color: #fff;
}

</style>