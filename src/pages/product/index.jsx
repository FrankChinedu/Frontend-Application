/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

import { getProduct } from '../../store/actions/product'

const Wrapper = styled.main`
	padding: 1rem;
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	column-gap: 1rem;
`

const Left = styled.div`
	grid-column: span 2 / span 2;
	background-color: #d6d6d6;
`
const Right = styled.div`
	background-color: #d6d6d6;
`

export default function index() {
	const dispatch = useDispatch()

	const product = useSelector((state) => state.product)
	console.log('product', product)

	useEffect(() => {
		dispatch(getProduct())
	}, [])

	return (
		<Wrapper>
			<Left>left</Left>
			<Right>right</Right>
		</Wrapper>
	)
}
