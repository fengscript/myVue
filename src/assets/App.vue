<template>
    <div class="container">
        <input type="text" name="input-area" placeholder="To do list" v-on:keyup.enter="setNew"
        v-model="newItem">
        <ul class="todoList">
            <li v-for="item in items" v-on:click="toggleFinish(item)" v-bind:class="{finished:item.isFinished}">
                {{item.content}}
                <!--<button class="del" title="remove a list">×</button>-->
            </li>
            <span class="delAll">Delete All</span>
        </ul>
       
    </div>
</template>
<script>
import Store from './store.js'
export default{
    data(){
        return{
            items:Store.get(),
            newItem:'',
            isFinished:false,
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
            item.isFinished = !item.isFinished;
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
        },
    }
}
</script>
<style>
.delAll{
    display: block;
    font-size: 24px;
    margin-top: 50px;
}
.finished{
    text-decoration: line-through;
    color: red;
}
.container input {
    margin: 50px auto;
    width: 40%;
    height: 60px;
    display: block;
    font-size: 30px;
    text-indent: 12px;
    
}

.del{
    font-size: 30px;
    font-weight: bold;
}

.todoList {
    cursor: pointer;
    margin: 50px auto;
    width: 40%;
    height: 60px;
    display: block;
    font-size: 30px;
    text-indent: 12px;
}
</style>
