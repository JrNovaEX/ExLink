<script setup lang="ts">
defineProps<{ label: string; handle: string; url: string; index: number; desc?: string }>()
</script>
<template>
  <a :href="url" target="_blank" rel="noopener" class="tile link-card" :style="`--d:${0.25 + index * 0.05}s`">
    <span class="lbl">{{ String(index + 1).padStart(2, '0') }} / {{ label }}</span>
    <span class="card-main ">
      <span v-if="desc" class="desc">{{ desc }}</span>

      <span class="card-foot">
        <span class="big card-line">{{ handle }}</span>
        <span class="go"><svg viewBox="0 0 24 24">
            <path d="M7 17 17 7M8 7h9v9" />
          </svg></span>
      </span>
    </span>
  </a>
</template>
