import  React,{ useState } from 'react';
import { theme } from '../../theme/theme';
import '../page.css'

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
            <div className={'page-container'} >
            <CssBaseline />
            <div className='contact-container'>
                                <Typography variant="h4" align="center" component="h1" gutterBottom>
                    {'Contact Form'.toUpperCase()}
                </Typography>
                <Grid item xs={8}>
                    <Grid item>
                        <form
                        action="https://formsubmit.co/craig2812@gmail.com" method="POST"
                        id="contact-form"
                        onSubmit={handleSubmit}
                        target="_blank"
                        >
                            <Grid item width={"50%"} >
                                <TextField
                                required
                                fullWidth
                                id="name"
                                label="Name"
                                name="userName"
                                onChange={(e) => setName(e.currentTarget.value)}
                                margin="normal"
                                />
                            </Grid>
                            <Grid item width={"50%"} >
                                <TextField
                                fullWidth
                                required
                                id="email"
                                label="Email"
                                name="email"
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
                                onChange={(e) => setMessage(e.currentTarget.value)}
                                margin="normal"
                                multiline
                                minRows={'3'}
                                maxRows={'8'}
                                />
                            </Grid>
                            <Grid container  spacing={2} style={{ marginTop: 20, marginBottom: 10 }}  className={'buttons'} display='flex' flexDirection={'row'} justifyContent='center'>
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