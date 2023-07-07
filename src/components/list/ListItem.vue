<template>

    <tr class="tc" style="cursor: pointer;" v-bind:class="{ selected: item.selected }" 
        v-on:click="onClickItem(item.id)"
        >



        <td v-for="field in fields" v-bind:style="field.item.style" v-bind:class="field.item.class" 
            v-on:click="onClickItemField(item.id, field.item.name)"
            v-on:dblclick="onDblClickItemField(item.id, field.item.name)"
            >{{ strEval(item, field.item.eval) }}

            <div v-if="field.item.type == 'check'">
                <i v-bind:class="{ opac1 : item[field.item.check], opac0 : !item[field.item.check] }" class='check'></i>
                <i v-bind:class="{ opac1 : !item[field.item.check], opac0 : item[field.item.check] }" class='box' style="transform: translate(-15px, 0px);"></i>
            </div>                                


            <div v-if="field.item.type != 'checkbox' && field.item.html" v-html="strEval(item, field.item.html)"></div>
            <i v-if="field.item.icon && strEval(item, field.item.icon.eval)" v-bind:style="field.item.icon.style" v-bind:class="field.item.icon.class">
                {{ field.item.icon.text }}</i>
        </td>
            

    </tr>

</template>

<script>

import datestr  from '@/datestr.js';

export default {

    props: {

        fields: { type: Array },
        item: {
            type: Object,
            required: true
        },

        index: Number
    },

    mounted() {

    },

    methods: {

        strToDateTime(sd) {

            return datestr.strToDateTime(sd)
        
        },

        strToDate(sd) {

            return datestr.strToDate(sd)
        
        },

        strEval(item, sd) {

            return eval(sd)
        
        },

        onClickItem(id) {

            this.$emit('on-click-item', id);

        },

        onDblClickItem(id) {

            this.$emit('on-dblclick-item', id);

        },

        onClickItemField(id, name) {

            if (!name) {
                
                this.$emit('on-click-item', id);

            } else {
                
                this.$emit('on-click-item-field', id, name);

            }

        },

         onDblClickItemField(id, name) {

            if (!name) {
                
                this.$emit('on-dblclick-item', id);

            } else {
                
                this.$emit('on-dblclick-item-field', id, name);

            }

        }

   }
}
</script>

<style scoped>

    input {

        margin-right: 1rem;

    }

    li {
        border: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        padding: .5rem 2rem;
        margin-bottom: 1rem;
    }

    .rm {
        background: red;
        border-radius: 50%;
        color: #fff;
        font-weight: bold;

    }

    .done {

        text-decoration: line-through;

    }

    i.opac1{
        opacity: 1;
        transition: 0.3s;
    }

    i.opac0{
        opacity: 0;
        transition: 0.3s;
    }

    i.check {
        display: inline-block;
        width: 15px;
        height: 20px;
        margin: -10px 0px -2px;
        border: solid green;
        border-width: 0 5px 5px 0;
        transform: rotate( 45deg);
        cursor: pointer;
    }

    i.box {
        display: inline-block;
        width: 15px;
        height: 15px;
        margin: -10px 0px -2px;
        border: solid black;
        border-width: 1px 1px 1px 1px;
        cursor: pointer;
    }

    i.checkred {
        display: inline-block;
        width: 15px;
        height: 25px;
        margin: -3px 10px 3px;
        border: solid red;
        border-width: 0 5px 5px 0;
        transform: rotate( 45deg);
    }

    @keyframes check-border {
        from {background-color: black;}
        to {background-color: green;}
    }


    .tc:hover {
        
        background-color: rgba(36, 66, 165, 0.5);

      }

    .selected {
        
        background-color: #2196f3;
        color: white;

      }


      .selected:hover {
        
        background-color: rgb(162, 0, 255);

      }


</style>