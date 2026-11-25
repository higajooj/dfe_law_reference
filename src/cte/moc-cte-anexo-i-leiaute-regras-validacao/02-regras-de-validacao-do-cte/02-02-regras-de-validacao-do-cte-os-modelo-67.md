# 2.2. Regras de Validação do CTe OS (Modelo 67)

As validações descritas a seguir aplicam-se ao CTe OS enviado ao serviço de recepção Síncrono (MOC Visão Geral - item 4.4).

<!-- p.30 -->

| Grupo | Descrição |
|---|---|
| D | Validação do Certificado de Assinatura |
| E | Validação da Assinatura Digital |

## Validações Gerais

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **H001** Verificar se o tipo do ambiente do CTe difere do ambiente do Web Service | Obrig. | 252 | Rej. | Rejeição: Ambiente informado diverge do Ambiente de recebimento |
| **H002** A serie informada não deve estar na faixa entre 890-899 (reservada) | Obrig. | 670 | Rej. | Rejeição: Série utilizada não permitida no webservice |
| **H003** Sigla da UF do Emitente difere da UF da Chave de Acesso | Obrig. | 247 | Rej. | Rejeição: Sigla da UF do Emitente diverge da UF autorizadora |
| **H004** Se forma de emissão do CTe for diferente de 5 (FS-DA):<br>dhCont e xJust não devem ser informados | Obrig. | 586 | Rej. | Rejeição: Data e Justificativa de entrada em contingência não devem ser informadas para tipo de emissão diferente de FS-DA. |
| **H005** Se forma de emissão do CTe for igual a 5 (FS-DA):<br>dhCont e xJust devem ser informados | Obrig. | 587 | Rej. | Rejeição: Data e Justificativa de entrada em contingência devem ser informadas |
| **H006** Se Data de entrada em contingência estiver informada, esta deve ser menor ou igual à data de emissão | Obrig | 588 | Rej. | Rejeição: Data de entrada em contingência posterior a data de emissão. |
| **H007** Se Ambiente de Autorização Normal:<br>- Não aceitar tpEmis = 7 (SVC-RS) ou 8 (SVC-SP) | Obrig | 515 | Rej. | Rejeição: O tpEmis informado só é válido na contingência SVC |
| **H008** Se Ambiente de Autorização SVC:<br>- Tipo de Emissão difere do tpEmis da SVC (7=SVC-RS e 8=SVC-SP) | Obrig. | 516 | Rej. | Rejeição: O tpEmis informado é incompatível com SVC-[SP/RS] |
| **H009** Se ambiente de Autorização SVC:<br>- Não aceitar tipo de CTe diferente de 0 (Normal) | Obrig. | 517 | Rej. | Rejeição: CTe informado em SVC deve ser Normal |
| **H010** Chave de acesso inválida (modelo diferente de 67) | Obrig. | 721 | Rej. | Rejeição: Chave de acesso inválida (modelo diferente de 67) |
| **H011** Verificar Campo ID:<br>- Falta literal "CTe"<br>- Chave de Acesso do campo ID difere da concatenação dos campos correspondentes | Obrig. | 227 | Rej. | Rejeição: Erro na composição do Campo ID |
| **H012** Dígito Verificador inválido da Chave de acesso resultante da concatenação dos campos correspondentes | Obrig. | 253 | Rej. | Rejeição: Dígito Verificador da chave de acesso composta inválido |
| <!-- p.31 --> **H013** Se Tipo do CTe= 0 (Normal) ou 3 (Substituição): deve existir o grupo de CTe Normal | Obrig. | 458 | Rej. | Rejeição: Grupo de CTe normal não informado para CTe normal |
| **H014** Se Tipo do CTe= 1 (Complemento): deve existir o grupo de CTe Complementar | Obrig. | 459 | Rej. | Rejeição: Grupo de CTe complementar não informado para CTe complementar |

## Validações dos Modais (Apenas para Transporte de Pessoas e Excesso de Bagagem)

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **H015** Se Tipo do CTe = 0 (Normal) ou 3 (Substituição), modal rodoviário e tipo de serviço for igual a Transporte de Pessoas ou Excesso de Bagagem:<br>- O grupo infModal deve estar preenchido | Obrig. | 798 | Rej. | Rejeição: Os dados específicos do modal devem estar preenchidos para Transporte de Pessoas e Excesso de Bagagem |
| **H016** Se Tipo do CTe= 0 (Normal) ou 3 (Substituição), modal rodoviário tipo de serviço for igual a Transporte de Pessoas ou Excesso de Bagagem:<br>- Verificar se a Versão do modal de transporte é suportada | Obrig | 579 | Rej | Rejeição: Versão informada para o modal não suportada |
| **H017** Se Tipo do CTe= 0 (Normal) ou 3 (Substituição), modal rodoviário e tipo de serviço for igual a Transporte de Pessoas ou Excesso de Bagagem:<br>- Verificar Schema XML conforme o modal de transporte (parte específica do modal de transporte) | Obrig. | 580 | Rej. | Rejeição: Falha no Schema XML específico para o modal |
| **H018** Se Tipo do CTe= 0 (Normal) ou 3 (Substituição), e tipo de serviço igual a transporte de valores no Modal rodoviário ou qualquer tipo de serviço para os modais diferente de rodoviário:<br>- Rejeitar se informado o layout específico no grupo infModal | Obrig. | 829 | Rej. | Rejeição: Grupo infModal não deve ser preenchido |

