<template>
  <nav>
    <a class="item" @click="redirectTo('/top')" :class="{active: selected === 'top'}">
      <i class="iconfont icon-weibiaoti--" />
      <div>Top</div>
    </a>
    <a class="item" @click="redirectTo('/new')" :class="{active: selected === 'new'}">
      <i class="iconfont icon-new" />
      <div>New</div>
    </a>
    <a class="item" @click="redirectTo('/me')" :class="{active: selected === 'me'}">
      <i class="iconfont icon-wode" />
      <div>Me</div>
    </a>
  </nav>
</template>

<script>
export default {
  name: 'tabbar',
  props: {
    selected: String
  },
  methods: {
    redirectTo (path) {
  		this.$router.push(path)
  	}
  }
}
</script>
