import { Button } from '@mui/material';
import React, { useState, useEffect } from 'react';


const Contador = ({stock, initial, onAdd}) => {
const [contador, setContador] = useState(initial)

    return ( 
        <div
        style={{
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            
            <div>
                <Button 
                style={{
                    marginBottom: '.5rem',
                }}
                variant="contained" 
                color="error"
                disabled = {contador === 0}
                onClick={() => {
                    setContador(contador - 1)
                }}> 
                - 
                </Button>

                <Button 
                style={{
                    marginBottom: '.5rem',
                }}
                variant="outlained" 
                color="secondary"
                > 
                {contador} 
                </Button>

                <Button 
                style={{
                    marginBottom: '.5rem',
                }}
                variant="contained" 
                color="success"
                disabled = {contador === stock}
                onClick={() => {
                    setContador(contador + 1)
                }}> 
                + 
                </Button>
                
            </div>

            <Button
            style={{
                marginTop: '1rem',
            }} 
            variant="contained" 
            color="primary"
            onClick={() => {
                onAdd(`la cantidad de items seleccionada ha sido de ${contador}`);
            }}> 
            Comprar 
            </Button>

        </div>
    );
}

export default Contador;