## Validações conforme o tipo de serviço

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **H019** Se tipo de serviço = Transporte de Pessoas<br>- UF de início e UF de fim da prestação devem estar preenchidas | Obrig. | 751 | Rej. | Rejeição: UF de início e Fim da prestação devem estar preenchidas para Transporte de Pessoas |
| **H020** Se tipo de serviço = Transporte de Pessoas<br>- Município de início e Município de Fim da prestação devem estar preenchidos | Obrig. | 752 | Rej. | Rejeição: Município de início e Fim da prestação devem estar preenchidos para Transporte de Pessoas |
| **H021** Se tipo de serviço = Transporte de Pessoas e modal Rodoviário, o grupo de informações de UF de percurso deverá ser preenchido na ordem Origem – Destino sempre que existir pelo menos uma UF entre a UF de início e UF de fim da prestação<br>**Observação:** A regra será aplicada considerando as divisas possíveis na ordem definida para o percurso.<br>**Observação 2:** Caso preenchido percurso para os outros tipos de serviço a ordem deverá ser respeitada da mesma forma | Obrig. | 753 | Rej. | Rejeição: Percurso inválido |
| **H022** Se tipo de serviço = Transporte de Pessoas ou Valores<br>- O grupo de informações do tomador deverá estar informado | Obrig. | 757 | Rej. | Rejeição: O tomador do serviço deve estar informado para Transporte de Pessoas e Valores |
| **H023** Se Tipo do CTe = 0 (Normal) ou 3 (Substituição) e tipo de serviço = Transporte de Pessoas, modal rodoviário com Operação Interna (UF de início for igual a UF de fim da prestação, ambas diferentes de EX)<br>Deverá ser informado o campo NroRegEstadual. | Obrig. | 839 | Rej. | Rejeição: Número do Registro Estadual é obrigatório para transporte de pessoas rodoviário nas operações internas. |
| <!-- p.32 --> **H024** Se Tipo do CTe = 0 (Normal) ou 3 (Substituição) e tipo de serviço = Transporte de Pessoas, modal rodoviário com Operação Interestadual (UF de início for diferente da UF de fim da prestação, ambas diferentes de EX)<br>Deverá ser informado o campo TAF (Termo de Autorização de Fretamento). | Obrig. | 840 | Rej. | Rejeição: Termo de Autorização de Fretamento é obrigatório para transporte de pessoas rodoviário interestadual |
| **H025** Se tipo de serviço = Transporte de Pessoas e modal rodoviário e<br>Deverá ser informado o grupo de informações de fretamento (grupo: infFretamento) | Obrig. | 841 | Rej. | Rejeição: Informação do fretamento é obrigatória para transporte de pessoas |
| **H026** Se Tipo do CTe = 0 (Normal) ou 3 (Substituição) e informado grupo de informações do Fretamento (rodoOS\infFretamento) com tipo de fretamento for igual a Eventual (tpFretamento=1):<br>A data/hora da viagem deve ser informada. | Obrig. | 837 | Rej. | Rejeição: Data e hora da viagem deve ser informada para tipo de fretamento eventual |
| **H027** Se tipo de CTe = 0 (Normal) e informada Data/hora da viagem nas informações do fretamento no transporte de pessoas, esta deve ser superior a data/hora de emissão do CTe. | Obrig. | 838 | Rej. | Rejeição: Data e hora da viagem deve ser superior a data de emissão do CTe |
| **H028** Se tipo de serviço = Excesso de Bagagem<br>- O grupo de documentos referenciados deve estar informado (infDocRef) | Obrig. | 754 | Rej. | Rejeição: Os documentos referenciados devem estar preenchidos para excesso de bagagem |
| <!-- REVISAR p.32: em H029–H035 os valores de Aplic. e Efeito aparecem trocados no original (Aplic. = Rej., Efeito = Obrig.); transcritos na posição das colunas da fonte --> **H029** Se tipo de serviço = Excesso de Bagagem e informada chave de BP-e referenciada (infDocRef\chBPe):<br>Validar chave de acesso do BP-e referenciado<br>Retornar o motivo da rejeição da Chave de Acesso: CNPJ zerado ou inválido, Ano < 2017 ou maior que atual, Mês inválido (0 ou > 12), Modelo diferente de 63, Número zerado, Tipo de emissão inválido, UF inválida ou DV inválido)<br>[chBPe: 99999999999999999999999999999999999999999999]<br>[Motivo: XXXXXXXXXXXX] | Rej. | 891 | Obrig. | Rejeição: Chave de acesso do BP-e referenciado inválida |
| **H030** Se tipo de serviço = Excesso de Bagagem e informada chave de BP-e referenciada:<br>(infDocRef\chBPe):<br>- O BP-e referenciado deve existir<br>Acesso BD BPE (Chave: UF, CNPJ Emit, Modelo, Série, Nro) | Rej. | 892 | Obrig, | Rejeição: BP-e referenciado inexistente |
| **H031** Se tipo de serviço = Excesso de Bagagem e informada chave de BP-e referenciada:<br>(infDocRef\chBPe):<br>- O BP-e referenciado não pode existir com diferença na chave de acesso<br>Retornar a chave de acesso já autorizada, o número do protocolo e data de autorização do BP-e<br>[chBPe: 99999999999999999999999999999999999999999999]<br>[nProt:999999999999999][dhAut: AAAA-MM-DDTHH:MM:SS TZD]. | Rej. | 893 | Obrig, | Rejeição: BP-e referenciado com diferença de Chave de Acesso<br>[chBPe: 99999999999999999999999999999999999999999999]<br>[nProt:999999999999999][dhAut: AAAA-MM-DDTHH:MM:SS TZD] |
| **H032** Se tipo de serviço = Excesso de Bagagem e informada chave de BP-e referenciada:<br>(infDocRef\chBPe):<br>O BP-e referenciado não pode estar cancelado ou substituído | Rej. | 894 | Obrig. | Rejeição: O BP-e referenciado não pode estar cancelado / substituído |
| **H033** Se tipo de serviço = Excesso de Bagagem e informada chave de BP-e referenciada:<br>(infDocRef\chBPe):<br>O BP-e referenciado não pode ter evento de não embarque associado | Rej. | 895 | Obrig. | Rejeição: O BP-e referenciado não pode possuir evento de não embarque |
| <!-- p.33 --> **H034** Se tipo de serviço = Excesso de Bagagem e informada chave de BP-e referenciada:<br>(infDocRef\chBPe):<br>O BP-e referenciado deve possuir pelo menos um evento de excesso de bagagem associado | Rej. | 896 | Obrig. | Rejeição: O BP-e referenciado deve possuir evento de excesso de bagagem |
| **H035** Se tipo de serviço = Excesso de Bagagem e informada chave de BP-e referenciada:<br>(infDocRef\chBPe):<br>O CNPJ da chave de acesso do BP-e referenciado deve ser do mesmo emitente do CTe OS | Rej. | 897 | Obrig. | Rejeição: O BP-e referenciado deve ser do mesmo CNPJ emitente do BP-e |
| **H036** Se tipo de serviço = Transporte de Valores<br>- Verificar se existe CTe OS autorizado há mais de 45 dias para o mesmo CNPJ do emitente sem que exista pelo menos um evento de Informações da GTV vinculado<br><br>**Observação:** Retornar a chave de acesso do CTe OS mais antigo que causou o bloqueio<br>**Observação 2:** Essa validação não deve ser aplicada no ambiente de homologação.<br><br>**Observação 3**: A validação não deve ser aplicada a CTe OS de transporte de valores que relacionam GTVe | Facult. | 758 | Rej. | Rejeição: Existe CTe OS de Transporte de Valores autorizado há mais de 45 dias sem informar as GTV<br>[chCTe: 99999999999999999999999999999999999999999999] |
| **H037** Se Tipo do CTe = 0 (Normal) ou 3 (Substituição) e tipo de serviço transporte de pessoas:<br>- Rejeitar se estiver referenciado CTe Cancelado (refCTeCanc) | Obrig. | 815 | Rej. | Rejeição: Não é permitido referenciar CTe cancelado para este tipo de serviço |
| **H038** Se Tipo do CTe = 0 (Normal) ou 3 (Substituição) e referenciado CTe cancelado (refCTeCanc):<br>- Validar chave de acesso do CTe referenciado<br>Retornar o motivo da rejeição da Chave de Acesso: CNPJ zerado ou inválido, Ano < 2009 ou maior que atual, Mês inválido (0 ou > 12), Modelo diferente de 67, Número zerado, Tipo de emissão inválido, UF inválida ou DV inválido)<br>[chCTe: 99999999999999999999999999999999999999999999]<br>[Motivo: XXXXXXXXXXXX] | Obrig. | 856 | Rej. | Rejeição: Chave de acesso do CTe referenciado inválida |
| **H039** Se Tipo do CTe = 0 (Normal) ou 3 (Substituição) e referenciado CTe cancelado (refCTeCanc):<br>- O CTe referenciado deve existir<br>Acesso BD CTE (Chave: UF, CNPJ Emit, Modelo, Série, Nro) | Obrig. | 824 | Rej. | Rejeição: CTe referenciado inexistente na base de dados da SEFAZ |
| **H040** Se Tipo do CTe = 0 (Normal) ou 3 (Substituição) e referenciado CTe cancelado (refCTeCanc):<br>- O CTe referenciado não pode existir com diferença na chave de acesso<br>Retornar a chave de acesso já autorizada, o número do protocolo e data de autorização do CTe<br>[chCTe: 99999999999999999999999999999999999999999999]<br>[nProt:999999999999999][dhAut: AAAA-MM-DDTHH:MM:SS TZD]. | Obrig. | 825 | Rej. | Rejeição: CTe referenciado existe com diferença de chave de acesso<br>[chCTe: 99999999999999999999999999999999999999999999]<br>[nProt:999999999999999][dhAut: AAAA-MM-DDTHH:MM:SS TZD] |
| <!-- p.34 --> **H041** Se Tipo do CTe = 0 (Normal) ou 3 (Substituição) e referenciado CTe cancelado (refCTeCanc):<br>- O CTe referenciado deve estar cancelado | Obrig. | 826 | Rej. | Rejeição: CTe referenciado deve estar cancelado |
| **H042** Se Tipo do CTe = 0 (Normal) ou 3 (Substituição) e referenciado CTe cancelado (refCTeCanc):<br>- O CTe referenciado deve possuir o mesmo CNPJ de emitente. | Obrig. | 827 | Rej. | Rejeição: CTe referenciado deve ser do mesmo emitente do CTe |
| **H043** Se Tipo do CTe = 0 (Normal) ou 3 (Substituição) e referenciado CTe cancelado (refCTeCanc):<br>- O CTe referenciado deve ser do mesmo tipo de serviço | Obrig. | 830 | Rej. | Rejeição: CTe referenciado deve ser do mesmo tipo de serviço |
| **H044** Se tipo de serviço = Transporte de Pessoas e informado o Número do Registro Estadual, com UF de início igual à UF do Emitente<br>Verificar situação do Número do Registro Estadual junto à base de dados da SEFAZ ou órgão responsável na UF autorizadora<br>**Observação:** Validar o NroRegEstadual quando informado em \<rodoOS\> e no grupo \<prop\> | Facult. | 831 | Rej. | Rejeição: Número do Registro Estadual Inválido |

