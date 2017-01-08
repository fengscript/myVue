<template>
    <div class="container">
        <input type="text" name="input-area" placeholder="To do list" v-on:keyup.enter="setNew"
        v-model="newItem">
        <ul class="todoList">
            <li v-for="item in items" v-on:click="toggleFinish(item)" v-bind:class="{finished:item.isFinished}">
                {{item.content}}
            </li>
        </ul>
        <!--<img src="./assets/close.png" alt="">-->
    </div>
</template>
<script>
import Store from './store.js'
export default{
    data(){
        return{
            items:Store.get(),
            newItem:''
        }
    },
    watch:{
        items:{
            handler(items){
                Store.set(items)
            },
            deep:true
        }
    },
    methods:{
        toggleFinish(item){
            console.log(item.isFinished = !item.isFinished)
        },
        setNew(){
            if(this.newItem!=''){
                this.items.push({
                    content:this.newItem,
                    isFinished:false
                })
                this.newItem = '';
            }else{
                alert("什么东西都木有！")
            }
            
        }
    }
}
</script>
<style>
.finished{
    text-decoration: line-through;
}
    .container input {
        margin: 50px auto;
        width: 40%;
        height: 60px;
        display: block;
        font-size: 30px;
        text-indent: 12px;
    }
    
    .container img {
        width: 32px;
        max-width: 100%
    }
    
    .todoList {
        margin: 50px auto;
        width: 40%;
        height: 60px;
        display: block;
        font-size: 30px;
        text-indent: 12px;
    }
</style>
