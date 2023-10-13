import Swal from 'sweetalert2';
import styles from './Alerts.module.css'
import axiosInstance from '../../utils/axiosInstance';

const ModalDataDelete = (field, id, route) => {
    Swal.fire({
        title: `Are you sure you want to delete the ${field}?`,
        text: 'This action can not be undone.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Delete',
        cancelButtonText: 'Cancel',
        customClass: {
            popup: styles.BodyAlert,
            title: styles.TitleAlert,
            container: styles.ContentAlert,
            actions: styles.actionsButtons,
            confirmButton: styles.BtnBlack,
            cancelButton: styles.BtnCancel,
        },
    }).then(async (result) => {
        if (result.isConfirmed) {
            try {
                await axiosInstance.delete(`${route}/${id}`)
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
                    title: `The ${field} deleted successfully.`,
                    customClass: {
                        popup: styles.BodyAlert,
                        title: styles.TitleAlert,
                        container: styles.ContentAlert,

                    },
                })
            } catch (error) {
                Swal.fire(`It was not possible to delete the ${field}`);
            }
        }
    });
}

export default ModalDataDelete