## Validações da GTVe

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **H045** Se tipo de serviço for diferente de Transporte de Valores<br>- O grupo de informações infGTVe não pode estar informado | Obrig. | 881 | Rej. | Rejeição: Informações da GTVe não podem ser preenchidas para CTe OS diferente de transporte de valores |
| **H046** Se tipo de serviço for Transporte de Valores e informado grupo infGTVe, para cada uma das chaves informadas:<br>- Validar chave de acesso da GTVe<br>Retornar o motivo da rejeição da Chave de Acesso: CNPJ zerado ou inválido, Ano < 2020 ou maior que atual, Mês inválido (0 ou > 12), Modelo diferente de 64, Número zerado, Tipo de emissão inválido, UF inválida ou DV inválido)<br>[chCTe: 99999999999999999999999999999999999999999999]<br>[Motivo: XXXXXXXXXXXX] | Obrig. | 882 | Rej. | Rejeição: Chave de acesso da GTVe inválida |
| **H047** Se tipo de serviço for Transporte de Valores e informado grupo infGTVe, para cada uma das chaves informadas:<br>- A GTVe deve existir na base de dados da SEFAZ<br>Acesso BD CTE (Chave: UF, CNPJ Emit, Modelo, Série, Nro) | Obrig, | 883 | Rej. | Rejeição: GTVe inexistente |
| **H048** Se tipo de serviço for Transporte de Valores e informado grupo infGTVe, para cada uma das chaves informadas:<br>- A GTVe não pode existir com diferença na chave de acesso<br>Retornar a chave de acesso já autorizada, o número do protocolo e data de autorização da GTVe<br>[chCTe: 99999999999999999999999999999999999999999999]<br>[nProt:999999999999999][dhAut: AAAA-MM-DDTHH:MM:SS TZD]. | Obrig. | 884 | Rej. | Rejeição: GTVe com diferença de Chave de Acesso<br>[chCTe: 99999999999999999999999999999999999999999999]<br>[nProt:999999999999999][dhAut: AAAA-MM-DDTHH:MM:SS TZD] |
| **H049** Se tipo de serviço for Transporte de Valores e informado grupo infGTVe, para cada uma das chaves informadas:<br>- A GTVe não pode estar cancelada | Obrig. | 885 | Rej. | Rejeição: GTVe referenciada não pode estar cancelada<br>[chCTe: 99999999999999999999999999999999999999999999] |
| <!-- p.35 --> **H050** Se tipo de serviço for Transporte de Valores e informado grupo infGTVe, para cada uma das chaves informadas:<br>- A GTVe deve possuir o mesmo CNPJ de emitente do CTe OS. | Obrig. | 886 | Rej. | Rejeição: GTVe referenciada deve ser do mesmo emitente do CTe OS |
| **H051** Se tipo de serviço for Transporte de Valores e informado grupo infGTVe, para cada uma das chaves informadas:<br>- Não podem ser informadas chaves duplicadas de GTVe no CTe OS | Obrig. | 887 | Rej. | Rejeição: GTVe em duplicidade no CTe OS |
| **H052** Se tipo do componente da GTVe (infGTVe\Comp\tpComp) for igual a Outros (6), a tag xComp deve ser informada. | Obrig. | 898 | Rej. | Rejeição: O nome do componente da GTVe para o tipo outros deve ser informado |
| **H053** A soma dos valores componentes das GTVe (infGTVe\Comp\vComp) de todas as GTVe informadas deve ser igual ao valor total da Prestação do Serviço (vPrest\vTPrest)<br><br>**Observação:** deverá ser tolerada uma diferença de R$ 0,10 em virtude de arredondamento | Obrig. | 899 | Rej. | Rejeição: A soma dos componentes da GTVe deve ser igual ao valor da prestação do serviço |

