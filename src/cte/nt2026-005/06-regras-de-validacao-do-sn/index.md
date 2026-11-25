<!-- p.06 -->

# 6 Regras de Validação do SN

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|
| 01 | Se o CST informado possuir indicador que EXIGE preenchimento do grupo de informações específicas do IBS/CBS, este grupo DEVE estar informado (grupo: gIBSCBS)<br><br>~~**Exceção:** Se o CRT informado pelo emitente for 1- Simples Nacional, 2- Simples Nacional, excesso sublimite de receita bruta ou 4 -MEI, o grupo gIBSCBS NÃO será exigido~~<br><br><mark>**Exceção:** Esta RV não se aplica quando CRT=”1- Simples Nacional” e tpRegimeIBSCBS não informado.</mark> | Obrig | 315 | Rej. | Rejeição: Grupo IBS/CBS deve ser preenchido para o CST informado |
| 02 | Se CRT = 1 e tpRegimeIBSCBS NÃO estiver informado (Optante SN sem Regime Regular):<br><br>– O grupo gIBSCBS NÃO DEVE ser informado. | Obrig. | 1100 | Rej. | Rejeição: Grupo de informações do IBS e CBS (gIBSCBS) NÃO PODE ser informado para optante sem regime regular |
| 03 | Se CRT = 1 e tpRegimeIBSCBS NÃO estiver informado (Optante SN sem Regime Regular):<br><br>– O grupo gTribSN DEVE ser informado, contendo obrigatoriamente os subgrupos gIBSSN e gCBSSN. | Obrig. | 1101 | Rej. | Rejeição: Grupo de tributação do Simples Nacional (gTribSN) obrigatório para optante sem regime regular |
| 04 | Se CRT = 1 ou 2 com tpRegimeIBSCBS = 1 (Optante Regime Regular) OU CRT = 3 com tpRegimeIBSCBS = 4 (Normal Pendente com Regime Regular):<br><br>– O grupo gTribSN NÃO DEVE ser informado. | Obrig. | 1102 | Rej. | Rejeição: Grupo de tributação do Simples Nacional (gTribSN) não deve ser informado para contribuinte no regime regular |
| 05 | **VÁLIDA PARA 2026:**<br><br>Se informado grupo CBS (gCBS), a alíquota de CBS deverá ser de 0,90 % para documento com data de emissão no ano de 2026. (Art. 346 da LC 214/25)<br><br>**Exceção**: Se o cClassTrib possuir indicador de tributação regular o pCBS deve ser igual a zero<br><br>**Exceção 2**: A Alíquota da CBS (tag: pCBS) pode ser igual a zero quando as condições abaixo forem atendidas:<br><br><mark>- Se CRT = 2 e tpRegimeIBSCBS NÃO estiver informado (Excesso Sublimite sem Regime Regular)</mark><br><br>- Código de Classificação do Produto (cClass) permitir alíquota zero para CBS em zona incentivada.<br><br>- Município do Fato Gerador (cMunFG) e emitente devem pertencer a um município da ZFM | Obrig. | 316 | Rej. | Rejeição: Alíquota da CBS inválida |

> **Revogado/Descontinuado:** na regra 01, o trecho riscado “Exceção: Se o CRT informado pelo emitente for 1- Simples Nacional, 2- Simples Nacional, excesso sublimite de receita bruta ou 4 -MEI, o grupo gIBSCBS NÃO será exigido” aparece riscado no original.

| Cod. IBGE | Nome Município |
|---|---|
| 1302603 | Manaus |
| 1303569 | Rio Preto da Eva |
| 1301902 | Itacoatiara |

<!-- p.07 -->

**OU**

- **Município do Fato Gerador (cMunFG) e Município do Emitente** devem estar localizados nos municípios pares da mesma ALC.

| ALC | Município Início | Município Fim |
|---|---|---|
| 1 | 1304062-Tabatinga (AM) | 1304062-Tabatinga (AM) |
| 2 | 1100106-Guajará-Mirim (RO) | 1100106-Guajará-Mirim (RO) |
| 3 | 1400100-Boa Vista (RR) | 1400100-Boa Vista (RR) |
|  | 1400100-Boa Vista (RR) | 1400159-Bonfim (RR) |
|  | 1400159-Bonfim (RR) | 1400100-Boa Vista (RR) |
|  | 1400159-Bonfim (RR) | 1400159-Bonfim (RR) |
| 4 | 1600303-Macapá (AP) | 1600303-Macapá (AP) |
|  | 1600303-Macapá (AP) | 1600600-Santana (AP) |
|  | 1600600-Santana (AP) | 1600303-Macapá (AP) |
|  | 1600600-Santana (AP) | 1600600-Santana (AP) |
| 5 | 1200104-Brasileia (AC) | 1200104-Brasileia (AC) |
|  | 1200104-Brasileia (AC) | 1200252-Epitaciolândia (AC) |
|  | 1200104-Brasileia (AC) | 1200203-Cruzeiro do Sul (AC) |
|  | 1200252-Epitaciolândia (AC) | 1200104-Brasileia (AC) |
|  | 1200252-Epitaciolândia (AC) | 1200252-Epitaciolândia (AC) |
|  | 1200252-Epitaciolândia (AC) | 1200203-Cruzeiro do Sul (AC) |
|  | 1200203-Cruzeiro do Sul (AC) | 1200104-Brasileia (AC) |
|  | 1200203-Cruzeiro do Sul (AC) | 1200252-Epitaciolândia (AC) |
|  | 1200203-Cruzeiro do Sul (AC) | 1200203-Cruzeiro do Sul (AC) |

