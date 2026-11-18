<!-- p.04 -->

# 2.3 Reestruturação ou merge dos grupos “vDedRed” e “gReeRepRes”

## Na DPS:

- Os grupos “vDedRed” e “gReeRepRes”, que continham informações relativas aos valores de ajuste (dedução/redução) das bases de cálculo do ISSQN, do IBS e da CBS (esses dois últimos apenas ajustes por documentos), passaram por uma unificação, sendo agora denominado “vAjusteBC”. A alteração visa maior clareza, economia e concentração de campos com o mesmo teor informacional:

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| **NFSe/infNFSe/DPS/infDPS/valores/** | **vAjusteBC** | **G** | **-** | **0-1** | **-** | **Grupo de informações relativas aos valores para ajuste dos valores de base de cálculo.** |
| NFSe/infNFSe/DPS/infDPS/valores/vAjusteBC/ | pAjusteBCISSQN | E | N | 0-1 | 1-3V2 | Valor percentual padrão para ajuste dos valores de base de cálculo do ISSQN. |
| NFSe/infNFSe/DPS/infDPS/valores/vAjusteBC/ | vAjusteBCISSQN | E | N | 0-1 | 1-15V2 | Valor monetário padrão para ajuste dos valores de base de cálculo do ISSQN |

<!-- p.05 -->

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| **NFSe/infNFSe/DPS/infDPS/valores/vAjusteBC/** | **documentos** | **G** | **-** | **0-1** | **-** | **Grupo de informações de documento utilizado para ajuste dos valores de base de cálculo (ISSQN e/ou IBS/CBS).** |
| **NFSe/infNFSe/DPS/infDPS/valores/vAjusteBC/documentos/** | **docAjusteBC** | **G** | **-** | **1-1000** | **-** | **Grupo de informações de documento utilizado para ajuste dos valores de base de cálculo (ISSQN e/ou IBS/CBS).** |
| NFSe/infNFSe/DPS/infDPS/valores/vAjusteBC/documentos/docAjusteBC/ | tpAjusteBC | E | N | 1-1 | 1-3 | Tipo de Ajuste:<br>~~1 – Alimentação e bebidas/frigobar;~~<br>2 – Materiais;<br>~~3 - Produção Externa;~~<br>~~4 - Reembolso de despesas;~~<br>5 – Repasse consorciado;<br>6 – Repasse plano de saúde;<br>7 – Serviços;<br>8 – Subempreitada de mão de obra;<br>9 - Profissional parceiro;<br>99 – Outras deduções exclusivas do ISSQN;<br>101 – Repasse de remuneração por intermediação de imóveis a demais corretores envolvidos na operação;<br>102 – Repasse de valores a fornecedor relativo a fornecimento intermediado por agência de turismo;<br>103 – Reembolso ou ressarcimento recebido por agência de propaganda e publicidade por valores pagos relativos a serviços de produção externa por conta e ordem de terceiro;<br>104 – Reembolso ou ressarcimento recebido por agência de propaganda e publicidade por valores pagos relativos a serviços de mídia por conta e ordem de terceiro;<br>105 – Glosa de Serviços de Saúde;<br>199 – Outros reembolsos ou ressarcimentos recebidos por valores pagos relativos a operações por conta e ordem de terceiro |
| NFSe/infNFSe/DPS/infDPS/valores/vAjusteBC/documentos/docAjusteBC/ | xTpAjusteBC | E | C | 0-1 | 0-150 | Descrição do ajuste quando o tipo informado (tpAjusteBC) é "99 – Outras deduções exclusivas do ISSQN" ou "199 – Outros reembolsos ou ressarcimentos recebidos por valores pagos relativos a operações por conta e ordem de terceiro". |
| NFSe/infNFSe/DPS/infDPS/valores/vAjusteBC/documentos/docAjusteBC/ | vTotDoc | E | N | 1-1 | 1-15V2 | Valor monetário total do documento informado (R$). Este é o valor total no documento informado que é passível de ajuste de base(s) de cálculo. |
| NFSe/infNFSe/DPS/infDPS/valores/vAjusteBC/documentos/docAjusteBC/ | vAjusteAplic | E | N | 1-1 | 1-15V2 | Valor monetário efetivamente utilizado para ajuste de base(s) de cálculo do valor do serviço da NFS-e que está sendo emitida (R$). Deve ser menor ou igual ao valor total do documento (vTotDoc). |
| NFSe/infNFSe/DPS/infDPS/valores/vAjusteBC/documentos/docAjusteBC/ | dtEmiDoc | E | D | 0-1 | - | Data da emissão do documento dedutível. Ano, mês e dia (AAAA-MM-DD) |
| NFSe/infNFSe/DPS/infDPS/valores/vAjusteBC/documentos/docAjusteBC/ | dtCompDoc | E | D | 0-1 | - | Data da competência do documento dedutível. Ano, mês e dia (AAAA-MM-DD) |
| **NFSe/infNFSe/DPS/infDPS/valores/vAjusteBC/documentos/docAjusteBC/** | **dFeNacional** | **CG** | **-** | **1-1** | **-** | Grupo de informações de documentos fiscais eletrônicos que se encontram no repositório nacional. |
| NFSe/infNFSe/DPS/infDPS/valores/vAjusteBC/documentos/docAjusteBC/dFeNacional/ | tipoChaveDFe | E | N | 1-1 | 1 | Documento fiscal a que se refere a chaveDfe que seja um dos documentos do Repositório Nacional:<br>1 = NFS-e;<br>2 = NF-e;<br>3 = CT-e;<br>9 = Outro; |
| NFSe/infNFSe/DPS/infDPS/valores/vAjusteBC/documentos/docAjusteBC/dFeNacional/ | xTipoChaveDFe | E | C | 0-1 | 1-255 | Descrição da DF-e a que se refere a chaveDfe que seja um dos documentos do Repositório Nacional. Deve ser preenchido apenas quando tipoChaveDFe = 9 (Outro). |
| NFSe/infNFSe/DPS/infDPS/valores/vAjusteBC/documentos/docAjusteBC/dFeNacional/ | chaveDFe | E | C | 1-1 | 1-50 | Chave do Documento Fiscal eletrônico do repositório nacional referenciado para os casos de operações já tributadas. |
| **NFSe/infNFSe/DPS/infDPS/valores/vAjusteBC/documentos/docAjusteBC/** | **docFiscalOutro** | **CG** | **-** | **1-1** | **-** | Grupo de informações de documento fiscais, eletrônicos ou não, que não se encontram no repositório nacional. |
| NFSe/infNFSe/DPS/infDPS/valores/vAjusteBC/documentos/docAjusteBC/docFiscalOutro/ | cMunDocFiscal | E | N | 1-1 | 7 | Código do município emissor do documento fiscal que não se encontra no repositório nacional |
| NFSe/infNFSe/DPS/infDPS/valores/vAjusteBC/documentos/docAjusteBC/docFiscalOutro/ | nDocFiscal | E | C | 1-1 | 1-255 | Número do documento fiscal que não se encontra no repositório nacional |
| NFSe/infNFSe/DPS/infDPS/valores/vAjusteBC/documentos/docAjusteBC/docFiscalOutro/ | xDocFiscal | E | C | 1-1 | 1-255 | Descrição do documento fiscal |
| **NFSe/infNFSe/DPS/infDPS/valores/vAjusteBC/documentos/docAjusteBC/** | **docOutro** | **CG** | **-** | **1-1** | **-** | Grupo de informações de documento não fiscal. |

<!-- p.06 -->

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| NFSe/infNFSe/DPS/infDPS/valores/vAjusteBC/documentos/docAjusteBC/docOutro/ | nDoc | E | C | 1-1 | 1-255 | Número do documento não fiscal. |
| NFSe/infNFSe/DPS/infDPS/valores/vAjusteBC/documentos/docAjusteBC/docOutro/ | xDoc | E | C | 1-1 | 1-255 | Descrição do documento não fiscal. |
| **NFSe/infNFSe/DPS/infDPS/valores/vAjusteBC/documentos/docAjusteBC/** | **fornec** | **G** | **-** | **0-1** | **-** | **Grupo de informações do fornecedor do serviço prestado** |
| NFSe/infNFSe/DPS/infDPS/valores/vAjusteBC/documentos/docAjusteBC/fornec/ | CNPJ | CE | C | 1-1 | 14 | Número da inscrição federal (CNPJ) do fornecedor de serviço. |
| NFSe/infNFSe/DPS/infDPS/valores/vAjusteBC/documentos/docAjusteBC/fornec/ | CPF | CE | N | 1-1 | 11 | Número da inscrição federal (CPF) do fornecedor do serviço. |
| NFSe/infNFSe/DPS/infDPS/valores/vAjusteBC/documentos/docAjusteBC/fornec/ | NIF | CE | C | 1-1 | 40 | Este elemento só deverá ser preenchido para fornecedores não residentes no Brasil. |
| NFSe/infNFSe/DPS/infDPS/valores/vAjusteBC/documentos/docAjusteBC/fornec/ | cNaoNIF | CE | N | 1-1 | 1 | Motivo para não informação do NIF:<br>0 - Não informado na nota de origem;<br>1 - Dispensado do NIF;<br>2 - Não exigência do NIF; |
| NFSe/infNFSe/DPS/infDPS/valores/vAjusteBC/documentos/docAjusteBC/fornec/ | xNome | E | C | 1-1 | 150 | Nome / Razão Social do fornecedor. |
| **NFSe/infNFSe/DPS/infDPS/valores/vAjusteBC/documentos/docAjusteBC/fornec/** | **end** | **G** | **-** | **0-1** | **-** | **Grupo de informações do endereço do fornecedor.** |
| **NFSe/infNFSe/DPS/infDPS/valores/vAjusteBC/documentos/docAjusteBC/fornec/end/** | **endNac** | **CG** | **-** | **1-1** | **-** | **Grupo de informações do endereço nacional.** |
| NFSe/infNFSe/DPS/infDPS/valores/vAjusteBC/documentos/docAjusteBC/fornec/end/endNac/ | cMun | E | N | 1-1 | 7 | Código do município do endereço do fornecedor. (Tabela do IBGE) |
| NFSe/infNFSe/DPS/infDPS/valores/vAjusteBC/documentos/docAjusteBC/fornec/end/endNac/ | CEP | E | C | 1-1 | 8 | Código numérico do Endereçamento Postal nacional (CEP) do endereço do fornecedor. |
| **NFSe/infNFSe/DPS/infDPS/valores/vAjusteBC/documentos/docAjusteBC/fornec/end/** | **endExt** | **CG** | **-** | **1-1** | **-** | **Grupo de informações do endereço no exterior.** |
| NFSe/infNFSe/DPS/infDPS/valores/vAjusteBC/documentos/docAjusteBC/fornec/end/endExt/ | cPais | E | C | 1-1 | 2 | Código do país do endereço do prestador do fornecedor. (Tabela de Países ISO) |
| NFSe/infNFSe/DPS/infDPS/valores/vAjusteBC/documentos/docAjusteBC/fornec/end/endExt/ | cEndPost | E | C | 1-1 | 1-11 | Código alfanumérico do Endereçamento Postal no exterior do fornecedor. |
| NFSe/infNFSe/DPS/infDPS/valores/vAjusteBC/documentos/docAjusteBC/fornec/end/endExt/ | xCidade | E | C | 1-1 | 1-60 | Nome da cidade no exterior do fornecedor. |
| NFSe/infNFSe/DPS/infDPS/valores/vAjusteBC/documentos/docAjusteBC/fornec/end/endExt/ | xEstProvReg | E | C | 1-1 | 1-60 | Estado, província ou região da cidade no exterior do fornecedor. |
| NFSe/infNFSe/DPS/infDPS/valores/vAjusteBC/documentos/docAjusteBC/fornec/ | xLgr | E | C | 1-1 | 1-255 | Tipo e nome do logradouro do endereço do fornecedor. |
| NFSe/infNFSe/DPS/infDPS/valores/vAjusteBC/documentos/docAjusteBC/fornec/ | nro | E | C | 1-1 | 1-60 | Número no logradouro do endereço do fornecedor. |
| NFSe/infNFSe/DPS/infDPS/valores/vAjusteBC/documentos/docAjusteBC/fornec/ | xCpl | E | C | 0-1 | 1-156 | Complemento do endereço do fornecedor. |
| NFSe/infNFSe/DPS/infDPS/valores/vAjusteBC/documentos/docAjusteBC/fornec/ | xBairro | E | C | 1-1 | 1-60 | Bairro do endereço do fornecedor. |
| NFSe/infNFSe/DPS/infDPS/valores/vAjusteBC/documentos/docAjusteBC/fornec/ | fone | E | N | 0-1 | 6-20 | Número do telefone do fornecedor. (Preencher com o Código DDD + número do telefone. Nas operações com exterior é permitido informar o código do país + código da localidade + número do telefone) |
| NFSe/infNFSe/DPS/infDPS/valores/vAjusteBC/documentos/docAjusteBC/fornec/ | email | E | C | 0-1 | 1-80 | E-mail do fornecedor. |

> **Revogado/Descontinuado:** os tipos de ajuste 1 (“Alimentação e bebidas/frigobar”), 3 (“Produção Externa”) e 4 (“Reembolso de despesas”), presentes anteriormente em “vDedRed/documentos/docDedRed/tpDedRed”, estão tachadas no original e foram descontinuados na unificação em “vAjusteBC”, pelas razões a seguir.

- Para melhor compreensão acerca do novo grupo, foi criada, no AnexoVI-LeiautesRN_RTC_IBSCBS-V1.04.00 – NT009, a tabela “AJUSTE_BC_REPERCUSSÃO” com os tipos de ajuste e os seus respectivos efeitos nas bases de cálculo do ISSQN, do IBS/CBS e na Receita Bruta do Simples Nacional;

<!-- p.07 -->

- Os tipos de ajuste a seguir, presentes anteriormente em “vDedRed/documentos/docDedRed/tpDedRed” foram descontinuados na unificação em “vAjusteBC”, pelas seguintes razões:
  - “1 – Alimentação e bebidas/frigobar”: nos serviços de hotéis e motéis, quando esses valores não integram o valor do serviço da diária ou hospedagem (base de cálculo do ISSQN), alguns Municípios permitiam sua inclusão junto com o valor do serviço propriamente dito, com “vServ” representando o valor total da operação (valor total recebido) para entrega do documento ao tomador, com sua respectiva dedução da base de cálculo do tributo municipal (ainda assim, evidentemente, era necessária a emissão dos documentos de fornecimento de mercadorias). Ocorre que essa inclusão, por conta do IBS e da CBS, não pode se dar na NFS-e, pois, afetariam a operacionalização do cálculo desses tributos para esses fornecimentos (repita-se: de alimentos e bebidas), já registrados em outros documentos fiscais eletrônicos de emissão desse mesmo fornecedor;
  - “3 - Produção Externa”: para ter reflexo também no IBS e na CBS, esse tipo de operação deve ser registrado pelo valor de ajuste “103”, que melhor o descreve, logo, foi suprimido por estar redundante;
  - “4 - Reembolso de despesas”: os tipos que possuem reflexo também no IBS e na CBS estão refletidos nos tipos ajuste “103”, “104” ou “199”, logo, foram suprimidos por estarem redundantes e melhor representados nesses outros tipos. Caso algum outro reembolso seja admitido pelo Município e não compreendido nos tipos acima descritos, deve-se utilizar, com autorização municipal e apenas com reflexo na base de cálculo do ISSQN, o tipo de ajuste “99”.

## Na NFS-e:

- Alteração do nome do campo “vCalcDR” para “vCalcAjusteBCISSQN” visando maior clareza na descrição e na fórmula da base de cálculo do ISSQN, uma vez que o campo passará a contemplar os ajustes (deduções/reduções) por percentual ou por documentos incidentes sobre a base de cálculo deste tributo:

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| NFSe/infNFSe/valores/ | vCalcAjusteBCISSQN | E | N | 0-1 | 1-15V2 | Valor monetário (R$) do ajuste (dedução/redução) da base de cálculo (BC) do ISSQN. |

> **OBS:** Importante esclarecer que, em razão das evoluções trazidas neste tópico, a fórmula do cálculo do “vCalcAjusteBCISSQN” passou também por uma evolução em relação à fórmula de “vCalcDR” (antigo campo). Na nova fórmula, se levará em consideração todas as deduções que terão repercussão na base de cálculo do ISSQN (percentual + documentos, desde que o tipo de ajuste por documentos possa ser informado em concomitância com o ajuste percentual). Para mais detalhes, observar as notas explicativas do Anexo e, na planilha de regras de negócio “RN DPS_NFS-e”, a fórmula e as demais informações dispostas.

- Atualização da fórmula de base de cálculo do ISSQN (NFSe/infNFSe/valores/vBC):

<!-- p.08 -->

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| NFSe/infNFSe/valores/ | vBC | E | N | 0-1 | 1-15V2 | Valor da Base de Cálculo do ISSQN (R$) = Valor do Serviço - Desconto Incondicionado - Ajustes (Deduções/Reduções) - Benefício Municipal<br><br>vBC = vServ - descIncond - (vAjusteBCISSQN + vCalcAjusteBCISSQN) - (vRedBCBM ou VCalcBM) |

- Alteração do nome do campo “vCalcReeRepRes” para “vCalcAjusteBCIBSCBS” visando maior clareza na descrição e na fórmula da base de cálculo do IBS e da CBS, que passa a contemplar os ajustes (deduções/reduções ou reembolso, repasse ou ressarcimento) incidentes sobre a base de cálculo destes tributos:

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| NFSe/infNFSe/IBSCBS/valores/ | vCalcAjusteBCIBSCBS | E | N | 0-1 | 1-15V2 | Valor monetário (R$) total relativo a glosa de serviços de saúde ou a operações de terceiros, objeto de reembolso, repasse ou ressarcimento pelo recebedor, devidamente referenciados, e que não integram da base de cálculo (BC) do IBS e da CBS. |

- No mesmo sentido, alteração do título do campo “vCalcDedRedIBSCBS” para “vCalcAjusteBCLocImoveis” que passa a contemplar tão-somente os ajustes (deduções/reduções) da base de cálculo do IBS e da CBS referentes às operações de locação, cessão onerosa ou arrendamento de bens imóveis (subitem 99.03):

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| NFSe/infNFSe/IBSCBS/valores/ | vCalcAjusteBCLocImoveis | E | N | 0-1 | 1-15V2 | Valor monetário (R$) total relativo aos valores de ajuste (dedução/redução) da Base de Cálculo do IBS e da CBS referentes às operações de locação, cessão onerosa ou arrendamento de bens imóveis. Apenas para os subitens 99.03. |

- Atualização da fórmula de base de cálculo do IBS/CBS (NFSe/infNFSe/IBSCBS/valores/vBC):

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| NFSe/infNFSe/IBSCBS/valores/ | vBC | E | N | 1-1 | 1-15V2 | Valor da base de cálculo (BC) do IBS/CBS antes das reduções para cálculo do tributo bruto.<br><br>vBC = vServ - descIncond – vCalcAjusteBCIBSCBS ou vCalcAjusteBCLocImoveis – vISSQN – vPIS - vCOFINS (até 2026)<br>ou<br>vBC = vServ - descIncond – vCalcAjusteBCIBSCBS ou vCalcAjusteBCLocImoveis – vISSQN (de 2027 até 2032) |
