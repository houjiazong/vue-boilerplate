<template>
  <div class="app">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="group" @click.native="goTo('/group')">
        <img slot="icon" src="http://via.placeholder.com/50">
        圈子
      </mt-tab-item>
      <mt-tab-item id="discover" @click.native="goTo('/discover')">
        <img slot="icon" src="http://via.placeholder.com/50">
        发现
      </mt-tab-item>
      <mt-tab-item id="me" @click.native="goTo('/me')">
        <img slot="icon" src="http://via.placeholder.com/50">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: 'group'
    }
  },
  methods: {
    goTo: function (path) {
      this.$router.replace(path)
    }
  }
}
</script>

<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: all .2s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
</style>
