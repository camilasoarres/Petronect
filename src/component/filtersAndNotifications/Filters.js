// Libs
import React, { Component } from 'react';
import styled from 'styled-components';

// Images
import filter from '../../assets/icon/filtrar.svg';

const Container = styled.div`
	padding: 2rem;
  width: 75vw;
  height: 95vh;
  border-radius: 0 4px 0 0;
  background: #fff;
`;

const AddFilter = styled.div`
	padding: 1rem;
	width: 35%;
	display: flex;
	border-color: #116EA0;
	border-radius: 4px;
	background-color: #116EA0;
	cursor: pointer;
`;

const AddFilterImage = styled.img`
	margin-right: 1rem;
`;

const WrapperTexts = styled.div`
`;

const Text = styled.p`
	// color: #fff;
`;

const Overlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #40404040;
`;

const FilterModal = styled.div`
	width: 42rem;
	border: .5px solid #115680;
	border-radius: 8px;
	background: #fff;
`;

const Header = styled.div`
	position: relative;
	padding-top: 1.2rem;
	width: 100%;
	display: flex;
	justify-content: space-between;
`;

const CloseContainer = styled.div`
	position: absolute;
	right: .65rem;
	bottom: 1.5rem;
	width: 30px;
	height: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 0.5px solid #E6E6E6;
	border-radius: 50%;
	background-color: #DBE9F1;
`;

const CloseButton = styled.button`
	width: 100%;
	height: 100%;
	font-size: 1rem;
	color: #115680;
	border: none;
	background: transparent;
	outline: none;
	cursor: pointer;
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	// width: 55%;
	// height: 90vh;
	background: #FFF;
	border-radius: 0 0 6px 6px;
	@media (max-width: 768px) {
		width: 85%;
		height: 80vh;
		border-radius: 6px;
	}
	@media (max-width: 450px) {
		width: 100%;
		height: 80vh;
		display: flex;
    justify-content: space-evenly;
		border-radius: 6px;
	}
`;

const InputBox = styled.span`
	position: relative;
	display: flex;
	flex-direction: ${(props) => (props.alt ? 'row' : 'column')};
	justify-content: ${(props) => props.alt && 'space-between'};
	width: 55%;
	margin-top: ${(props) => props.last && '.5rem'};
	@media (max-width: 768px) {
		width: 60%;
	}
	@media (max-width: 450px) {
		width: 90%;
	}
`;

const Label = styled.label`
	font: 500 12px Eurostile, sans-serif;
	margin: 0 0 .25rem .5rem;
	letter-spacing: 0;
	color: #7FBA4C;
`;

const Input = styled.input`
	width: 100%;
	height: 3rem;
	padding: 1rem;
	font-size: 1rem;
	background: #FAFAFA 0% 0% no-repeat padding-box;
	border: 1px solid #7FBA4C;
	border-radius: 4px;
	outline: none;

	::placeholder {
		font: Light 16px Open Sans;
		letter-spacing: 0;
		color: #959595;
	}
`;

class Filters extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isModalOpen: false,
		};
	}

	handleFilterModal = () => {
		this.setState({ isModalOpen: true });
	}

	handleClose = () => {
		this.setState({ isModalOpen: false });
	}

	renderFilterModal = () => (
		<Overlay>
			<FilterModal>
				<Header>
					<Text>Adicionar Filtro</Text>
					<CloseContainer onClick={this.handleClose}>
						<CloseButton>X</CloseButton>
					</CloseContainer>
				</Header>
				<Content>
					<InputBox>
						<Label>Escolha um nome</Label>
						<Input
							ref={(node) => { this.loginEmailRef = node; }}
							required
							autoFocus
							type='email'
							placeholder={'Digite seu texto aqui'}
						/>
					</InputBox>
					<InputBox last>
						<Label>Digite as tags relacionadas</Label>
						<Input
							ref={(node) => { this.loginPasswordRef = node; }}
							type={this.state.showPassword ? 'password' : 'text'}
							required
							placeholder={'Digite seu texto aqui'}
						/>
					</InputBox>
					<div>
						<Text>Sugestões:</Text>
						<Text>montagem</Text>
						<Text>Instrumental</Text>
						<Text>elétrica</Text>
					</div>
					<div>
						<Label>Escolha uma cor</Label>
						<div>
							{/* cores para o filtro */}
						</div>
						<button>Adicionar Filtro</button>
					</div>
				</Content>
			</FilterModal>
		</Overlay>
	)

	// eslint-disable-next-line class-methods-use-this
	render() {
		const { isModalOpen } = this.state;
		return (
			<Container>
				<AddFilter onClick={this.handleFilterModal}>
					<AddFilterImage src={filter} />
					<WrapperTexts>
						<Text>Adicionar filtro</Text>
						<Text>Selecione palavras chave para apurar contratos relevantes</Text>
					</WrapperTexts>
				</AddFilter>
				{ isModalOpen && this.renderFilterModal() }
			</Container>
		);
	}
}


export default Filters;
