import React from 'react';
import { AuthorizationContainer } from 'modules';
import { Box } from '@mui/material';

import { loginWithImageWrapper, loginContainer } from '../style';

export const Auth = () => {
  return (
    <>
      <Box sx={loginWithImageWrapper}>
        <Box sx={loginContainer}>
          <AuthorizationContainer />
        </Box>
      </Box>
    </>
  );
};
