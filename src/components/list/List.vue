<template>

    <div style="z-index: 100;height: 80vh">
    
        <table class="striped responsive-table">
            <thead>
                <tr v-if="!rows || !rows.length">

                    <th v-for="field in fields" v-bind:style="field.header.style" v-bind:class="field.header.class">{{ field.header.text }}
                        <i v-if="field.header.icon && strEval(field.header.icon.eval)" v-bind:style="field.header.icon.style" v-bind:class="field.header.icon.class">
                            {{ field.header.icon.text }}</i>
                    </th>

                </tr>
                <tr v-for="row in rows">

                    <th v-for="field in row" v-bind:colspan="field.header.colspan" v-bind:rowspan="field.header.rowspan" v-bind:style="field.header.style" v-bind:class="field.header.class">{{ field.header.text }}
                        <i v-if="field.header.icon && strEval(field.header.icon.eval)" v-bind:style="field.header.icon.style" v-bind:class="field.header.icon.class">
                            {{ field.header.icon.text }}</i>
                    </th>

                </tr>
            </thead>

            <tbody>

                <ListItem v-for="(item, index) in items" 
                    v-bind:fields="fields"
                    v-bind:item="item"
                    v-bind:index="index"
                    v-on:on-click-item="onClickItem"
                    v-on:on-dblclick-item="onDblClickItem"
                    v-on:on-click-item-field="onClickItemFieldList"
                    v-on:on-dblclick-item-field="onDblClickItemField"
                    :key="index"
                />

            </tbody>
        </table>
    </div>




</template>

<script>
import ListItem from '@/components/list/ListItem.vue';

export default {
    
    props: {

        fields: { type: Array },
        rows: { type: Array },
        items: { type: Array }

    },

    components:{
        ListItem    
    },

    mounted() {

    },

    methods: {

        strEval(sd) {

            return eval(sd)
        
        },

        onClickItem(id) {

            this.items.forEach(element => {

                element.selected = element.id == id

            });

            this.$emit('on-click-item', this.items.filter(record => record.id == id)[0]);

        },

        onDblClickItem(id) {

            this.items.forEach(element => {

                element.selected = element.id == id

            });

            this.$emit('on-dblclick-item', this.items.filter(record => record.id == id)[0]);

        },

        onClickItemFieldList(id, name) {

            this.$emit('on-click-item-field-list', this.items.filter(record => record.id == id)[0], name);

        },

        onDblClickItemField(id, name) {

            this.items.forEach(element => {

                element.selected = element.id == id

            });

            this.$emit('on-dblclick-item-field', this.items.filter(record => record.id == id)[0], name);

        }

    }
}
</script>

<style scoped>

thead th {
  position: sticky;
  top: 0;
  background: white;
}

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    table.striped>tbody>tr:nth-child(odd).selected {
        
        background-color: #2196f3;
        color: white;

      }

      table tbody {
        display: block;
        max-height: 70vh;
        overflow-y: scroll;
    }

    table thead, table tbody tr {
        display: table;
        width: 100%;
        table-layout: fixed;
    }    

</style>

