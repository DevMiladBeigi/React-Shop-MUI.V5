import { Box, styled, Typography } from "@mui/material";
import { style } from "@mui/system";
import { Colors } from "../theme";

export const BannerContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  padding: "0px 0px",
  background: Colors.light_gray,
  [theme.breakpoints.down("sm")]: {
    flexDirection: "colum",
    alignItems: "center",
  },
}));

export const BannerContent = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: "420",
  padding: "30px",
}));

export const BannerTitle = styled(Typography)(({ theme }) => ({
  lineHeight: "1.5",
  fontSize: "72px",
  marginBottom: "20px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "42px",
  },
}));

export const BannerDescriptions = styled(Typography)(({ theme }) => ({
  lineHeight: "1.5",
  letterSpacing: "1.25",
  marginBottom: "3em",
  [theme.breakpoints.down("sm")]: {
    lineHeight: "1.15",
    letterSpacing: "1.15",
    marginBottom: "1.5em",
  },
}));
