import aspida from '@aspida/fetch'
import api from '../api/$api'

const main = async () => {
  const memberId = 1
  const limit = 10
  const client = api(aspida())

  await client.v1.members.post({ body: { name: 'shimahi' } })

  const res = await client.v1.members.get({ query: { limit } })
  console.log(res)
  // req -> GET: /v1/members/?limit=10
  // res -> { status: 200, body: [{ id: 0, name: "taro" }], headers: {...} }

  const user = await client.v1.members._memberId(memberId).$get()
  console.log(user)
  // req -> GET: /v1/members/0
  // res -> { id: 0, name: "taro" }
}

main()
