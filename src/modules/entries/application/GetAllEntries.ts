import type { IEntriesRepository, DiaryEntry } from '../domain'

export class GetAllEntriesUseCase {
  private readonly repository: IEntriesRepository

  constructor (repository: IEntriesRepository) {
    this.repository = repository
  }

  public async execute (): Promise<DiaryEntry[]> {
    return await this.repository.getAllEntries()
  }
}
