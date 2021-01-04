import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../redux/actions';

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '166449133964-cq2ec5hr9pc0uo7mp7ma8rbv7iil25er.apps.googleusercontent.com',
                scope: 'email'
            }).then( () => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    };

    onAuthChange = (isSignedIn) => {
        // this.setState({ isSigned: this.auth.isSignedIn.get() });
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    };

    onClickSignOut = () => {
        this.auth.signOut();
    }

    onClickSignIn = () => {
        this.auth.signIn();
    }

    showGoogleBtn = () => {
        if (this.props.isSignedIn === false) {
            return (
                <button className='ui red google button' onClick={ this.onClickSignIn }>
                    <i className='google icon' />
                    Sign In with Google
                </button>
            );
        } else if (this.props.isSignedIn) {
            return (
                <button className='ui red google button' onClick={ this.onClickSignOut }>
                    <i className='google icon' />
                    Sign Out!
                </button>
            )
        } else {
            return null;
        }
    }

    render() {
        return (
            <div>
                {this.showGoogleBtn()}
            </div>
        );
    };
};

const mapStateToProps = state => {
    return ({
        isSignedIn: state.auth.isSignedIn
    })
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);