import React from 'react';
import Modal, { Styles } from 'react-modal';

import ModalForm from './ModalForm';

const customStyles: Styles = {
  content: {
    pointerEvents: 'auto',
    top: '65px',
    overflow: 'unset',
    paddingBottom: '70px',
    height: '60%',
  },
  overlay: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    background: 'rgba(0, 0, 0, 0.3)',
  },
};

type ProductObject = {
  _id: number;
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  quantity: number;
  key: number;
};

type Props = {
  editModalIsOpen: boolean;
  addModalIsOpen: boolean;
  setEditModalOpen: Function;
  setAddModalOpen: Function;
  activeProduct: ProductObject;
  setActiveProduct: Function;
};

const ProductModal: React.FC<Props> = ({
  editModalIsOpen,
  addModalIsOpen,
  setEditModalOpen,
  setAddModalOpen,
  activeProduct,
  setActiveProduct,
}) => {
  const closeModal = (): void => {
    setEditModalOpen(false);
    setAddModalOpen(false);
    setActiveProduct({});
  };

  return (
    <Modal
      isOpen={editModalIsOpen || addModalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Modal"
      style={customStyles}
    >
      <ModalForm
        editModalIsOpen={editModalIsOpen}
        setEditModalOpen={setEditModalOpen}
        setAddModalOpen={setAddModalOpen}
        addModalIsOpen={addModalIsOpen}
        activeProduct={activeProduct}
        setActiveProduct={setActiveProduct}
      />
    </Modal>
  );
};

export default ProductModal;
