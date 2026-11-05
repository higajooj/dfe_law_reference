<!-- p.24 -->
# 6.1. Grupo UB. Informações dos tributos IBS / CBS e Imposto Seletivo

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| UB02-10 | 55/65 | Não é permitido uso do Imposto Seletivo (grupo: seletivo) para este cClass. | Obrig. | 363 | Rej. | Rejeição: Não é permitido uso do Imposto Seletivo para esta classificação da operação. |
| UB02-20 | 55/65 | É exigido uso do Imposto Seletivo (grupo: seletivo) para este cClass. | Obrig. | 367 | Rej. | Rejeição: É exigido o uso do Imposto Seletivo para esta classificação da operação. |
| UB02-30 | 55/65 | É exigido uso do Imposto Seletivo (grupo: seletivo) para este NCM. | Obrig. | 368 | Rej. | Rejeição: É exigido o uso do Imposto Seletivo para esta classificação da operação para este NCM. |
| UB03-10 | 55/65 | Se CST do Imposto Seletivo for informado, este deve existir na tabela de Código de Situação Tributária (tag: seletivo/CST). | Obrig. | 369 | Rej. | Rejeição: CST do Imposto Seletivo informado inexistente |
| UB04-10 | 55/65 | Se cClassTrib for informado, este deve existir na tabela de Classificação Tributária do Imposto Seletivo (tag: seletivo/cClassTrib) | Obrig. | 370 | Rej. | Rejeição: Classificação Tributária do Imposto Seletivo informada inexistente |
| UB07-10 | 55/65 | Se Se CClassTrib informado exigir grupo do Imposto Seletivo e Exigir o pImpSel diferente de Zero e pImpSel do imposto for zero. (tag: seletivo/pSel). | Obrig. | 371 | Rej. | Rejeição: CST/CCLassTrib do Imposto Seletivo obriga informação de alíquota de Imposto Seletivo |
| UB08-10 | 55-65 | Se Se CClassTrib informado exigir grupo do Imposto Seletivo e Exigir o pImpSel diferente de Zero e NCM do item for 2401, 2402, 2403, 2404, 2203, 2204, 2205, 2206, 2208 e pImpSelEspec. | Obrig. | 372 | Rej. | Rejeição: Obrigatório informação de alíquota específica de Imposto Seletivo |
| UB09-10 | 55/65 | Se CClassTrib informado exigir grupo do Imposto Seletivo (grupo: seletivo) e unidade tributável (tag: seletivo/uTrib) e quantidade tributável (tag: seletivo/qtrib) não informadas ou iguais a zero. | Obrig. | 373 | Rej. | Rejeição: UTrib e QTrib do imposto seletivo não informados |

<!-- p.25 -->

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| UB102-10 | 55/65 | Se informado grupo do IBS e CBS monofásico (grupo: gIBSCBSMono): O valor total do IBS Monofásico (tag: vTotIBSMono) deverá ser resultante de: vIBSMono + vIBSMonoReten -vIBSMonoDif<br>**Observação:** Aceitar uma tolerância de 0,01 a mais ou a menos | Obrig. | 374 | Rej. | Rejeição: Valor do IBS monofásico calculado incorretamente. |
| UB103-10 | 55/65 | Se informado grupo do IBS e CBS monofásico (grupo: gIBSCBSMono): O valor total da CBS Monofásica (tag: vTotCBSMono) deverá ser resultante de: vCBSMono + vCBSMonoReten -vCBSMonoDif<br>**Observação:** Aceitar uma tolerância de 0,01 a mais ou a menos | Obrig. | 375 | Rej. | Rejeição: Valor da CBS monofásico calculado incorretamente. |
| UB11-10 | 55/65 | Se informado imposto seletivo (tag: imposto/seletivo): Valor do IS (vImpSel) = BC (tag: seletivo/vBC) * Alq (tag: seletivo/pImpSel)<br>**Observação 1:** Se informada alíquota específica (tag: seletivo/pImpSelEspec): Valor do IS (vImpSel) = qtd (tag: seletivo/vTrib) * Alq (tag: seletivo/pImpSelEspec)<br>**Observação 2:** Aceitar uma tolerância de 0,01 a mais ou a menos. | Obrig. | 376 | Rej. | Rejeição: Valor do Imposto Seletivo diferente de Base de Cálculo x Alíquota |
| UB12-10 | 55/65 | Se CST do IBS/CBS for informado, este deve existir na tabela de Código de Situação Tributária (tag: gIBSCBS/CST) | Obrig. | 310 | Rej. | Rejeição: CST do IBS/CBS informado inexistente |

