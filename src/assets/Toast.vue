<template id="toastbg" lang="html">
  <div class="toastbody">
    {{tips}}
  </div>
</template>

<script>
export default {
  data(){
    return {
      tips:'是否删除'
    }
  }
}
</script>

<style lang="css">
.toast{
  position: fixed;
  z-index: 999;
  background: rgba(0,0,0,0.15);
  width:100%;
  height: 100%;
}
</style>
