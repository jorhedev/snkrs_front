import Swal from 'sweetalert2';
import styles from './Alerts.module.css'

const ResetEmailSend = () => {
    Swal.fire({
        title: `Reset email sent`,
        icon: 'success',
        customClass: {
            popup: styles.BodyAlert,
            confirmButton: styles.BtnBlack,
            title: styles.TitleAlert,
            container: styles.ContentAlert,
        },
    })
}

export default ResetEmailSend