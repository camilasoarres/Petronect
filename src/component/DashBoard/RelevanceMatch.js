/* eslint-disable no-mixed-spaces-and-tabs */

// Libs
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
import { values } from 'lodash';

// Modules
import { addItem, putFavorite } from '../../dataflow/modules/Oportunities-Modules';
import { getAllOpportunitiesThunk } from '../../dataflow/thunks/opportunites-thunk';

// Images
import shareIcon from '../../assets/icon/lupa.svg'
import start from '../../assets/icon/estrela.svg';
import startHover from '../../assets/icon/estrela-cinza.svg';

// Components
import DetailsOportunities from './DetailsOportunities';

const mapStateToProps = (state) => ({
	keyword: state.oportunities.keyword,
	oportunities: state.oportunities.oportunities,
});

const mapDispatchToProps = (dispatch) => ({
	addItem: (info) => {
		dispatch(addItem(info));
	},
	putFavorite: (info) => {
		dispatch(putFavorite(info));
	},
	getAllOpportunitiesThunk: (info) => {
		dispatch(getAllOpportunitiesThunk(info));
	},
});

const Container = styled.div`
  width: 75vw;
  height: 95vh;
  border-radius: 0 4px 0 0 ;
  background: #fff;
`;

const Content = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WrapperHead = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BoxHeader = styled.span`
  display: flex;
  align-items: center;
`;

const HeaderText = styled.p`
  width: 251px;
  font-size: 1rem;
  font-weight: bold;
  color: #116EA0; 
`;

const WrapperForm = styled.div`
  width: auto;
  max-width: 60%;
`;

const Form = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const BoxInput = styled.div`
	display: flex;
	align-items: center
`;

const TitleInput = styled.p`
  color: #116EA0;
  font-size: 0.875rem;
  font-weight: bold;
`;

const LabelBox = styled.label`
  width: 251px;
  height: 32px;
  margin-left: .5rem;
  padding-left: 1rem;
  border-radius: 16px;
  border: solid #116EA0 .5px;
  display: flex;
  align-items: center;
`;

const InputHead = styled.input`
	width: 80%;
	height: 95%;
  border:none;
	outline: none;
`;

const WrapperKeyword = styled.div`
	display: flex;
`;

const KeiwordBox = styled.div`
	width: 89px;
	height: 20px;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	background: #AADF00;
	border-radius: 10px;
	opacity: 0.2;
`;

const KeiwordText = styled.p`
	font-size: .85rem;
	color: #404040;
`;

const ClosedKeyword = styled.button`
	width: 20px;
	height: 20px;
	background: #FFFFFF;
	border: 0.5px solid #115680;
	border-radius: 19px;
`;

const ImgShare = styled.img`
	padding-left: .85rem;
	cursor: pointer;
`;

const Button = styled.button`
  width: 103px;
  height: 32px;
	margin-left: 1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 0.5px solid #E6E6E6;
  border-radius: 16px;
  color: {this.state.favorites ? "red" : "blue"};
  font-size: .875rem;
	cursor: pointer;
	outline: none;
`;

const WrapperTable = styled.div`
  width: 100%;
  height: 90%; 
  display: flex;
  justify-content: center;
  background: #fff;
`;

const Table = styled.table`
  background: #fff;
  width: 97%;
  border-radius: 5px;
  >:nth-child(odd) {
    background: #F7F7F7; 
  }
`;

const HeaderRow = styled.tr`
  width: 90vw;
  height: 32px; 
  border-radius: 4px;
  color: #8C8C8C;
`;

const TableRow = styled.tr`
  width: 90vw;
  height: 32px; 
  border-radius: 4px;
  color: #8C8C8C;
	cursor: pointer;
  &:hover {
    transition: all .2s ease; 
    color: #404040;
  }
`;

const TableHeader = styled.th`
  width: ${(props) => (props.boxWidth ? '50px' : 'auto')};
  padding-left: 1rem;
  text-align: left;
  font-size: .875rem;
  font-weight: 500;
`;

const TableBody = styled.td`
  padding-left: 1rem;
  text-align: left;
  font-size: .875rem;
  font-weight: 500;
`;

class RelevanceMatch extends Component {
	constructor(props) {
		super(props);
		this.state = {
			search: '',
			data: [],
			searchString: [],
			hoverFavorites: false,
			isOportunitesModal: false,
			isShowFavorites: false,
		};
	}

	componentDidMount() {
		this.props.getAllOpportunitiesThunk(this.state.opportunities);
	}

	hoverFavorites = () => {
		this.setState({
			hoverFavorites: !this.state.hoverFavorites,
		});
		console.log('hoverFavorites', this.state.hoverFavorites);
	}

	handleInputChange = (event) => {
		event.preventDefault();
		this.setState({
			keyword: event.target.value,
		});
	}

