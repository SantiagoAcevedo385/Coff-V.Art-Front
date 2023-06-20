import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import ImgTextLogo from '../../assets/BurdeoTextLogo.png';

import './AdminMenu.css';

import { MdHome, MdAssistantPhoto } from 'react-icons/md';

import { FaUserAlt } from 'react-icons/fa';

import { GiCoffeeBeans } from 'react-icons/gi';

export const AdminMenu = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(true);
	return (
		<header
			className={`Admin__header Admin__header--${
				isMenuOpen ? 'open' : 'close'
			}`}
		>
			<div
				className='Admin__header__logo'
				onClick={() => setIsMenuOpen((previousState) => !previousState)}
			>
				<img src={ImgTextLogo} alt='Burdeo Text Logo' />
			</div>
			<nav className='Admin__header__nav'>
				<ul>
					<li className='Admin__header__nav__item'>
						<NavLink
							className={({ isActive }) =>
								`adminMenuLink ${isActive ? 'adminMenuActive' : ''}`
							}
							to={'/home'}
						>
							<MdHome/> <span className='adminMenuLink__text'>Dashboard</span>
						</NavLink>
					</li>
					<li className='Admin__header__nav__item'>
						<NavLink
							className={({ isActive }) =>
								`adminMenuLink ${isActive ? 'adminMenuActive' : ''}`
							}
							to={'/roles'}
						>
							<MdAssistantPhoto /> <span className='adminMenuLink__text'>Roles</span>
						</NavLink>
					</li>
					<li className='Admin__header__nav__item'>
						<NavLink
							className={({ isActive }) =>
								`adminMenuLink ${isActive ? 'adminMenuActive' : ''}`
							}
							to={'/users'}
						>
							<FaUserAlt /> <span className='adminMenuLink__text'>Usuarios</span>
						</NavLink>
					</li>
					<li className='Admin__header__nav__item'>
						<NavLink
							className={({ isActive }) =>
								`adminMenuLink ${isActive ? 'adminMenuActive' : ''}`
							}
							to={'/insumos'}
						>
							<GiCoffeeBeans /> <span className='adminMenuLink__text'>Insumos</span>
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};
