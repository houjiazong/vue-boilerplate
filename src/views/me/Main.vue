<template>
  <div class="has-tabbar-wrap">
    <div class="has-tabbar-wrap-content">
      <div style="padding: 20px; text-align: center;">Me Page</div>
    </div>
    <tabbar selected='me' class="has-tabbar-wrap-tabbar" />
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
