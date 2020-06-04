import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Grid from '../components/grid';
import Keypad from '../components/keypad';

import {
    gridAction,
    keypadAction, 
    gridAction2, 
} from '../redux/actions';

@connect(
    state => ({
        grid: state.grid,
        keypad: state.keypad,
    }),
    { gridAction, keypadAction, gridAction2 },
)
class AppGame extends Component {
    static propTypes = {
        grid: PropTypes.object,
        keypad: PropTypes.object,
        gridAction: PropTypes.func,
        gridAction2: PropTypes.func, 
        keypadAction: PropTypes.func,
    };

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        const { grid, keypad, gridAction, keypadAction, gridAction2 } = this.props;

        return (
            <Fragment>
                <Grid grid={grid} gridAction={gridAction} gridAction2={gridAction2} />
                <Keypad keypad={keypad} keypadAction={keypadAction} />
            </Fragment>
        );
    }
}

export default AppGame;
