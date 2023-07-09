<template>
    <h5>Item {{ item }}</h5>
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
                height: 0 
            }

        }

    },

    mounted(){

        this.item.id = this.$route.query.id
    }

}

</script>