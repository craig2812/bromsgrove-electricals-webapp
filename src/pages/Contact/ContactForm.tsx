import React, { useState } from 'react';
import { theme } from '../../theme/theme';
import '../page.css'

import { Grid, TextField, Button, Typography, ThemeProvider } from "@mui/material";

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
    
    const isNumberValid = (number: string): boolean => {
        const contactNumberRegex = /^[0-9\s]*$/;
        const trimmedNumber = number.replace(/\s+/g, "").trim(); 
        return (contactNumberRegex.test(trimmedNumber) && trimmedNumber.length == 11) || trimmedNumber.length == 0 }
  

 const isEmailValid = (email: string): boolean => {
            const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
            return emailRegex.test(email) || email.length < 1;
          };
    const checkValues = () => {
       
    // const re =  new RegExp('/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g')
     return values.name.length > 1 && values.message.length > 2 && isEmailValid(values.email) && isNumberValid(values.number)

}

    // Handle submit button
    const handleSubmit = async () => {

        const input = {
            name: name,
            email: email,
            message: message,
            number: number
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

                }).then((response) => { console.log('response', response) });
        } catch (error) {
            console.error(error);
        }

        return false
    }

    return (
        <ThemeProvider theme={theme}>
            <div className={'page-container'} >
                <div className='contact-container' style={{ backgroundColor: theme.palette.primary.contrastText, borderColor: theme.palette.primary.main, color: theme.palette.primary.main }}>
                    <Typography variant="h4" align="center" component="h4" gutterBottom>
                        {'Contact Form'}
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
                                        variant="standard"
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
                                        variant="standard"
                                        error={!isEmailValid(values.email)}
                                        helperText= {!isEmailValid(values.email) ? 'Please enter a valid email' : null}
                                    />
                                </Grid>
                                <Grid item width={"50%"} >                                
                                <TextField
                                fullWidth
                                    id="number"
                                    label="Contact Number"
                                    name="number"
                                    onChange={(e) => setNumber(e.currentTarget.value)}
                                    margin="normal"
                                    variant="standard"
                                    error={!isNumberValid(values.number)}
                                    helperText= {!isNumberValid(values.number) ? 'Please enter a valid number, or leave blank' : null}
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
                                <Grid container spacing={2} style={{ marginTop: 20, marginBottom: 10 }} className={'buttons'} display='flex' flexDirection={'row'} justifyContent='center'>
                                    <Grid item >
                                        <Button
                                            type="reset"
                                            variant="contained"
                                            color="success"
                                        //disabled={submitting || pristine}
                                        >
                                            RESET
                                        </Button>
                                    </Grid>
                                    <Grid item >
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="info"
                                            disabled={!checkValues()}
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
        </ThemeProvider>

    );
}