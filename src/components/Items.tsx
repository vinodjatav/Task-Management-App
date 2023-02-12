import * as React from 'react';
import { Stack, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';

interface ListItems {
  id: number,
  title: string,
  image: string,
  price: string,
}

interface propTypes {
  listItems: ListItems[],
}
export const Items = (props: propTypes) => {
  const [value, setValue] = React.useState<number | null>();
  return (
<>
    {
      props.listItems.map((item: any) => (
        <Card key={item.id} sx={{ maxWidth: "80%", height: "auto", width: "200rem" }}>
          <CardMedia
            component="img"
            alt={`${item.title}`}
            height="120"
            image={`${item.image}`}
          />
          <CardContent>
            <Typography gutterBottom fontSize="16px" fontWeight="bold" component="legend" textAlign="left">
              {`${item.title}`}
            </Typography>
            <Stack direction="row" gap="20px" justifyContent="space-between">
              <Rating
                name="simple-controlled"
                value={item.rating}
                size="small"
                max={4}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              <Typography fontWeight="bold">{`${item.price}`}</Typography>
            </Stack>
          </CardContent>
        </Card>
      ))
    }
    </>
  );
}
