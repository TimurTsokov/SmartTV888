import React, {Component} from 'react';
import {connect} from 'react-redux';
import classes from './AuthContainer.scss'
import {Auth} from '../../store/actions/AuthActions';

class AuthContainer extends Component {

    componentDidMount() {
        this.props.Auth();
    }

    render() {
        return (
            <div className={classes["auth-container"]}>1</div>
        );
    }
}

const mapStateToProps = state => {
    return {
        needSignUp: state.needSignUp
    };
};

const mapDispatchToProps = dispatch => {
    return {
        Auth: () => dispatch(Auth())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
