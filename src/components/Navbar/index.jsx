import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
	height: 2rem;
	padding-left: 2rem;
	padding-right: 2rem;
	padding-top: 0.75rem;
	padding-bottom: 0.75rem;
	display: flex;
	position: fixed;
	width: 100%;
	background-color: #272e71;
	z-index: 10;
`

export default function index() {
	return (
		<Nav>
			<div className='bg-white'>
				<img
					src='https://img.innoloft.de/logo.svg'
					alt='logo'
					className='h-8'
				/>
			</div>
			<div></div>
		</Nav>
	)
}
