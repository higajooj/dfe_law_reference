# 2.2.3.2 Grupo de Informações Relativas às Totalizações da CBS

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| **NFSe/infNFSe/IBSCBS/totCIBS/** | **gCBS** | **G** | **-** | **1-1** | **-** | **Grupo de valores referentes à CBS** |
| **NFSe/infNFSe/IBSCBS/totCIBS/gCBS/** | **gCBSCredPres** | **G** | **-** | **0-1** | **-** | **Grupo de valores referentes ao crédito presumido para CBS** |
| NFSe/infNFSe/IBSCBS/totCIBS/gCBS/gCBSCredPres/ | pCredPresCBS | E | N | 1-1 | 1-2V2 | Alíquota do crédito presumido para a CBS |
| NFSe/infNFSe/IBSCBS/totCIBS/gCBS/gCBSCredPres/ | vCredPresCBS | E | N | 1-1 | 1-15V2 | Valor do Crédito Presumido da CBS.<br><br>vCredPresCBS = vBC x pCredPresCBS |
| NFSe/infNFSe/IBSCBS/totCIBS/gCBS/ | vDifCBS | E | N | <span style="background-color:#f4b6ee">0-1</span> | 1-15V2 | Total do Diferimento CBS.<br><br>vDifCBS = vCBS x pDifCBS |
| NFSe/infNFSe/IBSCBS/totCIBS/gCBS/ | vCBS | E | N | 1-1 | 1-15V2 | Total valor da CBS da União.<br><br>vCBS = vBC x (pCBS ou pAliqEfetCBS) |

CARLOS EDUARDO BURKLE

Auditor Fiscal de Tributos – Londrina/PR

Secretário-Executivo da Secretaria-Executiva do Comitê Gestor da Nota Fiscal de Serviço Eletrônica de Padrão Nacional (SE/CGNFS-e)
