import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import AdbIcon from '@mui/icons-material/Adb';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea} from '@mui/material';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Link, useNavigate } from 'react-router-dom';
import { CarousalActive } from './CarousalActive';
import image1 from '../pictures/c1.jpg';
import image2 from '../pictures/c2.jpg';
import image3 from '../pictures/c3.jpg';
import image4 from '../pictures/c4.jpg';
import image5 from '../pictures/c5.jpg';
import image6 from '../pictures/c6.jpg';
import image7 from '../pictures/c7.jpg';
import image8 from '../pictures/c8.jpg';
import { Layout, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

  const [searchValue, setSearchValue] = useState('');
  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
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
  const handlePrivacyPolicyClick = () => {
    // Handle Privacy Policy button click, e.g., navigate to the Privacy Policy page
    navigate("/privacy-policy"); // You should replace "/privacy-policy" with your actual Privacy Policy page URL
  };

  const handleTermsConditionsClick = () => {
    // Handle Terms and Conditions button click, e.g., navigate to the Terms and Conditions page
    navigate("/terms-conditions"); // You should replace "/terms-conditions" with your actual Terms and Conditions page URL
  };
  const handlehomeClick = () => {
    // Handle Terms and Conditions button click, e.g., navigate to the Terms and Conditions page
    navigate("/dash"); // You should replace "/terms-conditions" with your actual Terms and Conditions page URL
  };
  const handleContactClick = () => {
    // Handle Terms and Conditions button click, e.g., navigate to the Terms and Conditions page
    navigate("/contact"); // You should replace "/terms-conditions" with your actual Terms and Conditions page URL
  };
  const handleFAQClick = () => {
    // Handle Terms and Conditions button click, e.g., navigate to the Terms and Conditions page
    navigate("/contact"); // You should replace "/terms-conditions" with your actual Terms and Conditions page URL
  };

  return (
    <>
      <div style={{ minHeight: '100vh' }}>
        <AppBar position="static" sx={{ backgroundColor: 'blue'}}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'serif',
                  fontWeight: 1000,
                  letterSpacing: '.3rem',
                  color: 'white',
                  textDecoration: 'none',
                  textTransform: 'capitalize',
                  transition: 'transform 0.2s', // Add a CSS transition for smooth scaling
                  '&:hover': {
                    transform: 'scale(1.1)', // Scale the button on hover
                    textDecoration: 'underline', // Scale the button on hover
                  },
                }}
              >
                PerfumePalette
              </Typography>

              <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
              <Box sx={{ display: 'flex', flexGrow: 1 }}>
                <Button
                  onClick={() => navigate("/home")}
                  sx={{ my: 2, color: 'white', textTransform: 'capitalize',
                  textTransform: 'capitalize',
                  transition: 'transform 0.2s', // Add a CSS transition for smooth scaling
                  '&:hover': {
                    transform: 'scale(1.1)', // Scale the button on hover
                    textDecoration: 'underline', // Scale the button on hover
                  }, }}
                >
                  Home
                </Button>
                <Button
                  onClick={() => navigate('/custom')}
                  sx={{ my: 2, color: 'white', textTransform: 'capitalize',
                  textTransform: 'capitalize',
                  transition: 'transform 0.2s', // Add a CSS transition for smooth scaling
                  '&:hover': {
                    transform: 'scale(1.1)', // Scale the button on hover
                    textDecoration: 'underline', // Scale the button on hover
                  }, }}
                >
                  Custom Perfume
                </Button>
                <Button
                  onClick={() => navigate('/about')}
                  sx={{ my: 2, color: 'white', textTransform: 'capitalize',
                  textTransform: 'capitalize',
                  transition: 'transform 0.2s', // Add a CSS transition for smooth scaling
                  '&:hover': {
                    transform: 'scale(1.1)', // Scale the button on hover
                    textDecoration: 'underline', // Scale the button on hover
                  }, }}
                >
                  About us
                </Button>
                <Button
                  onClick={() => navigate('/service')}
                  sx={{ my: 2, color: 'white', textTransform: 'capitalize',
                  textTransform: 'capitalize',
                  transition: 'transform 0.2s', // Add a CSS transition for smooth scaling
                  '&:hover': {
                    transform: 'scale(1.1)', // Scale the button on hover
                    textDecoration: 'underline', // Scale the button on hover
                  }, }}
                >
                  Services
                </Button>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <div className="searchIcon">
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                  value={searchValue}
                  onChange={handleSearchInputChange}
                  sx={{ color: 'white', marginLeft: '5px', borderRadius: '5px' }}
                />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, marginLeft: 'auto' }}>
                    <Avatar alt={FormData.email} src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <CarousalActive />
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
          <h3 style={{ margin: 'auto', color: 'rgb(234, 94, 34)' }}>Welcome to PerfumePalette - Craft Your Signature Scent</h3>
          <h4>Unlock the art of fragrance creation with PerfumePalette, your custom fragrance studio application.<br />
            Experience the joy of designing a scent that truly embodies you. Whether it's a personal statement or a unique gift,<br />
            our platform empowers you to curate scents that leave a lasting impression.</h4>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
          <h3 style={{ margin: 'auto', color: 'rgb(234, 94, 34)' }}>Featured Fragrance Collections</h3>
          <h4>Explore our curated collections, each designed to evoke distinct moods and experiences. <br />
            From vibrant florals to sultry orientals, find the perfect inspiration for your bespoke creation.<br /></h4>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
          <h3 style={{ margin: 'auto' }}>Start Crafting Your Signature Scent</h3>
          <Button onClick={() => navigate("")} sx={{
            my: 2, color: 'black', textTransform: 'capitalize', background: 'green',
            '&:hover': {
              background: 'lightpink',
            },
          }}>
            Custom Perfume
          </Button>
        </div>
        <div className='card' style={{ display: 'flex', gap: '5%', marginTop: '3%', marginBottom: '3%', marginLeft: '3%', marginRight: '3%' }}>
          <Card sx={{ maxWidth: 345,
          transition: 'transform 0.2s, box-shadow 0.2s', // Add transition for smooth hover effect
          '&:hover': {
            transform: 'scale(1.05)', // Increase the size of the card on hover
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add a shadow on hover
          },
           }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                src={image1}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Floral Aldehyde
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Floral Aldehyde is a Iconic fragrance known for its sophisticated blend of floral and aldehyde.
                  It exudes timeless elegance and luxury and femininity.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345,
          transition: 'transform 0.2s, box-shadow 0.2s', // Add transition for smooth hover effect
          '&:hover': {
            transform: 'scale(1.05)', // Increase the size of the card on hover
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add a shadow on hover
          }, }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                src={image2}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Dior J'adore
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  J'adore is a modern and opulent floral fragrance with a radiant and sensuous character.
                  This perfume embodies feminine grace , tuberose, orchid and allure.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345,
          transition: 'transform 0.2s, box-shadow 0.2s', // Add transition for smooth hover effect
          '&:hover': {
            transform: 'scale(1.05)', // Increase the size of the card on hover
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add a shadow on hover
          }, }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                src={image3}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Creed Aventus
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Aventus is a contemporary and masculine fragrance known for its fresh and fruity opening combined with a rich woody base
                  oakmoss,jasmine and ambergris
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345,
          transition: 'transform 0.2s, box-shadow 0.2s', // Add transition for smooth hover effect
          '&:hover': {
            transform: 'scale(1.05)', // Increase the size of the card on hover
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add a shadow on hover
          }, }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                src={image4}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Colonia
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Colonia is a classic Italian fragrance known for its timeless blend of citrus
                  refreshing burst of lemon, Bulgarian rose, sweet orange, bergamot and aromatic.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className='card' style={{ display: 'flex', gap: '5%', marginTop: '3%', marginBottom: '3%', marginLeft: '3%', marginRight: '3%' }}>
          <Card sx={{ maxWidth: 345,
          transition: 'transform 0.2s, box-shadow 0.2s', // Add transition for smooth hover effect
          '&:hover': {
            transform: 'scale(1.05)', // Increase the size of the card on hover
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add a shadow on hover
          }, }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                src={image5}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Byredo Gypsy Water
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Gypsy Water is a bohemian and woody fragrance known for its blend of earthy, citrus,
                  bergamot, lemon, pepper , amber and woody notes
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345,
          transition: 'transform 0.2s, box-shadow 0.2s', // Add transition for smooth hover effect
          '&:hover': {
            transform: 'scale(1.05)', // Increase the size of the card on hover
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add a shadow on hover
          }, }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                src={image6}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Gucci Bloom
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Gucci Bloom is a modern and rich white floral fragrance.
                  It features dominant notes of tuberose, jasmine, creating vitality and intoxicating scent.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345,
          transition: 'transform 0.2s, box-shadow 0.2s', // Add transition for smooth hover effect
          '&:hover': {
            transform: 'scale(1.05)', // Increase the size of the card on hover
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add a shadow on hover
          }, }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                src={image7}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Tom Ford Black Orchid
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Black Orchid is a luxurious and mysterious fragrance known for its opulent blend of dark florals and rich,
                  black truffle, bergamot and earthy notes.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345,
          transition: 'transform 0.2s, box-shadow 0.2s', // Add transition for smooth hover effect
          '&:hover': {
            transform: 'scale(1.05)', // Increase the size of the card on hover
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add a shadow on hover
          }, }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                src={image8}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Guerlain Shalimar
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Shalimar is a legendary oriental fragrance known for its timeless elegance, sensuality
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
      <Footer className="fixed-footer1">
              <Button
              type="link"
              onClick={handlePrivacyPolicyClick}
              style={{ color: 'white' }}
            >
              Privacy Policy
            </Button>
            <Button
              type="link"
              onClick={handleTermsConditionsClick}
              style={{ color: 'white' }}
            >
              Terms and Conditions
            </Button>
            <Button
              type="link"
              onClick={handleContactClick}
              style={{ color: 'white' }}
            >
              Contact Us
            </Button>
            <Button
              type="link"
              onClick={handleFAQClick}
              style={{ color: 'white' }}
            >
              FAQ
            </Button>
            </Footer>
    </>
  );
}
export default ResponsiveAppBar;