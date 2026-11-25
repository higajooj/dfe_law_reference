# 2.1. Regras de Validação do CTe (Modelo 57)

<!-- p.06 -->

As validações descritas a seguir aplicam-se ao CTe enviado ao serviço de recepção de CT-e (MOC Visão Geral).

| Grupo | Descrição |
|---|---|
| D | Validação do Certificado de Assinatura |
| E | Validação da Assinatura Digital |
| E-1 | Validação da Assinatura Digital (Regime Especial NFF) |
| E-2 | Validação da Assinatura Digital (PAA) |

## Validações Gerais

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **G001** Verificar se o tipo do ambiente do CTe difere do ambiente do Web Service | Obrig. | 252 | Rej. | Rejeição: Ambiente informado diverge do Ambiente de recebimento |
| **G002** Se Tipo do Ambiente for igual 2 (homologação) e existir remetente, o campo razão social (xNome) deve ser informado com a literal:<br>“CTE EMITIDO EM AMBIENTE DE HOMOLOGACAO - SEM VALOR FISCAL”<br>**Exceção**: regra não será aplicada na hipótese de Regime Especial da NFF | Obrig. | 646 | Rej. | Rejeição: CTe emitido em ambiente de homologação com Razão Social do remetente diferente de CTE EMITIDO EM AMBIENTE DE HOMOLOGACAO - SEM VALOR FISCAL |
| **G003** Se Tipo do Ambiente for igual 2 (homologação) e existir expedidor, o campo razão social (xNome) deve ser informado com a literal:<br>“CTE EMITIDO EM AMBIENTE DE HOMOLOGACAO - SEM VALOR FISCAL”<br>**Exceção**: regra não será aplicada na hipótese de Regime Especial da NFF | Obrig. | 647 | Rej. | Rejeição: CTe emitido em ambiente de homologação com Razão Social do expedidor diferente de CTE EMITIDO EM AMBIENTE DE HOMOLOGACAO - SEM VALOR FISCAL |
| **G004** Se Tipo do Ambiente for igual 2 (homologação) e existir recebedor, o campo razão social (xNome) deve ser informado com a literal:<br>“CTE EMITIDO EM AMBIENTE DE HOMOLOGACAO - SEM VALOR FISCAL”<br>**Exceção**: regra não será aplicada na hipótese de Regime Especial da NFF | Obrig. | 648 | Rej. | Rejeição: CTe emitido em ambiente de homologação com Razão Social do recebedor diferente de CTE EMITIDO EM AMBIENTE DE HOMOLOGACAO - SEM VALOR FISCAL |
| **G005** Se Tipo do Ambiente for igual 2 (homologação) e existir destinatário, o campo razão social (xNome) deve ser informado com a literal:<br>“CTE EMITIDO EM AMBIENTE DE HOMOLOGACAO - SEM VALOR FISCAL”<br><!-- p.07 -->**Exceção**: regra não será aplicada na hipótese de Regime Especial da NFF | Obrig. | 649 | Rej. | Rejeição: CTe emitido em ambiente de homologação com Razão Social do destinatário diferente de CTE EMITIDO EM AMBIENTE DE HOMOLOGACAO - SEM VALOR FISCAL |
| **G006** A série informada não deve estar na faixa entre 890-899 (reservada)<br>**Exceção**: regra não será aplicada na hipótese de Regime Especial da NFF | Obrig. | 670 | Rej. | Rejeição: Série utilizada não permitida no webservice |
| **G007** Sigla da UF do Emitente difere da UF da Chave de Acesso<br>**Exceção**: regra não será aplicada na hipótese de Regime Especial da NFF | Obrig. | 247 | Rej. | Rejeição: Sigla da UF do Emitente diverge da UF autorizadora |
| **G008** Se forma de emissão do CTe for diferente de 5 (FS-DA):<br>dhCont e xJust não devem ser informados | Obrig. | 586 | Rej. | Rejeição: Data e Justificativa de entrada em contingência não devem ser informadas para tipo de emissão diferente de FS-DA. |
| **G009** Se forma de emissão do CTe for igual a 5 (FS-DA):<br>dhCont e xJust devem ser informados | Obrig. | 587 | Rej. | Rejeição: Data e Justificativa de entrada em contingência devem ser informadas |
| **G010** Se Data de entrada em contingência estiver informada, esta deve ser menor ou igual à data de emissão | Obrig. | 588 | Rej. | Rejeição: Data de entrada em contingência posterior a data de emissão. |
| **G011** Se Ambiente de Autorização SVC:<br>- Tipo de Emissão difere do tpEmis da SVC (7=SVC-RS e 8=SVC-SP)<br>**Observação:** CTe da forma emissão NFF poderá ser autorizado na SVRS no modo SVC por opção da UF autorizadora | Obrig. | 516 | Rej. | Rejeição: O tpEmis informado é incompatível com SVC-[SP/RS] |
| **G012** Se ambiente de Autorização SVC:<br>- Não aceitar tipo de CTe diferente de 0 (Normal) | Obrig. | 517 | Rej. | Rejeição: CTe informado em SVC deve ser Normal |
| **G013** Chave de acesso inválida (modelo diferente de 57) | Obrig. | 732 | Rej. | Rejeição: Chave de acesso inválida (modelo diferente de 57) |
| **G014** Verificar Campo ID:<br>- Falta literal "CTe"<br>- Chave de Acesso do campo ID difere da concatenação dos campos correspondentes | Obrig. | 227 | Rej. | Rejeição: Erro na composição do Campo ID |
| **G015** Dígito Verificador inválido da Chave de acesso resultante da concatenação dos campos correspondentes | Obrig. | 253 | Rej. | Rejeição: Dígito Verificador da chave de acesso composta inválido |
| **G016** Se Tipo do CTe= 0 (Normal) ou 3 (Substituição): deve existir o grupo de CTe Normal | Obrig. | 458 | Rej. | Rejeição: Grupo de CTe normal não informado para CTe normal |
| **G017** Se Tipo do CTe= 1 (Complemento): deve existir o grupo de CTe complementar | Obrig. | 459 | Rej. | Rejeição: Grupo de CTe complementar não informado para CTe complementar |
| **G018** Tomador do serviço informado como remetente, mas inexiste remetente | Obrig. | 460 | Rej. | Rejeição: Não informado os dados do remetente indicado como tomador do serviço |
| **G019** Tomador do serviço informado como expedidor, mas inexiste expedidor | Obrig. | 461 | Rej. | Rejeição: Não informado os dados do expedidor indicado como tomador do serviço |
| **G020** Tomador do serviço informado como recebedor, mas inexiste recebedo | Obrig. | 462 | Rej. | Rejeição: Não informado os dados do recebedor indicado como tomador do serviço |
| **G021** Tomador do serviço informado como destinatário, mas inexiste destinatário | Obrig. | 463 | Rej. | Rejeição: Não informado os dados do destinatário indicado como tomador do serviço |
| **G022** Se indicador de tomador for igual a Contribuinte (indIEToma=1):<br>- Rejeitar se o tomador indicado (toma3 ou toma4) não possuir informação da IE ou<br><!-- p.08 -->se estiver informado “ISENTO” | Obrig. | 481 | Rej. | Rejeição: IE deve ser informada para tomador Contribuinte |
| **G023** Se indicador de tomador for igual a Isento de Inscrição (indIEToma=2):<br>- Rejeitar se o tomador indicado (toma3 ou toma4) não possuir informação de IE ou se estiver informada diferente do literal “ISENTO" | Obrig. | 482 | Rej. | Rejeição: IE do tomador isento deve ser preenchida com “ISENTO” |
| **G024** Rejeitar quando informado tomador como Contribuinte Isento de Inscrição Estadual (indIEToma=2) em UF que não permite esta situação, conforme abaixo:<br>- AM, BA, CE, GO, MG, MS, MT, PE, RN, SE, SP | Obrig. | 617 | Rej. | Rejeição: UF do tomador não aceita ISENTO com Inscrição Estadual |

## Validações dos Modais

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **G025** Se Tipo do CTe= 0 (Normal) ou 3 (Substituição):<br>- Verificar se a Versão do modal de transporte é suportada | Obrig. | 579 | Rej. | Rejeição: Versão informada para o modal não suportada |
| **G026** Se Tipo do CTe= 0 (Normal) ou 3 (Substituição):<br>- Verificar Schema XML conforme o modal de transporte (parte específica do modal de transporte) | Obrig. | 580 | Rej. | Rejeição: Falha no Schema XML específico para o modal |
| **G027** Se Tipo do CTe= 0 (Normal) ou 3 (Substituição):<br>- O Valor Total da Carga \<vCarga> deve ser informado para modal de transporte diferente de Dutoviário | Obrig. | 581 | Rej. | Rejeição: Campo Valor da Carga deve ser informado para o modal |
| **G028** Se CTe do tipo normal ou substituição, modal Aquaviário e tipo de serviço for igual a Redespacho Intermediário / Serviço vinculado a multimodal:<br>- Exigir preenchimento do grupo de informações de detalhamento dos containers no modal Aquaviário | Obrig. | 526 | Rej. | Rejeição: Preencher informações dos containers somente para redespacho intermediário e serviço vinculado a multimodal |

