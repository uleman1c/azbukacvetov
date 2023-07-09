<template>
    <h5>Item {{ item }}</h5>
    <img :src="item.pics[0]" v-bind:alt="pic">
</template>

<script>

import tables from '@/tables.js'

export default{

    data(){

        return {

            item: {
                id: '',
                name:'',
                price: 0,
                diameter: 0,
                height: 0,
                pics: [] 
            }

        }

    },

    mounted(){

        this.item.id = this.$route.query.id

        const curItem = tables.items.filter(i => i.id == this.item.id)[0]

        this.item.name = curItem.name
        this.item.price = curItem.price
        this.item.diameter = curItem.diameter
        this.item.height = curItem.height
        this.item.pics = curItem.pics
    }

}

</script>