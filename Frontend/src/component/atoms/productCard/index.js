import React from 'react';
import Card from '@material-ui/core/Card';
import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
} from '@material-ui/core/';
import { ButtonInput } from '../button';
export function ProductCardAtom({ classes, data, handleOpenEdit }) {
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image='https://static.toiimg.com/photo/72975551.cms'
          title='Contemplative Reptile'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            NAME
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            Price
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <ButtonInput
          type={'button'}
          fullWidth={false}
          color={'primary'}
          onClick={() => handleOpenEdit(true)}
          content={'Edit'}
          variant='outlined'
        />
        <ButtonInput
          type={'button'}
          fullWidth={false}
          color={'secondary'}
          content={'Delete'}
          variant='outlined'
        />
      </CardActions>
    </Card>
  );
}