<!-- p.26 -->

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| UB12-20 | 55/65 | Se o CST do IBS/CBS (tag: gIBSCBS/CST) informado VEDAR preenchimento do grupo de informações específicas do IBS/CBS, este grupo NÂO DEVE estar informado (grupo: imposto/IBSCBSSel) | Obrig. | 313 | Rej. | Rejeição: Grupo IBS/CBS não deve ser preenchido para o CST informado |
| UB12-30 | 55/65 | Se o CST do IBS/CBS (tag: gIBSCBS/CST) informado EXIGIR preenchimento do grupo de informações específicas do IBS/CBS, este grupo DEVE estar informado (grupo: imposto/IBSCBSSel) | Obrig. | 314 | Rej. | Rejeição: Grupo IBS/CBS deve ser preenchido para o CST informado |
| UB13-10 | 55/65 | Se cClassTrib for informado, este deve existir na tabela de Classificação Tributária do IBS/CBS (tag: gIBSCBS/cClassTrib) | Obrig. | 311 | Rej. | Rejeição: Classificação Tributária do IBS/CBS informada inexistente |
| UB13-20 | 55/65 | cClassTrib (tag: gIBSCBS/cClassTrib) for informado deve ser compatível com CST (tag: gIBSCBS/CST) | Obrig. | 312 | Rej. | Rejeição: Rejeição: Classificação Tributária incompatível com o CST informado |
| UB17-10 | 55/65 | Alíiquota do IBS da UF (tag: pIBSUF) deve ser igual a 0,1% para documento com data de emissão no ano de 2026. Art 342 PL 68/24. | Obrig. | 377 | Rej. | Rejeição: Alíiquota do IBS da UF deve ser igual a 0,1% para documento emitido em 2026 |
| UB17-20 | 55/65 | Alíiquota do IBS da UF (tag: pIBSUF) deve ser igual a 0,05% para documento com data de emissão nos anos de 2027 e 2028. Art 343 PL 68/24. | Obrig. | 378 | Rej. | Rejeição: Alíiquota do IBS da UF deve ser igual a 0,05% para documento emitido em 2027 e 2028 |
| UB19-10 | 55/65 | Se informado grupo IBS de competência das Unidades Federadas (gIBSUF) O valor bruto do tributo do IBS das UF deve ser igual à multiplicação da Base de Cálculo pela Alíquota. vTribOP (tag: gIBSUF/vTribOP) = vBC (tag: gIBSCBS/vBC) * pIBSUF (tag: gIBSUF/pIBSUF)<br>**Observação:** Aceitar uma tolerância de 0,01 a mais ou a menos. | Obrig. | 316 | Rej. | Rejeição: NF-e com valor bruto do tributo do IBS das UFs calculado incorretamente. |

<!-- p.27 -->

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| UB20-10 | 55/65 | Não é permitido o uso de crédito presumido (grupo: gCredPres) para este cClass. | Obrig | 379 | Rej. | Rejeição: Não é permitido o uso de Crédito Presumido para esta classificação da operação. |
| UB20-20 | 55/65 | É exigido o uso de crédito presumido da UF (grupo: gCredPres) para este cClass. | Obrig. | 317 | Rej. | Rejeição: É exigido o uso de Crédito Presumido da UF para esta classificação da operação. |
| UB22-10 | 55/65 | Se informado grupo do crédito presumido (grupo: gIBSUF/gCredPres): O valor do Crédito Presumido (tag: vCredPres) deverá ser resultante da Base de Cálculo x Percentual do Crédito Presumido (vBC x pCredPres)<br>**Observação:** Aceitar uma tolerância de 0,01 a mais ou a menos | Obrig. | 318 | Rej. | Rejeição: Valor do Crédito Presumido da UF diferente de Base de Cálculo x Percentual |
| UB23-10 | 55/65 | Não é permitido o uso de diferimento (grupo: gDif) para este cClass. | Obrig | 380 | Rej. | Rejeição: Não é permitido o uso de Diferimento para esta classificação da operação. |
| UB23-20 | 55/65 | É exigido o uso de diferimento da UF (grupo: gDif) para este cClass. | Obrig | 319 | Rej. | Rejeição: É exigido o uso de Diferimento da UF para esta classificação da operação. |
| UB25-10 | 55/65 | Se informado grupo do Diferimento (gIBSUF/gDif): O valor do Diferimento (vDif) deverá ser resultante da Base de Cálculo x Percentual do Diferimento (vBC x pDif)<br>**Observação:** Aceitar uma tolerância de 0,01 a mais ou a menos | Obrig. | 320 | Rej. | Rejeição: Valor do Diferimento da UF diferente de Base de Cálculo x Percentual |
| UB28-10 | 55/65 | Não é permitido o uso de redução de alíquota (grupo: gRed) para este cClass. | Obrig | 381 | Rej. | Rejeição: Não é permitido o uso de Redução de Alíquota para esta classificação da operação. |
| UB28-20 | 55/65 | É exigido o uso de redução de alíquota (grupo: gRed) para este cClass. | Obrig | 382 | Rej. | Rejeição: É exigido o uso de Redução de Alíquota para esta classificação da operação. |

