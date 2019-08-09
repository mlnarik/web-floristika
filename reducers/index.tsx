import { OPEN_MODAL, CLOSE_MODAL } from '../actions';

export interface ModalState {
    type?: string;
    openModal: boolean;
    url: string;
}

export const modalReducer = (
    state = { isModalOpen: false, url: '' },
    action
) => {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                isModalOpen: true,
                url: action.url
            };
        case CLOSE_MODAL:
            return {
                isModalOpen: false,
                url: ''
            };
        default:
            return state;
    }
};
