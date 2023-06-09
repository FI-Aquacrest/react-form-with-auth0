import React from 'react';
import { Button, Grid, TextField, TextFieldProps } from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';
import { update } from '../../redux/reducers/formReducer';
import { useAuth0 } from '@auth0/auth0-react';

export interface FormType {
  name: string;
  email: string;
  age: number;
}

const UserForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormType>({
    mode: 'all',
  });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAuth0();

  const onSubmit: SubmitHandler<FormType> = (data) => {
    dispatch(update(data));
    navigate('/summary');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container direction="column" spacing={2}>
        {/** NAME */}
        <Grid item>
          <Controller
            name={'name'}
            control={control}
            render={({ field: { onChange, value } }) => (
              <FormTextField
                label="Name"
                value={value || ''}
                onChange={onChange}
              />
            )}
          />
        </Grid>

        {/** EMAIL */}
        <Grid item>
          <Controller
            name={'email'}
            defaultValue={user?.email}
            control={control}
            rules={{
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Entered value does not match email format',
              },
            }}
            render={({ field: { onChange, value, onBlur } }) => (
              <FormTextField
                label="Email"
                value={value || ''}
                onChange={onChange}
                onBlur={onBlur}
                error={errors.email !== undefined}
                helperText={errors.email?.message}
              />
            )}
          />
        </Grid>

        {/** AGE */}
        <Grid item>
          <Controller
            name={'age'}
            control={control}
            rules={{
              pattern: {
                value: /\d+/,
                message: 'Please enter a valid number',
              },
            }}
            render={({ field: { onChange, value, onBlur } }) => (
              <FormTextField
                label="Age"
                value={value || ''}
                onChange={onChange}
                onBlur={onBlur}
                error={errors.age !== undefined}
                helperText={errors.age?.message}
              />
            )}
          />
        </Grid>

        {/** SUBMIT */}
        <Grid item>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={!isValid}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

const FormTextField = (props: TextFieldProps) => {
  return <TextField InputLabelProps={{ shrink: true }} fullWidth {...props} />;
};

export default UserForm;
