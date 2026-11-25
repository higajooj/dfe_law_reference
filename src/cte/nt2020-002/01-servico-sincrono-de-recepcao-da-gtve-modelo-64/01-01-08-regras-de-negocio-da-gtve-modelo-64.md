# 1.1.8 Regras de negócio da GTVe (modelo 64)

## Validações Gerais

| # | Regra de Validação | Crítica | Msg | Efeito |
|---|---|---|---|---|
| **Q01** | Verificar se o tipo do ambiente da GTVe difere do ambiente do Web Service | Obrig. | 252 | Rej. |
| **Q02** | Se Tipo do Ambiente for igual 2 (homologação) o campo razão social (xNome) do remetente deve ser informado com a literal:<br>“CT-E EMITIDO EM AMBIENTE DE HOMOLOGACAO - SEM VALOR FISCAL” | Obrig. | 646 | Rej. |
| **Q03** | Se Tipo do Ambiente for igual 2 (homologação) o campo razão social (xNome) do destinatário deve ser informado com a literal:<br>“CT-E EMITIDO EM AMBIENTE DE HOMOLOGACAO - SEM VALOR FISCAL” | Obrig. | 649 | Rej. |
| **Q04** | A série informada não deve estar na faixa entre 890-899 (reservada) | Obrig. | 670 | Rej. |
| **Q05** | Código da UF do Emitente difere da UF Autorizadora | Obrig. | 226 | Rej. |
| **Q06** | Sigla da UF do Emitente difere da UF Autorizadora | Obrig. | 247 | Rej. |
| **Q07** | Se forma de emissão da GTVe for diferente de 2 (Contingência Off-line):<br>dhCont e xJust não devem ser informados | Obrig. | 874 | Rej. |
| **Q08** | Se forma de emissão da GTVe for igual a 2 (Contingência Off-line):<br>dhCont e xJust devem ser informados | Obrig. | 587 | Rej. |
| **Q09** | Se Data de entrada em contingência estiver informada, esta deve ser menor ou igual à data de emissão | Obrig. | 588 | Rej. |
| **Q10** | Se Ambiente de Autorização SVC:<br>- Tipo de Emissão difere do tpEmis da SVC (7=SVC-RS e 8=SVC-SP) | Obrig. | 516 | Rej. |
| **Q11** | Chave de acesso inválida (modelo diferente de 64) | Obrig. | 875 | Rej. |
| **Q12** | Verificar Campo ID:<br>- Falta literal "CTe"<br>- Chave de Acesso do campo ID difere da concatenação dos campos correspondentes | Obrig. | 227 | Rej. |
| **Q13** | Dígito Verificador inválido da Chave de acesso resultante da concatenação dos campos correspondentes | Obrig. | 253 | Rej. |
| **Q14** | Se indicador de tomador for igual a Contribuinte (indIEToma=1):<br>- Rejeitar se o tomador indicado (toma ou tomaTerceiro) não possuir informação da IE ou se estiver informado “ISENTO” | Obrig. | 481 | Rej. |
| **Q15** | Se indicador de tomador for igual a Isento de Inscrição (indIEToma=2):<br>- Rejeitar se o tomador indicado (toma ou tomaTerceiro) não possuir informação de IE ou se estiver informada diferente do literal “ISENTO” | Obrig. | 482 | Rej. |
| **Q16** | Rejeitar quando informado tomador como Contribuinte Isento de Inscrição Estadual (indIEToma=2) em UF que não permite esta situação, conforme abaixo:<br>- AM, BA, CE, GO, MG, MS, MT, PE, RN, SE, SP | Obrig. | 617 | Rej. |

## Validações da Data de Emissão

