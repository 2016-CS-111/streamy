import React from 'react';
import { Field,  reduxForm } from 'redux-form';

class StreamForm extends React.Component {

    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className='ui error message'>
                    <div className='header'>{error}</div>
                </div>
            );
        };
    };

    renderInput = ({ input, label, meta }) => {
        // console.log(formProps);
        return (
            <div className={`field ${meta.error && meta.touched ? 'error' : ''}`}>
                <label>{label}: </label>
                <input {...input} autoComplete='off' /><br /><br />
                {this.renderError(meta)}
            </div>
        );
    };

    onFormSubmit = (formValues) => {
        // console.log(formValues);
        this.props.onSubmit(formValues);
    }

    render() {
        // console.log(this.props);
        return (
            <form className='ui form error' onSubmit={ this.props.handleSubmit(this.onFormSubmit) }>
                <Field name='title' component={this.renderInput} label='Enter Title' />
                <Field name='description' component={this.renderInput} label='Enter Description' />
                <button className='ui button primary'>Submit</button>
            </form>
        );
    }
};

const validate = (formValues) => {
    // console.log(formValues);
    const errors = {};
    if (!formValues.title) {
        errors.title = 'You must enter the title!';
    };
    if (!formValues.description) {
        errors.description = 'You must enter description!';
    };
    return errors;
}

export default reduxForm({ form: 'streamForm', validate: validate })(StreamForm);
