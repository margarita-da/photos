import React, { FC } from 'react';
import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  Button,
  CardActions,
} from '@mui/material';

type Props = {
  title: string;
  url: string;
  thumbnailUrl: string;
};

export const CardPhoto: FC<Props> = (props) => {
  const { title, url, thumbnailUrl } = props;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={thumbnailUrl} title={title} />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Share</Button>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  );
};
