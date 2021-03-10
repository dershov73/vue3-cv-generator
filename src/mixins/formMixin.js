export default {
  emits: ['update:modelValue'],
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    modelValue: {
      type: String
    }
  },
  methods: {
    change (event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
