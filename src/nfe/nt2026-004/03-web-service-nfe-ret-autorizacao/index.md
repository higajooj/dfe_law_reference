<!-- p.9 -->
# 3. Web Service – NfeRetAutorizacao

Método: nfeRetAutorizacao

## 1.2. Leiaute Mensagem de Retorno

Schema XML: retConsReciNFe_v4.00.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **PR01** | **protNFe** | **Raiz** | **-** | **-** | **-** | **-** | **TAG raiz do Protocolo de recebimento da NFe** |
| PR03 | infProt | G | PR01 | - | 1-1 | - | Informações do Protocolo de resposta.<br>TAG a ser assinada |
| PR07 | chNFe | E | PR03 | C | 1-1 | 44 | Chave de Acesso da NF-e |
