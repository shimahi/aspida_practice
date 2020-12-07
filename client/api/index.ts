export interface Member {
  id: number
  name: string
  age: number
  part: string
}

export interface Methods {
  get: {
    resBody: Member[]
  }
}
