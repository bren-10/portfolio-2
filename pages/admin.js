import { withIronSessionSsr } from "iron-session/next";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import styles from '../styles/Admin.module.css'

export default function admin(props) {
  const titleRef = useRef()
  const bodyRef = useRef()
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)

    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: ''
    }

    fetchOptions.body = JSON.stringify({
      "title": titleRef.current.value,
      "body": bodyRef.current.value,
      "date": new Date().toLocaleString()
    })

    if (titleRef.current.value && bodyRef.current.value) {
      const response = await fetch('/api/tangents/add-tangent', fetchOptions)
      if (response.ok) {
        router.replace('/tangents')
      } else {
        window.alert('Something went wrong with the submission.')
        setLoading(false)
      }
    } else {
      window.alert('Please provide both the title and body.')
      setLoading(false)
    }
  }

  return (
    <div className={styles.admin}>
      {loading ? 
        <h2>Please wait</h2>
        :
        <>
          <h3>Write a tangent</h3>
          <form>
            <input type="text" ref={titleRef} placeholder="Title"/>
            <textarea placeholder="Write your tangent" cols="20" rows="10" ref={bodyRef}></textarea>
            <button onClick={handleSubmit}>Submit</button>
          </form>
        </>
      }
    </div>
  )
}

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }) {

    const user = req.session.user;

    if (user){
      return {
        props: {}
      }
    }

    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
      props:{},
    };
  },
  {
    cookieName: "bren10cookie",
    password: process.env.COOKIE_PW,
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    cookieOptions: {
      secure: !process.env.NEXT_PUBLIC_IN_PRODUCTION,
    },
  },
);