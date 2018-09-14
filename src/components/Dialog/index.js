import React, {Component} from 'react';
import styles from './style.css';

import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import ContactForm from "../ContactForm";

class SimpleDialog extends React.Component {
    handleClose = () => {
        this.props.onClose(this.props.selectedValue);
    };

    handleListItemClick = value => {
        this.props.onClose(value);
    };

    handleSubmit() {
        let storage = JSON.parse(localStorage.getItem("Storage")); //should be an array

        let identifier;
        if(storage.length>0){
            identifier = storage.slice(-1).pop().identifier+1;
        }
        else {
            identifier = 0;
        }

        var name = document.getElementById("nameinput").value;
        var phone = document.getElementById("phoneinput").value;
        var company = document.getElementById("companyinput").value;
        var person = {
            "identifier": identifier,
            "name": name,
            "phone": phone,
            "company": company
        };

        if (storage){
            storage.push(person);
            localStorage.setItem("Storage", JSON.stringify(storage));
            this.props.onClose("saved");
        }
        else {
            localStorage.setItem("Storage", JSON.stringify([person]));
            this.props.onClose("saved");
        }
        document.location.reload(true);
    }

    handleCancel() {
        this.handleListItemClick("cancelled");
    }

    render() {
        const {classes, onClose, selectedValue, ...other} = this.props;

        return (
            <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
                <DialogTitle id="simple-dialog-title"><span className={"dtittle"}>New contact</span></DialogTitle>
                <div>
                    <ContactForm/>
                </div>
                <div className={"buttons"}>
                    <Button
                        variant="contained"
                        color="primary"
                        className={"dialogBtn left"}
                        onClick={() => this.handleSubmit()}
                    >
                        Save
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        className={"dialogBtn right"}
                        onClick={() => this.handleCancel()}
                    >
                        Cancel
                    </Button>
                </div>
            </Dialog>
        );
    }
}

SimpleDialog.propTypes = {
    classes: PropTypes.object.isRequired,
    onClose: PropTypes.func,
    selectedValue: PropTypes.string,
};

const SimpleDialogWrapped = withStyles(styles)(SimpleDialog);

class AddDialog extends React.Component {
    state = {
        open: false,
        selectedValue: "Hello!",
    };

    handleClickOpen = () => {
        this.setState({
            open: true,
        });
    };

    handleClose = value => {
        this.setState({selectedValue: value, open: false});
    };

    render() {
        return (
            <div>
                <Typography variant="subheading">{this.state.selectedValue}</Typography>
                <br/>
                <Button onClick={this.handleClickOpen} variant="fab" color={"primary"} className={"fb"}>
                    <AddIcon/>
                </Button>
                <SimpleDialogWrapped
                    selectedValue={this.state.selectedValue}
                    open={this.state.open}
                    onClose={this.handleClose}
                />
            </div>
        );
    }
}

export default AddDialog;
