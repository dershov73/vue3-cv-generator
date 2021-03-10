<template>
  <h1>{{ content }}</h1>
</template>

<script>
import blockMixin from '@/mixins/blockMixin'

export default {
  name: 'BlockTitle',
  mixins: [blockMixin]
}
</script>
