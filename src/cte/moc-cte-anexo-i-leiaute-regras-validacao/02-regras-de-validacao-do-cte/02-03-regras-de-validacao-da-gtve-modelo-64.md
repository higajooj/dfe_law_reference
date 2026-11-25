# 2.3. Regras de Validação da GTVe (Modelo 64)

<!-- p.43 -->

As validações descritas a seguir aplicam-se a GTVe enviada ao serviço de recepção Síncrono (MOC Visão Geral - item 4.5).

| Grupo | Descrição |
|---|---|
| D | Validação do Certificado de Assinatura |
| E | Validação da Assinatura Digital |

## Validações Gerais

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **I01** Verificar se o tipo do ambiente da GTVe difere do ambiente do Web Service | Obrig. | 252 | Rej. | Rejeição: Ambiente informado diverge do Ambiente de recebimento |
| **I02** Se Tipo do Ambiente for igual 2 (homologação) o campo razão social (xNome) do remetente deve ser informado com a literal:<br>“CTE EMITIDO EM AMBIENTE DE HOMOLOGACAO - SEM VALOR FISCAL” | Obrig. | 646 | Rej. | Rejeição: CTe emitido em ambiente de homologação com Razão Social do remetente diferente de CTE EMITIDO EM AMBIENTE DE HOMOLOGACAO – SEM VALOR FISCAL |
| **I03** Se Tipo do Ambiente for igual 2 (homologação) o campo razão social (xNome) do destinatário deve ser informado com a literal:<br>“CTE EMITIDO EM AMBIENTE DE HOMOLOGACAO - SEM VALOR FISCAL” | Obrig. | 649 | Rej. | Rejeição: CTe emitido em ambiente de homologação com Razão Social do destinatário diferente de CTE EMITIDO EM AMBIENTE DE HOMOLOGACAO - SEM VALOR FISCAL |
| **I04** A série informada não deve estar na faixa entre 890-899 (reservada) | Obrig. | 670 | Rej. | Rejeição: Série utilizada não permitida no webservice |
| **I05** Sigla da UF do Emitente difere da UF da chave de acesso | Obrig. | 247 | Rej. | Rejeição: Sigla da UF do Emitente diverge da UF autorizadora |
| **I06** Se forma de emissão da GTVe for diferente de 2 (Contingência Off-line):<br>dhCont e xJust não devem ser informados | Obrig. | 874 | Rej. | Rejeição: Data e Justificativa de entrada em contingência não devem ser informadas para tipo de emissão diferente de Contingência Off-line |
| **I07** Se forma de emissão da GTVe for igual a 2 (Contingência Off-line):<br><!-- p.44 -->dhCont e xJust devem ser informados | Obrig. | 587 | Rej. | Rejeição: Data e Justificativa de entrada em contingência devem ser informadas |
| **I08** Se Data de entrada em contingência estiver informada, esta deve ser menor ou igual à data de emissão | Obrig. | 588 | Rej. | Rejeição: Data de entrada em contingência posterior a data de emissão. |
| **I09** Se Ambiente de Autorização SVC:<br>- Tipo de Emissão difere do tpEmis da SVC (7=SVC-RS e 8=SVC-SP) | Obrig. | 516 | Rej. | Rejeição: O tpEmis informado é incompatível com SVC-[SP/RS] |
| **I10** Chave de acesso inválida (modelo diferente de 64) | Obrig. | 875 | Rej. | Rejeição: Chave de acesso inválida (modelo diferente de 64) |
| **I11** Verificar Campo ID:<br>- Falta literal "CTe"<br>- Chave de Acesso do campo ID difere da concatenação dos campos correspondentes | Obrig. | 227 | Rej. | Rejeição: Erro na composição do Campo ID |
| **I12** Dígito Verificador inválido da Chave de acesso resultante da concatenação dos campos correspondentes | Obrig. | 253 | Rej. | Rejeição: Dígito Verificador da chave de acesso composta inválido |
| **I13** Se indicador de tomador for igual a Contribuinte (indIEToma=1):<br>- Rejeitar se o tomador indicado (toma ou tomaTerceiro) não possuir informação da IE ou se estiver informado “ISENTO” | Obrig. | 481 | Rej. | Rejeição: IE deve ser informada para tomador Contribuinte |
| **I14** Se indicador de tomador for igual a Isento de Inscrição (indIEToma=2):<br>- Rejeitar se o tomador indicado (toma ou tomaTerceiro) não possuir informação de IE ou se estiver informada diferente do literal “ISENTO" | Obrig. | 482 | Rej. | Rejeição: IE do tomador isento deve ser preenchida com “ISENTO” |
| **I15** Rejeitar quando informado tomador como Contribuinte Isento de Inscrição Estadual (indIEToma=2) em UF que não permite esta situação, conforme abaixo:<br>- AM, BA, CE, GO, MG, MS, MT, PE, RN, SE, SP | Obrig. | 617 | Rej. | Rejeição: UF do tomador não aceita ISENTO com Inscrição Estadual |

## Validações da Data de Emissão

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **I16** Data/Hora de Emissão posterior à Data/Hora de Recebimento<br>(A SEFAZ Virtual deve considerar a hora local do emissor para a validação).<br>A SEFAZ deve tolerar uma diferença máxima de 5 minutos quando a data/hora de emissão for maior que a data de recebimento, em função da sincronização de horário de servidores. | Obrig. | 212 | Rej. | Rejeição: Data de emissão CTe posterior a data de recebimento |
| **I17** Se tipo de emissão for diferente de Contingência Off-line (tpEmis=2):<br>Data-Hora de Emissão com atraso superior a 30 dias em relação ao horário de recepção na SEFAZ Autorizadora. | Obrig. | 228 | Rej. | Rejeição: Data de Emissão muito atrasada |

## Validações do Emitente

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **I18** Validar CNPJ Emitente (dígito controle, zeros ou nulo) | Obrig. | 207 | Rej. | Rejeição: CNPJ do emitente inválido |
| **I19** IE Emitente deve ser informada (zeros ou nulo) | Obrig. | 229 | Rej. | Rejeição: IE do emitente não informada |
| **I20** <!-- p.45 -->Validar IE Emitente (erro no dígito de controle)<br>Obs.: Antes da validação, a IE deverá ser normalizada, na aplicação da SEFAZ, com o acréscimo de zeros não significativos previstos na definição do formato da IE, se necessário.<br><br>**Exemplo:** IE informada 130000019, formato da IE: NNNNNNNNNND, a IE deve ser padronizada para 00130000019, com o acréscimo dos zeros não significativos necessários para a validação do dígito verificador. | Obrig. | 209 | Rej. | Rejeição: IE do emitente inválida |
| **I21** Validar IE do Substituto Tributário, quando esta for informada (erro no dígito de controle)<br>**Observação:** Antes da validação, a IE deverá ser normalizada, na aplicação da SEFAZ, com o acréscimo de zeros não significativos previstos na definição do formato da IE, se necessário.<br>**Exemplo:** IE informada 130000019, formato da IE: NNNNNNNNNND, a IE deve ser padronizada para 00130000019, com o acréscimo dos zeros não significativos necessários para a validação do dígito verificador<br>**Exemplo:** A validação dessa IE deverá levar em consideração da UF do tomador da GTVe | Obrig. | 614 | Rej. | |
| **I22** Acessar Cadastro de Emitentes (Chave: UF, IE):<br>- IE emitente não cadastrada | Facult. | 230 | Rej. | Rejeição: IE do emitente não cadastrada |
| **I23** - IE Emitente deve estar vinculada ao CNPJ (tratar Regime Especial de IE única) | Obrig. | 231 | Rej. | Rejeição: IE do emitente não vinculada ao CNPJ |
| **I24** - Emitente deve estar habilitado na base de dados para emissão do CTe OS<br><br>**Observação:** IE em situação irregular perante o fisco deve rejeitar por esta regra | Obrig. | 203 | Rej. | Rejeição: Emissor não habilitado para emissão do CTe |
| **I25** Município do Emitente diverge da UF (verificar se as 2 posições da esquerda do código de município que identifica o código da UF é compatível com a sigla da UF informada) | Obrig. | 712 | Rej. | Rejeição: Código de Município diverge da UF de localização do emitente |
| **I26** Código do Município Emitente inexistente (Tabela Municípios do IBGE) | Obrig. | 713 | Rej. | Rejeição: Município do Emitente inexistente |

