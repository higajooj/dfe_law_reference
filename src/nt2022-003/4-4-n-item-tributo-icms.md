<!-- p.12 -->
# 4.4. N. Item / Tributo: ICMS

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| N17c-30 | 55 | Se Operação Interna ou Operação Interestadual (idDest=1 ou 2) com CST=00 (operação tributada normalmente):<br>- Se informado valor diferente de zero para o FCP (verificar tags vFCP, vFCPST, vFCPSTRet)<br>~~Observação: Regra de Validação opcional, a critério da UF.~~<br>**Observação:** Regra de validação aplicável para a UF CE. | Facul. | 474 | Rej. | Rejeição: FCP não deve ser destacado na NF-e conforme legislação estadual [nItem:999] |

> **Revogado/Descontinuado:** na regra N17c-30, a observação “Regra de Validação opcional, a critério da UF.” está riscada no original.