## Validações do Tráfego Mútuo (Modal Ferroviário)

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **G029** Se Tipo do CTe= 0 (Normal) ou 3 (Substituição), modal = ferroviário e \<tpTraf=1> (tráfego mútuo),<br>- O grupo Tráfego Mútuo \<trafMut> deve ser informado | Obrig. | 582 | Rej. | Rejeição: Grupo Tráfego Mútuo deve ser informado |
| **G030** Se Tipo do CTe= 0 (Normal) ou 3 (Substituição), modal = ferroviário, o responsável pelo faturamento for a ferrovia de origem (\<respFat=1>)<br>- A ferrovia emitente do CTe \<ferrEmi> deve ser igual a 1 (ferrovia de origem). | Obrig. | 583 | Rej. | Rejeição: Ferrovia emitente deve ser a de origem quando respFat=1 |
| **G031** Se Tipo do CTe= 0 (Normal) ou 3 (Substituição), modal = ferroviário e o responsável pelo faturamento for a ferrovia de destino (\<respFat=2>)<br>- Deve ser referenciado o CTe \<chCTeFerroOrigem> emitido pela ferrovia de origem | Obrig. | 584 | Rej. | Rejeição: Referenciar o CTe que foi emitido pela ferrovia de origem |
| **G032** - Validar chave de acesso do CTe da Ferrovia de Origem<br>Retornar motivo da rejeição da Chave de Acesso: CNPJ zerado ou inválido, Ano < 2009 ou maior que atual, Mês inválido (0 ou > 12), Modelo diferente de 57, Número zerado, Tipo de emissão inválido, UF inválida ou DV inválido)<br>[Motivo: XXXXXXXXXXXX] | Obrig. | 842 | Rej. | Rejeição: Chave de acesso do CTe da Ferrovia de Origem inválida |
| **G033** Se Tipo do CTe= 0 (Normal) ou 3 (Substituição), modal = ferroviário e informado CTe emitido pela ferrovia de origem \<chCTeFerroOrigem>:<br>- Acessar BD CHAVES CTE (Chave: UF, CNPJ Emit, Modelo, Série, Nro):<br><!-- p.09 -->- O CTe da Ferrovia de Origem deve existir | Facult. | 709 | Rej. | Rejeição: CTe da Ferrovia de Origem referenciado inexistente na base de dados da SEFAZ |
| **G034** Se Tipo do CTe= 0 (Normal) ou 3 (Substituição), modal = ferroviário e informado CTe emitido pela ferrovia de origem \<chCTeFerroOrigem><br>- O CTe da Ferrovia de Origem (chCTeFerroOrigem) não pode existir com diferença na chave de acesso | Facult. | 710 | Rej. | Rejeição: CTe da Ferrovia de Origem referenciado existe com diferença de chave de acesso |
| **G035** Se Tipo do CTe= 0 (Normal) ou 3 (Substituição), modal = ferroviário e informado CTe emitido pela ferrovia de origem \<chCTeFerroOrigem><br>-Acessar BD CHAVES CTE (Chave: UF, CNPJ Emit, Modelo, Série, Nro):<br>- O CTe da Ferrovia de Origem não pode estar cancelado | Facult. | 711 | Rej. | Rejeição: CTe da Ferrovia de Origem referenciado não pode estar cancelado |

## Validações dos Documentos Transportados

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **G036** Se Tipo do CTe= 0 (Normal) ou 3 (Substituição) e Tipo de Serviço for DIFERENTE de Redespacho Intermediário ou Serviço Vinculado a Multimodal:<br>- O grupo de Documentos Transportados (infDoc) deve ser informado. | Obrig. | 693 | Rej. | Rejeição: Grupo Documentos Transportados deve ser informado para tipo de serviço diferente de redespacho intermediário e serviço vinculado a multimodal |
| **G037** Se Tipo do CTe= 0 (Normal) ou 3 (Substituição) e Tipo de Serviço for IGUAL a Redespacho Intermediário ou Serviço Vinculado a Multimodal:<br>- O grupo de Documentos Transportados (infDoc) não deve ser informado. | Obrig. | 694 | Rej. | Rejeição: Grupo Documentos Transportados não pode ser informado para tipo de serviço redespacho intermediário e serviço vinculado a multimodal |
| **G038** Se Tipo do CTe= 0 (Normal) ou 3 (Substituição) e informado grupo informação de documentos (infDoc): Quantidade de documentos informados (infNF/infNFe/infOutros) não pode ultrapassar 2000 documentos | Obrig. | 601 | Rej. | Rejeição: Quantidade de documentos informados no remetente excede limite de 2000 |
| **G039** Se Tipo do CTe= 0 (Normal) ou 3 (Substituição) e informados grupos de informações de documentos (infDoc) e NFe (infNFe):<br>- Verificar se existe alguma chave de acesso de NFe duplicada no CTe<br>Retornar a chave duplicada | Obrig. | 527 | Rej. | Rejeição: NFe duplicada no CTe<br>[chNFe: 99999999999999999999999999999999999999999999] |
| **G040** Se Tipo do CTe= 0 (Normal) ou 3 (Substituição) e informados grupos de informações de documentos (infDoc) e NFe (infNfe), para cada uma das NFe´s relacionadas:<br>- Validar chave de acesso<br>Retornar a primeira chave inválida e o motivo da rejeição da Chave de Acesso: CNPJ / CPF zerado ou inválido, Ano < 2005 ou maior que atual, Mês inválido (0 ou > 12), Modelo diferente de 55, Número zerado, Tipo de emissão inválido, UF inválida ou DV inválido)<br>[chNFe: 99999999999999999999999999999999999999999999]<br>[Motivo: XXXXXXXXXXXX] | Obrig. | 843 | Rej. | Rejeição: Chave de acesso da NFe transportada inválida |
| **G041** Se Tipo do CTe= 0 (Normal) ou 3 (Substituição) e informados grupos de informações de documentos (infDoc) e NFe (infNfe), para cada uma das NFe´s relacionadas:<br>- Acessar BD CHAVES NFE (Chave: UF, CNPJ/CPF Emit, Modelo, Série, Nro):<br>- A NFe deve existir<br>Retornar a primeira chave de acesso de NFe inexistente.<br>**Exceção**: NFe em contingência fica dispensada dessa validação (verificar tpEmis<br><!-- p.10 -->da chave de acesso da NFe) | Facult. | 661 | Rej. | Rejeição: NFe inexistente na base de dados da SEFAZ |
| **G042** Se Tipo do CTe= 0 (Normal) ou 3 (Substituição) e informados grupos de informações de documentos (infDoc) e NFe (infNfe), para cada uma das NFe´s relacionadas:<br>- Acessar BD CHAVES NFE (Chave: UF, CNPJ/CPF Emit, Modelo, Série, Nro):<br>- A NFe não pode existir com diferença de chave de acesso<br>Retornar a primeira chave de acesso de NFe com situação inválida. | Facult. | 662 | Rej. | Rejeição: NFe com diferença de Chave de Acesso |
| **G043** Se Tipo do CTe= 0 (Normal) ou 3 (Substituição) e informados grupos de informações de documentos (infDoc) e NFe (infNfe), para cada uma das NFe´s relacionadas:<br>- Acessar BD CHAVES NFE (Chave: UF, CNPJ/CPF Emit, Modelo, Série, Nro):<br>- A NFe não pode estar cancelada ou denegada<br>Retornar a primeira chave de acesso de NFe com situação inválida. | Facult. | 652 | Rej. | Rejeição: NFe não pode estar cancelada ou denegada |
| **G044** Se Tipo do CTe= 0 (Normal) ou 3 (Substituição), Tipo de Serviço for DIFERENTE de Redespacho Intermediário ou Serviço Vinculado, modal diferente de DUTOVIÁRIO e informado CNPJ do Remetente (rem) com UF início da prestação diferente da UF de fim da prestação:<br>- Verificar se o CNPJ do remetente do CTe está habilitado para emissão de NFe<br><br>**Observação:** Se CNPJ estiver habilitado o grupo de documentos NF em papel (infDoc/infNF) NÃO deve estar preenchido. | Obrig. | 540 | Rej. | Rejeição: Grupo de documentos informado inválido para remetente que emite NFe |
| **G045** Se Tipo do CTe= 0 (Normal) ou 3 (Substituição), Operação interestadual e informados grupos de informações de documentos (infDoc) com infOutros preenchido, para cada um dos documentos relacionados:<br><br>- Verificar Tipo do Documento (tpDoc) informado é NC-e SAT (59) ou NFC-e (65). | Obrig. | 813 | Rej. | Rejeição: Tipo de Documento inválido para operação interestadual |

## Validações de Valores

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **G046** Se Tipo do CTe= 0 (Normal) ou 3 (Substituição):<br>- Verificar se valor total do serviço não ultrapassa limite de R$ 9.999.999,99<br><br>**Observação:** A SEFAZ poderá aumentar o limite para contribuintes que operam com valores acima desse teto. | Obrig. | 650 | Rej. | Rejeição: Valor total do serviço superior ao limite permitido (R$ 9.999.999,99) |
| **G047** - Verificar se Valor do ICMS corresponde ao Valor da base de cálculo X Aliquota.<br><br>**Observação:** Aplicar a regra de acordo com o grupo de informações de imposto informado (infCte/imp/ICMS).<br>*Considerar uma tolerância de R$ 0,01 para mais ou para menos.* | Obrig. | 675 | Rej. | Rejeição: Valor do imposto não corresponde à base de cálculo X alíquota |
| **G048** Valor a receber (vRec) deve ser menor ou igual ao Valor da Prestação do Serviço (vtPrest) | Obrig. | 531 | Rej. | Rejeição: Valor a receber deve ser menor ou igual Valor da Prestação |

## Validações do CFOP

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| <!-- p.11 -->**G049** - Verificar se o CFOP informado pertence a operação de transporte.<br>**Observação:** Verificar a relação de CFOP válidos no item 12 do MOC Visão Geral | Obrig. | 676 | Rej. | Rejeição: CFOP informado inválido |
| **G050** Verificar o CFOP informado considerando a seguinte matriz:<br>Se UF de início da prestação = UF de fim de prestação (e UF fim <> EX)<br>CFOP deve iniciar por 5<br>Se UF de início da prestação <> UF de fim da prestação (e UF fim <> EX)<br>CFOP deve iniciar por 6<br>Se UF fim de prestação = EX<br>CFOP deve iniciar por 7 | Obrig. | 519 | Rej. | Rejeição: CFOP inválido para operação |
| **G051** Se UF do emitente for diferente da UF de início da prestação e UF de início e fim da prestação forem diferentes de EX: CFOP deve ser igual a 5932 ou 6932<br><br>**Exceção**: regra não será aplicada na hipótese de Regime Especial da NFF | Obrig. | 524 | Rej. | Rejeição: CFOP inválido, informar 5932 ou 6932 |
| **G052** Se UF do emitente for igual a UF de início da prestação e UF de início e fim da prestação forem diferentes de EX: CFOP não pode ser 5932 ou 6932<br><br>**Exceção**: regra não será aplicada na hipótese de Regime Especial da NFF | Obrig. | 908 | Rej. | Rejeição: CFOP inválido, não informar 5932 ou 6932 |

