import Swal from 'sweetalert2';
import styles from './Alerts.module.css';

const UserPrevSignUp = () => {
    Swal.fire({
        title: 'Previously Registered Email',
        text: 'Please, reset your password',
        icon: 'error',
        timer: 3000,
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

export default UserPrevSignUp;