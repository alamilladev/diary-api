import { IEntriesRepository, DiaryEntry, WeatherEnum, VisibilityEnum } from '../domain'

export class EntriesRepository implements IEntriesRepository {
  public async getAllEntries (): Promise<DiaryEntry[]> {
    const entries = await import('./entriesDB.json')

    const parsedEntries: DiaryEntry[] = entries.default.map((entry) => {
      return new DiaryEntry(
        entry.id,
        entry.date,
        entry.weather as WeatherEnum,
        entry.visibility as VisibilityEnum,
        entry.comment
      )
    })

    return parsedEntries
  }

  public addEnty (): void {}
}
