import  React,{ useState } from 'react';
import './contactForm.css'
import { theme } from '../../theme/theme';

import {Grid, TextField, Button, withStyles, Typography, CssBaseline} from "@mui/material";

const styles = {
    contactForm: {
        marginTop: 50,
        width: '60vh'
        }
  };
  
export const ContactForm = () => {

  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

    const values = {
        name: name,
        email: email,
        message: message,
        number: number
    }

    
    // Handle submit button
    const handleSubmit = async () => {
    
        const input = {
            name: name,
            email: email,
            message: message
        }

        try {
            await fetch("/contact",
                {
                    method: "POST",
                    body: JSON.stringify(input),
                    headers: 
                    {
                        "Content-Type": "application/json"
                    }

                }).then((response) => 
                    {console.log('response', response)});
        } catch (error) {
            console.error(error);
        }

        return false 
        }

        // Reset from after submiting
        // document.getElementById('contact-form').reset();
        // setValues({ userName: "", email: "", message: "" });
        // preventDefault();


        return (
            <div className={'container'} style={{backgroundColor: theme.palette.navBar.main, height:'100%', display:'flex'}}>
            <CssBaseline />
            <div  >
                                <Typography variant="h4" align="center" component="h1" gutterBottom>
                    {'Contact Form'.toUpperCase()}
                </Typography>
                <Grid item xs={8}>
                    <Grid item>
                        <form
                        action="https://formsubmit.co/craig2812@gmail.com" method="POST"
                        id="contact-form"
                        // className={classes.contactForm}
                        onSubmit={handleSubmit}
                        target="_blank"
                        >
                            <Grid item>
                                <TextField
                                fullWidth
                                required
                                id="name"
                                label="Name"
                                name="userName"
                                // className={classes.inputField}
                                onChange={(e) => setName(e.currentTarget.value)}
                                margin="normal"
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                fullWidth
                                required
                                id="email"
                                label="Email"
                                name="email"
                                // className={classes.inputField}
                                onChange={(e) => setEmail(e.currentTarget.value)}
                                margin="normal"
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                fullWidth
                                required
                                id="message"
                                label="Message"
                                name="message"
                                // className={classes.inputField}
                                onChange={(e) => setMessage(e.currentTarget.value)}
                                margin="normal"
                                multiline
                                // rowsMax="4"
                                />
                            </Grid>
                            <Grid container direction="row" spacing={2} style={{ marginTop: 20 }}  className={'buttons'}>
                            <Grid item >
                                <Button
                                type="reset"
                                variant="contained"
                                color="secondary"
                                //disabled={submitting || pristine}
                                >
                                RESET
                                </Button>
                            </Grid>
                            <Grid item >  
                                <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                >
                                Submit
                                </Button>
                            </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
                </div>
            </div> 
                      
        );
}