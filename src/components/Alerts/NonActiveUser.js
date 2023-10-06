import Swal from 'sweetalert2';
import styles from './Alerts.module.css';

const NonActiveUser = () => {
    Swal.fire({
        title: 'Activate User',
        text: 'The user is not active, verify your email.',
        icon: 'error',
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

export default NonActiveUser;