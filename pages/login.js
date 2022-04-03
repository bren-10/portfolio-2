import { useRouter } from 'next/router'
import React, { useRef, useState } from 'react'
import styles from '../styles/Login.module.css'

export default function login() {
  const pwRef = useRef()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  async function handleSubmit(e){
    e.preventDefault()
    setLoading(true)
    if (pwRef.current.value) {
      const fetchOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: ''
      }

      fetchOptions.body = JSON.stringify({password: pwRef.current.value})
      const response = await fetch('/api/log-me-in', fetchOptions)
      if (response.ok) {
        router.replace('/admin')
      } else {
        window.alert('Incorrect password.')
        setLoading(false)
      }
    }
  } 
  return (
    <div className={styles.login}>
      {loading ? 
        <h1>Please Wait</h1>
        :
        <>
        <h3>Password</h3>
        <form>
          <input type="password" ref={pwRef} placeholder='password'/>
          <div className='mt-3'>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </form>
        </>
      }
    </div>
  )
}
