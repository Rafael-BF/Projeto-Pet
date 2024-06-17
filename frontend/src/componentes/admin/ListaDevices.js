import React from 'react';
import { Container, Table, Image } from "react-bootstrap";
import { useApi } from '../../hooks/useApi';
import moment from 'moment';
import Userfront from '@userfront/react';
import jwtDecode from 'jwt-decode';
import './css/ListaDevices.css';

Userfront.init("qbjqg94n");

const ListaDevices = () => {
    const userData = jwtDecode(Userfront.idToken());
    const email = userData.email;
    const { data } = useApi(`/devices/${email}`);
    
    return (
        <Container className="container-custom"> 
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Foto</th>
                        <th>Device</th>
                        <th>Data de cadastro</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.message?.map(projeto => (
                        <tr key={projeto._id}>
                            <td><Image src={projeto.imagem} thumbnail className="foto" /></td>
                            <td>{projeto.nome}</td>
                            <td>{moment(projeto.data).format('DD-MM-YYYY')}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default ListaDevices;
