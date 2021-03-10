<template>
  <h2>{{ content }}</h2>
</template>

<script>
import blockMixin from '@/mixins/blockMixin'

export default {
  name: 'BlockSubtitle',
  mixins: [blockMixin]
}
</script>
