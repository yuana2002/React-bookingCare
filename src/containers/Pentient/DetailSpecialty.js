import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import './DetailSpecialty.scss';
import HomeHeader from '../HomePage/HomeHeader';

class DetailSpecialty extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    async componentDidMount() {

    }
    async componentDidUpdate(prevProps, pervState, snapshot) {
        if (this.props.language !== prevProps.language) {

        }

    }

    render() {
        return (
            <>
                <HomeHeader />
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailSpecialty);