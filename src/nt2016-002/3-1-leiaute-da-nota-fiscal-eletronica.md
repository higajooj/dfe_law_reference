# 3.1 Leiaute da Nota Fiscal Eletrônica



### Grupo B. Identificação da Nota Fiscal Eletrônica

Retirado o campo indicador da Forma de Pagamento do Grupo B. Criação da opção “5” para informar Operação presencial, fora do estabelecimento

(venda ambulante).

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| 9 | B05 | indPag | Indicador da forma de pagamento | E | B01 | N | 1-1 | 1 | 0=Pagamento à vista;<br>1=Pagamento a prazo;<br>2=Outros. |
| 29.2 | B25b | indPres | Indicador de presença do comprador no estabelecimento comercial no momento da operação | E | B01 | N | 1-1 | 1 | 0=Não se aplica (por exemplo, Nota Fiscal complementar ou de ajuste);<br>1=Operação presencial;<br>2=Operação não presencial, pela Internet;<br>3=Operação não presencial, Teleatendimento;<br>4=NFC-e em operação com entrega a domicílio;<br>5=Operação presencial, fora do estabelecimento;<br>9=Operação não presencial, outros. |

### Grupo BA. Documento Fiscal Referenciado

Criação de opção de referenciar Nota Fiscal Modelo 2.

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **29x.3** | **BA03** | **refNF** | **Informação da NF modelo 1/1A ou NF modelo 2 referenciada** | **CG** | **BA01** |  | **1-1** |  |  |
| 29x.7 | BA07 | mod | Modelo do Documento Fiscal | E | BA03 | N | 1-1 | 2 | 01=modelo 01<br>02=modelo 02 |

### Grupo I. Produtos e Serviços da NF-e

Novos campos para informar se o produto foi fabricado em escala relevante ou não, conforme Cláusula 23 do Convênio ICMS 52/2017 e, em caso

de produção em escala NÃO relevante, o campo CNPJ do Fabricante deve ser informado.

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| <!-- p.19 --> **100** | **I01** | **prod** | **Detalhamento de Produtos e Serviços** | **G** | **H01** |  | **1-1** |  |  |
| 101 | I02 | cProd | Código do produto ou serviço | E | I01 | C | 1-1 | 1-60 | Preencher com CFOP, caso se trate de itens não relacionados com mercadorias/produtos e que o contribuinte não possua codificação própria. Formato:<br>”CFOP9999” |
| 102 | I03 | cEAN | GTIN (Global Trade Item Number) do produto, antigo código EAN ou código de barras | E | I01 | N | 1-1 | 0,8,12 13,14 | Preencher com o código GTIN-8, GTIN-12, GTIN-13 ou GTIN-14 (antigos códigos EAN, UPC e DUN-14), não informar o conteúdo da TAG em caso de o produto não possuir este código. |
| 103 | I04 | xProd | Descrição do produto ou serviço | E | I01 | C | 1-1 | 1-120 |  |
| 104 | I05 | NCM | Código NCM com 8 dígitos | E | I01 | N | 1-1 | 2, 8 | Obrigatória informação do NCM completo (8 dígitos).<br>Nota: Em caso de item de serviço ou item que não tenham produto (ex. transferência de crédito, crédito do ativo imobilizado, etc.), informar o valor 00 (dois zeros).<br>(NT 2014/004) |
| 104a | I05a | NVE | Codificação NVE - Nomenclatura de Valor Aduaneiro e Estatística. | E | I01 | C | 0-8 | 6 | Codificação opcional que detalha alguns NCM.<br>Formato: duas letras maiúsculas e 4 algarismos. Se a mercadoria se enquadrar em mais de uma codificação, informar até 8 codificações principais.<br>Vide: Anexo XII.03 - Identificador NVE. |
| **104b** | **I05b** | **-x-** | **Sequência XML** | **G** | **I01** |  | **0-1** |  |  |
| 104d | I05c | CEST | Código CEST | E | I05b | N | 1-1 | 7 | Código Especificador da Substituição Tributária – CEST, que estabelece a sistemática de uniformização e identificação das mercadorias e bens passíveis de sujeição aos regimes de substituição tributária e de antecipação de recolhimento do ICMS |
| 104e | I05d | indEscala | Indicador de Escala Relevante | E | I05b | C | 0-1 | 1 | Indicador de Produção em escala relevante, conforme Cláusula 23 do Convenio ICMS 52/2017:<br>S - Produzido em Escala Relevante;<br>N – Produzido em Escala NÃO Relevante.<br>Nota: preenchimento obrigatório para produtos com NCM relacionado no Anexo XXVII do Convenio 52/2017 |
| 104f | I05e | CNPJFab | CNPJ do Fabricante da Mercadoria | E | I05b | N | 0-1 | 14 | CNPJ do Fabricante da Mercadoria, obrigatório para produto em escala NÃO relevante. |
| 104g | I05f | cBenef | Código de Benefício Fiscal na UF aplicado ao item | E | I01 | C | 0-1 | 8,10 | Código de Benefício Fiscal utilizado pela UF, aplicado ao item.<br>Obs.: Deve ser utilizado o mesmo código adotado na EFD e outras declarações, nas UF que o exigem. |
| <!-- p.20 --> 105 | I06 | EXTIPI | EX_TIPI | E | I01 | N | 0-1 | 2-3 | Preencher de acordo com o código EX da TIPI. Em caso de serviço, não incluir a TAG. |
| 107 | I08 | CFOP | Código Fiscal de Operações e Prestações | E | I01 | N | 1-1 | 4 | Utilizar Tabela de CFOP. |
| 108 | I09 | uCom | Unidade Comercial | E | I01 | C | 1-1 | 1-6 | Informar a unidade de comercialização do produto. |
| 109 | I10 | qCom | Quantidade Comercial | E | I01 | N | 1-1 | 11v0-4 | Informar a quantidade de comercialização do produto (v2.0). |
| 109a | I10a | vUnCom | Valor Unitário de Comercialização | E | I01 | N | 1-1 11v0-10 |  | Informar o valor unitário de comercialização do produto, campo meramente informativo, o contribuinte pode utilizar a precisão desejada (0-10 decimais). Para efeitos de cálculo, o valor unitário será obtido pela divisão do valor do produto pela quantidade comercial. (v2.0) |
| 110 | I11 | vProd | Valor Total Bruto dos Produtos ou Serviços | E | I01 | N | 1-1 | 13v2 | O valor do ICMS faz parte do Valor Total Bruto |
| 111 | I12 | cEANTrib | GTIN (Global Trade Item Number) da unidade tributável, antigo código EAN ou código de barras | E | I01 | N | 1-1 | 0,8,12, 13,14 | Preencher com o código GTIN-8, GTIN-12, GTIN-13 ou GTIN-14 (antigos códigos EAN, UPC e DUN-14) da unidade tributável do produto, não informar o conteúdo da TAG em caso de o produto não possuir este código. |
| 112 | I13 | uTrib | Unidade Tributável | E | I01 | C | 1-6 | 1-6 |  |
| 113 | I14 | qTrib | Quantidade Tributável | E | I01 | N | 1-1 | 11v0-4 | Informar a quantidade de tributação do produto (v2.0). |
| 113a | I14a | vUnTrib | Valor Unitário de tributação | E | I01 | N | 1-1 11v0-10 |  | Informar o valor unitário de tributação do produto, campo meramente informativo, o contribuinte pode utilizar a precisão desejada (0-10 decimais). Para efeitos de cálculo, o valor unitário será obtido pela divisão do valor do produto pela quantidade tributável (NT 2013/003). |
| 114 | I15 | vFrete | Valor Total do Frete | E | I01 | N | 0-1 | 13v2 |  |
| 115 | I16 | vSeg | Valor Total do Seguro | E | I01 | N | 0-1 | 13v2 |  |
| 116 | I17 | vDesc | Valor do Desconto | E | I01 | N | 0-1 | 13v2 |  |
| 116a | I17a | vOutro | Outras despesas acessórias | E | I01 | N | 0-1 | 13v2 | (v2.0) |
| 116b | I17b | indTot | Indica se valor do Item (vProd) entra no valor total da NF-e (vProd) | E | I01 | N | 1-1 | 1 | 0=Valor do item (vProd) não compõe o valor total da NF-e<br>1=Valor do item (vProd) compõe o valor total da NF-e (vProd) (v2.0) |

<!-- p.21 -->
### Grupo I80. Rastreabilidade de produto

Criação de novo grupo para permitir a rastreabilidade de qualquer produto sujeito a regulações sanitárias, casos de recolhimento/recall, além de

defensivos agrícolas, produtos veterinários, odontológicos, medicamentos, bebidas, águas envasadas, embalagens, etc., a partir da indicação de

informações de número de lote, data de fabricação/produção, data de validade, etc.

Obrigatório o preenchimento deste grupo no caso de medicamentos e produtos farmacêuticos.

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **128q** | **I80** | **rastro** | **Detalhamento de produto sujeito a rastreabilidade** | **G** | **I01** |  | **0-500** |  | **Informar apenas quando se tratar de produto a ser rastreado posteriormente** |
| 128r | I81 | nLote | Número do Lote do produto | E | I80 | C | 1-1 | 1-20 |  |
| 128s | I82 | qLote | Quantidade de produto no Lote | E | I80 | N | 1-1 | 8v3 |  |
| 128t | I83 | dFab | Data de fabricação/ Produção | E | I80 | D | 1-1 |  | Formato: “AAAA-MM-DD” |
| 128u | I84 | dVal | Data de validade | E | I80 | D | 1-1 |  | Formato: “AAAA-MM-DD” Informar o último dia do mês caso a validade não especifique o dia. |
| 128v | I85 | cAgreg | Código de Agregação | E | I80 | N | 0-1 | 1-20 |  |

### Grupo K. Detalhamento Específico de Medicamento e de matérias-primas farmacêuticas

Criação de campo para informar o código de Produto da ANVISA para medicamentos e matérias-primas farmacêuticas. Exclusão dos campos

específicos de medicamento que passam a fazer parte do Grupo Rastreabilidade de Produto.

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **152** | **K01** | **med** | **Detalhamento de Medicamentos e de matérias-primas farmacêuticas** | **CG** | **I90** |  | **1-1** |  | **Informar apenas quando se tratar de medicamentos ou de matérias-primas farmacêuticas.** |
| 152a | K01a | cProdANVISA | Código de Produto da ANVISA | E | K01 | C | 1-1 | 13 | Utilizar o número do registro ANVISA<br>Obs.: Para medicamento isento de registro na ANVISA, utilizar o número da decisão que o isenta, como por exemplo o número da Resolução da Diretoria Colegiada da ANVISA (RDC). |
| 153 | K02 | nLote | Número do Lote de medicamentos ou de matérias-primas farmacêuticas | E | K01 | C | 1-1 | 1-20 |  |
| 154 | K03 | qLote | Quantidade de produto no Lote de medicamentos ou de matérias-primas farmacêuticas | E | K01 | N | 1-1 | 8v3 |  |
| <!-- p.22 --> 155 | K04 | dFab | Data de fabricação | E | K01 | D | 1-1 |  | Formato: “AAAA-MM-DD” |
| 156 | K05 | dVal | Data de validade | E | K01 | D | 1-1 |  | Formato: “AAAA-MM-DD” |
| 157 | K06 | vPMC | Preço máximo consumidor | E | K01 | N | 1-1 | 13v2 |  |

### Grupo LA. Item / Combustível

