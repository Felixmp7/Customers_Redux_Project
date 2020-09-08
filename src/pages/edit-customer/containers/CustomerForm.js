import React from 'react'
// import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'; // HOC (objeto con el key form: y el nombre que le daré al form)
import { connect } from 'react-redux';

const CustomerForm = (props) => {
  console.log(props)
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

const mapState = (state,props) => ({
  initialValues: props
})

const ReduxCustomerForm = reduxForm({
  form: "Edit Customer"
})(CustomerForm);


export default connect(mapState)(ReduxCustomerForm);
