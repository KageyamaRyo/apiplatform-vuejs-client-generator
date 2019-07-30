<template>
  <form @submit.prevent="handleSubmit(item)">
    <div class="form-group">
      <label
        for="book_isbn"
        class="form-control-label">isbn</label>
      <input
        id="book_isbn"
        v-model="item.isbn"
        :class="['form-control', isInvalid('isbn') ? 'is-invalid' : '']"
        type="text"
        placeholder="The ISBN of the book"
        @input="handleUpdateField('isbn', $event.target.value)">
      <div
        v-if="isInvalid('isbn')"
        class="invalid-feedback">{{ violations.isbn }}</div>
    </div>
    <div class="form-group">
      <label
        for="book_title"
        class="form-control-label">title</label>
      <input
        id="book_title"
        v-model="item.title"
        :class="['form-control', isInvalid('title') ? 'is-invalid' : '']"
        type="text"
        required="true"
        placeholder="The title of the book"
        @input="handleUpdateField('title', $event.target.value)">
      <div
        v-if="isInvalid('title')"
        class="invalid-feedback">{{ violations.title }}</div>
    </div>
    <div class="form-group">
      <label
        for="book_description"
        class="form-control-label">description</label>
      <input
        id="book_description"
        v-model="item.description"
        :class="['form-control', isInvalid('description') ? 'is-invalid' : '']"
        type="text"
        required="true"
        placeholder="A description of the item"
        @input="handleUpdateField('description', $event.target.value)">
      <div
        v-if="isInvalid('description')"
        class="invalid-feedback">{{ violations.description }}</div>
    </div>
    <div class="form-group">
      <label
        for="book_author"
        class="form-control-label">author</label>
      <input
        id="book_author"
        v-model="item.author"
        :class="['form-control', isInvalid('author') ? 'is-invalid' : '']"
        type="text"
        required="true"
        placeholder="The author of this content or rating. Please note that author is special in that HTML 5 provides a special mechanism for indicating authorship via the rel tag. That is equivalent to this and may be used interchangeably"
        @input="handleUpdateField('author', $event.target.value)">
      <div
        v-if="isInvalid('author')"
        class="invalid-feedback">{{ violations.author }}</div>
    </div>
    <div class="form-group">
      <label
        for="book_publicationDate"
        class="form-control-label">publicationDate</label>
      <input
        id="book_publicationDate"
        v-model="item.publicationDate"
        :class="['form-control', isInvalid('publicationDate') ? 'is-invalid' : '']"
        type="dateTime"
        required="true"
        placeholder="The date on which the CreativeWork was created or the item was added to a DataFeed"
        @input="handleUpdateField('publicationDate', $event.target.value)">
      <div
        v-if="isInvalid('publicationDate')"
        class="invalid-feedback">{{ violations.publicationDate }}</div>
    </div>
    <div class="form-group">
      <label
        for="book_reviews"
        class="form-control-label">reviews</label>
      <input
        id="book_reviews"
        v-model="item.reviews"
        :class="['form-control', isInvalid('reviews') ? 'is-invalid' : '']"
        type="text"
        placeholder="The book's reviews"
        @input="handleUpdateField('reviews', $event.target.value)">
      <div
        v-if="isInvalid('reviews')"
        class="invalid-feedback">{{ violations.reviews }}</div>
    </div>

    <button
      type="submit"
      class="btn btn-success">Submit</button>
  </form>
</template>

<script>
export default {
  props: {
    handleSubmit: {
      type: Function,
      required: true
    },

    handleUpdateField: {
      type: Function,
      required: true
    },

    values: {
      type: Object,
      required: true
    },

    errors: {
      type: Object,
      default: () => {}
    },

    initialValues: {
      type: Object,
      default: () => {}
    }
  },

  computed: {
    // eslint-disable-next-line
    item () {
      return this.initialValues || this.values
    },

    violations () {
      return this.errors || {}
    }
  },

  methods: {
    isInvalid (key) {
      return Object.keys(this.violations).length > 0 && this.violations[key]
    }
  }
}
</script>
