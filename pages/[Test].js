import { useRouter } from 'next/router'

const Test = () => {
  const router = useRouter()
  const { id } = router.query
  return <div>Test case at id: {id}</div>
}

export default Test
