import Swal from 'sweetalert2';
import styles from './Alerts.module.css';

const NotRegister = () => {
    Swal.fire({
        title: 'User Not Registered',
        text: 'Please, register to continue with us',
        icon: 'error',
        confirmButtonText: 'OK',
        customClass: {
            popup: styles.BodyAlert,
            confirmButton: styles.BtnBlack,
            title: styles.TitleAlert,
            container: styles.ContentAlert,

        },
        buttonsStyling: false,
        showCancelButton: false,

    })
}

export default NotRegister;