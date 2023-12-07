import express from 'express'
import { entriesRouter } from './modules/entries'

const app = express()
app.use(express.json())

const APP_PORT = 3000

app.use('/api/entries', entriesRouter)

app.listen(APP_PORT, (): void => {
  console.log(`Server app running on port ${APP_PORT}`)
})
