import { FaArrowUp } from 'react-icons/fa'
import { Button } from '../../components/UI/Button'
import styles from './Basket.module.css'

export const BasketItem = ({ children, click }) => {
    return (
        <li className={styles.card}>
            <Button type="circle" click={click}>
                <FaArrowUp />
            </Button>
            <span>{children}</span>
        </li>
    )
}