| # | Regra de Validação | Crítica | Msg | Efeito |
|---|---|---|---|---|
| **Q17** | Data/Hora de Emissão posterior à Data/Hora de Recebimento<br>(A SEFAZ Virtual deve considerar a hora local do emissor para a validação).<br>A SEFAZ deve tolerar uma diferença máxima de 5 minutos quando a data/hora de emissão for maior que a data de recebimento, em função da sincronização de horário de servidores. | Obrig. | 212 | Rej. |
| **Q18** | <!-- p.09 -->Se tipo de emissão for diferente de Contingência Off-line (tpEmis=2):<br>Data-Hora de Emissão com atraso superior a 30 dias em relação ao horário de recepção na SEFAZ Autorizadora. | Obrig. | 228 | Rej. |

## Validações do Emitente

| # | Regra de Validação | Crítica | Msg | Efeito |
|---|---|---|---|---|
| **Q19** | Validar CNPJ Emitente (dígito controle, zeros ou nulo) | Obrig. | 207 | Rej. |
| **Q20** | IE Emitente deve ser informada (zeros ou nulo) | Obrig. | 229 | Rej. |
| **Q21** | Validar IE Emitente (erro no dígito de controle)<br>Obs.: Antes da validação, a IE deverá ser normalizada, na aplicação da SEFAZ, com o acréscimo de zeros não significativos previstos na definição do formato da IE, se necessário.<br>Exemplo: IE informada 130000019, formato da IE: NNNNNNNNNND, a IE deve ser padronizada para 00130000019, com o acréscimo dos zeros não significativos necessários para a validação do dígito verificador. | Obrig. | 209 | Rej. |
| **Q22** | Validar IE do Substituto Tributário, quando esta for informada (erro no dígito de controle)<br>Observação: Antes da validação, a IE deverá ser normalizada, na aplicação da SEFAZ, com o acréscimo de zeros não significativos previstos na definição do formato da IE, se necessário.<br>Exemplo: IE informada 130000019, formato da IE: NNNNNNNNNND, a IE deve ser padronizada para 00130000019, com o acréscimo dos zeros não significativos necessários para a validação do dígito verificador<br>Exemplo: A validação dessa IE deverá levar em consideração da UF do tomador da GTVe | Obrig. | 614 | Rej. |
| **Q23** | Acessar Cadastro de Emitentes (Chave: UF, IE):<br>- IE emitente não cadastrada | Facult. | 230 | Rej. |
| **Q24** | - IE Emitente deve estar vinculada ao CNPJ (tratar Regime Especial de IE única) | Obrig. | 231 | Rej. |
| **Q25** | - Emitente deve estar habilitado na base de dados para emissão do CT-e OS | Obrig. | 203 | Rej. |
| **Q26** | - Emitente em situação irregular perante o Fisco | Obrig. | 301 | Rej. |
| **Q27** | Município do Emitente diverge da UF (verificar se as 2 posições da esquerda do código de município que identifica o código da UF é compatível com a sigla da UF informada) | Obrig. | 712 | Rej. |
| **Q28** | Código do Município Emitente inexistente (Tabela Municípios do IBGE) | Obrig. | 713 | Rej. |

## Validações do Remetente

| # | Regra de Validação | Crítica | Msg | Efeito |
|---|---|---|---|---|
| **Q29** | Se CNPJ Remetente informado:<br>- Validar CNPJ Remetente (dígito de controle, zeros) | Obrig. | 415 | Rej. |
| **Q30** | Se CPF Remetente informado:<br>- Validar CPF Remetente (dígito de controle, zeros) | Obrig. | 416 | Rej. |
| **Q31** | Município do Remetente deve pertencer à UF (verificar se as 2 posições da esquerda do código de município que identifica o código da UF é compatível com a sigla da UF informada) | Obrig. | 418 | Rej. |
| **Q32** | Código do Município do Remetente deve existir (Tabela Municípios do IBGE) | Obrig. | 532 | Rej. |
| **Q33** | Se IE Remetente informada:<br>- Validar IE do Remetente (erro no dígito de controle)<br>Observação: Antes da validação, a IE deverá ser normalizada, na aplicação da SEFAZ, com o acréscimo de zeros não significativos previstos na definição do formato da IE se necessário.<br>Exemplo: IE informada 130000019, formato da IE: NNNNNNNNNND, a IE deve ser padronizada para 00130000019, com o acréscimo dos zeros não significativos necessários para a validação do dígito verificador. | Obrig. | 419 | Rej. |
| **Q34** | Se IE Remetente informada:<br>Acessar Cadastro de Contribuinte da UF (Chave: IE Remet.) (\*1)<br>- IE deve estar cadastrada | Facult. | 421 | Rej. |
| **Q35** | Se IE e CNPJ Remetente informados:<br>Acessar Cadastro de Contribuinte da UF (Chave: IE Remet.) (\*1)<br>- IE deve estar vinculada ao CNPJ | Facult. | 422 | Rej. |
| **Q36** | Se IE Remetente = “ISENTO” ou não informada<br>Acessar Cadastro de Contribuinte da UF (\*1)<br>- Remetente possui IE ativa na UF | Facult. | 716 | Rej. |

