# Grupo LA. Detalhamento Específico de Combustíveis

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **162a** | **comb (LA01)** | **CG** | **I90** |  | **1-1** |  | **Informações específicas para combustíveis líquidos e lubrificantes<br>Informar apenas para operações com combustíveis líquidos e lubrificantes.** |
| 162b | cProdANP (LA02) | E | LA01 | N | 1-1 | 9 | Código de produto da ANP<br>Utilizar a codificação de produtos do Sistema de Informações de Movimentação de Produtos - SIMP (http://www.anp.gov.br/simp/). (NT 2012/003) |
| 162b1 | pMixGN (LA03) | E | LA01 | N | 0-1 | 2v4 | Percentual de Gás Natural para o produto GLP (cProdANP=210203001)<br>(Excluído no leiaute 4.0 - NT2016.002) |
| 162b1 | descANP (LA03) | E | LA01 | N | 1-1 | 2-95 | Descrição do produto conforme ANP<br>Utilizar a descrição de produtos do Sistema de Informações de Movimentação de Produtos - SIMP (http://www.anp.gov.br/simp/). Incluído na NT2016.002) |
| 162b2 | pGLP (LA03a) | E | LA01 | N | 0-1 | 3v4 | Percentual do GLP derivado do petróleo no produto GLP (cProdANP=210203001)<br>Informar em número decimal o percentual do GLP derivado de petróleo no produto GLP. Valores de 0 a 100. (Incluído na NT2016.002) |
| 162b3 | pGNn (LA03b) | E | LA01 | N | 0-1 | 3v4 | Percentual de Gás Natural Nacional – GLGNn para o produto GLP (cProdANP=210203001)<br>Informar em número decimal o percentual do Gás Natural Nacional – GLGNn para o produto GLP. Valores de 0 a 100. (Incluído na NT2016.002) |
| 162b4 | pGNi (LA03c) | E | LA01 | N | 0-1 | 3v4 | Percentual de Gás Natural Importado – GLGNi para o produto GLP (cProdANP=210203001)<br>Informar em número decimal o percentual do Gás Natural Importado – GLGNi para o produto GLP. Valores de 0 a 100. (Incluído na NT2016.002) |
| 162b5 | vPart (LA03d) | E | LA01 | N | 0-1 | 13v2 | Valor de partida (cProdANP=210203001)<br>Deve ser informado neste campo o valor por quilograma sem ICMS. (Incluído na NT2016.002) |
| 162c | CODIF (LA04) | E | LA01 | N | 0-1 | 1- 21 | Código de autorização / registro do CODIF<br>Informar apenas quando a UF utilizar o CODIF (Sistema de Controle do Diferimento do Imposto nas Operações com AEAC - Álcool Etílico Anidro Combustível). |
| 162d | qTemp (LA05) | E | LA01 | N | 0-1 | 12v4 | Quantidade de combustível faturada à temperatura ambiente.<br>Informar quando a quantidade faturada informada no campo "prod/qCom" (id:I10) tiver sido ajustada para uma temperatura diferente da ambiente. |
| 162e | UFCons (LA06) | E | LA01 | C | 1-1 | 2 | Sigla da UF de consumo<br>Informar a UF de consumo. Informar "EX" para Exterior. |
| **162f** | **CIDE (LA07)** | **G** | **LA01** |  | **0-1** |  | **Informações da CIDE<br>Grupo de informações da CIDE** |
| 162g | qBCProd (LA08) | E | LA07 | N | 1-1 | 12v0-4 | BC da CIDE<br>Informar a BC da CIDE em quantidade |
| 162h | vAliqProd (LA09) | E | LA07 | N | 1-1 | 11v4 | Valor da alíquota da CIDE<br>Informar o valor da alíquota em reais da CIDE |
| 162i | vCIDE (LA10) | E | LA07 | N | 1-1 | 13v2 | Valor da CIDE<br>Informar o valor da CIDE |
| **162j** | **encerrante (LA11)** | **G** | **LA01** |  | **0-1** |  | **Informações do grupo de “encerrante”<br>Informações do grupo de “encerrante” disponibilizado por hardware específico acoplado à bomba de Combustível, definido no controle da venda do Posto Revendedor de Combustível. (Grupo incluído na NT 2015/002)** <!-- p.25 --> |
| 162k | nBico (LA12) | E | LA11 | N | 1-1 | 1 - 3 | Número de identificação do bico utilizado no abastecimento<br>Informar o número do bico utilizado no abastecimento. |
| 162l | nBomba (LA13) | E | LA11 | N | 0-1 | 1 - 3 | Número de identificação da bomba ao qual o bico está interligado<br>Caso exista, informar o número da bomba utilizada. |
| 162m | nTanque (LA14) | E | LA11 | N | 1-1 | 1 - 3 | Número de identificação do tanque ao qual o bico está interligado<br>Informar o número do tanque utilizado. |
| 162n | vEncIni (LA15) | E | LA11 | N | 1-1 | 12v3 | Valor do Encerrante no início do abastecimento<br>Informar o valor da leitura do contador (Encerrante) no início do abastecimento |
| 162o | vEncFin (LA16) | E | LA11 | N | 1-1 | 12v3 | Valor do Encerrante no final do abastecimento<br>Informar o valor da leitura do contador (Encerrante) no término do abastecimento |
