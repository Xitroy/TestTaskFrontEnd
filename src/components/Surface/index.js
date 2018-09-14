import React from 'react';
import styles from './style.css';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from "@material-ui/core/Grid/Grid";
import Contact from "./Contact";
import InputWithIcon from "./Search";


function Surface(props) {
    const {classes} = props;
    var contactList;
    let storage = JSON.parse(localStorage.getItem("Storage"));

    if (storage==null) {
        localStorage.setItem("Storage", JSON.stringify([]))
        contactList = ""
    }
    else {
        contactList = storage.map(function (item) {
            return <div><Contact name={item.name} phone={item.phone} company={item.company} identifier={item.identifier}/><br/></div>;
        });
    }

    return (
        <div className={"phoneList"}>
            <Grid container justify={"center"}>
                <Grid item xs={8}>
                    <Card className={classes.card}>
                        <InputWithIcon/>
                        <CardContent>
                            {contactList}
                        </CardContent>
                        <Grid container justify={"flex-end"}>
                            {/*<FloatingActionButton/>*/}
                        </Grid>
                    </Card>
                </Grid>
            </Grid>

        </div>
    );
}

Surface.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Surface);