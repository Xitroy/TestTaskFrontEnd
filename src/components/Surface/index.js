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


function Surface(props) {
    const {classes} = props;

    return (
        <div className={"phoneList"}>
            <Grid container justify={"center"}>
                <Grid item xs={8}>
                    <Card className={classes.card}>
                        <InputWithIcon/>
                        <CardContent>
                            <Contact/><br/>
                            <Contact/><br/>
                            <Contact/><br/>
                            <Contact/><br/>
                        </CardContent>
                        <Grid container justify={"flex-end"}>
                            <Button variant="fab" color="primary" aria-label="Add" className={classes.button}>
                                <AddIcon/>
                            </Button>
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