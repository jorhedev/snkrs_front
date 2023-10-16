import Swal from 'sweetalert2';
import styles from './Alerts.module.css';
import axiosInstance from '../../utils/axiosInstance';
import { SESSION_NOT_COOKIE } from '../../const';

const SignUpSuccess = ({ setRedirect }) => {
    Swal.fire({
        title: 'Your Welcome',
        text: 'Check your email to activate your account',
        icon: 'success',
        timer: 3000,
        customClass: {
            popup: styles.BodyAlert,
            confirmButton: styles.BtnBlack,
            title: styles.SignUpSuccess,
            container: styles.ContentAlert,
        },
    }).then((result) => {
        if (result.isConfirmed) {
            setRedirect(true)
        }
    });
};

export default SignUpSuccess;



