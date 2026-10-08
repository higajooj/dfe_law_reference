# 7.2 Tratamento de caracteres especiais no texto de XML

Todos os textos de um documento XML passam por uma análise do "parser" específico da linguagem. Alguns caracteres afetam o funcionamento deste "parser", não podendo aparecer no texto de uma forma não controlada.

Os caracteres que afetam o "parser" são:

- > (Sinal de maior),
- < (Sinal de menor),
- & (e-comercial),
- " (aspas),
- ' (sinal de apóstrofe).

<!-- p.67 -->

Alguns destes caracteres podem aparecer especialmente nos campos de Razão Social, Endereço e Informação Adicional. Para resolver o problema, é recomendável o uso de uma sequência de "escape" em substituição ao respectivo caractere.

Ex. a denominação: DIAS & DIAS LTDA deve ser informada como: DIAS &amp; DIAS LTDA no XML para não afetar o funcionamento do "parser".

| Caractere | Sequência de escape |
|---|---|
| < | &lt; |
| > | &gt; |
| & | &amp; |
| " | &quot; |
| ' | &#39; |
