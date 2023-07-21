<template>

<div class="basket-goods__good row">
    <div class="basket-goods__cell basket-goods__description col-12 col-md-5 col-xl-4" style="    width: 42%;   padding: 15px 15px;">
        <div class="basket-goods__index">{{ index + 1 }}.</div>
        <img v-bind:src="item.pics ? item.pics[0] : ''" v-bind:alt="item.name" style="width: 115px; height: 115px;" class="image basket-goods__image" draggable="false">
        <div class="basket-goods__text">
            <h3 class="basket-goods__string title basket-goods__title" style="width: 10%;">{{ item.name }}</h3>

        </div>
    </div>
    <div class="basket-goods__cell basket-goods__prices col-md-2 d-none d-md-flex" style="width: 17%; flex-direction: row;">
        <div class="basket-goods__good-price d-none d-md-flex">
            {{ item.price.toLocaleString('ru', { minimumFractionDigits: 0 }) }}р. </div>
    </div>
    <div class="basket-goods__cell basket-goods__good-quantity col-4 col-md-2">
        <button class="button basket-goods__button minusBbtn" type="button"  v-on:click="$emit('change-quantity', item, -1)">
            <img src="../assets/minus-small.webp" class="icon" draggable="false">
        </button>
        <input type="text" id="QUANTITY_INPUT_531190" name="QUANTITY_531190" v-model="item.quantity" data-min="1" class="input basket-goods__input">
        <button class="button basket-goods__button plusBbtn" type="button" v-on:click="$emit('change-quantity', item, 1)">
            <img src="../assets/plus-small.webp" class="icon" draggable="false">
        </button>
    </div>
    <div class="basket-goods__cell basket-goods__good-total col-5 col-md-2" style="    width: 15%;   padding: 15px 15px; ">
        {{ (item.price * item.quantity).toLocaleString('ru', { minimumFractionDigits: 0 }) }}р.</div>
    <div class="basket-goods__cell col-1 offset-md-0 offset-xl-1">
        <button class="button basket-goods__button-close cartItemDelete" type="button" v-on:click="$emit('del-item', item)">
            <img src="../assets/close.webp" class="icon" draggable="false">
        </button>
    </div>
</div>



</template>

<script>

export default {

    props: {
        index: { type: Number },
        item: { type: Object }
    }

}

</script>

<style scoped>

</style>