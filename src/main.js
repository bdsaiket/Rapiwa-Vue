// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Install Plugins

// Import Hugeicons component
import { HugeiconsIcon } from '@hugeicons/vue'
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
// Vue Tel Input
import VueTelInput from 'vue-tel-input'
import 'vue-tel-input/dist/vue-tel-input.css'
// Vue3 Select
import Vue3Select from 'vue3-select-component'
// Vue Quill Editor
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

// Custom Styles
import '../public/assets/scss/style.css'

// Create the Vue app
const app = createApp(App)

// Register the globally
app.component('HugeiconsIcon', HugeiconsIcon)
app.component('Vue3Select', Vue3Select)
app.component('QuillEditor', QuillEditor)

// Pinia Store
app.use(createPinia())
// Router
app.use(router)
// Vue Tel Input
app.use(VueTelInput)
// Mount App
app.mount('#app')
