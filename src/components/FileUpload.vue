<template>
  <div class="upload__group">
    <div class="form-group">
      <input
        type="file"
        name="uploaded_file"
        class="form-control file-input pe-0"
        accept=".pdf, image/*, .doc, .docx, .txt, .xlsx, .csv"
        @change="handleFileUpload"
      />
    </div>

    <!-- Preview -->
    <div v-if="file" class="upload__preview">
      <button class="remove__btn" @click="removeFile">
        <HugeiconsIcon :icon="Cancel01Icon" />
      </button>

      <img v-if="filePreviewType === 'image'" :src="fileUrl" alt="Image preview" class="preview" />

      <div v-else-if="filePreviewType === 'pdf'" :src="fileUrl" class="preview">
        <img src="../../../../../public/assets/images/pdf-icon.png" :alt="file.name" />
      </div>

      <div v-else class="preview">
        <HugeiconsIcon :icon="File02Icon" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Cancel01Icon, File02Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/vue'

const file = ref(null)
const fileUrl = ref(null)
const filePreviewType = ref('')

const handleFileUpload = (event) => {
  const selected = event.target.files[0]
  if (!selected) return

  file.value = selected
  fileUrl.value = URL.createObjectURL(selected)

  if (selected.type.startsWith('image/')) {
    filePreviewType.value = 'image'
  } else if (selected.type === 'application/pdf') {
    filePreviewType.value = 'pdf'
  } else {
    filePreviewType.value = 'other'
  }
}

const removeFile = () => {
  if (fileUrl.value) URL.revokeObjectURL(fileUrl.value)
  file.value = null
  fileUrl.value = null
  filePreviewType.value = ''

  const input = document.querySelector('input[type="file"]')
  if (input) input.value = ''
}
</script>

<style scoped>
/* Push native "Choose File" button to right */
.file-input::-webkit-file-upload-button {
  float: right; /* Chrome, Edge, Safari */
}

.file-input::file-selector-button {
  float: right; /* Firefox */
}
</style>
