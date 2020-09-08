import React from 'react'
// import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'; // HOC (objeto con el key form: y el nombre que le daré al form)
import {setInitialPropsCustomerForm} from '../../../utils/hocs/setInitialPropsCustomerForm';

const isRequired = value => !value && 'Este campo es requerido';

const NameField = ({input, meta}) => (
  <div>
    <input {...input} type="text"/>
    {
      meta.touched && meta.error && <span>{meta.error}</span>
    }
  </div>
)

const CustomerForm = (props) => {
  console.log(props)
  return (
    <form>
      <div>
        <label htmlFor="name">Customer Name</label>
        <Field
          name="name"
          validate={isRequired}
          component={NameField}
          type="text"
        />
      </div>
      <div>
        <label htmlFor="dni">Customer DNI</label>
        <Field name="dni" validate={isRequired} component="input" type="text" />
      </div>
      <div>
        <label htmlFor="age">Customer Age</label>
        <Field
          name="age"
          validate={isRequired}
          component="input"
          type="number"
        />
      </div>
    </form>
  );
}

// CustomerForm.propTypes = {

// }

const ReduxCustomerForm = reduxForm({
  form: "Edit Customer"
})(CustomerForm);


export default setInitialPropsCustomerForm(ReduxCustomerForm);
