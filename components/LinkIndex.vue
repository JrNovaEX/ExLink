<script setup lang="ts">
import { site } from '~/config/site'
const pad = (n: number) => String(n + 1).padStart(2, '0')
</script>
<template>
  <section class="reveal mt-20" style="--d:.5s">
    <h2 class="mb-5 font-mono text-[11px] uppercase tracking-[.22em] text-paper/50">Index</h2>
    <nav aria-label="Links">
      <a v-for="(l, i) in site.links" :key="l.url" :href="l.url" target="_blank" rel="noopener" class="row">
        <span class="meta font-mono text-[11px] text-paper/40">{{ pad(i) }}</span>
        <span class="font-display text-[2rem] leading-none sm:text-[2.4rem]">{{ l.label }}</span>
        <span class="meta flex items-baseline gap-3 font-mono text-[11px] text-paper/50">
          <span class="hidden sm:inline">{{ l.handle }}</span><span class="arr text-base">↗</span>
        </span>
      </a>
    </nav>
  </section>
</template>
