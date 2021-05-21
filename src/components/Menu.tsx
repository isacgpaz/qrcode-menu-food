import * as IoIcons from 'react-icons/io';

import styles from '../styles/components/Menu.module.css';

import menu from '../data/menuData.json';

export default function Menu() {

    return (
        <>
            <div className={styles.container}>
                {menu.map((menu, index) => {
                    return (
                        <section className={styles.menuContainer} key={index} id={menu.idToScroll}>
                            <div className={styles.titleContainer}>
                                <h2 className={styles.sectionTitle}>
                                    {menu.section}
                                </h2>
                            </div>

                            <ul className={styles.itemsList}>
                                {menu.content.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <div>
                                                <h3>{item.title}</h3>

                                                <p>{item.description}</p>
                                            </div>

                                            <div className={styles.boxContainer}>
                                                {item.price.map((price, index) => {
                                                    return (
                                                        <div
                                                            className={styles.boxPrice}
                                                            key={index}
                                                            style={item.price.length == 1 ? { "textAlign": "right" } : null}>
                                                            {item.price.length == 1 ? null : menu.sizes[index]}
                                                            <span>R$ {price.toFixed(2).replace('.', ',')}</span>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </section>
                    );
                })}
            </div>
        </>
    );
}