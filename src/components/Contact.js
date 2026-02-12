import React from 'react';
import { Box, IconButton } from '@mui/material';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const SocialMediaButtons = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, marginTop: '20px', marginBottom: '10px' }}>
            <IconButton
                component="a"
                href="https://www.linkedin.com/in/vaishnavi-iyer2002/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                    backgroundColor: 'white',
                    '&:hover': {
                        backgroundColor: 'lightblue',
                    },
                    color: 'blue',
                    borderRadius: '50%',
                    padding: 1,
                }}
            >
                <FaLinkedin style={{ fontSize: '1.5em' }} />
            </IconButton>

            <IconButton
                component="a"
                href="mailto:iyer94@purdue.edu"
                sx={{
                    backgroundColor: 'white',
                    '&:hover': {
                        backgroundColor: 'lightgreen',
                    },
                    color: 'green',
                    borderRadius: '50%',
                    padding: 1,
                }}
            >
                <MdEmail style={{ fontSize: '1.5em' }} />
            </IconButton>

            <IconButton
                component="a"
                href="https://github.com/VeaParz75"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                    backgroundColor: 'white',
                    '&:hover': {
                        backgroundColor: 'lightgray',
                    },
                    color: 'black',
                    borderRadius: '50%',
                    padding: 1,
                }}
            >
                <FaGithub style={{ fontSize: '1.5em' }} />
            </IconButton>
        </Box>
    );
};

export default SocialMediaButtons;