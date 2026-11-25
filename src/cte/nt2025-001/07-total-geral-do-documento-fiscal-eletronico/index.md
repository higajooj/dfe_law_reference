<!-- p.17 -->

# 7 Total Geral do Documento Fiscal Eletrônico

Deverá ser criada a tag Valor Total do DFe (vTotDFe).
No CTe, CTe Simplificado, CTe OS essa tag aparecerá dentro do grupo imp, após o grupo IBSCBS.

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| 01 | vTotDFe | E | imp | E | 0-1 | 13,2 | Valor total do documento fiscal<br>vTPrest + total do IBS + total da CBS |

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **01** A tag de Total do Documento Fiscal Eletrônico deverá ser informada (tag: imp\vTotDFe) sempre que existir informação no grupo IBSCBS (grupo: imp\IBSCBS) | Obrig. | 360 | Rej. | Rejeição: Total do DFe de preenchimento obrigatório |
| **02** O total geral do DFe deverá ser INFORMADO com a soma do total da prestação + IBS + CBS<br><br>vTotDFe = vPrest/vTPrest + gIBSCBS/vIBS + gCBS/vCBS<br><br>**Exceção:** Em 2026 não somar IBS e CBS, usando a fórmula:<br><br>vTotDFe = vPrest/vTPrest | Obrig. | 365 | Rej. | Rejeição: Total do DFe inválido |
