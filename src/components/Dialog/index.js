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
// import FloatButton from "../Dialog/FloatButton";

class SimpleDialog extends React.Component {
    handleClose = () => {
        this.props.onClose(this.props.selectedValue);
    };

    handleListItemClick = value => {
        this.props.onClose(value);
    };

    handleSubmit() {
        //TODO delete it
        //get inputs
        //get storage which actually is an array of objects
        //parse storage
        //put one more
        //sringify it
        var name = document.getElementById("nameinput").value;
        var phone = document.getElementById("phoneinput").value;
        var company = document.getElementById("companyinput").value;
        var person = {
            "name": name,
            "phone": phone,
            "company": company
        };

        let storage = JSON.parse(localStorage.getItem("Storage")); //should be an array
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

        //TODO delete
        // var ran = Math.random(2);
        // localStorage.setItem(ran.toString(), JSON.stringify(person));
        // var put = JSON.parse(localStorage.getItem("data"));
        //this.props.onClose(localStorage.getItem("data"));
        // console.log(localStorage.length);
        // this.props.onClose(put.name);


    }

    handleCancel() {
        this.handleListItemClick("cancelled");
    }

    render() {
        const {classes, onClose, selectedValue, ...other} = this.props;

        return (
            <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
                <DialogTitle id="simple-dialog-title">New contact</DialogTitle>
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

class SimpleDialogDemo extends React.Component {
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

export default SimpleDialogDemo;
