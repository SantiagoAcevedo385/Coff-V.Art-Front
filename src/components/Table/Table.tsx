import React, { useState } from 'react';
import { SearchTable } from '../SearchTable/SearchTable';
import { Button } from '../Button/Button';
import { FaDownload } from 'react-icons/fa';
import { IoAddCircleSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import './Table.css';

interface TableProps {
	data: any[];
	columns: any[];
	title?: string;
	label?: string;
	createLink?: string;
	createText?: string;
}

export const Table: React.FC<TableProps> = ({
	data,
	columns,
	title,
	label,
	createLink = '/',
	createText,
}) => {
	const [searchType, setSearchType] = useState('');
	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchType(e.target.value);
	};

	let dataTable: any = [];

	if (searchType !== '') {
		dataTable = data.filter((row) => {
			return Object.values(row).some((value: any) =>
				value.toString().toLowerCase().includes(searchType.toLowerCase())
			);
		});
	} else {
		dataTable = data;
	}

	return (
		<>
			{title && <h1>{title}</h1>}
			<div className='tableContainer'>
				<div className='actionsTable'>
					<div className='left'>
						<span className='download'>
							<FaDownload />
						</span>
						<Link to={createLink} className='createButton'>
							{createText ? (
								<>
									<IoAddCircleSharp /> {createText}
								</>
							) : (
								<>
									<IoAddCircleSharp /> Crear Nuevo
								</>
							)}
						</Link>
					</div>
					<SearchTable
						searchType={searchType}
						handleSearch={handleSearch}
						label={label}
					/>
				</div>
				<table className='dataTable'>
					<thead>
						<tr>
							{columns.map((column) => (
								<th key={column}>{column}</th>
							))}
							{data[0].actions && <th>Acciones</th>}
						</tr>
					</thead>
					<tbody>
						{dataTable.map((row: any, index: number) => (
							<tr key={index}>
								{columns.map((column: string) =>
									column === 'id' ? (
										<td key={column} className='id'>
											{index + 1}
										</td>
									) : (
										<td key={column}>{row[column]}</td>
									)
								)}
								{row.actions && (
									<td className='dataTable__actions'>
										{row.actions?.map((action: any, index: number) => (
											<Button
												key={index}
												text={action.name}
												onClick={action.action}
												fill={action.fill}
											/>
										))}
									</td>
								)}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};
