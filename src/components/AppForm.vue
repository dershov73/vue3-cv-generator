<template>
  <form
    class="card card-w30"
    @submit.prevent="$emit('on-submit')"
  >
    <slot />
    <button
      class="btn primary"
      :disabled="disabled"
    >
      {{ submitTitle }}
    </button>
  </form>
</template>

<script>
export default {
  name: 'AppForm',
  props: {
    submitTitle: {
      type: String,
      default: 'Отправить'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>
