import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Search from '@material-ui/icons/Search';
import styles from './style.css';

function InputWithIcon(props) {

    return (
        <div className={"searchString"}>
            <div>
                <Grid container spacing={8} alignItems="flex-end">
                    <Grid item>
                        <Search/>
                    </Grid>
                    <Grid item>
                        <TextField label="Search" />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

InputWithIcon.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputWithIcon);