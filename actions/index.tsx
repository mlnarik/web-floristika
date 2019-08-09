export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (url: string) => dispatch => {
    dispatch({
        type: OPEN_MODAL,
        url: url
    });
};

export const closeModal = () => dispatch => {
    dispatch({
        type: CLOSE_MODAL,
        url: ''
    });
};
