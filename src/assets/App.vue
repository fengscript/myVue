<template>
    <div class="container">
        <div class="router-root">
            <router-link to="/home">主页</router-link>
            <router-link to="/news">新闻</router-link>
        </div>


        <modal :modalControl="modalOption" @modalYes="delConfirm"></modal>
        <input type="text" name="input-area" placeholder="To do list" v-on:keyup.enter="setNew" v-model="newItem">
        <ul class="todoList">
            <li v-for="item in items" @click="toggleFinish(item)" v-bind:class="{finished:item.isFinished}">
                {{item.content}}
                <button class="del" @click="delOne(item)">×</button>
            </li>
            <span class="delAll" @click="delAll">Delete All</span>
        </ul>
        
        <button class="test-btn">路由测试</button>
        <div>
            <router-view></router-view>
        </div>
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
    .test-btn {
        width: 100px;
        height: 40px;
        background: #ff5144;
        color: #ffffff;
        border: 0;
        outline: 0;
        position: absolute;
        right: 0;
        bottom: 0;
    }
    
    .delAll {
        display: block;
        font-size: 24px;
        margin-top: 50px;
    }
    
    .finished {
        text-decoration: line-through;
        color: red;
    }
    
    .container {
        display: flex;
        flex-wrap: wrap;
    }
    
    .container input {
        margin: 50px 30%;
        width: 40%;
        height: 60px;
        font-size: 30px;
        text-indent: 12px;
        justify-content: center;
    }
    
    .del {
        font-size: 30px;
        font-weight: bold;
        outline: 0;
        background: rgba(0, 0, 0, 0);
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