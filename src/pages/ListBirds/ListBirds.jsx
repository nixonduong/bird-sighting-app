import BirdsTable from "../../containers/BirdsTable/BirdsTable.jsx"
import { Box } from 'grommet'; 

function ListBirdsPage() {
  return (
      <Box direction="row" fill="horizontal" gap="medium" pad="medium">
        <BirdsTable title="Diurnal"/>
        <BirdsTable title="Nocturnal"/>
      </Box>
  );
}

export default ListBirdsPage;