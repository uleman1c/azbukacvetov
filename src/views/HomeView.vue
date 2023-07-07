
<template>
    
    <div v-bind:style="{ backgroundImage: 'url(' + back + ')' }" 
      style="z-index: 0; position: absolute; left: 0; top: 0; background-repeat: no-repeat;width: 100%;height: 100%;background-size: cover;">
    </div>

    <List 
                    v-bind:fields="fields" 
                    v-bind:items="items" 
                    v-on:on-click-item="onClickItem"
                    v-on:on-dblclick-item="onDblClickItem"
                    v-on:on-click-item-field-list="onClickItemFieldListSettings"
            />


</template>

<script setup>

import back from '../assets/back.jpg'



</script>

<script>

import List from '@/components/list/List.vue';


export default {

  components: { List },

  data(){

    return {

      fields: [
                    { 
                        header: { text: '№', class: 'center-align', style: 'width: 5%'}, 
                        item: { eval: 'item.line_number + 1', class: 'center-align', style: 'width: 5%'} 
                    },
                    { 
                        header: { text: 'Наименование', class: 'center-align' }, 
                        item: { eval: 'item.name', class: 'left-align' }
                    },
                    { 
                        header: { text: 'Розничная цена', class: 'center-align' }, 
                        item: { eval: 'item.price', class: 'left-align' }
                    },
                    { 
                        header: { text: 'Диаметр горшка (см)', class: 'center-align' }, 
                        item: { eval: 'item.diam', class: 'left-align' }
                    },
                    { 
                        header: { text: 'Высота (см)', class: 'center-align' }, 
                        item: { eval: 'item.height', class: 'left-align' }
                    }
                ],



      items: [
        { line_number: 0, name: 'Азалия комнатная', price: 450, diam: 13, height: 25 }
      ]

    }

  },

  mounted() {

    document.title = 'Азбука цветов'

  }

}

</script>

<style scoped>


</style>