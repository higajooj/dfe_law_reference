<!-- p.7 -->
# 3. Alterações no Schema XML

## 3.1. Grupo B. Identificação da Nota Fiscal eletrônica

O tipo de emissão “3”, antigamente utilizado para o Sistema de Contingência do Ambiente Nacional, deixou de ser utilizado a partir da implementação das Sefaz Virtuais de Contingência, e tinha sido desativado pela NT 2015/002.

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| B22 | tpEmis | E | B01 | N | 1-1 | 1 | Tipo de Emissão da NF-e<br>1=Emissão normal (não em contingência);<br>2=Contingência FS-IA, com impressão do DANFE em Formulário de Segurança - Impressor Autônomo;<br>3= Regime Especial NFF (NT 2021.002)~~Contingência SCAN (Sistema de Contingência do Ambiente Nacional); \*Desativado \* NT 2015/002~~<br>4=Contingência EPEC (Evento Prévio da Emissão em Contingência);<br>5=Contingência FS-DA, com impressão do DANFE em Formulário de Segurança - Documento Auxiliar;<br>6=Contingência SVC-AN (SEFAZ Virtual de Contingência do AN);<br>7=Contingência SVC-RS (SEFAZ Virtual de Contingência do RS);<br>9=Contingência off-line da NFC-e;<br>Observação: Para a NFC-e somente é válida a opção de contingência: 9-Contingência Off-Line e, a critério da UF, opção 4-Contingência EPEC. (NT 2015/002) |

> **Revogado/Descontinuado:** no item 3 do campo tpEmis (B22), o trecho “Contingência SCAN (Sistema de Contingência do Ambiente Nacional); *Desativado * NT 2015/002” está riscado no original.

## 3.2. Criação do Grupo I86. Informações Adicionais do Produto

O conjunto de campos do Grupo I86 tem o objetivo agrupar as informações de codificação do produto do fisco, além de receber a operação da NFF que gerou a inclusão daquele produto na NF-e. Este grupo permite também a padronização da descrição da embalagem dos produtos da NFF.

A primeira versão do app NFF para a utilização por produtores primários tem por objetivo permitir a utilização em operações internas de saída de legumes, frutas e verduras, destinadas a contribuintes do ICMS.

É esperado que o aumento deste escopo em próximas versões tenha reflexos neste grupo.

## 3.3. Criação do Grupo I87. Informações da Embalagem do Produto

Este grupo permite a padronização da descrição da embalagem dos produtos da NFF e NF-e Avulsa.

<!-- p.8 -->
<!-- REVISAR p.8: os dois parágrafos abaixo repetem o texto da seção 3.2 (também visível na p.7); transcritos como aparecem na página 8. -->
A primeira versão do app NFF para a utilização por produtores primários tem por objetivo permitir a utilização em operações internas de saída de legumes, frutas e verduras, destinadas a contribuintes do ICMS.

É esperado que o aumento deste escopo em próximas versões tenha reflexos neste grupo.

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **I86** | **infProdNFF** | **G** | **I01** | | **0-1** | | **Informações do Produto (NT 2021.002). Informações do produto** |
| I86a | cProdFisco | E | I86 | C | 1-1 | 14 | Código Fiscal do Produto |
| I86b | cOperNFF | E | I86 | N | 1-1 | 1-5 | Código da Operação NFF. Código da operação selecionada na NFF e relacionada ao item |
| **I87** | **infProdEmb** | **G** | **I01** | | **0-1** | | **Informações da Embalagem do Produto (NT 2021.002). Informações da embalagem do produto.<br>No caso da NFFF, preenchido somente se modBC = 1-Pauta.** |
| I87a | xEmb | E | I87 | C | 1-1 | 1-8 | Embalagem do produto.<br>Exemplos de embalagens:<br>"a granel"; "balde"; "bandeja"; "barril"; "caixa"; "copo"; "estojo"; "fardo"; "garrafa"; "garrafão"; "lata"; "molho"; "pacote"; "pote"; "saco"; "sacola" |
| I87b | qVolEmb | E | I87 | N | 1-1 | 7v2 | Volume do produto na embalagem. Volume / quantidade do produto por unidade de medida na embalagem.<br>Ex: Caixa com 3 KG<br>xEmb: caixa<br>qVolEmb: 3<br>uEmb: kg |
| I87c | uEmb | E | I87 | C | 1-1 | 1-8 | Unidade de Medida da Embalagem.<br>Exemplos: "grama"; "kg"; "ton"; "litro"; "metro"; "m3"; "m3 ester" (m3 estéreo); "m2"; "unid"; "dúzia"; |

## 3.4. Criação do Grupo ZE. Informações do Pedido de Emissão da NFF

O pedido de emissão da NFF existirá somente na hipótese de tipo de emissão = 3-NFF e será gerado exclusivamente pelo aplicativo emissor, que também poderá gerar pedidos de evento.

Essa tag deverá conter todos os campos e valores gerados pelo aplicativo para integrar o pedido de emissão ou o pedido de registro de evento.

Fica adicionada a estrutura a seguir ao schema da NF-e e do pedido de Evento:

<!-- p.9 -->
| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **ZE01** | **infSolicNFF** | **G** | **A01** | | **0-1** | | **Informações de solicitação da NFF (NT 2021.002). Grupo para informações da solicitação da NFF** |
| ZE02 | xSolic | E | ZE01 | C | 1-1 | 2-5000 | Solicitação do pedido de emissão da NFF. Campos do pedido preenchidos no aplicativo móvel (app) da NFF, no formato JSON |
