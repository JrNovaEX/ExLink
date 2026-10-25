<script setup lang="ts">
import { site } from '~/config/site'
</script>
<template>
  <header>
    <div class="reveal flex items-center justify-between font-mono text-[11px] uppercase tracking-[.22em] text-paper/50"
      style="--d:.05s">
      <span>{{ site.handle }}</span><span>No. 01</span>
    </div>
    <div class="blob relative mt-10 h-40 w-40 overflow-hidden bg-paper/10 ring-1 ring-paper/15 sm:h-52 sm:w-52">
      <img :src="site.avatar" :alt="site.name + site.accent"
        class="h-full w-full object-cover contrast-[1.05] saturate-[.9] opacity-100">
      <div
        class="pointer-events-none absolute inset-0 bg-gradient-to-tr from-ember/25 via-transparent to-transparent mix-blend-soft-light" />
    </div>
    <h1 class="reveal mt-8 font-display text-[clamp(4.2rem,19vw,9rem)] leading-[.82] tracking-[-.03em]"
      style="--d:.25s">
      {{ site.name }}<em class="text-ember">{{ site.accent }}</em>
    </h1>
    <p class="reveal mt-6 font-mono text-xs uppercase tracking-[.2em] text-ember" style="--d:.35s">{{ site.tagline }}
    </p>
    <div class="reveal mt-5 max-w-md space-y-2 text-[15px] leading-relaxed text-paper/65" style="--d:.42s">
      <p v-for="line in site.bio" :key="line">{{ line }}</p>
    </div>
  </header>
</template>
