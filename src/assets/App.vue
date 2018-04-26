<template>
  <div class="container">
    <modal :modalControl="modalOption" @modalYes="delConfirm">
    </modal>
    <input type="text" name="input-area" placeholder="To do list" v-on:keyup.enter="setNew" v-model="newItem">

    <!-- <span @click='explainIt()'>
                <router-link to="/home" class="btn trans detail-btn">展开说明</router-link>
            </span> -->

    <span v-if="itemCount" class="btn delAll-btn trans" @click="delAll">全部删除</span>
    <ul class="todoList">
      <li v-for="item in items" @click="toggleFinish(item)" v-bind:class="{finished:item.isFinished}" v-bind:key="item">
        {{item.content}}
        <button class="del" @click="delOne(item)">×</button>
      </li>
      <!-- <router-view class="routerView"></router-view> -->
    </ul>
  </div>
</template>
<script>
import "./reset.css";
import store from "./store.js";
import modal from "./modal.vue";
import state from "../state/state";

export default {
  data() {
    return {
      items: store.get(),
      newItem: "",
      isFinished: false,
      modalOption: {
        modalShowWrapper: false,
        delCount: 0
      },
      itemTemp: 0,
      explainTrigger: false
    };
  },
  components: {
    modal
  },
  watch: {
    items: {
      handler(items) {
        store.set(items);
      },
      deep: true
    }
  },
  computed: {
    itemCount() {
      if (this.items.length > 1) return true;
    }
  },
  methods: {
    toggleFinish(item) {
      item.isFinished = !item.isFinished;
    },
    setNew() {
      if (this.newItem != "") {
        this.items.push({
          content: this.newItem,
          isFinished: false
        });
        this.newItem = "";
      } else {
        alert("什么东西都木有！");
      }
    },
    delConfirm(res) {
      if (res.flag == true) {
        if (res.num == 1) {
          this.items.splice(this.items.indexOf(this.itemTemp), 1);
        } else {
          store.delAll();
          window.location.reload();
        }
      }
    },
    delOne(item) {
      this.itemTemp = item;
      this.modalOption.modalShowWrapper = !this.modalOption.modalShowWrapper;
      this.modalOption.delCount = 1;
    },
    delAll() {
      this.modalOption.modalShowWrapper = !this.modalOption.modalShowWrapper;
      this.modalOption.delCount = 0;
    },
    explainIt() {
      this.explainTrigger = true;
    }
  }
};
</script>
<style>
.container {
  height: auto;
  font-size: 30px;
  text-align: center;
}

.container input {
  text-indent: 18px;
  margin: 40px 0 20px;
}

.container input,
.todoList {
  min-width: 300px;
}

.routerView {
  color: #57d2f7;
  font-size: 16px;
}

.routerView:hover {
  cursor: initial;
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
  margin-left: 50px;
}

.todoList li:hover .del {
  visibility: visible;
}

.todoList {
  cursor: pointer;
  display: block;
  font-size: 30px;
}
.delAll-btn {
  position: absolute;
  z-index: 1;
}
.delAll-btn:hover {
  color: red;
}

.detail-btn:hover {
  color: #57d2f7;
}

.finished {
  text-decoration: line-through;
  color: red;
}
</style>