<!-- p.28 -->

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| UB29-10 | 55/65 | Se informado grupo de Redução de Alíquota (gIBSUF/gRed): Percentual de Redução de Alíquota (pRedAliq) não é válido para este cClassTrib (IBSCBSSel/cClassTrib) | Obrig. | 383 | Rej. | Rejeição: Percentual de redução de alíquota da UF não é válido para este cClassTrib |
| UB30-10 | 55/65 | Se informado grupo de Redução de Alíquota (gIBSUF/gRed): Alíquota Efetiva (tag: pAliqEfet) deve ser o resultado da aplicação do percentual de redução da alíquota (tag: pRedAliq) na alíquota do IBS da UF (tag: pIBSUF).<br>**Exemplo:** Redução de 40% na alíquota: Alíquota vigente (A): 10%<br>Redução na alíquota (R): 40%<br>Alíquota Efetiva (E): E = A * (1 - R)<br>E = 10 * (1 - 0,4) = 6 | Obrig. | 384 | Rej. | Rejeição: Valor da Alíquota Efetiva do IBS da UF calculado incorretamente |
| UB31-10 | 55/65 | Não é permitido o uso de desoneração (grupo: gDeson) para este cClass. | Obrig | 385 | Rej. | Rejeição: Não é permitido o uso de Desoneração para esta classificação da operação. |
| UB31-20 | 55/65 | É exigido o uso de desoneração (grupo: gDeson) para este cClass. | Obrig | 321 | Rej. | Rejeição: É exigido o uso de Desoneração da UF para esta classificação da operação. |
| UB32-10 | 55/65 | Se informado grupo da desoneração (gIBSUF/gDeson): O CST for informado, este deve existir na tabela de Classificação Tributária do IBS/CBS (tag: gDeson/CST) | Obrig. | 322 | Rej. | Rejeição: CST informado na desoneração da UF inexistente |
| UB33-10 | 55/65 | Se informado grupo da desoneração (gIBSUF/gDeson): O cClassTrib for informado, este deve existir na tabela de Classificação Tributária do IBS/CBS (tag: gDeson/cClassTrib) | Obrig. | 323 | Rej. | Rejeição: Classificação Tributária informada na desoneração da UF inexistente |

<!-- p.29 -->

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| UB36-10 | 55/65 | Se informado grupo da desoneração (gIBSUF/gDeson): O valor desonerado (vDeson) deverá ser resultante da Base de Cálculo x Aliquota (gDeson/vBC x gDeson/pAliq)<br>**Observação:** Aceitar uma tolerância de 0,01 a mais ou a menos | Obrig. | 324 | Rej. | Rejeição: Valor Desonerado do Município diferente de Base de Cálculo x Alíquota |
| UB37-10 | 55/65 | Se informado grupo IBS de competência das Unidades Federadas (gIBSUF): O valor do IBS (vIBSUF) deverá ser resultante da Base de Cálculo x Alíquota (vBC [tag: gIBSCBS/vBC] x pIBSUF) - vCredPres - vDif - vDevTrib<br>**Observação 1:** Aceitar uma tolerância de 0,01 a mais ou a menos<br>**Observação 2:** Em caso de preenchimento do grupo de redução (pRed) a alíquota utilizada deverá ser a tag Alíquota Efetiva (pAliqEfet)<br>**Observação 3:** Conforme cClass escolhido o valor do crédito presumido (vCredPres) deve ser subtraído do total do IBS. | Obrig. | 315 | Rej. | Rejeição: NF-e com valor do IBS da UF calculado incorretamente. |
| UB39-10 | 55/65 | Alíiquota do IBS do município (tag: pIBSMun) deve ser igual a 0,05% para documento com data de emissão nos anos de 2027 e 2028. Art 343 PL 68/24. | Obrig. | 386 | Rej. | Rejeição: Alíiquota do IBS da Município deve ser igual a 0,05% para documento emitido em 2027 e 2028 |

