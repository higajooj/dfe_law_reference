<!-- p.10 -->
# 6. Fim da Denegação na NFC-e

O Ajuste SINIEF 10/2023 publicou a alteração no qual exclui a denegação na NFC-e, portanto, a NFC-e não será mais denegada por irregularidade fiscal do emitente, e passará a ser rejeitada.

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| 1C17-40 | 55/65 | - Emitente em situação irregular perante o Fisco<br><br>Observação: o aplicativo emissor de NFF garante que a solicitação de emissão da NF-e é realizada somente para contribuintes ativos; entretanto, como é possível que ocorra um atraso no envio do XML para o ambiente de autorização, nessa situação, de forma excepcional e transitória, poderá acontecer a autorização de uso de uma NF-e para um contribuinte que já não está mais ativo na UF (NT 2021.002) | Obrig. | 301 | Den. | Uso Denegado: Irregularidade fiscal do emitente |

Quando o emissor tiver em situação irregular deverá ter a rejeição “781 - Rejeição: Emissor não habilitado para emissão da NFC-e”, da regra 1C17-38.

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| 1C17-38 | 65 | - Emitente não autorizado para emissão de NFC-e ou em situação irregular perante o Fisco | Obrig. | 781 | Rej. | Rejeição: Emissor não habilitado para emissão da NFC-e |
