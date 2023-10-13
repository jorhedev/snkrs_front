import Swal from 'sweetalert2';
import styles from './Alerts.module.css'
import axiosInstance from '../../utils/axiosInstance';
const ModalDataCreate = (field, route) => {
    Swal.fire({
        title: `Create ${field}`,
        input: 'text',
        inputPlaceholder: `Enter the ${field} to create`,
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: 'Create',
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
                text: `Do you want to create this new ${field}?`,
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
                },
            }).then(async (confirmationResult) => {
                if (confirmationResult.isConfirmed) {
                    try {
                        await axiosInstance.post(route, { [field.tolowercase()]: result.value })
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
                            title: `${field} has been created successfully.`,
                            customClass: {
                                popup: styles.BodyAlert,
                                title: styles.TitleAlert,
                                container: styles.ContentAlert,

                            },
                        })
                    } catch (error) {
                        Swal.fire(`It was not possible to update the ${field}`);
                    }
                } else {
                    Swal.fire('Operation Canceled', '', 'error');
                }
            });
        }
    });
}

export default ModalDataCreate;