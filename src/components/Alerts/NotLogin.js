import Swal from 'sweetalert2';
import styles from './Alerts.module.css';

const NotLogin = () => {
    Swal.fire({
        title: 'User not logged in',
        text: 'Please sign in to continue',
        icon: 'error',
        timer: 3000,
        confirmButtonText: 'OK',
        customClass: {
            popup: styles.BodyAlert,
            confirmButton: styles.BtnBlack,
            title: styles.TitleAlert,
        },
        buttonsStyling: false,
        showCancelButton: false,
        customContainerClass: styles.BodyAlert,
    })
}

export default NotLogin;