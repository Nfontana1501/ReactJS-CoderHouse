import { Button } from '@mui/material';
import React from 'react';

const Contador = ({stock, contador, setContador, onAdd}) => {

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
            color="secondary"
            onClick={() => {
                onAdd();
            }}> 
            Agregar al carrito
            </Button>

        </div>
    );
}

export default Contador;