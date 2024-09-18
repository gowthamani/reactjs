import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { changedailog } from '../state-manager/commondata';

export default function Commondailog(flag) {
    debugger
    const util = useSelector((state)=> state.util)
    const dispatch = useDispatch()
    const [open, setOpen] = useState(true)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        let obj = {
            flag:false
        }
        dispatch(changedailog(obj))
    };

    useEffect(() => {
        console.log(flag)
    })

    return (

        <>
            <Dialog
                open={open}
                onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit">Subscribe</Button>
                </DialogActions>
            </Dialog>
        </>


    )
}
