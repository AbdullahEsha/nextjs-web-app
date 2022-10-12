import { useRouter } from 'next/router'

const Test = () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <div className="child-text-align" align="center">
      <h2>Test case at id: {id}</h2>
      <br />
      <button onClick={() => router.push('/')}>Back to Home</button>
    </div>
  )
}

export default Test