<!-- p.30 -->

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| UB41-10 | 55/65 | Se informado grupo IBS de competência dos Municipios (gIBSMun) O valor bruto do tributo do IBS dos Municípios deve ser igual à multiplicação da Base de Cálculo pela Alíquota. vTribOP (tag: gIBSMun/vTribOP) = vBC (tag: gIBSCBS/vBC) * pIBSMun (tag: gIBSMun/pIBSMun)<br>**Observação:** Aceitar uma tolerância de 0,01 a mais ou a menos. | Obrig. | 326 | Rej. | Rejeição: NF-e com valor bruto do tributo do IBS dos Municípios calculado incorretamente. |
| UB42-10 | 55/65 | É exigido o uso de crédito presumido do Município (grupo: gCredPres) para este cClass. | Obrig. | 327 | Rej. | Rejeição: É exigido o uso de Crédito Presumido do Município para esta classificação da operação. |
| UB44-10 | 55/65 | Se informado grupo do crédito presumido (gIBSMun/gCredPres): O valor do Crédito Presumido (vCredPres) deverá ser resultante da Base de Cálculo x Percentual do Crédito Presumido (vBC x pCredPres)<br>**Observação:** Aceitar uma tolerância de 0,01 a mais ou a menos | Obrig. | 328 | Rej. | Rejeição: Valor do Crédito Presumido dos Municípios diferente de Base de Cálculo x Percentual |
| UB45-10 | 55/65 | É exigido o uso de diferimento (grupo: gDif) Municipal para este cClass. | Obrig | 329 | Rej. | Rejeição: É exigido o uso de Diferimento Municipal para esta classificação da operação. |
| UB47-10 | 55/65 | Se informado grupo do Diferimento (gIBSMun/gDif): O valor do Diferimento (vDif) deverá ser resultante da Base de Cálculo x Percentual do Diferimento (vBC x pDif)<br>**Observação:** Aceitar uma tolerância de 0,01 a mais ou a menos | Obrig. | 330 | Rej. | Rejeição: Valor do Diferimento dos Municípios diferente de Base de Cálculo x Percentual |

<!-- p.31 -->

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| UB51-10 | 55/65 | Se informado grupo de Redução de Alíquota (gIBSMun/gRed): Percentual de Redução de Alíquota (pRedAliq) não é válido para este cClassTrib (IBSCBSSel/cClassTrib) | Obrig. | 387 | Rej. | Rejeição: Percentual de redução de alíquota dos Municípios não é válido para este cClassTrib |
| UB52-10 | 55/65 | Se informado grupo de Redução de Alíquota (gIBSMun/gRed): O valor da alíquota efetiva (pAliqEfet) deve ser igual a aplicação da redução da alíquota do IBS dos Municípios (pRedAliq) na alíquota do IBS dos Municípios (pIBSMun).<br>**Exemplo:** Redução de 40% na alíquota: Alíquota vigente (A): 10%<br>Redução na alíquota (R): 40%<br>Alíquota Efetiva (E): E = A * (1 - R)<br>E = 10 * (1 - 0,4) = 6 | Obrig. | 388 | Rej. | Rejeição: Valor da Alíquota Efetiva do IBS dos Municípios calculado incorretamente |
| UB53-10 | 55/65 | Código de Classificação Tributária exige informação do grupo de Desoneração Municipal (gIBSMun/gDeson) | Obrig. | 331 | Rej. | Rejeição: CST informado exige informação de desoneração dos Municípios |
| UB54-10 | 55/65 | Se informado grupo da desoneração (gIBSMun/gDeson): O CST for informado, este deve existir na tabela de Classificação Tributária do IBS/CBS (tag: gDeson/CST) | Obrig. | 332 | Rej. | Rejeição: CST informado na desoneração dos Municípios inexistente |
| UB55-10 | 55/65 | Se informado grupo da desoneração (gIBSMun/gDeson): O cClassTrib for informado, este deve existir na tabela de Classificação Tributária do IBS/CBS (tag: gDeson/cClassTrib) | Obrig. | 333 | Rej. | Rejeição: Classificação Tributária informada na desoneração dos Municípios inexistente |
| UB58-10 | 55/65 | Se informado grupo da desoneração (gIBSMun/gDeson): O valor desonerado (vDeson) deverá ser resultante da Base de Cálculo x Aliquota (gDeson/vBC x gDeson/pAliq)<br>**Observação:** Aceitar uma tolerância de 0,01 a mais ou a menos | Obrig. | 334 | Rej. | Rejeição: Valor Desonerado do Município diferente de Base de Cálculo x Alíquota |

