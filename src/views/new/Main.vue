<template>
  <div class="has-tabbar-wrap">
    <div class="has-tabbar-wrap-content">
      <div style="padding: 20px; text-align: center;">New Page</div>
    </div>
    <tabbar selected='new' class="has-tabbar-wrap-tabbar" />
  </div>
</template>

<script>
import Tabbar from '../../components/Tabbar'

export default {
  components: {
    Tabbar
  }
}
</script>
