<!-- p.14 -->
# 4.3. X. Transporte da NF-e

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| ~~X03-10~~ | ~~65~~ | ~~NFC-e com dados do Transportador e não é entrega a domicílio (tag:transporta e indPres<>4)~~ | ~~Obrig~~ | ~~754~~ | ~~Rej.~~ | ~~Rejeição: NFC-e com dados do Transportador~~ |
| ~~X03-20~~ | ~~65~~ | ~~NFC-e sem dados do Transportador (tag:transporta) e é entrega a domicílio (indPres=4)~~ | ~~Obrig.~~ | ~~786~~ | ~~Rej.~~ | ~~Rejeição: NFC-e de entrega a domicílio sem dados do Transportador~~ |

> **Revogado/Descontinuado:** as regras X03-10 e X03-20 estão riscadas no original; esta NT as desabilita (item 2.3.2).