## Validações do Remetente

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **I27** Se CNPJ Remetente informado:<br>- Validar CNPJ Remetente (dígito de controle, zeros) | Obrig. | 415 | Rej. | Rejeição: CNPJ do remetente inválido |
| **I28** Se CPF Remetente informado:<br>- Validar CPF Remetente (dígito de controle, zeros) | Obrig. | 416 | Rej. | Rejeição: CPF do remetente inválido |
| **I29** Município do Remetente deve pertencer à UF (verificar se as 2 posições da esquerda do código de município que identifica o código da UF é compatível com a sigla da UF informada) | Obrig. | 418 | Rej. | Rejeição: Código de Município diverge da UF de localização remetente |
| **I30** Código do Município do Remetente deve existir (Tabela Municípios do IBGE) | Obrig. | 532 | Rej. | Rejeição: Município do Remetente inexistente |
| **I31** <!-- p.46 -->Se IE Remetente informada:<br>- Validar IE do Remetente (erro no dígito de controle)<br><br>**Observação:** Antes da validação, a IE deverá ser normalizada, na aplicação da SEFAZ, com o acréscimo de zeros não significativos previstos na definição do formato da IE se necessário.<br>**Exemplo:** IE informada 130000019, formato da IE: NNNNNNNNNND, a IE deve ser padronizada para 00130000019, com o acréscimo dos zeros não significativos necessários para a validação do dígito verificador. | Obrig. | 419 | Rej. | Rejeição: IE do remetente inválida |
| **I32** Se IE Remetente informada:<br>Acessar Cadastro de Contribuinte da UF (Chave: IE Remet.) (*1)<br>- IE deve estar cadastrada | Facult. | 421 | Rej. | Rejeição: IE do remetente não cadastrada |
| **I33** Se IE e CNPJ Remetente informados:<br>Acessar Cadastro de Contribuinte da UF (Chave: IE Remet.) (*1)<br>- IE deve estar vinculada ao CNPJ | Facult. | 422 | Rej. | Rejeição: IE do remetente não vinculada ao CNPJ |
| **I34** Se IE Remetente = “ISENTO” ou não informada<br>Acessar Cadastro de Contribuinte da UF (*1)<br>- Remetente possui IE ativa na UF | Facult. | 716 | Rej. | Rejeição: IE do Remetente não informada |

(*1) Validação possível na operação interestadual ou no ambiente da SEFAZ Virtual utilizando o CCC-Cadastro Centralizado de Contribuintes.

## Validações do Destinatário

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **I35** Se CNPJ Destinatário informado:<br>- Validar CNPJ do Destinatário (dígito de controle, zeros) | Obrig. | 208 | Rej. | Rejeição: CNPJ do destinatário inválido |
| **I36** Se CPF Destinatário informado:<br>- Validar CPF do Destinatário (dígito de controle, zeros) | Obrig. | 237 | Rej. | Rejeição: CPF do destinatário inválido |
| **I37** Município do Destinatário deve pertencer à UF (verificar se as 2 posições da esquerda do código de município que identifica o código da UF estão de acordo com a sigla da UF informada) | Obrig. | 424 | Rej. | Rejeição: Código de Município diverge da UF de localização destinatário |
| **I38** Código do Município do Destinatário deve existir (Tabela Municípios do IBGE) | Obrig. | 533 | Rej. | Rejeição: Município do Destinatário inexistente |
| **I39** Se IE Destinatário informado:<br>- Validar IE do Destinatário (erro no dígito de controle ou conteúdo diferente de “ISENTO”)<br><br>**Observação:** Antes da validação, a IE deverá ser normalizada, na aplicação da SEFAZ, com o acréscimo de zeros não significativos previstos na definição do formato da IE se necessário.<br>**Exemplo:** IE informada 130000019, formato da IE: NNNNNNNNNND, a IE deve ser <!-- p.47 -->padronizada para 00130000019, com o acréscimo dos zeros não significativos necessários para a validação do dígito verificador. | Obrig. | 210 | Rej. | Rejeição: IE do destinatário inválida |
| **I40** Se IE Destinatário informada:<br>Acessar Cadastro de Contribuinte da UF (Chave: IE Dest.) (*1)<br>- IE deve estar cadastrada | Facult. | 426 | Rej. | Rejeição: IE do destinatário não cadastrada |
| **I41** Se IE e CNPJ Destinatário informados:<br>Acessar Cadastro de Contribuinte da UF (Chave: IE Dest.) (*1)<br>- IE deve estar vinculada ao CNPJ (Tratar Regime Especial de IE única) | Facult. | 427 | Rej. | Rejeição: IE do destinatário não vinculada ao CNPJ |
| **I42** Se IE Destinatário = “ISENTO” ou não informada<br>Acessar Cadastro de Contribuinte da UF (*1)<br>- Destinatário possui IE ativa na UF | Facult. | 232 | Rej. | Rejeição: IE do destinatário não informada |
| **I43** Se Inscr. SUFRAMA do Destinatário informada:<br>- Verificar dígito controle da Inscr. SUFRAMA | Obrig. | 235 | Rej. | Rejeição: Inscrição SUFRAMA inválida |
| **I44** Se Inscr. SUFRAMA informada:<br>- Verificar UF destinatário = AC-Acre, ou AM-Amazonas, ou RO-Rondônia, ou RR-Roraima, ou AP-Amapá (só para municípios 1600303-Macapá e 1600600-Santana) | Obrig. | 251 | Rej. | Rejeição: UF/Município destinatário não pertence a SUFRAMA |

(*1) Validação possível na operação interestadual ou no ambiente da SEFAZ Virtual utilizando o CCC-Cadastro Centralizado de Contribuintes

## Validações do Tomador (Aplicável ao tomador terceiro indicado no grupo tomaTerceiro)

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **I45** Se CNPJ Tomador informado:<br>- Validar CNPJ do Tomador (dígito de controle, zeros) | Obrig. | 444 | Rej. | Rejeição: CNPJ do tomador inválido |
| **I46** Se CPF Tomador informado:<br>- Validar CPF do Tomador (dígito de controle, zeros) | Obrig. | 445 | Rej. | Rejeição: CPF do tomador inválido |
| **I47** Se Tomador informado:<br>- Município deve pertencer à UF (verificar se as 2 posições da esquerda do código de município que identifica o código da UF estão de acordo com a sigla da UF informada) | Obrig. | 447 | Rej. | Rejeição: Código de Município diverge da UF de localização tomador |
| **I48** Se Tomador informado:<br>- Código do Município deve existir (Tabela Municipios do IBGE) | Obrig. | 536 | Rej. | Rejeição: Município do Tomador inexistente |
| **I49** Se IE Tomador informado:<br>- Validar IE do Tomador (erro no dígito de controle)<br><br>**Observação:** Antes da validação, a IE deverá ser normalizada, na aplicação da SEFAZ, com o acréscimo de zeros não significativos previstos na definição do formato da IE se necessário.<br>**Exemplo:** IE informada 130000019, formato da IE: NNNNNNNNNND, a IE deve ser <!-- p.48 -->padronizada para 00130000019, com o acréscimo dos zeros não significativos necessários para a validação do dígito verificador. | Obrig. | 448 | Rej. | Rejeição: IE do tomador inválida |
| **I50** Se IE Tomador informada:<br>Acessar Cadastro de Contribuinte da UF (Chave: IE Tomador) (*1)<br>- IE deve estar cadastrada | Facult. | 489 | Rej. | Rejeição: IE do tomador não cadastrada |
| **I51** Se IE e CNPJ Tomador informados:<br>Acessar Cadastro de Contribuinte da UF (Chave: IE Tomador) (*1)<br>- IE deve estar vinculada ao CNPJ | Facult. | 490 | Rej. | Rejeição: IE do tomador não vinculada ao CNPJ |
| **I52** Se IE Tomador = “ISENTO” ou não informada<br>Acessar Cadastro de Contribuinte da UF (*1)<br>- Tomador possui IE ativa na UF | Facult. | 719 | Rej. | Rejeição: IE do Tomador não informada |
| **I53** Se informado tomador terceiro:<br>- Verificar se o par CNPJ/IE ou CPF/IE do tomador terceiro existe declarado em um dos grupos: remetente ou destinatário | Obrig. | 799 | Rej. | Rejeição: Identificação do tomador utilizada em outro papel no CTe (CNPJ/CPF ou IE) |

