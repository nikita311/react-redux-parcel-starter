import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class Grid extends Component {
    static propTypes = {
        grid: PropTypes.object,
        gridAction: PropTypes.func,
        gridAction2: PropTypes.func, 
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    action = () => {
        const { gridAction } = this.props;
        gridAction();
    }

    action2 = () => {
        const { gridAction2 } = this.props;
        gridAction2();
    }

    render() {
        const { grid } = this.props;
        return (
            <Fragment>
                <div>{JSON.stringify(grid)}</div>
                <button onClick={this.action}>Grid Action</button>
                <button onClick={this.action2}>Grid Action 2</button>
            </Fragment>
        );
    }
}

export default Grid;
