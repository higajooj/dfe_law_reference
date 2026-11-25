<!-- p.09 -->

# 4 Total Geral do Documento Fiscal Eletrônico

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| 01 | vTotDFe | E | imp (CTe/CTeOS) e total (CTeSimp) | E | 0-1 | 13,2 | Valor total do documento fiscal<br><mark>vTPrest + total do IBS + total da CBS</mark> |

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|
| 01 | <mark>O total geral do DFe deverá ser INFORMADO com a soma do total da prestação + IBS + CBS</mark><br><br><mark>vTotDFe = vPrest/vTPrest + gIBSCBS/vIBS + gCBS/vCBS</mark><br><br><mark>**Exceção**: Em 2026 não somar IBS e CBS, usando a fórmula:</mark><br><br><mark>vTotDFe = vPrest/vTPrest</mark><br><br><mark>~~O total geral do DFe deverá ser informado REPETINDO o valor de vTPrest~~</mark> | Obrig. | 365 | Rej. | Rejeição: Total do DFe inválido |

> **Revogado/Descontinuado:** o texto "O total geral do DFe deverá ser informado REPETINDO o valor de vTPrest", riscado na regra 01.
