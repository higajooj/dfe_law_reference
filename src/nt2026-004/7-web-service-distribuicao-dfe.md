<!-- p.12 -->
# 7. Web Service – NfeDistribuicaoDFe

Método: nfeDistDFeInteresse

## 1.1. Leiaute Mensagem de Entrada

Schema XML: distDFeInt_v9.99.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **A01** | **distDFeInt** | **Raiz** | **-** | **-** | **-** | **-** | **TAG raiz** |
| A05 | CNPJ | CE | A01 | C | 1-1 | 14 | CNPJ do interessado no DF-e |
| **A11** | **consChNFe** | **CG** | **A01** | **-** | **1-1** | **-** | **Grupo para consultar uma NF-e pela chave de acesso** |
| A12 | chNFe | E | A11 | C | 1-1 | 44 | Chave de acesso específica. |
