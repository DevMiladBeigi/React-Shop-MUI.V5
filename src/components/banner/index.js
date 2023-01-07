import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import {
  BannerContainer,
  BannerContent,
  BannerDescriptions,
  BannerTitle,
} from "../../styles/banner";

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <BannerContainer>
      <BannerContent>
        <Typography variant="h6">My Shop</Typography>
        <BannerTitle variant="h2">New Bags</BannerTitle>
        <BannerDescriptions variant="subtitle">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available. It is also used
          to temporarily replace text in a process called greeking, which allows
          designers to consider the form of a webpage or publication, without
          the meaning of the text influencing the design.
        </BannerDescriptions>
      </BannerContent>
    </BannerContainer>
  );
}
