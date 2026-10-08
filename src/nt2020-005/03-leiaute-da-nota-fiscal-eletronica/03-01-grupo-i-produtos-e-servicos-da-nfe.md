<!-- p.9 -->
# 3.1. Grupo I. Produtos e Serviços da NF-e

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **100** | **I01** | **prod** | **Detalhamento de Produtos e Serviços** | **G** | **H01** | | **1-1** | | |
| 101 | I02 | cProd | Código do produto ou serviço | E | I01 | C | 1-1 | 1 - 60 | Preencher com CFOP, caso se trate de itens não relacionados com mercadorias/produtos e que o contribuinte não possua codificação própria.<br>Formato: ”CFOP9999” |
| 102 | I03 | cEAN | GTIN (Global Trade Item Number) do produto, antigo código EAN ou código de barras | E | I01 | C | 1-1 | 0,8,12, 13, 14 | Preencher com o código GTIN-8, GTIN-12, GTIN-13 ou GTIN-14 (antigos códigos EAN, UPC e DUN-14)<br>Para produtos que não possuem código de barras com GTIN, deve ser informado o literal “SEM GTIN”;<br>(atualizado NT 2017/001) |
| 102.01 | I03a | cBarra | Código de barras diferente do padrão GTIN | E | I01 | C | 0-1 | 3-30 | Preencher com o Código de Barras próprio ou de terceiros que seja diferente do padrão GTIN |
| 103 | I04 | xProd | Descrição do produto ou serviço | E | I01 | C | 1-1 | 1 - 120 | |
| 104 | I05 | NCM | Código NCM com 8 dígitos | E | I01 | N | 1-1 | 2, 8 | Obrigatória informação do NCM completo (8 dígitos).<br>Nota: Em caso de item de serviço ou item que não tenham produto (ex. transferência de crédito, crédito do ativo imobilizado, etc.), informar o valor 00 (dois zeros). (NT 2014/004) |
| 104.01 | I05a | NVE | Codificação NVE – Nomenclatura de Valor Aduaneiro e Estatística | E | I01 | C | 0-8 | 6 | Codificação opcional que detalha alguns NCM. Formato: duas letras maiúsculas e 4 algarismos. Se a mercadoria se enquadrar em mais de uma codificação, informar até 8 codificações principais. Vide: Anexo XII.03 – Identificador NVE |
| **104.02** | **I05b** | **-x-** | **Sequência XML** | **G** | **I01** | | **0-1** | | **(Incluído na NT2016.002)** |
| 104.03 | I05c | CEST | Código CEST | E | I05b | N | 1-1 | 7 | Campo CEST (Código Especificador da Substituição Tributária), que estabelece a sistemática de uniformização e identificação das mercadorias e bens passíveis de sujeição aos regimes de substituição tributária e de antecipação de recolhimento do ICMS<br>(Incluído na NT 2015/003. Atualizado NT2016.002) |
| 104.04 | I05d | indEscala | Indicador de Escala Relevante | E | I05b | C | 0-1 | 1 | Indicador de Produção em escala relevante, conforme Cláusula 23 do Convenio ICMS 52/2017: S – Produzido em Escala Relevante; N – Produzido em Escala NÃO Relevante. Nota: preenchimento obrigatório para produtos com NCM relacionado no Anexo XXVII do Convenio 52/2017<br>(Incluído na NT2016.002) |
| 104.05 | I05e | CNPJFab | CNPJ do Fabricante da Mercadoria | E | I05b | N | 0-1 | 14 | CNPJ do Fabricante da Mercadoria, obrigatório para produto em escala NÃO relevante.<br>(Incluído na NT2016.002) |

