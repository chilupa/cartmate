import React from "react";
import { useProducs } from "../../hooks/useProducts";
import {
  Box,
  CircularProgress,
  Grid2 as Grid,
  Paper,
  Typography,
} from "@mui/material";

import { useVariableValue } from "@devcycle/react-client-sdk";
import Coupon from "../../components/Coupon/Coupon";

const Products = () => {
  const { products, loading } = useProducs();

  const couponFlag = useVariableValue("coupon", false);

  console.log("couponFlag :>> ", couponFlag);

  if (loading) {
    return <CircularProgress size="sm" />;
  }
  return (
    <Box mt={10}>
      <Grid container spacing={2}>
        {products.map((item) => (
          <Grid item key={item.id} mt={2}>
            <Paper
              sx={{
                width: 300,
                height: "100%",
                p: 1,
              }}
            >
              <img
                style={{ width: 300, height: 200, objectFit: "contain" }}
                src={item.image}
                alt={item.title}
              />
              <Typography sx={{ fontWeight: 600 }} variant="subtitle1">
                {item.title}
              </Typography>

              <Typography
                variant="subtitle2"
                sx={{ flexGrow: 1, overflow: "clip" }}
              >
                {item?.description.substr(0, 200) + ""}
              </Typography>
              <Typography variant="h6" fontWeight={600}>
                ${item.price}
              </Typography>

              {couponFlag && <Coupon />}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
