import React, {Component} from 'react';
import styles from './style.css';

import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import blue from '@material-ui/core/colors/blue';
// import FloatButton from "../Dialog/FloatButton";

const emails = ['username@gmail.com', 'user02@gmail.com'];
const styles2 = {
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },
};

class SimpleDialog extends React.Component {
    handleClose = () => {
        this.props.onClose(this.props.selectedValue);
    };

    handleListItemClick = value => {
        this.props.onClose(value);
    };

    handleSubmit() {
        var name = document.getElementById("nameinput").value;
        var phone = document.getElementById("phoneinput").value;
        var company = document.getElementById("companyinput").value;
        var person = {
            "name": name,
            "phone": phone,
            "company": company
        };
        var ran = Math.random(2);
        localStorage.setItem(ran.toString(), JSON.stringify(person));
        var put = JSON.parse(localStorage.getItem("data"));
        //this.props.onClose(localStorage.getItem("data"));
        console.log(localStorage.length);
        this.props.onClose(put.name);


    }

    handleCancel() {
        this.handleListItemClick("cancelled");
    }

    render() {
        const {classes, onClose, selectedValue, ...other} = this.props;

        return (
            <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
                <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
                <div>
                    <input type="text" name="name" id="nameinput"/>
                    <input type="text" name="phone" id="phoneinput"/>
                    <input type="text" name="company" id="companyinput"/>
                    <button onClick={() => this.handleSubmit()}>submit</button>
                    <button onClick={() => this.handleCancel()}>cancel</button>
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

const SimpleDialogWrapped = withStyles(styles2)(SimpleDialog);

class SimpleDialogDemo extends React.Component {
    state = {
        open: false,
        selectedValue: emails[1],
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
                <Typography variant="subheading">Selected: {this.state.selectedValue}</Typography>
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
