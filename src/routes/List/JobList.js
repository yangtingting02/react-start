import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { Table } from 'antd';
import Page from '../../components/Page/index';


function JobList({ list, loading }) {
  const data = list.list;
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    }
  ];
  const tableProps = {
    pagination: {
      showSizeChanger: true,
    }
  };
  return (
    <Page loading={loading.models.dashboard} inner={true}>
      <Table
        {...tableProps}
        columns={columns}
        dataSource={data}
        bordered={true}
      />
    </Page>
  );
}

JobList.propTypes = {
  list: PropTypes.array,
  loading: PropTypes.object,
};

export default connect(({ list, loading }) => ({ list, loading }))(JobList);
