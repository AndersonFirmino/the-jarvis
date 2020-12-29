export interface ComicsDto {
  id: number
  thumbnail: {
    extension: string
    path: string
  }
  description: string
  title: string
}

export interface ComicsStateDto {
  id: number
}
