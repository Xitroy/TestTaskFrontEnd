import React, {Component} from 'react';
import styles from './style.css';

import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';
import IconButton from "@material-ui/core/IconButton/IconButton";

class Contact extends React.Component {
    isEditable = false;

    render() {
        return (
            <div className={"contactItem"}>
                <Grid container={true} spacing={24} justify={"center"} style={{padding: 24}}>
                    <Grid xs={3} style={{alignSelf:"center"}}>
                        <span className={"editable_"+this.props.identifier} id={"contactName"+this.props.identifier}>{this.props.name}</span>
                    </Grid>
                    <Grid xs={3} style={{alignSelf:"center"}}>
                        <span className={"editable_"+this.props.identifier} id={"contactPhone"+this.props.identifier}>{this.props.phone}</span>
                    </Grid>
                    <Grid xs={3} style={{alignSelf:"center"}}>
                        <span className={"editable_"+this.props.identifier} id={"contactCompany"+this.props.identifier}>{this.props.company}</span>
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
        let here = storage.findIndex(p => p.identifier === identifier);
        storage.splice(here,1);

        localStorage.setItem("Storage", JSON.stringify(storage));
        document.location.reload(true);
    }

    //Todo
    contactEdit(identifier) {
        this.isEditable = !this.isEditable;
        let editables = document.getElementsByClassName("editable_"+identifier);
        [].forEach.call(editables, (element)=>{
            if(this.isEditable){
                element.setAttribute("contenteditable", true);
            }
            else {
                element.setAttribute("contenteditable", false);
            }
        });

        if (this.isEditable){
            document.getElementById("editBtn"+identifier).style.color="#E91E63";
            // document.getElementById("editBtn"+identifier).setAttribute("color", "secondary");
        }
        else {
            document.getElementById("editBtn"+identifier).style.color="#616161";

            let name = document.getElementById("contactName"+identifier).innerText;
            let phone = document.getElementById("contactPhone"+identifier).innerText;
            let company = document.getElementById("contactCompany"+identifier).innerText;
            let person = {
                "identifier": identifier,
                "name": name,
                "phone": phone,
                "company": company
            };

            let storage = JSON.parse(localStorage.getItem("Storage"));
            let personToChange = storage.findIndex(p => p.identifier === identifier);
            storage[personToChange] = person;
            localStorage.setItem("Storage", JSON.stringify(storage));
        }

    }
}

export default Contact;
