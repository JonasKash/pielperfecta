# 🚀 Instruções de Instalação Rápida

## Passo a Passo

### 1. Instalar Dependências

```bash
npm install
```

### 2. Executar o Projeto

```bash
npm run dev
```

### 3. Acessar no Navegador

Abra [http://localhost:3000](http://localhost:3000)

## 📝 Próximos Passos

1. **Personalizar o vídeo**: Edite o `src` do iframe na seção Hero em `app/page.tsx`
2. **Alterar link de checkout**: Modifique a função `handleCTAClick` em `app/page.tsx`
3. **Personalizar cores**: Ajuste as cores do tema no arquivo `tailwind.config.ts`
4. **Adicionar imagens reais**: Substitua as URLs do Unsplash por suas próprias imagens

## ⚠️ Importante

- Certifique-se de ter Node.js 18+ instalado
- O projeto usa Next.js 14 com App Router
- Todas as dependências estão listadas no `package.json`

## 🎨 Estrutura de Componentes

- `components/ui/circular-testimonials.tsx` - Testemunhos com carrossel 3D
- `components/ui/testimonials-columns-1.tsx` - Testemunhos em colunas com scroll infinito

## 🔧 Comandos Úteis

```bash
npm run build    # Criar build de produção
npm start        # Executar build de produção
npm run lint     # Verificar erros de código
```


