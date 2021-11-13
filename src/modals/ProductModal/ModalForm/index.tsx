import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { ProductSchema } from 'Validations/ProductEditValidation';
import { addAdminProduct, update } from 'redux/reducers/adminProductsReducer';
import * as S from './style';

type ProductType = {
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
  activeProduct: ProductType;
  setActiveProduct: Function;
};

const ModalForm: React.FC<Props> = ({
  editModalIsOpen,
  addModalIsOpen,
  setEditModalOpen,
  setAddModalOpen,
  activeProduct,
  setActiveProduct,
}) => {
  const { t } = useTranslation(['Edit']);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(ProductSchema) });

  const addProduct = async (data: ProductType): Promise<void> => {
    try {
      setAddModalOpen(false);
      await dispatch(addAdminProduct({ ...data, image: 'https://i.pravatar.cc' }));
      toast.success(t('Added'), { hideProgressBar: true });
    } catch (e: any) {
      toast.error(e.message, { hideProgressBar: true });
    }
    reset();
  };

  const updateProduct = async (data: ProductType): Promise<any> => {
    const mixedData: ProductType = { ...activeProduct, ...data };
    try {
      setEditModalOpen(false);
      await dispatch(update(mixedData));
      toast.success(t('Changed'), { hideProgressBar: true });
    } catch (e: any) {
      toast.error(e.message, { hideProgressBar: true });
    }
    setActiveProduct({});
    reset();
  };

  return (
    <S.EditItemForm
      onSubmit={addModalIsOpen ? handleSubmit(addProduct) : handleSubmit(updateProduct)}
    >
      <S.EditItemHeader>{addModalIsOpen ? t('AddProduct') : t('ChangeProduct')}</S.EditItemHeader>

      <S.EditItemField htmlFor="title">{t('Title')}</S.EditItemField>
      <S.EditItemValue id="title" defaultValue={activeProduct.title} {...register('title')} />
      <S.ErrorMessage>{errors.title?.message}</S.ErrorMessage>

      <S.EditItemField htmlFor="description">{t('Description')}</S.EditItemField>
      <S.EditItemValue
        id="description"
        defaultValue={activeProduct.description}
        {...register('description')}
      />
      <S.ErrorMessage>{errors.description?.message}</S.ErrorMessage>

      <S.EditItemField htmlFor="price">{t('Price')}</S.EditItemField>
      <S.EditItemValue id="price" defaultValue={activeProduct.price} {...register('price')} />
      <S.ErrorMessage>{errors.price?.message}</S.ErrorMessage>

      <S.EditItemField htmlFor="category">{t('Category')}</S.EditItemField>
      <S.EditItemValue
        id="category"
        defaultValue={activeProduct.category}
        {...register('category')}
      />
      <S.ErrorMessage>{errors.category?.message}</S.ErrorMessage>

      <S.EditSubmiteButton type="submit">
        {addModalIsOpen ? t('Add') : t('Change')}
      </S.EditSubmiteButton>
    </S.EditItemForm>
  );
};

export default ModalForm;
