<template>
  <div class="avatar">
    <img
      :src="content"
      alt="Avatar"
    >
  </div>
</template>

<script>
import blockMixin from '@/mixins/blockMixin'

export default {
  name: 'BlockAvatar',
  mixins: [blockMixin]
}
</script>

<style scoped>
.avatar {
  display: flex;
  justify-content: center;
}

.avatar img {
  width: 150px;
  height: auto;
  border-radius: 50%;
}
</style>
