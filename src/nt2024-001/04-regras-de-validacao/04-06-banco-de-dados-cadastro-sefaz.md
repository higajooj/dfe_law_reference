<!-- p.16 -->
# 4.6. Banco de Dados: Cadastro da SEFAZ

<!-- p.17 -->
| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| 7C21-10 | 55/65 | Código de Regime Tributário do emitente divergente do cadastrado na SEFAZ (tag:emit/CRT):<br>- CRT="1-Simples Nacional" para Contribuinte cadastrado como Regime Normal na UF (CCC, regTrib=9);<br>- CRT="3-Regime Normal" para Contribuinte cadastrado como Simples Nacional na UF (CCC, regTrib=1 ~~ou 2~~);<br>- CRT= “4-Simples Nacional - Microempreendedor Individual - MEI” para Contribuinte cadastrado como Simples Nacional - Microempreendedor Individual - MEI na UF (CCC, regTrib=2);<br>Observação: Regra de Validação opcional por UF (NT2022.003) | Facul. | 481 | Rej. | Rejeição: Código Regime Tributário do emitente diverge do cadastro na SEFAZ |

> **Revogado/Descontinuado:** na RV 7C21-10, o trecho “ou 2” de “regTrib=1 ou 2” está riscado no original.
