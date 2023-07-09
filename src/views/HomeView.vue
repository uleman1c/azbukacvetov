
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


export default {

  components: { List },

  data(){

    return {

      fields: [
                    { 
                        header: { text: '№', class: 'center-align', style: 'width: 5%'}, 
                        item: { eval: 'item.line_number != undefined ? item.line_number + 1 : \'\'', class: 'center-align', style: 'width: 5%; text-align: center;'} 
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
                        item: { eval: 'item.diam', class: 'center-align', style: 'text-align: center;' }
                    },
                    { 
                        header: { text: 'Высота (см)', class: 'center-align' }, 
                        item: { eval: 'item.height', class: 'center-align', style: 'text-align: center;' }
                    }
                ],



      items: [
        { name: 'Комнатные растения', type: 'header', style: 'text-align: center; background-color: #ccc0da; font-weight: bold;' },
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

        { name: 'Прочее', type: 'header', style: 'text-align: center; background-color: #ccc0da; font-weight: bold;' },
        { line_number: 31, name: 'Грунт 10 л. цветочный', price: 150 }, 
        { line_number: 32, name: 'Грунт 150 л.', price: 750 },
        { line_number: 33, name: 'Грунт 25 л. уневерсальный', price: 320 },
        { line_number: 34, name: 'Грунт 25 л. Хвойные-голуб-горт', price: 290 },
        { line_number: 35, name: 'Грунт 50 л. уневерсальный', price: 520 },
        { line_number: 36, name: 'Грунт 50 л. Хвойные-голуб-горт', price: 470 },        
 
        { name: 'Рассада', type: 'header', style: 'text-align: center; background-color: #ccc0da; font-weight: bold;' },
        { line_number: 37, name: 'Каллизия кошпо', price: 650, diam: 14 },

        { name: 'Уличные растения', type: 'header', style: 'text-align: center; background-color: #ccc0da; font-weight: bold;' },
        { line_number: 38, name: 'Астра', price: 350, diam: 12, height: 30 },
        { line_number: 39, name: 'Бересклет Арлекин', price: 680, diam: 13, height: 45 },
        { line_number: 40, name: 'Бересклет Европейский Рэд Каскад', price: 6000, diam: 30, height: 15 },
        { line_number: 41, name: 'Бересклет Крылатый', price: 7900, diam: 30, height: 80 },
        { line_number: 42, name: 'Вероника', price: 500, diam: 13, height: 40 },
        { line_number: 43, name: 'Вероника', price: 650, diam: 14, height: 35 },
        { line_number: 44, name: 'Гвоздика', price: 450, diam: 13, height: 25 },
        { line_number: 45, name: 'Гвоздика Барбадос', price: 510, diam: 13, height: 25 },
        { line_number: 46, name: 'Гвоздика Оскар', price: 310, diam: 10, height: 25 },
        { line_number: 47, name: 'Гвоздика Оскар', price: 480, diam: 12, height: 25 },
        { line_number: 48, name: 'Гвоздика Пинк Киссес', price: 490, diam: 12, height: 25 },
        { line_number: 49, name: 'Гипсофила', price: 370, diam: 12, height: 25 },
        { line_number: 50, name: 'Гипсофила микс', price: 570, diam: 12, height: 25 },
        { line_number: 51, name: 'Гортензия Сбежавшая невеста решетка', price: 5000, diam: 20, height: 35 },
        { line_number: 52, name: 'Гортензия Макрофила', price: 2500, diam: 23, height: 45 },
        { line_number: 53, name: 'Гортензия Макрофила', price: 5500, diam: 32, height: 70 },
        { line_number: 54, name: 'Гортензия Макрофила', price: 12000, diam: 40, height: 70 },
        { line_number: 55, name: 'Гортензия метельчатая', price: 4750, diam: 29, height: 80 },
        { line_number: 56, name: 'Гортензия Сбежавшая невеста', price: 4000, diam: 20, height: 35 },
        { line_number: 57, name: 'Гортензия Черешковая', price: 750, diam: 9, height: 25 },
        { line_number: 58, name: 'Граб пендула', price: 15000, diam: 20, height: 250 },
        { line_number: 59, name: 'Ель Нигра', price: 3500, diam: 23, height: 45 },
        { line_number: 60, name: 'Ель Нидеформис', price: 3800, diam: 23, height: 45 },
        { line_number: 61, name: 'Ива пендула ( плакучая)', price: 4000, diam: 29, height: 250 },
        { line_number: 62, name: 'Императа', price: 2700, diam: 23, height: 45 },
        { line_number: 63, name: 'Калибрахоа', price: 490, diam: 12, height: 25 },
        { line_number: 64, name: 'Каллуна (вереск)', price: 410, diam: 12, height: 27 },
        { line_number: 65, name: 'Каллуна (вереск) трикси', price: 1430, diam: 23, height: 30 },
        { line_number: 66, name: 'Каллуна (вереск) трикси', price: 620, diam: 12, height: 28 },
        { line_number: 67, name: 'Калоцефалус', price: 280, diam: 10, height: 15 },
        { line_number: 68, name: 'Клематис микс', price: 970, diam: 15, height: 45 },
        { line_number: 69, name: 'Котовник', price: 890, diam: 15, height: 20 },
        { line_number: 70, name: 'Котовник', price: 1500, diam: 19, height: 30 },
        { line_number: 71, name: 'Лаванда', price: 2500, diam: 32, height: 15 },
        { line_number: 72, name: 'Леукантемум', price: 650, diam: 14, height: 35 },
        { line_number: 73, name: 'Леукантемум', price: 650, diam: 17, height: 45 },
        { line_number: 74, name: 'Лещина ( крученая)', price: 6000, diam: 23, height: 200 },
        { line_number: 75, name: 'Лобелия многолетняя', price: 710, diam: 14, height: 35 },
        { line_number: 76, name: 'Магнолия', price: 5500, diam: 23, height: 65 },
        { line_number: 77, name: 'Можжевельник Blue Star', price: 950, diam: 17, height: 35 },
        { line_number: 78, name: 'Можжевельник', price: 1900, diam: 23, height: 25 },
        { line_number: 79, name: 'Можжевельник', price: 3600, diam: 29, height: 45 },
        { line_number: 80, name: 'Осока', price: 910, diam: 17, height: 35 },
        { line_number: 81, name: 'Остеоспермум', price: 390, diam: 10, height: 25 },
        { line_number: 82, name: 'Пеларгония', price: 350, diam: 10, height: 35 },
        { line_number: 83, name: 'Пихта Корейская', price: 2500, diam: 23, height: 40 },
        { line_number: 84, name: 'Роза "Леонардо да Винчи"', price: 2100, diam: 19, height: 45 },
        { line_number: 85, name: 'Роза горшок', price: 2250, diam: 23, height: 145 },
        { line_number: 86, name: 'Роза Кордана', price: 440, diam: 10, height: 20 },
        { line_number: 87, name: 'Роза Кордана', price: 580, diam: 12 },
        { line_number: 88, name: 'Роза патио ', price:620, diam: 13, height: 50 },
        { line_number: 89, name: 'Роза штамбовая', price: 5500, diam: 24, height: 110 },
        { line_number: 90, name: 'Розмарин', price: 650, diam: 14, height: 30 },
        { line_number: 91, name: 'Самшит', price: 3500, diam: 29, height: 40 },
        { line_number: 92, name: 'Самшит', price: 13000, diam: 40 },
        { line_number: 93, name: 'Седум', price: 390, diam: 10, height: 20 },
        { line_number: 94, name: 'Седум', price: 290, diam: 12, height: 20 },
        { line_number: 95, name: 'Седум', price: 500, diam: 13, height: 20 },
        { line_number: 96, name: 'Седум', price: 700, diam: 15, height: 35 },
        { line_number: 97, name: 'Седум', price: 630, diam: 17, height: 40 },
        { line_number: 98, name: 'Семпер', price: 250, diam: 9, height: 30 },
        { line_number: 99, name: 'Сирень сортовая', price: 3100, diam: 23, height: 60 },
        { line_number: 100, name: 'Туя Nana', price: 2250, diam: 23, height: 45 },
        { line_number: 101, name: 'Туя Брабант', price: 1000, diam: 21, height: 130 },
        { line_number: 102, name: 'Туя Даника', price: 1990, diam: 23, height: 40 },
        { line_number: 103, name: 'Туя Даника', price: 13000, diam: 38, height: 'шар45' },
        { line_number: 104, name: 'Туя Помпон', price: 23000, diam: 38, height: 160 },
        { line_number: 105, name: 'Туя Смарагд', price: 1750, diam: 23 },
        { line_number: 106, name: 'Туя Смарагд ком', price: 3100, diam: 160 },
        { line_number: 107, name: 'Туя Смарагд ком', price: 4800, diam: 180 },
        { line_number: 108, name: 'Туя Смарагд ком', price: 6700, diam: 190 },
        { line_number: 109, name: 'Туя спираль', price: 53000, diam: 48, height: 190 },
        { line_number: 110, name: 'Туя спираль', price: 41000, diam: 48, height: 210 },
        { line_number: 111, name: 'Туя Чемпион', price: 4500, diam: 30, height: 140 },
        { line_number: 112, name: 'Фестука ( овсянница)', price: 350, diam: 10, height: 25 },
        { line_number: 113, name: 'Фестука ( овсянница)', price: 900, diam: 17, height: 40 },
        { line_number: 114, name: 'Хвойный микс', price: 200, diam: 9, height: 25 },
        { line_number: 115, name: 'Хкебе', price: 710, diam: 12, height: 30 },
        { line_number: 116, name: 'Хризантема', price: 590, diam: 15, height: 35 },
        { line_number: 117, name: 'Хризантема трикси', price: 1500, diam: 23, height: 'кашпо' },
        { line_number: 118, name: 'Шалфей', price: 390, diam: 13, height: 30 },
        { line_number: 119, name: 'Шалфей', price: 890, diam: 17, height: 40 },
        { line_number: 120, name: 'Эхиноцея микс', price: 1550, diam: 19, height: 45 }

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