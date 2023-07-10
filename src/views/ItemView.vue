<template>
    <h1>{{ item.name }}</h1>

    <h2>Цена: {{ item.price.toLocaleString('ru', { minimumFractionDigits: 2 }) }}</h2>
    <h2>Диаметр: {{ item.diameter }}, высота: {{ item.height }}</h2>

    <PicView v-for="pic in item.pics"
        v-bind:url="pic"
    />

</template>

<script>

import tables from '@/tables.js'
import PicView from '../components/PicView.vue'

export default{
    data() {
        return {
            item: {
                id: "",
                name: "",
                price: 0,
                diameter: 0,
                height: 0,
                pics: []
            }
        };
    },
    mounted() {
        this.item.id = this.$route.query.id;
        const curItem = tables.items.filter(i => i.id == this.item.id)[0];
        this.item.name = curItem.name;
        this.item.price = curItem.price;
        this.item.diameter = curItem.diameter;
        this.item.height = curItem.height;
        this.item.pics = curItem.pics;
    },
    components: { PicView }
}

</script>