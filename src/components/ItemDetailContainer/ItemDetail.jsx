import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ItemDetail({ prod }) {
    return (
    <>

    <Card sx={{ width: 300, height: 400 , margin: ".5rem", display:"inline-block" }}>
        <CardActionArea>
            <CardMedia
            component="img"
            height="140"
            image= {prod.image}
            alt="product image"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {prod.title}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    valor: ${prod.price}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    Categoría: {prod.category}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    Id: {prod.id}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>


    </>
    );
}