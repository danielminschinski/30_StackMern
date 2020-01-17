import React from 'react';
import PropTypes from 'prop-types';

import './Pagination.scss';

class Pagination extends React.Component {
    state = {
        presentPage: this.props.initialPage || 1
    }
    
    
    
    render(){

        const { pages, onPageChange } = this.props;
        const { presentPage } = this.props;
        const { changePage } = this;
        return (
            <div className="pagination">

            </div>
        );
    }
}

Pagination.propTypes = {
    pages: PropTypes.number.isRequired,
    initialPage: PropTypes.number,
    onPageChange: PropTypes.func.isRequired,
    
};


export default Pagination;