<!-- p.12 -->

# 10 Regra de Validação para CTe Complementar

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| Se Tipo do CTe=1 (Complementar) e emitente com CRT 1=Simples Nacional OU 2 = Simples Nacional, excesso sublimite de receita bruta OU 3 = Regime Normal com indicador de SN Pendente (tag tpRegimeIBSCBS = 2) OU CRT 4=Simples Nacional - Microempreendedor Individual – MEI:<br><br>Quando Informados múltiplos CTes para serem complementados<br>- Chaves de acesso dos CTes complementados com ano e mês de emissão diferentes. | Obrig. | 909 | Rej. | Rejeição: As chaves de acesso de todos os CTes complementados devem corresponder ao mesmo período (ano e mês). |
