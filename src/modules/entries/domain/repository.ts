import type { DiaryEntry } from './entries'

export interface IEntriesRepository {
  getAllEntries: () => Promise<DiaryEntry[]>
  addEnty: () => void
}
