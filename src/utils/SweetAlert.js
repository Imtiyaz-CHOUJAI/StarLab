import Swal from "sweetalert";

export const ThrowError = (message = "Please Try again in a minute") => {
  Swal({
    title: "Something went wrong",
    text: message,
    icon: "warning",
    dangerMode: true,
  });
};
