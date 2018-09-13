import React, {Component} from 'react';
import styles from './style.css';

import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';
import IconButton from "@material-ui/core/IconButton/IconButton";

class Contact extends React.Component {

    handleDelete = () => {
        localStorage.getItem()
    };

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
                        <IconButton id={"editBtn"+this.props.identifier} ><Edit/></IconButton>
                        <IconButton id={"trashBtn"+this.props.identifier}><Delete/></IconButton>
                    </Grid>
                </Grid>
                <Dialog/>
            </div>

        );
    }
}

export default Contact;
