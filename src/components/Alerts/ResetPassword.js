import Swal from 'sweetalert2';
import styles from './Alerts.module.css';
import axiosInstance from '../../utils/axiosInstance';
import { resetPassword } from '../../services/firebase';
import Logo from '../Icons/Logo';

const ResetPassword = ({ email = '' }) => {
    Swal.fire({
        title: 'Registered Email',
        text: 'Do you want to reset your password?',
        icon: 'warning',
        input: `text`,
        inputValue: email,
        inputAttributes: {
            autocapitalize: 'off'
        },
        customClass: {
            popup: styles.BodyAlert,
            actions: styles.actionsButtons,
            input: styles.inputSwall,
            confirmButton: styles.BtnBlack,
            cancelButton: styles.BtnBlack,
            title: styles.TitleAlert,
            container: styles.ContentAlert,

        },
        buttonsStyling: false,
        showCancelButton: true,
        confirmButtonText: 'Reset',
        showLoaderOnConfirm: true,
        preConfirm: async (email) => {
            try {
                await resetPassword(email)
            } catch (error) {
                Swal.showValidationMessage(
                    `Request failed: ${error}`
                )

            }
        },
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
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
    })
}

export default ResetPassword