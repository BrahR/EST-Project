import DataTable, { TableColumn } from 'react-data-table-component';
import { useState } from 'react';
import { useMemo } from 'react';
import FilterComponent from './FilterComponent';
import apps from "@/assets/apps.png";
import BasicMenu from "@/components/Menu";


const customStyles = {
    headRow: {
        style: {
            border: 'none',
        },
    },
    headCells: {
        style: {
            color: '#202124',
            fontSize: '14px',
        },
    },
    rows: {
        highlightOnHoverStyle: {
            backgroundColor: '#caf0f8',
            borderBottomColor: '#FFFFFF',
            borderRadius: '25px',
            outline: '1px solid #FFFFFF',
        },
    },
    pagination: {
        style: {
            border: 'none',
        },
    },
};


interface DataRow {
    Nom: string;
    Description: string;
}

const data = [
    {
        Nom: "Genie Informatique",
        Description: "Bref description sur le départemnt Génie Informatique"
    },
    {
        Nom: "Genie Mécanique",
        Description: "Bref description sur le départemnt Génie Mécanique"
    },
    {
        Nom: "Genie Logiciel",
        Description: "Bref description sur le départemnt Génie Logiciel"
    },
    {
        Nom: "Genie Electrique",
        Description: "Bref description sur le départemnt Génie Electrique"
    },
];

const columns: TableColumn<DataRow>[] = [
    {
        cell: () => <img src={apps} />,
        width: '56px',
        style: {
            borderBottom: '1px solid #FFFFFF',
            marginBottom: '-1px',
        },
    },
    {
        name: 'Nom',
        selector: (row) => row.Nom,
        sortable: true,
        grow: 2,
        style: {
            color: '#202124',
            fontSize: '14px',
            fontWeight: 500,
        },
    },
    {
        name: 'Description',
        selector: (row) => row.Description,
        sortable: true,
        style: {
            color: 'rgba(0,0,0,.54)',
        },
    },
    {
        cell: () => <BasicMenu/>,
        width: '80px',
        style: {
            borderBottom: '1px solid #FFFFFF',
            marginBottom: '-1px',
        },
    },
];



function MyComponent(): JSX.Element {

    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const filteredItems = data.filter(
        item => item.Nom && item.Nom.toLowerCase().includes(filterText.toLowerCase()),
    );

    const subHeaderComponentMemo = useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
            }
        };

        return (
            <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
        );
    }, [filterText, resetPaginationToggle]);

    return <DataTable
        columns={columns}
        data={filteredItems}
        pagination
        subHeader
        subHeaderComponent={subHeaderComponentMemo}
        persistTableHead
        customStyles={customStyles}
        highlightOnHover
        pointerOnHover
    />;

}

export default MyComponent;