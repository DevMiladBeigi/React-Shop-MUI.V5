import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  BannerContainer,
  BannerContent,
  BannerDescriptions,
  BannerImage,
  BannerTitle,
} from "../../styles/banner";

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <BannerContainer>
      <BannerImage src="/images/banner/banner.png"/>
      <BannerContent>
        <Typography variant="h6">My Shop</Typography>
        <BannerTitle variant="h2">New Bags</BannerTitle>
        <BannerDescriptions variant="subtitle">
          In publishing and graphic design, Lorem ipsum is a placeholder text
        </BannerDescriptions>
      </BannerContent>
    </BannerContainer>
  );
}
