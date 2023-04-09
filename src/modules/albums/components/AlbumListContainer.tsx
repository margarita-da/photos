import React, { ChangeEvent, FC, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useAppDispatch } from 'core/hooks/redux';
import { useSelector } from 'react-redux';
import { Pagination } from 'shared';
import { getPaginationCount } from 'utils';

import { getListAlbums } from '../store/actions';
import { getListAlbum } from '../store/selectors';
import { PAGE_OPTIONS } from '../consts';
import { CardPhoto } from './CardPhoto';

export const AlbumListContainer: FC = () => {
  const ListAlbums = useSelector(getListAlbum);
  const [page, setPage] = React.useState(1);
  const count = getPaginationCount(
    PAGE_OPTIONS.totalCount,
    PAGE_OPTIONS.pageSize,
  );
  const dispatch = useAppDispatch();

  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
    dispatch(
      getListAlbums({
        pageNumber: PAGE_OPTIONS.pageSize * (value - 1),
        pageSize: PAGE_OPTIONS.pageSize,
      }),
    );
  };

  useEffect(() => {
    dispatch(
      getListAlbums({
        pageNumber: 0,
        pageSize: PAGE_OPTIONS.pageSize,
      }),
    );
  }, []);

  return (
    <>
      <Typography variant='h3' mb={'20px'}>
        {'Альбомы'}
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridGap: '20px',
        }}
      >
        {ListAlbums?.map((album: any) => (
          <CardPhoto
            key={album.thumbnailUrl}
            title={album.title}
            url={album.url}
            thumbnailUrl={album.thumbnailUrl}
          />
        ))}
      </Box>
      <Box
        sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}
      >
        {ListAlbums && (
          <Pagination onChange={handleChange} count={count} page={page} />
        )}{' '}
      </Box>
    </>
  );
};
