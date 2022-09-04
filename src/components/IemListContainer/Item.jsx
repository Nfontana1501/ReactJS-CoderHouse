import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid, CardActions, Button } from '@mui/material';
import { Container } from '@mui/system';

export default function Item({id, nombre, valor}) {

    return (
    <>

    <Card sx={{ maxWidth: 345, margin: ".5rem", display:"inline-block" }}>
        <CardActionArea>
            <CardMedia
            component="img"
            height="140"
            image="https://img.redbull.com/images/c_fill,w_1200,h_630,g_auto,f_auto,q_auto/redbullcom/2015/04/04/1331715137394_2/marcel-hirscher-nieve-colores-making-of"
            alt="ski"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Nombre: {nombre}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
                valor: ${valor}
            </Typography>
            <Typography variant="body1" color="text.secondary">
                Id: {id}
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>


    </>


    
    );
}