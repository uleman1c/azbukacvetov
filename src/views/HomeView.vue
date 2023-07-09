
<template>
    
    <div v-bind:style="{ backgroundImage: 'url(' + back + ')' }" 
      style="z-index: 0; position: absolute; left: 0; top: 0; background-repeat: no-repeat;width: 100%;height: 100%;background-size: cover;">
    </div>

    <h1 style="position: relative; text-align: center; margin: 0; background-color: #b1a0c7;">Прайс-лист</h1>
    <h4 style="position: relative; text-align: center; margin: 0; background-color: #ccc0da; font-style: italic;">Цены указаны на 04.07.23</h4>

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

import tables from '@/tables.js'

export default {

  components: { List },

  data(){

    return {

      fields: [
                    { 
                        header: { text: '№', class: 'center-align', style: 'width: 5%'}, 
                        item: { eval: 'item.line_number', class: 'center-align', style: 'width: 5%; text-align: center;'} 
                    },
                    { 
                        header: { text: 'Наименование', class: 'center-align' }, 
                        item: { eval: 'item.name', class: 'left-align' }
                    },
                    { 
                        header: { text: 'Розничная цена', class: 'center-align' }, 
                        item: { eval: 'item.price ? item.price.toLocaleString(\'ru\', { minimumFractionDigits: 2 }) : \'\'', class: 'center-align', style: 'text-align: center;' }
                    },
                    { 
                        header: { text: 'Диаметр горшка (см)', class: 'center-align' }, 
                        item: { eval: 'item.diameter', class: 'center-align', style: 'text-align: center;' }
                    },
                    { 
                        header: { text: 'Высота (см)', class: 'center-align' }, 
                        item: { eval: 'item.height', class: 'center-align', style: 'text-align: center;' }
                    }
                ],



      items: tables.items

    }

  },

  mounted() {

    document.title = 'Азбука цветов'

    let curLN = 1
    this.items.forEach(i => { 

      if (i.type != 'header') {
        
        i.line_number = curLN
        curLN = curLN + 1
      }

     })

  },

  methods: {

    onDblClickItem(item){

      if (item.id) {
        
        this.$router.push('/item?id=' + item.id)

      }

    }
  }


}

</script>

<style scoped>


</style>