<!-- p.11 -->
# 4.2. C. Identificação do Emitente

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| ~~C02a-04~~ | ~~65~~ | ~~Se informado CPF do emitente:<br>– Se NFC-e (modelo 65) (NT 2015.002)~~ | ~~Obrig.~~ | ~~337~~ | ~~Rej.~~ | ~~Rejeição: NFC-e para emitente pessoa física~~ |
| ~~C02a-08~~ | ~~55~~ | ~~Se informado CPF do emitente:<br>– Se NF-e (modelo 55)<br>Observação: Regra de validação opcional a critério da UF. (NT 2018.001)~~ | ~~Obrig.~~ | ~~652~~ | ~~Rej.~~ | ~~Rejeição: NF-e para emitente pessoa física~~ |
| ~~C02a-14~~ | ~~55~~ | ~~Se informado CPF do Emitente:<br>– Série difere da faixa para emitente CPF: 890-899 e 910-919<br>Observação: Regra de validação opcional a critério da UF. Permite a emissão de NF-e por pessoa física, somente no serviço de Nota Fiscal Avulsa no site da UF. (NT 2018.001)~~ | ~~Obrig.~~ | ~~407~~ | ~~Rej.~~ | ~~Rejeição: CPF do Emitente somente no serviço de Nota Fiscal Avulsa no site do Fisco~~ |

> **Revogado/Descontinuado:** as três linhas (C02a-04, C02a-08 e C02a-14) estão riscadas no original, conforme a eliminação descrita no item 2.2.2.
