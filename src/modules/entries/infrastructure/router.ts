import express from 'express'
import { GetAllEntriesUseCase } from '../application'
import { EntriesRepository } from './EntriesRepository'

const router = express.Router()

const repository = new EntriesRepository()
const getAllEntriesUseCase = new GetAllEntriesUseCase(repository)

router.get('/', (_req, res) => {
  getAllEntriesUseCase
    .execute()
    .then((diaryEntries) => {
      res.send(diaryEntries)
    }).catch(() => {
      res.status(500).send('Internal server error')
    })
})

router.post('/', (_req, res) => {
  res.send('Saving a diary entry...')
})

export default router
