<!-- p.05 -->

# 4 Regras de Validação do Emitente

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|
| 01 | Se CRT do emitente for igual a 1 (Simples Nacional) ou 2 (Simples Nacional, excesso sublimite) e a tag tpRegimeIBSCBS estiver informada: o valor DEVE ser igual a 1. | Obrig. | 1090 | Rej. | Rejeição: Tipo de Regime de Apuração incompatível com contribuinte Optante pelo Simples Nacional |
| 02 | Se CRT do emitente for igual a 3 (Regime Normal) e a tag tpRegimeIBSCBS estiver informada: o valor DEVE ser igual a 2, 3 ou 4. | Obrig. | 1091 | Rej. | Rejeição: Tipo de Regime de Apuração incompatível com contribuinte do Regime Normal |
| 03 | Se CRT do emitente for igual a 4 (MEI - Microempreendedor Individual): o campo tpRegimeIBSCBS NÃO DEVE ser informado. | Obrig. | 1092 | Rej. | Rejeição: Tipo de Regime de Apuração não deve ser informado para MEI |
