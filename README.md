# URL Performance Tester

A Cloudflare Worker service that measures URL performance metrics including total response time and redirect time.

## Features

- Test URL response times
- Track redirect timing
- CORS enabled for cross-origin requests
- Error handling with detailed messages

## Tech Stack

- [Cloudflare Workers](https://workers.cloudflare.com/)
- [Hono](https://hono.dev/) - Lightweight web framework
- TypeScript

## API Endpoints

### Test URL Performance

- **Method:** `POST`
- **URL:** `/test`
- **Headers:** `Content-Type: application/json`
- **Request Body:**
  ```json
  {
    "url": "https://whr.li/coffee"
  }
  ```

- **Response:**
  ```json
  {
    "url": "https://whr.li/coffee",
    "totalTime": 123.45, // Total time in milliseconds
    "error": null
  }
  ```

## Development

```bash
# Install dependencies
pnpm install

# Run the development server
pnpm dev

# Deploy the service
pnpm deploy
```

## Environment Setup

Make sure you have [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) installed and are logged in to your Cloudflare account.

## Configuration

The project uses `wrangler.toml` for Cloudflare Workers configuration. Modify as needed for your deployment requirements.

## License

MIT

## Support

<a href="https://www.buymeacoffee.com/ryanliu" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>