Criação de campo para os percentuais de mistura do GLP e exclusão do campo pMixGN

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **162a** | **LA01** | **comb** | **Informações específicas para combustíveis líquidos e lubrificantes** | **CG** | **I90** |  | **1-1** |  | **Informar apenas para operações com combustíveis líquidos e lubrificantes.** |
| 162b | LA02 | cProdANP | Código de produto da ANP | E | LA01 | N | 1-1 | 9 | Utilizar a codificação de produtos do Sistema de Informações de Movimentação de Produtos - SIMP (http://www.anp.gov.br/simp/). (NT 2012/003) |
| 162b1 | LA03 | pMixGN | Percentual de Gás Natural para o produto GLP (cProdANP=210203001) | E | LA01 | N | 0-1 | 2v4 |  |
| 162b2 | LA03a | pGLP | Percentual do GLP derivado do petróleo no produto GLP (cProdANP=210203001) | E | LA01 | N | 0-1 | 3v4 | Informar em número decimal o percentual do GLP derivado de petróleo no produto GLP. Valores de 0 a 100. |
| 162b3 | LA03b | pGNn | Percentual de Gás Natural Nacional – GLGNn para o produto GLP (cProdANP=210203001) | E | LA01 | N | 0-1 | 3v4 | Informar em número decimal o percentual do Gás Natural Nacional – GLGNn para o produto GLP. Valores de 0 a 100. |
| 162b4 | LA03c | pGNi | Percentual de Gás Natural Importado – GLGNi para o produto GLP (cProdANP=210203001) | E | LA01 | N | 0-1 | 3v4 | Informar em número decimal o percentual do Gás Natural Importado – GLGNi para o produto GLP. Valores de 0 a 100. |
| 162b5 | LA03d | vPart | Valor de partida (cProdANP=210203001) | E | LA01 | N | 0-1 | 13v2 | Deve ser informado neste campo o valor por quilograma sem ICMS. |
| 162c | LA04 | CODIF | Código de autorização / registro do CODIF | E | LA01 | N | 0-1 | 1-21 | Informar apenas quando a UF utilizar o CODIF (Sistema de Controle do Diferimento do Imposto nas Operações com AEAC - Álcool Etílico Anidro Combustível). |
| 162d | LA05 | qTemp | Quantidade de combustível faturada à temperatura ambiente. | E | LA01 | N | 0-1 | 12v4 | Informar quando a quantidade faturada informada no campo "prod/qCom" (id:I10) tiver sido ajustada para uma temperatura diferente da ambiente. |
| <!-- p.23 --> 162e | LA06 | UFCons | Sigla da UF de consumo | E | LA01 | C | 1-1 | 2 | Informar a UF de consumo. Informar "EX" para Exterior. |
| **162f** | **LA07** | **CIDE** | **Informações da CIDE** | **G** | **LA01** |  | **0-1** |  | **Grupo de informações da CIDE** |
| 162g | LA08 | qBCProd | BC da CIDE | E | LA07 | N | 1-1 | 12v0-4 | Informar a BC da CIDE em quantidade |
| 162h | LA09 | vAliqProd | Valor da alíquota da CIDE | E | LA07 | N | 1-1 | 11v4 | Informar o valor da alíquota em reais da CIDE |
| 162i | LA10 | vCIDE | Valor da CIDE | E | LA07 | N | 1-1 | 13v2 | Informar o valor da CIDE |
| **162j** | **LA11** | **encerrante** | **Informações do grupo de “encerrante”** | **G** | **LA01** |  | **0-1** |  | **Informações do grupo de “encerrante” disponibilizado por hardware específico acoplado à bomba de Combustível, definido no controle da venda do Posto Revendedor de Combustível. (NT 2015.002)** |
| 162k | LA12 | nBico | Número de identificação do bico utilizado no abastecimento | E | LA11 | N | 1-1 | 1-3 | Informar o número do bico utilizado no abastecimento. |
| 162l | LA13 | nBomba | Número de identificação da bomba ao qual o bico está interligado | E | LA11 | N | 0-1 | 1-3 | Caso exista, informar o número da bomba utilizada. |
| 162m | LA14 | nTanque | Número de identificação do tanque ao qual o bico está interligado | E | LA11 | N | 1-1 | 1-3 | Informar o número do tanque utilizado. |
| 162n | LA15 | vEncIni | Valor do Encerrante no início do abastecimento | E | LA11 | N | 1-1 | 12v3 | Informar o valor da leitura do contador (Encerrante) no Início do abastecimento. |

| 162º | LA16 | vEncFin | Valor do Encerrante no final do abastecimento | E | LA11 | N | 1-1 | 12v3 | Informar o valor da leitura do contador (Encerrante) no Término do abastecimento. |

### Grupo N. ICMS Normal e ST

Incluídos campos para identificar o valor devido em decorrência do percentual de ICMS relativo ao Fundo de Combate à Pobreza.

### Grupo Tributação do ICMS= 00

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **165** | **N02** | **ICMS00** | **Grupo Tributação do ICMS= 00** | **CG** | **N01** |  | **1-1** |  | **Tributada integralmente** |
| 166 | N11 | orig | Origem da mercadoria | E | N02 | N | 1-1 | 1 | 0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8;<br>1 - Estrangeira - Importação direta, exceto a indicada no código 6;<br>2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7;<br>3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40% e inferior ou igual a 70%;<br>4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes;<br>5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%;<br>6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural;<br>7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural.<br>8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%; |
| <!-- p.24 --> 167 | N12 | CST | Tributação do ICMS = 00 | E | N02 | N | 1-1 | 2 | 00=Tributada integralmente. |
| 168 | N13 | modBC | Modalidade de determinação da BC do ICMS | E | N02 | N | 1-1 | 1 | 0=Margem Valor Agregado (%);<br>1=Pauta (Valor);<br>2=Preço Tabelado Máx. (valor);<br>3=Valor da operação. |
| 169 | N15 | vBC | Valor da BC do ICMS | E | N02 | N | 1-1 | 13v2 |  |
| 170 | N16 | pICMS | Alíquota do imposto | E | N02 | N | 1-1 | 3v2-4 | Alíquota do ICMS sem o FCP. Quando for o caso, informar a alíquota do FCP no campo pFCP |
| 171 | N17 | vICMS | Valor do ICMS | E | N02 | N | 1-1 | 13v2 |  |
| **171.0** | **N17.1** | **-x-** | **Sequência XML** | **G** | **N02** |  | **0-1** |  |  |
| 171.1 | N17b | pFCP | Percentual do Fundo de Combate à Pobreza (FCP) | E | N17.1 | N | 1-1 | 3v2-4 | Percentual relativo ao Fundo de Combate à Pobreza (FCP). |
| 171.2 | N17c | vFCP | Valor do Fundo de Combate à Pobreza (FCP) | E | N17.1 | N | 1-1 | 13v2 | Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP). |

### Grupo Tributação do ICMS= 10

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **172** | **N03** | **ICMS10** | **Grupo Tributação do ICMS = 10** | **CG** | **N01** |  | **1-1** |  | **Tributada e com cobrança do ICMS por substituição tributária** |
| 173 | N11 | orig | Origem da mercadoria | E | N03 | N | 1-1 | 1 | 0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8;<br>1 - Estrangeira - Importação direta, exceto a indicada no código 6;<br>2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7;<br>3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40% e inferior ou igual a 70%;<br>4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes;<br>5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%;<br>6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural;<br>7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural.<br>8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%; |
| <!-- p.25 --> 174 | N12 | CST | Tributação do ICMS = 10 | E | N03 | N | 1-1 | 2 | 10=Tributada e com cobrança do ICMS por substituição tributária |
| 175 | N13 | modBC | Modalidade de determinação da BC do ICMS | E | N03 | N | 1-1 | 1 | 0=Margem Valor Agregado (%);<br>1=Pauta (Valor);<br>2=Preço Tabelado Máx. (valor);<br>3=Valor da operação. |
| 176 | N15 | vBC | Valor da BC do ICMS | E | N03 | N | 1-1 | 13v2 |  |
| 177 | N16 | pICMS | Alíquota do imposto | E | N03 | N | 1-1 | 3v2-4 | Alíquota do ICMS sem o FCP. Quando for o caso, informar a alíquota do FCP no campo pFCP. |
| 178 | N17 | vICMS | Valor do ICMS | E | N03 | N | 1-1 | 13v2 |  |
| **178.0** | **N17.0** | **-x-** | **Sequência XML** | **G** | **N03** |  | **0-1** |  |  |
| 178.1 | N17a | vBCFCP | Valor da Base de Cálculo do FCP | E | N17.0 | N | 1-1 | 13v2 | Informar o valor da Base de Cálculo do FCP |
| 178.2 | N17b | pFCP | Percentual do Fundo de Combate à Pobreza (FCP) | E | N17.0 | N | 1-1 | 3v2-4 | Percentual relativo ao Fundo de Combate à Pobreza (FCP). |
| 178.3 | N17c | vFCP | Valor do Fundo de Combate à Pobreza (FCP) | E | N17.0 | N | 1-1 | 13v2 | Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP). |
| 179 | N18 | modBCST | Modalidade de determinação da BC do ICMS ST | E | N03 | N | 1-1 | 1 | 0=Preço tabelado ou máximo sugerido;<br>1=Lista Negativa (valor);<br>2=Lista Positiva (valor);<br>3=Lista Neutra (valor);<br>4=Margem Valor Agregado (%);<br>5=Pauta (valor); |
| 180 | N19 | pMVAST | Percentual da margem de valor Adicionado do ICMS ST | E | N03 | N | 0-1 | 3v2-4 |  |
| 181 | N20 | pRedBCST | Percentual da Redução de BC do ICMS ST | E | N03 | N | 0-1 | 3v2-4 |  |
| <!-- p.26 --> 182 | N21 | vBCST | Valor da BC do ICMS ST | E | N03 | N | 1-1 | 13v2 |  |
| 183 | N22 | pICMSST | Alíquota do imposto do ICMS ST | E | N03 | N | 1-1 | 3v2-4 | Alíquota do ICMS ST sem o FCP. Quando for o caso, informar a alíquota do FCP no campo pFCP |
| 184 | N23 | vICMSST | Valor do ICMS ST | E | N03 | N | 1-1 | 13v2 | Valor do ICMS ST retido |
| **184.0** | **N23.1** | **-x-** | **Sequência XML** | **G** | **N03** |  | **0-1** |  |  |
| 184.1 | N23a | vBCFCPST | Valor da Base de Cálculo do FCP retido por Substituição Tributária | E | N23.1 | N | 1-1 | 13v2 | Informar o valor da Base de Cálculo do FCP retido por Substituição Tributária |
| 184.2 | N23b | pFCPST | Percentual do FCP retido por Substituição Tributária | E | N23.1 | N | 1-1 | 3v2-4 | Percentual relativo ao Fundo de Combate à Pobreza (FCP) retido por substituição tributária.. |
| 184.4 | N23d | vFCPST | Valor do FCP retido por Substituição Tributária | E | N23.1 | N | 1-1 | 13v2 | Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP) retido por substituição tributária. |

