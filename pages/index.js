import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Grid } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useState } from 'react';

export default function ActionAreaCard({movies}) {
  const movieCount = movies.length;
  let count = 0;

  return (
    <Grid container  rowSpacing={4}>
      {movies.map((movie) => {
        count++;
        return (<>
          <Grid item xs={12} display={"flex"} justifyContent={"center"} key={movie.id} >
            <Card sx={{ maxWidth: 300 , minHeight: 350}}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="160"
                  image={movie.image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" >
                    {movie.name}
                  </Typography>
                  <Typography gutterBottom variant="body1" component="div" display={"flex"} align={"center"} >
                    <AccessTimeIcon/> <Typography marginLeft={"1rem"}>{movie.time}</Typography>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {movie.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          {count%5==0 && count != movieCount && 
          <Grid item xs={12} display={"flex"} justifyContent={"center"} key={"ad"+count/5}>
            <Card sx={{ maxWidth: 300 , minHeight: 160}}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="160"
                  image={"https://res.cloudinary.com/corpjurist/image/upload/v1649122230/5310773_1_goeaym.png"}
                  alt="green iguana"
                />
              </CardActionArea>
            </Card>
          </Grid>
          }
          </>)
      })}
    </Grid>
    
    );
}

export async function getStaticProps(context){
  // console.log(context);
  const req = await fetch("https://d8507f31-e019-405e-b459-8b395e90efb4.mock.pstmn.io/movies");
  const data = await req.json();
  // console.log(data);
  return {
    props: { movies: data['movies'] }, // will be passed to the page component as props
  }
}
