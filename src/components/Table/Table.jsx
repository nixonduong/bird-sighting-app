// components/DataTable.js
import React from 'react';
import PropTypes from 'prop-types';
import { Box, DataTable, Heading, ResponsiveContext } from 'grommet';

export const Table = ({ data, columns, header, onRowClick, designSystemDemo }) => {
  const size = React.useContext(ResponsiveContext);

  return (
    <div>
      <Heading level={3} margin="none">
        {header}
      </Heading>
      <Box height={designSystemDemo ? undefined : 'medium'} overflow="auto">
        <DataTable
          aria-describedby="storage-pools-heading"
          data={data}
          columns={columns}
          fill
          primaryKey="id"
          onClickRow={({ datum }) => onRowClick(datum)}
          pin
          style={{ border: '1px solid black', borderCollapse: 'collapse' }}
        />
      </Box>
    </div>
  );
};

Table.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  onRowClick: PropTypes.func.isRequired,
  designSystemDemo: PropTypes.bool,
};