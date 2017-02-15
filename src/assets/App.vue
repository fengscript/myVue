<template>
    <div class="container">
        <modal :modalControl="modalOption" @modalYes="delConfirm"></modal>
        <input type="text" name="input-area" placeholder="To do list" v-on:keyup.enter="setNew" v-model="newItem">
        <div class="routeArea">
            <router-link to="/news" class="btn trans detail-btn">使用说明</router-link>
            <router-link to="/home" class="btn trans detail-btn">返回</router-link>
            <span class="btn delAll-btn trans" @click="delAll">全部删除</span>
            
        </div>
        
        <ul class="todoList">
            <li v-for="item in items" @click="toggleFinish(item)" v-bind:class="{finished:item.isFinished}">
                {{item.content}}
                <button class="del" @click="delOne(item)">×</button>
            </li>
            
        </ul>
        <router-view></router-view>
    </div>
</template>
<script>
    import './Reset.css'
    import Store from './store.js'
    import Modal from './Modal.vue'

    export default {
        data() {
            return {
                items: Store.get(),
                newItem: '',
                isFinished: false,
                modalOption: {
                    modalShowWrapper: false
                },
                itemTemp:0
            }
        },
        components: {
            Modal
        },
        watch: {
            items: {
                handler(items) {
                    Store.set(items)
                },
                deep: true
            }
        },
        methods: {
            toggleFinish(item) {
                item.isFinished = !item.isFinished;
            },
            setNew() {
                if (this.newItem != '') {
                    this.items.push({
                        content: this.newItem,
                        isFinished: false
                    })
                    this.newItem = '';
                } else {
                    alert("什么东西都木有！")
                }
            },
            delConfirm(res) {
                if( res == true)
                this.items.splice(this.items.indexOf(this.itemTemp),1)
            },
            delOne(item) {
                this.itemTemp = item; 
                this.modalOption.modalShowWrapper = !this.modalOption.modalShowWrapper;
            },
            delAll() {
                Store.delAll();
                window.location.reload();
            }
        }
    }
    // Router
// const mainRoutes = [
//     {
//         path:'./home',component:Home
//     },
//     {
//         path:'./news',component:News
//     }
// ]

// const router = new VueRouter({
//     routes:innerRoutes
// })

</script>
<style>
.container input {
    height: 60px;
    font-size: 30px;
    text-indent: 12px;
    justify-content: center;
}
.routeArea,
.container input,
.todoList{
    margin:20px 30% 0 30%;
    width: 40%;
}
.del {
    font-size: 30px;
    font-weight: bold;
    outline: 0;
    background: rgba(0, 0, 0, 0);
    border: 0;
    color: #ff5144;
    cursor: pointer;
    visibility: hidden;
    margin-left: 100px;
}
.todoList li:hover .del{
    visibility: visible;
}
.todoList {
    cursor: pointer;
    display: block;
    font-size: 30px;
    text-indent: 12px;
}
.delAll-btn:hover{
    color: red;
}
.detail-btn:hover{
    color: #57D2F7;
}
.finished {
    text-decoration: line-through;
    color: red;
}

    
</style>