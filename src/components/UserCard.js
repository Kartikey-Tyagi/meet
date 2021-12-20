import React from 'react'
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import ShareIcon from '@mui/icons-material/Share';

function UserExperience({ exp }) {
    return (
        <>
            <Typography
                variant='div'
                component='div'
                my="0.5em"
                marginLeft='2em'
            >
                <Typography
                    variant='p'
                    component='p'
                    fontWeight='bold'
                    fontSize='large'
                    gutterBottom
                >
                    {exp.user_post}
                </Typography>
                <Typography
                    variant='p'
                    component='p'
                    gutterBottom
                >
                    {exp.company_name}
                </Typography>
                <Typography
                    variant='span'
                    component='span'
                    color='gray'
                    gutterBottom
                >
                    {exp.company_starting_date} - {exp.company_ending_date}
                </Typography>
                <Typography
                    variant='p'
                    component='p'
                    my='0.4em'
                    fontSize="small"
                >
                    {exp.role_discription}
                </Typography>
            </Typography>
        </>
    )
}

function UserEducation({ education, classes }) {
    return (
        <>
            <Typography
                variant='div'
                component='div'
                className={classes.cardTypo}
                gutterBottom

            >
                <SchoolIcon color='primary' />
                <Typography
                    variant="div"
                    component="div"
                    color="primary"
                    fontWeight="bold"
                    marginX="10px"

                >
                    EDUCATION
                </Typography>
            </Typography>
            <Typography
                variant='div'
                component='div'
                className={`${classes.cardTypo} ${classes.fd_column}`}
                marginLeft='2em'
            >
                <Typography
                    variant='p'
                    component='p'
                    fontWeight='bold'
                    fontSize='large'
                    gutterBottom
                >
                    {education.course_type}-{education.course_name}
                </Typography>
                <Typography
                    variant='p'
                    component='p'
                    fontSize='small'
                >
                    {education.user_college} | {education.user_passing_year}
                </Typography>

            </Typography>
        </>
    )
}

export default function UserCard({ user, classes }) {
    return (
        <>
            <Card
                className={classes.userCard}
            >
                <CardMedia
                    component="img"
                    className={classes.cardMedia}
                    image={user.user_image_url}
                    alt="user profile"
                />
                <CardContent className={classes.cardContent} >
                    <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        className={classes.cardTypo}
                        my="2em"
                    >
                        {user.jobseeker_name}
                        <Typography
                            variant="h5"
                            component="span"
                            color="gray"
                            marginX="10px"
                        >
                            |
                        </Typography>
                        <LocationOnIcon fontSize='small' color='primary' />
                        <Typography
                            variant='p'
                            component='span'
                            fontSize='small'
                        >
                            {user.area}, {user.city}

                        </Typography>
                    </Typography>
                    <Typography
                        gutterBottom
                        variant="div"
                        component="div"
                        className={classes.cardTypo}
                    >
                        <WorkIcon color='primary' />
                        <Typography
                            variant="div"
                            component="div"
                            color="primary"
                            fontWeight="bold"
                            marginX="10px"
                        >
                            EXPERIENCE
                        </Typography>
                        <Typography
                            variant='span'
                            component='span'
                            sx={{ backgroundColor: "#5BC2A8", color: "white", borderRadius: "4px" }}
                            padding="3px"
                            fontSize="small"
                        >
                            {(user.total_months_exp / 12).toFixed(1)} yrs Exp
                        </Typography>
                    </Typography>
                    <Typography
                        gutterBottom
                        variant="div"
                        component="div"
                        className={`${classes.cardTypo} ${classes.fd_column}`}
                    >
                        {user.user_experiences.map((exp, id) => (
                            <UserExperience key={id} exp={exp} />
                        ))}
                    </Typography>
                    <Typography
                        gutterBottom
                        variant="div"
                        component="div"
                        className={`${classes.cardTypo} ${classes.fd_column}`}
                    >
                        {user.user_qualifications.map((education, id) => (
                            <UserEducation key={id} education={education} classes={classes} />
                        ))}
                    </Typography>
                </CardContent>
            </Card>
            <Button variant="outlined" startIcon={<ShareIcon />} color='secondary' className={classes.shareBtn} >
                Share
            </Button>

        </>
    )
}
