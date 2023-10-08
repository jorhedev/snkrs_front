import Swal from 'sweetalert2';
import styles from './Alerts.module.css';

const NotValidEmail = () => {
    Swal.fire({
        title: 'Email not valid',
        text: 'Please sign in to continue',
        icon: 'error',
        timer: 1500,
        confirmButtonText: 'OK',
        customClass: {
            container: styles.BodyAlert,
            confirmButton: styles.BtnBlack,
            title: styles.TitleAlert,
        },
        buttonsStyling: false,
        showCancelButton: false,
        customContainerClass: styles.BodyAlert,
    })
}

export default NotValidEmail;