import React from 'react';
import { RegistrationContainer } from 'modules';
import { Box } from '@mui/material';

import { loginWithImageWrapper, loginContainer } from '../style';

export const Registration = () => {
  return (
    <>
      <Box sx={loginWithImageWrapper}>
        <Box sx={loginContainer}>
          <RegistrationContainer />
        </Box>
      </Box>
    </>
  );
};
