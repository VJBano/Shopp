import {
    Badge,
  Box,
  Container,
  Grid,
  Hidden,
  IconButton,
  Menu,
  MenuItem,
  
} from "@mui/material";
import Search_Bar from "./search_bar";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container maxWidth={false} sx={{ backgroundColor: "black", paddingY: 1 }}>
      <Grid item container xs={12} justifyContent={"space-between"} sx={{}}>
        <Box>
          <Search_Bar />
        </Box>
        <Box>
          <Hidden lgDown>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartIcon sx={{color:"white"}} />
            </Badge>
          </Hidden>

          <Hidden lgUp>
            <IconButton
              sx={{ color: "white" }}
              edge="start"
              aria-label="menu"
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>

          <Hidden lgUp>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Item 1</MenuItem>
              <MenuItem onClick={handleClose}>Item 2</MenuItem>
              <MenuItem onClick={handleClose}>Item 3</MenuItem>
            </Menu>
          </Hidden>
        </Box>
      </Grid>
    </Container>
  );
};

export default Header;
