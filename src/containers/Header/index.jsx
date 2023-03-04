import { Basket } from '../Basket'
import styles from './Header.module.css'

export const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <h4>Logo</h4>

                <Basket />
            </header>
        </>
    )
}
