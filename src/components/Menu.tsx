import styles from '../styles/components/Menu.module.css';

import menu from '../data/menuData.json';

export default function Menu() {
    return (
        <>
            {menu.map((menu, index) => {
                return (
                    <section className={styles.container} key={index} id={menu.idToScroll}>
                        <h2 className={styles.sectionTitle}>
                            {menu.section}
                        </h2>

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
                                                        style={item.price.length == 1 ? { "textAlign": "right"} : null}>
                                                        {item.price.length == 1 ? null : menu.sizes[index]}
                                                        <span
                                                            style={(item.description == '' && item.price.length == 1) ? { "color": "#fff" } : null}>
                                                            R$ {price.toFixed(2).replace('.', ',')}
                                                        </span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                        <img src="images/logo.png" alt="logo"/>
                    </section>
                );
            })}
        </>
    );
}