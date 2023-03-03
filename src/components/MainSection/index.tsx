import React from 'react'
import styles from './MainSection.module.css'
import FRORAL_LEFT from '../../assets/left.png'
import FRORAL_RIGHT from '../../assets/right.png'
import Button from '../UI/Button'

type Props = {}

const MainSection = (props: Props) => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.froral_left}>
                <img src={FRORAL_LEFT} />
            </div>
            <div className={styles.froral_right}>
                <img src={FRORAL_RIGHT} />
            </div>
            <div className={styles.more_info}>
                <h4>Вы приглашены на свадьбу!</h4>
            </div>
            <div className={styles.name_info}>
                <h3>Эдуард</h3>
                <h3>&</h3>
                <h3>Яна</h3>
            </div>
            <div>
                <div className={styles.location_info}>
                    <p>14:00</p>
                    <p>г.Новосибирск, ул. Восход, 20</p>
                </div>
                <Button variant='standard'>Подтвердить присутствие</Button>
                <div className={styles.time_info}>
                    <h4>26 августа 2023г.</h4>
                </div>
            </div>
        </section>
    )
}

export default MainSection