import BookList from '../components/book/List'
import BookCreate from '../components/book/Create'
import BookUpdate from '../components/book/Update'
import BookShow from '../components/book/Show'

export default [
  { name: 'BookList', path: '/books/', component: BookList },
  { name: 'BookCreate', path: '/books/create', component: BookCreate },
  { name: 'BookUpdate', path: '/books/edit/:id', component: BookUpdate },
  { name: 'BookShow', path: '/books/show/:id', component: BookShow }
]