### Grupo Tributação do ICMS= 20

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **185** | **N04** | **ICMS20** | **Grupo Tributação do ICMS = 20** | **CG** | **N01** |  | **1-1** |  | **Tributação com redução de base de cálculo** |
| 186 | N11 | orig | Origem da mercadoria | E | N04 | N | 1-1 | 1 | 0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8;<br>1 - Estrangeira - Importação direta, exceto a indicada no código 6;<br>2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7;<br>3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40% e inferior ou igual a 70%;<br>4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes;<br>5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%;<br>6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural;<br>7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural.<br>8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%; |
| 187 | N12 | CST | Tributação do ICMS = 20 | E | N04 | N | 1-1 | 2 | 20=Com redução de base de cálculo |
| 188 | N13 | modBC | Modalidade de determinação da BC do ICMS | E | N04 | N | 1-1 | 1 | 0=Margem Valor Agregado (%);<br>1=Pauta (Valor);<br>2=Preço Tabelado Máx. (valor);<br>3=Valor da operação. |
| <!-- p.27 --> 189 | N14 | pRedBC | Percentual da Redução de BC | E | N04 | N | 1-1 | 3v2-4 |  |
| 190 | N15 | vBC | Valor da BC do ICMS | E | N04 | N | 1-1 | 13v2 |  |
| 191 | N16 | pICMS | Alíquota do imposto | E | N04 | N | 1-1 | 3v2-4 | Alíquota do ICMS sem o FCP. Quando for o caso, informar a alíquota do FCP no campo pFCP |
| 192 | N17 | vICMS | Valor do ICMS | E | N04 | N | 1-1 | 13v2 |  |
| **192.0** | **N17.1** | **-x-** | **Sequência XML** | **G** | **N04** |  | **0-1** |  |  |
| 192.w | N17a | vBCFCP | Valor da Base de Cálculo do FCP | E | N17.1 | N | 1-1 | 13v2 | Informar o valor da Base de Cálculo do FCP |
| 192.x | N17b | pFCP | Percentual do Fundo de Combate à Pobreza (FCP) | E | N17.1 | N | 1-1 | 3v2-4 | Percentual relativo ao Fundo de Combate à Pobreza (FCP). |
| 192.y | N17c | vFCP | Valor do Fundo de Combate à Pobreza (FCP) | E | N17.1 | N | 1-1 | 13v2 | Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP). |
| **192.1** | **N27.1** | **-x-** | **Sequência XML** | **G** | **N04** |  | **0-1** |  | **Grupo opcional.** |
| 192.2 | N28a | vICMSDeson | Valor do ICMS desonerado | E | N27.1 | N | 1-1 | 13v2 | Informar apenas nos motivos de desoneração documentados abaixo. |
| 192.3 | N28 | motDesICMS | Motivo da desoneração do ICMS | E | N27.1 | N | 1-1 | 2 | Campo será preenchido quando o campo anterior estiver preenchido. Informar o motivo da desoneração:<br>3=Uso na agropecuária;<br>9=Outros;<br>12=Órgão de fomento e desenvolvimento agropecuário. |

### Grupo Tributação do ICMS= 30

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **193** | **N05** | **ICMS30** | **Grupo Tributação do ICMS = 30** | **CG** | **N01** |  | **1-1** |  | **Tributação Isenta ou não tributada e com cobrança do ICMS por substituição tributária** |
| 194 | N11 | orig | Origem da mercadoria | E | N05 | N | 1-1 | 1 | 0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8;<br>1 - Estrangeira - Importação direta, exceto a indicada no código 6;<br>2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7;<br>3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40% e inferior ou igual a 70%;<br>4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes;<br>5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%;<br>6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural;<br>7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural.<br>8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%; |
| <!-- p.28 --> 195 | N12 | CST | Tributação do ICMS = 30 | E | N05 | N | 1-1 | 2 | 30=Isenta ou não tributada e com cobrança do ICMS por substituição tributária |
| 196 | N18 | modBCST | Modalidade de determinação da BC do ICMS ST | E | N05 | N | 1-1 | 1 | 0=Preço tabelado ou máximo sugerido;<br>1=Lista Negativa (valor);<br>2=Lista Positiva (valor);<br>3=Lista Neutra (valor);<br>4=Margem Valor Agregado (%);<br>5=Pauta (valor); |
| 197 | N19 | pMVAST | Percentual da margem de valor Adicionado do ICMS ST | E | N05 | N | 0-1 | 3v2-4 |  |
| 198 | N20 | pRedBCST | Percentual da Redução de BC do ICMS ST | E | N05 | N | 0-1 | 3v2-4 |  |
| 199 | N21 | vBCST | Valor da BC do ICMS ST | E | N05 | N | 1-1 | 13v2 |  |
| 200 | N22 | pICMSST | Alíquota do imposto do ICMS ST | E | N05 | N | 1-1 | 3v2-4 | Alíquota do ICMS ST sem o FCP. Quando for o caso, informar a alíquota do FCP no campo pFCP |
| 201 | N23 | vICMSST | Valor do ICMS ST | E | N05 | N | 1-1 | 13v2 | Valor do ICMS ST retido |
| **201.0** | **N23.1** | **-x-** | **Sequência XML** | **G** | **N05** |  | **0-1** |  |  |
| 201.w | N23a | vBCFCPST | Valor da Base de Cálculo do FCP retido por Substituição Tributária | E | N23.1 | N | 1-1 | 13v2 | Informar o valor da Base de Cálculo do FCP retido por Substituição Tributária |
| 201.x | N23b | pFCPST | Percentual do FCP retido por Substituição Tributária | E | N23.1 | N | 1-1 | 3v2-4 | Percentual relativo ao Fundo de Combate à Pobreza (FCP) retido por substituição tributária. |
| 201.y | N23d | vFCPST | Valor do FCP retido por Substituição Tributária | E | N23.1 | N | 1-1 | 13v2 | Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP) retido por substituição tributária. |
| **201.1** | **N27.1** | **-x-** | **Sequência XML** | **G** | **N05** |  | **0-1** |  | **Grupo opcional.** |
| 201.2 | N28a | vICMSDeson | Valor do ICMS desonerado | E | N27.1 | N | 1-1 | 13v2 | Informar apenas nos motivos de desoneração documentados abaixo. |
| 201.3 | N28 | motDesICMS | Motivo da desoneração do ICMS | E | N27.1 | N | 1-1 | 2 | Campo será preenchido quando o campo anterior estiver preenchido. Informar o motivo da desoneração:<br>6=Utilitários e Motocicletas da Amazônia Ocidental e Áreas de Livre Comércio (Resolução 714/88 e 790/94 – CONTRAN e suas alterações);<br>7=SUFRAMA;<br>9=Outros; |

<!-- p.29 -->
### Grupo Tributação do ICMS= 40, 41, 50

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **202** | **N06** | **ICMS40** | **Grupo Tributação ICMS = 40, 41, 50** | **CG** | **N01** |  | **1-1** |  | **Tributação Isenta, Não tributada ou Suspensão.** |
| 203 | N11 | orig | Origem da mercadoria | E | N06 | N | 1-1 | 1 | 0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8;<br>1 - Estrangeira - Importação direta, exceto a indicada no código 6;<br>2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7;<br>3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40% e inferior ou igual a 70%;<br>4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes;<br>5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%;<br>6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural;<br>7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural.<br>8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%; |
| 204 | N12 | CST | Tributação do ICMS = 40, 41 ou 50 | E | N06 | N | 1-1 | 2 | 40=Isenta;<br>41=Não tributada;<br>50=Suspensão. |
| **204.00** | **N27.1** | **-x-** | **Sequência XML** | **G** | **N06** |  | **0-1** |  | **Grupo opcional.** |
| 204.01 | N28a | vICMSDeson | Valor do ICMS desonerado | E | N27.1 | N | 1-1 | 13v2 | Informar nas operações:<br>a) com produtos beneficiados com a desoneração condicional do ICMS.<br>b) destinadas à SUFRAMA, informando-se o valor que seria devido se não houvesse isenção.<br>c) de venda a órgão da administração pública direta e suas fundações e autarquias com isenção do ICMS. (NT 2011/004) d) demais casos solicitados pelo Fisco. |
| <!-- p.30 --> 204.02 | N28 | motDesICMS | Motivo da desoneração do ICMS | E | N27.1 | N | 1-1 | 2 | Campo será preenchido quando o campo anterior estiver preenchido. Informar o motivo da desoneração:<br>1=Táxi;<br>3=Produtor Agropecuário;<br>4=Frotista/Locadora;<br>5=Diplomático/Consular;<br>6=Utilitários e Motocicletas da Amazônia Ocidental e Áreas de Livre Comércio (Resolução 714/88 e 790/94 – CONTRAN e suas alterações);<br>7=SUFRAMA;<br>8=Venda a Órgão Público;<br>9=Outros. (NT 2011/004);<br>10=Deficiente Condutor (Convênio ICMS 38/12);<br>11=Deficiente Não Condutor (Convênio ICMS 38/12).<br>16=Olimpíadas Rio 2016 (NT 2015.002);<br>90=Solicitado pelo Fisco Revogada a partir da versão 3.01 a possibilidade de usar o motivo 2=Deficiente Físico |

### Grupo Tributação do ICMS= 51

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **205** | **N07** | **ICMS51** | **Grupo Tributação do ICMS = 51** | **CG** | **N01** |  | **1-1** |  | **Tributação com Diferimento (a exigência do preenchimento das informações do ICMS diferido fica a critério de cada UF).** |
| 206 | N11 | orig | Origem da mercadoria | E | N07 | N | 1-1 | 1 | 0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8;<br>1 - Estrangeira - Importação direta, exceto a indicada no código 6;<br>2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7;<br>3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40% e inferior ou igual a 70%;<br>4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes;<br>5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%;<br>6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural;<br>7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural.<br>8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%; |
| <!-- p.31 --> 207 | N12 | CST | Tributação do ICMS = 51 | E | N07 | N | 1-1 | 2 | 51=Diferimento |
| 208 | N13 | modBC | Modalidade de determinação da BC do ICMS | E | N07 | N | 0-1 | 1 | 0=Margem Valor Agregado (%);<br>1=Pauta (Valor);<br>2=Preço Tabelado Máx. (valor);<br>3=Valor da operação. |
| 209 | N14 | pRedBC | Percentual da Redução de BC | E | N07 | N | 0-1 | 3v2-4 |  |
| 210 | N15 | vBC | Valor da BC do ICMS | E | N07 | N | 0-1 | 13v2 |  |
| 211 | N16 | pICMS | Alíquota do imposto | E | N07 | N | 0-1 | 3v2-4 | Alíquota do ICMS sem o FCP. Quando for o caso, informar a alíquota do FCP no campo pFCP |
| 211.01 | N16a | vICMSOp | Valor do ICMS da Operação | E | N07 | N | 0-1 | 13v2 | Valor como se não tivesse o diferimento |
| 211.02 | N16b | pDif | Percentual do diferimento | E | N07 | N | 0-1 | 3v2-4 | No caso de diferimento total, informar o percentual de diferimento "100". |
| 211.03 | N16c | vICMSDif | Valor do ICMS diferido | E | N07 | N | 0-1 | 13v2 |  |
| 212 | N17 | vICMS | Valor do ICMS | E | N07 | N | 0-1 | 13v2 | Informar o valor realmente devido. |
| **212.0** | **N17.1** | **-x-** | **Sequência XML** | **G** | **N07** |  | **0-1** |  |  |
| 212.w | N17a | vBCFCP | Valor da Base de Cálculo do FCP | E | N17.1 | N | 1-1 | 13v2 | Informar o valor da Base de Cálculo do FCP |
| 212.x | N17b | pFCP | Percentual do Fundo de Combate à Pobreza (FCP) | E | N17.1 | N | 1-1 | 3v2-4 | Percentual relativo ao Fundo de Combate à Pobreza (FCP). |
| 212.y | N17c | vFCP | Valor do Fundo de Combate à Pobreza (FCP) | E | N17.1 | N | 1-1 | 13v2 | Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP). |

