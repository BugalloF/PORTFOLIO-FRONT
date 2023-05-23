import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function SoftSkillsCard({title,description,img}) {
  return (
    <Card sx={{  maxWidth: 350,
      maxHeight: 400,
      marginRight: 5,
      marginBottom: 5,
      backgroundColor:'white',
      opacity:0.2,
      transition: 'opacity 0.5s', // Agrega una transición suave para la propiedad 'opacity'
      '&:hover': {
        opacity: 0.75, // Cambia la opacidad al hacer hover
        transform:'scale(1.1)',
        boxShadow:'4px 7px 4px 7px rgba(255, 255, 255, 0.3)',
 
      }, }}>
      <CardMedia
        sx={{ 
          marginTop:2,
          height: 90,
          width: 90,
          marginLeft:2

        }}
        image={img}
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" textAlign={'left'}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign={'left'}>
            {description}
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}