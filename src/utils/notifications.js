import { toast } from 'react-toastify'

const notifyAdd = (item, basketType) => toast.success(`${item} has successfully been added to your ${basketType}.`,{
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
    style: { backgroundColor: '#DA207A'}
});

const notifyRemove = (item, basketType) => toast.success(`${item} has successfully been removed from your ${basketType}.`,{
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
    style: { backgroundColor: '#DA207A'}
});

const notifyClear = (basketType) => toast.success(`${basketType} successfully cleared.`,{
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
    style: { backgroundColor: '#DA207A'}
});

export { notifyAdd, notifyRemove, notifyClear };