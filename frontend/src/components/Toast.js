import Swal from "sweetalert2";

const ToastIstance = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});
const Toast = (message="", icon="success") => {
  ToastIstance.fire({
    icon: icon,
    title: message,
  });
};

export default Toast