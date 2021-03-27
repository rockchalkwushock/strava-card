import { Layout } from '@components'
import { useStrava } from '@hooks'

const IndexPage = () => {
  const { data, error } = useStrava()

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      {error ? (
        <h1>Error</h1>
      ) : !data ? (
        <h1>Loading...</h1>
      ) : (
        <div>{JSON.stringify(data, undefined, 2)}</div>
      )}
    </Layout>
  )
}

export default IndexPage
