export enum WeatherEnum {
  sunny = 'sunny',
  rainy = 'rainy',
  cloudy = 'cloudy',
  windy = 'windy',
  stormy = 'stormy'
}

export enum VisibilityEnum {
  great = 'great',
  good = 'good',
  ok = 'ok',
  poor = 'poor'
}

export class DiaryEntry {
  public readonly id: number
  public readonly date: string
  public readonly weather: WeatherEnum
  public readonly visibility: VisibilityEnum
  public readonly comment: string

  constructor (id: number, date: string, weather: WeatherEnum, visibility: VisibilityEnum, comment: string) {
    this.id = id
    this.date = date
    this.weather = weather
    this.visibility = visibility
    this.comment = comment
  }
}