(*1) Validação possível na operação interestadual ou no ambiente da SEFAZ Virtual utilizando o CCC-Cadastro Centralizado de Contribuintes

## Validações Banco de Dados GTVe

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **I54** Acessar BD CTE (Chave: UF, CNPJ Emit, Modelo, Série, Nro):<br>- Verificar Duplicidade de GTVe com diferença na Chave de Acesso<br>(Campo de Código Numérico difere)<br>Retornar a chave de acesso já autorizada, o número do protocolo e data de autorização<br>[chCTe: 99999999999999999999999999999999999999999999]<br>[nProt:999999999999999][dhAut: AAAA-MM-DDTHH:MM:SS TZD] | Obrig. | 539 | Rej. | Rejeição: Duplicidade de CTe, com diferença na Chave de Acesso<br>[chCTe: 9999999999999999999999999999999999999999999]<br>[nProt:999999999999999][dhAut: AAAA-MM-DDTHH:MM:SS TZD] |
| **I55** Acessar BD CTE (Chave: UF, CNPJ Emit, Modelo, Série, Nro):<br>- Verificar Duplicidade de GTVe<br>Retornar Protocolo e data de autorização.<br>[nProt:999999999999999][dhAut: AAAA-MM-DDTHH:MM:SS TZD].<br><br>**Observação:** Esta validação leva em consideração o ambiente de autorização do DF-e <!-- REVISAR p.48: a observação da I55 termina em "do DF-e", aparentando truncamento na fonte --> | Obrig. | 204 | Rej. | Rejeição: Duplicidade de CTe<br>[nProt:999999999999999][dhAut: AAAA-MM-DDTHH:MM:SS TZD] |
| **I56** - Verificar se GTVe está cancelada<br><!-- p.49 -->Retornar Protocolo e data de autorização do evento de cancelamento.<br>[nProt:999999999999999][dhCanc: AAAA-MM-DDTHH:MM:SS TZD] | Obrig. | 218 | Rej. | Rejeição: CTe já está cancelado na base de dados da SEFAZ<br>[nProt:999999999999999][dhCanc: AAAA-MM-DDTHH:MM:SS TZD]. |

## Validações de Município

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **I57** Município de envio da GTVe diverge da UF (verificar se as 2 posições da esquerda do código que identifica o código da UF estão de acordo com a sigla da UF informada) | Obrig. | 493 | Rej. | Rejeição: Código de Município diverge da UF de envio |
| **I58** Código do Município de envio da GTVe inexistente (Tabela Municípios do IBGE) | Obrig. | 537 | Rej. | Rejeição: Município de Envio inexistente |
| **I59** Se informado grupo origem da GTVe:<br>- Município de origem da GTVe diverge da UF (verificar se as 2 posições da esquerda do código de município que identifica o código da UF estão de acordo com a sigla da UF informada) | Obrig. | 877 | Rej. | Rejeição: Código de Município diverge da UF de origem |
| **I60** Se informado grupo origem da GTVe:<br>Código do Município de origem inexistente (Tabela Municípios do IBGE) | Obrig. | 878 | Rej. | Rejeição: Município de Origem inexistente |
| **I61** Se informado grupo destino da GTVe:<br>Município de destino da GTVe diverge da UF (verificar se as 2 posições da esquerda do código de município que identifica o código da UF estão de acordo com a sigla da UF informada) | Obrig. | 879 | Rej. | Rejeição: Código de Município diverge da UF de destino |
| **I62** Se informado grupo destino da GTVe:<br>Código do Município de destino da GTVe inexistente (Tabela Municípios do IBGE) | Obrig. | 880 | Rej. | Rejeição: Município de destino inexistente |

