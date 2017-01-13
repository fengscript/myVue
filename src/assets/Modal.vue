<template id="modalbg" lang="html">
  <div class="modalbody">
    {{a}}
  </div>
</template>

<script>
export default {
  data(){
    return {
      a:'1111111111'
    }
  }
}
</script>

<style lang="css">
.modal{
  position: fixed;
  z-index: 999;
  background: rgba(0,0,0,0.15);
  width:100%;
  height: 100%;
}
</style>
