# 04.7.1 Sobre a Normalização do GTIN

**A. Prefixo GS1**

A codificação do GTIN contém o "Prefixo GS1" que define a entidade GS1 que concedeu a faixa de códigos para a empresa usar na identificação dos seus produtos. Este “Prefixo” é composto por 3 algarismos, que constam no início do código GTIN do produto.

**B. Como Identificar o "Prefixo GS1"**

O GTIN pode possuir 8, 12, 13 ou 14 algarismos, e segue abaixo uma forma prática de identificar o "Prefixo GS1":

- Normalizar o tamanho do campo em 14 posições numéricas, com zeros não significativos à esquerda;
- Se as primeiras 6 posições do GTIN normalizado for = Zeros (GTIN-8):
  - Prefixo GS1: posições 7 a 9 do GTIN normalizado;
- Se as primeiras 6 posições do GTIN normalizado for <> Zeros (GTIN-12, 13 ou 14):
  - Prefixo GS1: posições 2 a 4 do GTIN normalizado;

**Obs. 1**: A GS1-Brasil é identificada pelo Prefixo 789 e 790, e não temos o uso do GTIN-12 para produtos produzidos no País.

**Obs. 2**: O GTIN-14 na verdade é uma variação do GTIN-13, onde a primeira posição identifica um agrupamento dos produtos identificados pelo GTIN-13. O primeiro algarismo do GTIN-14 não pode ser zero.

**C. Prefixo GS1 não identificando um País**

O "Prefixo GS1" identifica uma entidade GS1 associada e normalmente isso identifica também um País. Existem casos especiais, onde o prefixo GS1 não identifica um País, por exemplo:

- Faixa de códigos GTIN que podem ser usados internamente na empresa;
- Faixa de códigos GTIN para Jornais, Revistas periódicas e Livros;
- Outros.

**D. "Prefixo GS1" para a GS1 Brasil**

Para efeito dessa consulta, estão disponíveis somente os GTIN concedidos pela GS1 Brasil, identificados pelo “Prefixo GS1” = 789 ou 790.
