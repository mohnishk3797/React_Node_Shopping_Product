import React from 'react';
import Card from '@material-ui/core/Card';
import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
} from '@material-ui/core/';
import { MEDIA_URL } from '../../../redux/services';
import { ButtonInput } from '../button';
export function ProductCardAtom({
  classes,
  data,
  handleOpenEdit,
  deleteProduct,
  setEditValue,
}) {
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`${MEDIA_URL}${data.media}`}
          title={data.name}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {data.name}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            Price - ${data.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <ButtonInput
          type={'button'}
          fullWidth={false}
          color={'primary'}
          onClick={() => {
            setEditValue(data);
            handleOpenEdit(true);
          }}
          content={'Edit'}
          variant='outlined'
        />
        <ButtonInput
          type={'button'}
          fullWidth={false}
          color={'secondary'}
          content={'Delete'}
          variant='outlined'
          onClick={() => deleteProduct(data._id)}
        />
      </CardActions>
    </Card>
  );
}
