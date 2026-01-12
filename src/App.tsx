import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const App: React.FC = () => {
  const testData = [
    { id: 1, title: 'Mona Lisa', artist: 'Leonardo da Vinci' },
    { id: 2, title: 'Starry Night', artist: 'Vincent van Gogh' },
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h2>PrimeReact Test Table</h2>
      <DataTable value={testData} dataKey="id">
        <Column field="id" header="ID" />
        <Column field="title" header="Title" />
        <Column field="artist" header="Artist" />
      </DataTable>
    </div>
  );
};

export default App;