## Validações de Valores

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **H054** Se Tipo do CTe= 0 (Normal) ou 3 (Substituição):<br>- Verificar se valor total do serviço não ultrapassa limite de R$ 9.999.999,99<br>OBS: A SEFAZ poderá aumentar o limite para contribuintes que operam com valores acima desse teto. | Obrig. | 650 | Rej. | Rejeição: Valor total do serviço superior ao limite permitido (R$ 9.999.999,99) |
| **H055** - Verificar se Valor do ICMS corresponde ao Valor da base de cálculo X Alíquota.<br>**Observação:** Aplicar a regra de acordo com o grupo de informações de imposto informado (infCte/imp/ICMS).<br>*Considerar uma tolerância de R$ 0,01 para mais ou para menos.* | Obrig. | 675 | Rej. | Rejeição: Valor do imposto não corresponde à base de cálculo X alíquota |
| **H056** Valor a receber (vRec) deve ser menor ou igual ao Valor da Prestação do Serviço (vtPrest) | Obrig. | 531 | Rej. | Rejeição: Valor a receber deve ser menor ou igual Valor da Prestação |
| **H057** Valor de INSS deve ser informado quando tomador for pessoa Jurídica (CNPJ informado) e tipo de serviço for igual a Transporte de Pessoas | Obrig. | 760 | Rej. | Rejeição: INSS deve ser preenchido para tomador pessoa jurídica |

## Validações de CFOP

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **H058** - Verificar se o CFOP informado pertence a operação de transporte.<br>**Observação:** Verificar a relação de CFOP válidos no item 12 do MOC Visão Geral | Obrig. | 676 | Rej. | Rejeição: CFOP informado inválido |

