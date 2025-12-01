# Hub Games - Projeto

Este repositório contém duas versões do site:

- `site_ajax/` — site estático tradicional (HTML/CSS/JS) com navegação AJAX usando jQuery e um slider em jQuery. Ideal para publicação rápida e compatibilidade com sua especificação original.
- `site_games_react/` — SPA moderno com React + Vite + Tailwind; usa um componente Slider em React, páginas em `src/pages/` e assets em `public/assets/img`.

## Pré-requisitos

- Node.js (>=16 recomendado) e npm ou pnpm
- Navegador moderno

## Rodando o site estático (jQuery + AJAX)

1. Abra um terminal no diretório do projeto estático:

```bash
cd /home/suporte/Documentos/Projetos/site_ajax
```

2. Sirva os arquivos via um servidor HTTP (recomendado porque a navegação AJAX e alguns requests não funcionam via `file://`):

Opção rápida com Python:

```bash
python3 -m http.server 8000
```

Ou com `http-server` (Node):

```bash
npx http-server -c-1 -p 8000
```

3. Abra no navegador:

```
http://localhost:8000
```

4. Testes/observações:
- O header com ícones e o menu está em `index.html`.
- Páginas: `pages/home.html`, `pages/quem-somos.html`, `pages/blog.html`, `pages/faq.html`, `pages/contato.html`.
- O AJAX e o slider estão implementados em `assets/js/main.js`.

## Rodando o app React (Vite + Tailwind)

1. Entre no diretório do app React:

```bash
cd /home/suporte/Documentos/Projetos/site_ajax/site_games_react
```

2. Instale dependências (use `pnpm`, `npm` ou `yarn` conforme preferir). Exemplo com `pnpm` (recomendado se já estiver usando):

```bash
pnpm install
```

3. Inicie o servidor de desenvolvimento:

```bash
pnpm run dev
```

4. Abra o endereço exibido pelo Vite (ex.: `http://localhost:5173` ou outra porta quando houver conflito).

5. Observações:
- Assets públicos (imagens referenciadas com `/assets/img/...`) estão em `site_games_react/public/assets/img`.
- O componente de slider está em `src/components/Slider.jsx` e agora aceita a prop `heightClass` para ajustar a altura.

## Build para produção (React)

```bash
cd site_games_react
pnpm run build
```

Os arquivos de produção ficarão em `site_games_react/dist` (ou conforme configuração do Vite).

## Solução de problemas comuns

- Se uma imagem não carregar: verifique `public/assets/img/` e confirme o nome e diferenciação de maiúsculas/minúsculas; faça *hard refresh* (Ctrl+F5).
- Se o Vite alterar a porta (por exemplo 5173 já em uso), verifique a URL exibida no terminal e abra-a.
- Ao desenvolver o site estático, sirva via HTTP (Python/http-server) em vez de abrir `index.html` diretamente.
- Se ao tentar `git push` ocorrer `src refspec main does not match any`, provavelmente não há commits locais ou o branch correto não existe — veja as instruções abaixo.