## Validações do Redespacho Intermediário e Serviço Vinculado a Multimodal

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **G053** Remetente deverá ser informado para tipo de serviço diferente de redespacho intermediário ou Serviço vinculado a multimodal | Obrig. | 469 | Rej. | Rejeição: Remetente deve ser informado para tipo de serviço diferente de redespacho intermediário ou Serviço vinculado a multimodal |
| **G054** Destinatário deverá ser informado para tipo de serviço diferente de redespacho intermediário ou Serviço vinculado a multimodal | Obrig. | 470 | Rej. | Rejeição: Destinatário deve ser informado para tipo de serviço diferente de redespacho intermediário ou serviço vinculado a multimodal |
| **G055** Expedidor deverá ser informado para tipo de serviço de redespacho intermediário e Serviço vinculado a multimodal | Obrig. | 474 | Rej. | Rejeição: Expedidor deve ser informado para tipo de serviço de redespacho intermediário e serviço vinculado a multimodal |
| **G056** Recebedor deverá ser informado para tipo de serviço de redespacho intermediário e Serviço vinculado a multimodal | Obrig. | 475 | Rej. | Rejeição: Recebedor deve ser informado para tipo de serviço de redespacho intermediário e serviço vinculado a multimodal |
| **G057** Se Tipo do CTe= 0 (Normal) ou 3 (Substituição) e Tipo de Serviço = “Serviço Vinculado a Multimodal” deve ser referenciado pelo menos um CTe autorizado pelo OTM (infServVinc/infCTeMultimodal/chCTeMultimodal) | Obrig. | 651 | Rej. | Rejeição: Referenciar o CTe Multimodal que foi emitido pelo OTM |
| **G058** Se Tipo de Serviço diferente de “Serviço Vinculado a Multimodal”, não deve ser referenciado nenhum CTe autorizado por OTM (infServVinc/infCTeMultimodal/chCTeMultimodal) | Obrig. | 814 | Rej. | Rejeição: Não devem ser informados CTe Multimodais para Tipo de Serviço diferente de Serviço Vinculado a Multimodal |
| **G059** Se Tipo do CTe= 0 (Normal) ou 3 (Substituição) e Tipo de Serviço for IGUAL a Redespacho / Redespacho Intermediário / Subcontratação:<br>- O grupo de Documentos Anteriores (docAnt) deve ser informado | Obrig. | 521 | Rej. | Rejeição: Os documentos de transporte anterior devem ser informados para os tipos de serviço Subcontratação, Redespacho e Redespacho Intermediário |
| **G060** Se estiver informado o grupo de documentos anteriores:<br><!-- p.12 -->- Rejeitar se o CTe estiver com tipo de serviço Normal (tpServ=0) | Obrig. | 747 | Rej. | Rejeição: Documentos anteriores informados para Tipo de Serviço Normal |
| **G061** Se estiver informado o grupo de documentos eletrônicos (idDocAntEle) em documentos anteriores:<br>- Verificar se existe alguma chave de acesso de CTe duplicada nos documentos anteriores.<br>Retornar a chave duplicada | Obrig. | 543 | Rej. | Rejeição: Chave de CTe duplicada em documentos anteriores |
| **G062** Se estiver informado o grupo de documentos eletrônicos (idDocAntEle) em documentos anteriores:<br>- Rejeitar se o CNPJ do emitente de algum CTe relacionado for diferente do CNPJ do emissor indicado no grupo emiDocAnt/CNPJ ou se estiver informado CPF<br>**Exceção**: na hipótese de Regime Especial da NFF, será admitido CPF | Obrig. | 733 | Rej. | Rejeição: Emitente do documento anterior deve ser o mesmo indicado no grupo emiDocAnt |
| **G063** Se estiver informado o grupo de documentos eletrônicos (idDocAntEle) em documentos anteriores:<br>- Rejeitar se o CNPJ base/CPF do tomador for diferente do CNPJ base/CPF do emissor indicado no grupo emiDocAnt/CNPJ ou emiDocAnt/CPF | Obrig. | 745 | Rej. | Rejeição: CPF/CNPJ base do tomador deve ser igual ao CPF/CNPJ base indicado no grupo emiDocAnt |
| **G064** Se Tipo do CTe= 0 (Normal) e tomador do serviço for emitente de CTe (verificar Cadastro de Emitentes), for contribuinte do ICMS (indIEToma=1) e diferente do CNPJ Base do Remetente ou Destinatário:<br>- Rejeitar se o tipo de serviço informado for Normal (tpServ=0)<br>**Observação:** Nas prestações de serviço que o tomador figurar como não contribuinte, indIEToma deve ser informado com 9, mesmo que exista uma Inscrição Estadual para o mesmo. | Obrig. | 746 | Rej. | Rejeição: Tipo de Serviço inválido para o tomador informado |
| **G065** Se Tipo do CTe= 0 (Normal) ou 3 (Substituição) e informados grupos de informações de documentos eletrônicos (idDocAntEle) em documentos anteriores (docAnt), para cada um dos CTe´s relacionados:<br>- Validar chave de acesso<br>Retornar a primeira chave inválida e o motivo da rejeição da Chave de Acesso: CNPJ/CPF zerado ou inválido, Ano < 2009 ou maior que atual, Mês inválido (0 ou > 12), Modelo diferente de 57, Número zerado, Forma de emissão inválido, UF inválida ou DV inválido)<br>[chCTe: 99999999999999999999999999999999999999999999]<br>[Motivo: XXXXXXXXXXXX] | Obrig. | 844 | Rej. | Rejeição: Chave de acesso do CTe anterior inválida |
| **G066** Se estiver informado o grupo de documentos eletrônicos (idDocAntEle) em documentos anteriores:<br>- Acessar BD CHAVES CTE (Chave: UF, CNPJ/CPF Emit, Modelo, Série, Nro):<br>- Os CTe informados em DocAnt (chCTe) devem existir<br>**Observação**: Retornar a primeira chave do CTe anterior inexistente | Facult. | 748 | Rej. | Rejeição: CTe referenciado em documentos anteriores inexistente na base de dados da SEFAZ |
| **G067** Se estiver informado o grupo de documentos eletrônicos (idDocAntEle) em documentos anteriores:<br>-Acessar BD CHAVES CTE (Chave: UF, CNPJ/CPF Emit, Modelo, Série, Nro):<br><!-- p.13 -->- Os CTe informados em DocAnt (chCTe) não podem existir com diferença de chave de acesso<br>Retornar a primeira chave do CTe anterior com chave divergente | Facult. | 749 | Rej. | Rejeição: CTe referenciado em documentos anteriores existe com diferença de chave de acesso |
| **G068** Se estiver informado o grupo de documentos eletrônicos (idDocAntEle) em documentos anteriores:<br>-Acessar BD CHAVES CTE (Chave: UF, CNPJ/CPF Emit, Modelo, Série, Nro):<br>- Os CTe informados em DocAnt (chCTe) não podem estar cancelados<br>**Observação**: Retornar a primeira chave do CTe anterior com situação inválida | Facult. | 750 | Rej. | Rejeição: CTe referenciado em documentos anteriores não pode estar cancelado |
| **G069** Se o tipo de serviço for igual a Subcontratação:<br>- Os CTe informados em DocAnt (chCTe) devem possuir o mesmo código de município de início e fim de prestação do CTe de subcontratação<br>**Observação:** Retornar a primeira chave do CTe anterior com situação inválida<br>A validação será possível somente para chaves de acesso que existam na base de dados da SEFAZ Autorizadora | Facult. | 832 | Rej. | Rejeição: Município de início e fim de prestação do CTe de subcontratação devem ser iguais ao CTe subcontratado |
| **G070** Se estiver informado o grupo de CTe multimodal no serviço vinculado:<br>- Verificar se existe alguma chave de acesso de CTe duplicada na relação de multimodais.<br>Retornar a chave duplicada | Obrig. | 714 | Rej. | Rejeição: Chave de CTe duplicada na relação de CTe Multimodal |
| **G071** Se Tipo do CTe= 0 (Normal) ou 3 (Substituição) e informado grupo de informações dos CTe multimodais vinculados (infCTeMultimodal), para cada um dos CTe´s relacionados (chCTeMultimodal):<br>- Validar chave de acesso<br>Retornar a primeira chave inválida e o motivo da rejeição da Chave de Acesso: CNPJ zerado ou inválido, Ano < 2009 ou maior que atual, Mês inválido (0 ou > 12), Modelo diferente de 57, Número zerado, Tipo de emissão inválido, UF inválida ou DV inválido)<br>[chCTe: 99999999999999999999999999999999999999999999]<br>[Motivo: XXXXXXXXXXXX] | Obrig. | 845 | Rej. | Rejeição: Chave de acesso do CTe multimodal inválida |
| **G072** Se Tipo do CTe= 0 (Normal) ou 3 (Substituição) e Tipo de Serviço = “Serviço Vinculado a Multimodal”<br>- Acessar BD CHAVES CTE (Chave: UF, CNPJ Emit, Modelo, Série, Nro):<br>- Os CTe multimodal referenciados (chCTeMultimodal) devem existir<br>Retornar a primeira chave do CTe Multimodal inexistente | Facult. | 690 | Rej. | Rejeição: CTe multimodal referenciado inexistente na base de dados da SEFAZ<br>[chCTe: 99999999999999999999999999999999999999999999] |
| **G073** Se Tipo do CTe= 0 (Normal) ou 3 (Substituição) e Tipo de Serviço = “Serviço Vinculado a Multimodal”<br>-Acessar BD CHAVES CTE (Chave: UF, CNPJ Emit, Modelo, Série, Nro):<br>- Os CTe multimodal referenciados (chCTeMultimodal) não podem existir com diferença de chave de acesso<br>Retornar a primeira chave do CTe Multimodal com chave divergente | Facult. | 691 | Rej. | Rejeição: CTe multimodal referenciado existe com diferença de chave de acesso<br>[chCTe: 99999999999999999999999999999999999999999999]<br>[nProt:999999999999999][dhAut: AAAA-MM-DDTHH:MM:SS TZD] |
| **G074** Se Tipo do CTe= 0 (Normal) ou 3 (Substituição) e Tipo de Serviço = “Serviço Vinculado a Multimodal”<br><!-- p.14 -->-Acessar BD CHAVES CTE (Chave: UF, CNPJ Emit, Modelo, Série, Nro):<br>- Os CTe multimodal referenciados (chCTeMultimodal) não podem estar cancelados<br>Retornar a primeira chave do CTe Multimodal com situação inválida | Facult. | 692 | Rej. | Rejeição: CTe multimodal referenciado não pode estar cancelado<br>[chCTe: 99999999999999999999999999999999999999999999] |
| **G075** Se Tipo do CTe= 0 (Normal) ou 3 (Substituição) e Tipo de Serviço = “Serviço Vinculado a Multimodal”<br>O CNPJ-Base do Tomador deve ser igual ao CNPJ-Base do Emitente para todos os CTe multimodal informados (obter na chave de acesso em chCTeMultimodal)<br>**Observação:** Retornar a primeira chave de CTe Multimodal com emitente diferente do tomador do CTe | Obrig. | 667 | Rej. | Rejeição: CNPJ-Base do Tomador deve ser igual ao CNPJ-Base do Emitente do CTe multimodal<br>[chCTe: 99999999999999999999999999999999999999999999] |

