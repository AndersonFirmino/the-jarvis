export interface StartDto {
  id: number
  name: string
  thumbnail: {
    extension: string
    path: string
  }
  description: string
}
