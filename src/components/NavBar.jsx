import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LoginIcon from '@mui/icons-material/Login';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Popover from '@mui/material/Popover';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { useState } from 'react';









const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'lavender',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [popoverAnchorEl, setPopoverAnchorEl] = useState(null);
  const [selectedContinent, setSelectedContinent] = useState(null);

  const continents = ['África', 'América', 'Asia', 'Europa', 'Oceanía'];
  const countries = ['País 1', 'País 2', 'País 3'];
  const cities = ['Ciudad 1', 'Ciudad 2', 'Ciudad 3'];
  const handleDestinosClick = (event) => {
    setPopoverAnchorEl(event.currentTarget);
  };

  const handleContinentClick = (continent) => {
    setSelectedContinent(continent);
  };

  const handleClosePopover = () => {
    setPopoverAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (

    <AppBar className="bg-black">
      <Box className="bg-white text-black" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ width: 160, height: 100, overflow: 'hidden', marginRight: 12 }}>
            <img className="mb-4" src="./logoviaja.png" alt="Logo" style={{ width: '160px', height: '160px', objectFit: 'contain', marginTop: '-30px' }} />
          </Box>
          <Button color="inherit" onClick={handleDestinosClick}>
            <Typography sx={{ fontSize: '16px', fontFamily: 'Martel' }}>Destinos</Typography>

          </Button>
          <Popover className='mt-4 '
            open={Boolean(popoverAnchorEl)}
            anchorEl={popoverAnchorEl}
            onClose={handleClosePopover}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}


          >
            <Box className="rounded-2xl" sx={{ p: 2, display: 'flex', flexDirection: 'row', width: '80vw', height: '80vh', boxShadow: 4 }}>
              <Box className="rounded-2xl" sx={{ flexGrow: 1 }}>
                <Typography variant="h6">Continentes</Typography>
                <List>
                  {continents.map((continent) => (
                    <ListItem button key={continent} onClick={() => handleContinentClick(continent)}>
                      <ListItemText primary={continent} />
                    </ListItem>
                  ))}
                </List>
              </Box>
              <Box sx={{ flexGrow: 2 }}>
                <Typography variant="h6">Países</Typography>
                <List>
                  {countries.map((country) => (
                    <ListItem key={country}>
                      <ListItemText primary={country} />
                    </ListItem>
                  ))}
                </List>
                <Typography variant="h6">Ciudades</Typography>
                <List>
                  {cities.map((city) => (
                    <ListItem key={city}>
                      <ListItemText primary={city} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>
          </Popover>
          <Button color="inherit">
            <Typography sx={{ fontSize: '16px', fontFamily: 'Martel' }}>Planning</Typography>

          </Button>
          <Button color="inherit">
            <Typography sx={{ fontSize: '16px', fontFamily: 'Martel' }}>Inspírate</Typography>

          </Button>
        </Box>
        <Box className="text-xl" sx={{ display: 'flex', alignItems: 'center', marginRight: 16, fontSize: '20px' }}>
          <Button startIcon={<SearchIcon />} color="inherit">

            <Typography sx={{ fontSize: '16px', fontFamily: 'Martel' }}>Buscar</Typography>

          </Button>

          <Button startIcon={<FavoriteIcon />} color="inherit">
            <Typography sx={{ fontSize: '16px', fontFamily: 'Martel' }}>Favoritos</Typography>
          </Button>
          <Button startIcon={<LoginIcon />} color="inherit">
            <Typography sx={{ fontSize: '16px', fontFamily: 'Martel' }}>Sing Up</Typography>
          </Button>

        </Box>
      </Box>




    </AppBar>

  );
}