## Validações do CTe de Substituição

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **G076** Se Tipo do CTe= 3 (Substituição):<br>- O tipo de emissão deve ser normal | Obrig. | 503 | Rej. | Rejeição: CTe substituto deve ter tipo de emissão = normal |
| **G077** Se Tipo do CTe= 3 (Substituição):<br>- Deve existir o grupo de informações do CTe de substituição | Obrig. | 505 | Rej. | Rejeição: Grupo CTe de Substituição não informado para o CTe de Substituição |
| **G078** Se Tipo do CTe= 3 (Substituição):<br>- Validar chave de acesso do CTe substituído<br>Retornar o motivo da rejeição da Chave de Acesso: CNPJ zerado ou inválido, Ano < 2009 ou maior que atual, Mês inválido (0 ou > 12), Modelo diferente de 57, Número zerado, Tipo de emissão inválido, UF inválida ou DV inválido)<br>[chCTe: 99999999999999999999999999999999999999999999]<br>[Motivo: XXXXXXXXXXXX] | Obrig. | 847 | Rej. | Rejeição: Chave de acesso do CTe substituído inválida |
| **G079** Se Tipo do CTe= 3 (Substituição):<br>- O CTe substituído deve existir<br>Acesso BD CTE (Chave: UF, CNPJ Emit, Modelo, Série, Nro) | Obrig. | 568 | Rej. | Rejeição: CTe a ser substituído inexistente |
| **G080** Se Tipo do CTe= 3 (Substituição):<br>- CTe substituído não pode existir com diferença na Chave de Acesso<br>Retornar a chave de acesso já autorizada, o número do protocolo e data de autorização do CTe<br>[chCTe: 99999999999999999999999999999999999999999999]<br>[nProt:999999999999999][dhAut: AAAA-MM-DDTHH:MM:SS TZD] | Obrig. | 673 | Rej. | Rejeição: CTe substituído com diferença de Chave de Acesso<br>[chCTe: 99999999999999999999999999999999999999999999]<br>[nProt:999999999999999][dhAut: AAAA-MM-DDTHH:MM:SS TZD] |
| **G081** Se Tipo do CTe= 3 (Substituição):<br>- O CTe substituído não pode estar cancelado | Obrig. | 569 | Rej. | Rejeição: CTe a ser substituído deve estar com a situação autorizada (não pode estar cancelado) |
| **G082** Se Tipo do CTe= 3 (Substituição):<br>- O CTe substituído não pode ter sido substituído anteriormente | Obrig. | 570 | Rej. | Rejeição: CTe a ser substituído não pode ter sido substituído anteriormente |
| **G083** Se Tipo do CTe= 3 (Substituição):<br>- O CTe substituído não pode ter sido complementado | Obrig. | 659 | Rej. | Rejeição: CTe substituído não pode ter sido complementado |
| **G084** Se Tipo do CTe=3 (Substituição):<br>- O CTe substituído deve possuir evento de Prestação do Serviço em Desacordo <!-- p.15 -->em situação autorizado.<br><br>**Observação:** Eventos de Cancelamento do Evento de Prestação em desacordo anulam eventos de Prestação em Descordo | Obrig. | 739 | Rej. | Rejeição: O CTe substituído deve possuir evento de Prestação do Serviço em Desacordo |
| **G085** Se Tipo do CTe= 3 (Substituição):<br>- O CTe substituído deve ser do Tipo = 0 (Normal) ou 3 (Substituição) | Obrig. | 571 | Rej. | Rejeição: CTe a ser substituído deve ter Tipo = 0 (normal) ou 3 (Substituição) |
| **G086** Se Tipo do CTe=3 (Substituição):<br>- CNPJ do emitente do CTe substituto deve ser igual ao informado no CTe substituído | Obrig. | 510 | Rej. | Rejeição: CNPJ do emitente do CTe substituto deve ser igual ao informado no CTe substituído |
| **G087** Se Tipo do CTe=3 (Substituição):<br>- O CNPJ/CPF do remetente do CTe substituto deve ser igual ao informado no CTe substituído | Obrig. | 511 | Rej. | Rejeição: CNPJ/CPF do remetente do CTe substituto deve ser igual ao informado no CTe substituído |
| **G088** Se Tipo do CTe=3 (Substituição):<br>- CNPJ/CPF do destinatário do CTe substituto deve ser igual ao informado no CTe substituído | Obrig. | 512 | Rej. | Rejeição: CNPJ/CPF do destinatário do CTe substituto deve ser igual ao informado no CTe substituído |
| **G089** Se Tipo do CTe=3 (Substituição):<br>- CNPJ/CPF do expedidor do CTe substituto deve ser igual ao informado no CTe substituído | Obrig. | 550 | Rej. | Rejeição: O CNPJ/CPF do expedidor do CTe substituto deve ser igual ao informado no CTe substituído |
| **G090** Se Tipo do CTe=3 (Substituição):<br>- CNPJ/CPF do recebedor do CTe substituto deve ser igual ao informado no CTe substituído | Obrig. | 551 | Rej. | Rejeição: O CNPJ/CPF do recebedor do CTe substituto deve ser igual ao informado no CTe substituído |
| **G091** Se Tipo do CTe=3 (Substituição):<br>- IE do emitente do CTe substituto deve ser igual ao informado no CTe substituído | Obrig. | 553 | Rej. | Rejeição: A IE do emitente do CTe substituto deve ser igual ao informado no CTe substituído |
| **G092** Se Tipo do CTe=3 (Substituição):<br>- UF de início da prestação do CTe substituto deve ser igual ao informado no CTe substituído | Obrig. | 559 | Rej. | Rejeição: A UF de início da prestação deve ser igual ao informado no CTe substituído |
| **G093** Se Tipo do CTe=3 (Substituição):<br>- UF de fim da prestação do CTe substituto deve ser igual ao informado no CTe substituído | Obrig. | 560 | Rej. | Rejeição: A UF de fim da prestação deve ser igual ao informado no CTe substituído |
| **G094** Se Tipo do CTe=3 (Substituição):<br>- Todas NFe transportadas no CTe substituto devem ser as mesmas informadas no CTe substituído | Obrig. | 734 | Rej. | Rejeição: As NFe transportadas do CTe substituto devem ser iguais às informadas no CTe substituído |
| **G095** Se Tipo do CTe= 3 (Substituição):<br>- O CTe substituído deve ser do mesmo tipo de serviço do CTe substituto | Obrig. | 834 | Rej. | Rejeição: O tipo de serviço do CTe de substituição deve ser igual ao CTe substituído |
| **G096** Se Tipo do CTe=3 (Substituição):<br>- A autorização do CTe de substituição deve ocorrer em até 60 dias, ou outro limite conforme critério definido pela SEFAZ (a SEFAZ Virtual deve considerar a hora local do emissor para a validação) da data de autorização do CTe objeto substituição | Obrig. | 563 | Rej. | Rejeição: A substituição de um CTe deve ocorrer no prazo máximo de 60 dias contados da data de autorização do CTe objeto de Substituição |

## Validações da Alteração de Tomador

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| <!-- p.16 -->**G097** Se Tipo do CTe=3 (Substituição) e informado toma3 sem informar indicador de alteração de tomador &lt;indAlteraToma&gt;:<br>- A marcação do tomador do CTe substituto deve ser igual a informada no CTe substituído | Obrig. | 738 | Rej. | Rejeição: A indicação do tomador do CTe de substituição deve ser igual à do CTe substituído |
| **G098** Se Tipo do CTe=3 (Substituição) e informado toma4 sem informar indicador de alteração de tomador &lt;indAlteraToma&gt;:<br>- CNPJ/CPF do tomador do CTe substituto deve ser igual ao informado no CTe substituído<br>\* O CTe substituído também deve ter informado o toma4 como tomador | Obrig. | 552 | Rej. | Rejeição: O CNPJ/CPF do tomador do CTe substituto deve ser igual ao informado no CTe substituído |
| **G099** Se Tipo do CTe=3 (Substituição), informado indicador de alteração de tomador &lt;indAlteraToma&gt; e informado toma4:<br>- O CNPJ base do tomador informado deve estar relacionado no CTe substituído como um dos papéis existentes (remetente, destinatário, recebedor, expedidor ou toma4) | Obrig. | 740 | Rej. | Rejeição: O CNPJ base do tomador do CTe substituto deve estar relacionado nos papéis do CTe substituído para a alteração de tomador |
| **G100** Se Tipo do CTe=3 (Substituição), informado indicador de alteração de tomador &lt;indAlteraToma&gt; e informado toma4:<br>- A UF do tomador informado deve ser a mesma do tomador informado no CTe substituído | Obrig. | 741 | Rej. | Rejeição: A UF do tomdador do CTe substituto deve ser a mesma do tomador do CTe substituído para alteração de tomador |
| **G101** Se Tipo do CTe=3 (Substituição), informado indicador de alteração de tomador &lt;indAlteraToma&gt; e informado toma3:<br>- O tomador indicado no CTe substituto deve ser diferente do indicado no CTe substituído | Obrig. | 742 | Rej. | Rejeição: Tomador do CTe substituto igual ao informado no CTe substituído para operação de alteração de tomador |

## Validações da Data de Emissão

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **G102** Data/Hora de Emissão posterior à Data/Hora de Recebimento<br>(A SEFAZ Virtual deve considerar a hora local do emissor para a validação).<br>A SEFAZ deve tolerar uma diferença máxima de 5 minutos quando a data/hora de emissão for maior que a data de recebimento, em função da sincronização de horário de servidores. | Obrig. | 212 | Rej. | Rejeição Data de emissão CTe posterior a data de recebimento |
| **G103** Se tipo de emissão for diferente de FS-DA (tpEmis=5) e EPEC (tpEmis=4):<br>Data-Hora de Emissão com atraso superior a 168 horas em relação ao horário de recepção na SEFAZ Autorizadora. | Obrig. | 228 | Rej. | Rejeição: Data de Emissão muito atrasada |

