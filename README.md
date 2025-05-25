# Catálogo de Filmes

Um aplicativo web desenvolvido em React para gerenciar um catálogo de filmes, permitindo que usuários registrem, visualizem e gerenciem seus filmes favoritos.

## 🎬 Funcionalidades

- **Autenticação de Usuários**
  - Registro de novos usuários
  - Login com email e senha
  - Proteção de rotas para usuários autenticados

- **Gerenciamento de Filmes**
  - Cadastro de filmes com nome, gênero, nota e comentários
  - Listagem de filmes com filtro por gênero
  - Exclusão de filmes
  - Interface responsiva e moderna

- **Interface Intuitiva**
  - Design moderno com Material-UI
  - Navegação intuitiva
  - Formulários com validação
  - Feedback visual para ações do usuário

## 🛠️ Tecnologias Utilizadas

- React
- TypeScript
- Material-UI
- React Router
- Formik & Yup (validação de formulários)
- Context API (gerenciamento de estado)
- GitHub Pages (deploy)

## 🚀 Como Executar

1. Clone o repositório:
```bash
git clone https://github.com/mandsd/catalogo-filmes.git
```

2. Instale as dependências:
```bash
cd catalogo-filmes
npm install
```

3. Execute o projeto em desenvolvimento:
```bash
npm start
```

4. Para fazer o build e deploy:
```bash
npm run deploy
```

## 🌐 Acesso ao Site

O site está disponível em: [https://mandsd.github.io/catalogo-filmes](https://mandsd.github.io/catalogo-filmes)

## 📁 Estrutura do Projeto

```
src/
  ├── components/     # Componentes React
  ├── contexts/       # Contextos (Auth e Movies)
  ├── types/         # Definições de tipos TypeScript
  └── App.tsx        # Componente principal
```

## ✨ Recursos Implementados

- **Autenticação**
  - Registro e login de usuários
  - Persistência de dados no localStorage
  - Proteção de rotas

- **Catálogo de Filmes**
  - Formulário de cadastro com validação
  - Listagem com filtro por gênero
  - Sistema de avaliação com estrelas
  - Comentários para cada filme

- **Interface**
  - Design responsivo
  - Tema personalizado
  - Animações suaves
  - Feedback visual para ações

- Amanda Dahm - [GitHub](https://github.com/mandsd)

---
