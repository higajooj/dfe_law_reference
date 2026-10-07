<!-- p.5 -->
# 2. Leiaute da NF-e (Modelo 55 e 65)

A lista a seguir apresenta apenas os campos que foram atualizados de numérico para alfanumérico (char), em função da adoção do CNPJ alfanumérico.

## Grupo BA. Documento Fiscal Referenciado

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **29x.1** | **BA01** | **NFref** | **Informação de Documentos Fiscais referenciados** | **G** | **B01** | | **0-999** | | **Grupo com informações de Documentos Fiscais referenciados. Informação utilizada nas hipóteses previstas na legislação. (Ex.: Devolução de mercadorias, Substituição de NF cancelada, Complementação de NF, etc.).** |
| 29x.2 | BA02 | refNFe | Chave de acesso da NF-e referenciada | CE | BA01 | C | 1-1 | 44 | Referencia uma NF-e (modelo 55) emitida anteriormente, vinculada a NF-e atual, ou uma NFC-e (modelo 65) |
| 29x.2a | BA02a | refNFeSig | Chave da NF-e com código numérico zerado (NT 2022.003) | CE | BA01 | C | 1-1 | 44 | Referencia uma NF-e (modelo 55) emitida anteriormente pela sua Chave de Acesso com código numérico zerado, permitindo manter o sigilo da NF-e referenciada. |
| **29x.3** | **BA03** | **refNF** | **Informação da NF modelo 1/1A ou NF modelo 2 referenciada (alterado pela NT2016.002)** | **CG** | **BA01** | | **1-1** | | |
| 29x.6 | BA06 | CNPJ | CNPJ do emitente | E | BA03 | C | 1-1 | 14 | Informar o CNPJ do emitente da NF |
| **29x.10** | **BA10** | **refNFP** | **Informações da NF de produtor rural referenciada** | **CG** | **BA01** | | **1-1** | | |
| 29x.13 | BA13 | CNPJ | CNPJ do emitente | CE | BA10 | C | 1-1 | 14 | Informar o CNPJ do emitente da NF de produtor (v2.0) |
| 29x.19 | BA19 | refCTe | Chave de acesso do CT-e referenciada | CE | BA01 | C | 1-1 | 44 | Utilizar esta TAG para referenciar um CT-e emitido anteriormente, vinculada a NF-e atual - (v2.0). |

## Grupo C. Identificação do Emitente da Nota Fiscal eletrônica

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **30** | **C01** | **emit** | **Identificação do emitente da NF-e** | **G** | **A01** | | **1-1** | | |
| 31 | C02 | CNPJ | CNPJ do emitente | CE | C01 | C | 1-1 | 14 | Informar o CNPJ do emitente. Na emissão de NF-e avulsa pelo Fisco, as informações do remetente serão informadas neste grupo. O CNPJ ou CPF deverão ser informados com os zeros não significativos. |

## Grupo E. Identificação do Destinatário da Nota Fiscal eletrônica

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **62** | **E01** | **dest** | **Identificação do Destinatário da NF-e** | **G** | **A01** | | **0-1** | | **Grupo obrigatório para a NF-e (modelo 55).** |
| 63 | E02 | CNPJ | CNPJ do destinatário | CE | E01 | C | 1-1 | 14 | Informar o CNPJ ou o CPF do destinatário, preenchendo os zeros não significativos. No caso de operação com o exterior, ou para comprador estrangeiro informar a tag "idEstrangeiro”. |

## Grupo F. Identificação do Local de Retirada

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **80** | **F01** | **retirada** | **Identificação do Local de retirada** | **G** | **A01** | | **0-1** | | **Informar somente se diferente do endereço do remetente.** |
| 81 | F02 | CNPJ | CNPJ | CE | F01 | C | 1-1 | 0 ou 14 | Informar CNPJ ou CPF. Preencher os zeros não significativos. |

## Grupo G. Identificação do Local de Entrega

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **89** | **G01** | **entrega** | **Identificação do Local de entrega** | **G** | **A01** | | **0-1** | | **Informar somente se diferente do endereço destinatário.** |
| 90 | G02 | CNPJ | CNPJ | CE | G01 | C | 1-1 | 0 ou 14 | Informar CNPJ ou CPF. Preencher os zeros não significativos. (v2.0) |

## Grupo GA. Autorização para obter XML

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **97a.1** | **GA01** | **autXML** | **Pessoas autorizadas a acessar o XML da NF-e** | **G** | **A01** | | **0-10** | | |
| 97a.2 | GA02 | CNPJ | CNPJ Autorizado | CE | GA01 | C | 1-1 | 14 | Informar CNPJ ou CPF. Preencher os zeros não significativos. |

## Grupo I. Produtos e Serviços da NF-e

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **100** | **I01** | **prod** | **Detalhamento de Produtos e Serviços** | **G** | **H01** | | **1-1** | | |
| **104.02** | **I05b** | **-x-** | **Sequência XML** | **G** | **I01** | | **0-1** | | **(Incluído na NT 2016.002)** |
| 104.05 | I05e | CNPJFab | CNPJ do Fabricante da Mercadoria | E | I05b | C | 0-1 | 14 | CNPJ do Fabricante da Mercadoria, obrigatório para produto em escala NÃO relevante. (Incluído na NT 2016/002) |

