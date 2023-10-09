import Swal from 'sweetalert2';
import styles from './Alerts.module.css';
import axiosInstance from '../../utils/axiosInstance';

const SendEmailVerify = (email = '') => {
    Swal.fire({
        title: 'User is not active',
        text: 'Do you want to receive an activation email?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Send',
        customClass: {
            popup: styles.BodyAlert,
            title: styles.TitleAlert,
            container: styles.ContentAlert,
            actions: styles.actionsButtons,
            confirmButton: styles.BtnBlack,
            cancelButton: styles.BtnBlack,
        },
    }).then(async (result) => {
        if (result.isConfirmed) {
            try {
                await axiosInstance(`/verify-email/${email}`)
                Swal.fire({
                    title: 'Email Send!',
                    text: 'Verify your email.',
                    icon: 'success',
                    timer: 3000,
                    customClass: {
                        popup: styles.BodyAlert,
                        title: styles.TitleAlert,
                        container: styles.ContentAlert,

                    },
                })
            } catch (error) {
                Swal.fire({
                    title: 'Error to Email Send',
                    text: 'An error occurred while sending the email, try again later.',
                    icon: 'error',
                    timer: 3000,
                    customClass: {
                        popup: styles.BodyAlert,
                        title: styles.TitleAlert,
                        container: styles.ContentAlert,

                    },
                })
            }
        }
    })
}

export default SendEmailVerify