### Grupo Tributação do ICMS= 60

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **213** | **N08** | **ICMS60** | **Grupo Tributação do ICMS = 60** | **CG** | **N01** |  | **1-1** |  | **Tributação ICMS cobrado anteriormente por substituição tributária** |
| 214 | N11 | orig | Origem da mercadoria | E | N08 | N | 1-1 | 1 | 0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8;<br>1 - Estrangeira - Importação direta, exceto a indicada no código 6;<br>2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7;<br>3 - Nacional, mercadoria ou bem com Conteúdo de |
| <!-- p.32 --> **213** | **N08** | **ICMS60** | **Grupo Tributação do ICMS = 60** | **CG** | **N01** |  | **1-1** |  | **Tributação ICMS cobrado anteriormente por substituição tributária Importação superior a 40% e inferior ou igual a 70%;<br>4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes;<br>5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%;<br>6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural;<br>7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural.<br>8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%;** |
| 215 | N12 | CST | Tributação do ICMS = 60 | E | N08 | N | 1-1 | 2 | 60=ICMS cobrado anteriormente por substituição tributária |
| **215.1** | **N25.1** | **-x-** | **Sequência XML** | **G** | **N08** |  | **0-1** |  | **Grupo opcional.** |
| 216 | N26 | vBCSTRet | Valor da BC do ICMS ST retido | E | N25.1 | N | 1-1 | 13v2 | Valor da BC do ICMS ST cobrado anteriormente por ST (v2.0). O valor pode ser omitido quando a legislação não exigir a sua informação. (NT 2011/004) |
| 216.1 | N26a | pST | Alíquota suportada pelo Consumidor Final | E | N25.1 | N | 1-1 | 3v2-4 | Deve ser informada a alíquota do cálculo do ICMS-ST, já incluso o FCP caso incida sobre a mercadoria. Exemplo:<br>alíquota da mercadoria na venda ao consumidor final = 18% e 2% de FCP. A alíquota a ser informada no campo pST deve ser 20%. |
| 217 | N27 | vICMSSTRet | Valor do ICMS ST retido | E | N25.1 | N | 1-1 | 13v2 | Valor do ICMS ST cobrado anteriormente por ST (v2.0). O valor pode ser omitido quando a legislação não exigir a sua informação. (NT 2011/004) |
| **217.0** | **N27.1** | **-x-** | **Sequência XML** | **G** | **N08** |  | **0-1** |  |  |
| 217.w | N27a | vBCFCPSTRet | Valor da Base de Cálculo do FCP retido anteriormente por ST | E | N27.1 | N | 1-1 | 13v2 | Informar o valor da Base de Cálculo do FCP retido anteriormente por ST |
| 217.x | N27b | pFCPSTRet | Percentual do FCP retido anteriormente por Substituição Tributária | E | N27.1 | N | 1-1 | 3v2-4 | Percentual relativo ao Fundo de Combate à Pobreza (FCP) retido por substituição tributária. |
| 217.y | N27d | vFCPSTRet | Valor do FCP retido por Substituição Tributária | E | N27.1 | N | 1-1 | 13v2 | Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP) retido por substituição tributária. |
| **217.1** | **N33** | **-x-** | **Sequência XML** | **G** | **N08** |  | **0-1** |  | **Grupo opcional para informações do ICMS Efetivo** |
| <!-- p.33 --> **213** | **N08** | **ICMS60** | **Grupo Tributação do ICMS = 60** | **CG** | **N01** |  | **1-1** |  | **Tributação ICMS cobrado anteriormente por substituição tributária** |
| 217.2 | N34 | pRedBCEfet | Percentual de redução da base de cálculo efetiva | E | N33 | N | 1-1 | 3v2-4 | Percentual de redução, caso estivesse submetida ao regime comum de tributação, para obtenção da base de cálculo efetiva (vBCEfet).<br>Obs.: opcional a critério da UF. |
| 217.3 | N35 | vBCEfet | Valor da base de cálculo efetiva | E | N33 | N | 1-1 | 13v2 | Valor da base de cálculo que seria atribuída à operação própria do contribuinte substituído, caso estivesse submetida ao regime comum de tributação, obtida pelo produto do Vprod por (1- pRedBCEfet).<br>Obs.: opcional a critério da UF. |
| 217.4 | N36 | pICMSEfet | Alíquota do ICMS efetiva | E | N33 | N | 1-1 | 3v2-4 | Alíquota do ICMS na operação a consumidor final, caso estivesse submetida ao regime comum de tributação.<br>Obs.: opcional a critério da UF. |
| 217.5 | N37 | vICMSEfet | Valor do ICMS efetivo | E | N33 | N | 1-1 | 13v2 | Obtido pelo produto do valor do campo pICMSEfet pelo valor do campo vBCEfet, caso estivesse submetida ao regime comum de tributação.<br>Obs.: opcional a critério da UF. |

### Grupo Tributação do ICMS= 70

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **218** | **N09** | **ICMS70** | **Grupo Tributação do ICMS = 70** | **CG** | **N01** |  | **1-1** |  | **Tributação ICMS com redução de base de cálculo e cobrança do ICMS por substituição tributária** |
| 219 | N11 | orig | Origem da mercadoria | E | N09 | N | 1-1 | 1 | 0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8;<br>1 - Estrangeira - Importação direta, exceto a indicada no código 6;<br>2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7;<br>3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40% e inferior ou igual a 70%;<br>4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes;<br>5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%;<br>6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural;<br>7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural.<br>8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%; |
| <!-- p.34 --> 220 | N12 | CST | Tributação do ICMS = 70 | E | N09 | N | 1-1 | 2 | 70=Com redução de base de cálculo e cobrança do ICMS por substituição tributária |
| 221 | N13 | modBC | Modalidade de determinação da BC do ICMS | E | N09 | N | 1-1 | 1 | 0=Margem Valor Agregado (%);<br>1=Pauta (Valor);<br>2=Preço Tabelado Máx. (valor);<br>3=Valor da operação. |
| 222 | N14 | pRedBC | Percentual da Redução de BC | E | N09 | N | 1-1 | 3v2-4 |  |
| 223 | N15 | vBC | Valor da BC do ICMS | E | N09 | N | 1-1 | 13v2 |  |
| 224 | N16 | pICMS | Alíquota do imposto | E | N09 | N | 1-1 | 3v2-4 | Alíquota do ICMS sem o FCP. Quando for o caso, informar a alíquota do FCP no campo pFCP. |
| 225 | N17 | vICMS | Valor do ICMS | E | N09 | N | 1-1 | 13v2 |  |
| **225.0** | **N17.0** | **-x-** | **Sequência XML** | **G** | **N09** |  | **0-1** |  |  |
| 225.1 | N17a | vBCFCP | Valor da Base de Cálculo do FCP | E | N17.0 | N | 1-1 | 13v2 | Informar o valor da Base de Cálculo do FCP |
| 225.2 | N17b | pFCP | Percentual do Fundo de Combate à Pobreza (FCP) | E | N17.0 | N | 1-1 | 3v2-4 | Percentual relativo ao Fundo de Combate à Pobreza (FCP). |
| 225.3 | N17c | vFCP | Valor do Fundo de Combate à Pobreza (FCP) | E | N17.0 | N | 1-1 | 13v2 | Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP). |
| 226 | N18 | modBCST | Modalidade de determinação da BC do ICMS ST | E | N09 | N | 1-1 | 1 | 0=Preço tabelado ou máximo sugerido;<br>1=Lista Negativa (valor);<br>2=Lista Positiva (valor);<br>3=Lista Neutra (valor);<br>4=Margem Valor Agregado (%);<br>5=Pauta (valor); |
| 227 | N19 | pMVAST | Percentual da margem de valor Adicionado do ICMS ST | E | N09 | N | 0-1 | 3v2-4 |  |
| 228 | N20 | pRedBCST | Percentual da Redução de BC do ICMS ST | E | N09 | N | 0-1 | 3v2-4 |  |
| 229 | N21 | vBCST | Valor da BC do ICMS ST | E | N09 | N | 1-1 | 13v2 |  |
| 230 | N22 | pICMSST | Alíquota do imposto do ICMS ST | E | N09 | N | 1-1 | 3v2-4 | Alíquota do ICMS ST sem o FCP. Quando for o caso, informar a alíquota do FCP no campo Pfcp |
| 231 | N23 | vICMSST | Valor do ICMS ST | E | N09 | N | 1-1 | 13v2 | Valor do ICMS ST retido |
| **231.0** | **N23.1** | **-x-** | **Sequência XML** | **G** | **N09** |  | **0-1** | **-x-** | **Sequência XML** |
| <!-- p.35 --> 231.w | N23a | vBCFCPST | Valor da Base de Cálculo do FCP retido por Substituição Tributária | E | N23.1 | N | 1-1 | 13v2 | Informar o valor da Base de Cálculo do FCP retido por Substituição Tributária |
| 231.x | N23b | pFCPST | Percentual do FCP retido por Substituição Tributária | E | N23.1 | N | 1-1 | 3v2-4 | Percentual relativo ao Fundo de Combate à Pobreza (FCP) retido por substituição tributária. |
| 231.y | N23d | vFCPST | Valor do FCP retido por Substituição Tributária | E | N23.1 | N | 1-1 | 13v2 | Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP) retido por substituição tributária. |
| **231.1** | **N27.1** | **-x-** | **Sequência XML** | **G** | **N09** |  | **0-1** |  | **Grupo opcional.** |
| 231.2 | N28a | vICMSDeson | Valor do ICMS desonerado | E | N27.1 | N | 1-1 | 13v2 | Informar apenas nos motivos de desoneração documentados abaixo. |
| 231.3 | N28 | motDesICMS | Motivo da desoneração do ICMS | E | N27.1 | N | 1-1 | 2 | Campo será preenchido quando o campo anterior estiver preenchido. Informar o motivo da desoneração:<br>3=Uso na agropecuária;<br>9=Outros;<br>12=Órgão de fomento e desenvolvimento agropecuário. |

### Grupo Tributação do ICMS= 90

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **232** | **N10** | **ICMS90** | **Grupo Tributação do ICMS = 90** | **CG** | **N01** |  | **1-1** |  | **Tributação ICMS: Outros** |
| 233 | N11 | orig | Origem da mercadoria | E | N10 | N | 1-1 | 1 | 0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8;<br>1 - Estrangeira - Importação direta, exceto a indicada no código 6;<br>2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7;<br>3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40% e inferior ou igual a 70%;<br>4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes;<br>5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%;<br>6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural;<br>7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural.<br>8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%; |
| 234 | N12 | CST | Tributação do ICMS = 90 | E | N10 | N | 1-1 | 2 | 90=Outros |
| <!-- p.36 --> **234.1** | **N12.1** | **-x-** | **Sequência XML** | **G** | **N10** |  | **0-1** |  | **Grupo opcional.** |
| 235 | N13 | modBC | Modalidade de determinação da BC do ICMS | E | N12.1 | N | 1-1 | 1 | 0=Margem Valor Agregado (%);<br>1=Pauta (Valor);<br>2=Preço Tabelado Máx. (valor);<br>3=Valor da operação. |
| 236 | N15 | vBC | Valor da BC do ICMS | E | N12.1 | N | 1-1 | 13v2 |  |
| 237 | N14 | pRedBC | Percentual da Redução de BC | E | N12.1 | N | 0-1 | 3v2-4 |  |
| 238 | N16 | pICMS | Alíquota do imposto | E | N12.1 | N | 1-1 | 3v2-4 | Alíquota do ICMS sem o FCP. Quando for o caso, informar a alíquota do FCP no campo pFCP |
| 239 | N17 | vICMS | Valor do ICMS | E | N12.1 | N | 1-1 | 13v2 |  |
| **239.0** | **N17.0** | **-x-** | **Sequência XML** | **G** | **N12.1** |  | **0-1** |  |  |
| 239.w | N17a | vBCFCP | Valor da Base de Cálculo do FCP | E | N17.0 | N | 1-1 | 13v2 | Informar o valor da Base de Cálculo do FCP |
| 239.x | N17b | pFCP | Percentual do Fundo de Combate à Pobreza (FCP) | E | N17.0 | N | 1-1 | 3v2-4 | Percentual relativo ao Fundo de Combate à Pobreza (FCP). |
| 239.y | N17c | vFCP | Valor do Fundo de Combate à Pobreza (FCP) | E | N17.0 | N | 1-1 | 13v2 | Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP). |
| **239.1** | **N17.1** | **-x-** | **Sequência XML** | **G** | **N10** |  | **0-1** |  | **Grupo opcional.** |
| 240 | N18 | modBCST | Modalidade de determinação da BC do ICMS ST | E | N17.1 | N | 1-1 | 1 | 0=Preço tabelado ou máximo sugerido;<br>1=Lista Negativa (valor);<br>2=Lista Positiva (valor);<br>3=Lista Neutra (valor);<br>4=Margem Valor Agregado (%);<br>5=Pauta (valor); |
| 241 | N19 | pMVAST | Percentual da margem de valor Adicionado do ICMS ST | E | N17.1 | N | 0-1 | 3v2-4 |  |
| 242 | N20 | pRedBCST | Percentual da Redução de BC do ICMS ST | E | N17.1 | N | 0-1 | 3v2-4 |  |
| 243 | N21 | vBCST | Valor da BC do ICMS ST | E | N17.1 | N | 1-1 | 13v2 |  |
| 244 | N22 | pICMSST | Alíquota do imposto do ICMS ST | E | N17.1 | N | 1-1 | 3v2-4 | Alíquota do ICMS ST sem o FCP. Quando for o caso, informar a alíquota do FCP no campo pFCP |
| 245 | N23 | vICMSST | Valor do ICMS ST | E | N17.1 | N | 1-1 | 13v2 | Valor do ICMS ST retido |
| **245.0** | **N23.1** | **-x-** | **Sequência xml** | **G** | **N17.1** |  | **0-1** |  |  |
| 245.w | N23a | vBCFCPST | Valor da Base de Cálculo do FCP retido por Substituição Tributária | E | N23.1 | N | 1-1 | 13v2 | Informar o valor da Base de Cálculo do FCP retido por Substituição Tributária |
| <!-- p.37 --> 245.x | N23b | pFCPST | Percentual do FCP retido por Substituição Tributária | E | N23.1 | N | 1-1 | 3v2-4 | Percentual relativo ao Fundo de Combate à Pobreza (FCP) retido por substituição tributária. |
| 245.y | N23d | vFCPST | Valor do FCP retido por Substituição Tributária | E | N23.1 | N | 1-1 | 13v2 | Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP) retido por substituição tributária. |
| **245.1** | **N27.1** | **-x-** | **Sequência XML** | **G** | **N10** |  | **0-1** |  | **Grupo opcional.** |
| 245.2 | N28a | vICMSDeson | Valor do ICMS desonerado | E | N27.1 | N | 1-1 | 13v2 | Informar apenas nos motivos de desoneração documentados abaixo. |
| 245.3 | N28 | motDesICMS | Motivo da desoneração do ICMS | E | N27.1 | N | 1-1 | 2 | Campo será preenchido quando o campo anterior estiver preenchido. Informar o motivo da desoneração:<br>3=Uso na agropecuária;<br>9=Outros;<br>12=Órgão de fomento e desenvolvimento agropecuário. |

