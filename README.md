# Trabalho Prático 01 – React com API 

Este projeto é uma aplicação React desenvolvida com Vite, que consome dados de uma API pública do jogo League of Legends e os exibe em cards estilizados com Bootstrap. A aplicação inclui filtros interativos para facilitar a navegação pelos dados.

## 🚀 Tecnologias Utilizadas

- React
- Vite
- Axios
- React Bootstrap
- Hooks (useState, useEffect)
- JavaScript
- Boostrap
- Tailwind
- tailwind-merge

## 👥 Equipe e Responsabilidades

### 👨‍💻 Luiz Souza
- Estruturação inicial do projeto com Vite
- Configuração dos hooks useState e useEffect
- Implementação das requisições à API utilizando Axios
- Garantia do carregamento automático dos dados na inicialização da aplicação
- Desenvolvimento do Design dos Card & Páginas

### 👨‍💻 Renan
- Desenvolvimento da interface utilizando componentes do React Bootstrap
- Garantia de um layout organizado e responsivo
- Criação do layout dos cards para exibir pelo menos 6 informações por item
- Estilização dos filtros e botões com Bootstrap/Tailwind

### 👨‍💻 Itallo
- Criação dos botões de filtro pré-definidos (ex: “Magos”, “Tanques”, etc.)
- Implementação do método `.filter()` para aplicar os filtros
- Implementação do botão “Mostrar Todos” para restaurar a lista original
- Garantia de que os filtros afetam corretamente o estado da aplicação

## 📁 Estrutura do Projeto
```
Trabalho_Pratico_01_React/
├── public/
├── src/
│ ├── components/
│ │ ├── ChampionCard.jsx
│ │ └── FilterButtons.jsx
│ ├── App.jsx
│ └── index.jsx
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

## 🔧 Como Executar o Projeto

1. Siga esses passos para rodar o projeto:

```bash
   git clone https://github.com/LuixzSouza/Trabalho_Pratico_01_React.git

  cd Trabalho_Pratico_01_React

  npm install

  npm run dev
```


