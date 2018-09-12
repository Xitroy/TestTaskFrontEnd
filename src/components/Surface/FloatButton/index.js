import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import styles from './style.css';

class FloatingActionButton extends React.Component {
    render() {
        return (
            <Button variant="fab" color={"primary"}>
                <AddIcon/>
            </Button>
        );
    }
}

export default withStyles(styles)(FloatingActionButton);