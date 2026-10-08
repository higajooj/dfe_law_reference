<!-- p.71 -->

# 4.1. Regras de Validação Gerais

## 4.1.1. Grupo A: Validação do Certificado de Transmissão (protocolo TLS)

As validações de A01, A02, A03, A04 e A05 são realizadas pelo protocolo TLS e não precisam ser implementadas. A validação A06 também pode ser realizada pelo protocolo TLS, mas pode falhar se existirem outros certificados digitais de Autoridade Certificadora Raiz que não sejam “ICP-Brasil” no repositório de certificados digitais do servidor de Web Service da SEFAZ.

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|
| A01 | Certificado de Transmissor Inválido: - Certificado de Transmissor inexistente na mensagem - Versão difere "3" - Se informado, Basic Constraint deve ser true (não pode ser Certificado de AC) - KeyUsage não define "Autenticação Cliente" | Obrig. | 280 | Rej. | Rejeição: Certificado Transmissor inválido |
| A02 | Validade do Certificado (data início e data fim) | Obrig. | 281 | Rej. | Rejeição: Certificado Transmissor Data Validade |
| A03 | Verifica a Cadeia de Certificação: - Certificado da AC emissora não cadastrado na SEFAZ - Certificado de AC revogado - Certificado não assinado pela AC emissora do Certificado | Obrig. | 283 | Rej. | Rejeição: Certificado Transmissor - erro Cadeia de Certificação |
| A04 | LCR do Certificado de Transmissor - Falta o endereço da LCR (CRL DistributionPoint) - LCR indisponível - LCR inválida | Obrig. | 286 | Rej. | Rejeição: Certificado Transmissor erro no acesso a LCR |
| A05 | Certificado do Transmissor revogado | Obrig. | 284 | Rej. | Rejeição: Certificado Transmissor revogado |
| A06 | Certificado Raiz difere da "ICP-Brasil" | Obrig. | 285 | Rej. | Rejeição: Certificado Transmissor difere ICP-Brasil |
| A07 | Falta a extensão de CNPJ no Certificado (OtherName - OID=2.16.76.1.3.3) ou a extensão de CPF (OtherName - OID=2.16.76.1.3.1) (NT 2018.001) | Obrig. | 282 | Rej. | Rejeição: Certificado Transmissor sem CNPJ/CPF |

## 4.1.2. Grupo B: Validação Inicial da Mensagem no Web Service

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|
| B01 | Tamanho do XML de Dados superior a 500 KB | Obrig. | 214 | Rej. | Rejeição: Tamanho da mensagem excedeu o limite estabelecido |
| B02 | XML de Dados Malformado | Facul. | 243 | Rej. | Rejeição: XML Mal Formado |
| B03 | Verifica se o Servidor de Processamento está Paralisado Momentaneamente | Obrig. | 108 | Rej. | Rejeição: Serviço Paralisado Momentaneamente (curto prazo) |
| B04 | Verifica se o Servidor de Processamento está Paralisado sem Previsão | Obrig. | 109 | Rej. | Rejeição: Serviço Paralisado sem Previsão |
| B05 | Verifica se UF informada é atendida pelo Webservice (NT 2018.004) | Obrig. | 410 | Rej. | Rejeição: UF informada no campo cUF não é atendida pelo WebService |
| B06 | Verifica se versão do XML é suportada (NT 2018.004) | Obrig. | 239 | Rej. | Rejeição: Versão do arquivo XML não suportada |

<!-- p.72 -->

A mensagem será descartada se o tamanho exceder o limite previsto (500 KB) A aplicação do contribuinte não poderá permitir a geração de mensagem com tamanho superior a 500 KB. Caso isto ocorra, a conexão poderá ser interrompida sem mensagem de erro se o controle do tamanho da mensagem for implementado por configurações do ambiente de rede da SEFAZ (ex.: controle no firewall). No caso do controle de tamanho ser implementado por aplicativo teremos a devolução da mensagem de erro 214.

As unidades federadas que mantêm o Web Service disponível, mesmo quando o serviço estiver paralisado, deverão implementar as verificações 108 e 109. Estas validações poderão ser dispensadas se o Web Service não ficar disponível quando o serviço estiver paralisado.

## 4.1.3. Grupo D: Validação da Área de Dados

### D. Validação de forma da área de dados

A validação de forma da área de dados da mensagem é realizada com a aplicação da seguinte regra:

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|
| D01 | Verifica Schema XML da Área de Dados (WS Autorização) | Obrig. | 225 | Rej. | Rejeição: Falha no Schema XML do lote de NFe |
| D01 | Verifica Schema XML da Área de Dados | Obrig. | 215 | Rej. | Rejeição: Falha no schema XML |

D01a Em caso de Falha de Schema, verificar se existe a tag raiz esperada para o lote (WS Facul. 565 Rej. Rejeição: Falha no schema XML – inexiste a tag raiz esperada para o lote de NF-e

Autorização)

D01a Em caso de Falha de Schema, verificar se existe a tag raiz esperada para mensagem Facul. 516 Rej. Rejeição: Falha no schema XML – inexiste a tag raiz esperada para a mensagem D01b Em caso de Falha de Schema, verificar se existe o atributo versao para a tag raiz da Facul. 568 Rej. Rejeição: Falha no schema XML – inexiste atributo versao na tag raiz do lote de NF-

mensagem e

D01b Em caso de Falha de Schema, verificar se existe o atributo versao para a tag raiz da Facul. 517 Rej. Rejeição: Falha no schema XML – inexiste atributo versao na tag raiz da mensagem

mensagem

D01d Verifica a existência de qualquer namespace diverso do namespace padrão da NF-e Facul. 587 Rej. Rejeição: Usar somente o namespace padrão da NF-e

