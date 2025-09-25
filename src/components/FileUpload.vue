<template>
  <div class="upload__group">
    <div class="form-group">
      <input
        type="file"
        name="uploaded_file"
        class="form-control"
        accept=".pdf, image/*, .doc, .docx, .txt, .xlsx, .csv"
        @change="handleFileUpload"
      />
    </div>
    <!-- Preview -->
    <div v-if="file" class="upload__preview">
      <button class="remove__btn" @click="removeFile">
        <HugeiconsIcon :icon="Cancel01Icon" />
      </button>

      <!--  Image preview -->
      <img v-if="filePreviewType === 'image'" :src="fileUrl" alt="Image preview" class="preview" />

      <!--  PDF preview -->
      <div v-else-if="filePreviewType === 'pdf'" :src="fileUrl" class="preview">
        <img src="../../../../../public/assets/images/pdf-icon.png" :alt="file.name" />
      </div>

      <!-- 📁 Other file -->
      <div v-else class="preview">
        <HugeiconsIcon :icon="File02Icon" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Cancel01Icon, File02Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/vue'

// File Upload
const file = ref(null)
const fileUrl = ref(null)
const filePreviewType = ref('')

const handleFileUpload = (event) => {
  const selected = event.target.files[0]
  if (!selected) return

  file.value = selected
  const type = selected.type

  // Create preview URL
  fileUrl.value = URL.createObjectURL(selected)

  // Determine file type
  if (type.startsWith('image/')) {
    filePreviewType.value = 'image'
  } else if (type === 'application/pdf') {
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

  // Reset input
  const input = document.querySelector('input[type="file"]')
  if (input) input.value = ''
}
</script>
