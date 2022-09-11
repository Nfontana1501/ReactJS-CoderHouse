import ItemCount from '../Counter/ItemCount';
import { useState } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function ItemDetail ({productDetail}) {

    const [contador, setContador] = useState(1);
    const [compra, setCompra] = useState(false);
    const {nombre, descripcion, precio, stock, img}= productDetail;
    const navegar = useNavigate();

    function onAdd (){
        alert(`Usted ha seleccionado ${contador} items del producto ${nombre}`)
        setCompra(true);
    }
    
    return (
        <div className="productContainer">
            <h2>Detalle de: {nombre}</h2>
            <img src={img} alt={nombre} style={{width:"25rem"}}/>
            <p>{descripcion}</p>
            <p>${precio}</p>
            {!compra ?
            <ItemCount stock={stock} initial={1} onAdd={onAdd} contador={contador} setContador={setContador}/> :
            <div>
                <Button 
                style={{
                    marginBottom: '.5rem',
                    marginRight: '.5rem',
                }}
                variant="contained" 
                color="primary"
                onClick={()=>{navegar("/")}}> 
                Seguir comprando
                </Button>
                <Button 
                style={{
                    marginBottom: '.5rem',
                    marginRight: '.5rem',
                }}
                variant="contained" 
                color="primary"
                onClick={()=>{navegar("/cart")}}> 
                Ir al carrito
                </Button>
            </div>
            }
        </div>
    );
}
