// import React from 'react';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as Yup from 'yup'
import { useFormik } from 'formik';

function CourseForm({onhandleSubmit}) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const courseschema = Yup.object({
        name : Yup.string().required('Please Enter Name'),
        price : Yup.number().min(0).required('Please Enter Price')
    })

    const formik = useFormik({
        initialValues : {
            name : '',
            price : ''
        },
        validationSchema : courseschema ,
        enableReinitialize : true ,
        onSubmit: (values , action) => {
            console.log(values);
            action.resetForm()
            handleClose()
            onhandleSubmit(values)
        }
    })

    const {values , errors , touched , handleBlur , handleChange , handleSubmit , setValues} = formik

    return (
        <>
              <Button variant="outlined" onClick={handleClickOpen}>
              Course Data
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Course Data</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <form onSubmit={handleSubmit}>
          <TextField
           name='name'
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            value={values.name}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <span style={{color : 'red'}}> {errors.name && touched.name ? errors.name : ''} </span>
          <TextField
            name='price'
            margin="dense"
            id="price"
            label="Price"
            type="number"
            fullWidth
            variant="standard"
            value={values.price}
            onBlur={handleBlur}
            onChange={handleChange}
          />
           <span style={{color : 'red'}}> {errors.price && touched.price ? errors.price : ''} </span>
          <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type='submit'>Submit</Button>
        </DialogActions>
           </form>
        </DialogContent>
        
      </Dialog>
      
        </>
    );
}

export default CourseForm;