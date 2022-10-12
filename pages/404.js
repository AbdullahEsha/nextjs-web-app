import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Error = () => {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 1000)
  }, [])
  return (
    <>
      <div className="child-text-align">
        <h1>404 Page Not Found!</h1>
        <h2>Go Back to Home Page.</h2>
      </div>
    </>
  )
}

export default Error
