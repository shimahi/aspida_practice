type Member = {
  id: number
  name: string
  age: number
  part: string
}

export type Methods = {
  get: {
    resBody: Member
  }

  put: {
    reqBody: {
      name: string
    }

    resBody: Member
  }
}