## Validações do Emitente

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **G104** Validar CNPJ Emitente (dígito controle, zeros ou nulo)<br><br>**Exceção:** O CNPJ não será informado se a forma de emissão (tpEmis) do CTe for Regime Especial da Nota Fiscal Fácil (3), em seu lugar será informado o CPF do TAC | Obrig. | 207 | Rej. | Rejeição: CNPJ do emitente inválido |
| <!-- p.17 -->**G105** IE Emitente deve ser informada (zeros ou nulo)<br><br>**Exceção:** A IE não será informada se a forma de emissão (tpEmis) do CTe for Regime Especial da Nota Fiscal Fácil (3)<br><br>**Exceção 2:** Se CTe gerado por PAA (grupo: infPAA) a IE do Emitente é opcional (MEI não inscrito na UF) | Obrig. | 229 | Rej. | Rejeição: IE do emitente não informada |
| **G106** Se informada IE do emitente (tpEmis diferente de 3):<br>Validar IE Emitente (erro no dígito de controle)<br>Obs.: Antes da validação, a IE deverá ser normalizada, na aplicação da SEFAZ, com o acréscimo de zeros não significativos previstos na definição do formato da IE, se necessário.<br>**Exemplo:** IE informada 130000019, formato da IE: NNNNNNNNNND, a IE deve ser padronizada para 00130000019, com o acréscimo dos zeros não significativos necessários para a validação do dígito verificador. | Obrig. | 209 | Rej. | Rejeição: IE do emitente inválida |
| **G107** Validar IE do Substituto Tributário, quando esta for informada (erro no dígito de controle)<br>**Observação:** Antes da validação, a IE deverá ser normalizada, na aplicação da SEFAZ, com o acréscimo de zeros não significativos previstos na definição do formato da IE, se necessário.<br>**Exemplo:** IE informada 130000019, formato da IE: NNNNNNNNNND, a IE deve ser padronizada para 00130000019, com o acréscimo dos zeros não significativos necessários para a validação do dígito verificador<br>**Exemplo:** A validação dessa IE deverá levar em consideração da UF do tomador do CTe | Obrig. | 614 | Rej. | Rejeição: IE do Substituto Tributário inválida |
| **G108** Se informada IE do emitente (tpEmis diferente de 3):<br>Acessar Cadastro de Emitentes (Chave: UF, IE):<br>- IE emitente não cadastrada | Facult. | 230 | Rej. | Rejeição: IE do emitente não cadastrada |
| **G109** Se informada IE do emitente (tpEmis diferente de 3):<br>- IE Emitente deve estar vinculada ao CNPJ (tratar Regime Especial de IE única) | Obrig. | 231 | Rej. | Rejeição: IE do emitente não vinculada ao CNPJ |
| **G110** Se informada IE do emitente (tpEmis diferente de 3):<br>- Emitente deve estar habilitado na base de dados para emissão do CTe<br><br>**Observação:** IE em situação irregular perante o fisco deve rejeitar por esta regra | Obrig. | 203 | Rej. | Rejeição: Emissor não habilitado para emissão do CTe |
| **G111** Se informada IE do emitente (tpEmis diferente de 3):<br>- IE emitente deve estar autorizada a emitir CTe para o modal de transporte informado | Obrig. | 585 | Rej. | Rejeição: IE Emitente não autorizada a emitir CTe para o modal informado |
| **G111a** Se CTe for gerado por um Provedor de Assinatura e Autorização (PAA) (grupo:infPAA):<br>- Verificar se o CNPJ do Emitente existe na base de dados MEI da Receita Federal do Brasil | Obrig | 915 | Rej. | Rejeição: CNPJ MEI inexistente na base de dados para emissão pelo PAA |
| <!-- p.18 -->**G111b** Se CTe for gerado por um Provedor de Assinatura e Autorização (PAA) (grupo:infPAA):<br>- Verificar a situação do CNPJ na base de dados da Receita Federal do Brasil | Obrig | 916 | Rej. | Rejeição: CNPJ MEI não habilitado para emissão de CTe através de PAA |
| **G111c** Se CTe for gerado por um Provedor de Assinatura e Autorização (PAA) (grupo:infPAA):<br>O Código do Regime Tributário (tag:CRT) deve ser igual a 4- Simples Nacional - Microempreendedor Individual – MEI | Obrig | 917 | Rej. | Rejeição: O CRT do emitente usuário do PAA deve ser igual a MEI |
| **G112** Município do Emitente diverge da UF (verificar se as 2 posições da esquerda do código de município que identifica o código da UF é compatível com a sigla da UF informada)<br><br>**Exceção:** regra não será aplicada na hipótese de Regime Especial da NFF | Obrig. | 712 | Rej. | Rejeição: Código de Município diverge da UF de localização do emitente |
| **G113** Código do Município Emitente inexistente (Tabela Municípios do IBGE) | Obrig. | 713 | Rej. | Rejeição: Município do Emitente inexistente |

## Validações do Remetente

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **G114** Se CNPJ Remetente informado:<br>- Validar CNPJ Remetente (dígito de controle, zeros) | Obrig. | 415 | Rej. | Rejeição: CNPJ do remetente inválido |
| **G115** Se CPF Remetente informado:<br>- Validar CPF Remetente (dígito de controle, zeros) | Obrig. | 416 | Rej. | Rejeição: CPF do remetente inválido |
| **G116** Se Remetente informado:<br>- Município deve pertencer à UF (verificar se as 2 posições da esquerda do código de município que identifica o código da UF é compatível com a sigla da UF informada) | Obrig. | 418 | Rej. | Rejeição: Código de Município diverge da UF de localização remetente |
| **G117** Se Remetente informado:<br>- Código do Município deve existir (Tabela Municípios do IBGE) | Obrig. | 532 | Rej. | Rejeição: Município do Remetente inexistente |
| **G118** Se IE Remetente informada:<br>- Validar IE do Remetente (erro no dígito de controle)<br>**Observação:** Antes da validação, a IE deverá ser normalizada, na aplicação da SEFAZ, com o acréscimo de zeros não significativos previstos na definição do formato da IE se necessário.<br>**Exemplo:** IE informada 130000019, formato da IE: NNNNNNNNNND, a IE deve ser padronizada para 00130000019, com o acréscimo dos zeros não significativos necessários para a validação do dígito verificador. | Obrig. | 419 | Rej. | Rejeição: IE do remetente inválida |
| **G119** Se Tipo do CTe= 0 (Normal) e IE Remetente informada:<br>Acessar Cadastro de Contribuinte da UF (Chave: IE Remet.) (\*1)<br>- IE deve estar cadastrada | Facult. | 421 | Rej. | Rejeição: IE do remetente não cadastrada |
| **G120** Se Tipo do CTe= 0 (Normal) e IE e CNPJ Remetente informados:<br>Acessar Cadastro de Contribuinte da UF (Chave: IE Remet.) (\*1)<br>- IE deve estar vinculada ao CNPJ | Facult. | 422 | Rej. | Rejeição: IE do remetente não vinculada ao CNPJ |
| <!-- p.19 -->**G121** Se Tipo do CTe= 0 (Normal) e IE Remetente = “ISENTO” ou não informada<br>Acessar Cadastro de Contribuinte da UF (\*1)<br>- Remetente possui IE ativa na UF | Facult. | 716 | Rej. | Rejeição: IE do Remetente não informada |

(\*1) Validação possível na operação interestadual ou no ambiente da SEFAZ Virtual utilizando o CCC-Cadastro Centralizado de Contribuintes.

Não deve ser validado para CTe com tipo de emissão EPEC quando Remetente for o tomador

## Validações do Destinatário

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **G122** Se CNPJ Destinatário informado:<br>- Validar CNPJ do Destinatário (dígito de controle, zeros) | Obrig. | 208 | Rej. | Rejeição: CNPJ do destinatário inválido |
| **G123** Se CPF Destinatário informado:<br>- Validar CPF do Destinatário (dígito de controle, zeros) | Obrig. | 237 | Rej. | Rejeição: CPF do destinatário inválido |
| **G124** Se Destinatário informado:<br>- Município deve pertencer à UF (verificar se as 2 posições da esquerda do código de município que identifica o código da UF estão de acordo com a sigla da UF informada) | Obrig. | 424 | Rej. | Rejeição: Código de Município diverge da UF de localização destinatário |
| **G125** Se Destinatário informado:<br>- Código do Município deve existir (Tabela Municípios do IBGE) | Obrig. | 533 | Rej. | |
| **G126** Se IE Destinatário informado:<br>- Validar IE do Destinatário (erro no dígito de controle ou conteúdo diferente de “ISENTO”)<br>**Observação:** Antes da validação, a IE deverá ser normalizada, na aplicação da SEFAZ, com o acréscimo de zeros não significativos previstos na definição do formato da IE se necessário.<br>**Exemplo:** IE informada 130000019, formato da IE: NNNNNNNNNND, a IE deve ser padronizada para 00130000019, com o acréscimo dos zeros não significativos necessários para a validação do dígito verificador. | Obrig. | 210 | Rej. | Rejeição: IE do destinatário inválida |
| **G127** Se Tipo do CTe= 0 (Normal) e IE Destinatário informada:<br>Acessar Cadastro de Contribuinte da UF (Chave: IE Dest.) (\*1)<br>- IE deve estar cadastrada | Facult. | 426 | Rej. | Rejeição: IE do destinatário não cadastrada |
| **G128** Se Tipo do CTe= 0 (Normal) e IE e CNPJ Destinatário informados:<br>Acessar Cadastro de Contribuinte da UF (Chave: IE Dest.) (\*1)<br>- IE deve estar vinculada ao CNPJ (Tratar Regime Especial de IE única) | Facult. | 427 | Rej. | Rejeição: IE do destinatário não vinculada ao CNPJ |
| **G129** Se Tipo do CTe= 0 (Normal) e IE Destinatário = “ISENTO” ou não informada<br>Acessar Cadastro de Contribuinte da UF (\*1)<br>- Destinatário possui IE ativa na UF | Facult. | 232 | Rej. | Rejeição: IE do destinatário não informada |
| **G130** Se Inscr. SUFRAMA do Destinatário informada:<br>- Verificar dígito controle da Inscr. SUFRAMA | Obrig. | 235 | Rej. | Rejeição: Inscrição SUFRAMA inválida |
| **G131** Se Inscr. SUFRAMA informada:<br>- Verificar UF destinatário = AC-Acre, ou AM-Amazonas, ou RO-Rondônia, ou RR-Roraima, ou AP-Amapá (só para municípios 1600303-Macapá e 1600600-Santana) | Obrig. | 251 | Rej. | Rejeição: UF/Município destinatário não pertence a SUFRAMA |

<!-- p.20 -->(\*1) Validação possível na operação interestadual ou no ambiente da SEFAZ Virtual utilizando o CCC-Cadastro Centralizado de Contribuintes.

Não deve ser validado para CTe com tipo de emissão EPEC quando Destinatário for o tomador

