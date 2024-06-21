import Swal, { SweetAlertPosition } from "sweetalert2";

interface SweetALertProps {
  position: SweetAlertPosition;
  title: string;
  icon: "success" | "error" | "warning" | "info";
  timer: number; // in milliseconds
  showConfirmButton?: boolean;
  showCancelButton?: boolean;
  confirmButtonText?: string;
  cancelButtonText?: string;
  timerProgressBar?: boolean;
}

const SweetAlert = (props: SweetALertProps) => {
  const Toast = Swal.mixin({
    toast: true,
    position: props.position,
    timer: props.timer,
    showConfirmButton: props.showConfirmButton,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  return Toast.fire({
    icon: props.icon,
    title: props.title,
  });
};

export default SweetAlert;
