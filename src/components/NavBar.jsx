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
import  Button  from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LoginIcon from '@mui/icons-material/Login';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Popover from '@mui/material/Popover';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';






const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

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
  const [selectedContinent, setSelectedContinent] = React.useState(null);
const [popoverAnchorEl, setPopoverAnchorEl] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
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
    <Box sx={{ flexGrow: 1, width: '100%', height:'100%'  }}>
    <AppBar position="static" className='bg-black'>
     
          
           
          
          
          
            <Popover
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
  sx={{ width: '500px', height: '500px' }}
>
  </Popover>







  

          
  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
  <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <Box  sx={{ width: 160, height: 100, overflow: 'hidden' }}>
      <img className="mb-4" src="./logoviaja.png" alt="Logo" style={{ width: '160px', height: '160px', objectFit: 'contain', marginTop: '-30px' }} />
    </Box>
    <Button  color="inherit">Destinos</Button>
    <Button color="inherit">Planning</Button>
    <Button  color="inherit">Inspírate</Button>
  </Box>
  <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
    <Button startIcon={<FavoriteIcon />} color="inherit">Favoritos</Button>
    <Button startIcon={<LoginIcon />} color="inherit">Sign Up</Button>
  </Box>
</Box>
         
         
      
    
      </AppBar>
    </Box>
  );
}
