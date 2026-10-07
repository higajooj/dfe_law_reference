<!-- p.32 -->
# 03. Serviço: Inutilização de numeração (item 4.4 do MOC)

## 03.1 Sobre o Processamento do Pedido de Inutilização

Atualmente já é verificada a existência de um Pedido de Inutilização de Numeração em duplicidade (mesma faixa de numeração a ser inutilizada), rejeitando o novo Pedido de Inutilização com o erro “563-Rejeição: Já existe pedido de Inutilização com a mesma faixa de inutilização”.

Para esta rejeição, será informado na resposta o Número do Protocolo de Autorização do Pedido de Inutilização anteriormente autorizado (tag: retInutNFe/infInut/nProt).
