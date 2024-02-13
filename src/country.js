import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));

export default function ResponsiveGrid({ countryData }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {countryData.map((item, index) => (
          <Grid item xs={2} sm={2} md={2} key={index}>
            <Item>
              {" "}
              <Card sx={{ maxWidth: 100, height: 120 }} key={item.name.common}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="80"
                    width="40"
                    image={item.flags.png}
                    alt={item.flags.alt}
                  />

                  <CardContent>
                    <Typography
                      gutterBottom
                      //   variant="h6"
                      component="div"
                      padding="20"
                      fontSize={12}
                      fontWeight={600}
                    >
                      {item.name.common}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
