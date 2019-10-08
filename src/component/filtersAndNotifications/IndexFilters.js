// Libs
import React, { Component } from 'react';
import styled from 'styled-components';

// Components
import SideBar from '../SideBar';
import Filters from './Filters';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: flex-end;
	justify-content: center;
	background: transparent linear-gradient(180deg, #115680 0%, #116EA0 100%) 0% 0% no-repeat padding-box;
`;

class IndexFilters extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	// eslint-disable-next-line class-methods-use-this
	render() {
		return (
			<Container>
				<SideBar />
				<Filters />
			</Container>
		);
	}
}


export default IndexFilters;
