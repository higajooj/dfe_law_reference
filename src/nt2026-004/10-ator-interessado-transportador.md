<!-- p.14 -->
# 10. Web Service – NFeRecepcaoEvento – Ator Interessado na NF-e - Transportador

## 1.1. Leiaute Mensagem de Entrada

Schema XML: envEventoAtorInteressado_v1.00.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **P23** | **autXML** | **G** | **P17** | **-** | **1-1** | **-** | **Pessoas autorizadas a acessar o XML da NF-e** |
| P24 | CNPJ | CE | P23 | C | 1-1 | 3-14 | CNPJ autorizado |
