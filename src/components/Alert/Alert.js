import Swal from "sweetalert2";
export const alert = (title, text, icon, isShowConfirmButton = true) => {
    Swal.fire({
        title: `${title}`,
        toast: true,
        position: "top-end",
        timerProgressBar: true,
        timer: 3000,
        text: `${text}`,
        icon: `${icon}`,
        showConfirmButton: isShowConfirmButton,
    });
}