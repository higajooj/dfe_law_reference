<!-- p.13 -->
# 4.7. 7. Banco de Dados: Cadastro da SEFAZ

<!-- p.14 -->
| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| 7C21-10 | 55/65 | Código de Regime Tributário do emitente divergente do cadastrado na SEFAZ (tag: emit/CRT):<br>- CRT=“1 - Simples Nacional” para Contribuinte cadastrado como Regime Normal na UF (CCC, regTrib=9);<br>- CRT=“3 - Regime Normal” para Contribuinte cadastrado como Simples Nacional na UF (CCC, regTrib=1 ou 2);<br>**Observação:** Regra de Validação opcional por UF. | Facul. | 481 | Rej. | Rejeição: Código Regime Tributário do emitente diverge do cadastro na SEFAZ |
