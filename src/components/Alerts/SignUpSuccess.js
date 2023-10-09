import Swal from 'sweetalert2';
import styles from './Alerts.module.css';
import axiosInstance from '../../utils/axiosInstance';
import { redirect } from 'react-router-dom';

const SignUpSuccess = () => {
    console.log('heres')
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
            redirect('/home')
        }
        setTimeout(() => {
            redirect('/home')
        }, 3000);
    });
};

export default SignUpSuccess;