(http://www.portalfiscal.inf.br/nfe)

D01e Verifica a existência de caracteres de edição no início ou fim da mensagem ou Facul. 588 Rej. Rejeição: Não é permitida a presença de caracteres de edição no início/fim da

entre as tags mensagem ou entre as tags da mensagem

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|
| D02 | Verifica o uso de prefixo no namespace | Obrig. | 404 | Rej. | Rejeição: Uso de prefixo de namespace não permitido |
| D03 | XML utiliza codificação diferente de UTF-8 | Obrig. | 402 | Rej. | Rejeição: XML da área de dados com codificação diferente de UTF-8 |

As validações D01a, D01b são de aplicação facultativa e podem ser aplicadas sucessivamente quando ocorrer falha na validação D01.

Como a validação do Schema XML é realizada em toda mensagem de entrada, a existência de um erro em uma NF-e implica na rejeição de todo o lote.

<!-- p.73 -->

### DA. Autorização – Área de dados do lote de NF-e

A aplicação da SEFAZ deverá verificar se a empresa enviou um Lote solicitando a resposta síncrona, mas o Lote contém mais de uma NF-e. Caso a SEFAZ Autorizadora não implemente o processamento síncrono poderá rejeitar os lotes que solicitam resposta síncrona.

GAP03a-1 Solicitada resposta síncrona para Lote com mais de uma NF-e (indSinc=1) Obrig. 764 Rej. Rejeição: Solicitada resposta síncrona para Lote com mais de uma NF-e (indSinc=1) GAP03a-2 Solicitada resposta síncrona para UF que não disponibiliza este atendimento Facul. 776 Rej. Rejeição: Solicitada resposta síncrona para UF que não disponibiliza este

(indSinc=1) atendimento (indSinc=1)

### DB. Extração dos eventos do lote e validação do Schema XML do evento

A aplicação deve extrair os eventos do lote para tratar individualmente os eventos, a princípio não existe necessidade de que todos os eventos sejam do mesmo tipo.

A escolha do Schema XML aplicável para o evento é realizado com base no tipo do evento tpEvento combinado com a verEvento, assim, a aplicação deve manter um controle dos tpEvento válidos e as verEvento em vigência e o respectivo Schema XML.

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|
| D04 | Verifica se o tpEvento é válido | Obrig. | 491 | Rej. | Rejeição: O tpEvento informado inválido |
| D05 | Verifica se o verEvento é válido | Obrig. | 492 | Rej. | Rejeição: O verEvento informado inválido |
| D06 | Verifica se o detEvento atende o respectivo schema XML | Obrig. | 493 | Rej. | Rejeição: Evento não atende o Schema XML específico |

## 4.1.4. Grupo E: Validação do Certificado Digital de Assinatura

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|
| E01 | Certificado de Assinatura inválido: - Certificado de Assinatura inexistente na mensagem (*validado também pelo Schema) - Versão difere "3" - Se informado o Basic Constraint deve ser true (não pode ser Certificado de AC) - KeyUsage não define "Assinatura Digital" e “Não Recusa” | Obrig. | 290 | Rej. | Rejeição: Certificado Assinatura inválido |
| E02 | Validade do Certificado (data início e data fim) | Obrig. | 291 | Rej. | Rejeição: Certificado Assinatura Data Validade |
| E03 | Falta a extensão de CNPJ no Certificado (OtherName OID=2.16.76.1.3.3) ou a extensão de CPF (OtherName OID=2.16.76.1.3.1) (NT 2018.001) | Obrig. | 292 | Rej. | Rejeição: Certificado de Assinatura sem CNPJ/CPF |
| E04 | Verifica Cadeia de Certificação: - Certificado da AC emissora não cadastrado na SEFAZ - Certificado de AC revogado - Certificado não assinado pela AC emissora do Certificado | Obrig. | 293 | Rej. | Rejeição: Certificado Assinatura - erro Cadeia de Certificação |
| E05 | LCR do Certificado de Assinatura: - Falta o endereço da LCR (CRLDistributionPoint) - Erro no acesso a LCR ou LCR inexistente | Obrig. | 296 | Rej. | Rejeição: Certificado Assinatura erro no acesso a LCR <!-- p.74 --> |
| E06 | Certificado de Assinatura revogado | Obrig. | 294 | Rej. | Rejeição: Certificado Assinatura revogado |
| E07 | Certificado Raiz difere da “ICP-Brasil” | Obrig. | 295 | Rej. | Rejeição: Certificado Assinatura difere ICP-Brasil |

## 4.1.5. Grupo F: Validação da Assinatura Digital

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|
| F01 | Assinatura difere do padrão do Sistema: - Não assinado o atributo "Id" (falta "Reference URI" na assinatura) (*validado também pelo Schema) - Faltam os "Transform Algorithm" previstos na assinatura ("C14N" e "Enveloped") Estas validações são implementadas pelo Schema XML da Signature | Obrig. | 298 | Rej. | Rejeição: Assinatura difere do padrão do Sistema |
| F02 | Valor da assinatura (SignatureValue) difere do valor calculado | Obrig. | 297 | Rej. | Rejeição: Assinatura difere do calculado |
| F03 | Se Certificado de Assinatura com CNPJ e CNPJ do Certificado difere do CNPJ da SEFAZ para a UF: - CNPJ-Base do Emitente difere do CNPJ-Base do Certificado Digital (NT 2018.001) | Obrig. | 213 | Rej. | Rejeição: CNPJ-Base do Emitente difere do CNPJ-Base do Certificado Digital |

F03A Se Certificado de Assinatura com CPF: Obrig. 227 Rej. Rejeição: CPF do Emitente difere do CPF do Certificado Digital

- CPF do Emitente difere do CPF do Certificado Digital (NT 2018.001)
