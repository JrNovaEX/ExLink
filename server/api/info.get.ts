type Info = {
  status: { key: string; label: string; color: string }
  todos: { id: number; text: string; done: boolean; sort: number; priority: number }[]
}

export default defineEventHandler(async (event) => {
  const token = process.env.API_TOKEN
  if (!token) throw createError({ statusCode: 500, statusMessage: 'API_TOKEN is not set' })

  setResponseHeader(event, 'cache-control', 'private, no-store')

  try {
    return await $fetch<Info>(
      `${process.env.TODO_API_BASE || 'https://novaex.vercel.app'}/api/info`,
      { headers: { Authorization: `Bearer ${token}` }, timeout: 8000 }
    )
  } catch {
    throw createError({ statusCode: 502, statusMessage: 'info feed unavailable' })
  }
})
