<template>
  <div
    v-if="comments.length"
    class="card"
  >
    <h2>Комментарии</h2>
    <ul class="list">
      <AppComment
        v-for="comment in comments"
        :key="comment.id"
        :comment="comment"
      />
    </ul>
  </div>
</template>

<script>
import AppComment from '@/components/AppComment'

export default {
  name: 'CommentsList',
  components: { AppComment },
  emits: ['fetch-comments'],
  props: {
    comments: {
      type: Array,
      required: true
    }
  }
}
</script>