<!-- p.32 -->

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| UB59-10 | 55/65 | Se informado grupo IBS de competência dos Municípios (gIBSMun): O valor do IBS (vIBSMun) deverá ser resultante da Base de Cálculo x Alíquota (vBC [tag: gIBSCBS/vBC] x pIBSMun) - vCredPres - vDif - vDeson - vDevTrib<br>**Observação 1:** Aceitar uma tolerância de 0,01 a mais ou a menos<br>**Observação 2:** Em caso de preenchimento do grupo de redução (pRed) a alíquota utilizada deverá ser a tag Alíquota Efetiva (pAliqEfet)<br>**Observação 3:** Conforme cClass escolhido o valor do crédito presumido (vCredPres) deve ser subtraído do total do IBS. | Obrig. | 325 | Rej. | Rejeição: NF-e com valor do IBS dos Municípios calculado incorretamente. |
| UB63-10 | 55/65 | Se informado grupo CBS (gCBS) O valor bruto do tributo da CBS deve ser igual à multiplicação da Base de Cálculo pela Alíquota. vTribOP (tag: gCBS/vTribOP) = vBC (tag: gIBSCBS/vBC) * pCBS (tag: gCBS/pCBS)<br>**Observação:** Aceitar uma tolerância de 0,01 a mais ou a menos. | Obrig. | 336 | Rej. | Rejeição: NF-e com valor bruto do tributo da CBS calculado incorretamente. |
| UB64-10 | 55/65 | É exigido o uso de crédito presumido da CBS (grupo: gCredPres) para este cClass. | Obrig. | 337 | Rej. | Rejeição: É exigido o uso de Crédito Presumido da CBS para esta classificação da operação. |

<!-- p.33 -->

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| UB66-10 | 55/65 | Se informado grupo do crédito presumido (gCBS/gCredPres): O valor do Crédito Presumido (vCredPres) deverá ser resultante da Base de Cálculo x Percentual do Crédito Presumido (vBC x pCredPres)<br>**Observação:** Aceitar uma tolerância de 0,01 a mais ou a menos | Obrig. | 338 | Rej. | Rejeição: Valor do Crédito Presumido da CBS diferente de Base de Cálculo x Percentual |
| UB67-10 | 55/65 | É exigido o uso de diferimento (grupo: gDif) da CBS para este cClass. | Obrig | 339 | Rej. | Rejeição: É exigido o uso de Diferimento da CBS para esta classificação da operação. |
| UB69-10 | 55/65 | Se informado grupo do Diferimento (gCBS/gDif): O valor do Diferimento (vDif) deverá ser resultante da Base de Cálculo x Percentual do Diferimento (vBC x pDif)<br>**Observação:** Aceitar uma tolerância de 0,01 a mais ou a menos | Obrig. | 340 | Rej. | Rejeição: Valor do Diferimento da CBS diferente de Base de Cálculo x Percentual |
| UB73-10 | 55/65 | Se informado grupo de Redução de Alíquota (gCBS/gRed): Percentual de Redução de Alíquota (pRedAliq) não é válido para este cClassTrib (IBSCBSSel/cClassTrib) | Obrig. | 389 | Rej. | Rejeição: Percentual de redução de alíquota da CBS não é válido para este cClassTrib |
| UB74-10 | 55/65 | Se informado grupo de Redução de Alíquota (gCBS/gRed): O valor da alíquota efetiva (pAliqEfet) deve ser igual a aplicação da redução da alíquota da CBS (pRedAliq) na alíquota da CBS (pCBS).<br>**Exemplo:** Redução de 40% na alíquota: Alíquota vigente (A): 10%<br>Redução na alíquota (R): 40%<br>Alíquota Efetiva (E): E = A * (1 - R)<br>E = 10 * (1 - 0,4) = 6 | Obrig. | 390 | Rej. | Rejeição: Valor da Alíquota Efetiva da CBS calculado incorretamente |

