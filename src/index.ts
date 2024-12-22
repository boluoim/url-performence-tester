import { Hono } from 'hono'
import { cors } from 'hono/cors'

interface TestResult {
  url: string
  totalTime: number
  dnsTime?: number
  redirectTime?: number
  firstByteTime?: number
  error?: string
}

const app = new Hono()

app.use('*', cors())

app.post('/test', async (c) => {
  const { url } = await c.req.json<{ url: string }>()

  try {
    const startTime = performance.now()

    const response = await fetch(url, {
      redirect: 'follow',
      headers: {
        'User-Agent': 'URL-Performance-Tester'
      }
    })

    const endTime = performance.now()

    const result: TestResult = {
      url,
      totalTime: endTime - startTime
    }

    if (response.redirected) {
      result.redirectTime = endTime - startTime
    }

    return c.json(result)
  } catch (error) {
    return c.json({
      url,
      error: (error as Error).message,
      totalTime: 0
    }, 500)
  }
})

app.get('/', (c) => {
  return c.text('URL Performance Tester')
})

export default app
