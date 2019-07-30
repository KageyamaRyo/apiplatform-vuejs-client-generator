<template>
  <div>
    <h1>Show {{ item && item['@id'] }}</h1>

    <div
      v-if="isLoading"
      class="alert alert-info"
      role="status">Loading...</div>
    <div
      v-if="error"
      class="alert alert-danger"
      role="alert">
      <span
        class="fa fa-exclamation-triangle"
        aria-hidden="true" /> {{ error }}
    </div>
    <div
      v-if="deleteError"
      class="alert alert-danger"
      role="alert">
      <span
        class="fa fa-exclamation-triangle"
        aria-hidden="true" /> {{ deleteError }}
    </div>
    <div
      v-if="item"
      class="table-responsive">
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>isbn</td>
            <td>{{ item['isbn'] }}</td>
          </tr>
          <tr>
            <td>title</td>
            <td>{{ item['title'] }}</td>
          </tr>
          <tr>
            <td>description</td>
            <td>{{ item['description'] }}</td>
          </tr>
          <tr>
            <td>author</td>
            <td>{{ item['author'] }}</td>
          </tr>
          <tr>
            <td>publicationDate</td>
            <td>{{ item['publicationDate'] }}</td>
          </tr>
          <tr>
            <td>reviews</td>
            <td>{{ item['reviews'] }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <router-link
      v-if="item"
      :to="{ name: 'BookList' }"
      class="btn btn-default">Back to list</router-link>
    <button
      class="btn btn-danger"
      @click="deleteItem(item)">Delete</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    deleteError: 'book/del/error',
    error: 'book/show/error',
    isLoading: 'book/show/isLoading',
    item: 'book/show/retrieved'
  }),

  beforeDestroy () {
    this.reset()
  },

  created () {
    this.retrieve(decodeURIComponent(this.$route.params.id))
  },

  methods: {
    ...mapActions({
      del: 'book/del/del',
      reset: 'book/show/reset',
      retrieve: 'book/show/retrieve'
    }),

    deleteItem (item) {
      if (window.confirm('Are you sure you want to delete this item?')) {
        this.del(item).then(() => this.$router.push({ name: 'BookList' }))
      }
    }
  }
}
</script>
