import React from 'react';
import { connect } from 'react-redux';

import { createStream } from '../../redux/actions'
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {

    onFormSubmit = (formValues) => {
        // console.log(formValues);
        this.props.createStream(formValues);
    }

    render() {
        // console.log(this.props);
        return (
            <div>
                <h3>Create a Stream</h3>
                <StreamForm onSubmit={this.onFormSubmit} />
            </div>
        );
    }
};

export default connect(null, { createStream })(StreamCreate);