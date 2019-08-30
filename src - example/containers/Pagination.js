import React from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import { nextPage, previousPage } from '../actions/pagination';
import Stepper from '../components/Stepper';



const mapStateToProps = state => {
  return {
    currentPage: state.moviesReducer.page,
    totalPages: state.moviesReducer.total_pages,
    totalResults: state.moviesReducer.total_results,
    }
  };

const mapDispatchToProps = dispatch => {
  return {
    doNextPage: (num, query) => dispatch(nextPage(num, query)),
    doPreviousPage: (num, query) => dispatch(previousPage(num, query)),
  }
}

function Pagination({ query, currentPage, totalPages, totalResults, doNextPage, doPreviousPage }) {
  
  

  function handleNext() {
    doNextPage(currentPage + 1, query);
  }

  function handleBack() {
    doPreviousPage(currentPage - 1, query);
  }

  return (
      
    <Grid container justify="center">
      <Grid item xs={10}>
        {
          totalPages > 1 ?
            <Stepper
              currentPage={currentPage}
              totalPages={totalPages}
              totalResults={totalResults}
              nextPage={() => handleNext()}
              previousPage={() => handleBack()}
            />
          : null
        }
      </Grid>
    </Grid>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
