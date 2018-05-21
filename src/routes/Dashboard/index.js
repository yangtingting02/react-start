/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import Page from '../../components/Page/index';


function Dashboard({ dashboard, loading }) {
  const { title } = dashboard;
  return (
    <Page loading={loading.models.dashboard} inner={true}>
      <div>
        {title}
      </div>
    </Page>
  );
}

Dashboard.propTypes = {
  dashboard: PropTypes.object,
  loading: PropTypes.object,
};

export default connect(({ dashboard, loading }) => ({ dashboard, loading }))(Dashboard);
