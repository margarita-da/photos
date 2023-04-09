import React from 'react';
import { ChangePasswordContainer } from 'modules';
import { Box } from '@mui/material';

import { loginWithImageWrapper, loginContainer } from '../style';

export const ChangePassword = () => {
  return (
    <>
      <Box sx={loginWithImageWrapper}>
        <Box sx={loginContainer}>
          <ChangePasswordContainer />
        </Box>
      </Box>
    </>
  );
};
