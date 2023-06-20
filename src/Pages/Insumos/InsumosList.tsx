import { Table } from "../../components/Table/Table"

export const InsumosList = ()=>{
    const columns = ['id', 'name', 'valor_Unitario', 'cantidad', 'categoria', 'descripcion' ,'state'];
	const insumos = [
		{
			id: 1,
			name: 'Café Oscuro',
			state: 'active',
            valor_Unitario: '27.000',
            cantidad: '25',
            categoria: 'Café amargo',
            descripcion: 'Café Oscuro con sabor amargo para disfrutar',
			actions: [
				{ name: 'Edit', fill: true, action: () => window.location.href = '/insumos/create' },
				{ name: 'Delete', fill: false, action: () => console.log('Delete')}
			]
		}
	]
    return <>
            <Table data={insumos} columns={columns} title="Insumos" createLink="create" createText="Crear Insumo" label="Buscar Insumo"/>
    </>
}