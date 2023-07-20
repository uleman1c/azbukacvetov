<template>

    <div class="basket-window__item">

        <a style="width: 70px;" href="/product/buket_iz_9_belykh_roz_i_eustom/">
            <img v-bind:src="item.pics ? item.pics[0] : ''" class="image basket-window__item-image" draggable="false" 
            v-bind:alt="item.name" style="width: 70px; height: 70px;">
        </a>
        <div class="basket-window__text" style="width: 200px;">
        <div class="basket-window__name">{{ item.name }}</div>
        <div v-if="item.diameter || item.height" class="basket-window__quantity" style="font-size: 13px;">{{ item.diameter ? ' диаметр ' + item.diameter + ' см' : '' }}{{ item.height ? ' высота ' + item.height + ' см' : '' }}</div>
        <div class="basket-window__quantity">Количество: {{ item.quantity }}шт.</div>
        <div class="basket-window__price">{{ item.price }} руб.</div>
        </div>
        <button class="button" type="button" v-on:click="$emit('remove-item', item)" title="Удалить">
            <img src="../assets/close.webp" class="image" draggable="false">
        </button>

    </div>

</template>

<script>

export default {

    props: {
        item: { type: Object }
    },

    methods: {

        removeItem(item){



        },

    }

}

</script>

<style scoped>

.basket-window__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    width: 90%;
    height: 120px;
}


.button {
    background: 0 0;
    border: none;
    cursor: pointer;
    outline: none;
}

.basket-window__price {
    margin-top: 10px;
    font-size: 11pt;
    color: #f13a5f;
}

.basket-window__quantity {
    margin-top: 5px;
}

</style>

