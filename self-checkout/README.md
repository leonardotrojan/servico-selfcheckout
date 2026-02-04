# 🍔 Self Checkout

Projeto de **autoatendimento (self-checkout)** inspirado em totens reais, desenvolvido para **portfólio**, com foco em **UI/UX**, **fluxo real de pedidos** e **boas práticas modernas com Next.js**.

---

## 🎯 Objetivo

Demonstrar proficiência em:

- Next.js (App Router)
- React e TypeScript
- Client e Server Components
- Componentização e hooks
- Estilização com Tailwind e shadcn/ui
- Validação de dados com Zod
- Persistência de dados com Prisma e PostgreSQL

---

## 🧠 Sobre o Projeto

O sistema simula o fluxo real de um totem de autoatendimento:

- Navegação pelo cardápio  
- Seleção e gerenciamento de itens  
- Finalização do pedido  
- Persistência do pedido no banco  

> O foco do projeto é o **fluxo do pedido**, não a transação financeira.  
> Não há gateway de pagamento integrado por decisão de escopo.

---

## 🛠️ Tecnologias

**Front-end**
- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui

**Data / Back-end**
- Prisma ORM
- PostgreSQL (Neon)

**Outros**
- Zod

> O acesso ao banco é feito via **Server Components / Server Actions**, sem uso de rotas REST tradicionais.
