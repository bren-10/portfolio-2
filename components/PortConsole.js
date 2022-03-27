import styles from '../styles/PortConsole.module.css'

export default function PortConsole(props) {
  return (
    <div className={styles.console}>
      <header>
        <p>#?</p>
      </header>
      <div className={styles.consoleBody}>
        <p>Content content content</p>
      </div>
    </div>
  )
}
