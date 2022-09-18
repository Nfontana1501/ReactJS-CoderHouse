import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';


const pages = [{enlace:'/category/rider', nombre:'Pases Rider'}, {enlace:'/category/peaton', nombre:'Pases peatón'}, {enlace:'/category/rental', nombre:'Rental'}];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function NavBar () {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 3 }} />
            <NavLink to='/' className="links">
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 800,
                    letterSpacing: '.15rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    marginRight: 3,
                    }}
                >
                    CERRO PATAGONIA
                </Typography> 
            </NavLink>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                >
                <MenuIcon />
                </IconButton>
                <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: 'block', md: 'none' },
                }}
                >
                {pages.map((page) => (
                    <MenuItem key={page.nombre} onClick={handleCloseNavMenu}>
                        <NavLink className="links-xs" to={page.enlace}>{page.nombre}</NavLink>
                    </MenuItem>
                ))}
                </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <NavLink to='/' className="links">
            <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                }}
            >
                CERRO PATAGONIA
            </Typography>
            </NavLink>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
                    <MenuItem key={page.nombre} onClick={handleCloseNavMenu}>
                        <NavLink className="links" to={page.enlace}>{page.nombre}</NavLink>
                    </MenuItem>
                ))}
            </Box>

            <NavLink to='/cart' className="links">
                <CartWidget />
            </NavLink>

            </Toolbar>
        </Container>
        </AppBar>
    );
};
