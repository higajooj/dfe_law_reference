<!-- p.19 -->

# 2.2.5. Grupo de Informações Relativas às Totalizações da CBS

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| **NFSe/infNFSe/IBSCBS/totCIBS/** | **gCBS** | **G** | **-** | **0-1** | **-** | **Grupo de valores referentes à CBS** |
| **NFSe/infNFSe/IBSCBS/totCIBS/gCBS/** | **gCBSCredPres** | **G** | **-** | **0-1** | **-** | **Grupo de valores referentes ao crédito presumido para CBS *[NT 003: Ocor.]*** |
| NFSe/infNFSe/IBSCBS/totCIBS/gCBS/gCBSCredPres/ | pCredPresCBS | E | N | 1-1 | 1-2V2 | Alíquota do crédito presumido para a CBS *[NT 003: Ocor.]* |
| NFSe/infNFSe/IBSCBS/totCIBS/gCBS/gCBSCredPres/ | vCredPresCBS | E | N | 1-1 | 1-15V2 | Valor do Crédito Presumido da CBS.<br><br>vCredPresCBS = vBC x pCredPresCBS |
| NFSe/infNFSe/IBSCBS/totCIBS/gCBS/ | vDifCBS | E | N | 0-1 | 1-15V2 | Total do Diferimento CBS.<br><br>vDifCBS = vCBS x pDifCBS *[NT 002: Ocor.]* |
| NFSe/infNFSe/IBSCBS/totCIBS/gCBS/ | vCBS | E | N | 1-1 | 1-15V2 | Total valor da CBS da União.<br><br>vCBS = vBC x (pCBS ou pAliqEfetCBS) |

Carlos Eduardo Burkle<br>Auditor-Fiscal de Tributos – Londrina (PR)<br>Secretário-Executivo da Secretaria-Executiva do Comitê Gestor da Nota Fiscal de Serviço Eletrônica de Padrão Nacional (SE/CGNFS-e)
