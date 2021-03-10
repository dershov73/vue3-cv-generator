<template>
  <div class="form-control">
    <label :for="id">{{ label }}</label>
    <select
      :id="id"
      :value="modelValue"
      @change="change"
    >
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script>
import formMixin from '@/mixins/formMixin'

export default {
  name: 'FormSelect',
  mixins: [formMixin],
  props: {
    options: {
      type: Array,
      required: true
    }
  }
}
</script>
