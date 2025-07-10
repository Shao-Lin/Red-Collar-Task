import { toast, Bounce } from 'react-toastify';

export const notifyApiError = () =>
  toast.error("Не удалось загрузить книги. Попробуйте позже", {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
    transition: Bounce,
  });

export const notifyNotFoundError = () =>
  toast.error("Ничего не найдено по вашему запросу", {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
    transition: Bounce,
  });


export const notifySuccessAdd = () =>
  toast.success('Книга успешно добавлена', {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
    transition: Bounce,
  });

export const notifySuccessDelete = () =>
  toast.success('Книга успешно удалена', {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
    transition: Bounce,
  });