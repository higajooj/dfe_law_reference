<!-- p.18 -->
# 3.1. Grupo LA. Detalhamento Específico de Combustíveis

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **162a / LA01** | **comb** | **CG** | **I90** | **-** | **1-1** | **-** | **Informações específicas para combustíveis líquidos e lubrificantes**<br>Informar apenas para operações com combustíveis líquidos e lubrificantes. |
| 162b / LA02 | cProdANP | E | LA01 | N | 1-1 | 9 | Código de produto da ANP<br>Utilizar a Tabela de Código de Produtos da ANP, publicada no Portal Nacional da NF-e, no grupo “Documentos”, opção “Diversos” |
| ~~162b1 / LA03~~ | ~~pMixGN~~ | ~~E~~ | ~~LA01~~ | ~~N~~ | ~~0-1~~ | ~~2v4~~ | ~~Percentual de Gás Natural para o produto GLP (cProdANP=210203001)~~<br>(Excluído no leiaute 4.0 - NT2016.002) |
| 162b1 / LA03 | descANP | E | LA01 | N | 1-1 | 2-95 | Descrição do produto conforme ANP<br>Utilizar a Tabela de Código de Produtos da ANP, publicada no Portal Nacional da NF-e, no grupo “Documentos”, opção “Diversos” |
| 162b2 / LA03a | pGLP | E | LA01 | N | 0-1 | 3v4 | Percentual do GLP derivado do petróleo no produto GLP (cProdANP=210203001)<br>Informar em número decimal o percentual do GLP derivado de petróleo no produto GLP. Valores de 0 a 100. (Incluído na NT2016.002) |
| 162b3 / LA03b | pGNn | E | LA01 | N | 0-1 | 3v4 | Percentual de Gás Natural Nacional – GLGNn para o produto GLP (cProdANP=210203001)<br>Informar em número decimal o percentual do Gás Natural Nacional – GLGNn para o produto GLP. Valores de 0 a 100. (Incluído na NT2016.002) |
| 162b4 / LA03c | pGNi | E | LA01 | N | 0-1 | 3v4 | Percentual de Gás Natural Importado – GLGNi para o produto GLP (cProdANP=210203001)<br>Informar em número decimal o percentual do Gás Natural Importado – GLGNi para o produto GLP. Valores de 0 a 100. (Incluído na NT2016.002) |

> **Revogado/Descontinuado:** a linha 162b1 / LA03 (pMixGN) está riscada no original; a observação “Excluído no leiaute 4.0 - NT2016.002” não está riscada.

<!-- p.19 -->
| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| 162b5 / LA03d | vPart | E | LA01 | N | 0-1 | 13v2 | Valor de partida (cProdANP=210203001)<br>Deve ser informado neste campo o valor por quilograma sem ICMS. (Incluído na NT2016.002) |
| 162c / LA04 | CODIF | E | LA01 | N | 0-1 | 1- 21 | Código de autorização / registro do CODIF<br>Informar apenas quando a UF utilizar o CODIF (Sistema de Controle do Diferimento do Imposto nas Operações com AEAC - Álcool Etílico Anidro Combustível). |
| 162d / LA05 | qTemp | E | LA01 | N | 0-1 | 12v4 | Quantidade de combustível faturada à temperatura ambiente.<br>Informar quando a quantidade faturada informada no campo "prod/qCom" (id:I10) tiver sido ajustada para uma temperatura diferente da ambiente. |
| 162e / LA06 | UFCons | E | LA01 | C | 1-1 | 2 | Sigla da UF de consumo<br>Informar a UF de consumo. Informar "EX" para Exterior. |
| **162f / LA07** | **CIDE** | **G** | **LA01** | **-** | **0-1** | **-** | **Informações da CIDE**<br>Grupo de informações da CIDE |
| 162g / LA08 | qBCProd | E | LA07 | N | 1-1 | 12v0-4 | BC da CIDE<br>Informar a BC da CIDE em quantidade |
| 162h / LA09 | vAliqProd | E | LA07 | N | 1-1 | 11v4 | Valor da alíquota da CIDE<br>Informar o valor da alíquota em reais da CIDE |
| 162i / LA10 | vCIDE | E | LA07 | N | 1-1 | 13v2 | Valor da CIDE<br>Informar o valor da CIDE |
| **162j / LA11** | **encerrante** | **G** | **LA01** | **-** | **0-1** | **-** | **Informações do grupo de “encerrante”**<br>Informações do grupo de “encerrante” disponibilizado por hardware específico acoplado à bomba de Combustível, definido no controle da venda do Posto Revendedor de Combustível. (Grupo incluído na NT 2015/002) |
| 162k / LA12 | nBico | E | LA11 | N | 1-1 | 1 - 3 | Número de identificação do bico utilizado no abastecimento<br>Informar o número do bico utilizado no abastecimento. |
| 162l / LA13 | nBomba | E | LA11 | N | 0-1 | 1 - 3 | Número de identificação da bomba ao qual o bico está interligado<br>Caso exista, informar o número da bomba utilizada. |
| 162m / LA14 | nTanque | E | LA11 | N | 1-1 | 1 - 3 | Número de identificação do tanque ao qual o bico está interligado<br>Informar o número do tanque utilizado. |
| 162n / LA15 | vEncIni | E | LA11 | N | 1-1 | 12v3 | Valor do Encerrante no início do abastecimento<br>Informar o valor da leitura do contador (Encerrante) no início do abastecimento |
| 162o / LA16 | vEncFin | E | LA11 | N | 1-1 | 12v3 | Valor do Encerrante no final do abastecimento<br>Informar o valor da leitura do contador (Encerrante) no término do abastecimento |
| 162p / LA17 | pBio | E | LA01 | N | 0-1 | 3v4 | Percentual do índice de mistura do Biodiesel (B100) no Óleo Diesel B ou do Etanol Anidro na Gasolina C instituído pelo órgão regulamentador<br>Informar em número decimal o percentual do índice de mistura do Biodiesel para o produto Óleo Diesel B ou o percentual do índice de mistura do Etanol Anidro para o produto Gasolina C. Valores maiores que 0 e menores ou iguais a 100. |
| **162q / LA18** | **origComb** | **G** | **LA01** | **-** | **0-30** | **-** | **Grupo indicador da origem do combustível**<br>Obrigatoriedade de preenchimento do grupo conforme Tabela de Combustíveis Sujeitos à Tributação Monofásica (publicada no Portal Nacional da NF-e, no grupo “Documentos”, opção “Diversos”) |

<!-- p.20 -->
| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| 162r / LA19 | indImport | E | LA18 | N | 1-1 | 1 | Indicador de importação<br>0=Nacional;<br>1=Importado; |
| 162s / LA20 | cUFOrig | E | LA18 | N | 1-1 | 2 | Código da UF<br>UF de origem do produtor ou do importador. Utilizar a tabela do IBGE. |
| 162t / LA21 | pOrig | E | LA18 | N | 1-1 | 3v4 | Percentual originário para a UF<br>Informar em número decimal o percentual originário da UF. Esse valor será obtido através dos Anexos de Combustíveis previstos em Ato Cotepe. Valores maiores que 0 e menores ou iguais a 100. |