## Validações do Expedidor

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **G132** Se CNPJ Expedidor informado:<br>- Validar CNPJ do Expedidor (dígito de controle, zeros) | Obrig. | 428 | Rej. | Rejeição: CNPJ do expedidor inválido |
| **G133** Se CPF Expedidor informado:<br>- Validar CPF do Expedidor (dígito de controle, zeros) | Obrig. | 429 | Rej. | Rejeição: CPF do expedidor inválido |
| **G134** Se Expedidor informado:<br>- Município deve pertencer à UF (verificar se as 2 posições da esquerda do código de município que identifica o código da UF estão de acordo com a sigla da UF informada) | Obrig. | 431 | Rej. | Rejeição: Código de Município diverge da UF de localização expedidor |
| **G135** Se Expedidor informado:<br>- Código do Município deve existir (Tabela Municípios do IBGE) | Obrig. | 534 | Rej. | Rejeição: Município do Expedidor inexistente |
| **G136** Se IE Expedidor informado:<br>- Validar IE do Expedidor (erro no dígito de controle)<br>**Observação:** Antes da validação, a IE deverá ser normalizada, na aplicação da SEFAZ, com o acréscimo de zeros não significativos previstos na definição do formato da IE se necessário.<br>**Exemplo:** IE informada 130000019, formato da IE: NNNNNNNNNND, a IE deve ser padronizada para 00130000019, com o acréscimo dos zeros não significativos necessários para a validação do dígito verificador. | Obrig. | 432 | Rej. | Rejeição: IE do expedidor inválida |
| **G137** Se Tipo do CTe= 0 (Normal) e IE Expedidor informada:<br>Acessar Cadastro de Contribuinte da UF (Chave: IE Exped.) (\*1)<br>- IE deve estar cadastrada | Facult. | 434 | Rej. | Rejeição: IE do expedidor não cadastrada |
| **G138** Se Tipo do CTe= 0 (Normal) e IE e CNPJ Expedidor informados:<br>Acessar Cadastro de Contribuinte da UF (Chave: IE Exped.) (\*1)<br>- IE deve estar vinculada ao CNPJ (Tratar Regime Especial de IE única) | Facult. | 435 | Rej. | Rejeição: IE do expedidor não vinculada ao CNPJ |
| **G139** Se Tipo do CTe= 0 (Normal) e IE Expedidor = “ISENTO” ou não informada<br>Acessar Cadastro de Contribuinte da UF (\*1)<br>- Expedidor possui IE ativa na UF | Facult. | 717 | Rej. | Rejeição: IE do Expedidor não informada |

(\*1) Validação possível na operação interestadual ou no ambiente da SEFAZ Virtual utilizando o CCC-Cadastro Centralizado de Contribuintes.

Não deve ser validado para CTe com tipo de emissão EPEC quando expedidor for o tomador

## Validações do Recebedor

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **G140** Se CNPJ Recebedor informado:<br>- Validar CNPJ do Recebedor (dígito de controle, zeros) | Obrig. | 436 | Rej. | Rejeição: CNPJ do recebedor inválido |
| **G141** Se CPF Recebedor informado:<br>- Validar CPF do Recebedor (dígito de controle, zeros) | Obrig. | 437 | Rej. | Rejeição: CPF do recebedor inválido |
| **G142** Se Recebedor informado:<br>- Município deve pertencer à UF (verificar se as 2 posições da esquerda do código <!-- p.21 -->de município que identifica o código da UF estão de acordo com a sigla da UF informada) | Obrig. | 439 | Rej. | Rejeição: Código de Município diverge da UF de localização recebedor |
| **G143** Se Recebedor informado:<br>- Código do Município deve existir (Tabela Municípios do IBGE) | Obrig. | 535 | Rej. | Rejeição: Município do Recebedor inexistente |
| **G144** Se IE Recebedor informado:<br>- Validar IE do Recebedor (erro no dígito de controle)<br>**Observação:** Antes da validação, a IE deverá ser normalizada, na aplicação da SEFAZ, com o acréscimo de zeros não significativos previstos na definição do formato da IE se necessário.<br>**Exemplo:** IE informada 130000019, formato da IE: NNNNNNNNNND, a IE deve ser padronizada para 00130000019, com o acréscimo dos zeros não significativos necessários para a validação do dígito verificador. | Obrig. | 440 | Rej. | Rejeição: IE do recebedor inválida |
| **G145** Se Tipo do CTe= 0 (Normal) e IE Recebedor informada:<br>Acessar Cadastro de Contribuinte da UF (Chave: IE Receb.) (\*1)<br>- IE deve estar cadastrada | Facult. | 442 | Rej. | Rejeição: IE do recebedor não cadastrada |
| **G146** Se Tipo do CTe= 0 (Normal) e IE e CNPJ Recebedor informados:<br>Acessar Cadastro de Contribuinte da UF (Chave: IE Exped.) (\*1)<br>- IE deve estar vinculada ao CNPJ (Tratar Regime Especial de IE única) | Facult. | 443 | Rej. | Rejeição: IE do recebedor não vinculada ao CNPJ |
| **G147** Se Tipo do CTe= 0 (Normal) e IE Recebedor = “ISENTO” ou não informada<br>Acessar Cadastro de Contribuinte da UF (\*1)<br>- Recebedor possui IE ativa na UF | Facult. | 718 | Rej. | Rejeição: IE do Recebedor não informada |

(\*1) Validação possível na operação interestadual ou no ambiente da SEFAZ Virtual utilizando o CCC-Cadastro Centralizado de Contribuintes.

Não deve ser validado para CTe com tipo de emissão EPEC quando recebedor for o tomador

## Validações do Tomador (Aplicável ao tomador terceiro indicado no grupo toma4)

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **G148** Se CNPJ Tomador informado:<br>- Validar CNPJ do Tomador (dígito de controle, zeros) | Obrig. | 444 | Rej. | Rejeição: CNPJ do tomador inválido |
| **G149** Se CPF Tomador informado:<br>- Validar CPF do Tomador (dígito de controle, zeros) | Obrig. | 445 | Rej. | Rejeição: CPF do tomador inválido |
| **G150** Se Tomador informado:<br>- Município deve pertencer à UF (verificar se as 2 posições da esquerda do código de município que identifica o código da UF estão de acordo com a sigla da UF informada) | Obrig. | 447 | Rej. | Rejeição: Código de Município diverge da UF de localização tomador |
| **G151** Se Tomador informado:<br>- Código do Município deve existir (Tabela Municipios do IBGE) | Obrig. | 536 | Rej. | Rejeição: Município do Tomador inexistente |
| **G152** Se IE Tomador informado:<br>- Validar IE do Tomador (erro no dígito de controle)<br>**Observação:** Antes da validação, a IE deverá ser normalizada, na aplicação da SEFAZ, com o acréscimo de zeros não significativos previstos na definição do formato da IE se necessário.<br>**Exemplo:** IE informada 130000019, formato da IE: NNNNNNNNNND, a IE deve ser <!-- p.22 -->padronizada para 00130000019, com o acréscimo dos zeros não significativos necessários para a validação do dígito verificador. | Obrig. | 448 | Rej. | Rejeição: IE do tomador inválida |
| **G153** Se Tipo do CTe= 0 (Normal) e IE Tomador informada:<br>Acessar Cadastro de Contribuinte da UF (Chave: IE Tomador) (\*1)<br>- IE deve estar cadastrada | Facult. | 489 | Rej. | Rejeição: IE do tomador não cadastrada |
| **G154** Se Tipo do CTe= 0 (Normal) e IE e CNPJ Tomador informados:<br>Acessar Cadastro de Contribuinte da UF (Chave: IE Tomador) (\*1)<br>- IE deve estar vinculada ao CNPJ | Facult. | 490 | Rej. | Rejeição: IE do tomador não vinculada ao CNPJ |
| **G155** Se Tipo do CTe= 0 (Normal) e IE Tomador = “ISENTO” ou não informada<br>Acessar Cadastro de Contribuinte da UF (\*1)<br>- Tomador possui IE ativa na UF | Facult. | 719 | Rej. | Rejeição: IE do Tomador não informada |
| **G156** Se informado tomador como toma4:<br>- Verificar se o par CNPJ/IE ou CPF/IE do tomador existe declarado em um dos grupos: remetente, destinatário, recebedor ou expedidor | Obrig. | 799 | Rej. | Rejeição: Identificação do tomador utilizada em outro papel no CTe (CNPJ/CPF ou IE) |

(\*1) Validação possível na operação interestadual ou no ambiente da SEFAZ Virtual utilizando o CCC-Cadastro Centralizado de Contribuintes

Não deve ser validado para CTe com tipo de emissão EPEC quando tomador terceiro

