type Member = {
  id: number
  name: string
  age: number
  part: string
}

export type Methods = {
  get: {
    query?: {
      limit: number
    }

    resBody: Member[]
  }

  post: {
    reqBody: {
      name: string
    }

    resBody: Member
    /**
     * reqHeaders(?): ...
     * reqFormat: ...
     * status: ...
     * resHeaders(?): ...
     * polymorph: [...]
     */
  }
}