### Grupo de Partilha do ICMS

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **245.01** | **N10a** | **ICMSPart** | **Grupo de Partilha do ICMS entre a UF de origem e UF de destino ou a UF definida na legislação.** | **CG** | **N01** |  | **1-1** |  | **Operação interestadual para consumidor final com partilha do ICMS devido na operação entre a UF de origem e a do destinatário, ou a UF definida na legislação. (Ex. UF da concessionária de entrega do veículo) (v2.0)** |
| 245.02 | N11 | orig | Origem da mercadoria | E | N10a | N | 1-1 | 1 | 0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8;<br>1 - Estrangeira - Importação direta, exceto a indicada no código 6;<br>2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7;<br>3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40% e inferior ou igual a 70%;<br>4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes;<br>5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%;<br>6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural;<br>7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural.<br>8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%; |
| <!-- p.38 --> 245.03 | N12 | CST | Tributação do ICMS | E | N10a | N | 1-1 | 2 | 10=Tributada e com cobrança do ICMS por substituição tributária;<br>90=Outros. |
| 245.04 | N13 | modBC | Modalidade de determinação da BC do ICMS | E | N10a | N | 1-1 | 1 | 0=Margem Valor Agregado (%);<br>1=Pauta (Valor);<br>2=Preço Tabelado Máx. (valor);<br>3=Valor da operação. (v2.0) |
| 245.05 | N15 | vBC | Valor da BC do ICMS | E | N10a | N | 1-1 | 13v2 | (v2.0) |
| 245.06 | N14 | pRedBC | Percentual da Redução de BC | E | N10a | N | 0-1 | 3v2-4 | (v2.0) |
| 245.07 | N16 | pICMS | Alíquota do imposto | E | N10a | N | 1-1 | 3v2-4 | (v2.0) |
| 245.08 | N17 | vICMS | Valor do ICMS | E | N10a | N | 1-1 | 13v2 |  |
| 245.09 | N18 | modBCST | Modalidade de determinação da BC do ICMS ST | E | N10a | N | 1-1 | 1 | 0=Preço tabelado ou máximo sugerido;<br>1=Lista Negativa (valor);<br>2=Lista Positiva (valor);<br>3=Lista Neutra (valor);<br>4=Margem Valor Agregado (%);<br>5=Pauta (valor); |
| 245.10 | N19 | pMVAST | Percentual da margem de valor Adicionado do ICMS ST | E | N10a | N | 0-1 | 3v2-4 | (v2.0) |
| 245.11 | N20 | pRedBCST | Percentual da Redução de BC do ICMS ST | E | N10a | N | 0-1 | 3v2-4 | (v2.0) |
| 245.12 | N21 | vBCST | Valor da BC do ICMS ST | E | N10a | N | 1-1 | 13v2 | (v2.0) |
| 245.13 | N22 | pICMSST | Alíquota do imposto do ICMS ST | E | N10a | N | 1-1 | 3v2-4 | (v2.0) |
| 245.14 | N23 | vICMSST | Valor do ICMS ST | E | N10a | N | 1-1 | 13v2 | Valor do ICMS ST(v2.0) |
| 245.15 | N25 | pBCOp | Percentual da BC operação própria | E | N10a | N | 1-1 | 3v2-4 | Percentual para determinação do valor da Base de Cálculo da operação própria. (v2.0) |
| 245.16 | N24 | UFST | UF para qual é devido o ICMS ST | E | N10a | C | 1-1 | 2 | Sigla da UF para qual é devido o ICMS ST da operação.<br>Informar "EX" para Exterior. (v2.0) |

### Grupo de Repasse do ICMS ST

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **245.17** | **N10b** | **ICMSST** | **Grupo de Repasse de ICMS ST retido anteriormente em operações interestaduais com repasses através do Substituto Tributário** | **CG** | **N01** |  | **1-1** |  | **Grupo de informação do ICMS ST devido para a UF de destino, nas operações interestaduais de produtos que tiveram retenção antecipada de ICMS por ST na UF do remetente. Repasse via Substituto Tributário. (v2.0)** |
| <!-- p.39 --> 245.18 | N11 | orig | Origem da mercadoria | E | N10b | N | 1-1 | 1 | 0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8;<br>1 - Estrangeira - Importação direta, exceto a indicada no código 6;<br>2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7;<br>3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40% e inferior ou igual a 70%;<br>4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes;<br>5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%;<br>6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural;<br>7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural.<br>8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%; |
| 245.19 | N12 | CST | Tributação do ICMS | E | N10b | N | 1-1 | 2 | 41=Não Tributado (v2.0)<br>60= cobrado anteriormente por substituição tributária |
| 245.20 | N26 | vBCSTRet | Valor do BC do ICMS ST retido na UF remetente | E | N10b | N | 1-1 | 13v2 | Informar o valor da BC do ICMS ST retido na UF remetente (v2.0) |
| 245.21 | N27 | vICMSSTRet | Valor do ICMS ST retido na UF remetente | E | N10b | N | 1-1 | 13v2 | Informar o valor do ICMS ST retido na UF remetente (v2.0) |
| 245.22 | N31 | vBCSTDest | Valor da BC do ICMS ST da UF destino | E | N10b | N | 1-1 | 13v2 | Informar o valor da BC do ICMS ST da UF destino (v2.0) |
| 245.23 | N32 | vICMSSTDest | Valor do ICMS ST da UF destino | E | N10b | N | 1-1 | 13v2 | Informar o valor do ICMS ST da UF destino (v2.0) |

