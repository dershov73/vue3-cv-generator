<template>
  <div class="container column">
    <AppForm
      submit-title="Добавить"
      :disabled="!isFormValid"
      @onSubmit="createBlock"
    >
      <FormSelect
        id="type"
        label="Тип блока"
        v-model="type"
        :options="[
          { name: 'Заголовок', value: 'title' },
          { name: 'Подзаголовок', value: 'subtitle' },
          { name: 'Аватар', value: 'avatar' },
          { name: 'Текст', value: 'text' }
        ]"
      />

      <FormTextarea
        id="content"
        label="Значение"
        v-model="content"
      />
    </AppForm>
    <AppPreview
      :blocks="blocks"
      @delete-block="deleteBLock"
    />
  </div>
  <div class="container">
    <template v-if="!loading">
      <p>
        <button
          class="btn primary"
          @click="fetchComments"
        >
          Загрузить комментарии
        </button>
      </p>
      <CommentsList
        :comments="comments"
      />
    </template>
    <AppLoader v-else />
  </div>
</template>

<script>
import AppPreview from '@/components/AppPreview'
import AppForm from '@/components/AppForm'
import CommentsList from '@/components/CommentsList'
import FormSelect from '@/components/FormSelect'
import FormTextarea from '@/components/FormTextarea'
import axios from 'axios'
import AppLoader from '@/components/AppLoader'

export default {
  components: {
    AppLoader,
    AppForm,
    AppPreview,
    CommentsList,
    FormSelect,
    FormTextarea
  },
  data () {
    return {
      type: 'title',
      content: '',
      blocks: [],
      comments: [],
      loading: false
    }
  },
  computed: {
    isFormValid () {
      return this.content.length > 3
    }
  },
  created () {
    this.fetchBlocks()
  },
  methods: {
    async createBlock () {
      // https://vue3-cv-generator-default-rtdb.firebaseio.com/
      try {
        const { data } = await axios.post(
          'https://vue3-cv-generator-default-rtdb.firebaseio.com/blocks.json',
          JSON.stringify({
            type: this.type,
            content: this.content
          })
        )

        this.blocks.push({
          id: data.name,
          type: this.type,
          content: this.content
        })

        this.content = ''
      } catch (e) {
        console.warn(e.message)
      }
    },
    async deleteBLock (id) {
      try {
        await axios.delete(`https://vue3-cv-generator-default-rtdb.firebaseio.com/blocks/${id}.json`)
        this.blocks = this.blocks.filter(block => block.id !== id)
      } catch (e) {
        console.warn(e.message)
      }
    },
    async fetchBlocks () {
      try {
        const { data } = await axios.get('https://vue3-cv-generator-default-rtdb.firebaseio.com/blocks.json')

        if (!data) {
          throw new Error('Нет данных, создайте первый блок')
        }

        this.blocks = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        }))
      } catch (e) {
        console.warn(e.message)
      }
    },
    async fetchComments () {
      try {
        this.loading = true
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/comments?_limit=42')

        if (!data) {
          throw new Error('Комментариев пока нет')
        }

        this.comments = data
      } catch (e) {
        console.warn(e.message)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
