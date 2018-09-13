import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import {TextFields} from "@material-ui/icons";
import FormControl from '@material-ui/core/FormControl';
import styles from './style.css';

const inputProps = {
    margin: "normal"
};


class ContactForm extends React.Component {
    render() {
        return (
            <FormControl className={"contactForm"} noValidate>
                <TextField
                    className={"contactTf"}
                    inputProps={inputProps}
                    id="nameinput"
                    label="Name"
                />
                <TextField
                    className={"contactTf"}
                    inputProps={inputProps}
                    id="phoneinput"
                    label="Phone"
                />
                <TextField
                    className={"contactTf"}
                    inputProps={inputProps}
                    id="companyinput"
                    label="Company"
                />
            </FormControl>
        )
    }
}

export default withStyles(styles)(ContactForm);