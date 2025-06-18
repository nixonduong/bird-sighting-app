import { useEffect, useState } from "react";
import { fetchBirds } from "../../services/birds.js";
import { Table } from "../../components/Table/Table.jsx";
import { useNavigate } from 'react-router-dom';
import { Text, Heading } from 'grommet';

function BirdsTable({title}) {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [columns] = useState([
    { property: 'name', header: 'Name', render: d => <Text truncate>{d.name}</Text>, primary: true },
    { property: 'size', header: 'Size(cm)', render: d => <Text truncate>{d.size}</Text> },
    { property: 'weight', header: 'Weight(g)', render: d => <Text truncate>{d.weight}</Text> },
    { property: 'lifespan', header: 'Lifespan(yrs)', render: d => <Text truncate>{d.lifespan}</Text> },
    { property: 'diet', header: 'Diet', render: d => <Text truncate>{d.diet}</Text> },
  ])
  
  useEffect(() => {
    fetchBirds().then(d => {
        const filtered = d.filter(item => {
        if (title === "Diurnal" && item.diurnal) {
          return item
        }
        if (title === "Nocturnal" && item.diurnal == false) {
          return item
        }
      });
      console.log(filtered)
      setData([...filtered])
    });
  }, []);

  const handleRowClick = (obj) => {
    navigate(`/update-bird/${obj.birdId}`)
  };

  return (
    <div>
        {title}
      <Table
        columns={columns}
        data={data}
        onRowClick={handleRowClick}
      />
    </div>
  );
}

export default BirdsTable;