## Validações Banco de Dados CTe

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **G157** Acessar BD CTE (Chave: UF, CNPJ/CPF Emit, Modelo, Série, Nro):<br>- Verificar Duplicidade de CTe com diferença na Chave de Acesso<br>(Campo de Código Numérico difere)<br>Retornar a chave de acesso já autorizada, o número do protocolo e data de autorização<br>[chCTe: 99999999999999999999999999999999999999999999]<br>[nProt:999999999999999][dhAut: AAAA-MM-DDTHH:MM:SS TZD] | Obrig. | 539 | Rej. | Rejeição: Duplicidade de CTe, com diferença na Chave de Acesso<br>[chCTe: [9999999999999999999999999999999999999999999]<br>[nProt:999999999999999][dhAut: AAAA-MM-DDTHH:MM:SS TZD] |
| **G158** Acessar BD CTE (Chave: UF, CNPJ/CPF Emit, Modelo, Série, Nro):<br>- Verificar Duplicidade de CTe<br>Retornar Protocolo e data de autorização.<br>[nProt:999999999999999][dhAut: AAAA-MM-DDTHH:MM:SS TZD].<br><br>**Observação:** Esta validação leva em consideração o ambiente de autorização do DF-e | Obrig. | 204 | Rej. | Rejeição: Duplicidade de CTe<br>[nProt:999999999999999][dhAut: AAAA-MM-DDTHH:MM:SS TZD] |
| **G159** - Verificar se CTe está cancelado<br>Retornar Protocolo e data de autorização do evento de cancelamento.<br>[nProt:999999999999999][dhCanc: AAAA-MM-DDTHH:MM:SS TZD] | Obrig. | 218 | Rej. | Rejeição: CTe já está cancelado na base de dados da SEFAZ<br>[nProt:999999999999999][dhCanc: AAAA-MM-DDTHH:MM:SS TZD]. |

## Validações do CTe complementar

**Observação:** Podem ser informados até 10 CTe que serão complementados pelo CTe complementar, as seguintes regras se aplicam a todos CTe informados

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **G160** Se Tipo do CTe = 1 (CTe complementar):<br>- Verificar se o Conhecimento complementado foi emitido pelo mesmo CNPJ. | Obrig. | 269 | Rej. | Rejeição: CNPJ Emitente do CTe Complementar difere do CNPJ do CT complementado |
| <!-- p.23 -->**G161** Se Tipo do CTe= 1 (Complementar):<br>- Validar chave de acesso do CTe complementado<br>Retornar o motivo da rejeição da Chave de Acesso: CNPJ zerado ou inválido, Ano &lt; 2009 ou maior que atual, Mês inválido (0 ou &gt; 12), Modelo diferente de 57, Número zerado, Tipo de emissão inválido, UF inválida ou DV inválido)<br>[chCTe: 99999999999999999999999999999999999999999999]<br>[Motivo: XXXXXXXXXXXX] | Obrig. | 849 | Rej. | Rejeição: Chave de acesso do CTe complementado inválida |
| **G162** Se Tipo do CTe = 1 (CTe complementar):<br>- Verificar se existe o CTe complementado.<br>Acesso BD CTE (Chave: UF, CNPJ Emit, Modelo, Série, Nro) | Obrig. | 267 | Rej. | Rejeição: CTe Complementar referência um CTe inexistente |
| **G163** Se Tipo do CTe = 1 (CTe complementar):<br>Acessar BD CTE (Chave: UF, CNPJ Emit, Modelo, Série, Nro)<br>- Verificar se o CTe complementado existe com diferença na Chave de Acesso<br>Retornar a chave de acesso já autorizada, o número do protocolo e data de autorização do CTe<br>[chCTe: 99999999999999999999999999999999999999999999]<br>[[nProt:999999999999999][dhAut: AAAA-MM-DDTHH:MM:SS TZD]. | Obrig. | 671 | Rej. | Rejeição: CTe complementado no CTe complementar com diferença de Chave de Acesso<br>[chCTe: 99999999999999999999999999999999999999999999]<br>[nProt:999999999999999][dhAut: AAAA-MM-DDTHH:MM:SS TZD]. |
| **G164** Se Tipo do CTe = 1 (CTe complementar):<br>- CTe complementado deve ser do tipo Normal ou Substituição.<br>Acessar BD CTE (Chave: UF, CNPJ Emit, Modelo, Série, Nro) | Obrig. | 491 | Rej. | Rejeição: CTe complementado é diferente de Normal ou Substituição |
| **G165** Se Tipo do CTe = 1 (CTe complementar):<br>- Verificar se o CTe complementado está com Situação: Autorizado o Uso.<br>Acesso BD CTE (Chave: UF, CNPJ Emit, Modelo, Série, Nro) | Obrig. | 655 | Rej. | Rejeição: CTe complementado deve estar com a situação autorizada (não pode estar cancelado) |
| **G166** Se Tipo do CTe= 1 (Complementar):<br>- Verificar se o CTe complementado foi substituído. | Obrig. | 657 | Rej. | Rejeição: CTe complementado não pode ter sido substituído |
| **G167** Se Tipo do CT=e 1 (Complementar):<br>- Verificar o número de Complementos que o CTe complementado já recebeu, não podendo exceder o limite de 10 CTe complementares para um mesmo CTe. | Obrig. | 520 | Rej. | Rejeição: CTe não pode receber mais do que 10 CTe Complementares |
| **G168** Se Tipo do CT=e 1 (Complementar):<br>- O CNPJ/CPF do remetente do CTe complementar deve ser igual ao informado no CTe complementado | Obrig. | 800 | Rej. | Rejeição: CNPJ/CPF do remetente do CTe complementar deve ser igual ao informado no CTe complementado |
| **G169** Se Tipo do CT=e 1 (Complementar):<br>- CNPJ/CPF do destinatário do CTe complementar deve ser igual ao informado no CTe complementado | Obrig. | 801 | Rej. | Rejeição: CNPJ/CPF do destinatário do CTe complementar deve ser igual ao informado no CTe complementado |
| **G170** Se Tipo do CT=e 1 (Complementar):<br>- CNPJ/CPF do expedidor do CTe complementar deve ser igual ao informado no CTe complementado | Obrig. | 802 | Rej. | Rejeição: O CNPJ/CPF do expedidor do CTe complementar deve ser igual ao informado no CTe complementado |
| **G171** Se Tipo do CT=e 1 (Complementar):<br>- CNPJ/CPF do recebedor do CTe complementar deve ser igual ao informado no CTe complementado | Obrig. | 803 | Rej. | Rejeição: O CNPJ/CPF do recebedor do CTe complementar deve ser igual ao informado no CTe complementado |
| <!-- p.24 -->**G172** Se Tipo do CT=e 1 (Complementar) e informado toma4:<br>- CNPJ/CPF do tomador do CTe complementar deve ser igual ao informado no CTe complementado<br><br>**Observação:** O CTe complementado também deve ter informado o toma4 como tomador | Obrig. | 804 | Rej. | Rejeição: O CNPJ/CPF do tomador do CTe complementar deve ser igual ao informado no CTe complementado |
| **G173** Se Tipo do CT=e 1 (Complementar):<br>- IE do emitente do CTe complementar deve ser igual ao informado no CTe complementado | Obrig. | 805 | Rej. | Rejeição: A IE do emitente do CTe complementar deve ser igual ao informado no CTe complementado |
| **G174** Se Tipo do CT=e 1 (Complementar):<br>- UF de início da prestação do CTe complementar deve ser igual ao informado no CTe complementado | Obrig. | 811 | Rej. | Rejeição: A UF de início da prestação deve ser igual ao informado no CTe complementado |
| **G175** Se Tipo do CTe=1 (Complementar):<br>- UF de fim da prestação do CTe Complementar deve ser igual ao informado no CTe Complementado | Obrig. | 812 | Rej. | Rejeição: A UF de fim da prestação deve ser igual ao informado no CTe complementado |
| **G176** Se Tipo do CTe=1 (Complementar):<br>- O CTe complementar deve ser do mesmo tipo de serviço do CTe Complementado | Obrig. | 835 | Rej. | Rejeição: O tipo de serviço do CTe complementar deve ser igual ao CTe complementado |
| **G177** Se Tipo do CTe=1 (Complementar) e informados múltiplos CTe para serem complementados:<br>A chave de acesso do CTe complementada não pode estar repetida no CTe complementar | Obrig. | 907 | Rej. | Rejeição: CTe complementado não pode estar repetido no mesmo CTe Complementar |

## Validações do Início e Fim da Prestação

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **G178** Município de envio do CTe diverge da UF (verificar se as 2 posições da esquerda do código de município que identifica o código da UF estão de acordo com a sigla da UF informada) | Obrig. | 493 | Rej. | Rejeição: Código de Município diverge da UF de envio |
| **G179** Código do Município de envio do CTe inexistente (Tabela Municípios do IBGE) | Obrig. | 537 | Rej. | Rejeição: Município de Envio inexistente |
| **G180** Município de início da prestação diverge da UF (verificar se as 2 posições da esquerda do código de município que identifica o código da UF estão de acordo com a sigla da UF informada) | Obrig. | 456 | Rej. | Rejeição: Código de Município diverge da UF de início da prestação |
| **G181** Código do Município de início da prestação inexistente (Tabela Municípios do IBGE) | Obrig. | 541 | Rej. | Rejeição: Município de início da prestação inexistente |
| **G182** Município de término da prestação diverge da UF (verificar se as 2 posições da esquerda do código de município que identifica o código da UF estão de acordo com a sigla da UF informada) | Obrig. | 414 | Rej. | Rejeição: Código de Município diverge da UF de término da prestação |
| **G183** Código do Município de término da prestação inexistente (Tabela Municípios do IBGE) | Obrig. | 542 | Rej. | Rejeição: Município de término da prestação inexistente |

## Validações do EPEC

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **G184** Rejeitar se forma de emissão do CTe for 4 (EPEC) e Tipo de CTe DIFERENTE de <!-- p.25 -->Normal | Obrig. | 720 | Rej. | Rejeição: CTe EPEC deve ser do tipo Normal |
| **G185** Se forma de emissão do CTe for diferente de 4 (EPEC):<br>Acessar BD CTe-EVENTOS (Chave: UF, CNPJ Emit, Modelo, Série, Nro obtidos na chave de acesso dos eventos registrados).<br>- Verificar se existe EPEC para a chave natural do CTe<br><br>**Observação:** Concatenar a chave de acesso do CTe da EPEC na resposta | Obrig. | 640 | Rej. | Rejeição: Tipo de emissão do CTe difere de EPEC com EPEC autorizado na SVC-XX para este documento. |
| **G186** Se forma de emissão do CTe for 4 (EPEC):<br>Acessar BD CTe-EVENTOS pela chave de acesso:<br>- Verificar se existe Evento EPEC autorizado na SVC-[XX].<br><br>**Observação:** O processo de sincronização entre as SEFAZ poderá sofrer algum atraso. Em caso de receber essa rejeição, a empresa emitente deverá tentar a transmissão do CTe até que o EPEC esteja sincronizado com a SEFAZ Autorizadora. | Obrig. | 641 | Rej. | Rejeição: O evento prévio deste CTe não foi autorizado na SVC ou ainda não foi sincronizado.<br>[OBS: Em caso de atraso na sincronização, favor aguardar alguns instantes para nova tentativa de transmissão] |
| **G187** Se forma de emissão do CTe for 4 (EPEC):<br>- Valor de ICMS, Valor de ICMS ST, Valor da Prestação e Valor Total da Carga do CTe devem ser iguais aos informados no evento prévio. | Obrig. | 642 | Rej. | Rejeição: Os valores de ICMS, ICMS ST, Prestação e Total da Carga do CTe devem ser iguais aos informados no EPEC. |
| **G188** Se forma de emissão do CTe for 4 (EPEC):<br>- Tipo do Tomador do Serviço, CNPJ/CPF do Tomador e IE do tomador do CTe devem ser iguais aos informados no evento prévio. | Obrig. | 643 | Rej. | Rejeição: As informações do tomador de serviço do CTe devem ser iguais as informadas no EPEC |
| **G189** Se forma de emissão do CTe for 4 (EPEC):<br>- Modal do CTe deve ser igual ao informado no evento prévio. | Obrig. | 644 | Rej. | Rejeição: A informação do modal do CTe deve ser igual a informada no EPEC |
| **G190** Se forma de emissão do CTe for 4 (EPEC):<br>- UF de início e UF de fim de prestação do CTe devem ser iguais aos informados no evento prévio. | Obrig. | 645 | Rej. | Rejeição: A UF de início e fim de prestação do CTe devem ser iguais as informadas no EPEC. |
| **G191** Se forma de emissão do CTe for 4 (EPEC):<br>- Data de emissão do CTe deve ser menor ou igual a data de autorização do evento prévio | Obrig. | 697 | Rej. | Rejeição: CTe com emissão anterior ao evento prévio (EPEC) |
| **G192** Se forma de emissão do CTe for 4 (EPEC):<br>- Data de emissão do CTe deve ser igual a data de emissão do evento prévio | Obrig. | 756 | Rej. | Rejeição: Data de emissão do CTe deve ser igual à data de emissão da EPEC |

## Validações dos Autorizados ao XML do CTe

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **G193** Se informada autorização download XML com CNPJ:<br>- Validar CNPJ (zeros ou dígito inválido) | Obrig. | 699 | Rej. | Rejeição: CNPJ autorizado para download inválido |
| **G194** Se informada autorização download do XML com CPF:<br>- Validar CPF (zeros, nulo, números repetidos (111, 222, etc.), ou dígito de controle inválido) | Obrig. | 700 | Rej. | Rejeição: CPF autorizado para download inválido |
| **G195** Se informada autorização download XML:<br>- Verificar se existe duplicidade de CPF/CNPJ informado no CTe | Obrig. | 715 | Rej. | Rejeição: Documento autorizado ao XML duplicado no CTe |
| <!-- p.26 -->**G196** Verificar se CNPJ/CPF informado já não existe declarado como um dos atores do CTe | Obrig. | 828 | Rej. | Rejeição: CNPJ/CPF autorizado já declarado no CTe (remet/dest/exped/receb/tom) |

## Validações do CTe Globalizado

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **G197** Se informado indicador de CTe globalizado (indGlobalizado):<br>- UF de início deve ser igual a UF de fim da prestação | Facul. | 743 | Rej. | Rejeição: CTe Globalizado não pode ser utilizado para operação interestadual |
| **G198** Se informado indicador de CTe globalizado (indGlobalizado):<br>- Tomador do CTe deve ser Remetente ou Destinatário | Facul. | 722 | Rej. | Rejeição: Tomador do serviço deve ser remetente ou destinatário para CTe Globalizado |
| **G199** Se Tipo do CTe= 0 (Normal) ou 3 (Substituição) e informado indicador de CTe globalizado (indGlobalizado):<br>- Deve existir grupo de informações de documentos transportados do tipo NFe (infDoc/infNFe) | Facul. | 723 | Rej. | Rejeição: CTe Globalizado deve conter apenas NFe nos documentos transportados |
| **G200** Se Tipo do CTe= 0 (Normal) ou 3 (Substituição) e informado indicador de CTe globalizado (indGlobalizado) e Tomador do Serviço for Destinatário:<br>- O número de remetentes (CNPJ diferentes) nas chaves de acesso das NFe transportadas deve ser superior ou igual a 5.<br>\* Verificar pelo CNPJ que compõe a chave de acesso | Facul. | 724 | Rej. | Rejeição: CTe Globalizado deve conter NFe com CNPJ diferentes para múltiplos remetentes |
| **G201** Se Tipo do CTe= 0 (Normal) ou 3 (Substituição) e informado indicador de CTe globalizado (indGlobalizado) e Tomador do Serviço for remetente:<br>- Todas NFe transportadas devem ser do mesmo emitente<br>\* Verificar pelo CNPJ que compõe a chave de acesso | Facul. | 744 | Rej. | Rejeição: CTe Globalizado para tomador remetente com NFe de emitentes diferentes |
| **G202** Se informado indicador de CTe globalizado (indGlobalizado), Tomador do Serviço for Destinatário e ambiente for Produção:<br>- O campo razão social do Remetente (rem/xNome) deve ser informada com a literal:<br>“DIVERSOS” | Facul. | 725 | Rej. | Rejeição: Razão Social do Remetente do CTe Globalizado inválido |
| **G203** Se informado indicador de CTe globalizado (indGlobalizado), Tomador do Serviço for remetente e ambiente for Produção:<br>- O campo razão social do Destinatário (dest/xNome) deve ser informado com a literal:<br>“DIVERSOS” | Facul. | 726 | Rej. | Rejeição: Razão Social do Destinatário do CTe Globalizado inválido |
| **G204** Se informado indicador de CTe globalizado (indGlobalizado), Tomador do Serviço for Destinatário:<br>- O campo CNPJ do remetente (rem/CNPJ) deve ser informado com o CNPJ do emitente do CTe | Facul. | 727 | Rej. | Rejeição: CNPJ do remetente do CTe Globalizado deve ser o mesmo do emitente do CTe |
| **G205** Se informado indicador de CTe globalizado (indGlobalizado), Tomador do Serviço for remetente:<br>- O campo CNPJ do Destinatário (dest/CNPJ) deve ser informado com o CNPJ do Emitente do CTe | Facul. | 728 | Rej. | Rejeição: CNPJ do destinatário do CTe Globalizado deve ser o mesmo do emitente do CTe |
| <!-- p.27 -->**G206** Se Tipo do CTe= 0 (Normal) ou 3 (Substituição) e informado indicador de CTe globalizado (indGlobalizado) e Tomador do Serviço for remetente:<br>- A quantidade de NFe relacionadas deve ser superior ou igual a 5 | Facul. | 737 | Rej. | Rejeição: O CTe globalizado deve conter pelo menos 5 NFe para o mesmo emitente |
| **G207** Se Tipo do CTe= 0 (Normal) ou 3 (Substituição) e NÃO for informado indicador de CTe globalizado e informado grupo de NFe em documentos transportados (infDoc/infNFe):<br>- Não devem existir diversos remetentes nas chaves de acesso das NFe informadas.<br>\* Verificar pelo CNPJ/CPF que compõe a chave de acesso | Facul. | 729 | Rej. | Rejeição: NFe de múltiplos emitentes informadas nos documentos transportados sem indicador de CTe Globalizado |
| **G208** Se não for informado indicador de CTe globalizado (indGlobalizado):<br>- Rejeitar CTe se estiver informada razão social de remetente ou destinatário com a literal “DIVERSOS” | Facul. | 730 | Rej. | Rejeição: Razão Social inválida para remetente/destinatário sem indicador de CTe Globalizado |

## Validações do Responsável Técnico

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **G209** Não informado o grupo de informações do responsável técnico<br>**Observação:** Implementação à critério da UF | Facul. | 867 | Rej. | Rejeição: Obrigatória as informações do responsável técnico |
| **G210** Se informado grupo do responsável técnico (infRespTec):<br>- Validar CNPJ (dígito controle, zeros ou nulo). | Facul. | 836 | Rej. | Rejeição: CNPJ do desenvolvedor do sistema inválido (zerado ou dígito inválido) |
| **G211** Obrigatória a informação do identificador do CSRT (tag:idCSRT) e Hash do CSRT (tag: hashCSRT)<br>**Observação:** Implementação futura | Facul. | 868 | Rej. | Rejeição: Obrigatória a informação do identificador do CSRT e do Hash do CSRT |

## Validações do QR Code

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **G212** O grupo de informações do QRCode (infCTeSupl) deve ser informado | Obrig. | 850 | Rej. | Rejeição: O QR Code do CTe deve ser informado |
| **G213** Endereço do site do Portal Nacional para a Consulta via QR Code difere do previsto.<br>Nota: O uso diferenciado de maiúsculas ou minúsculas não deve ser considerado na validação.<br>**Observação:** Para consultar as URLs utilizadas no QR Code, acesse: https://dfe-portal.svrs.rs.gov.br/CTe/Servicos | Obrig. | 851 | Rej. | Rejeição: Endereço do site da UF da Consulta via QR Code diverge do previsto |
| **G214** Parâmetro Chave de Acesso no QR Code diverge da Chave de Acesso do CTe | Obrig. | 852 | Rej. | Rejeição: Parâmetro chave de acesso do QR Code divergente do CTe |
| **G215** Se tipo de emissão for igual a FS-DA (tpEmis=5), EPEC (tpEmis=4):<br>O parâmetro sign deve informado no QR-Code | Obrig. | 853 | Rej. | Rejeição: Parâmetro sign não informado no QR Code para emissão em contingência |
| **G216** Se tipo de emissão for igual a Normal ou SVC:<br>O parâmetro sign não deve ser informado no QR-Code | Obrig. | 854 | Rej. | Rejeição: Parâmetro sign não deve ser informado no QR Code para emissão Normal |
| **G217** Se tipo de emissão for igual FS-DA (tpEmis=5), EPEC (tpEmis=4):<br>Valor da assinatura (sign) do QR-Code difere do valor calculado | Obrig. | 855 | Rej. | Rejeição: Assinatura do QR-Code difere do calculado |

<!-- p.28 -->As validações referentes ao QR Code serão aplicadas somente após data previamente acertada entre Fisco e empresas, podendo essa data ser de prazo distinto e superior da data de entrada em produção deste MOC.

## Validações da NFF

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **G218** Se a forma de emissão do CTe (tpEmis) for diferente de Regime Especial da Nota Fiscal Fácil (3):<br>- O grupo de informações do pedido da NFF (infSolicNFF) não pode estar preenchido | Obrig. | 902 | Rej. | Rejeição: Grupo de informações do pedido de emissão da NFF deve ser preenchido apenas para forma de emissão NFF |

**Nota**: A critério da SEFAZ Autorizadora a mensagem de erro poderá receber um texto adicional detalhando melhor a rejeição ou passando alguma instrução ao contribuinte, observando que esta mensagem complementar deverá vir após a mensagem de rejeição do MOC, entre colchetes, com o literal “Det:”

[Det: XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX]

**Nota 2:** Cada CTe relacionado no grupo CTe Complementar deverá receber o evento de marcação automático “Autorizado CTe Complementar” (240130).

Em caso de cancelamento do CTe Complementar, os mesmos CTe deverão receber o evento “Cancelado CTe Complementar” (240131).

**IMPORTANTE:** O evento autorizado sempre será compartilhado entre os ambientes, embora esse processo possa atrasar devido a problemas operacionais. Solicitamos ao emitente que aguarde para autorizar o CTe do EPEC caso ocorra esse atraso.

**IMPORTANTE:** Orientamos o emitente que não tente autorizar a numeração utilizada em um evento EPEC (autorizado na SVC) no ambiente normal (com tipo de emissão Normal). Essa situação pode ocorrer em casos de atraso de sincronismo entre os ambientes e na prática alocará a numeração do EPEC dificultando os processos de validação.

<!-- p.29 -->**IMPORTANTE:** A orientação para EPEC também se aplica a emissão com FS-DA, ou seja, a numeração também não deve ser autorizada com tipo de emissão Normal.
