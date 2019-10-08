import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// IMG
import LogoImg from '../assets/img/LogoPNE.png';
import RelevanceImg from '../assets/icon/icon_menu-Relevancia.svg';
import FilterImg from '../assets/icon/icon_menu.svg';
import PotentialImg from '../assets/icon/icon_menu-analise.svg';
import HistoricImg from '../assets/icon/icon_menu-historico.svg';
import ManagementImg from '../assets/icon/icon_menu-gestão.svg';
import DocumentsImg from '../assets/icon/icon_menu-geracaoDoc.svg';
import TaxImg from '../assets/icon/icon_menu-justificativa.svg';
import ClarificationImg from '../assets/icon/icon_menu-hitorico.svg';
import NotificationImg from '../assets/icon/icon_menu-notificação.svg';

const Container = styled.div`
  width: 300px;
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border-right: rgba(0, 0, 0, 0.1) solid 1px; 
  border-radius: 4px 0 0 0;
  box-shadow: 2px 0 4px;
`;

const NavBar = styled.div`
  width: 100%;
  height: 90%;
`;

const BoxLogo = styled.figure`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgLogo = styled.img`
  width: 145px;
`;

const BoxMenu = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: flex-end;;
`;

const MenuList = styled.ul`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
`;

const IconSideBar = styled.img`
  padding-right: 1rem;
`;

const MenuItem = styled(Link)`
  height: 36px;
  display: flex;
  align-items: center;
  list-style: none;
  font-size: .875rem;
  color: #116EA0;
  font-weight: 900;
  padding-left: 1rem;
  background-color: ${(props) => (props.selected ? '#116EA015' : 'transparent')};
  color: #116ea0;
  border-radius: 18px 0 0 18px;
  cursor: ${(props) => (props.disable ? 'default' : 'pointer')};
	opacity: ${(props) => (props.disable ? '0.3' : '1')};
`;

const BoxFilter = styled.div`
  height: 10%;
  width: 80%;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const FilterText = styled.p`
  color: #404040;
  font-size: .875rem;
`;

const WrapperInfo = styled.div`
  width: 80%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-centent: center;
  border-top: solid #000 1px;
`;

const Contentinfo = styled.div`
 width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const BoxInfo = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InfoImg = styled.img`
  padding-right: .5rem;
`;

const InfoItem = styled.p`
  color: #000;
  font-size: .875rem;
  font-weight: 900;
`;

const Representative = styled.p`
  color: #000;
  font-size: .875rem;
  font-weight: 100;
`;

const Button = styled.button`
  width: 58px;
  height: 20px;
  background: #dbe9f1;
  border-radius: 10px;
  border-style: none; 
  cursor: pointer;
	outline: none;
`;

class SideBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedItem: 'Match Relevância',
			sidebarList: [
				{
					disable: false,
					iconSelected: RelevanceImg,
					text: 'Match Relevância',
					route: '/dashboard',
				},
				{
					disable: false,
					iconSelected: FilterImg,
					text: 'Filtros e notificações',
					route: '/filters and notifications',
				},
				{
					disable: true,
					iconSelected: PotentialImg,
					text: 'Análise de Potencial',
					route: '/potential analysis',
				},
				{
					disable: true,
					iconSelected: HistoricImg,
					text: 'Histórico de oportunidades',
					route: '/historical opportunities',
				},
				{
					disable: true,
					iconSelected: ManagementImg,
					text: 'Gestão interna',
					route: '/internal management',
				},
				{
					disable: true,
					iconSelected: DocumentsImg,
					text: 'Geração de documentos',
					route: '/document generation',
				},
				{
					disable: true,
					iconSelected: TaxImg,
					text: 'Justificativa de impostos',
					route: '/tax justification',
				},
				{
					disable: true,
					iconSelected: ClarificationImg,
					text: 'Histórico de esclarecimentos',
					route: '/clarification history',
				},
				{
					disable: true,
					iconSelected: NotificationImg,
					text: 'Notificação de resultados',
					route: '/notification of results',
				},
			],
		};
	}

	render() {
		return (
			<Container>
				<NavBar>
					<BoxLogo>
						<ImgLogo src={LogoImg} alt="Logo" />
					</BoxLogo>
					<BoxMenu>
						<MenuList>

							{this.state.sidebarList.map((item) => (
								<MenuItem
									key={item}
									disable={item.disable}
									selected={item.text === this.state.selectedItem}
									to={item.route}
								>
									<IconSideBar src={item.iconSelected} />
									{item.text}
								</MenuItem>
							))}
						</MenuList>
					</BoxMenu>
				</NavBar>
				<BoxFilter>
					<InfoImg src={FilterImg} />
					<FilterText>Filtros e notificações</FilterText>
				</BoxFilter>
				<WrapperInfo>
					<Contentinfo>
						<BoxInfo>
							<InfoItem>Snowball Solutions</InfoItem>
							<Representative>Pedro Gualandi</Representative>
						</BoxInfo>
						<span>
							<Button>Sair</Button>
						</span>
					</Contentinfo>
				</WrapperInfo>
			</Container>
		);
	}
}


export default SideBar;
