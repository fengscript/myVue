<template>
    <div class="container">
        <modal v-if="modal"></modal>
        <input type="text" name="input-area" placeholder="To do list" v-on:keyup.enter="setNew"
        v-model="newItem">
        <ul class="todoList">
            <li v-for="item in items" v-on:click="toggleFinish(item)" v-bind:class="{finished:item.isFinished}">
                {{item.content}}
                <button class="del" @click="delOne(item)">×</button>
            </li>
            <span class="delAll" @click="delAll">Delete All</span>
        </ul>
    </div>  
</template>

<script>
import './Reset.css'
import Store from './store.js'
import Modal from './Modal.vue'
export default{
    data(){
        return{
            items:Store.get(),
            newItem:'',
            isFinished:false,
            modal:false
        }
    },
    components:{
        Modal
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
        delOne(item){
            this.modal = true;
            this.items.splice(this.items.indexOf(item),1)
        },
        delAll(){
            this.modal = true;
            Store.delAll();
            window.location.reload();
        }
    }
    
}
render:h=>h(Modal)
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
.container{display: flex;flex-wrap: wrap;}
.container input {
    margin:50px 30%;
    width: 40%;
    height: 60px;
    font-size: 30px;
    text-indent: 12px;
    justify-content: center;
    
}

.del{
    font-size: 30px;
    font-weight: bold;
    outline: 0;
    background:rgba(0, 0, 0, 0);
    border: 0;
    color: #ff5144;
    cursor: pointer;
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
