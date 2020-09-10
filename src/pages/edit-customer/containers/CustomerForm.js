import React from 'react'
// import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'; // HOC (objeto con el key form: y el nombre que le daré al form)
import {setInitialPropsCustomerForm} from '../../../utils/hocs/setInitialPropsCustomerForm';

const isRequired = value => !value && 'Este campo es requerido';

const MyField = ({ input, meta, type, label, name }) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <input {...input} type={!type ? "text" : type} />
    {meta.touched && meta.error && <span>{meta.error}</span>}
  </div>
);

const CustomerForm = (props) => {
  console.log(props)
  return (
    <form>
      <Field
        name="name"
        label="Nombre"
        validate={isRequired}
        component={MyField}
        type="text"
      />
      <Field
        name="dni"
        label="DNI"
        validate={isRequired}
        component={MyField}
        type="text"
      />
      <Field
        name="age"
        label="AGE"
        validate={isRequired}
        /* 
          Puedo pasarle un array de validaciones, 
          me retorna un texto al lado del input.

          Ejemplo: validate={[isRequired, isNumber]}
          
        */
        component={MyField}
        type="number"
      />
    </form>
  );
}

// CustomerForm.propTypes = {

// }

const ReduxCustomerForm = reduxForm({
  form: "Edit Customer"
})(CustomerForm);


export default setInitialPropsCustomerForm(ReduxCustomerForm);
