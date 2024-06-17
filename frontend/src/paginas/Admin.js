import React, { useEffect } from 'react';
import { Container, Tabs, Tab } from "react-bootstrap";
import ListaDevices from '../componentes/admin/ListaDevices';
import AdmDevices from '../componentes/admin/AdmDevices';
import NovoDevice from '../componentes/admin/NovoDevice';
import { useNavigate } from 'react-router-dom';
import Userfront from '@userfront/react';
import jwtDecode from 'jwt-decode';
import './css/Admin.css';

Userfront.init("qbjqg94n");

const Admin = ({ location }) => {
    let navigate = useNavigate();
    useEffect(() => {
        if (!Userfront.accessToken()) {
            localStorage.setItem('us', ' ')
            return navigate("/login")
        }
    });

    const userData = jwtDecode(Userfront.idToken());

    return (
        <div className="geral">
            <Container>
                <div className="descricao">
                    <h1>Área Administrativa</h1>
                </div>
            </Container>
            <div>
                <Tabs defaultActiveKey="devices" id="tab1" className="mb-1">
                    <Tab eventKey="devices" title="Meus Devices">
                        <ListaDevices />
                    </Tab>
                    <Tab eventKey="detalhes" title="Detalhes">
                        <AdmDevices />
                    </Tab>
                    <Tab eventKey="novo" title="Novo Device">
                        <NovoDevice />
                    </Tab>
                    <Tab eventKey="email" title="User Logado">
                        <h5>{userData.email}</h5>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
};

export default Admin;