## Validações do CTe de Substituição

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **H059** Se Tipo do CTe= 3 (Substituição):<br>- O tipo de emissão deve ser normal | Obrig. | 503 | Rej. | Rejeição: CTe substituto deve ter tipo de emissão = normal |
| **H060** Se Tipo do CTe= 3 (Substituição):<br>- Deve existir o grupo de informações do CTe de substituição | Obrig. | 505 | Rej. | Rejeição: Grupo CTe de Substituição não informado para o CTe de Substituição |
| **H061** Se Tipo do CTe= 3 (Substituição):<br>- Validar chave de acesso do CTe OS substituído<br><!-- p.36 -->Retornar o motivo da rejeição da Chave de Acesso: CNPJ zerado ou inválido, Ano < 2009 ou maior que atual, Mês inválido (0 ou > 12), Modelo diferente de 67, Número zerado, Tipo de emissão inválido, UF inválida ou DV inválido)<br>[chCTe: 99999999999999999999999999999999999999999999]<br>[Motivo: XXXXXXXXXXXX] | Obrig. | 858 | Rej. | Rejeição: Chave de acesso do CTe OS substituído inválida |
| **H062** Se Tipo do CTe= 3 (Substituição):<br>- O CTe substituído deve existir<br>Acesso BD CTE (Chave: UF, CNPJ Emit, Modelo, Série, Nro) | Obrig. | 568 | Rej. | Rejeição: CTe a ser substituído inexistente |
| **H063** Se Tipo do CTe= 3 (Substituição):<br>- CTe substituído não pode existir com diferença na Chave de Acesso<br>Retornar a chave de acesso já autorizada, o número do protocolo e data de autorização do CTe<br>[chCTe: 99999999999999999999999999999999999999999999]<br>[nProt:999999999999999][dhAut: AAAA-MM-DDTHH:MM:SS TZD] | Obrig. | 673 | Rej. | Rejeição: CTe substituído com diferença de Chave de Acesso<br>[chCTe: 99999999999999999999999999999999999999999999]<br>[nProt:999999999999999][dhAut: AAAA-MM-DDTHH:MM:SS TZD] |
| **H064** Se Tipo do CTe= 3 (Substituição):<br>- O CTe substituído não pode estar cancelado | Obrig. | 569 | Rej. | Rejeição: CTe a ser substituído deve estar com a situação autorizada (não pode estar cancelado) |
| **H065** Se Tipo do CTe= 3 (Substituição):<br>- O CTe substituído não pode ter sido substituído anteriormente | Obrig. | 570 | Rej. | Rejeição: CTe a ser substituído não pode ter sido substituído anteriormente |
| **H066** Se Tipo do CTe= 3 (Substituição):<br>- O CTe substituído não pode ter sido complementado | Obrig. | 659 | Rej. | Rejeição: CTe substituído não pode ter sido complementado |
| **H067** Se Tipo do CTe=3 (Substituição):<br>- O CTe substituído deve possuir evento de Prestação do Serviço em Desacordo em situação autorizado.<br><br>**Observação:** Eventos de Cancelamento do Evento de Prestação em desacordo anulam eventos de Prestação em Descordo | Obrig. | 739 | Rej. | Rejeição: O CTe substituído deve possuir evento de Prestação do Serviço em Desacordo |
| **H068** Se Tipo do CTe= 3 (Substituição):<br>- O CTe substituído deve ser do Tipo = 0 (Normal) ou 3 (Substituição) | Obrig. | 571 | Rej. | Rejeição: CTe a ser substituído deve ter Tipo = 0 (normal) ou 3 (Substituição) |
| **H069** Se Tipo do CTe=3 (Substituição):<br>- CNPJ do emitente do CTe substituto deve ser igual ao informado no CTe substituído | Obrig. | 510 | Rej. | Rejeição: CNPJ do emitente do CTe substituto deve ser igual ao informado no CTe substituído |
| **H070** Se Tipo do CTe=3 (Substituição) e informado tomador:<br>- CNPJ/CPF do tomador do CTe substituto deve ser igual ao informado no CTe substituído | Obrig. | 552 | Rej. | Rejeição: O CNPJ/CPF do tomador do CTe substituto deve ser igual ao informado no CTe substituído |
| **H071** Se Tipo do CTe=3 (Substituição):<br>- IE do emitente do CTe substituto deve ser igual ao informado no CTe substituído | Obrig. | 553 | Rej. | Rejeição: A IE do emitente do CTe substituto deve ser igual ao informado no CTe substituído |
| **H072** Se Tipo do CTe=3 (Substituição):<br>- UF de início da prestação do CTe substituto deve ser igual ao informado no CTe substituído | Obrig. | 559 | Rej. | Rejeição: A UF de início da prestação deve ser igual ao informado no CTe substituído |
| **H073** Se Tipo do CTe=3 (Substituição):<br>- UF de fim da prestação do CTe substituto deve ser igual ao informado no CTe substituído | Obrig. | 560 | Rej. | Rejeição: A UF de fim da prestação deve ser igual ao informado no CTe substituído |
| <!-- p.37 -->**H074** Se Tipo do CTe= 3 (Substituição):<br>- O CTe substituído deve ser do mesmo tipo de serviço do CTe substituto | Obrig. | 834 | Rej | Rejeição: O tipo de serviço do CTe de substituição deve ser igual ao CTe substituído |
| **H075** Se Tipo do CTe=3 (Substituição):<br>- A autorização do CTe de substituição deve ocorrer em até 60 dias, ou outro limite conforme critério definido pela SEFAZ (a SEFAZ Virtual deve considerar a hora local do emissor para a validação) da data de autorização do CTe objeto substituição | Obrig. | 563 | Rej. | Rejeição: A substituição de um CTe deve ocorrer no prazo máximo de 60 dias contados da data de autorização do CTe objeto de Substituição |

## Validações da Data de Emissão

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **H076** Data/Hora de Emissão posterior à Data/Hora de Recebimento<br>(A SEFAZ Virtual deve considerar a hora local do emissor para a validação).<br>A SEFAZ deve tolerar uma diferença máxima de 5 minutos quando a data/hora de emissão for maior que a data de recebimento, em função da sincronização de horário de servidores. | Obrig. | 212 | Rej. | Rejeição: Data de emissão CTe posterior a data de recebimento |
| **H077** Se tipo de emissão for diferente de FS-DA (tpEmis=5)<br>Data-Hora de Emissão com atraso superior a 168 horas em relação ao horário de recepção na SEFAZ Autorizadora. | Obrig. | 228 | Rej. | Rejeição: Data de Emissão muito atrasada |

