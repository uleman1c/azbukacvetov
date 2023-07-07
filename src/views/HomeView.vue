
<template>
    
    <div v-bind:style="{ backgroundImage: 'url(' + back + ')' }" 
      style="position: absolute; left: 0; top: 0; background-repeat: no-repeat;width: 100%;height: 100%;background-size: cover;">
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

      items: [
        { 

/*           Наименование Розничная цена Диаметр горшка (см) Высота(см)
Азалия комнатная 450,00 13 25
 */

         }
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