<!-- p.10 -->
| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| 104.06 | I05f | cBenef | Código de Benefício Fiscal na UF aplicado ao item. Obs.: Deve ser utilizado o mesmo código adotado na EFD e outras declarações, nas UF que o exigem. | E | I01 | C | 0-1 | 8,10 | Código de Benefício Fiscal utilizado pela UF, aplicado ao item. Obs.: Deve ser utilizado o mesmo código adotado na EFD e outras declarações, nas UF que o exigem.<br>(Incluído na NT2016.002) |
| 105 | I06 | EXTIPI | EX_TIPI | E | I01 | N | 0-1 | 2 - 3 | Preencher de acordo com o código EX da TIPI. Em caso de serviço, não incluir a TAG. |
| 107 | I08 | CFOP | Código Fiscal de Operações e Prestações | E | I01 | N | 1-1 | 4 | Utilizar Tabela de CFOP. |
| 108 | I09 | uCom | Unidade Comercial | E | I01 | C | 1-1 | 1 - 6 | Informar a unidade de comercialização do produto. |
| 109 | I10 | qCom | Quantidade Comercial | E | I01 | N | 1-1 | 11v0-4 | Informar a quantidade de comercialização do produto (v2.0). |
| 109.01 | I10a | vUnCom | Valor Unitário de Comercialização | E | I01 | N | 1-1 | 11v0-10 | Informar o valor unitário de comercialização do produto, campo meramente informativo, o contribuinte pode utilizar a precisão desejada (0-10 decimais). Para efeitos de cálculo, o valor unitário será obtido pela divisão do valor do produto pela quantidade comercial. (v2.0) |
| 110 | I11 | vProd | Valor Total Bruto dos Produtos ou Serviços. | E | I01 | N | 1-1 | 13v2 | O valor do ICMS faz parte do Valor Total Bruto, exceto nas notas de importação |
| 111 | I12 | cEANTrib | GTIN (*Global Trade Item Number*) da unidade tributável, antigo código EAN ou código de barras | E | I01 | C | 1-1 | 0,8,12, 13, 14 | Preencher com o código GTIN-8, GTIN-12, GTIN-13 ou GTIN-14 (antigos códigos EAN, UPC e DUN-14) da unidade tributável do produto.<br>O GTIN da unidade tributável deve corresponder àquele da menor unidade comercializável identificada por código GTIN.<br>Para produtos que não possuem código de barras com GTIN, deve ser informado o literal "SEM GTIN"<br>(Atualizado NT 2017.001) |
| 111.01 | I12a | cBarraTrib | Código de Barras da unidade tributável que seja diferente do padrão GTIN | E | I01 | C | 0-1 | 3-30 | Preencher com o Código de Barras próprio ou de terceiros, que seja diferente do padrão GTIN, correspondente àquele da menor unidade comercializável identificado por Código de Barras |
| 112 | I13 | uTrib | Unidade Tributável | E | I01 | C | 1-1 | 1 - 6 | |
| 113 | I14 | qTrib | Quantidade Tributável | E | I01 | N | 1-1 | 11v0-4 | O GTIN da unidade tributável deve corresponder àquele da menor unidade comercializável identificada por código GTIN |
| 113.01 | I14a | vUnTrib | Valor Unitário de tributação | E | I01 | N | 1-1 | 11v0-10 | |
| 114 | I15 | vFrete | Valor Total do Frete | E | I01 | N | 0-1 | 13v2 | Para produtos que não possuem código de barras com GTIN, deve ser informado o literal “SEM GTIN” |
| 115 | I16 | vSeg | Valor Total do Seguro | E | I01 | N | 0-1 | 13v2 | |
| 116 | I17 | vDesc | Valor do Desconto | E | I01 | N | 0-1 | 13v2 | |
| 116a | I17a | vOutro | Outras despesas acessórias | E | I01 | N | 0-1 | 13v2 | (v2.0) |
| 116b | I17b | indTot | Indica se valor do Item (vProd) entra no valor total da NF-e (vProd) | E | I01 | N | 1-1 | 1 | 0=Valor do item (vProd) não compõe o valor total da NF-e<br>1=Valor do item (vProd) compõe o valor total da NF-e (vProd) (v2.0) |
