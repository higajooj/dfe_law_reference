# 2.1.4 Grupo de Informações Relativas ao Serviço Prestado para IBS e CBS

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/** | **valores** | **G** | **-** | **1-1** | **-** | **Grupo de informações relativas aos valores do serviço prestado para IBS e CBS** |
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/** | **gReeRepRes** | **G** | **-** | **0-1** | **-** | **Grupo de informações relativas a valores incluídos neste documento e recebidos por motivo de estarem relacionadas a operações de terceiros, objeto de reembolso, repasse ou ressarcimento pelo recebedor, já tributados e aqui referenciados** |
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/gReeRepRes/** | **documentos** | **G** | **-** | **1-1000** | **-** | **Grupo relativo aos documentos referenciados nos casos de reembolso, repasse e ressarcimento que serão considerados na base de cálculo do ISSQN, do IBS e da CBS.** |

<!-- p.10 -->

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/gReeRepRes/documentos/** | **dFeNacional** | **CG** | **-** | **1-1** | **-** | **Grupo de informações de documentos fiscais eletrônicos que se encontram no repositório nacional.** |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/gReeRepRes/documentos/dFeNacional/ | <mark>tipoChaveDFe</mark> | E | N | 1-1 | 1 | <mark>Documento fiscal a que se refere a chaveDfe que seja um dos documentos do Repositório Nacional:<br>1 = NFS-e<br>2 = NF-e<br>3 = CT-e<br>9 = Outro</mark> |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/gReeRepRes/documentos/dFeNacional/ | <mark>xTipoChaveDFe</mark> | E | C | 0-1 | 255 | <mark>Descrição da DF-e a que se refere a chaveDfe que seja um dos documentos do Repositório Nacional.<br>Deve ser preenchido apenas quando tipoChaveDFe = 9 (Outro).</mark> |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/gReeRepRes/documentos/dFeNacional/ | <mark>chaveDFe</mark> | E | C | 1-1 | 1-50 | <mark>Chave do Documento Fiscal eletrônico do repositório nacional referenciado para os casos de operações já tributadas.</mark> |
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/gReeRepRes/documentos/** | **docFiscalOutro** | **CG** | **-** | **1-1** | **-** | **Grupo de informações de documento fiscais, eletrônicos ou não, que não se encontram no repositório nacional.** |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/gReeRepRes/documentos/docFiscalOutro/ | <mark>cMunDocFiscal</mark> | E | N | 1-1 | 7 | <mark>Código do município emissor do documento fiscal que não se encontra no repositório nacional</mark> |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/gReeRepRes/documentos/docFiscalOutro/ | <mark>nDocFiscal</mark> | E | C | 1-1 | 255 | <mark>Número do documento fiscal que não se encontra no repositório nacional</mark> |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/gReeRepRes/documentos/docFiscalOutro/ | <mark>xDocFiscal</mark> | E | C | 1-1 | 255 | <mark>Descrição do documento fiscal</mark> |
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/gReeRepRes/documentos/** | **docOutro** | **CG** | **-** | **1-1** | **-** | **Grupo de informações de documento não fiscal.** |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/gReeRepRes/documentos/docOutro/ | <mark>nDoc</mark> | E | C | 1-1 | 255 | <mark>Número do documento não fiscal.</mark> |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/gReeRepRes/documentos/docOutro/ | <mark>xDoc</mark> | E | C | 1-1 | 255 | <mark>Descrição do documento não fiscal.</mark> |
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/gReeRepRes/documentos/** | **fornec** | **G** | **-** | **0-1** | **-** | **Grupo de informações do fornecedor do documento referenciado** |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/gReeRepRes/documentos/fornec/ | <mark>CNPJ</mark> | <mark>CE</mark> | N | 1-1 | 14 | <mark>Número da inscrição federal (CNPJ) do fornecedor.</mark> |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/gReeRepRes/documentos/fornec/ | <mark>CPF</mark> | <mark>CE</mark> | N | 1-1 | 11 | <mark>Número da inscrição federal (CPF) do fornecedor.</mark> |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/gReeRepRes/documentos/fornec/ | <mark>NIF</mark> | <mark>CE</mark> | C | 1-1 | 40 | <mark>Este elemento só deverá ser preenchido para fornecedores não residentes no Brasil.</mark> |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/gReeRepRes/documentos/fornec/ | <mark>cNaoNIF</mark> | <mark>CE</mark> | N | 1-1 | 1 | <mark>Motivo para não informação do NIF:<br><br>0 - Não informado na nota de origem;<br>1 - Dispensado do NIF;<br>2 - Não exigência do NIF;</mark> |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/gReeRepRes/documentos/fornec/ | <mark>xNome</mark> | <mark>E</mark> | C | 1-1 | 150 | <mark>Nome / Razão Social do fornecedor.</mark> |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/gReeRepRes/documentos/ | <mark>dtEmiDoc</mark> | <mark>E</mark> | D | 1-1 | - | <mark>Data da emissão do documento dedutível.<br>Ano, mês e dia (AAAA-MM-DD)</mark> |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/gReeRepRes/documentos/ | <mark>dtCompDoc</mark> | <mark>E</mark> | D | 1-1 | - | <mark>Data da competência do documento dedutível.<br>Ano, mês e dia (AAAA-MM-DD)</mark> |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/gReeRepRes/documentos/ | <mark>tpReeRepRes</mark> | <mark>E</mark> | N | 1-1 | 2 | <mark>Tipo de valor incluído neste documento, recebido por motivo de estarem relacionadas a operações de terceiros, objeto de reembolso, repasse ou ressarcimento pelo recebedor, já tributados e aqui referenciados<br><br>01 = Repasse de remuneração por intermediação de imóveis a demais corretores envolvidos na operação<br>02 = Repasse de valores a fornecedor relativo a fornecimento intermediado por agência de turismo<br>03 = Reembolso ou ressarcimento recebido por agência de propaganda e publicidade por valores pagos relativos a serviços de produção externa por conta e ordem de terceiro<br>04 = Reembolso ou ressarcimento recebido por agência de propaganda e publicidade por valores pagos relativos a serviços de mídia por conta e ordem de terceiro<br>99 = Outros reembolsos ou ressarcimentos recebidos por valores pagos relativos a operações por conta e ordem de terceiro</mark> |

<!-- p.11 -->

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/gReeRepRes/documentos/ | <mark>xTpReeRepRes</mark> | <mark>E</mark> | C | 0-1 | 0-150 | <mark>Descrição do reembolso ou ressarcimento quando a opção é “99 – Outros reembolsos ou ressarcimentos recebidos por valores pagos relativos a operações por conta e ordem de terceiro”.</mark> |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/gReeRepRes/documentos/ | <mark>vlrReeRepRes</mark> | <mark>E</mark> | N | 1-1 | 1-15V2 | <mark>Valor monetário (total ou parcial, conforme documento informado) utilizado para não inclusão na base de cálculo do ISS e do IBS e da CBS da NFS-e que está sendo emitida (R$).</mark> |
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/** | **trib** | **G** | **-** | **1-1** | **-** | **Grupo de informações relacionados aos tributos IBS e CBS** |
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/** | **gIBSCBS** | **G** | **-** | **1-1** | **-** | **Grupo de informações relacionadas ao IBS e à CBS** |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/ | <mark>CST</mark> | E | N | 1-1 | 3 | Código de Situação Tributária do IBS e da CBS |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/ | cClassTrib | E | N | 1-1 | 6 | Código de Classificação Tributária do IBS e da CBS |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/ | <mark>cCredPres</mark> | <mark>E</mark> | N | 0-1 | 2 | <mark>Código e classificação do crédito presumido: IBS e CBS.</mark> |
| **NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/valores/trib/gIBSCBS/** <!-- REVISAR p.11: caminho grafado "IBSCBSSEL" no original (mantido; possível erro de digitação) --> | **gTribRegular** | **G** | **-** | **0-1** | **-** | **Grupo de informações da Tributação Regular** |
| NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/valores/trib/gIBSCBS/gTribRegular/ | <mark>CSTReg</mark> | <mark>E</mark> | N | 1-1 | 3 | <mark>Código de Situação Tributária do IBS e da CBS de tributação regular</mark> |
| NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/valores/trib/gIBSCBS/gTribRegular/ | <mark>cClassTribReg</mark> | <mark>E</mark> | N | 1-1 | 6 | <mark>Código da Classificação Tributária do IBS e da CBS de tributação regular</mark> |
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/** | **gDif** | **G** | **-** | **0-1** | **-** | **Grupo de informações relacionadas ao diferimento para IBS e CBS** |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/gDif/ | pDifUF | E | N | 1-1 | 1-3V2 | Percentual de diferimento para o IBS estadual. |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/gDif/ | pDifMun | E | N | 1-1 | 1-3V2 | Percentual de diferimento para o IBS municipal. |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/gDif/ | pDifCBS | E | N | 1-1 | 1-3V2 | Percentual de diferimento para a CBS. |
