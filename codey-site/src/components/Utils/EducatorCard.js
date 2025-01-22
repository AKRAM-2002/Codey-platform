import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

// Styled components using MUI v5 syntax
const StyledCard = styled(Card)({
  display: 'flex',
  width: 317.921,
  height: 378.81,
  padding: 16,
  alignItems: 'center',
  gap: 10,
  flexShrink: 0,
  borderRadius: 24,
  background: 'var(--white, #FFF)',
  boxShadow: '0px 3px 12px 0px rgba(75, 75, 75, 0.08)',
  marginBottom: 15,
});

const StyledCardMedia = styled(CardMedia)({
  height: 140,
});

const NameTypography = styled(Typography)({
  fontFamily: 'Poppins',
  fontSize: 20,
  fontWeight: 500,
  color: '#000',
});

const OccupationTypography = styled(Typography)({
  fontFamily: 'Poppins',
  fontSize: 16,
  fontWeight: 400,
  color: '#888',
});

const EducatorCard = ({ imageSrc, name, occupation }) => {
  return (
    <StyledCard>
      <StyledCardMedia
        component="img"
        image={imageSrc}
        title={name}
        alt={`${name} - ${occupation}`}
      />
      <CardContent>
        <NameTypography gutterBottom variant="h5" component="h2">
          {name}
        </NameTypography>
        <OccupationTypography variant="body2" component="p">
          {occupation}
        </OccupationTypography>
      </CardContent>
    </StyledCard>
  );
};

export default EducatorCard;