## Grupo I01. Produtos e Serviços / Declaração de Importação

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **117** | **I18** | **DI** | **Declaração de Importação** | **G** | **I01** | | **0-100** | | **Informar dados da importação** |
| 122.04 | I23d | CNPJ | CNPJ do adquirente ou do encomendante | CE | I18 | C | 0-1 | 14 | Obrigatória a informação no caso de importação por conta e ordem ou por encomenda. Informar os zeros não significativos |

## Grupo I03. Produtos e Serviços / Grupo de Exportação

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **128.20** | **I50** | **detExport** | **Grupo de informações de exportação para o item** | **G** | **I01** | | **0-500** | | **Informar apenas no Drawback e nas exportações** |
| **128.22** | **I52** | **exportInd** | **Grupo sobre exportação indireta** | **G** | **I50** | | **0-1** | | |
| 128.24 | I54 | chNFe | Chave de Acesso da NF-e recebida para exportação | E | I52 | C | 1-1 | 44 | NF-e recebida com fim específico de exportação<br>Observação: No caso de operação com CFOP 3.503, informar a chave de acesso da NF-e que efetivou a exportação |

## Grupo O. Imposto sobre Produtos Industrializados

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **246** | **O01** | **IPI** | **Grupo IPI** | **CG** | **M01** | | **0-1** | | **Informar apenas quando o item for sujeito ao IPI** |
| 248 | O03 | CNPJProd | CNPJ do produtor da mercadoria, quando diferente do emitente. Somente para os casos de exportação direta ou indireta. | E | O01 | C | 0-1 | 14 | Informar os zeros não significativos |

## Grupo X. Informações do Transporte da NF-e

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **356** | **X01** | **transp** | **Grupo Informações do Transporte** | **G** | **A01** | | **1-1** | | |
| **358** | **X03** | **transporta** | **Grupo Transportador** | **G** | **X01** | | **0-1** | | |
| 359 | X04 | CNPJ | CNPJ do Transportador | CE | X03 | C | 0-1 | 14 | Preencher os zeros não significativos. |

## Grupo YA. Informações de Pagamento

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **398.01** | **YA01** | **pag** | **Grupo de Informações de Pagamento** | **G** | **A01** | | **1-1** | | **Obrigatório o preenchimento do Grupo Informações de Pagamento para NF-e e NFC-e. Para as notas com finalidade de Ajuste ou Devolução o campo Meio de Pagamento deve ser preenchido com 90=Sem Pagamento.** |
| **398.10** | **YA01a** | **detPag** | **Grupo Detalhamento do Pagamento** | **G** | **YA01** | | **1-100** | | |
| **398.13b** | **YA03b** | **-x-** | **Sequência XML** | **G** | **YA01** | | **0-1** | | **Grupo opcional.** |
| 398.13c | YA03c | CNPJPag | CNPJ transacional do pagamento | E | YA03b | C | 1-1 | 14 | Preencher informando o CNPJ do estabelecimento onde o pagamento foi processado/transacionado/recebido quando a emissão do documento fiscal ocorrer em estabelecimento distinto. |

## Grupo YB. Informações do Intermediador da Transação

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **398.26** | **YB01** | **infIntermed** | **Grupo do Intermediador da Transação** | **G** | **A01** | | **0-1** | | **Obrigatório o preenchimento do Grupo de Informações do Intermediador da Transação nos casos de “operação não presencial pela internet em site de terceiros (intermediadores) (Incluído na NT2020.006)** |
| 398.27 | YB02 | CNPJ | CNPJ do Intermediador da Transação (agenciador, plataforma de delivery, marketplace e similar) de serviços e de negócios. | E | YB01 | C | 1-1 | 14 | Informar o CNPJ do Intermediador da Transação (agenciador, plataforma de delivery, marketplace e similar) de serviços e de negócios. |

## Grupo VC. Referenciamento de item de outro Documento Fiscal Eletrônico - DF-e

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **325i** | **VC01** | **DFeReferenciado** | **Documento Fiscal Eletrônico Referenciado** | **G** | **H01** | | **0-1** | | **Grupo para referenciamento de itens de outro DF-e.** |
| 325j | VC02 | chaveAcesso | Chave de acesso do DF-e referenciado | E | VC01 | C | 1-1 | 44 | Chave de acesso do DF-e referenciado. |

## Grupo ZD. Informações do Responsável Técnico

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **423a** | **ZD01** | **infRespTec** | **Informações do Responsável Técnico pela emissão do DF-e** | **G** | **A01** | | **0-1** | | **Grupo para informações do responsável técnico pelo sistema de emissão do DF-e** |
| 423b | ZD02 | CNPJ | CNPJ da pessoa jurídica responsável pelo sistema utilizado na emissão do documento fiscal eletrônico | E | ZD01 | C | 1-1 | 14 | Informar o CNPJ da pessoa jurídica responsável pelo sistema utilizado na emissão do documento fiscal eletrônico. |
