import React, { FC, ChangeEvent } from 'react';
import { Pagination as MuiPagination } from '@mui/material';

type Props = {
  onChange: (event: ChangeEvent<unknown>, value: number) => void;
  /** Кол-во страниц для пагинации */
  count?: number;
  /** Текущая страница */
  page: number;
};

/**
 * Пагинация для таблиц
 * @param props пропсы компонента
 * @returns компонент пагинации
 */
export const Pagination: FC<Props> = (props) => {
  const { onChange, count, page } = props;
  return <MuiPagination onChange={onChange} count={count} page={page} />;
};
