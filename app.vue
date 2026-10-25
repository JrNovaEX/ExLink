<script setup lang="ts">
import { site } from '~/config/site'
useHead({ title: `${site.name}${site.accent}`, meta: [
  { name: 'description', content: site.bio.join(' ') },
  { property: 'og:title', content: `${site.name}${site.accent}` },
  { property: 'og:description', content: site.tagline }
] })
onMounted(() => {
  const root = document.documentElement
  window.addEventListener('pointermove', (e) => {
    root.style.setProperty('--mx', e.clientX + 'px')
    root.style.setProperty('--my', e.clientY + 'px')
  }, { passive: true })
})
</script>
<template>
  <div class="relative min-h-dvh overflow-x-clip">
    <div class="spot" aria-hidden="true" />
    <div class="grain" aria-hidden="true" />
    <main class="relative z-10 mx-auto max-w-2xl px-6 pb-20 pt-12 sm:pt-20">
      <Hero /><LinkIndex /><VinylPlayer />
      <footer class="reveal mt-24 flex justify-between font-mono text-[11px] uppercase tracking-[.2em] text-paper/35" style="--d:.7s">
        <span>© {{ new Date().getFullYear() }} {{ site.name }}{{ site.accent }}</span><span>End.</span>
      </footer>
    </main>
  </div>
</template>
