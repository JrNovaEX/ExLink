<script setup lang="ts">
import { site } from '~/config/site'

type Todo = { id: number; text: string; done: boolean; sort: number; priority: number }

const props = defineProps<{ todos: Todo[]; state: 'loading' | 'ready' | 'error' }>()
const fullName = `${site.name}${site.accent}`
const broken = ref(false)
const flipped = ref(false)
const listEl = ref<HTMLElement | null>(null)
const open = computed(() => props.todos.filter((t) => !t.done).length)

// Text that overflows slides left on hover to reveal the hidden part.
function measure() {
  for (const li of listEl.value?.querySelectorAll<HTMLElement>('li') ?? []) {
    const txt = li.querySelector<HTMLElement>('.ttxt-in')
    if (!txt) continue
    const shift = txt.scrollWidth - txt.clientWidth
    const dir = getComputedStyle(txt).direction === 'rtl' ? 1 : -1
    li.style.setProperty('--shift', shift > 1 ? `${dir * shift}px` : '0px')
    li.style.setProperty('--dur', `${Math.min(8000, Math.max(1200, shift * 45))}ms`)
  }
}

function enter(e: PointerEvent) {
  if (e.pointerType === 'mouse') flipped.value = true
}
function leave(e: PointerEvent) {
  if (e.pointerType === 'mouse') flipped.value = false
}
function tap(e: MouseEvent) {
  if ((e as PointerEvent).pointerType !== 'mouse') toggle()
}
function toggle() {
  flipped.value = !flipped.value
}
function focusIn(e: FocusEvent) {
  if ((e.target as Element).matches(':focus-visible')) flipped.value = true
}
function focusOut() {
  flipped.value = false
}

onMounted(() => {
  nextTick(measure)
  window.addEventListener('resize', measure)
})
onBeforeUnmount(() => window.removeEventListener('resize', measure))
watch([() => props.state, () => props.todos], () => nextTick(measure), { deep: true })
</script>

<template>
  <section class="tile photo-card !p-0" tabindex="0" aria-label="Profile photo and task list"
    style="--d:.1s" @pointerenter="enter" @pointerleave="leave" @focus="focusIn" @blur="focusOut" @click="tap"
    @keydown.enter.prevent="toggle" @keydown.space.prevent="toggle">
    <div class="flip" :class="{ 'is-flipped': flipped }">
      <div class="face front">
        <img v-if="!broken" :src="site.avatar" :alt="fullName"
          class="absolute inset-0 h-full w-full object-cover grayscale contrast-[1.08]" @error="broken = true">
        <div v-else class="absolute inset-0 grid place-items-center text-7xl text-white/70">{{ site.name[0] }}</div>
        <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <span class="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-[11px] tracking-wider backdrop-blur">{{ site.handle }}</span>
      </div>
      <div class="face back">
        <div class="flex items-baseline justify-between gap-2">
          <span class="lbl">Tasks</span>
          <span v-if="state === 'ready'" class="lbl">{{ open }} open / {{ todos.length }}</span>
        </div>
        <ul v-if="state === 'ready' && todos.length" ref="listEl" class="todo-list">
          <li v-for="t in todos" :key="t.id" :class="{ done: t.done }">
            <span class="box"><svg v-if="t.done" viewBox="0 0 10 10"><path d="M1.5 5.2 4 7.7 8.5 2.5" /></svg></span>
            <span class="tid">{{ t.sort }} :</span>
            <span class="ttxt" dir="auto"><span class="ttxt-in">{{ t.text }}</span></span>
          </li>
        </ul>
        <p v-else-if="state === 'error'" class="lbl todo-empty">Task feed offline.</p>
        <p v-else-if="state === 'loading'" class="lbl todo-empty">Loading tasks…</p>
        <p v-else class="lbl todo-empty">Nothing on the list.</p>
      </div>
    </div>
  </section>
</template>
