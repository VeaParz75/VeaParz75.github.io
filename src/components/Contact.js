import React from 'react';
import { Container, Typography, List, ListItem, ListItemIcon, ListItemText, Divider, makeStyles } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
  },
  listItem: {
    alignItems: 'flex-start',
    padding: theme.spacing(2),
  },
}));

const Contacts = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.root}>
      <Typography variant="h2" gutterBottom>Contact Us</Typography>
      <List>
        <ListItem className={classes.listItem}>
          <ListItemIcon>
            <EmailIcon />
          </ListItemIcon>
          <ListItemText primary="Email" secondary="example@example.com" />
        </ListItem>
        <Divider />
        <ListItem className={classes.listItem}>
          <ListItemIcon>
            <PhoneIcon />
          </ListItemIcon>
          <ListItemText primary="Phone" secondary="+1234567890" />
        </ListItem>
        <Divider />
        <ListItem className={classes.listItem}>
          <ListItemIcon>
            <LocationOnIcon />
          </ListItemIcon>
          <ListItemText primary="Address" secondary="123 Main Street, City, Country" />
        </ListItem>
      </List>
    </Container>
  );
};

export default Contacts;
