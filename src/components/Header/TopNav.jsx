import {
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Divider,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Search,
  ShoppingCart,
  PersonOutline,
} from "@mui/icons-material";
import styles from "./Header.module.scss";
import { useState } from "react";

const TopNav = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isMobile = useMediaQuery("(max-width:400px)");

  const handleToggle = () => {
    setDrawerOpen((prev) => !prev);
  };
  return (
    <Box className={styles.container}>
      <Box
        className={styles.topNav}
        style={{
          paddingInline: drawerOpen ? "0.25rem" : isMobile ? "0.25rem" : "2rem",
        }}
      >
        <Box display="flex" gap={1} justifyContent="center" alignItems="center">
          <Box className={styles.hamburger}>
            <IconButton onClick={handleToggle}>
              {drawerOpen ? (
                <CloseIcon htmlColor="white" />
              ) : (
                <MenuIcon htmlColor="white" />
              )}
            </IconButton>
          </Box>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              backgroundColor: "var(--color-coral-interactive)",
              width: "1px",
              height: "24px",
              alignSelf: "center",
              marginRight: "5px",
            }}
            className={styles.hamburger}
          />
          <Box className={styles.logo}></Box>
        </Box>
        <Box className={styles.icons}>
          <IconButton>
            <Search htmlColor="var( --color-primary-light)" />
          </IconButton>
          <Typography className={styles.lang}>EN</Typography>
          <IconButton>
            <ShoppingCart
              variant="outlined"
              htmlColor="var( --color-primary-light)"
            />
          </IconButton>
          <IconButton>
            <PersonOutline htmlColor="var( --color-primary-light)" />
            <Typography className={styles.login} color="white">
              Log in
            </Typography>
          </IconButton>
        </Box>
      </Box>
      <Box className={styles.menu}>
        <span className={styles.active}>Digital Industries Software</span>
        <span>Software & products</span>
        <span>Solutions & services</span>
        <span>Industries</span>
        <span>Training & support</span>
      </Box>

      {/* Drawer for mobile menu */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleToggle}
        PaperProps={{
          sx: {
            width: "100%",
            height: "100%",
            backgroundColor: "var(--color-interactive-coral-8-db)",
            color: "var(--color-primary-light)",
            marginTop: "66px",
          },
        }}
      >
        <List>
          <ListItem button>
            <ListItemText
              primary="Digital Industries Software"
              className={styles.menuItem}
            />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Software & products" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Solutions & services" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Industries" />
          </ListItem>
          <ListItem button>
            <ListItemText
              primary="Training & support"
              className={styles.menuItemLast}
            />
          </ListItem>
          <ListItem button>
            <ListItemText primary="How to buy" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Buying with Siemens" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Buy online" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Partners" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Academics" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Renewals" />
          </ListItem>
          <ListItem button>
            <ListItemText
              primary="Refund Policy"
              className={styles.menuItemLast}
            />
          </ListItem>
          <ListItem button>
            <ListItemText primary="QUICK LINKS" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Blogs" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Case studies" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Tecnology glossary" />
          </ListItem>
          <ListItem button>
            <ListItemText
              primary="Refund Policy"
              className={styles.menuItemLast}
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              primary="Choose your language"
              className={styles.menuItemNoBorder}
            />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default TopNav;
