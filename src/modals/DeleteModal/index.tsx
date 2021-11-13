import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Modal, { Styles } from 'react-modal';
import { toast } from 'react-toastify';

import { deleteAdminProduct } from 'redux/reducers/adminProductsReducer';
import * as S from './style';

const customDelete: Styles = {
  content: {
    top: '50%',
    left: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    maxHeight: '20vh',
    width: '80%',
    maxWidth: '300px',
    transform: 'translate(-50%, -50%)',
    overflow: 'unset',
    padding: '20px 10px',
  },
  overlay: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.3)',
  },
};

type Props = {
  deleteModalIsOpen: boolean;
  setDeleteModalOpen: Function;
  idToDelete: number;
};

const DeleteModal: React.FC<Props> = ({ deleteModalIsOpen, setDeleteModalOpen, idToDelete }) => {
  const { t } = useTranslation(['Edit']);

  const dispatch = useDispatch();

  const deleteItem = async (): Promise<void> => {
    try {
      setDeleteModalOpen(false);
      await dispatch(deleteAdminProduct({ id: idToDelete }));
      toast.success(t('Deleted'), { hideProgressBar: true });
    } catch (e: any) {
      toast.error(e.message, { hideProgressBar: true });
    }
  };

  return (
    <Modal
      isOpen={deleteModalIsOpen}
      onRequestClose={() => {
        setDeleteModalOpen(false);
      }}
      contentLabel="Modal"
      style={customDelete}
    >
      <S.EditDeleteHeader>{t('AreYouSure')}</S.EditDeleteHeader>
      <S.EditSubmiteButton onClick={deleteItem}>{t('Yes')}</S.EditSubmiteButton>
    </Modal>
  );
};

export default DeleteModal;
