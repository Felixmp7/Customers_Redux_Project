import React from 'react'
// import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'; // HOC (objeto con el key form: y el nombre que le daré al form)

const CustomerForm = () => {
  return (
    <form>
      <div>
        <label htmlFor="name">Customer Name</label>
        <Field name="name" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="dni">Customer DNI</label>
        <Field name="dni" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="age">Customer Age</label>
        <Field name="age" component="input" type="number" />
      </div>
    </form>
  );
}

// CustomerForm.propTypes = {

// }


export default reduxForm({
  form: "Edit Customer"
})(CustomerForm);