**Observação:** As cores definem quais municípios são da mesma área incentivada, e isto será observado na regra de validação

**EXCEÇÂO:** Até que seja publicada a alíquota de referência da CBS para 2027, deverá ser informada a alíquota de 2026, inclusive para testes de simulação de 2027 no AMBIENTE DE HOMOLOGAÇÃO (tpAmb=2), quando a alíquota de 2027 estiver publicada, ela também será aceita para testes ainda em 2026

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|
| 06 | **VÁLIDA A PARTIR de 2027:**<br><br>A alíquota da CBS (tag: pCBS) deve ser igual a alíquota vigente para o período conforme legislação.<br><br>**Exceção**: Se o cClassTrib possuir indicador de tributação regular o pCBS deve ser igual a zero<br><br>**Exceção 2**: Se o grupo gALCZFMCBS estiver preenchido, o pCBS deve ser igual a zero.<br><br><mark>**Exceção 3:** Se CRT = 2 e tpRegimeIBSCBS NÃO estiver informado (Excesso Sublimite sem Regime Regular), o pCBS deve ser igual a zero</mark><br><br>**Observação:** Consultar Tabela de Alíquotas da CBS.<br><br>**IMPORTANTE**: Somente serviços **PRESENCIAIS** podem utilizar o benefício da alíquota zero para Área Incentivada. | Obrig. | 316 | Rej. | Rejeição: Alíquota da CBS inválida |
| 07 | Se CRT = 2 e tpRegimeIBSCBS NÃO estiver informado (Excesso Sublimite sem Regime Regular):<br><br>– O grupo gTribSN DEVE ser informado contendo o subgrupo gCBSSN | Obrig. | 1103 | Rej. | Rejeição: Para excesso de sublimite sem regime regular o grupo gCBSSN deve ser informado |
| 08 | <!-- p.08 -->Se CRT = 2 e tpRegimeIBSCBS NÃO estiver informado (Excesso Sublimite sem Regime Regular):<br><br>– O grupo gTribSN DEVE ser informado SEM INFORMAR o grupo gIBSSN | Obrig. | 1104 | Rej. | Rejeição: Para excesso de sublimite sem regime regular o grupo gIBSSN Não deve ser informado |
| 09 | Se CRT = 3 e tpRegimeIBSCBS = 2 (Opção pendente CRT=1 sem regime regular):<br><br>– O grupo gIBSCBS DEVE ser informado normalmente (respeitando o indicador de exigência de gIBSCBS no CST).<br><br>– O grupo gTribSN DEVE ser informado contendo gIBSSN e gCBSSN. | Obrig, | 1105 | Rej. | Rejeição: Grupo gTribSN (com gIBSSN e gCBSSN) e gIBSCBS devem ser informados. |
| 10 | Se CRT = 3 e tpRegimeIBSCBS = 3 (Opção pendente CRT=2 sem regime regular):<br><br>– O grupo gIBSCBS DEVE ser informado normalmente (respeitando o indicador de exigência de gIBSCBS no CST).<br><br>– O grupo gTribSN DEVE ser informado contendo apenas o subgrupo gCBSSN (o subgrupo gIBSSN NÃO DEVE ser informado). | Obrig. | 1106 | Rej. | Rejeição: Para opção pendente CRT=2, informar apenas gCBSSN no grupo gTribSN |
| 11 | Se CRT = 4 (MEI - Microempreendedor Individual):<br><br>– Os grupos gIBSCBS e gTribSN NÃO DEVEM ser informados no item. | Obrig. | 1107 | Rej. | Rejeição: Grupos gIBSCBS e gTribSN não devem ser preenchidos para MEI |
| 12 | Se informado o grupo de Compra Governamental (ide/gCompraGov) com Ente da União (tpEnteGov = 1) para documento com data de emissão em 2027 ou 2028 e informados gTribSN e gIBSSN:<br><br>– A alíquota do IBS do Simples Nacional (gTribSN/gIBSSN/pIBSSN) deve ser igual a zero | Obrig | 1108 | Rej. | Rejeição: Alíquota do IBS do Simples Nacional deve ser zero para compras governamentais da União nos anos de 2027 e 2028 |
| 13 | Se informado o grupo de Compra Governamental (ide/gCompraGov) com Ente da União (tpEnteGov = 1) para documento com data de emissão em 2027 ou 2028 e informados gTribSN e gIBSSN:<br><br>– O valor do IBS SN ((gTribSN/gIBSSN/vIBSSN)) deve ser igual a 0,00 | Obrig | 1109 | Rej. | Rejeição: Valor do IBS do Simples Nacional deve ser zero para compras governamentais da União nos anos de 2027 e 2028 |
