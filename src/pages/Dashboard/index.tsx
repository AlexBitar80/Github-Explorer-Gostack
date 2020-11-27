import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/Logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github.</Title>

      <Form>
        <input placeholder="Digite aqui" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/56983783?s=460&u=8f9989cae85f76bc242ece4414271ccc54aeba56&v=4"
            alt="Alexandre"
          />
          <div>
            <strong>AlexBitar80/Fundamentos-NodeJS</strong>
            <p>desafio do bootcamp gostack fundamentos Node.js</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/56983783?s=460&u=8f9989cae85f76bc242ece4414271ccc54aeba56&v=4"
            alt="Alexandre"
          />
          <div>
            <strong>AlexBitar80/Fundamentos-NodeJS</strong>
            <p>desafio do bootcamp gostack fundamentos Node.js</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/56983783?s=460&u=8f9989cae85f76bc242ece4414271ccc54aeba56&v=4"
            alt="Alexandre"
          />
          <div>
            <strong>AlexBitar80/Fundamentos-NodeJS</strong>
            <p>desafio do bootcamp gostack fundamentos Node.js</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
