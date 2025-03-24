import { toast, Bounce } from 'react-toastify'

const defaultConfig = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
};

export const Toast = {
    success: (message) => toast.success(message, defaultConfig),
    error: (message) => toast.error(message, defaultConfig),   
    info: (message) => toast.info(message, defaultConfig),
    warning: (message) => toast.warning(message, defaultConfig) 
};