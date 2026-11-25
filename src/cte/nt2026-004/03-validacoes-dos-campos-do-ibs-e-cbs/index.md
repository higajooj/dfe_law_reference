<!-- p.07 -->

# 3 Validações dos campos do IBS e CBS

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| Se informado grupo IBS de competência das Unidades Federadas (gIBSUF):<br>A alíquota de IBS da UF (pIBSUF) deverá ser:<br>• 0,1% para documento com data de emissão no ano de 2026. (Art. 343 da LC 214/25)<br>• 0.05% para documento com data de emissão no ano de 2027 e 2028. (Art. 344 da LC 214/25)<br>• Alíquota de referência ou específica da UF a ser publicada para anos posteriores a 2028.<br>**Exceção**: Se o cClassTrib possuir indicador de tributação regular o pIBSUF deve ser igual a zero<br><br>**EXCEÇÂO**: Em 2026 será permitido informar as alíquotas de 2026 e 2027 APENAS no AMBIENTE DE HOMOLOGAÇÃO (tpAmb=2) viabilizando testes das empresas. | Obrig. | 316 | Rej. | Rejeição: Alíquota do IBS da UF inválida |
| Se informado grupo IBS de competência dos Municípios (gIBSMun):<br>A alíquota de IBS Municipal deverá ser:<br>• 0% para documento com data de emissão no ano de 2026. (Art. 343 da LC 214/25)<br>• 0.05% para documento com data de emissão no ano de 2027 e 2028. (Art. 344 da LC 214/25)<br>• Alíquota de referência ou específica do Município a ser publicada para anos posteriores a 2028<br>**Exceção**: Se o cClassTrib possuir indicador de tributação regular o pIBSMun deve ser igual a zero<br><br>**EXCEÇÃO**: Em 2026 será permitido informar as alíquotas de 2026 e 2027 APENAS no AMBIENTE DE HOMOLOGAÇÃO (tpAmb=2) viabilizando testes das empresas. | Obrig. | 321 | Rej. | Rejeição: Alíquota do IBS do Município inválida |
| VÁLIDA PARA 2026:<br><br>Se informado grupo CBS (gCBS), a alíquota de CBS deverá ser de 0,90 % para documento com data de emissão no ano de 2026. (Art. 346 da LC 214/25)<br><br>**Exceção**: Se o cClassTrib possuir indicador de tributação regular o pCBS deve ser igual a zero | Obrig. | 326 | Rej. | Rejeição: Alíquota da CBS inválida |

<!-- p.08 -->
**Exceção 2**: A Alíquota da CBS (tag: pCBS) pode ser igual a zero quando as condições abaixo forem atendidas:

- Código de Classificação do Produto (cClass) permitir alíquota zero para CBS em zona incentivada.
- Município do Fato Gerador (cMunFG) e emitente devem pertencer a um município da ZFM

| Cod. IBGE | Nome Município |
|---|---|
| 1302603 | Manaus |
| 1303569 | Rio Preto da Eva |
| 1301902 | Itacoatiara |

OU

- Município do Fato Gerador (cMunFG) e Município do Emitente devem estar localizados nos municípios pares da mesma ALC.

| ALC | Município Início | Município Fim |
|---|---|---|
| 1 | 1304062-Tabatinga (AM) | 1304062-Tabatinga (AM) |
| 2 | 1100106-Guajará-Mirim (RO) | 1100106-Guajará-Mirim (RO) |
| 3 | 1400100-Boa Vista (RR) | 1400100-Boa Vista (RR) |
| | 1400100-Boa Vista (RR) | 1400159-Bonfim (RR) |
| | 1400159-Bonfim (RR) | 1400100-Boa Vista (RR) |
| | 1400159-Bonfim (RR) | 1400159-Bonfim (RR) |
| 4 | 1600303-Macapá (AP) | 1600303-Macapá (AP) |
| | 1600303-Macapá (AP) | 1600600-Santana (AP) |
| | 1600600-Santana (AP) | 1600303-Macapá (AP) |
| | 1600600-Santana (AP) | 1600600-Santana (AP) |
| 5 | 1200104-Brasileia (AC) | 1200104-Brasileia (AC) |
| | 1200104-Brasileia (AC) | 1200252-Epitaciolândia (AC) |
| | 1200104-Brasileia (AC) | 1200203-Cruzeiro do Sul (AC) |
| | 1200252-Epitaciolândia (AC) | 1200104-Brasileia (AC) |
| | 1200252-Epitaciolândia (AC) | 1200252-Epitaciolândia (AC) |
| | 1200252-Epitaciolândia (AC) | 1200203-Cruzeiro do Sul (AC) |
| | 1200203-Cruzeiro do Sul (AC) | 1200104-Brasileia (AC) |
| | 1200203-Cruzeiro do Sul (AC) | 1200252-Epitaciolândia (AC) |
| | 1200203-Cruzeiro do Sul (AC) | 1200203-Cruzeiro do Sul (AC) |

Observação: As cores definem quais municípios são da mesma área incentivada, e isto será observado na regra de validação

EXCEÇÂO: Até que seja publicada a alíquota de referência da CBS para 2027, deverá ser informada a alíquota de 2026, inclusive para testes de simulação de 2027 no AMBIENTE DE HOMOLOGAÇÃO (tpAmb=2), quando a alíquota de 2027 estiver publicada, ela também será aceita para testes ainda em 2026

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| Se informado o indicador de Doação (indDoacao=1), o CNPJ-Base/CPF do emitente deve ser diferente do CNPJ-Base/CPF do tomador do serviço | Obrig. | 1055 | Rej. | Rejeição: Doação com CNPJ/CPF do emitente igual do tomador do serviço |
| Se o cClassTrib informado possuir indicador que VEDA uso de doação, o campo indDoacao não pode ser informado. | Obrig | 1056 | Rej. | Rejeição: O cClassTrib é incompatível com o campo de indicador de doação preenchido |
| Se o cClassTrib informado possuir indicador que EXIGE indicação de doação, o campo indDoacao DEVE ser informado. | Obrig | 1057 | Rej. | Rejeição: O cClassTrib informado necessita que o indicador de doação seja preenchido |
