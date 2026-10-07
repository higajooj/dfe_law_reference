<!-- p.131 -->
# 8.3. Tabela de Código de País do BACEN

Para o preenchimento dos campos de códigos de países deve ser utilizada a Tabela de País do Banco Central do Brasil, disponibilizada no Portal Nacional da Nota Fiscal Eletrônica (www.nfe.fazenda.gov.br), aba “Documentos”, opção “Diversos”.

**Tabela 8-3 – Exemplos de Códigos de País na Tabela do BACEN**

| País | código | País | código | País | código |
|---|---|---|---|---|---|
| Brasil | 1058 | Espanha | 2453 | Estados Unidos | 2496 |
| Argentina | 0639 | França | 2755 | China, República Popular, | 1600 |
| Chile | 1589 | Itália | 3867 | Coréia, República da, | 1902 |
| Paraguai | 5860 | Portugal | 6076 | Formosa | 1619 |
| Uruguai | 8451 | Reino Unido | 6289 | Japão | 3999 |

A validação do país deve considerar a data de emissão da NF-e para verificar se o país é válido.

## 8.3.1. Validação do Código de País do BACEN

Composição do Código de País:

- NNND

Onde:

- NNN = Número de ordem do Código do País;
- D = Dígito de Controle módulo 11.

## 8.3.2. Validação Possível do Código de País do BACEN

- Extensão máxima: 4 dígitos;
- Extensão mínima: 2 dígitos;
- Dígito de Controle: módulo 11, pesos 2 a 9

Obs.: Se o resto da divisão for zero ou 1, considerar o dígito verificador igual a zero.

## 8.3.3. Exemplo de Cálculo do Dígito de Controle do Código de País

Exemplo 1 – Código País = 105 (Brasil):

| A. CÓDIGO PAÍS | 1 | 0 | 5 |
|---|---|---|---|
| B. PESOS | 4 | 3 | 2 |
| C. PRODUTOS (A * B) | 4 | 0 | 10 |

<!-- p.132 -->
- O somatório dos produtos é: 4 + 0 + 10 = 14
- Dividindo o somatório por 11 teremos: 14 / 11 = 1, com resto valendo 3
- Considerar: 11 – (resto da divisão), portanto: 11 – 3 = 8
- Neste caso, o Dígito Verificador = 8

Exemplo 2 – Código País = 586 (Paraguai):

| A. CÓDIGO PAÍS | 5 | 8 | 6 |
|---|---|---|---|
| B. PESOS | 4 | 3 | 2 |
| C. PRODUTOS (A * B) | 20 | 24 | 12 |

O somatório dos produtos é: 20 + 24 + 12 = 56

- Dividindo o somatório por 11 teremos: 56 / 11 = 5, com resto valendo 1
- Considerar: 11 – (resto da divisão), portanto: 11 – 1 = 10
- Neste caso, o Dígito Verificador = 0

O código de País do BACEN dos seguintes países tem o DV – dígito verificador inválido:

- 1504 – GUERNSEY, ILHA DO CANAL (INCLUI ALDERNEY E SARK)
- 1508 – JERSEY, ILHA DO CANAL
- 4525 – MADEIRA, ILHA DA
- 3595 – MAN, ILHA DE
- 4985 – MONTENEGRO
- 6781 – SAINT KITTS E NEVIS
- 7370 – SERVIA

As aplicações dos Estados e dos emissores devem utilizar os códigos de País do BACEN sem validação do DV – dígito verificador, da mesma forma que consta da tabela de código de país do BACEN.
