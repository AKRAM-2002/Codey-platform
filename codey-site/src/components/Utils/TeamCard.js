import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const StyledCard = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  width: 317.921,
  height: 378.81,
  padding: 16,
  alignItems: 'center',
  justifyContent: 'center',
  gap: 10,
  flexShrink: 0,
  borderRadius: 24,
  border: '1px solid #EAECF0',
  background: 'var(--white, #FFF)',
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
  marginBottom: 15,
});

const StyledCardMedia = styled(CardMedia)({
  height: 200,
  width: 280,
});

const NameTypography = styled(Typography)({
  fontFamily: 'Poppins',
  fontSize: 20,
  fontWeight: 500,
  color: '#000',
});

const RoleTypography = styled(Typography)({
  fontFamily: 'Poppins',
  fontSize: 16,
  fontWeight: 400,
  color: '#888',
});

const SocialMediaContainer = styled('div')({
  display: 'flex',
  gap: 10,
  marginTop: 10,
  marginLeft: 10,
});

const SocialIcon = styled('div')({
  width: 36,
  height: 36,
  padding: 10,
  borderRadius: 100,
  background: '#F2F4F7',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    background: '#E4E7EC',
  },
});

const TeamCard = ({ person, category }) => {
  return (
    <StyledCard>
      <StyledCardMedia
        component="img"
        image={person?.image}
        alt={person ? `${person.name} - ${person.role}` : category}
        title={person ? person.name : category}
      />
      <CardContent>
        <NameTypography gutterBottom variant="h5" component="h2">
          {person ? person.name : category}
        </NameTypography>
        {person && (
          <>
            <RoleTypography variant="body2" component="p" sx={{ mb: 1 }}>
              {person.role}
            </RoleTypography>
            <Typography 
              variant="body2" 
              color="text.secondary" 
              component="p"
              sx={{ mb: 2 }}
            >
              {person.text}
            </Typography>
            <SocialMediaContainer>
              <SocialIcon>
                <FaFacebook />
              </SocialIcon>
              <SocialIcon>
                <FaInstagram />
              </SocialIcon>
              <SocialIcon>
                <FaTwitter />
              </SocialIcon>
            </SocialMediaContainer>
          </>
        )}
      </CardContent>
    </StyledCard>
  );
};

export default TeamCard;