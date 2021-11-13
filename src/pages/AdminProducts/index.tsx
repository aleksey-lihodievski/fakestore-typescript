import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import ItemController from 'pages/AdminProducts/ItemController';
import Header from 'components/Header';
import { setAdminProducts } from 'redux/reducers/adminProductsReducer';
import { getAdminProducts } from 'redux/selectors';
import ProductModal from 'modals/ProductModal';
import DeleteModal from 'modals/DeleteModal';
import * as S from './style';

const AdminProducts: React.FC = () => {
  const { t } = useTranslation(['Edit']);
  const dispatch = useDispatch();
  const products = useSelector(getAdminProducts);

  const [editModalIsOpen, setEditModalOpen] = useState(false);
  const [addModalIsOpen, setAddModalOpen] = useState(false);
  const [deleteModalIsOpen, setDeleteModalOpen] = useState(false);
  const [activeProduct, setActiveProduct]: Array<any> = useState({});
  const [idToDelete, setIdToDelete] = useState(0);

  useEffect(() => {
    dispatch(setAdminProducts());
  }, []);

  return (
    <>
      <Header />
      <S.EditContainer>
        <S.AdminHeader>{t('AdminPanel')}</S.AdminHeader>
        {products.length
          ? products.map((product) => (
              <ItemController
                key={product.id}
                productInfo={product}
                setActiveProduct={setActiveProduct}
                setIdToDelete={setIdToDelete}
                setEditModalOpen={setEditModalOpen}
                setDeleteModalOpen={setDeleteModalOpen}
              />
            ))
          : null}
        <ProductModal
          addModalIsOpen={addModalIsOpen}
          setAddModalOpen={setAddModalOpen}
          editModalIsOpen={editModalIsOpen}
          setEditModalOpen={setEditModalOpen}
          activeProduct={activeProduct}
          setActiveProduct={setActiveProduct}
        />
        <DeleteModal
          deleteModalIsOpen={deleteModalIsOpen}
          setDeleteModalOpen={setDeleteModalOpen}
          idToDelete={idToDelete}
        />
        <S.EditAddButton onClick={() => setAddModalOpen(true)}>+</S.EditAddButton>
      </S.EditContainer>
    </>
  );
};

export default AdminProducts;
