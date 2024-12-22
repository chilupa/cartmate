import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Paper,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { Box } from "@mui/system";
import React from "react";

const Coupon = () => {
  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label={
          <Box display="flex" alignItems="center" columnGap={1}>
            <Paper
              sx={{
                width: "fit-content",
                pl: 0.5,
                pr: 0.5,
                borderColor: red[600],
              }}
              variant="outlined"
            >
              <Typography color="error" variant="caption">
                10% off
              </Typography>
            </Paper>
            <Typography variant="caption" fontWeight={600} color="error">
              Limited time deal
            </Typography>
          </Box>
        }
      />
    </FormGroup>
  );
};

export default Coupon;
