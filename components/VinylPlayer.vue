<script setup lang="ts">
import { site } from '~/config/site'
const open = ref(false)
const loaded = ref(false)
function toggle() { open.value = !open.value; if (open.value) loaded.value = true }
</script>
<template>
  <section class="reveal mt-20" style="--d:.6s">
    <h2 class="mb-5 font-mono text-[11px] uppercase tracking-[.22em] text-paper/50">Soundtrack</h2>
    <button type="button" class="group flex w-full items-center gap-6 text-left" :aria-expanded="open" @click="toggle">
      <span class="relative block w-28 shrink-0 sm:w-36">
        <span class="disc relative block" :class="{ on: open }" />
      </span>
      <span class="min-w-0">
        <span class="block font-display text-4xl leading-none sm:text-5xl">{{ site.spotify.title }}</span>
        <span class="mt-3 block text-sm text-paper/55">{{ site.spotify.note }}</span>
        <span class="mt-4 inline-block font-mono text-[11px] uppercase tracking-[.2em] text-ember">{{ open ? '− Close' : '+ Play' }}</span>
      </span>
    </button>
    <div class="drawer" :class="{ open }">
      <div>
        <iframe v-if="loaded" class="mt-6 block h-[352px] w-full rounded-xl border-0" title="Spotify playlist" loading="lazy"
          :src="`https://open.spotify.com/embed/playlist/${site.spotify.id}?utm_source=generator&theme=0`"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" />
      </div>
    </div>
  </section>
</template>
