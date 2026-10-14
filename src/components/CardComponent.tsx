import { Box, Typography } from "@mui/material";

interface CardComponentProps {
  src: string;
  name: string;
}

export const CardComponent = ({ src, name }: CardComponentProps) => {
  return (
    <Box
      sx={{
        flex: "0 0 160px",
        width: 160,
        margin: '1rem'
      }}>
      <Box
        sx={{
          height: "10rem",
          width: "10rem",
          borderRadius: "0.5rem",
          overflow: "hidden",
        }}
      >
        <Box
          component='img'
          src={src}
          alt="Card"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </Box>
      <Typography sx={{ mt: 1, textAlign: "center" }}>
          {name}
        </Typography>
    </Box>
  );
};