import Swal from 'sweetalert2';
import styles from './Alerts.module.css';


const Signed = () => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-start',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: 'success',
        title: 'Signed in successfully',
        customClass: {
            popup: styles.BodyAlert,
            title: styles.TitleAlert,
            container: styles.ContentAlert,

        },
    })
}

export default Signed