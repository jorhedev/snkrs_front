import Swal from 'sweetalert2';
import styles from './Alerts.module.css'
import axiosInstance from '../../utils/axiosInstance';
const ModalDataUpdate = (currentValue, field, id, route) => {
    Swal.fire({
        title: `Update ${field}`,
        input: 'text',
        inputPlaceholder: currentValue.toUpperCase(),
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: 'Update',
        cancelButtonText: 'Cancel',
        customClass: {
            popup: styles.BodyAlert,
            title: styles.TitleAlert,
            container: styles.ContentAlert,
            actions: styles.actionsButtons,
            confirmButton: styles.BtnBlack,
            cancelButton: styles.BtnCancel,
            input: styles.Input
        },
        inputValidator: (value) => {
            if (!value) {
                return 'You must enter a value';
            }
        },
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Confirm',
                text: 'Do you want to continue updating data?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Accept',
                cancelButtonText: 'Cancel',
                customClass: {
                    popup: styles.BodyAlert,
                    title: styles.TitleAlert,
                    container: styles.ContentAlert,
                    actions: styles.actionsButtons,
                    confirmButton: styles.BtnBlack,
                    cancelButton: styles.BtnCancel,
                    input: styles.Input
                },
            }).then(async (confirmationResult) => {
                if (confirmationResult.isConfirmed) {
                    try {
                        await axiosInstance.put(`${route}/${id}`, { [field.toLowerCase()]: result.value })
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
                            title: `${field} updated successfully.`,
                            customClass: {
                                popup: styles.BodyAlert,
                                title: styles.TitleAlert,
                                container: styles.ContentAlert,

                            },
                        })
                    } catch (error) {
                        Swal.fire(`It was not possible to update the ${field}`);
                    }

                }
            });
        }
    });
}

export default ModalDataUpdate
