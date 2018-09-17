import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import styles from './style.css';

class ContactForm extends React.Component {
    render() {
        return (
            <div className={"container"}>
                <FormControl className={"contactForm"} noValidate>
                    <TextField className={"contactTf"}  id="nameinput" label="Name" />
                    <TextField className={"contactTf"} id="phoneinput" label="Phone" />
                    <TextField className={"contactTf"}  id="companyinput" label="Company" />
                </FormControl>
            </div>
        )
    }
}

export default withStyles(styles)(ContactForm);