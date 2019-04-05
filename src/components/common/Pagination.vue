<template>
    <div class="pagination">
        <button @click="prevPage" class="pagination-button">Prev</button>
        <button class="pagination-button">1</button>
        <button class="pagination-button">2</button>
        <button @click="nextPage" class="pagination-button">Next</button>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        data(){
            return {
                pageNumber: 0  // по умолчанию 0
            }
        },
        props:{
            listData:{
                type:Array,
                required:true
            },
            size:{
                type:Number,
                required:false,
                default: 10
            }
        },
        methods:{
            nextPage(){
                this.pageNumber++;
            },
            prevPage(){
                this.pageNumber--;
            }
        },
        computed: {
            pageCount(){
                let l = this.listData.length,
                    s = this.size;
                // редакция переводчика спасибо комментаторам
                return Math.ceil(l/s);
                // оригинал
                // return Math.floor(l/s);
            },
            paginatedData(){
                const start = this.pageNumber * this.size,
                    end = start + this.size;
                return this.listData.slice(start, end);
            },
        },
    });
</script>

<style lang="scss" scoped>
    $white: #ffffff;
    $orange: #ff6600;

    .pagination-button {
        font-family: "Source Sans Pro", sans-serif;
        background: $orange;
        color: $white;
        border: none;
        margin: 10px 10px;
        font-weight: normal;
        border-radius: 3px;
        display: inline-block;
        font-size: 14px;
        padding: 4px 10px;
    }
</style>
