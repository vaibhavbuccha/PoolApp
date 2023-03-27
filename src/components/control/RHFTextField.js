import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import React from 'react'

const RHFTextField = (props) => {

  let isError = false;
  let errorMessage = '';

  if(props?.errorObj && Object.prototype.hasOwnProperty.call(props.errorObj, props?.name)){
    isError = true;
    errorMessage = props?.errorObj[props?.name]?.message;
  }

  return (
    <Controller
      name={props?.name}
      control={props?.control}
      defaultValue={props?.someValue}
      render={({field}) => (
        <>
          <TextField autoComplete='off' {...field} {...props} variant="outlined" className='input-border' />
          {isError ? errorMessage : ''}
        </>
      )}
    />
  )
}

export default RHFTextField