(\*1) Validação possível na operação interestadual ou no ambiente da SEFAZ Virtual utilizando o CCC-Cadastro Centralizado de Contribuintes.

<!-- p.10 -->

## Validações do Destinatário

| # | Regra de Validação | Crítica | Msg | Efeito |
|---|---|---|---|---|
| **Q37** | Se CNPJ Destinatário informado:<br>- Validar CNPJ do Destinatário (dígito de controle, zeros) | Obrig. | 208 | Rej. |
| **Q38** | Se CPF Destinatário informado:<br>- Validar CPF do Destinatário (dígito de controle, zeros) | Obrig. | 237 | Rej. |
| **Q39** | Município do Destinatário deve pertencer à UF (verificar se as 2 posições da esquerda do código de município que identifica o código da UF estão de acordo com a sigla da UF informada) | Obrig. | 424 | Rej. |
| **Q40** | Código do Município do Destinatário deve existir (Tabela Municípios do IBGE) | Obrig. | 533 | Rej. |
| **Q41** | Se IE Destinatário informado:<br>- Validar IE do Destinatário (erro no dígito de controle ou conteúdo diferente de “ISENTO”)<br>Observação: Antes da validação, a IE deverá ser normalizada, na aplicação da SEFAZ, com o acréscimo de zeros não significativos previstos na definição do formato da IE se necessário.<br>Exemplo: IE informada 130000019, formato da IE: NNNNNNNNNND, a IE deve ser padronizada para 00130000019, com o acréscimo dos zeros não significativos necessários para a validação do dígito verificador. | Obrig. | 210 | Rej. |
| **Q42** | Se IE Destinatário informada:<br>Acessar Cadastro de Contribuinte da UF (Chave: IE Dest.) (\*1)<br>- IE deve estar cadastrada | Facult. | 426 | Rej. |
| **Q43** | Se IE e CNPJ Destinatário informados:<br>Acessar Cadastro de Contribuinte da UF (Chave: IE Dest.) (\*1)<br>- IE deve estar vinculada ao CNPJ (Tratar Regime Especial de IE única) | Facult. | 427 | Rej. |
| **Q44** | Se IE Destinatário = “ISENTO” ou não informada<br>Acessar Cadastro de Contribuinte da UF (\*1)<br>- Destinatário possui IE ativa na UF | Facult. | 232 | Rej. |
| **Q45** | Se Inscr. SUFRAMA do Destinatário informada:<br>- Verificar dígito controle da Inscr. SUFRAMA | Obrig. | 235 | Rej. |
| **Q46** | Se Inscr. SUFRAMA informada:<br>- Verificar UF destinatário = AC-Acre, ou AM-Amazonas, ou RO-Rondônia, ou RR-Roraima, ou AP-Amapá (só para municípios 1600303-Macapá e 1600600-Santana) | Obrig. | 251 | Rej. |

(\*1) Validação possível na operação interestadual ou no ambiente da SEFAZ Virtual utilizando o CCC-Cadastro Centralizado de Contribuintes

## Validações do Tomador (Aplicável ao tomador terceiro indicado no grupo tomaTerceiro)

