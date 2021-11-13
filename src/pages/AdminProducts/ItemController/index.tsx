import React from 'react';
import { useTranslation } from 'react-i18next';

import * as S from './style';

type ProductObject = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  quantity?: number;
  key?: number;
};

type Props = {
  setEditModalOpen: Function;
  setDeleteModalOpen: Function;
  setIdToDelete: Function;
  productInfo: ProductObject;
  setActiveProduct: Function;
};

const ItemController: React.FC<Props> = ({
  setEditModalOpen,
  setDeleteModalOpen,
  setIdToDelete,
  productInfo,
  setActiveProduct,
}) => {
  const { t } = useTranslation(['Edit']);
  const { id, image, title } = productInfo;

  const editItem = (): void => {
    setActiveProduct(productInfo);
    setEditModalOpen(true);
  };

  const handleOpenDelete = (): void => {
    setIdToDelete(id);
    setDeleteModalOpen(true);
  };

  return (
    <S.EditItem>
      <S.EditItemImage src={image} alt={`cart img${id}`} />
      <S.EditItemName>{title}</S.EditItemName>
      <S.EditItemControls>
        <S.EditItemButton onClick={editItem}>{t('Edit')}</S.EditItemButton>
        <S.EditItemButton onClick={handleOpenDelete}>{t('Delete')}</S.EditItemButton>
      </S.EditItemControls>
    </S.EditItem>
  );
};

export default ItemController;
