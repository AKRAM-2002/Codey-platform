import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import Divider from '@mui/material/Divider';
import ScheduleIcon from '@mui/icons-material/Schedule';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

// Styled components using MUI v5 syntax
const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 360,
  marginBottom: theme.spacing(2),
  boxShadow:
    "0px 14px 80px rgba(59, 79, 123, 0.1), 0px 10px 50px rgba(59, 79, 123, 0.4)",
}));

const StyledMedia = styled(CardMedia)({
  height: 210,
});

const CategoryContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  color: theme.palette.grey[500],
}));

const RatingContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  color: "#FFFF00",
});

const CourseInfoContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
});

const TutorInfoContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '30px',
});

const ButtonContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: '110px',
});

const StyledButton = styled(Button)({
  borderRadius: '25px',
  backgroundColor: '#1FD891',
  '&:hover': {
    backgroundColor: '#1abc7f',
  },
});

const Course = ({ courseData }) => {
  const {
    category,
    rating,
    title,
    schedule,
    numberOfCourses,
    tutorImageSrc,
    tutorName,
    coursePrice,
  } = courseData;

  return (
    <StyledCard>
      <CardActionArea>
        <StyledMedia
          component="img"
          alt="Course"
          image={tutorImageSrc}
          title="Course Image"
        />
        <CardContent>
          <CategoryContainer>
            <Typography variant="body2">{category}</Typography>
            <RatingContainer>
              {Array.from({ length: rating }).map((_, index) => (
                <StarIcon key={index} />
              ))}
            </RatingContainer>
          </CategoryContainer>
          
          <Typography variant="h5" sx={{ mt: 2 }}>
            {title}
          </Typography>
          
          <Divider sx={{ my: 2 }} />
          
          <CourseInfoContainer>
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <ScheduleIcon /> {schedule}
            </Typography>
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <VideoLibraryIcon /> {numberOfCourses} courses
            </Typography>
          </CourseInfoContainer>
          
          <TutorInfoContainer>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: 30, height: 30, borderRadius: '50%', overflow: 'hidden' }}>
                <img 
                  src={tutorImageSrc} 
                  alt="Tutor" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
              <Typography variant="body2" color="text.secondary">
                {tutorName}
              </Typography>
            </div>
            <Typography variant="body2" color="text.secondary">
              {coursePrice}
            </Typography>
          </TutorInfoContainer>
        </CardContent>
      </CardActionArea>
      
      <CardActions>
        <ButtonContainer>
          <StyledButton variant="contained">
            LEARN MORE
          </StyledButton>
        </ButtonContainer>
      </CardActions>
    </StyledCard>
  );
};

export default Course;