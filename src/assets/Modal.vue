<template>
    <div class="root">
        <div id="modalbg">
            <div class="tips">
                <span >{{tipsContent}}</span>
                <div class="btn">
                    <button class="btn-gray">No</button>
                    <button class="btn-green">Yes</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                tipsContent:'是否删除？'
            }
        }
    }
</script>
<style>
#modalbg{
    background:rgba(0, 0, 0, 0.85);
    position: fixed;
    height: 100%;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    color: #ffffff;
}
.tips{
    width: 280px;
    height: 160px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: fixed;
    justify-content: center;
    align-self: center;
    flex-wrap: wrap;
}
.tips span{
    width: 100%;
    text-align: center;
    font-size: 24px;
}
.btn button{
    outline: 0;
    background:rgba(0, 0, 0, 0);
    width: 80px;
    height: 36px;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
    margin: 20px;
}
.btn-gray{
    color: #CCCCCC;
    border: 2px solid #CCCCCC;
}
.btn-green{
    color: #22be34;
    border: 2px solid #22be34;
}
.btn-gray:hover{
    color: #ff5144;;
}
.btn-green:hover{
    color: #ffffff;
    background: #22be34;
}
/*Response*/

</style>
