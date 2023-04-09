import React from 'react';
import { AlbumListContainer } from 'modules';
import { Box } from '@mui/material';

import { albumWithImageWrapper, albumContainer } from '../style';

export const AlbumList = () => {
  return (
    <>
      <Box sx={albumWithImageWrapper}>
        <Box sx={albumContainer}>
            <AlbumListContainer />
        </Box>
      </Box>
    </>
  );
};