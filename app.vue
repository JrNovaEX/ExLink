<script setup lang="ts">
import { site } from '~/config/site'
useHead({ title: `${site.name}${site.accent}`, meta: [
  { name: 'description', content: site.bio.join(' ') },
  { property: 'og:title', content: `${site.name}${site.accent}` },
  { property: 'og:description', content: site.tagline }
] })
const now = ref<Date | null>(null)
const broken = ref(false)
const day = computed(() => now.value?.toLocaleDateString('en-US', { weekday: 'long' }) ?? '')
const time = computed(() => now.value?.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }) ?? '--:--')
const top = site.links.slice(0, 4)
const rest = site.links.slice(4)
const fullName = `${site.name}${site.accent}`
function track(e: PointerEvent) {
  const t = (e.target as HTMLElement).closest('.tile') as HTMLElement | null
  if (!t) return
  const r = t.getBoundingClientRect()
  t.style.setProperty('--x', e.clientX - r.left + 'px')
  t.style.setProperty('--y', e.clientY - r.top + 'px')
}
onMounted(() => { now.value = new Date(); setInterval(() => (now.value = new Date()), 20000) })
</script>
<template>
  <div>
    <div class="bg" aria-hidden="true"><i /><i /><i /></div>
    <div class="grain" aria-hidden="true" />
    <main class="relative z-10 grid min-h-dvh place-items-center p-3 sm:p-6">
      <div class="frame w-full max-w-[1180px]" @pointermove="track">
        <div class="bento">
          <!-- intro -->
          <section class="tile col-span-2 row-span-2 lg:col-span-5" style="--d:.05s">
            <div class="flex items-start justify-between">
              <svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M5 27V5l11 11L27 5v22L16 16 5 27Z" /></svg>
              <span class="text-right text-[12px] leading-snug tracking-wide"><span class="lbl block">{{ day }}</span>{{ time }}</span>
            </div>
            <div>
              <h1 class="big text-[clamp(22px,2.4vw,34px)] leading-[1.15]">Hello: I'm {{ fullName }}</h1>
              <div class="lbl mt-4 max-w-sm space-y-1.5 uppercase leading-relaxed">
                <p v-for="line in site.bio" :key="line">{{ line }}</p>
              </div>
            </div>
          </section>
          <!-- photo -->
          <section class="tile col-span-2 row-span-2 !p-0 lg:col-span-4" style="--d:.1s">
            <img v-if="!broken" :src="site.avatar" :alt="fullName" class="absolute inset-0 h-full w-full object-cover grayscale contrast-[1.08]" @error="broken = true">
            <div v-else class="absolute inset-0 grid place-items-center text-7xl text-white/70">{{ site.name[0] }}</div>
            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <span class="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-[11px] tracking-wider backdrop-blur">{{ site.handle }}</span>
          </section>
          <!-- status + note -->
          <section class="tile col-span-1 lg:col-span-3" style="--d:.15s">
            <span class="lbl">Status</span>
            <span class="big"><span class="dot" />{{ site.status }}</span>
          </section>
          <section class="tile col-span-1 lg:col-span-3" style="--d:.2s">
            <span class="lbl">Note</span>
            <span class="big">{{ site.tagline }}</span>
          </section>
          <!-- links -->
          <BentoLink v-for="(l, i) in top" :key="l.url" v-bind="l" :index="i" class="col-span-1 lg:col-span-3" />
          <BentoSpotify class="col-span-2 row-span-2 lg:col-span-6" />
          <BentoLink v-for="(l, i) in rest" :key="l.url" v-bind="l" :index="i + top.length" class="col-span-1 lg:col-span-3" />
          <section class="tile col-span-2 lg:col-span-3" style="--d:.7s">
            <span class="lbl">© {{ new Date().getFullYear() }}</span>
            <span class="big">{{ fullName }}<br><span class="lbl">End of page.</span></span>
          </section>
        </div>
      </div>
    </main>
  </div>
</template>
