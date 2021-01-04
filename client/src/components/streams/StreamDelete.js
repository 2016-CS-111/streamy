import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchStream, deleteStream} from '../../redux/actions';
import history from '../../history';
import Modal from '../Modal';

class StreamDelete extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    renderAction() {
        return (
            <React.Fragment>
                <button className='ui button negative' onClick={() => this.props.deleteStream(this.props.match.params.id)}>Accept!</button>
                <Link to='/' className='ui button'>Deny</Link>
            </React.Fragment>
        );
    };

    renderContent() {
        if (!this.props.stream) {
            return 'Are you sure that you want to delete this stream?';
        }
        return `Are you sure that you want to delete this stream of title: ${this.props.stream.title}`
    }

    render() {
        return (
            <div>
                <Modal 
                    title='delete!?'
                    content={this.renderContent()}
                    actions={this.renderAction()}
                    onDismiss={() => history.push('/')}
                />
            </div>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);