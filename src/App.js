import React, { useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const App = () => {
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);

    const [rowData, setRowData] = useState([
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mondeo", price: 32000 },
        { make: "Porsche", model: "Boxter", price: 72000 }
    ]);

    const onButtonClick = e => {
      const selectedNodes = gridApi.getSelectedNodes();
      const selectedData = selectedNodes.map( node => node.data )
      const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ')
      alert(`Selected nodes: ${selectedDataStringPresentation}`)
  }

    return (
      <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <button onClick={onButtonClick}>Get selected rows</button>
      <AgGridReact
          onGridReady={ params => setGridApi(params.api) }
          rowData={ rowData }
          rowSelection="multiple">
          <AgGridColumn field="make" sortable={ true } filter={ true } checkboxSelection={ true }></AgGridColumn>
          <AgGridColumn field="model" sortable={ true } filter={ true }></AgGridColumn>
          <AgGridColumn field="price" sortable={ true } filter={ true }></AgGridColumn>
      </AgGridReact>
  </div>
    );
};

export default App;