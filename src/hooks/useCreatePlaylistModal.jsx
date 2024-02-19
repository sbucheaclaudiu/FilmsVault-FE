import { create } from "zustand";

const useCreatePlaylistModal = create ((set) => ({
    isOpen: false,
    onOpen: () => set( { isOpen: true }),
    onClose: () => set( { isOpen: false }),
}));

export default useCreatePlaylistModal;