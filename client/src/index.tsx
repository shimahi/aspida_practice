import { useState, useEffect } from 'react'
import 'ress'
import { render } from 'react-dom'
import aspida from '@aspida/fetch'
import api from '../api/$api'
import { Member } from '../api/index'
import 'twin.macro'

const baseURL = 'http://localhost:4000'

const getMembers = async () => {
  const _fetch = api(
    aspida(fetch, {
      baseURL,
    }),
  )

  const res = await _fetch.$get()

  return res
}

const App = () => {
  const [members, setMembers] = useState<Member[]>()

  useEffect(() => {
    getMembers().then((res) => {
      setMembers(res)
    })
  }, [])

  return (
    <section>
      <table>
        <thead tw="bg-green-500 text-white font-bold">
          <tr>
            <td>name</td>
            <td>age</td>
            <td>part</td>
          </tr>
        </thead>
        <tbody tw="bg-green-50">
          {members &&
            members.length &&
            members.map(({ id, name, age, part }) => {
              return (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{age}</td>
                  <td>{part}</td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </section>
  )
}

render(<App />, document.getElementById('root'))
