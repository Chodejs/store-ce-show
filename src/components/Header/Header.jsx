import styles from './Header.module.css';

export default function Header() {

    const headerLoaded = "Header Component Mounted";
    

    return (
        <header className={styles.header}>
            <h2 className={styles.headerTitle}>Welcome to Ormen Lange</h2>
        </header>
    )
}