## Validações do Emitente

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **H078** Validar CNPJ Emitente (dígito controle, zeros ou nulo) | Obrig. | 207 | Rej. | Rejeição: CNPJ do emitente inválido |
| **H079** IE Emitente deve ser informada (zeros ou nulo) | Obrig. | 229 | Rej. | Rejeição: IE do emitente não informada |
| **H080** Validar IE Emitente (erro no dígito de controle)<br>**Observação:** Antes da validação, a IE deverá ser normalizada, na aplicação da SEFAZ, com o acréscimo de zeros não significativos previstos na definição do formato da IE, se necessário.<br>**Exemplo:** IE informada 130000019, formato da IE: NNNNNNNNNND, a IE deve ser padronizada para 00130000019, com o acréscimo dos zeros não significativos necessários para a validação do dígito verificador. | Obrig. | 209 | Rej. | Rejeição: IE do emitente inválida |
| **H081** Validar IE do Substituto Tributário, quando esta for informada (erro no dígito de controle)<br><br>**Observação:** Antes da validação, a IE deverá ser normalizada, na aplicação da SEFAZ, com o acréscimo de zeros não significativos previstos na definição do formato da IE, se necessário.<br><br>**Exemplo:** IE informada 130000019, formato da IE: NNNNNNNNNND, a IE deve ser padronizada para 00130000019, com o acréscimo dos zeros não significativos necessários para a validação do dígito verificador<br>Ex: A validação dessa IE deverá levar em consideração da UF do tomador<br>Esta regra estará dispensada quando o tomador não for informado | Obrig. | 614 | Rej. | Rejeição: IE do Substituto Tributário inválida |
| <!-- p.38 -->**H082** Acessar Cadastro de Emitentes (Chave: UF, IE):<br>- IE emitente não cadastrada | Facult. | 230 | Rej. | Rejeição: IE do emitente não cadastrada |
| **H083** IE Emitente deve estar vinculada ao CNPJ (tratar Regime Especial de IE única) | Obrig. | 231 | Rej. | Rejeição: IE do emitente não vinculada ao CNPJ |
| **H084** Emitente deve estar habilitado na base de dados para emissão do CTe<br>**Observação:** IE em situação irregular perante o fisco deve rejeitar por esta regra | Obrig. | 203 | Rej. | Rejeição: Emissor não habilitado para emissão do CTe |
| **H085** Município do Emitente deve pertencer à UF (verificar se as 2 posições da esquerda do código de município que identifica o código da UF é compatível com a sigla da UF informada) | Obrig. | 712 | Rej | Rejeição: Código de Município diverge da UF de localização do emitente |
| **H086** Código do Município do Emitente deve existir na Tabela Municípios do IBGE | Obrig. | 713 | Rej. | Rejeição: Município do Emitente inexistente |

## Validações do Tomador

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **H087** Se CNPJ Tomador informado:<br>- Validar CNPJ do Tomador (dígito de controle, zeros) | Obrig. | 444 | Rej. | Rejeição: CNPJ do tomador inválido |
| **H088** Se CPF Tomador informado:<br>- Validar CPF do Tomador (dígito de controle, zeros) | Obrig. | 445 | Rej. | Rejeição: CPF do tomador inválido |
| **H089** Se Tomador informado:<br>- Município deve pertencer à UF (verificar se as 2 posições da esquerda do código de município que identifica o código da UF estão de acordo com a sigla da UF informada) | Obrig. | 447 | Rej. | Rejeição: Código de Município diverge da UF de localização tomador |
| **H090** Se Tomador informado:<br>- Código do Município deve existir na Tabela Municípios do IBGE | Obrig. | 536 | Rej. | Rejeição: Município do Tomador inexistente |
| **H091** Se indicador de tomador for igual a Contribuinte (indIEToma=1):<br>- Rejeitar se o tomador não possuir informação da IE ou se estiver informado “ISENTO” | Obrig. | 481 | Rej. | Rejeição: IE deve ser informada para tomador Contribuinte |
| **H092** Se indicador de tomador for igual a Isento de Inscrição (indIEToma=2):<br>- Rejeitar se o tomador não possuir informação de IE ou se estiver informada diferente do literal “ISENTO” | Obrig. | 482 | Rej. | Rejeição: IE do tomador isento deve ser preenchida com “ISENTO” |
| **H093** Rejeitar quando informado tomador como Contribuinte Isento de Inscrição Estadual (indIEToma=2) em UF que não permite esta situação, conforme abaixo:<br>- AM, BA, CE, GO, MG, MS, MT, PE, RN, SE, SP | Obrig. | 617 | Rej. | Rejeição: IE do tomador inválida |
| **H094** Se IE Tomador informado:<br>- Validar IE do Tomador (erro no dígito de controle)<br><br>**Observação:** Antes da validação, a IE deverá ser normalizada, na aplicação da SEFAZ, com o acréscimo de zeros não significativos previstos na definição do formato da IE se necessário.<br>**Exemplo:** IE informada 130000019, formato da IE: NNNNNNNNNND, a IE deve ser padronizada para 00130000019, com o acréscimo dos zeros não significativos necessários para a validação do dígito verificador. | Obrig. | 448 | Rej. | Rejeição: IE do tomador inválida |
| <!-- p.39 -->**H095** Se IE Tomador informada:<br>Acessar Cadastro de Contribuinte da UF (Chave: IE Tomador) (\*1)<br>- IE deve estar cadastrada | Facult. | 489 | Rej. | Rejeição: IE do tomador não cadastrada |
| **H096** Se IE e CNPJ Tomador informados:<br>Acessar Cadastro de Contribuinte da UF (Chave: IE Tomador) (\*1)<br>- IE deve estar vinculada ao CNPJ | Facult. | 490 | Rej. | Rejeição: IE do tomador não vinculada ao CNPJ |
| **H097** Se IE Tomador = “ISENTO” ou não informada<br>Acessar Cadastro de Contribuinte da UF (\*1)<br>- Tomador possui IE ativa na UF | Facult. | 719 | Rej. | Rejeição: IE do Tomador não informada |

(\*1) Validação possível na operação interestadual ou no ambiente da SEFAZ Virtual utilizando o CCC-Cadastro Centralizado de Contribuintes

## Validações Banco de Dados CTe

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **H098** Acessar BD CTE (Chave: UF, CNPJ Emit, Modelo, Série, Nro):<br>- Verificar Duplicidade de CTe com diferença na Chave de Acesso (Campo de Código Numérico difere)<br>Retornar a chave de acesso já autorizada, o número do protocolo e data de autorização<br>[chCTe: 99999999999999999999999999999999999999999999]<br>[nProt:999999999999999][dhAut: AAAA-MM-DDTHH:MM:SS TZD] | Obrig. | 539 | Rej. | Rejeição: Duplicidade de CTe, com diferença na Chave de Acesso<br>[chCTe: 99999999999999999999999999999999999999999999]<br>[nProt:999999999999999][dhAut: AAAA-MM-DDTHH:MM:SS TZD] |
| **H099** Acessar BD CTE (Chave: UF, CNPJ Emit, Modelo, Série, Nro):<br>- Verificar Duplicidade de CTe<br>Retornar Protocolo e data de autorização.<br>[nProt:999999999999999][dhAut: AAAA-MM-DDTHH:MM:SS TZD].<br><br>**Observação:** Esta validação leva em consideração o ambiente de autorização do DF-e <!-- REVISAR p.39: a Observação de H099 termina em "do DF-e" na página; possível truncamento na fonte --> | Obrig. | 204 | Rej. | Rejeição: Duplicidade de CTe<br>[nProt:999999999999999][dhAut: AAAA-MM-DDTHH:MM:SS TZD] |
| **H100** Verificar se CTe está cancelado<br>Retornar Protocolo e data de autorização do cancelamento.<br>[nProt:999999999999999][dhCanc: AAAA-MM-DDTHH:MM:SS TZD]. | Obrig. | 218 | Rej. | Rejeição: CTe já está cancelado na base de dados da SEFAZ<br>[nProt:999999999999999][dhCanc: AAAA-MM-DDTHH:MM:SS TZD]. |

