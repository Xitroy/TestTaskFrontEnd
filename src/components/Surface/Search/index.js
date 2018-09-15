import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Search from '@material-ui/icons/Search';
import styles from './style.css';

class InputWithIcon extends React.Component{
    render(){
        return (
            <div className={"searchString"}>
                <div>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Search/>
                        </Grid>
                        <Grid item>
                            <TextField label="Search" id="search" onChange={() => this.handleSearch()} />
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }

    handleSearch() {
        let searchString = document.getElementById("search").value;

        //get relevant
        let storage = JSON.parse(localStorage.getItem("Storage")); // array
        let relevants=storage.filter(person => {
            if (person.name.includes(searchString) || person.phone.includes(searchString) || person.company.includes(searchString)){
                return true
            }
            else {return(false)};
        });

        localStorage.setItem("Relevants", JSON.stringify(relevants));

    }
}

export default InputWithIcon;