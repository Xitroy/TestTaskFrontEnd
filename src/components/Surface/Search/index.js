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
        let not_relevants=storage.filter(person => {
            if (person.name.toLowerCase().includes(searchString.toLowerCase()) || person.phone.toLowerCase().includes(searchString.toLowerCase()) || person.company.toLowerCase().includes(searchString.toLowerCase())){
                return false
            }
            else {return(true)};
        });

        localStorage.setItem("Not_relevants", JSON.stringify(not_relevants));

        //Todo check identifier
        for (let person in storage){
            document.getElementById("contact_"+storage[person].identifier).style.display = "inherit";
        }

        //Todo check identifier
        for (let person in not_relevants){
            document.getElementById("contact_"+not_relevants[person].identifier).style.display = "none";
        }
    }
}

export default InputWithIcon;