# Pele Boa - Página de Vendas

Página de vendas em TypeScript para produto de beleza, desenvolvida com Next.js, Tailwind CSS e componentes shadcn/ui.

## 🚀 Tecnologias

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Framer Motion** - Animações
- **React Icons** - Ícones
- **Lucide React** - Ícones adicionais

## 📦 Instalação

1. Instale as dependências:

```bash
npm install
```

2. Execute o servidor de desenvolvimento:

```bash
npm run dev
```

3. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📁 Estrutura do Projeto

```
├── app/
│   ├── globals.css          # Estilos globais
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Página de vendas
├── components/
│   └── ui/
│       ├── circular-testimonials.tsx    # Componente de testemunhos circular
│       └── testimonials-columns-1.tsx   # Componente de testemunhos em colunas
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## 🎨 Componentes

### CircularTestimonials
Componente de testemunhos com carrossel circular e animações 3D.

### TestimonialsColumn
Componente de testemunhos em formato de colunas com scroll infinito.

## ✨ Funcionalidades

- ✅ Header com promoção
- ✅ Hero section com vídeo (proporção 9:16 - Reels)
- ✅ Botões CTA estratégicos
- ✅ Testemunhos interativos (circular e colunas)
- ✅ Seção de benefícios
- ✅ Seção de dores/pain points
- ✅ Seção de público-alvo
- ✅ FAQ
- ✅ Footer

## 🔧 Personalização

Para alterar o link do checkout, edite a função `handleCTAClick` no arquivo `app/page.tsx`.

Para alterar o vídeo, substitua o `src` do iframe no componente Hero.

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter

## 📄 Licença

Este projeto é privado e de uso exclusivo.


