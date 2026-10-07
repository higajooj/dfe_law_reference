<!-- p.7 -->
# 3.1 DA. Autorização – Área de dados do lote de NF-e

Para a NFC-e será eliminada a requisição assíncrona, portanto o Lote de NFC-e somente poderá ser informado com 1 NFC-e.

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| GAP03a-4 | 65 | Enviado Lote com mais de 1 NFC-e | Obrig. | 126 | Rej. | Rejeição: Enviado lote com mais de 1 NFC-e |