## Validações dos Autorizados ao XML da GTVe

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **I63** Se informada autorização download XML com CNPJ:<br>- Validar CNPJ (zeros ou dígito inválido) | Obrig. | 699 | Rej. | Rejeição: CNPJ autorizado para download inválido |
| **I64** Se informada autorização download do XML com CPF:<br>- Validar CPF (zeros, nulo, números repetidos (111, 222, etc.), ou dígito de controle inválido) | Obrig. | 700 | Rej. | Rejeição: CPF autorizado para download inválido |
| **I65** Se informada autorização download XML:<br>- Verificar se existe duplicidade de CPF/CNPJ informado na GTVe | Obrig. | 715 | Rej. | Rejeição: Documento autorizado ao XML duplicado no CTe |
| **I66** Verificar se CNPJ/CPF informado já não existe declarado como um dos atores da GTVe | Obrig. | 828 | Rej. | Rejeição: CNPJ/CPF autorizado já declarado no CTe (remet/dest/exped/receb/tom) |

## Validações do Responsável Técnico

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **I67** Não informado o grupo de informações do responsável técnico<br>**Observação: Implementação à critério da UF** | Facul. | 867 | Rej. | Rejeição: Obrigatória as informações do responsável técnico |
| **I68** <!-- p.50 -->Se informado grupo do responsável técnico (infRespTec):<br>- Validar CNPJ (dígito controle, zeros ou nulo). | Facul. | 836 | Rej. | Rejeição: CNPJ do desenvolvedor do sistema inválido (zerado ou dígito inválido) |
| **I69** Obrigatória a informação do identificador do CSRT (tag:idCSRT) e Hash do CSRT (tag: hashCSRT)<br>**Observação: Implementação à critério da UF** | Facul. | 868 | Rej. | Rejeição: Obrigatória a informação do identificador do CSRT e do Hash do CSRT |

## Validações do IR Code

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **I70** O grupo de informações do QRCode (infCTeSupl) deve ser informado | Obrig. | 850 | Rej. | Rejeição: O QR Code do CTe deve ser informado |
| **I71** Endereço do site do Portal Nacional para a Consulta via QR Code difere do previsto.<br>Nota: O uso diferenciado de maiúsculas ou minúsculas não deve ser considerado na validação.<br>Observação: Para consultar as URLs utilizadas no QR Code, acesse: https://dfe-portal.svrs.rs.gov.br/CTe/Servicos | Obrig. | 851 | Rej. | Rejeição: Endereço do site da UF da Consulta via QR Code diverge do previsto |
| **I72** Parâmetro Chave de Acesso no QR Code diverge da Chave de Acesso da GTVe | Obrig. | 852 | Rej. | Rejeição: Parâmetro chave de acesso do QR Code divergente do CTe |
| **I73** Se tipo de emissão for igual a Contingência Off-line (tpEmis=2):<br>O parâmetro sign deve informado no QR-Code | Obrig. | 853 | Rej. | Rejeição: Parâmetro sign não informado no QR Code para emissão em contingência |
| **I74** Se tipo de emissão for igual a Normal ou SVC:<br>O parâmetro sign não deve ser informado no QR-Code | Obrig. | 854 | Rej. | Rejeição: Parâmetro sign não deve ser informado no QR Code para emissão Normal |
| **I75** Se tipo de emissão for igual a Contingência Off-line (tpEmis=2):<br>Valor da assinatura (sign) do QR-Code difere do valor calculado | Obrig. | 855 | Rej. | Rejeição: Assinatura do QR-Code difere do calculado |

**Nota**: A critério da SEFAZ Autorizadora a mensagem de erro poderá receber um texto adicional detalhando melhor a rejeição ou passando alguma instrução ao contribuinte, observando que esta mensagem complementar deverá vir após a mensagem de rejeição do MOC, entre colchetes, com o literal “Det:

[Det: XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX]
