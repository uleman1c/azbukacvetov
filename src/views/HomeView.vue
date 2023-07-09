
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
                        item: { eval: 'item.price.toLocaleString(\'ru\', { minimumFractionDigits: 2 })', class: 'center-align' }
                    },
                    { 
                        header: { text: 'Диаметр горшка (см)', class: 'center-align' }, 
                        item: { eval: 'item.diam', class: 'center-align' }
                    },
                    { 
                        header: { text: 'Высота (см)', class: 'center-align' }, 
                        item: { eval: 'item.height', class: 'center-align' }
                    }
                ],



      items: [
        { line_number: 0, name: 'Азалия комнатная', price: 450, diam: 13, height: 25 },

        { line_number: 1, name: 'Антуриум', price: 950, diam: 14, height: 35 },
        { line_number: 2, name: 'Антуриум', price: 1450, diam: 17, height: 65 },
        { line_number: 3, name: 'Гардения', price: 600, diam: 13, height: 25 },
        { line_number: 4, name: 'Гузмания', price: 345, diam: 9, height: 20 },
        { line_number: 5, name: 'Дендробиум', price: 1450, diam: 12, height: 65 },
        { line_number: 6, name: 'Ж асмин', price: 760, diam: 12, height: 35 },
        { line_number: 7, name: 'Замиакулькас', price: 620, diam: 12, height: 35 },
        { line_number: 8, name: 'Замиокулькас', price: 7400, diam: 30, height: 100 },
        { line_number: 9, name: 'Кактус Cem', price: 80, diam: 5, height: 10 },
        { line_number: 10, name: 'Кактус Cem', price: 260, diam: 8, height: 15 },
        { line_number: 11, name: 'Кактус', price: 620, diam: 15, height: 20 },
        { line_number: 12, name: 'Кактус', price: 4200, diam: 23, height: 25 },
        { line_number: 13, name: 'Кактус Succ', price: 145, diam: 5, height: 10 },
        { line_number: 14, name: 'Каланхое', price: 320, diam: 12, height: 20 },
        { line_number: 15, name: 'Лавр спираль', price: 10000, diam: 20, height: 100 },
        { line_number: 16, name: 'Лимон', price: 33500, diam: 35, height: 230 },
        { line_number: 17, name: 'Нефролепис', price: 1250, diam: 19, height: 30 },
        { line_number: 18, name: 'Осока', price: 1700, diam: 19, height: 45 },
        { line_number: 19, name: 'Спатифиллум', price: 2100, diam: 19, height: 75 },
        { line_number: 20, name: 'Спатифилум', price: 480, diam: 13, height: 35 },
        { line_number: 21, name: 'Фаленопсис 2 ст', price: 1400, diam: 12, height: 70 },
        { line_number: 22, name: 'Фаленопсис', price: 980, diam: 9, height: 25 },
        { line_number: 23, name: 'Фиалка', price: 420, diam: 12, height: 15 },
        { line_number: 24, name: 'Фикус Бенжамина ( коса)', price: 7500, diam: 24, height: 110 },
        { line_number: 25, name: 'Фикус Бенжамина ( плетенный )', price: 13000, diam: 31, height: 120 },
        { line_number: 26, name: 'Фикус Бенжамина', price: 7000, diam: 27, height: 140 },
        { line_number: 27, name: 'Хедера', price: 490, diam: 13, height: 35 },
        { line_number: 28, name: 'Хедера', price: 2800, diam: 24, height: 110 },
        { line_number: 29, name: 'Хойя', price: 1200, diam: 19, height: 35 },
        { line_number: 30, name: 'Цыссус', price: 2600, diam: 17, height: 35 },




      ]

    }

  },

  mounted() {

    document.title = 'Азбука цветов'

    this.items.forEach(i => { i.id = i.line_number })

  }

}

</script>

<style scoped>


</style>