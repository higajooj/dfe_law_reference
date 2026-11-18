<!-- p.11 -->

# 2.2.3.3 Grupo de Informações Relativas às Totalizações da CBS

<!-- REVISAR p.11: no original, as três primeiras linhas do grupo "gCBS" (vCredPresCBS, vDifCBS e vDesonCBS) descrevem o total como "municipal", embora se refiram à CBS (tributo federal); transcrito literalmente, confirmar -->

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| **NFSe/infNFSe/IBSCBSSEL/totCIBSSel/** | **gCBS** | **G** | **-** | **1-1** | **-** | **Grupo de valores referentes à CBS** |
| NFSe/infNFSe/IBSCBSSEL/totCIBSSel/gCBS/ | vCredPresCBS | E | N | 1-1 | 1-15V2 | Total do Credito Presumido municipal. |
| NFSe/infNFSe/IBSCBSSEL/totCIBSSel/gCBS/ | vDifCBS | E | N | 1-1 | 1-15V2 | Total do Diferimento municipal. |
| NFSe/infNFSe/IBSCBSSEL/totCIBSSel/gCBS/ | vDesonCBS | E | N | 1-1 | 1-15V2 | Total valor desonerado municipal.<br><br>vDesonCBS = vBC x pAliqCBSDeson |
| NFSe/infNFSe/IBSCBSSEL/totCIBSSel/gCBS/ | vCBS | E | N | 1-1 | 1-15V2 | Total valor da CBS da União.<br><br>vCBS = (vBCCIBS - vCredPresCBS - vDifCBS - vDevTribCBS - vDesonCBS) x pAliqEfetCBS |

---

SAMUEL KRUGER
Auditor-Fiscal da Receita Federal do Brasil
Secretário-Executivo da Secretaria-Executiva do Comitê Gestor da Nota Fiscal de Serviço Eletrônica de Padrão Nacional (SE/CGNFS-e)
