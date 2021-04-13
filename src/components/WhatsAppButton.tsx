import * as FaIcons from 'react-icons/fa';
import styles from '../styles/components/WhatsAppButton.module.css';

export function WhatsAppButton() {
    return (
        <>
            <div className={styles.container}>
                <a href='https://api.whatsapp.com/send?phone=558899566908'>
                    <FaIcons.FaWhatsapp />
                </a>
            </div>
        </>
    );
}