# 2.1.4 Grupo de Informações Relativas ao Serviço Prestado para IBS e CBS

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/** | **valores** | **G** | **-** | **1-1** | **-** | **Grupo de informações relativas aos valores do serviço prestado para IBS e CBS** |
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/** | **gReeRepRes** | **G** | **-** | **0-1** | **-** | **Grupo de informações relativas a valores incluídos neste documento e recebidos por motivo de estarem relacionadas a operações de terceiros, objeto de reembolso, repasse ou ressarcimento pelo recebedor, já tributados e aqui referenciados** |
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/gReeRepRes/** | **documentos** | **G** | **-** | **1-1000** | **-** | **Grupo relativo aos documentos referenciados nos casos de reembolso, repasse e ressarcimento que serão considerados na base de cálculo do ISSQN, do IBS e da CBS.** |
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/gReeRepRes/documentos/** | **dFeNacional** | **CG** | **-** | **1-1** | **-** | **Grupo de informações de documentos fiscais eletrônicos que se encontram no repositório nacional.** |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/gReeRepRes/documentos/dFeNacional/ | tipoChaveDFe | E | N | 1-1 | 1 | Documento fiscal a que se refere a chaveDfe que seja um dos documentos do Repositório Nacional:<br>1 = NFS-e<br>2 = NF-e<br>3 = CT-e<br>9 = Outro |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/gReeRepRes/documentos/dFeNacional/ | xTipoChaveDFe | E | C | 0-1 | 1-255 | Descrição da DF-e a que se refere a chaveDfe que seja um dos documentos do Repositório Nacional.<br>Deve ser preenchido apenas quando tipoChaveDFe = 9 (Outro). |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/gReeRepRes/documentos/dFeNacional/ | chaveDFe | E | C | 1-1 | 1-50 | Chave do Documento Fiscal eletrônico do repositório nacional referenciado para os casos de operações já tributadas. |
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/gReeRepRes/documentos/** | **docFiscalOutro** | **CG** | **-** | **1-1** | **-** | **Grupo de informações de documento fiscais, eletrônicos ou não, que não se encontram no repositório nacional.** |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/gReeRepRes/documentos/docFiscalOutro/ | cMunDocFiscal | E | N | 1-1 | 7 | Código do município emissor do documento fiscal que não se encontra no repositório nacional |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/gReeRepRes/documentos/docFiscalOutro/ | nDocFiscal | E | C | 1-1 | 1-255 | Número do documento fiscal que não se encontra no repositório nacional |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/gReeRepRes/documentos/docFiscalOutro/ | xDocFiscal | E | C | 1-1 | 1-255 | Descrição do documento fiscal |
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/gReeRepRes/documentos/** | **docOutro** | **CG** | **-** | **1-1** | **-** | **Grupo de informações de documento não fiscal.** |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/gReeRepRes/documentos/docOutro/ | nDoc | E | C | 1-1 | 1-255 | Número do documento não fiscal. |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/gReeRepRes/documentos/docOutro/ | xDoc | E | C | 1-1 | 1-255 | Descrição do documento não fiscal. |
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/gReeRepRes/documentos/** | **fornec** | **G** | **-** | **0-1** | **-** | **Grupo de informações do fornecedor do documento referenciado** |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/gReeRepRes/documentos/fornec/ | CNPJ | CE | N | 1-1 | 14 | Número da inscrição federal (CNPJ) do fornecedor. |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/gReeRepRes/documentos/fornec/ | CPF | CE | N | 1-1 | 11 | Número da inscrição federal (CPF) do fornecedor. |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/gReeRepRes/documentos/fornec/ | NIF | CE | C | 1-1 | 40 | Este elemento só deverá ser preenchido para fornecedores não residentes no Brasil. |

<!-- p.11 -->

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/gReeRepRes/documentos/fornec/ | cNaoNIF | CE | N | 1-1 | 1 | Motivo para não informação do NIF:<br><br>0 - Não informado na nota de origem;<br>1 - Dispensado do NIF;<br>2 - Não exigência do NIF; |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/gReeRepRes/documentos/fornec/ | xNome | E | C | 1-1 | 1-150 | Nome / Razão Social do fornecedor. |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/gReeRepRes/documentos/ | dtEmiDoc | E | D | 1-1 | - | Data da emissão do documento dedutível.<br>Ano, mês e dia (AAAA-MM-DD) |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/gReeRepRes/documentos/ | dtCompDoc | E | D | 1-1 | - | Data da competência do documento dedutível.<br>Ano, mês e dia (AAAA-MM-DD) |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/gReeRepRes/documentos/ | tpReeRepRes | E | N | 1-1 | 2 | Tipo de valor incluído neste documento, recebido por motivo de estarem relacionadas a operações de terceiros, objeto de reembolso, repasse ou ressarcimento pelo recebedor, já tributados e aqui referenciados<br><br>01 = Repasse de remuneração por intermediação de imóveis a demais corretores envolvidos na operação<br>02 = Repasse de valores a fornecedor relativo a fornecimento intermediado por agência de turismo<br>03 = Reembolso ou ressarcimento recebido por agência de propaganda e publicidade por valores pagos relativos a serviços de produção externa por conta e ordem de terceiro<br>04 = Reembolso ou ressarcimento recebido por agência de propaganda e publicidade por valores pagos relativos a serviços de mídia por conta e ordem de terceiro<br>99 = Outros reembolsos ou ressarcimentos recebidos por valores pagos relativos a operações por conta e ordem de terceiro |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/gReeRepRes/documentos/ | xTpReeRepRes | E | C | 0-1 | 0-150 | Descrição do reembolso ou ressarcimento quando a opção é “99 – Outros reembolsos ou ressarcimentos recebidos por valores pagos relativos a operações por conta e ordem de terceiro”. |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/gReeRepRes/documentos/ | vlrReeRepRes | E | N | 1-1 | 1-15V2 | Valor monetário (total ou parcial, conforme documento informado) utilizado para não inclusão na base de cálculo do ISS e do IBS e da CBS da NFS-e que está sendo emitida (R$). |
| **<mark>NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/</mark>** | <mark>**gDedRedIBSCBS**</mark> | <mark>**G**</mark> | <mark>**-**</mark> | <mark>**0-1000**</mark> | <mark>**-**</mark> | <mark>**Grupo de informações relativas a valores de dedução e redução da Base de Cálculo do IBS e da CBS referentes às operações de locação, cessão onerosa ou arrendamento de bens imóveis, e serviços médicos.**</mark> |
| <mark>NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/gDedRedIBSCBS/</mark> | <mark>tpDedRedIBSCBS</mark> | <mark>E</mark> | <mark>N</mark> | <mark>1-1</mark> | <mark>2</mark> | <mark>Tipo de parcela não integrante da base de cálculo do IBS e da CBS<br><br>01 = Tributos inclusos no aluguel ou equivalente (Ex.: IPTU, Contribuição de melhoria) - apenas para NBS 1.1002.10.00 ou 1.1002.20.00<br>02 = Emolumento incluso no aluguel ou equivalente - apenas para NBS 1.1002.10.00 ou 1.1002.20.00<br>03 = Condomínio incluso no aluguel ou equivalente - apenas para NBS 1.1002.10.00 ou 1.1002.20.00<br>04 = Redutor Social - apenas para a NBS 1.1002.10.00<br>05 = Glosa de Serviços Médicos<br>99 = Outras parcelas inclusas no aluguel ou equivalente</mark> |
| <mark>NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/gDedRedIBSCBS/</mark> | <mark>xTpDedRedIBSCBS</mark> | <mark>E</mark> | <mark>C</mark> | <mark>0-1</mark> | <mark>0-150</mark> | <mark>Descrição do tipo de parcela não integrante da base de cálculo do IBS e da CBS quando a opção for “99 = Outras parcelas inclusas no aluguel ou equivalente”.</mark> |
| <mark>NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/gDedRedIBSCBS/</mark> | <mark>vlrDedRedIBSCBS</mark> | <mark>E</mark> | <mark>N</mark> | <mark>1-1</mark> | <mark>1-15V2</mark> | <mark>Valor monetário (total ou parcial) utilizado para não inclusão na base de cálculo do IBS e da CBS da NFS-e que está sendo emitida (R$).</mark> |
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/** | **trib** | **G** | **-** | **1-1** | **-** | **Grupo de informações relacionados aos tributos IBS e CBS** |
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/** | **gIBSCBS** | **G** | **-** | **1-1** | **-** | **Grupo de informações relacionadas ao IBS e à CBS** |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/ | CST | E | N | 1-1 | 3 | Código de Situação Tributária do IBS e da CBS |

<!-- p.12 -->

<!-- REVISAR p.12: no original, o caminho dos campos do grupo gTribRegular aparece como “IBSCBSSEL” (provável erro de digitação; mantido como no original) -->

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/ | cClassTrib | E | N | 1-1 | 6 | Código de Classificação Tributária do IBS e da CBS |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/ | cCredPres | E | N | 0-1 | 2 | Código e classificação do crédito presumido: IBS e CBS. |
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/** | **gTribRegular** | **G** | **-** | **0-1** | **-** | **Grupo de informações da Tributação Regular** |
| NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/valores/trib/gIBSCBS/gTribRegular/ | CSTReg | E | N | 1-1 | 3 | Código de Situação Tributária do IBS e da CBS de tributação regular |
| NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/valores/trib/gIBSCBS/gTribRegular/ | cClassTribReg | E | N | 1-1 | 6 | Código da Classificação Tributária do IBS e da CBS de tributação regular |
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/** | **gDif** | **G** | **-** | **0-1** | **-** | **Grupo de informações relacionadas ao diferimento para IBS e CBS** |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/gDif/ | pDifUF | E | N | 1-1 | 1-3V2 | Percentual de diferimento para o IBS estadual. |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/gDif/ | pDifMun | E | N | 1-1 | 1-3V2 | Percentual de diferimento para o IBS municipal. |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/gDif/ | pDifCBS | E | N | 1-1 | 1-3V2 | Percentual de diferimento para a CBS. |
| **<mark>NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/</mark>** | <mark>**gEstornoCred**</mark> | <mark>**G**</mark> | <mark>**-**</mark> | <mark>**0-1**</mark> | <mark>**-**</mark> | <mark>**Grupo de informações relacionadas aos estornos de créditos do IBS e da CBS.**</mark> |
| <mark>NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/gEstornoCred/</mark> | <mark>vIBSEstCred</mark> | <mark>E</mark> | <mark>N</mark> | <mark>1-1</mark> | <mark>1-15V2</mark> | <mark>Valor do IBS a ser estornado.</mark> |
| <mark>NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/gEstornoCred/</mark> | <mark>vCBSEstCred</mark> | <mark>E</mark> | <mark>N</mark> | <mark>1-1</mark> | <mark>1-15V2</mark> | <mark>Valor da CBS a ser estornado.</mark> |
| **<mark>NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/</mark>** | <mark>**gPagAntecipado**</mark> | <mark>**G**</mark> | <mark>**-**</mark> | <mark>**0-1**</mark> | <mark>**-**</mark> | <mark>**Grupo de referenciamento das NFS-e de pagamento antecipado para abatimento.**</mark> |
| <mark>NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/gPagAntecipado/</mark> | <mark>refNFSe</mark> | <mark>E</mark> | <mark>C</mark> | <mark>1-99</mark> | <mark>50</mark> | <mark>Chave da NFS-e de pagamento antecipado referenciada.</mark> |
