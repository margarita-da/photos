import React from 'react';
import { RecoveryPasswordContainer } from 'modules';
import { Box } from '@mui/material';

import { loginWithImageWrapper, loginContainer } from '../style';

export const RecoveryPassword = () => {
  return (
    <>
      <Box sx={loginWithImageWrapper}>
        <Box sx={loginContainer}>
          <RecoveryPasswordContainer />
        </Box>
      </Box>
    </>
  );
};