### Grupo CRT=1

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **245.24** | **N10c** | **ICMSSN101** | **Grupo CRT=1 – Simples Nacional e CSOSN=101** | **CG** | **N01** |  | **1-1** |  | **Tributação ICMS pelo Simples Nacional, CSOSN=101 (v2.0)** |
| 245.25 | N11 | orig | Origem da mercadoria | E | N10c | N | 1-1 | 1 | 0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8;<br>1 - Estrangeira - Importação direta, exceto a indicada no código 6;<br>2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7;<br>3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40% e inferior ou igual a 70%;<br>4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes;<br>5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%;<br>6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural;<br>7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural.<br>8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%; |
| <!-- p.40 --> 245.26 | N12a | CSOSN | Código de Situação da Operação – Simples Nacional | E | N10c | N | 1-1 | 3 | 101=Tributada pelo Simples Nacional com permissão de crédito. (v2.0) |
| 245.27 | N29 | pCredSN | Alíquota aplicável de cálculo do crédito (Simples Nacional). | E | N10c | N | 1-1 | 3v2-4 | (v2.0) |
| 245.28 | N30 | vCredICMSS N | Valor crédito do ICMS que pode ser aproveitado nos termos do art. 23 da LC 123 (Simples Nacional) | E | N10c | N | 1-1 | 13v2 | (v2.0) |
| **245.24** | **N10d** | **ICMSSN102** | **Grupo CRT=1 – Simples Nacional e CSOSN=102, 103, 300 ou 400** | **CG** | **N01** |  | **1-1** |  | **Tributação ICMS pelo Simples Nacional, CSOSN=102, 103, 300 ou 400 (v2.0)** |
| 245.25 | N11 | orig | Origem da mercadoria | E | N10d | N | 1-1 | 1 | 0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8;<br>1 - Estrangeira - Importação direta, exceto a indicada no código 6;<br>2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7;<br>3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40% e inferior ou igual a 70%;<br>4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes;<br>5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%;<br>6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural;<br>7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural.<br>8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%; |
| <!-- p.41 --> 245.26 | N12a | CSOSN | Código de Situação da Operação – Simples Nacional | E | N10d | N | 1-1 | 3 | 102=Tributada pelo Simples Nacional sem permissão de crédito.<br>103=Isenção do ICMS no Simples Nacional para faixa de receita bruta.<br>300=Imune.<br>400=Não tributada pelo Simples Nacional (v2.0) (v2.0) |
| **245.27** | **N10e** | **ICMSSN201** | **Grupo CRT=1 – Simples Nacional e CSOSN=201** | **CG** | **N01** |  | **1-1** |  | **Tributação ICMS pelo Simples Nacional, CSOSN=201 (v2.0)** |
| 245.28 | N11 | orig | Origem da mercadoria | E | N10e | N | 1-1 | 1 | 0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8;<br>1 - Estrangeira - Importação direta, exceto a indicada no código 6;<br>2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7;<br>3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40% e inferior ou igual a 70%;<br>4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes;<br>5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%;<br>6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural;<br>7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural.<br>8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%; |
| 245.29 | N12a | CSOSN | Código de Situação da Operação – Simples Nacional | E | N10e | N | 1-1 | 3 | 201=Tributada pelo Simples Nacional com permissão de crédito e com cobrança do ICMS por Substituição Tributária (v2.0) |
| 245.30 | N18 | modBCST | Modalidade de determinação da BC do ICMS ST | E | N10e | N | 1-1 | 1 | 0=Preço tabelado ou máximo sugerido;<br>1=Lista Negativa (valor);<br>2=Lista Positiva (valor);<br>3=Lista Neutra (valor);<br>4=Margem Valor Agregado (%);<br>5=Pauta (valor); (v2.0) |
| 245.31 | N19 | pMVAST | Percentual da margem de valor Adicionado do ICMS ST | E | N10e | N | 0-1 | 3v2-4 | (v2.0) |
| 224.32 | N20 | pRedBCST | Percentual da Redução de BC do ICMS ST | E | N10e | N | 0-1 | 3v2-4 | (v2.0) |
| <!-- p.42 --> 245.33 | N21 | vBCST | Valor da BC do ICMS ST | E | N10e | N | 1-1 | 13v2 | (v2.0) |
| 245.34 | N22 | pICMSST | Alíquota do imposto do ICMS ST | E | N10e | N | 1-1 | 3v2-4 | Alíquota do ICMS ST sem o FCP. Quando for o caso, informar a alíquota do FCP no campo pFCP |
| 245.35 | N23 | vICMSST | Valor do ICMS ST | E | N10e | N | 1-1 | 13v2 | Valor do ICMS ST retido (v2.0) |
| **245.35.0** | **N23.1** | **-x-** | **Sequência xml** | **G** | **N10e** |  | **0-1** |  |  |
| 245.35w | N23a | vBCFCPST | Valor da Base de Cálculo do FCP retido por Substituição Tributária | E | N23.1 | N | 1-1 | 13v2 | Informar o valor da Base de Cálculo do FCP retido por Substituição Tributária |
| 245.35x | N23b | pFCPST | Percentual do FCP retido por Substituição Tributária | E | N23.1 | N | 1-1 | 3v2-4 | Percentual relativo ao Fundo de Combate à Pobreza (FCP) retido por substituição tributária. |
| 245.35y | N23d | vFCPST | Valor do FCP retido por Substituição Tributária | E | N23.1 | N | 1-1 | 13v2 | Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP) retido por substituição tributária. |
| 245.36 | N29 | pCredSN | Alíquota aplicável de cálculo do crédito (SIMPLES NACIONAL). | E | N10e | N | 1-1 | 3v2-4 | (v2.0) |
| 245.37 | N30 | vCredICMSS N | Valor crédito do ICMS que pode ser aproveitado nos termos do art. 23 da LC 123 (SIMPLES NACIONAL) | E | N10e | N | 1-1 | 13v2 | (v2.0) |
| **245.38** | **N10f** | **ICMSSN202** | **Grupo CRT=1 – Simples Nacional e CSOSN=202 ou 203** | **CG** | **N01** |  | **1-1** |  | **Tributação ICMS pelo Simples Nacional, CSOSN=202 ou 203 (v2.0)** |
| 245.39 | N11 | orig | Origem da mercadoria | E | N10f | N | 1-1 | 1 | 0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8;<br>1 - Estrangeira - Importação direta, exceto a indicada no código 6;<br>2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7;<br>3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40% e inferior ou igual a 70%;<br>4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes;<br>5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%;<br>6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural;<br>7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural.<br>8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%; |
| 245.40 | N12a | CSOSN | Código de Situação da Operação – Simples Nacional | E | N10f | N | 1-1 | 3 | 202=Tributada pelo Simples Nacional sem permissão de crédito e com cobrança do ICMS por Substituição Tributária;<br>203- Isenção do ICMS nos Simples Nacional para faixa de receita bruta e com cobrança do ICMS por Substituição Tributária (v2.0) |
| <!-- p.43 --> 245.41 | N18 | modBCST | Modalidade de determinação da BC do ICMS ST | E | N10f | N | 1-1 | 1 | 0=Preço tabelado ou máximo sugerido;<br>1=Lista Negativa (valor);<br>2=Lista Positiva (valor);<br>3=Lista Neutra (valor);<br>4=Margem Valor Agregado (%);<br>5=Pauta (valor); (v2.0) |
| 245.42 | N19 | pMVAST | Percentual da margem de valor Adicionado do ICMS ST | E | N10f | N | 0-1 | 3v2-4 | (v2.0) |
| 224.43 | N20 | pRedBCST | Percentual da Redução de BC do ICMS ST | E | N10f | N | 0-1 | 3v2-4 | (v2.0) |
| 245.44 | N21 | vBCST | Valor da BC do ICMS ST | E | N10f | N | 1-1 | 13v2 | (v2.0) |
| 245.45 | N22 | pICMSST | Alíquota do imposto do ICMS ST | E | N10f | N | 1-1 | 3v2-4 | Alíquota do ICMS ST sem o FCP. Quando for o caso, informar a alíquota do FCP no campo pFCP |
| 245.46 | N23 | vICMSST | Valor do ICMS ST | E | N10f | N | 1-1 | 13v2 | Valor do ICMS ST retido (v2.0) |
| **245.46.0** | **N23.1** | **-x-** | **Sequência xml** | **G** | **N10.f** |  | **0-1** |  |  |
| 245.46w | N23a | vBCFCPST | Valor da Base de Cálculo do FCP retido por Substituição Tributária | E | N23.1 | N | 1-1 | 13v2 | Informar o valor da Base de Cálculo do FCP retido por Substituição Tributária |
| 245.46x | N23b | pFCPST | Percentual do FCP retido por Substituição Tributária | E | N23.1 | N | 1-1 | 3v2-4 | Percentual relativo ao Fundo de Combate à Pobreza (FCP) retido por substituição tributária. |
| 245.46y | N23d | vFCPST | Valor do FCP retido por Substituição Tributária | E | N23.1 | N | 1-1 | 13v2 | Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP) retido por substituição tributária. |
| **245.47** | **N10g** | **ICMSSN500** | **Grupo CRT=1 – Simples Nacional e CSOSN = 500** | **CG** | **N01** |  | **1-1** |  | **Tributação ICMS pelo Simples Nacional, CSOSN=500 (v2.0)** |
| 245.48 | N11 | orig | Origem da mercadoria | E | N10g | N | 1-1 | 1 | 0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8;<br>1 - Estrangeira - Importação direta, exceto a indicada no código 6;<br>2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7;<br>3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40% e inferior ou igual a 70%;<br>4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes;<br>5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%;<br>6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural;<br>7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural.<br>8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%; |
| <!-- p.44 --> 245.49 | N12a | CSOSN | Código de Situação da Operação – Simples Nacional | E | N10g | N | 1-1 | 3 | 500=ICMS cobrado anteriormente por substituição tributária (substituído) ou por antecipação. (v2.0) |
| **245.50** | **N25.1** | **-x-** | **Sequência XML** | **G** | **N10g** |  | **0-1** |  | **Grupo opcional.** |
| 245.50 | N26 | vBCSTRet | Valor da BC do ICMS ST retido | E | N25.1 | N | 1-1 | 13v2 | Valor da BC do ICMS ST cobrado anteriormente por ST (v2.0). O valor pode ser omitido quando a legislação não exigir a sua informação. (NT 2011/004) |
| 245.50.0 | N26a | pST | Alíquota suportada pelo Consumidor Final | E | N25.1 | N | 1-1 | 3v2-4 | Deve ser informada a alíquota do cálculo do ICMS-ST, já incluso o FCP caso incida sobre a mercadoria. Exemplo:<br>alíquota da mercadoria na venda ao consumidor final = 18% e 2% de FCP. A alíquota a ser informada no campo pST deve ser 20%. |
| 245.51 | N27 | vICMSSTRet | Valor do ICMS ST retido | E | N25.1 | N | 1-1 | 13v2 | Valor do ICMS ST cobrado anteriormente por ST (v2.0). O valor pode ser omitido quando a legislação não exigir a sua informação. (NT 2011/004) |
| **245.51.0** | **N27.1** | **-x-** | **Sequência xml** | **G** | **N10.g** |  | **0-1** |  |  |
| 245.51w | N27a | vBCFCPSTR et | Valor da Base de Cálculo do FCP retido anteriormente | E | N27.1 | N | 1-1 | 13v2 | Informar o valor da Base de Cálculo do FCP retido anteriormente por ST |
| 245.51x | N27b | pFCPSTRet | Percentual do FCP retido anteriormente por Substituição Tributária | E | N27.1 | N | 1-1 | 3v2-4 | Percentual relativo ao Fundo de Combate à Pobreza (FCP). |
| 245.51y | N27d | vFCPSTRet | Valor do FCP retido anteriormente por Substituição Tributária | E | N27.1 | N | 1-1 | 13v2 | Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP) retido por substituição tributária. |
| **245.51.1** | **N33** | **-x-** | **Sequência XML** | **G** | **N10g** |  | **0-1** |  | **Grupo opcional para informações do ICMS Efetivo.** |
| 245.51.2 | N34 | pRedBCEfet | Percentual de redução da base de cálculo efetiva | E | N33 | N | 1-1 | 3v2-4 | Percentual de redução, caso estivesse submetida ao regime comum de tributação, para obtenção da base de cálculo efetiva (vBCEfet).<br>Obs.: opcional a critério da UF. |
| 245.51.3 | N35 | vBCEfet | Valor da base de cálculo efetiva | E | N33 | N | 1-1 | 13v2 | Valor da base de cálculo que seria atribuída à operação própria do contribuinte substituído, caso estivesse submetida ao regime comum de tributação, obtida pelo produto do Vprod por (1- pRedBCEfet).<br>Obs.: opcional a critério da UF. |
| <!-- p.45 --> 245.51.4 | N36 | pICMSEfet | Alíquota do ICMS efetiva | E | N33 | N | 1-1 | 3v2-4 | Alíquota do ICMS na operação a consumidor final, caso estivesse submetida ao regime comum de tributação.<br>Obs.: opcional a critério da UF. |
| 245.51.5 | N37 | vICMSEfet | Valor do ICMS efetivo | E | N33 | N | 1-1 | 13v2 | Obtido pelo produto do valor do campo pICMSEfet pelo valor do campo vBCEfet, caso estivesse submetida ao regime comum de tributação.<br>Obs.: opcional a critério da UF. |
| **245.52** | **N10h** | **ICMSSN900** | **Grupo CRT=1 – Simples Nacional e CSOSN=900** | **CG** | **N01** |  | **1-1** |  | **Tributação ICMS pelo Simples Nacional, CSOSN=900 (v2.0)** |
| 245.53 | N11 | Orig | Origem da mercadoria | E | N10h | N | 1-1 | 1 | 0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8;<br>1 - Estrangeira - Importação direta, exceto a indicada no código 6;<br>2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7;<br>3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40% e inferior ou igual a 70%;<br>4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes;<br>5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%;<br>6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural;<br>7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural.<br>8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%; |
| 245.54 | N12a | CSOSN | Código de Situação da Operação – SIMPLES NACIONAL | E | N10h | N | 1-1 | 3 | 900=Outros (v2.0) |
| **245.55** | **N12.1** | **-x-** | **Sequência XML** | **G** | **N10h** |  | **0-1** |  | **Grupo opcional.** |
| 245.55 | N13 | modBC | Modalidade de determinação da BC do ICMS | E | N12.1 | N | 1-1 | 1 | 0=Margem Valor Agregado (%);<br>1=Pauta (Valor);<br>2=Preço Tabelado Máx. (valor);<br>3=Valor da operação. (v2.0) |
| <!-- p.46 --> 245.56 | N15 | vBC | Valor da BC do ICMS | E | N12.1 | N | 1-1 | 13v2 | (v2.0) |
| 245.57 | N14 | pRedBC | Percentual da Redução de BC | E | N12.1 | N | 0-1 | 3v2-4 | (v2.0) |
| 245.58 | N16 | pICMS | Alíquota do imposto | E | N12.1 | N | 1-1 | 3v2-4 | (v2.0) |
| 245.59 | N17 | vICMS | Valor do ICMS | E | N12.1 | N | 1-1 | 13v2 | (v2.0) |
| **245.60** | **N17.1** | **-x-** | **Sequência XML** | **G** | **N10h** |  | **0-1** |  | **Grupo opcional.** |
| 245.60 | N18 | modBCST | Modalidade de determinação da BC do ICMS ST | E | N17.1 | N | 1-1 | 1 | 0=Preço tabelado ou máximo sugerido;<br>1=Lista Negativa (valor);<br>2=Lista Positiva (valor);<br>3=Lista Neutra (valor);<br>4=Margem Valor Agregado (%);<br>5=Pauta (valor); (v2.0) |
| 245.61 | N19 | pMVAST | Percentual da margem de valor Adicionado do ICMS ST | E | N17.1 | N | 0-1 | 3v2-4 | (v2.0) |
| 245.62 | N20 | pRedBCST | Percentual da Redução de BC do ICMS ST | E | N17.1 | N | 0-1 | 3v2-4 | (v2.0) |
| 245.63 | N21 | vBCST | Valor da BC do ICMS ST | E | N17.1 | N | 1-1 | 13v2 | (v2.0) |
| 245.64 | N22 | pICMSST | Alíquota do imposto do ICMS ST | E | N17.1 | N | 1-1 | 3v2-4 | Alíquota do ICMS ST sem o FCP. Quando for o caso, informar a alíquota do FCP no campo pFCP |
| 245.65 | N23 | vICMSST | Valor do ICMS ST | E | N17.1 | N | 1-1 | 13v2 | Valor do ICMS ST retido(v2.0) |
| **245.65.0** | **N23.1** | **-x-** | **Sequência xml** | **G** | **N10.h** |  | **0-1** |  |  |
| 245.65w | N23a | vBCFCPST | Valor da Base de Cálculo do FCP retido por Substituição Tributária | E | N23.1 | N | 1-1 | 13v2 | Informar o valor da Base de Cálculo do FCP retido por Substituição Tributária |
| 245.65x | N23b | pFCPST | Percentual do FCP retido por Substituição Tributária | E | N23.1 | N | 1-1 | 3v2-4 | Percentual relativo ao Fundo de Combate à Pobreza (FCP) retido por substituição tributária.. |
| 245.65y | N23d | vFCPST | Valor do FCP retido por Substituição Tributária | E | N23.1 | N | 1-1 | 13v2 | Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP) retido por substituição tributária. |
| **245.52** | **N27.1** | **-x-** | **Sequência XML** | **G** | **N10h** |  | **0-1** |  | **Grupo opcional.** |
| 245.52 | N29 | pCredSN | Alíquota aplicável de cálculo do crédito (Simples Nacional). | E | N27.1 | N | 1-1 | 3v2-4 | (v2.0) |
| 245.53 | N30 | vCredICMSS N | Valor crédito do ICMS que pode ser aproveitado nos termos do art. 23 da LC 123/2006 (Simples Nacional) | E | N27.1 | N | 1-1 | 13v2 | (v2.0) |

