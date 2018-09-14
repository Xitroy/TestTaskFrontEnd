import React, {Component} from 'react';
import styles from './style.css';

import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';
import IconButton from "@material-ui/core/IconButton/IconButton";

class Contact extends React.Component {
    render() {
        return (
            <div className={"contactItem"}>
                <Grid container={true} spacing={24} justify={"center"} style={{padding: 24}}>
                    <Grid xs={3} style={{alignSelf:"center"}}>
                        {this.props.name}
                    </Grid>
                    <Grid xs={3} style={{alignSelf:"center"}}>
                        {this.props.phone}
                    </Grid>
                    <Grid xs={3} style={{alignSelf:"center"}}>
                        {this.props.company}
                    </Grid>
                    <Grid xs={3}>
                        <IconButton id={"editBtn"+this.props.identifier} onClick={() => this.contactEdit(this.props.identifier)}><Edit/></IconButton>
                        <IconButton id={"trashBtn"+this.props.identifier} onClick={() => this.contactDelete(this.props.identifier)}><Delete/></IconButton>
                    </Grid>
                </Grid>
                <Dialog/>
            </div>

        );
    }

    contactDelete(identifier) {
        let storage = JSON.parse(localStorage.getItem("Storage"));
        var here;
        for (let i = 0; i <storage.length; i++) {
            if (storage[i].identifier == identifier){
                here = i;
                break;
            }
        }
        console.log(storage.splice(here,1));

        localStorage.setItem("Storage", JSON.stringify(storage));
        document.location.reload(true);
    }

    //Todo
    contactEdit(identifier) {
        return undefined;
    }
}

export default Contact;
