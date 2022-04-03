import styles from '../styles/TangentCard.module.css'

export default function TangentCard(props) {

  function formatDate(date) {
    console.log(date)
    return date
  }

  return (
    <div className={styles.tangent}>
      <h1>{props.title}</h1>
      <p>{formatDate(props.date)}</p>
      <hr/>
      <p>{props.body}</p>
    </div>
  )
}
