<script setup lang="ts">
import { site } from '~/config/site'
const open = ref(false)
</script>
<template>
  <div class="tile" style="--d:.45s">
    <template v-if="!open">
      <span class="lbl">Soundtrack</span>
      <div class="disc" />
      <span class="relative z-10">
        <span class="big block text-[clamp(20px,2vw,28px)]">{{ site.spotify.title }}</span>
        <span class="lbl mt-2 block max-w-[16rem]">{{ site.spotify.note }}</span>
        <button type="button" class="mt-4 inline-flex items-center gap-3 text-[11px] uppercase tracking-[.14em]"
          @click="open = true">
          <span class="go"><svg viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg></span> Play
        </button>
      </span>
    </template>
    <template v-else>
      <div class="relative w-full overflow-hidden rounded-2xl h-[352px] md:h-[152px]">
        <iframe class="absolute inset-0 h-full w-full border-0" title="Spotify playlist"
          :src="`https://open.spotify.com/embed/playlist/${site.spotify.id}?utm_source=generator&theme=0`"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" />
      </div>
      <button type="button" class="go absolute right-3 top-3 z-10 backdrop-blur" aria-label="Close player"
        @click="open = false">
        <svg viewBox="0 0 24 24">
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
      </button>
    </template>
  </div>
</template>