## Validações do CTe Complementar

**Observação:** Podem ser informados até 10 CTe que serão complementados pelo CTe complementar, as seguintes regras se aplicam a todos CTe informados

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **H101** Se Tipo do CTe = 1 (CTe complementar):<br>- Verificar se o Conhecimento complementado foi emitido pelo mesmo CNPJ. | Obrig. | 269 | Rej. | Rejeição: CNPJ Emitente do CTe Complementar difere do CNPJ do CT complementado |
| **H102** Se Tipo do CTe= 1 (Complementar):<br>- Validar chave de acesso do CTe OS complementado<br>Retornar o motivo da rejeição da Chave de Acesso: CNPJ zerado ou inválido, Ano < 2009 ou maior que atual, Mês inválido (0 ou > 12), Modelo diferente de 67, Número zerado, Tipo de emissão inválido, UF inválida ou DV inválido)<br>[chCTe: 99999999999999999999999999999999999999999999]<br><!-- p.40 -->[Motivo: XXXXXXXXXXXX] | Obrig. | 859 | Rej. | Rejeição: Chave de acesso do CTe OS complementado inválida |
| **H103** Se Tipo do CTe = 1 (CTe complementar):<br>- Verificar se existe o CTe complementado.<br>Acesso BD CTE (Chave: UF, CNPJ Emit, Modelo, Série, Nro) | Obrig. | 267 | Rej. | Rejeição: CTe Complementar referência um CTe inexistente |
| **H104** Se Tipo do CTe = 1 (CTe complementar):<br>Acessar BD CTE (Chave: UF, CNPJ Emit, Modelo, Série, Nro)<br>- Verificar se o CTe complementado existe com diferença na Chave de Acesso<br>Retornar a chave de acesso já autorizada, o número do protocolo e data de autorização do CTe<br>[chCTe: 99999999999999999999999999999999999999999999]<br>[nProt:999999999999999][dhAut: AAAA-MM-DDTHH:MM:SS TZD] | Obrig. | 671 | Rej. | Rejeição: CTe complementado no CTe complementar com diferença de Chave de Acesso<br>[chCTe: 99999999999999999999999999999999999999999999]<br>[nProt:999999999999999][dhAut: AAAA-MM-DDTHH:MM:SS TZD]. |
| **H105** Se Tipo do CTe = 1 (CTe complementar):<br>- CTe complementado deve ser do tipo Normal ou Substituição.<br>Acessar BD CTE (Chave: UF, CNPJ Emit, Modelo, Série, Nro) | Obrig. | 491 | Rej. | Rejeição: CTe complementado é diferente de Normal ou Substituição |
| **H106** Se Tipo do CTe = 1 (CTe complementar):<br>- Verificar se o CTe complementado está com Situação: Autorizado o Uso.<br>Acesso BD CTE (Chave: UF, CNPJ Emit, Modelo, Série, Nro) | Obrig. | 655 | Rej. | Rejeição: CTe complementado deve estar com a situação autorizada (não pode estar cancelado) |
| **H107** Se Tipo do CTe= 1 (Complementar):<br>- Verificar se o CTe complementado foi substituído. | Obrig. | 657 | Rej. | Rejeição: CTe complementado não pode ter sido substituído |
| **H108** Se Tipo do CT=e 1 (Complementar):<br>- Verificar o número de Complementos que o CTe complementado já recebeu, não podendo exceder o limite de 10 CTe complementares para um mesmo CTe. | Obrig. | 520 | Rej | Rejeição: CTe não pode receber mais do que 10 CTe Complementares |
| **H109** Se Tipo do CT=e 1 (Complementar) e informado Tomador:<br>- CNPJ/CPF do tomador do CTe complementar deve ser igual ao informado no CTe complementado | Obrig. | 804 | Rej | Rejeição: O CNPJ/CPF do tomador do CTe complementar deve ser igual ao informado no CTe complementado |
| **H110** Se Tipo do CT=e 1 (Complementar):<br>- IE do emitente do CTe complementar deve ser igual ao informado no CTe complementado | Obrig. | 805 | Rej | Rejeição: A IE do emitente do CTe complementar deve ser igual ao informado no CTe complementado |
| **H111** Se Tipo do CT=e 1 (Complementar):<br>- UF de início da prestação do CTe complementar deve ser igual ao informado no CTe complementado | Obrig. | 811 | Rej | Rejeição: A UF de início da prestação deve ser igual ao informado no CTe complementado |
| **H112** Se Tipo do CTe=1 (Complementar):<br>- UF de fim da prestação do CTe Complementar deve ser igual ao informado no CTe Complementado | Obrig. | 812 | Rej. | Rejeição: A UF de fim da prestação deve ser igual ao informado no CTe complementado |
| **H113** Se Tipo do CTe=1 (Complementar):<br>- O CTe complementar deve ser do mesmo tipo de serviço do CTe complementado | Obrig. | 835 | Rej. | Rejeição: O tipo de serviço do CTe complementar deve ser igual ao CTe complementado |
| **H114** Se Tipo do CTe=1 (Complementar) e informados múltiplos CTe para serem complementados:<br><!-- p.41 -->A chave de acesso do CTe complementada não pode estar repetida no CTe complementar | Obrig. | 907 | Rej. | Rejeição: CTe complementado não pode estar repetido no mesmo CTe Complementar |

