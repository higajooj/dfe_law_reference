<!-- p.129 -->
# 8.1. Tabela de Código de UF do IBGE

A NF-e utiliza a codificação adotada pelo Instituto Brasileiro de Geografia e Estatística (IBGE) para representar o código da UF, como pode ser visto na Tabela 8-1.

**Tabela 8-1 – Tabela de Código de UF do IBGE**

| Região Norte | Região Nordeste | Região Sudeste | Região Sul | Região Centro-Oeste |
|---|---|---|---|---|
| 11-Rondônia<br>12-Acre<br>13-Amazonas<br>14-Roraima<br>15-Pará<br>16-Amapá<br>17-Tocantins | 21-Maranhão<br>22-Piauí<br>23-Ceará<br>24-Rio Grande do Norte<br>25-Paraíba<br>26-Pernambuco<br>27-Alagoas<br>28-Sergipe<br>29-Bahia | 31-Minas Gerais<br>32-Espírito Santo<br>33-Rio de Janeiro<br>35-São Paulo | 41-Paraná<br>42-Santa Catarina<br>43-Rio Grande do Sul | 50-Mato Grosso do Sul<br>51-Mato Grosso<br>52-Goiás<br>53-Distrito Federal |

# 8.2. Tabela de Código de Município do IBGE

A NF-e utiliza a codificação adotada pelo Instituto Brasileiro de Geografia e Estatística (IBGE) para representar o código de município. Este código é composto de 7 dígitos numéricos, com as duas primeiras representando a UF. Os códigos de município das capitais dos estados podem ser encontrados na Tabela 8-2. Os códigos dos demais municípios podem ser encontrados na página daquele Instituto na Internet (https://www.ibge.gov.br).

**Tabela 8-2 – Brasília e Capitais de Estado na Tabela de Código de Município do IBGE**

| Município | código | Estado | código |
|---|---|---|---|
| Aracaju | 2800308 | Sergipe | 28 |
| Belém | 1501402 | Pará | 15 |
| Belo Horizonte | 3106200 | Minas Gerais | 31 |
| Boa Vista | 1400100 | Roraima | 14 |
| Brasília | 5300108 | Distrito Federal | 53 |
| Campo Grande | 5002704 | Mato Grosso do Sul | 50 |
| Cuiabá | 5103403 | Mato Grosso | 51 |
| Curitiba | 4106902 | Paraná | 41 |
| Florianópolis | 4205407 | Santa Catarina | 42 |
| Fortaleza | 2304400 | Ceará | 23 |
| Goiânia | 5208707 | Goiás | 52 |
| João Pessoa | 2507507 | Paraíba | 25 |
| Macapá | 1600303 | Amapá | 16 |
| Maceió | 2704302 | Alagoas | 27 |
| Manaus | 1302603 | Amazonas | 13 |
| Natal | 2408102 | Rio Grande do Norte | 24 |
| Palmas | 1721000 | Tocantins | 17 |
| Porto Alegre | 4314902 | Rio Grande do Sul | 43 |
| Porto Velho | 1100205 | Rondônia | 11 |
| Recife | 2611606 | Pernambuco | 26 |
| Rio Branco | 1200401 | Acre | 12 |
| Rio de Janeiro | 3304557 | Rio de Janeiro | 33 |
| Salvador | 2927408 | Bahia | 29 |
| São Luís | 2111300 | Maranhão | 21 |
| São Paulo | 3550308 | São Paulo | 35 |
| Teresina | 2211001 | Piauí | 22 |
| Vitória | 3205309 | Espírito Santo | 32 |

<!-- p.130 -->
Informar o código 9999999 e o nome do município “EXTERIOR” para as operações que envolvam localidades do exterior.

Quando a operação envolver regiões administrativas (Ex. Cidades-satélites do DF), deve ser considerado o município sede como localidade da operação.

## 8.2.1. Validação do Código de Município

O Código de Município do IBGE tem a composição que segue:

- UUNNNND

Onde:

- UU = Código da UF do IBGE
- NNNN = Número de ordem dentro da UF;
- D = Dígito de Controle módulo 10

Validação possível:

- Extensão máxima: 7 dígitos;
- Extensão mínima: 7 dígitos;
- Código da UF: deve ser válido, conforme Tabela de UF do IBGE;
- Número de ordem dentro da UF: não pode ser zero;
- Dígito de Controle: módulo 10 (pesos 2 e 1)

Obs 1: Considerar a soma dos algarismos no somatório dos produtos dos pesos. Ou seja, se o produto for superior a 9 os dois algarismos devem ser somados.  
Obs 2: Se o resto da divisão for zero, considerar o dígito verificador igual a zero.

## 8.2.2. Exemplo de Cálculo do Dígito de Controle do Código de Município

Exemplo 1:  
Código Município IBGE = 355030 D (Município de São Paulo)

| A. CÓDIGO MUN | 3 | 5 | 5 | 0 | 3 | 0 |
|---|---|---|---|---|---|---|
| B. PESOS | 1 | 2 | 1 | 2 | 1 | 2 |
| C. PONDERAÇÃO (A * B) | 3 | 10 | 5 | 0 | 3 | 0 |
| D. SOMA ALGARISMOS | 3 | 1 | 5 | 0 | 3 | 0 |

- O somatório da soma dos algarismos é: 3 + 1 + 5 + 0 + 3 + 0 = 12
- Dividindo o somatório por 10 teremos: 12 / 10 = 1, com um resto valendo 2
- O dígito verificador é: DV = 10 – (resto da divisão), portanto 10 – 2 = 8
- Neste caso, o Dígito Verificador = 8

Exemplo 2:  
Código Município IBGE = 211130 D (Município de São Luís)

| A. CÓDIGO MUN | 2 | 1 | 1 | 1 | 3 | 0 |
|---|---|---|---|---|---|---|
| B. PESOS | 1 | 2 | 1 | 2 | 1 | 2 |
| C. PONDERAÇÃO (A * B) | 2 | 2 | 1 | 2 | 3 | 0 |
| D. SOMA ALGARISMOS | 2 | 2 | 1 | 2 | 3 | 0 |

- O somatório da soma dos algarismos é: 2 + 2 + 1 + 2 + 3 + 0 = 10
- Dividindo o somatório por 10 teremos: 10 / 10 = 1, com um resto valendo 0
- O dígito verificador é: DV = 10 – (resto da divisão), portanto 10 – 0 = 10
- Neste caso, o Dígito Verificador = 0

<!-- p.131 -->
O código de Município do IBGE dos seguintes Municípios na tabela do IBGE tem o dígito verificador inválido; para estes municípios deve ser usado o DV respectivo, em vez do calculado:

- 4305871 – Coronel Barros/RS;
- 2201919 – Bom Princípio do Piauí/PI;
- 2202251 – Canavieira /PI;
- 2201988 – Brejo do Piauí/PI;
- 2611533 – Quixaba/PE;
- 3117836 – Cônego Marinho/MG;
- 3152131 – Ponto Chique/MG;
- 5203939 – Buriti de Goiás/GO;
- 5203962 – Buritinópolis/GO;

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
