import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: 'https://0dca7da3f882d8ef6bd79b0b2fa42ecc@o4506025182035968.ingest.sentry.io/4506025184788480',

  tracesSampleRate: 1,

  debug: false,

  replaysOnErrorSampleRate: 1.0,

  replaysSessionSampleRate: 0.1,

  integrations: [
    new Sentry.Replay({
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
})