| # | Regra de Validação | Crítica | Msg | Efeito |
|---|---|---|---|---|
| **Q47** | Se CNPJ Tomador informado:<br>- Validar CNPJ do Tomador (dígito de controle, zeros) | Obrig. | 444 | Rej. |
| **Q48** | Se CPF Tomador informado:<br>- Validar CPF do Tomador (dígito de controle, zeros) | Obrig. | 445 | Rej. |
| **Q49** | Se Tomador informado:<br>- Município deve pertencer à UF (verificar se as 2 posições da esquerda do código de município que identifica o código da UF estão de acordo com a sigla da UF informada) | Obrig. | 447 | Rej. |
| **Q50** | Se Tomador informado:<br>- Código do Município deve existir (Tabela Municipios do IBGE) | Obrig. | 536 | Rej. |
| **Q51** | Se IE Tomador informado:<br>- Validar IE do Tomador (erro no dígito de controle)<br>Observação: Antes da validação, a IE deverá ser normalizada, na aplicação da SEFAZ, com o acréscimo de zeros não significativos previstos na definição do formato da IE se necessário.<br>Exemplo: IE informada 130000019, formato da IE: NNNNNNNNNND, a IE deve ser padronizada para 00130000019, com o acréscimo dos zeros não significativos necessários para a validação do dígito verificador. | Obrig. | 448 | Rej. |
| **Q52** | Se IE Tomador informada:<br>Acessar Cadastro de Contribuinte da UF (Chave: IE Tomador) (\*1)<br>- IE deve estar cadastrada | Facult. | 489 | Rej. |
| **Q53** | Se IE e CNPJ Tomador informados:<br>Acessar Cadastro de Contribuinte da UF (Chave: IE Tomador) (\*1)<br>- IE deve estar vinculada ao CNPJ | Facult. | 490 | Rej. |
| **Q54** | Se IE Tomador = “ISENTO” ou não informada<br>Acessar Cadastro de Contribuinte da UF (\*1)<br>- Tomador possui IE ativa na UF | Facult. | 719 | Rej. |
| **Q55** | <!-- p.11 -->Se informado tomador terceiro:<br>- Verificar se o par CNPJ/IE ou CPF/IE do tomador terceiro existe declarado em um dos grupos: remetente ou destinatário | Obrig. | 799 | Rej. |

(\*1) Validação possível na operação interestadual ou no ambiente da SEFAZ Virtual utilizando o CCC-Cadastro Centralizado de Contribuintes

## Validações Banco de Dados GTVe

| # | Regra de Validação | Crítica | Msg | Efeito |
|---|---|---|---|---|
| **Q56** | Acessar BD CTE (Chave: CNPJ Emit, Modelo, Série, Nro):<br>- Verificar Duplicidade de GTVe com diferença na Chave de Acesso (Campo de Código Numérico difere)<br>Retornar a chave de acesso já autorizada, o número do protocolo e data de autorização.<br>[chCTe: 99999999999999999999999999999999999999999999]<br>[nProt:999999999999999][dhAut: AAAA-MM-DDTHH:MM:SS TZD] | Obrig. | 539 | Rej. |
| **Q57** | Acessar BD CTE (Chave: CNPJ Emit, Modelo, Série, Nro):<br>- Verificar Duplicidade de GTVe<br>Retornar Protocolo e data de autorização.<br>[nProt:999999999999999][dhAut: AAAA-MM-DDTHH:MM:SS TZD]. | Obrig. | 204 | Rej. |
| **Q58** | - Verificar se GTVe está cancelada<br>Retornar Protocolo e data de autorização do evento de cancelamento.<br>[nProt:999999999999999][dhCanc: AAAA-MM-DDTHH:MM:SS TZD] | Obrig. | 218 | Rej. |

## Validações de Município

