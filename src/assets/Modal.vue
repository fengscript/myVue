<template>
    <div class="root">
        <div v-show="modalShow" id="modalbg">
            <div v-show="tipShow" class="tips">
                <span>{{tipsContent}}</span>
                <div class="btnGroup">
                    <button @click="btnNo" class="btn-gray">No</button>
                    <button @click="btnYes" class="btn-green">Yes</button>
                    <slot>111</solt>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                // tipsContent: '111',
                del: {
                    flag: true,
                    num: 0
                }
            }
        },
        computed: {
            modalShow() {
                return this.modalShow = this.modalControl.modalShowWrapper;
            },
            tipShow() {
                return this.tipShow = this.modalControl.modalShowWrapper;
            },
            tipsContent:function() {
                if (this.modalControl.delCount == 1) {
                return this.tipsContent = "是否删除一项？"
                } else {
                return this.tipsContent = "是否全部删除？"
                }
            }
        },
        props: ['modalControl'],
        methods: {
            btnNo() {
                this.modalControl.modalShowWrapper = false;
            },
            btnYes() {
                if (this.modalControl.delCount == 1) {
                    this.del.num = 1
                } else {
                    this.del.num = 0;
                }
                this.$emit('modalYes', this.del);
                this.modalControl.modalShowWrapper = false;
            }
        },
    }

</script>
<style>
    #modalbg {
        background: rgba(0, 0, 0, 0.85);
        position: fixed;
        height: 100%;
        width: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        justify-content: center;
        color: #ffffff;
    }
    
    .tips {
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
    
    .tips span {
        width: 100%;
        text-align: center;
        font-size: 24px;
    }
    
    .btnGroup button {
        outline: 0;
        background: rgba(0, 0, 0, 0);
        width: 80px;
        height: 36px;
        font-size: 16px;
        border-radius: 4px;
        cursor: pointer;
        margin: 20px;
    }
    
    .btn-gray {
        color: #CCCCCC;
        border: 2px solid #CCCCCC;
    }
    
    .btn-green {
        color: #22be34;
        border: 2px solid #22be34;
    }
    
    .btn-gray:hover {
        color: #ff5144;
        border: 2px solid #ff5144;
    }
    
    .btn-green:hover {
        color: #ffffff;
        background: #22be34;
    }
    /*Response*/
</style>