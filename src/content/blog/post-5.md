---
title: "O problema XY"
---

O problema XY é perguntar sobre a solução que você tentou em vez de perguntar sobre o problema realmente enfrentado. Isso leva a um grande desperdício de tempo e energia, tanto de quem pede ajuda quanto de quem oferece ajuda.

- Usuário quer fazer X.
- Usuário não sabe como fazer X, mas acha que pode desbravar o caminho para uma solução se ele fizer Y.
- Usuário também não sabe como fazer Y.
- Usuário pede ajuda para fazer Y.
- Outros tentam ajudar o usuário com Y, mas ficam confusos porque Y parece um problema estranho de resolver.
- Depois de muita interação e tempo desperdiçado, finalmente fica claro que o usuário realmente queria ajuda com X, e que Y nem era uma solução adequada para X.

O problema ocorre quando pessoas ficam empacadas no que acreditam ser a solução e são incapazes de dar um passo atrás e explicar o problema completamente.

### O que fazer a respeito?

1. Sempre inclua informação sobre o panorama geral junto com qualquer solução tentada.
2. Se alguém pedir mais informação, forneça detalhes.
3. Se há outras soluções que você descartou, compartilhe o porquê de você tê-las descartado. Isso dá mais informação sobre o que você quer fazer.

Lembre-se de que se as suas teorias sobre o problema estivessem corretas, você não estaria pedindo ajuda em primeiro lugar, certo?

### Exemplos

#### Exemplo 1

n00b não quer realmente os últimos 3 caracteres do nome de um arquivo, ele quer as extensões do arquivo, então por que pedir os últimos 3 caracteres?

> n00b: Como posso pegar os 3 últimos caracteres no nome de um arquivo?
>
> feline: Se eles estiverem em uma variável: echo ${foo: -3}
>
> feline: Por que 3 caracteres? O que você REALMENTE quer?
>
> feline: Você quer a extensão?
>
> n00b: Sim.
>
> feline: Não há garantia de que todo arquivo vai ter uma extensão com três caracteres,
>
> feline: então pegar os últimos 3 caracteres não resolve o problema.
>
> feline: echo ${foo##\*.}

#### Exemplo 2

Se Angela tivesse explicado desde o início que ela quer prevenir que outros detectem seu sistema operacional, essa poderia ter sido uma discussão muito mais curta e produtiva.

> Angela: 'nmap -O -A 127.0.0.1' retorna algumas linhas com 'OS:'. Como alterá-las?
>
> Obama: Olhe o código-fonte do nmap, descubra como ele identifica a parte Linux, então reescreva sua pilha TCP/IP para não operar de uma forma que o nmap consiga detectar.
>
> Angela: Sim, mas eu não sei nada sobre a api do sistema linux.
>
> Obama: Bem, o fingerprint do nmap é baseado na forma que a pilha TCP/IP funciona, não tem outro jeito senão reescrever as partes apropriadas dessa pilha.
>
> Angela: Eu realmente preciso evitar essas mensagens. Será que com o iptables consigo fazer isso?
>
> Obama: Bem, não use OS detection ou version scanning.
>
> Angela: Eu quero impedir que outros saibam o tipo do meu sistema operacional

[Fonte (Inglês)](https://xyproblem.info/)