<!-- p.34 -->

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| UB75-10 | 55/65 | Código de Classificação Tributária exige informação do grupo de Desoneração da CBS (gCBS/gDeson) | Obrig. | 341 | Rej. | Rejeição: CST informado exige informação de desoneração da CBS |
| UB76-10 | 55/65 | Se informado grupo da desoneração (gCBS/gDeson): O CST for informado, este deve existir na tabela de Classificação Tributária do IBS/CBS (tag: gDeson/CST) | Obrig. | 342 | Rej. | Rejeição: CST informado na desoneração da CBS inexistente |
| UB77-10 | 55/65 | Se informado grupo da desoneração (gCBS/gDeson): O cClassTrib for informado, este deve existir na tabela de Classificação Tributária do IBS/CBS (tag: gDeson/cClassTrib) | Obrig. | 343 | Rej. | Rejeição: Classificação Tributária informada na desoneração a CBS inexistente |
| UB80-10 | 55/65 | Se informado grupo da desoneração (gCBS/gDeson): O valor desonerado (vDeson) deverá ser resultante da Base de Cálculo x Aliquota (gDeson/vBC x gDeson/pAliq)<br>**Observação:** Aceitar uma tolerância de 0,01 a mais ou a menos | Obrig. | 344 | Rej. | Rejeição: Valor Desonerado da CBS diferente de Base de Cálculo x Alíquota |

<!-- p.35 -->

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| UB81-10 | 55/65 | Se informado grupo CBS (gCBS): O valor da CBS (vCBS) deverá ser resultante da Base de Cálculo x Alíquota (vBC [tag: gIBSCBS/vBC] x pCBS) - vCredPres - vDif - vDevTrib<br>**Observação 1:** Aceitar uma tolerância de 0,01 a mais ou a menos<br>**Observação 2:** Em caso de preenchimento do grupo de redução (pRed) a alíquota utilizada deverá ser a tag Alíquota Efetiva (pAliqEfet)<br>**Observação 3:** Conforme cClass escolhido o valor do crédito presumido (vCredPres) deve ser subtraído do total do IBS. | Obrig. | 335 | Rej. | Rejeição: NF-e com valor da CBS calculado incorretamente. |


## Grupo W03. Total da NF-e - IBS / CBS / IS


| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| W31-10 | 55/65 | O grupo de totais do IBS, CBS e IS (IBSCBSSelTot) só deve ser informado se existir pelo menos uma ocorrência de IBS, CBS ou Imposto Seletivo nos itens. | Obrig | 345 | Rej. | Rejeição: Total de IBS, CBS e IS só deve ser informado se existir IBS/CBS declarado nos itens do DFe |
| W33-10 | 55/65 | O total da BC do imposto seletivo deverá ser a soma dos campos vBC (tag: seletivo/vBC) informados nos itens. | Obrig | 394 | Rej. | Rejeição: Total da BC do Imposto Seletivo difere da soma dos itens |
| W34-10 | 55/65 | O total do Imposto Seletivo deverá ser a soma dos campos vImpSel (tag: seletivo/vImpSel) informados nos itens. | Obrig | 395 | Rej. | Rejeição: Total do Imposto Seletivo difere da soma dos itens |