## Validações do Início e Fim da Prestação

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **H115** Município de envio do CTe diverge da UF (verificar se as 2 posições da esquerda do código de município que identifica o código da UF estão de acordo com a sigla da UF informada) | Obrig. | 493 | Rej. | Rejeição: Código de Município diverge da UF de envio |
| **H116** Código do Município de envio do CTe inexistente (Tabela Municípios do IBGE) | Obrig. | 537 | Rej. | Rejeição: Município de Envio inexistente |
| **H117** Se informado Município de início da prestação:<br>- Verificar se diverge da UF (verificar se as 2 posições da esquerda do código de município que identifica o código da UF estão de acordo com a sigla da UF informada) | Obrig. | 456 | Rej. | Rejeição: Código de Município diverge da UF de início da prestação |
| **H118** Se informado Município de início da prestação:<br>- Verificar se existe na Tabela Municípios do IBGE | Obrig. | 541 | Rej. | Rejeição: Município de início da prestação inexistente |
| **H119** Se informado Município de término da prestação:<br>- Verificar se diverge da UF (verificar se as 2 posições da esquerda do código de município que identifica o código da UF estão de acordo com a sigla da UF informada) | Obrig. | 414 | Rej. | Rejeição: Código de Município diverge da UF de término da prestação |
| **H120** Se informado Município de término da prestação:<br>- Verificar se existe na Tabela Municípios do IBGE | Obrig. | 542 | Rej. | Rejeição: Município de término da prestação inexistente |

## Validações dos Autorizados ao XML do CTe OS

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **H121** Se informada autorização download XML com CNPJ:<br>- Validar CNPJ (zeros ou dígito inválido) | Obrig. | 699 | Rej. | Rejeição: CNPJ autorizado para download inválido |
| **H122** Se informada autorização download do XML com CPF:<br>- Validar CPF (zeros, nulo, números repetidos (111,222, etc.), ou dígito de controle inválido) | Obrig. | 700 | Rej. | Rejeição: CPF autorizado para download inválido |
| **H123** Se informada autorização download XML:<br>- Verificar se existe duplicidade de CPF/CNPJ informado no CTe | Obrig. | 715 | Rej | Rejeição: Documento autorizado ao XML duplicado no CTe |
| **H124** Verificar se CNPJ/CPF informado já não existe declarado como um dos atores do CTe | Obrig. | 828 | Rej. | Rejeição: CNPJ/CPF autorizado já declarado no CTe (remet/dest/exped/receb/tom) |

## Validações do Responsável Técnico

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **H125** Não informado o grupo de informações do responsável técnico<br>**Observação: Implementação à critério da UF** | Facul. | 867 | Rej. | Rejeição: Obrigatória as informações do responsável técnico |
| **H126** Se informado grupo do responsável técnico (infRespTec):<br>- Validar CNPJ (dígito controle, zeros ou nulo). | Obrig. | 836 | Rej. | Rejeição: CNPJ do desenvolvedor do sistema inválido (zerado ou dígito inválido) |
| **H127** Obrigatória a informação do identificador do CSRT (tag:idCSRT) e Hash do CSRT (tag: hashCSRT)<br><!-- p.42 -->**Observação: Implementação futura** | Facul. | 868 | Rej. | Rejeição: Obrigatória a informação do identificador do CSRT e do Hash do CSRT |

## Validações do QR Code

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **H128** O grupo de informações do QRCode (infCTeSupl) deve ser informado | Obrig. | 850 | Rej. | Rejeição: O QR Code do CTe deve ser informado |
| **H129** Endereço do site do Portal Nacional para a Consulta via QR Code difere do previsto.<br>Nota: O uso diferenciado de maiúsculas ou minúsculas não deve ser considerado na validação.<br>Observação: Para consultar as URLs utilizadas no QR Code, acesse: https://dfe-portal.svrs.rs.gov.br/CTe/Servicos | Obrig. | 851 | Rej. | Rejeição: Endereço do site da UF da Consulta via QR Code diverge do previsto |
| **H130** Parâmetro Chave de Acesso no QR Code diverge da Chave de Acesso do CTe | Obrig. | 852 | Rej. | Rejeição: Parâmetro chave de acesso do QR Code divergente do CTe |
| **H131** Se tipo de emissão for igual a FS-DA (tpEmis=5):<br>O parâmetro sign deve informado no QR-Code | Obrig. | 853 | Rej. | Rejeição: Parâmetro sign não informado no QR Code para emissão em contingência |
| **H132** Se tipo de emissão for igual a Normal ou SVC:<br>O parâmetro sign não deve ser informado no QR-Code | Obrig. | 854 | Rej. | Rejeição: Parâmetro sign não deve ser informado no QR Code para emissão Normal |
| **H133** Se tipo de emissão for igual FS-DA (tpEmis=5), EPEC (tpEmis=4):<br>Valor da assinatura (sign) do QR-Code difere do valor calculado | Obrig. | 855 | Rej. | Rejeição: Assinatura do QR-Code difere do calculado |

As validações referentes ao QR Code serão aplicadas somente após data previamente acertada entre Fisco e empresas, podendo essa data ser de prazo distinto e superior da data de entrada em produção deste MOC.

**Nota:** A critério da SEFAZ Autorizadora a mensagem de erro poderá receber um texto adicional detalhando melhor a rejeição ou passando alguma instrução ao contribuinte, observando que esta mensagem complementar deverá vir após a mensagem de rejeição do MOC, entre colchetes, com o literal “Det:

[Det: XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX]

**Nota 2:** Cada GTVe relacionada no CTe OS deverá receber o evento de marcação automático “Autorizado CTe OS” (240180).

Em caso de cancelamento do CTe OS, as mesmas GTVe deverão receber o evento “Cancelado CTe OS” (240181).
