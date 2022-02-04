import React from 'react';

import { Title, Form } from './styles';
import logo from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="GitCollection" />
      <Title>Catalogo de repositórios do Github</Title>
      <Form>
        <input placeholder="username/repositoru_name" type="text" name="" />
        <button>Buscar</button>
      </Form>
    </>
  );
};

export default Dashboard;