<!-- p.47 -->
### NA. ICMS para a UF de destino

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **245a.01** | **NA01** | **ICMSUFDest** | **Informação do ICMS Interestadual** | **G** | **M01** |  | **0-1** |  | **Grupo a ser informado nas vendas interestaduais para consumidor final, não contribuinte do ICMS.<br>Observação: Este grupo não deve ser utilizado nas operações com veículos automotores novos efetuadas por meio de faturamento direto para o consumidor (Convênio ICMS 51/00), as quais possuem grupo de campos próprio (ICMSPart)** |
| 245a.03 | NA03 | vBCUFDest | Valor da BC do ICMS na UF de destino | E | NA01 | N | 1-1 | 13v2 | Valor da Base de Cálculo do ICMS na UF de destino. |
| 245a.04 | NA04 | vBCFCPUFDest | Valor da BC FCP na UF de destino | E | NA01 | N | 0-1 | 13v2 | Valor da Base de Cálculo do FCP na UF de destino. |
| 245a.05 | NA05 | pFCPUFDest | Percentual do ICMS relativo ao Fundo de Combate à Pobreza (FCP) na UF de destino | E | NA01 | N | 0-1 | 3v2-4 | Percentual adicional inserido na alíquota interna da UF de destino, relativo ao Fundo de Combate à Pobreza (FCP) naquela UF. |
| 245a.07 | NA07 | pICMSUFDest | Alíquota interna da UF de destino | E | NA01 | N | 1-1 | 3v2-4 | Alíquota adotada nas operações internas na UF de destino para o produto / mercadoria. A alíquota do Fundo de Combate à Pobreza, se existente para o produto / mercadoria, deve ser informada no campo próprio (pFCPUFDest) não devendo ser somada a essa alíquota interna. |
| 245a.09 | NA09 | pICMSInter | Alíquota interestadual das UF envolvidas | E | NA01 | N | 1-1 | 2v2 | Alíquota interestadual das UF envolvidas:<br>- 4% alíquota interestadual para produtos importados;<br>- 7% para os Estados de origem do Sul e Sudeste (exceto ES), destinado para os Estados do Norte, Nordeste, Centro-Oeste e Espírito Santo;<br>- 12% para os demais casos. |
| 245a.11 | NA11 | pICMSInterPart | Percentual provisório de partilha do ICMS Interestadual | E | NA01 | N | 1-1 | 3v2-4 | Percentual de ICMS Interestadual para a UF de destino:<br>- 40% em 2016;<br>- 60% em 2017;<br>- 80% em 2018;<br>- 100% a partir de 2019. |
| 245a.13 | NA13 | vFCPUFDest | Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP) da UF de destino | E | NA01 | N | 0-1 | 13v2 | Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP) da UF de destino. |
| 245a.15 | NA15 | vICMSUFDest | Valor do ICMS Interestadual para a UF de destino | E | NA01 | N | 1-1 | 13v2 | Valor do ICMS Interestadual para a UF de destino (sem o valor do ICMS relativo ao FCP). |
| 245a.17 | NA17 | vICMSUFRemet | Valor do ICMS Interestadual para a UF do remetente | E | NA01 | N | 1-1 | 13v2 | Valor do ICMS Interestadual para a UF do remetente.<br>Nota: A partir de 2019, este valor será zero. |

<!-- p.48 -->
### O. Imposto sobre Produtos Industrializados

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **246** | **O01** | **IPI** | **Grupo IPI** | **CG** | **M01** |  | **0-1** |  | **Informar apenas quando o item for sujeito ao IPI** |
| 247 | O02 | clEnq | Classe de enquadramento do IPI para Cigarros e Bebidas | E | O01 | C | 0-1 | 1-5 | Preenchimento conforme Atos Normativos editados pela Receita Federal (Observação 2) |
| 248 | O03 | CNPJProd | CNPJ do produtor da mercadoria, quando diferente do emitente. Somente para os casos de exportação direta ou indireta. | E | O01 | N | 0-1 | 14 | Informar os zeros não significativos |
| 249 | O04 | cSelo | Código do selo de controle IPI | E | O01 | C | 0-1 | 1-60 | Preenchimento conforme Anexo II-A da Instrução Normativa RFB Nº 770/2007 TIPO DE SELO CÓDIG COR DO SELO O Produto Nacional 9710-01 Verde combinado com marrom Produto Nacional 9710-10 Verde Escuro para Exportação - combinado com Tipo "1" marrom Produto Nacional 9710-11 Verde Escuro para Exportação - combinado com Tipo "2" marrom Produto Nacional 9710-12 Verde Escuro para Exportação - combinado com Tipo "3" marrom Produto Estrangeiro 8610-09 Vermelho combinado com azul |
| 250 | O05 | qSelo | Quantidade de selo de controle | E | O01 | N | 0-1 | 1-12 |  |
| 251 | O06 | cEnq | Código de Enquadramento Legal do IPI | E | O01 | N | 1-1 | 1-3 | Preenchimento conforme Anexo XIV da Nota Técnica 2015.002. |
| **252** | **O07** | **IPITrib** | **Grupo do CST 00, 49, 50 e 99** | **CG** | **O01** |  | **1-1** |  | **Informar apenas um dos grupos O07 ou O08 com base valor atribuído ao campo O09 – CST do IPI** |
| <!-- p.49 --> 253 | O09 | CST | Código da situação tributária do IPI | E | O07 | N | 1-1 | 2 | 00=Entrada com recuperação de crédito<br>49=Outras entradas<br>50=Saída tributada<br>99=Outras saídas |
| **253.1** | **O09.1** | **-x-** | **Sequência XML** | **CG** | **O07** |  | **1-1** |  | **Informar os campos O10 e O13 se o cálculo do IPI for por alíquota.** |
| 254 | O10 | vBC | Valor da BC do IPI | E | O09.1 | N | 1-1 | 13v2 |  |
| 257 | O13 | pIPI | Alíquota do IPI | E | O09.1 | N | 1-1 | 3v2-4 |  |
| **257.1** | **O13.1** | **-x-** | **Sequência XML** | **CG** | **O07** |  | **1-1** |  | **Informar os campos O11 e O12 se o cálculo do IPI for de valor por unidade.** |
| 255 | O11 | qUnid | Quantidade total na unidade padrão para tributação (somente para os produtos tributados por unidade) | E | O13.1 | N | 1-1 | 12v0-4 |  |
| 256 | O12 | vUnid | Valor por Unidade Tributável | E | O13.1 | N | 1-1 | 11v0-4 |  |
| 259 | O14 | vIPI | Valor do IPI | E | O07 | N | 1-1 | 13v2 |  |
| **260** | **O08** | **IPINT** | **Grupo CST 01, 02, 03, 04, 51, 52, 53, 54 e 55** | **CG** | **O01** |  | **1-1** |  |  |
| 261 | O09 | CST | Código da situação tributária do IPI | E | O08 | C | 1-1 | 2 | 01=Entrada tributada com alíquota zero<br>02=Entrada isenta<br>03=Entrada não-tributada<br>04=Entrada imune<br>05=Entrada com suspensão<br>51=Saída tributada com alíquota zero<br>52=Saída isenta<br>53=Saída não-tributada<br>54=Saída imune<br>55=Saída com suspensão |

<!-- p.50 -->
### Grupo W. Total da NF-e

Criação dos campos totalizadores do FCP, do IPI no caso de devolução.

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **326** | **W01** | **Total** | **Grupo Totais da NF-e** | **G** | **A01** |  | **1-1** |  | **O grupo de valores totais da NF-e deve ser informado com o somatório do campo correspondente dos itens.** |
| **327** | **W02** | **ICMSTot** | **Grupo Totais referentes ao ICMS** | **G** | **W01** |  | **1-1** |  |  |
| 328 | W03 | vBC | Base de Cálculo do ICMS | E | W02 | N | 1-1 | 13v2 |  |
| 329 | W04 | vICMS | Valor Total do ICMS | E | W02 | N | 1-1 | 13v2 |  |
| 329.01 | W04a | vICMSDeson | Valor Total do ICMS desonerado | E | W02 | N | 1-1 | 13v2 |  |
| 329.03 | W04c | vFCPUFDest | Valor total do ICMS relativo Fundo de Combate à Pobreza (FCP) da UF de destino | E | W02 | N | 0-1 | 13v2 | Valor total do ICMS relativo ao Fundo de Combate à Pobreza (FCP) para a UF de destino. |
| 329.05 | W04e | vICMSUFDest | Valor total do ICMS Interestadual para a UF de destino | E | W02 | N | 0-1 | 13v2 | Valor total do ICMS Interestadual para a UF de destino (sem o valor do ICMS relativo ao FCP). |
| 329.07 | W04g | vICMSUFRemet | Valor total do ICMS Interestadual para a UF do remetente | E | W02 | N | 0-1 | 13v2 | Valor total do ICMS Interestadual para a UF do remetente.<br>Nota: A partir de 2019, este valor será zero |
| 329.08 | W04h | vFCP | Valor Total do FCP (Fundo de Combate à Pobreza) | E | W02 | N | 1-1 | 13v2 | Corresponde ao total da soma dos campos id: N17c |
| 330 | W05 | vBCST | Base de Cálculo do ICMS ST | E | W02 | N | 1-1 | 13v2 |  |
| 331 | W06 | vST | Valor Total do ICMS ST | E | W02 | N | 1-1 | 13v2 |  |
| 331.01 | W06a | vFCPST | Valor Total do FCP (Fundo de Combate à Pobreza) retido por substituição tributária | E | W02 | N | 1-1 | 13v2 | Corresponde ao total da soma dos campos id:N23d |
| 331.02 | W06b | vFCPSTRet | Valor Total do FCP retido anteriormente por Substituição Tributária | E | W02 | N | 1-1 | 13v2 | Corresponde ao total da soma dos campos id:N27d |
| <!-- p.51 --> 332 | W07 | vProd | Valor Total dos produtos e serviços | E | W02 | N | 1-1 | 13v2 |  |
| 333 | W08 | vFrete | Valor Total do Frete | E | W02 | N | 1-1 | 13v2 |  |
| 334 | W09 | vSeg | Valor Total do Seguro | E | W02 | N | 1-1 | 13v2 |  |
| 335 | W10 | vDesc | Valor Total do Desconto | E | W02 | N | 1-1 | 13v2 |  |
| 336 | W11 | vII | Valor Total do II | E | W02 | N | 1-1 | 13v2 |  |
| 337 | W12 | vIPI | Valor Total do IPI | E | W02 | N | 1-1 | 13v2 |  |
| 337.01 | W12a | vIPIDevol | Valor Total do IPI devolvido | E | W02 | N | 1-1 | 13v2 | Deve ser informado quando preenchido o Grupo Tributos Devolvidos na emissão de nota finNFe=4 (devolução) nas operações com não contribuintes do IPI. Corresponde ao total da soma dos campos id:UA04. |
| 338 | W13 | vPIS | Valor do PIS | E | W02 | N | 1-1 | 13v2 |  |
| 339 | W14 | vCOFINS | Valor da COFINS | E | W02 | N | 1-1 | 13v2 |  |
| 340 | W15 | vOutro | Outras Despesas acessórias | E | W02 | N | 1-1 | 13v2 |  |
| 341 | W16 | vNF | Valor Total da NF-e | E | W02 | N | 1-1 | 13v2 | Vide validação para este campo na regra de validação W16-xx. |

