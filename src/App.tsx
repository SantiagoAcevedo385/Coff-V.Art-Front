import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import { AdminMenu } from './components/AdminMenu/AdminMenu';
import { RolesList } from './Pages/Roles/RolesList';
import { InsumosList } from './Pages/Insumos/InsumosList';
import { RolesCreate } from './Pages/Roles/RolesCreate';
import { InsumosCreate } from './Pages/Insumos/InsumosCreate';

export default function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<AdminMenu />
				<div className='appContent'>
					<Routes>
						<Route path='/home' element={<h1>Some</h1>} />
						<Route path='/roles' element={<RolesList />} />
						<Route path='/roles/create' element={<RolesCreate />} />
						<Route path='/insumos' element={<InsumosList />} />
						<Route path='/insumos/create' element={<InsumosCreate />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}
