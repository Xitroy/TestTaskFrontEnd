import React from 'react';
import styles from './style.css';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add'
import Grid from "@material-ui/core/Grid/Grid";
import Contact from "./Contact";
import InputWithIcon from "./Search";
// import FloatingActionButton from "../Dialog/FloatButton";
//TODO delete it
// localStorage.setItem("Storage", JSON.stringify([
//     {
//         "name": "hello",
//         "phone": "228",
//         "company": "mycompany"
//     },
//     {
//         "name": "222",
//         "phone": "222",
//         "company": "222"
//     },
// ]))

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
            return <div><Contact name={item.name} phone={item.phone} company={item.company}/><br/></div>;
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