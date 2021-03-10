<template>
  <div class="card card-w70">
    <template v-if="blocks.length">
      <div
        v-for="block in blocks"
        :key="block.id"
        class="block"
      >
        <component
          :is="getBlock(block.type)"
          :content="block.content"
        />
        <button
          class="block__delete btn danger"
          @click="$emit('delete-block', block.id)"
        >
          Удалить
        </button>
      </div>
    </template>
    <h3 v-else>Добавьте первый блок, чтобы увидеть результат</h3>
  </div>
</template>

<script>
import BlockTitle from '@/components/BlockTitle'
import BlockAvatar from '@/components/BlockAvatar'
import BlockSubtitle from '@/components/BlockSubtitle'
import BlockText from '@/components/BlockText'
import { capitalize } from '@/helpers'

export default {
  name: 'AppPreview',
  components: {
    BlockTitle,
    BlockAvatar,
    BlockSubtitle,
    BlockText
  },
  props: {
    blocks: {
      type: Array,
      required: true
    }
  },
  methods: {
    getBlock (blockType) {
      return 'Block' + capitalize(blockType)
    }
  }
}
</script>

<style scoped>
  .block {
    position: relative;
  }

  .block__delete {
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0;
  }

  .block:hover .block__delete {
    opacity: 1;
  }
</style>
