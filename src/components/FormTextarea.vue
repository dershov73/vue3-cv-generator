<template>
  <div class="form-control">
    <label :for="id">{{ label }}</label>
    <textarea
      :id="id"
      :value="modelValue"
      rows="3"
      @input="change"
    />
  </div>
</template>

<script>
import formMixin from '@/mixins/formMixin'

export default {
  name: 'FormTextarea',
  mixins: [formMixin]
}
</script>
