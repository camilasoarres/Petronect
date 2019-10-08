import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

// Images
import logo from '../../assets/img/LogoPNE.png';
import showPassword from '../../assets/icon/login-show-password.svg';
import hidePassword from '../../assets/icon/login-hide-password.svg';
import imagemPrincpal from '../../assets/img/Grupo-8105.svg';

// Redux
import { loginUserThunk } from '../../dataflow/thunks/login-thunk';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
	loginUserThunk: (info) => {
		dispatch(loginUserThunk(info));
	},
});

// Styled
const Container = styled.div`
	display: flex;
	width: 100%;
	min-height: 100vh;
	background: transparent linear-gradient(180deg,#115680 0%,#116EA0 100%) 0% 0% no-repeat padding-box;
	padding: 0 4rem;
	@media (max-width: 768px) {
		padding-bottom: 4rem;
		align-items: center;
		flex-direction: column-reverse;
	}
	@media (max-width: 450px) {
		padding: 1rem;
		justify-content: flex-end;
	}
`;

const InputContainer = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 55%;
	height: 90vh;
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

const Logo = styled.img`
	width: 35%;
	padding: 1rem 0;
	@media (max-width: 450px) {
		width: 55%;
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

const IconInputPassword = styled.img`
	position: absolute;
	bottom: 25%;
	right: 0;
	width: 1.25rem;
	margin-right: 1rem;
	cursor: pointer;
`;

const Button = styled.button`
	width: 55%;
	height: 3rem;
	margin-top: 1rem;
	background: #115680 0% 0% no-repeat padding-box;
	box-shadow: 0px 3px 6px #00000029;
	border: none;
	border-radius: 4px;
	outline: none;
	text-align: center;
	font: 500 1rem eurostile, sans serif;
	letter-spacing: 0;
	color: #FAFAFA;
	@media (max-width: 768px) {
		width: 60%;
	}
	@media (max-width: 450px) {
		width: 90%;
	}
`;

const AltBox = styled.span`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 52.5%;
	margin-top: 3rem;
	@media (max-width: 768px) {
		margin-top: 1rem;
		width: 60%;
	}
	@media (max-width: 450px) {
		margin-top: 0;
		width: 90%;
	}
`;

const Link = styled.p`
	font: 400 1rem Eurostile, sans serif;
	letter-spacing: 0;
	color: ${(props) => props.color || '#505050'} ;
	text-decoration: ${(props) => (props.color ? 'underline' : 'none')} ;
`;

const LoginBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 60%;
	height: 90vh;
	border-radius: 0 0 6px 6px;
	@media (max-width: 768px) {
		width: 95%;
    height: 65vh;
		justify-content: space-evenly;
		flex-direction: row-reverse;
	}
	@media (max-width: 450px) {
		display: none;
	}
`;

const Img = styled.img`
	width: 60%;
	@media (max-width: 768px) {
    width: 50%;
	}
`;

const TextBox = styled.span`
	width: 60%;
	@media (max-width: 768px) {
    width: 35%;
	}
`;

const Text = styled.p`
	margin: ${(props) => (props.error ? '0' : '1rem 0')};
	font: 700 18px eurostile, sans serif;
	letter-spacing: 0.18px;
	line-height: 2rem;
	color: ${(props) => (props.error ? '#D53B40' : '#FFFFFF')};
	font-size: .80rem;
	@media (max-width: 768px) {
		margin: ${(props) => (props.error ? '.1rem 0' : '0')};
	}
`;

const LoginMessageError = styled.span`
	// width: 55%;
	width: 48%;
	display: flex;
	justify-content: flex-end;
	@media	(max-width: 768px) {
		width: 55%;
	}
	@media (max-width: 450px) {
		width: 85%;
	}
`;

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showPassword: true,
			error: true,
		};
	}

	showPassword = () => {
		this.setState((prevState) => ({
			showPassword: !prevState.showPassword,
		}));
	}

	handleSubmit = (ev) => {
		ev.preventDefault();
		this.props.loginUserThunk({
			username: this.loginEmailRef.value.toLowerCase(),
			password: this.loginPasswordRef.value,
		});
	}

	renderError = () => {
		if (this.state.error) {
			return (
				<LoginMessageError>
					<Text error>Endereço de email e/ou senha incorretos</Text>
				</LoginMessageError>
			);
		}

		return null;
	}

	render() {
		return (
			<Container>
				<InputContainer onSubmit={this.handleSubmit}>
					<Logo src={logo}/>
					<InputBox>
						<Label>E-mail</Label>
						<Input
							ref={(node) => { this.loginEmailRef = node; }}
							required
							autoFocus
							type='email'
							placeholder={'Digite sua senha e-mail'}
						/>
					</InputBox>
					<InputBox last>
						<Label>Senha</Label>
						<Input
							ref={(node) => { this.loginPasswordRef = node; }}
							type={this.state.showPassword ? 'password' : 'text'}
							required
							placeholder={'Digite sua senha'}
						/>
						<IconInputPassword
							loginScreen
							src={this.state.showPassword ? showPassword : hidePassword}
							onClick={this.showPassword}
						/>
					</InputBox>
					{ this.state.error && this.renderError() }
					<Button>
						Entrar
					</Button>
					<AltBox>
						<Link>Criar nova conta</Link>
						<Link>Recuperar Senha</Link>
					</AltBox>
				</InputContainer>
				<LoginBox>
					<Img src={imagemPrincpal} />
					<TextBox>
						<Text>
							Defina seus filtros, receba contratos selecionados e esqueça como listas de mil itens.
						</Text>
						<Link color={'#AADF00'}>Criar nova conta</Link>
					</TextBox>
				</LoginBox>
			</Container>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
