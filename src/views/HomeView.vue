
<template>
    
    <div v-bind:style="{ backgroundImage: 'url(' + back + ')' }" 
      style="z-index: 0; position: absolute; left: 0; top: 0; background-repeat: no-repeat;width: 100%;height: 100%;background-size: cover;">
    </div>

    <div style="position: relative">
      <div class="adaptive">

        <div class="header">

        </div>

        <div class="menu">

        </div>

        <div class="items">

          <div v-for="item in items" class="item">
            <div v-if="!item.price" >
              {{ item.name }}
            </div>
            <div v-else>
              <div
                class="item__img"
                v-bind:style="'--img: url(' + (item.pics && item.pics.length > 0 ? item.pics[0] : '') + ')'"

              ></div>
              <div class="item__content">
                <div class="item__title">{{ item.name }}</div>
                <div class="item__desc">{{ item.price ? item.price.toLocaleString('ru', { minimumFractionDigits: 2 }) : '' }}</div>
              </div>
            </div>
          </div>
          

        </div>

      </div>

    </div>

    <h2 style="position: relative; text-align: center; margin: 0;">Контакты +79052700065, +79817338935</h2>
    <h2 style="position: relative; text-align: center; margin: 0;">Электронная почта anastasiy.azbuka@icloud.com</h2>
    <h2 style="position: relative; text-align: center; margin: 0;">Адрес Пулковское шоссе, 120 Санкт-Петербург</h2>
    <h2 style="position: relative; text-align: center; margin: 0;">WhatsApp <a href="https://wa.me/+79052700065">+79052700065</a></h2>
    

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

.adaptive {
  width: 100%;
  height: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr;
  gap: 10px;
}

.header {
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  grid-column: span 2;
}

.menu {
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  grid-column: span 2;
}
.items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, auto));
  gap: 10px;
}
.item {
  display: grid;
  background: var(--primary);
  color: var(--invert_primary);
  border-radius: 5px;
  overflow: hidden;
  padding: 5px 5px 15px;
}

.item__img {
  height: 240px;
  margin-bottom: 10px;
  border-radius: 5px;
  background: #887979 var(--img) center / cover;
}
.item__content {
  padding: 0 10px;
  text-align: left;
}
.item__title {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 5px;
  color: var(--invert_primary);
}
.item__desc {
  font-weight: 300;
}



</style>