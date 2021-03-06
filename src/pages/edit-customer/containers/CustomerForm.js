import React from 'react'
import { Prompt } from 'react-router-dom'
// import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'; // HOC (objeto con el key form: y el nombre que le daré al form)
import {setInitialPropsCustomerForm} from '../../../utils/components/hocs/setInitialPropsCustomerForm';

const validate = (values) => {
  const error = {};

  if (!values.name) {
    error.name = 'El campo nombre es requerido'
  }

  if (!values.dni) {
    error.dni = 'El DNI es un campo obligatorio'
  }

  return error;
}

const isRequired = value => !value && 'Este campo es requerido';

const isNumber = value => isNaN(Number(value)) && 'Este campo debe ser un número';

const MyField = ({ input, meta, type, label, name }) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <input {...input} type={!type ? "text" : type} />
    {meta.touched && meta.error && <span>{meta.error}</span>}
  </div>
);

const parseAgeToNumber = age => age && Number(age);

const CustomerForm = ({ handleSubmit, submitting, onBack, pristine, submitSucceeded }) => {
  // console.log(props)

  // pristine = type: Boolean, me indica si modifiqué algo en el form
  // submitSucceeded = type: Boolean, me indica si ya hice submit en el form.
  return (
    <form onSubmit={handleSubmit}>
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
        validate={[isRequired, isNumber]}
        component={MyField}
        type="text"
      />
      <Field
        name="age"
        label="AGE"
        parse={parseAgeToNumber}
        validate={[isRequired, isNumber]}
        component={MyField}
        type="number"
      />
      <button type="submit" disabled={pristine || submitting}>
        Aceptar
      </button>
      <button type="button" onClick={onBack}>
        Cancelar
      </button>
      <Prompt
        when={!pristine && !submitSucceeded}
        message="Se perderan los datos si continúas"
      />
    </form>
  );
};

// CustomerForm.propTypes = {

// }

const ReduxCustomerForm = reduxForm({
  form: "Edit Customer",
  validate // Función que nos permite evaluar de forma global
})(CustomerForm);


export default setInitialPropsCustomerForm(ReduxCustomerForm);
