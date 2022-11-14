import Swal from 'sweetalert2'
const showToast = (title = "Success", type = "success", message = "Success", confirmButtonText="Ok") => { // type: success, error, warning, info, question
    Swal.fire({
        title: title,
        text: message,
        icon: type,
        confirmButtonText: confirmButtonText
    })
}

export default showToast