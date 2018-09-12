import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';
import styles from './style.css';
import IconButton from "@material-ui/core/IconButton/IconButton";

class Contact extends React.Component {
    render() {
        return (
            <div className={"contactItem"}>
                <Grid container={true} spacing={24} justify={"center"} style={{padding: 24}}>
                    <Grid xs={3} style={{alignSelf:"center"}}>
                        NameName
                    </Grid>
                    <Grid xs={3} style={{alignSelf:"center"}}>
                        Phone
                    </Grid>
                    <Grid xs={3} style={{alignSelf:"center"}}>
                        Company
                    </Grid>
                    <Grid xs={3}>
                        <IconButton><Edit/></IconButton>
                        <IconButton><Delete/></IconButton>
                    </Grid>
                </Grid>
                <Dialog/>
            </div>

        );
    }
}

export default Contact;