	handleKeyPress = (event) => {
		if (event.key === 'Enter') {
			event.preventDefault();
			const item = {
				id: new Date().getTime(),
				keyword: event.target.value,
			};
			this.props.addItem(this.state.keyword);
			console.log('enter press here!', item);
		}
	}


	renderList = () => {
		return this.props.keyword.map((keyword) => {

			const handleClick = () => {
				this.props.removeItem(keyword.id);
			};

			return 	(
				<KeiwordBox 
					key={keyword.id}
					className='btn'
				>
					<KeiwordText>{keyword}{keyword.dane}</KeiwordText>
					<ClosedKeyword onClick={handleClick}>X</ClosedKeyword> 
				</KeiwordBox>
			);
		});
	}



	handleFavorite = (event, id) => {
		event.stopPropagation();
		this.props.putFavorite(id);
		console.log('handleFavorite', id);
	}

	handleModalOportunities = () => {
		const { isOportunitesModal } = this.state;
		this.setState({ isOportunitesModal: !isOportunitesModal });
	}

	renderModalOportunities = () => (
		<DetailsOportunities handleModalOportunities={this.handleModalOportunities} />
	)

	showFavorites = () => {
		const { oportunities } = this.props;

		const filterFaves = values(oportunities).filter((item) => item.favorite);

		this.setState({ filterFaves });
		console.log('oioio', filterFaves)
	}

	renderShowFavorites = () => {
		const { isShowFavorites } = this.state;

		this.setState({ isShowFavorites: !isShowFavorites })
	}

	render() {
		const { isOportunitesModal, isShowFavorites } = this.state;
  	return (
  		<Container>
  			<Content>
  				<WrapperHead>
  					<BoxHeader>
  						<HeaderText>Oportunidades selecionadas</HeaderText>
  					</BoxHeader>
  					<WrapperForm>
  						<Form onSubmit={this.handleKeyPress}>
								<BoxInput>
									<TitleInput>Pesquisar</TitleInput>
									<LabelBox>
										<InputHead placeholder="Digite aqui para pesquisar"
											onChange={this.handleInputChange}
											onKeyPress={this.handleKeyPress}
										></InputHead>
										<ImgShare src={shareIcon}/>
									</LabelBox>
								</BoxInput>
  							<Button
  								type="button"
  								value="1"
  								onClick = {this.showFavorites}
  								style={{
  									backgroundColor: this.state.hoverFavorites ? '#F9BE38' : '#F7F7F7',
  									color: this.state.hoverFavorites ? '#fff' : '#404040',
  								}
  								}
  							>
  								<img src={this.state.hoverFavorites ? startHover : start}/>
                Favoritos</Button>
  						</Form>
							<WrapperKeyword>
								{this.props.keyword.length > 0 ? this.renderList() : null}
							</WrapperKeyword>
  					</WrapperForm>
  				</WrapperHead>
  			</Content>
  			<WrapperTable>
  				<Table>
  					<HeaderRow>
  						<TableHeader boxWidth><img src={start}/></TableHeader>
  						<TableHeader boxWidth>Fit</TableHeader>
  						<TableHeader>Categoria</TableHeader>
  						<TableHeader>Id</TableHeader>
  						<TableHeader>Título e descrição</TableHeader>
  						<TableHeader>Prazo</TableHeader>
  					</HeaderRow>

  					{values(this.props.oportunities).map((item) => (
  						<TableRow key={item} onClick={this.handleModalOportunities}>
  							<TableBody onClick={(event) => { this.handleFavorite(event, item.id); }}>
									<img src={item.favorite ? start : startHover}/>
								</TableBody>
  							<TableBody>{item.fit}</TableBody>
  							<TableBody>{item.category}</TableBody>
  							<TableBody>{item.id}</TableBody>
  							<TableBody>{item.titleDescription}</TableBody>
  							<TableBody>
  								{item.deadLineInitial}
  								{item.deadLineLastOne}
  							</TableBody>
  						</TableRow>
						))}
						<Fragment>
							{values(this.props.oportunities).filter(item => item.favorite === true).map((item) => (
								<TableRow key={item} onClick={this.handleModalOportunities}>
									<TableBody onClick={(event) => { this.handleFavorite(event, item.id); }}>
										<img src={item.favorite ? start : startHover}/>
									</TableBody>
									<TableBody>{item.fit}</TableBody>
									<TableBody>{item.category}</TableBody>
									<TableBody>{item.id}</TableBody>
									<TableBody>{item.titleDescription}</TableBody>
									<TableBody>
										{item.deadLineInitial}
										{item.deadLineLastOne}
									</TableBody>
								</TableRow>
							))}
						</Fragment>
  				</Table>
					{isShowFavorites && this.showFavorites()}
  			</WrapperTable>
				<Fragment>
					{ isOportunitesModal && this.renderModalOportunities() }
				</Fragment>
  		</Container>
  	);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(RelevanceMatch);
