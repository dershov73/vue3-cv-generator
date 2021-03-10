<template>
  <p>
    {{ content }}
  </p>
</template>

<script>
import blockMixin from '@/mixins/blockMixin'

export default {
  name: 'BlockText',
  mixins: [blockMixin]
}
</script>
