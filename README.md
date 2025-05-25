# Catálogo de Filmes

Uma aplicação web desenvolvida em React para gerenciar um catálogo de filmes, com funcionalidades de autenticação, cadastro e listagem de filmes.

## Funcionalidades

- Autenticação de usuários (login/registro)
- Cadastro de filmes com validação de formulário
- Listagem de filmes com filtro por gênero
- Interface responsiva para desktop e mobile
- Navegação intuitiva entre as páginas
- Persistência de dados no localStorage

## Tecnologias Utilizadas

- React
- TypeScript
- Material-UI
- React Router
- Formik & Yup (validação de formulários)
- Context API (gerenciamento de estado)

## Como Executar o Projeto

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITÓRIO]
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm start
```

4. Acesse a aplicação em `http://localhost:3000`

## Estrutura do Projeto

```
src/
  ├── components/         # Componentes React
  ├── contexts/          # Contextos para gerenciamento de estado
  ├── types/             # Definições de tipos TypeScript
  └── App.tsx            # Componente principal
```

## Funcionalidades Implementadas

### Autenticação
- Login com email e senha
- Registro de novos usuários
- Proteção de rotas para usuários autenticados

### Catálogo de Filmes
- Cadastro de filmes com:
  - Nome
  - Gênero
  - Nota (0-10)
  - Comentário
- Listagem de filmes com filtro por gênero
- Exclusão de filmes
- Interface responsiva

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request
