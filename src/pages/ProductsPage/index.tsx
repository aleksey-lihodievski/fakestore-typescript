import React, { useState, useEffect } from 'react';
import { AxiosResponse } from 'axios';
import { useLocation, useHistory } from 'react-router-dom';
import { useAsyncFn } from 'react-use';
import { useTranslation } from 'react-i18next';

import Header from 'components/Header';
import Item from 'components/Item';
import { getAllCategories, getFilteredProducts } from 'http-requests';
import * as S from './style';

type ProductObject = {
  _id?: number;
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
};

const ProductsPage: React.FC = () => {
  const { t } = useTranslation(['Main']);
  const history = useHistory();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const [categories, setCategories]: [string[], Function] = useState([]);

  const [sort, setSort] = useState(searchParams.get('sort') || 'asc');
  const [category, setCategory] = useState(searchParams.get('category') || 'all');

  const [items, fetchItems] = useAsyncFn(async (): Promise<ProductObject[] | never[]> => {
    try {
      const res: AxiosResponse<ProductObject[]> = await getFilteredProducts({
        category,
        sort,
      });

      return res.data;
    } catch (err) {
      console.log(err);
      return [];
    }
  }, [sort, category]);

  const fetchCategories = async (): Promise<any> => {
    try {
      const res = await getAllCategories();
      setCategories(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const changeCategory = (e: {
    target: {
      value: string;
    };
  }): void => {
    setCategory(e.target.value);
  };

  const changeSort = (e: {
    target: {
      value: string;
    };
  }): void => {
    setSort(e.target.value);
  };

  useEffect(() => {
    Promise.all([fetchCategories(), fetchItems()]);
    history.push(`/products?category=${category}&sort=${sort}`);
    fetchItems();
  }, []);

  useEffect(() => {
    history.push(`/products?category=${category}&sort=${sort}`);
    fetchItems();
  }, [sort, category]);

  return (
    <>
      <Header />
      <S.ProductsContainer>
        <S.SelectComponent onChange={changeCategory} value={category}>
          <option value="all">{t('Default')}</option>
          {categories
            ? categories.map((selectCategory) => (
                <option value={selectCategory} key={selectCategory}>
                  {selectCategory}
                </option>
              ))
            : null}
        </S.SelectComponent>
        <S.SortComponent name="sort" value={sort} onChange={changeSort}>
          <option value="asc">{t('Ascending')}</option>
          <option value="desc">{t('Descending')}</option>
        </S.SortComponent>
        <S.ItemsArea>
          {items.loading
            ? [t('Loading')].map((LoadingText) => (
                <S.InfoParagraph key={LoadingText}>{LoadingText}</S.InfoParagraph>
              ))
            : null}
          {items.error ? t('Error') : null}
          {items.value
            ? items.value.map((item) => <Item {...item} key={item.id} />)
            : // href={`./${item.id}`}
              null}
        </S.ItemsArea>
      </S.ProductsContainer>
    </>
  );
};

export default ProductsPage;
