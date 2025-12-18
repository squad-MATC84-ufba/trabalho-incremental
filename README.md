# Projeto Incremental - Atividades de 02 a 05 (UFBANK)

Projeto criado incrementalmente ao longo do semestre utilizando o framwork **Next.js**, contemplando todas as entregas previstas pelo componente curricular *Lab de Programação Web* da Universidade Federal da Bahia, com o objetivo de desenvolvermos parte do protótipo de uma fintech fictícia **UFBANK** 

---

## Atividades Realizadas:
- Entrega 02: Estruturação em Atomic Design + Tela de Cadastro de Usuários
- Entrega 03: Estruturação em Atomic Design + Tela de Cadastro de Usuários + API Route
- Entrega 04: Tela de Cadastro de Máquinas de Pagamento + API Route
- Entrega 05: Tela de Cadastro de Valores das Máquinas + API Route

---

## Alunos da Squad (Ativos):
- Hugo Chaves
- Ícaro Miranda
- Enzo Maglhães
- Danilo Andrade

## Alunos da Squad (Desistentes):
- Davi Lima 
- Márcio Júnior

---

## Como executar localmente

1. Clone este repositório:

   ```bash
   git clone https://github.com/squad-MATC84-ufba/trabalho-incremental.git
   ```

2. Depois de clonar, abra o terminal e navegue até a pasta do projeto:

   ```bash
   cd trabalho-incremental 
   ```

3. Se não tiver instalado, instale as dependências:

   ```bash
   npm install
   ```
4. Instale o Zod para validação de dados dos formulários de cadastro (caso já não tenha instalado):

   ```bash
   npm install zod react-hook-form @hookform/resolvers
   ```
5. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

6. Abra no navegador:

   ## Para acesso à tela de cadastro do usuário/administrativo 
   ```
   http://localhost:3000/cadastro 
   ```
   ## Para acesso à tela de cadastro das máquinas 
   ```
   http://localhost:3000/maquinas/cadastro  
   ```
   ## Para acesso à tela de cadastro de valores das máquinas 
   ```
   http://localhost:3000/maquinas/valores  
   ``` 
---

## Rotas principais

| Rota                 | Descrição                                                |
| ---------------------| ---------------------------------------------------------|
| `/`                  | Página inicial padrão desativada (não há tela de login)  |
| `/cadastro`          | Cadastro de usuários                                     |
| `/maquinas/cadastro` | Cadastro de máquinas                                     |
| `/maquinas/valores`  | Cadastro de valores de máquinas                          |