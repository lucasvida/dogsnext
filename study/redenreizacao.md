## SSG (Static Site Generation)

O **SSG** é o método de renderização onde as páginas HTML são geradas uma única vez no momento do **build** (compilação) da aplicação. 

### Como funciona:
- Ao rodar o comando `next build`, o Next.js pré-renderiza a página e a transforma em um arquivo HTML estático.
- Esse arquivo fica salvo no servidor (ou CDN) e é entregue instantaneamente para o usuário quando ele acessa a URL.
- No Next.js (App Router), qualquer página que não use funções dinâmicas (como `headers()`, `cookies()` ou buscas de dados com cache persistente) é tratada como SSG por padrão.

### Vantagens:
1. **Velocidade Extrema**: O servidor não precisa processar código Ruby/Node/Python a cada visita, apenas entrega um arquivo pronto.
2. **SEO**: Como o conteúdo já vem preenchido no HTML original, os motores de busca indexam a página perfeitamente.
3. **Segurança e Custo**: Menos processamento no servidor significa custos menores e menos superfície de ataque.

## SSR (Server Side Rendering)

O **SSR** é o método de renderização onde o HTML da página é gerado no servidor **a cada nova requisição** (sempre que o usuário acessa ou atualiza a página).

### Como funciona:
- Quando o usuário solicita uma URL, o servidor recebe a requisição, busca os dados necessários (no banco ou API) e monta o HTML completo naquele momento.
- Só depois de montar o HTML é que o servidor envia a resposta para o navegador do usuário.
- No Next.js (App Router), você ativa o SSR usando funções como `headers()` ou `cookies()`, ou configurando um fetch com `{ cache: 'no-store' }`.

### Vantagens:
1. **Dados em Tempo Real**: Perfeito para informações que mudam constantemente (ex: preços de ações, placar de jogos).
2. **Personalização**: Ideal para conteúdo que depende do usuário logado (ex: "Olá, João").
3. **Sempre Atualizado**: Você tem a garantia de que o usuário nunca verá um conteúdo antigo.

### Desvantagens:
- **Latência**: A resposta pode demorar um pouco mais, pois o servidor precisa processar a página em todos os acessos.
- **Custo**: Exige mais CPU do servidor em comparação ao SSG.
