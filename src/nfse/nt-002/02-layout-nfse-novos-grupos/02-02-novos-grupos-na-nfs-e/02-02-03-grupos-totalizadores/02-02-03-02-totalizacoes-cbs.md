# 2.2.3.2 Grupo de Informações Relativas às Totalizações da CBS

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| **NFSe/infNFSe/IBSCBS/totCIBSSel/** | **gCBS** | **G** | **-** | **1-1** | **-** | **Grupo de totalizadores referentes à CBS** |
| NFSe/infNFSe/IBSCBS/totCIBS/gCBS/ | vCredPresCBS | E | N | 1-1 | 1-15V2 | Valor do Crédito Presumido da CBS.<br><br>vCredPresCBS = vBC x pCredPresCBS |
| NFSe/infNFSe/IBSCBS/totCIBS/gCBS/ | vDifCBS | E | N | 1-1 | 1-15V2 | Total do Diferimento CBS.<br><br>vDifCBS = (vBC x pDifCBS) |
| NFSe/infNFSe/IBSCBS/totCIBS/gCBS/ | vDesonCBS | E | N | 1-1 | 1-15V2 | Total do valor desonerado CBS.<br><br>vDesonCBS = (vBC x pAliqCBS) - (vBC x pAliqEfetCBS) |
| NFSe/infNFSe/IBSCBS/totCIBS/gCBS/ | vCBS | E | N | 1-1 | 1-15V2 | Total valor da CBS da União.<br><br>vCBS = vBC x (pCBS ou pAliqEfetCBS) - (vCredPresCBS + vDifCBS + vDevTribCBS) |

<!-- REVISAR p.12: o grupo gCBS usa 'totCIBSSel' no caminho e suas linhas usam 'totCIBS' (inconsistência do original); transcrito como no original -->

<!-- p.13 -->

SAMUEL KRUGER

Auditor-Fiscal da Receita Federal do Brasil

Secretário-Executivo da Secretaria-Executiva do Comitê Gestor da Nota Fiscal de Serviço Eletrônica de Padrão Nacional (SE/CGNFS-e)
