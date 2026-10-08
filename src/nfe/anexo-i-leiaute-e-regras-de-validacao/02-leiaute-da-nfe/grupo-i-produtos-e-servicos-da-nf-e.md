# Grupo I. Produtos e Serviços da NF-e

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **100** | **prod (I01)** | **G** | **H01** |  | **1-1** |  | **Detalhamento de Produtos e Serviços** |
| 101 | cProd (I02) | E | I01 | C | 1-1 | 1 - 60 | Código do produto ou serviço<br>Preencher com CFOP, caso se trate de itens não relacionados com mercadorias/produtos e que o contribuinte não possua codificação própria. Formato: ”CFOP9999” |
| 102 | cEAN (I03) | E | I01 | C | 1-1 | 0,8,12, 13, 14 | GTIN (Global Trade Item Number) do produto, antigo código EAN ou código de barras<br>Preencher com o código GTIN-8, GTIN-12, GTIN-13 ou GTIN-14 (antigos códigos EAN, UPC e DUN-14) Para produtos que não possuem código de barras com GTIN, deve ser informado o literal “SEM GTIN”; (atualizado NT 2017/001) |
| 103 | xProd (I04) | E | I01 | C | 1-1 | 1 - 120 | Descrição do produto ou serviço |
| 104 | NCM (I05) | E | I01 | N | 1-1 | 2, 8 | Código NCM com 8 dígitos<br>Obrigatória informação do NCM completo (8 dígitos). Nota: Em caso de item de serviço ou item que não tenham produto (ex. transferência de crédito, crédito do ativo imobilizado, etc.), informar o valor 00 (dois zeros). (NT 2014/004) |
| 104a | NVE (I05a) | E | I01 | C | 0-8 | 6 | Codificação NVE - Nomenclatura de Valor Aduaneiro e Estatística.<br>Codificação opcional que detalha alguns NCM. Formato: duas letras maiúsculas e 4 algarismos. Se a mercadoria se enquadrar em mais de uma codificação, informar até 8 codificações principais. Vide: (Seção 8.6 do MOC – Visão Geral, Identificador NVE. <!-- p.18 --> |
| **104b** | **-x- (I05b)** | **G** | **I01** |  | **0-1** |  | **Sequência XML<br>(Incluído na NT2016.002)** |
| 104d | CEST (I05c) | E | I05b | N | 1-1 | 7 | Código CEST<br>Campo CEST (Código Especificador da Substituição Tributária), que estabelece a sistemática de uniformização e identificação das mercadorias e bens passíveis de sujeição aos regimes de substituição tributária e de antecipação de recolhimento do ICMS. (Incluído na NT 2015/003. Atualizado NT2016.002) |
| 104e | indEscala (I05d) | E | I05b | C | 0-1 | 1 | Indicador de Escala Relevante<br>Indicador de Produção em escala relevante, conforme Cláusula 23 do Convenio ICMS 52/2017: S - Produzido em Escala Relevante; N – Produzido em Escala NÃO Relevante. Nota: preenchimento Obrig.atório para produtos com NCM relacionado no Anexo XXVII do Convenio 52/2017 (Incluído na NT2016.002) |
| 104f | CNPJFab (I05e) | E | I05b | N | 0-1 | 14 | CNPJ do Fabricante da Mercadoria<br>CNPJ do Fabricante da Mercadoria, obrigatório para produto em escala NÃO relevante. (Incluído na NT2016.002) |
| 104g | cBenef (I05f) | E | I01 | C | 0-1 | 8,10 | Código de Benefício Fiscal na UF aplicado ao item<br>Código de Benefício Fiscal utilizado pela UF, aplicado ao item. Obs.: Deve ser utilizado o mesmo código adotado na EFD e outras declarações, nas UF que o exigem. (Incluído na NT2016.002) |
| 105 | EXTIPI (I06) | E | I01 | N | 0-1 | 2 - 3 | EX_TIPI<br>Preencher de acordo com o código EX da TIPI. Em caso de serviço, não incluir a TAG. |
| 107 | CFOP (I08) | E | I01 | N | 1-1 | 4 | Código Fiscal de Operações e Prestações<br>Utilizar Tabela de CFOP. |
| 108 | uCom (I09) | E | I01 | C | 1-1 | 1 - 6 | Unidade Comercial<br>Informar a unidade de comercialização do produto. |
| 109 | qCom (I10) | E | I01 | N | 1-1 | 11v0-4 | Quantidade Comercial<br>Informar a quantidade de comercialização do produto (v2.0). |
| 109a | vUnCom (I10a) | E | I01 | N | 1-1 11v0-10 |  | Valor Unitário de Comercialização<br>Informar o valor unitário de comercialização do produto, campo meramente informativo, o contribuinte pode utilizar a precisão desejada (0-10 decimais). Para efeitos de cálculo, o valor unitário será obtido pela divisão do valor do produto pela quantidade comercial. (v2.0) |
| 110 | vProd (I11) | E | I01 | N | 1-1 | 13v2 | Valor Total Bruto dos Produtos ou Serviços.<br>O valor do ICMS faz parte do Valor Total Bruto |
| 111 | cEANTrib (I12) | E | I01 | C | 1-1 | 0,8,12, 13, 14 | GTIN (Global Trade Item Number) da unidade tributável, antigo código EAN ou código de barras<br>Preencher com o código GTIN-8, GTIN-12, GTIN-13 ou GTIN-14 (antigos códigos EAN, UPC e DUN-14) da unidade tributável do produto. O GTIN da unidade tributável deve corresponder àquele da menor unidade comercializável identificada por código GTIN. Para produtos que não possuem código de barras com GTIN, deve ser informado o literal "SEM GTIN”; (Atualizado NT 2017.001) <!-- p.19 --> |
| 112 | uTrib (I13) | E | I01 | C | 1-1 | 1 - 6 | Unidade Tributável |
| 113 | qTrib (I14) | E | I01 | N | 1-1 | 11v0-4 | Quantidade Tributável<br>O GTIN da unidade tributável deve corresponder àquele da menor unidade comercializável identificada por código GTIN. |
| 113a | vUnTrib (I14a) | E | I01 | N | 1-1 11v0-10 |  | Valor Unitário de tributação |
| 114 | vFrete (I15) | E | I01 | N | 0-1 | 13v2 | Valor Total do Frete<br>Para produtos que não possuem código de barras com GTIN, deve ser informado o literal "SEM GTIN”; |
| 115 | vSeg (I16) | E | I01 | N | 0-1 | 13v2 | Valor Total do Seguro |
| 116 | vDesc (I17) | E | I01 | N | 0-1 | 13v2 | Valor do Desconto |
| 116a | vOutro (I17a) | E | I01 | N | 0-1 | 13v2 | Outras despesas acessórias<br>(v2.0) |
| 116b | indTot (I17b) | E | I01 | N | 1-1 | 1 | Indica se valor do Item (vProd) entra no valor total da NF-e (vProd)<br>0=Valor do item (vProd) não compõe o valor total da NF-e 1=Valor do item (vProd) compõe o valor total da NF- e (vProd) (v2.0) |