<!-- p.36 -->

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| W35-10 | 55/65 | O total da BC do IBS e da CBS de deverá ser a soma dos campos vBC (tag: gIBSCBS/vBC) informados nos itens | Obrig. | 396 | Rej. | Rejeição: Total da BC do IBS e da CBS difere da soma dos itens |
| W38-10 | 55/65 | O total do Crédito Presumido do IBS UF deverá ser a soma do campo vCredPres do IBS UF informados nos itens | Obrig | 346 | Rej. | Rejeição: Total de Crédito Presumido do IBS UF difere da soma dos itens |
| W39-10 | 55/65 | O total do Diferimento do IBS UF deverá ser a soma do campo vDif do IBS UF informados nos itens | Obrig | 347 | Rej. | Rejeição: Total de Diferimento do IBS UF difere da soma dos itens |
| W40-10 | 55/65 | O total Devolvido do IBS UF deverá ser a soma do campo vDevTrib do IBS UF informados nos itens | Obrig | 348 | Rej. | Rejeição: Total Devolvido do IBS UF difere da soma dos itens |
| W41-10 | 55/65 | O total Desonerado do IBS UF deverá ser a soma do campo vDeson do IBS UF informados nos itens | Obrig | 349 | Rej. | Rejeição: Total Desonerado do IBS UF difere da soma dos itens |
| W42-10 | 55/65 | O total do IBS UF deverá ser a soma do campo vIBSUF informados nos itens | Obrig | 350 | Rej. | Rejeição: Total de IBS UF difere da soma dos itens |
| W44-10 | 55/65 | O total do Crédito Presumido do IBS Municipal deverá ser a soma do campo vCredPres do IBS Municipal informados nos itens | Obrig | 351 | Rej. | Rejeição: Total de Crédito Presumido do IBS Municipal difere da soma dos itens |
| W45-10 | 55/65 | O total do Diferimento do IBS Municipal deverá ser a soma do campo vDif do IBS Municipal informados nos itens | Obrig | 352 | Rej. | Rejeição: Total de Diferimento do IBS Municipal difere da soma dos itens |
| W46-10 | 55/65 | O total Devolvido do IBS Municipal deverá ser a soma do campo vDevTrib do IBS Municipal informados nos itens | Obrig | 353 | Rej. | Rejeição: Total Devolvido do IBS Municipal difere da soma dos itens |
| W47-10 | 55/65 | O total Desonerado do IBS Municipal deverá ser a soma do campo vDeson do IBS Municipal informados nos itens | Obrig | 355 | Rej. | Rejeição: Total Desonerado do IBS Municipal difere da soma dos itens |
| W48-10 | 55/65 | O total do IBS Municipal deverá ser a soma do campo vIBSMun informados nos itens | Obrig | 354 | Rej. | Rejeição: Total de IBS Municipal difere da soma dos itens |

<!-- p.37 -->

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| W49-10 | 55/65 | O Total do IBS deverá ser a soma do IBS das UF e do IBS Municipal (vIBSUF + vIBSMun) | Obrig | 356 | Rej. | Rejeição: Total do IBS difere da soma do IBS UF e IBS Municipal |
| W51-10 | 55/65 | O total do Crédito Presumido do CBS deverá ser a soma do campo vCredPres do CBS informados nos itens | Obrig | 357 | Rej. | Rejeição: Total de Crédito Presumido do CBS difere da soma dos itens |
| W52-10 | 55/65 | O total do Diferimento do CBS deverá ser a soma do campo vDif do CBS informados nos itens | Obrig | 358 | Rej. | Rejeição: Total de Diferimento do CBS difere da soma dos itens |
| W53-10 | 55/65 | O total Devolvido do CBS deverá ser a soma do campo vDevTrib do CBS informados nos itens | Obrig | 359 | Rej. | Rejeição: Total Devolvido do CBS difere da soma dos itens |
| W54-10 | 55/65 | O total Desonerado do CBS deverá ser a soma do campo vDeson do CBS informados nos itens | Obrig | 360 | Rej. | Rejeição: Total Desonerado do CBS difere da soma dos itens |
| W55-10 | 55/65 | O total do CBS deverá ser a soma do campo vCBS informados nos itens | Obrig | 361 | Rej. | Rejeição: Total de CBS difere da soma dos itens |
| W57-10 | 55/65 | O total do IBS monofásico deverá ser a soma dos campos vTOTIBSMono informados nos itens | Obrig | 397 | Rej. | Rejeição: Total do IBS monofásico difere da soma dos itens |
| W58-10 | 55/65 | O total da CBS monofásica deverá ser a soma dos campos vTOTCBSMono informados nos itens | Obrig | 398 | Rej. | Rejeição: Total da CBS monofásica difere da soma dos itens |
| W59-10 | 55/65 | O total geral do DFe deverá ser a soma do total NF (grupo total/vNF) + vTotIBS (IBSCBSSelTot/gIBS/vTotIBS) + vCBS (IBSCBSSelTot/gCBS/vCBS)+ vSel (IBSCBSSelTot/gSel/vImpSel) + vTotIBSMono (gIBSCBSMono/vTotIBSMono) + (gIBSCBSMono/vTotCBSMono) vTotCBSMono | Obrig | 362 | Rej. | Rejeição: Total da NFe difere da soma do total da Nota Fiscal, IBS, CBS e IS |
