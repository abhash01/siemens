import {
  Box,
  Button,
  IconButton,
  Collapse,
  useMediaQuery,
} from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import { useState } from "react";
import styles from "./Header.module.scss";

const SubNav = ({ scrolledHeight }) => {
  const isMobile = useMediaQuery("(max-width:786px)");
  const [openAccordion, setOpenAccordion] = useState(false);

  const toggleAccordion = () => {
    setOpenAccordion((prev) => !prev);
  };

  return (
    <>
      <Box className={styles.subNav} style={{ top: scrolledHeight }}>
        <span className={styles.section}>Active Integration</span>
        <Box className={styles.actions}>
          {!isMobile ? (
            <>
              <Button className={styles.productsBtn}>Products</Button>
              <Button className={styles.productsBtn}>Consulting</Button>
              <Button
                className={styles.contactBtn}
                variant="contained"
                disableElevation
              >
                Contact us
              </Button>
            </>
          ) : (
            <IconButton onClick={toggleAccordion}>
              {openAccordion ? (
                <ExpandLess htmlColor="var(--color-dark)" />
              ) : (
                <ExpandMore htmlColor="var(--color-dark)" />
              )}
            </IconButton>
          )}
        </Box>
      </Box>

      {isMobile && (
        <Collapse in={openAccordion}>
          <Box className={styles.mobileAccordion}>
            <Button fullWidth className={styles.productsBtn}>
              Products
            </Button>
            <Button fullWidth className={styles.productsBtn}>
              Consulting
            </Button>
            <Button
              fullWidth
              className={styles.contactBtn}
              variant="contained"
              disableElevation
            >
              Contact us
            </Button>
          </Box>
        </Collapse>
      )}
    </>
  );
};

export default SubNav;