| # | Regra de Validação | Crítica | Msg | Efeito |
|---|---|---|---|---|
| **Q59** | Município de envio da GTVe diverge da UF (verificar se as 2 posições da esquerda do código de município que identifica o código da UF estão de acordo com a sigla da UF informada) | Obrig. | 493 | Rej. |
| **Q60** | Código do Município de envio da GTVe inexistente (Tabela Municípios do IBGE) | Obrig. | 537 | Rej. |
| **Q61** | Se informado grupo origem da GTVe:<br>- Município de origem da GTVe diverge da UF (verificar se as 2 posições da esquerda do código de município que identifica o código da UF estão de acordo com a sigla da UF informada) | Obrig. | 877 | Rej. |
| **Q62** | Se informado grupo origem da GTVe:<br>Código do Município de origem inexistente (Tabela Municípios do IBGE) | Obrig. | 878 | Rej. |
| **Q63** | Se informado grupo destino da GTVe:<br>- Município de destino da GTVe diverge da UF (verificar se as 2 posições da esquerda do código de município que identifica o código da UF estão de acordo com a sigla da UF informada) | Obrig. | 879 | Rej. |
| **Q64** | Se informado grupo destino da GTVe:<br>Código do Município de destino da GTVe inexistente (Tabela Municípios do IBGE) | Obrig. | 880 | Rej. |

## Validações dos Autorizados ao XML da GTVe

| # | Regra de Validação | Crítica | Msg | Efeito |
|---|---|---|---|---|
| **Q65** | Se informada autorização download XML com CNPJ:<br>- Validar CNPJ (zeros ou dígito inválido) | Obrig. | 699 | Rej. |
| **Q66** | Se informada autorização download do XML com CPF:<br>- Validar CPF (zeros, nulo, números repetidos (111, 222, etc.), ou dígito de controle inválido) | Obrig. | 700 | Rej. |
| **Q67** | Se informada autorização download XML:<br>- Verificar se existe duplicidade de CPF/CNPJ informado na GTVe | Obrig. | 715 | Rej. |
| **Q68** | Verificar se CNPJ/CPF informado já não existe declarado como um dos atores da GTVe | Obrig. | 828 | Rej. |

## Validações do Responsável Técnico

| # | Regra de Validação | Crítica | Msg | Efeito |
|---|---|---|---|---|
| **Q69** | Não informado o grupo de informações do responsável técnico<br>Observação: Implementação à critério da UF | Facul. | 867 | Rej. |
| **Q70** | Se informado grupo do responsável técnico (infRespTec):<br>- Validar CNPJ (dígito controle, zeros ou nulo). | Facul. | 836 | Rej. |
| **Q71** | Obrigatória a informação do identificador do CSRT (tag:idCSRT) e Hash do CSRT (tag: hashCSRT)<br>Observação: Implementação à critério da UF | Facul. | 868 | Rej. |

<!-- p.12 -->

## Validações do QR Code

| # | Regra de Validação | Crítica | Msg | Efeito |
|---|---|---|---|---|
| **Q72** | O grupo de informações do QRCode (infCTeSupl) deve ser informado | Obrig. | 850 | Rej. |
| **Q73** | Endereço do site do Portal Nacional para a Consulta via QR Code difere do previsto.<br>Nota: O uso diferenciado de maiúsculas ou minúsculas não deve ser considerado na validação.<br>Observação: Para consultar as URLs utilizadas no QR Code, acesse: https://dfe-portal.svrs.rs.gov.br/CTe/Servicos | Obrig. | 851 | Rej. |
| **Q74** | Parâmetro Chave de Acesso no QR Code diverge da Chave de Acesso da GTVe | Obrig. | 852 | Rej. |
| **Q75** | Se tipo de emissão for igual a Contingência Off-line (tpEmis=2):<br>O parâmetro sign deve informado no QR-Code | Obrig. | 853 | Rej. |
| **Q76** | Se tipo de emissão for igual a Normal ou SVC:<br>O parâmetro sign não deve ser informado no QR-Code | Obrig. | 854 | Rej. |
| **Q77** | Se tipo de emissão for igual a Contingência Off-line (tpEmis=2):<br>Valor da assinatura (sign) do QR-Code difere do valor calculado | Obrig. | 855 | Rej. |
