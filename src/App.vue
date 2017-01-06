<template>
    <div class="container">
        <input type="text" name="input-area" placeholder="To do list" value="" v-bind="input">
        <ul class="todoList">
            <li class="items">111</li>
        </ul>
        <span>{{a}}</span>
        <img src="./assets/close.png" alt="">
    </div>
</template>
<style>
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
<script>
    export default{
        data(){
            return{
                el:'.container',
                input(){
                    var a = this.value();
                    document.write(a);
                }

            }
        }
    }
</script>