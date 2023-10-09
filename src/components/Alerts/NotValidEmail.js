import Swal from 'sweetalert2';
import styles from './Alerts.module.css';

const NotValidEmail = (messages = 'Enter a valid email') => {
    Swal.fire({
        title: 'Email not valid',
        text: messages,
        icon: 'error',
        timer: 3000,
        confirmButtonText: 'OK',
        customClass: {
            popup: styles.BodyAlert,
            container: styles.BodyAlert,
            confirmButton: styles.BtnBlack,
            title: styles.TitleAlert
        },
        buttonsStyling: false,
        showCancelButton: false,
        customContainerClass: styles.BodyAlert,
    })
}

export default NotValidEmail;