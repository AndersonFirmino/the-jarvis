export interface StartDto {
  id: number
  title: string
  thumbnail: {
    extension: string
    path: string
  }
  description: string
}