341ª W16a vTotTrib Valor aproximado total de tributos E W02 N 0-1 13v2 (NT 2013/003)

federais, estaduais e municipais.

### Grupo X. Informações do Transporte da NF-e

Criação de novas modalidades de transporte.

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **356** | **X01** | **transp** | **Grupo Informações do Transporte** | **G** | **A01** |  | **1-1** |  |  |
| 357 | X02 | modFrete | Modalidade do frete | E | X01 | N | 1-1 | 1 | 0=Contratação do Frete por conta do Remetente (CIF);<br>1=Contratação do Frete por conta do Destinatário (FOB);<br>2=Contratação do Frete por conta de Terceiros;<br>3=Transporte Próprio por conta do Remetente;<br>4=Transporte Próprio por conta do Destinatário;<br>9=Sem Ocorrência de Transporte. |

### Y. Dados da Cobrança

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| <!-- p.52 --> **389** | **Y01** | **cobr** | **Grupo Cobrança** | **G** | **A01** |  | **0-1** |  |  |
| **390** | **Y02** | **fat** | **Grupo Fatura** | **G** | **Y01** |  | **0-1** |  |  |
| 391 | Y03 | nFat | Número da Fatura | E | Y02 | C | 0-1 | 1-60 |  |
| 392 | Y04 | vOrig | Valor Original da Fatura | E | Y02 | N | 0-1 | 13v2 |  |
| 393 | Y05 | vDesc | Valor do desconto | E | Y02 | N | 0-1 | 13v2 |  |
| 394 | Y06 | vLiq | Valor Líquido da Fatura | E | Y02 | N | 0-1 | 13v2 |  |
| **395** | **Y07** | **dup** | **Grupo Parcelas** | **G** | **Y01** |  | **0-120** |  |  |
| 396 | Y08 | nDup | Número da Parcela | E | Y07 | C | 0-1 | 1-60 | Obrigatória informação do número de parcelas com 3 algarismos, sequenciais e consecutivos.<br>Ex.: “001”,”002”,”003”,...<br>Observação: este padrão de preenchimento será obrigatório somente a partir de 03/09/2018 |
| 397 | Y09 | dVenc | Data de vencimento | E | Y07 | D | 0-1 |  | Formato: “AAAA-MM-DD”. Obrigatória a informação da data de vencimento na ordem crescente das datas.<br>Ex.: “2018-06-01”,”2018-07-01”, “2018-08-01”,... |
| 398 | Y10 | vDup | Valor da Parcela | E | Y07 | N | 1-1 | 13v2 |  |

### YA. Informações de Pagamento

Obrigatório o preenchimento do Grupo Informações de Pagamento para NF-e e NFC-e. Para as notas com finalidade de Ajuste ou Devolução o

campo Meio de Pagamento deve ser preenchido com 90=Sem Pagamento.

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **398a** | **YA01** | **pag** | **Grupo de Informações de Pagamento** | **G** | **A01** |  | **1-1** |  |  |
| **398a1** | **YA01a** | **detPag** | **Grupo Detalhamento do Pagamento** | **G** | **YA01** |  | **1-100** |  |  |
| 398a2 | YA01b | indPag | Indicador da Forma de Pagamento | E | YA01a | N | 0-1 | 1 | 0= Pagamento à Vista<br>1= Pagamento à Prazo |
| 398b | YA02 | tPag | Meio de pagamento | E | YA01a | N | 1-1 | 2 | 01=Dinheiro<br>02=Cheque<br>03=Cartão de Crédito<br>04=Cartão de Débito<br>05=Crédito Loja<br>10=Vale Alimentação<br>11=Vale Refeição<br>12=Vale Presente<br>13=Vale Combustível<br>14=Duplicata Mercantil<br>15=Boleto Bancário<br>90= Sem pagamento<br>99=Outros |
| <!-- p.53 --> 398c | YA03 | vPag | Valor do Pagamento | E YA01a |  | N | 1-1 | 13v2 |  |
| 398d | YA04 | card | Grupo de Cartões | G YA01a |  |  | 0-1 |  |  |
| 398d.1 | YA04a | tpIntegra | Tipo de Integração para pagamento | E | YA04 | N | 1-1 | 1 | Tipo de Integração do processo de pagamento com o sistema de automação da empresa:<br>1=Pagamento integrado com o sistema de automação da empresa (Ex.: equipamento TEF, Comércio Eletrônico);<br>2= Pagamento não integrado com o sistema de automação da empresa (Ex.: equipamento POS); |
| 398e | YA05 | CNPJ | CNPJ da Credenciadora de cartão de crédito e/ou débito | E | YA04 | C | 0-1 | 14 | Informar o CNPJ da Credenciadora de cartão de crédito / débito |
| 398f | YA06 | tBand | Bandeira da operadora de cartão de crédito e/ou débito | E | YA04 | N | 0-1 | 2 | 01=Visa<br>02=Mastercard<br>03=American Express<br>04=Sorocred<br>05=Diners Club<br>06=Elo<br>07=Hipercard<br>08=Aura<br>09=Cabal<br>99=Outros |
| 398g | YA07 | cAut | Número de autorização da operação cartão de crédito e/ou débito | E | YA04 | C | 0-1 | 1-20 | Identifica o número da autorização da transação da operação com cartão de crédito e/ou débito |
| 398i | YA09 | vTroco | Valor do troco | E | YA01 | N | 0-1 | 13V2 | Valor do Troco |

### ZX. Informações Suplementares da Nota Fiscal

Criação de novo campo com o objetivo de padronizar a URL de consulta por chave de acesso que aparece no DANFE NFC-e.

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **424** | **ZX01** | **infNFeSupl** | **Informações suplementares da Nota Fiscal** | **G** | **Raiz** | **-** | **0-1** | **-** | **Informações suplementares da Nota Fiscal, não afetando a assinatura digital. (NT 2015.002)** |
| <!-- p.54 --> <!-- p.55 --> 425 | ZX02 | qrCode | Texto com o QR-Code impresso no DANFE NFC-e. Obs.: URLs, por UF, utilizadas para consulta QR Code acesse: http://nfce.encat.org/desenvolvedor/qrcode/ | E | ZX01 | C | 1-1 | 100- 600 | Para a versão “100” do QR Code:<br>Informar a URL da “Consulta da NFC-e via QR-Code” no site da SEFAZ, compreendendo:<br>- Endereço do site da UF, incluindo o protocolo de comunicação (“http://” ou “https://”);<br>- Caractere separador “?”;<br>- Parâmetros do QR-Code, concatenados usando o “&” como separador.<br>Nota 1: Vide “Manual de Padrões Técnicos do DANFE NFC-e e QR-Code” que documenta os endereços dos sites das UF, os parâmetros do QR-Code e a fórmula de montagem e/ou cálculo dos parâmetros.<br>Nota 2: Respeitar o uso de caracteres maiúsculos / minúsculos, conforme consta no referido Manual.<br>Nota 3: O caractere “&” é um caractere reservado do XML, portanto não pode aparecer no conteúdo da tag.<br>Para viabilizar a informação do QR-Code, o conteúdo deste campo deve ser informado como:<br><![CDATA[texto]]> Exemplo:<![CDATA[https://www.sefaz.rs.gov.br/NFCE/ NFCECOM.aspx?chNFe=431501082876930001576510 10000000971000001251&nVersao=100&tpAmb=2&cDe st=99999999000191&dhEmi=323031352d30312d32305 431373a30303a34392d30323a3030&vNF=1.00&vICMS =0.00&digVal=2f4a703477714e6d6e4e646d31776b6474 3936655a486b65354f513d&cIdToken=000001&cHashQ RCode=ecc4f0e7e612456f2e3521768bd572b6f0eae240 ]]> Para a versão “2” do QR Code:<br>Informar a URL da “Consulta da NFC-e via QR-Code”, na versão 2, conforme os seguintes modelos:<br>- Para a NFC-e emitida “on-line:<br>https:// endereco-consulta- QRCode?p=<chave_acesso>|<versao_qrcode>|<tipo_a mbiente>|<identificador_csc>|<codigo_hash> Ou http:// endereco-consulta- QRCode?p=<chave_acesso>|<versao_qrcode>|<tipo_a mbiente>|<identificador_csc>|<codigo_hash> - Para a NFC-e emitida em contingência “off-line:<br>http:// endereco-consulta- QRCode?p=<chave_acesso>|<versao_qrcode>|<tipo_a mbiente>|<dia_data_emissao>|<valor_total_nfce>|<digV al>|<identificador_csc>|<codigo_hash> Ou https:// endereco-consulta- QRCode?p=<chave_acesso>|<versao_qrcode>|<tipo_a mbiente>|<dia_data_emissao>|<valor_total_nfce>|<digV al>|<identificador_csc>|<codigo_hash><br>Nota 1: Vide “Manual de Padrões Técnicos do DANFE NFC-e e QR-Code” que documenta os endereços de consulta de QR Code por UF, os parâmetros do QR- Code e a fórmula de montagem e/ou cálculo dos parâmetros.<br>Nota 2: Respeitar o uso de caracteres maiúsculos / minúsculos, conforme consta no referido Manual.<br>Nota 3: A forma de emissão da NFC-e está codificado no campo “tpEmis” do XML, e deve ser usado na validação dos diferentes modelos de QR-Code<br>Nota4: Nesta nova versão do layout do qrCode não existe a necessidade de informar o conteúdo da tag qrCode dentro de uma seção CDATA. |
| <!-- p.56 --> 426 | ZX03 | urlChave | Texto com a URL de consulta por chave de acesso a ser impressa no DANFE NFC-e. Obs.: URLs, por UF, utilizadas para consulta por chave de acesso acesse: http://nfce.encat.org/consumidor/consulte- nota/ | E | ZX01 | C | 1-1 | 21-85 | Informar a URL da “Consulta por chave de acesso da NFC-e”. A mesma URL que deve estar informada no DANFE NFC-e para consulta por chave de acesso. |
