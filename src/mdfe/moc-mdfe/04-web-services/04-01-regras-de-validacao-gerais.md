<!-- p.32 -->
# 4.1 Regras de Validação Gerais

Os quadros a seguir representam as regras de validação genéricas para os serviços do MDFe. Os quadros serão relacionados a cada serviço conforme a necessidade, além das regras específicas de cada Web Service.

## 4.1.1 Grupo A: Validação do Certificado de Transmissão (protocolo TLS)

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|
| A01 | Certificado de Transmissor Inválido: <br>- Certificado de Transmissor inexistente na mensagem<br>- Versão difere "3"<br>- Se informado, Basic Constraint deve ser true (não pode ser Certificado de AC)<br>- KeyUsage não define "Autenticação Cliente" | Obrig. | 280 | Rej. | Rejeição: Certificado Transmissor inválido |
| A02 | Validade do Certificado (data início e data fim) | Obrig. | 281 | Rej. | Rejeição: Certificado Transmissor Data Validade |
| A03 | Verificar a Cadeia de Certificação: <br>- Certificado da AC emissora não cadastrado na SEFAZ<br>- Certificado de AC revogado<br>- Certificado não assinado pela AC emissora do Certificado | Obrig. | 283 | Rej. | Rejeição: Certificado Transmissor - erro Cadeia de Certificação |
| A04 | LCR do Certificado de Transmissor <br>- Falta o endereço da LCR (CRL DistributionPoint)<br>- LCR indisponível<br>- LCR inválida | Obrig. | 286 | Rej. | Rejeição: Certificado Transmissor erro no acesso a LCR |
| A05 | Certificado do Transmissor revogado | Obrig. | 284 | Rej. | Rejeição: Certificado Transmissor revogado |
| A06 | Certificado Raiz difere da "ICP-Brasil" | Obrig. | 285 | Rej. | Rejeição: Certificado Transmissor difere ICP-Brasil |
| A07 | Falta a extensão de CNPJ no Certificado (OtherName - OID=2.16.76.1.3.3) ou a extensão de CPF (OtherName - OID=2.16.76.1.3.1). | Obrig. | 282 | Rej. | Rejeição: Certificado Transmissor sem CNPJ / CPF |

As validações de A01, A02, A03, A04 e A05 são realizadas pelo protocolo TLS e não precisam ser implementadas. A validação A06 também pode ser realizada pelo protocolo, mas pode falhar se existirem outros certificados digitais de Autoridade Certificadora Raiz que não sejam "ICP-Brasil" no repositório de certificados digitais do servidor de Web Service da SEFAZ.

## 4.1.2 Grupo A-1: Validação do Certificado de Transmissão (Regime Especial NFF)

| # | Regra de Validação | Aplic | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|
| A08 | Se a forma de emissão (tpEmis) do MDFe for Regime Especial da Nota Fiscal Fácil (3): <br>Rejeitar se o certificado de transmissor for diferente do certificado e-CNPJ da SEFAZ Virtual RS | Obrig. | 900 | Rej. | Rejeição: MDFe do Regime Especial da Nota fiscal fácil deve ser transmitido exclusivamente pelo e-CNPJ da SVRS |

<!-- p.33 -->

## 4.1.3 Grupo A-2: Validação do Certificado de Transmissão (Regime Especial NFF)

| # | Regra de Validação | Aplic | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|
| A09 | Se a forma de emissão (tpEmis) da chave de acesso do MDFe for Regime Especial da Nota Fiscal Fácil (3): <br>Rejeitar se o certificado de transmissor for diferente do certificado e-CNPJ da SEFAZ Virtual RS para os eventos do emissor (por exemplo: Cancelamento, Encerramento) | Obrig. | 904 | Rej. | Rejeição: Evento de emitente do MDFe do Regime Especial da Nota fiscal fácil deve ser transmitido exclusivamente pelo e-CNPJ da SVRS |

## 4.1.4 Grupo B-0: Validação da Compactação da Mensagem

O sistema do autorizador deverá descompactar mensagem da área de Dados. Todas as validações serão aplicadas sobre o XML já descompactado.

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|
| B00 | Verificar compactação da mensagem da área de dados | Obrig. | 244 | Rej. | Rejeição: Falha na descompactação da área de dados |

## 4.1.5 Grupo B: Validação Inicial da Mensagem no Web Service

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|
| B01 | Tamanho do XML de Dados superior ao limite | Obrig. | 214 | Rej. | Rejeição: Tamanho da mensagem excedeu o limite estabelecido |
| B02 | XML de Dados Malformado | Obrig. | 243 | Rej. | Rejeição: XML Mal-formado |
| B03 | Verificar se o Serviço de processamento está Paralisado Momentaneamente | Obrig. | 108 | Rej. | Serviço Paralisado Momentaneamente (curto prazo) |
| B04 | Verificar se o Serviço de processamento está Paralisado sem Previsão | Obrig. | 109 | Rej. | Serviço Paralisado sem Previsão |

A mensagem será descartada se o tamanho exceder o limite previsto (2048 KB). A aplicação do contribuinte não poderá permitir a geração de mensagem com tamanho superior a 2048 KB. Caso isto ocorra, a conexão poderá ser interrompida sem mensagem de erro se o controle do tamanho da mensagem for implementado por configurações do ambiente de autorização (ex.: controle no firewall). No caso de o controle de tamanho ser implementado por aplicativo teremos a devolução da mensagem de erro 214.

O Ambiente Autorizador que mantêm o Web Service disponível, mesmo quando o serviço estiver paralisado, deverá implementar as verificações 108 e 109. Estas validações poderão ser dispensadas se o Web Service não ficar disponível quando o serviço estiver paralisado.

## 4.1.6 Grupo C: Validação da área de dados da mensagem

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|
| C01 | Verificar Schema XML da Área de Dados | Obrig. | 215 | Rej. | Rejeição: Falha no schema XML |
| C02 | Verificar a existência de qualquer namespace diverso do namespace padrão do projeto (http://www.portalfiscal.inf.br/mdfe) | Obrig. | 598 | Rej. | Rejeição: Usar somente o namespace padrão do MDFe |
| C03 | Verificar a existência de caracteres de edição no início ou fim da mensagem ou entre as tags | Obrig. | 599 | Rej. | Rejeição: Não é permitida a presença de caracteres de edição no início/fim da mensagem ou entre as tags da mensagem |

<!-- p.34 -->

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|
| C04 | Verificar o uso de prefixo no namespace | Obrig. | 404 | Rej. | Rejeição: Uso de prefixo de namespace não permitido |
| C05 | Verificar se o XML utiliza codificação diferente de UTF-8 | Obrig. | 402 | Rej. | Rejeição: XML da área de dados com codificação diferente de UTF-8 |
| C06 | Verificar se a versão do XML é suportada | Obrig. | 239 | Rej. | Rejeição: Versão informada para o MDFe não suportada |

A existência de qualquer erro na validação de forma da área de dados implica a rejeição do MDFe.

A validação do schema XML do MDFe pelo Ambiente Autorizador deverá ser feita em duas etapas:

1. A primeira etapa deve validar a estrutura genérica do arquivo, submetendo a mensagem contra o schema XML definido para ele. Em caso de erro, retornar o código 215;
2. A segunda etapa (definida no Anexo I do MOC) deve validar a estrutura específica do modal. Em caso de erro, retornar o código 580.

## 4.1.7 Grupo D: Validações do Certificado de Assinatura Digital

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|
| D01 | Certificado de Assinatura Inválido: <br>- Certificado de Assinatura inexistente na mensagem<br>- Versão difere "3"<br>- Basic Constraint = true (não pode ser Certificado de AC)<br>- KeyUsage não define "Autenticação Cliente" | Obrig. | 290 | Rej. | Rejeição: Certificado Assinatura inválido |
| D02 | Validade do Certificado (data início e data fim) | Obrig. | 291 | Rej. | Rejeição: Certificado Assinatura Data Validade |
| D03 | Falta a extensão de CNPJ no Certificado (OtherName - OID=2.16.76.1.3.3 ou a extensão de CPF (OtherName - OID=2.16.76.1.3.1). | Obrig. | 292 | Rej. | Rejeição: Certificado Assinatura sem CNPJ / CPF |
| D04 | Verificar a Cadeia de Certificação: <br>- Certificado da AC emissora não cadastrado na SEFAZ<br>- Certificado de AC revogado<br>- Certificado não assinado pela AC emissora do Certificado | Obrig. | 293 | Rej. | Rejeição: Certificado Assinatura - erro Cadeia de Certificação |
| D05 | LCR do Certificado de Assinatura <br>- Falta o endereço da LCR (CRL DistributionPoint)<br>- Erro no acesso à LCR | Obrig. | 296 | Rej. | Rejeição: Certificado Assinatura erro no acesso a LCR |
| D06 | Certificado de Assinatura revogado | Obrig. | 294 | Rej. | Rejeição: Certificado Assinatura revogado |
| D07 | Certificado Raiz difere da "ICP-Brasil" | Obrig. | 295 | Rej. | Rejeição: Certificado Assinatura difere ICP-Brasil |

## 4.1.8 Grupo E: Validações da Assinatura Digital

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|
| E01 | Assinatura difere do padrão do Projeto: <br>- Não assinado o atributo "ID" (falta "Reference URI" na assinatura) (*validado também pelo Schema)<br>- Faltam os "Transform Algorithm" previstos na assinatura ("C14N" e "Enveloped")<br>Estas validações são implementadas pelo Schema XML da Signature | Obrig. | 298 | Rej. | Rejeição: Assinatura difere do padrão do Projeto |
| E02 | Valor da assinatura (SignatureValue) difere do valor calculado | Obrig. | 297 | Rej. | Rejeição: Assinatura difere do calculado |

<!-- p.35 -->

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|
| E03 | Se Certificado conter CNPJ do emitente: CNPJ-Base do Emitente difere do CNPJ-Base do Certificado Digital<br>**Exceção:** Se a forma de emissão do MDFe for Regime Especial da Nota Fiscal Fácil, o CNPJ de assinatura será o e-CNPJ da SVRS para o serviço de recepção ou para os eventos do emitente (por exemplo: Cancelamento e encerramento)<br>**Exceção 2:** Se o MDFe / Evento possuir indicação de uso do Provedor de Assinatura e Autorização (grupo: infPAA) esta regra não será aplicada. | Obrig. | 213 | Rej. | Rejeição: CNPJ-Base do Emitente difere do CNPJ-Base do Certificado Digital |
| E04 | Se Certificado conter CPF do emitente: CPF do Emitente difere do CPF do Certificado Digital | Obrig. | 202 | Rej. | Rejeição: CPF do Emitente difere do CPF do Certificado Digital |

## 4.1.9 Grupo E-1: Validações da Assinatura Digital (Regime Especial NFF)

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|
| E05 | Se a forma de emissão (tpEmis) do MDFe for Regime Especial da Nota Fiscal Fácil (3): Rejeitar se o certificado de assinatura for diferente do certificado da SEFAZ Virtual RS | Obrig. | 901 | Rej. | Rejeição: MDFe do Regime Especial da Nota fiscal fácil deve ser assinado exclusivamente pelo e-CNPJ da SVRS |

## 4.1.10 Grupo E-2: Validações da Assinatura Digital (PAA)

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|
| E06 | Se MDFe / Evento for gerado por PAA (grupo: infPAA): O CNPJ do PAA dever ser válido (zeros, DV) | Obrig. | 909 | Rej. | Rejeição: CNPJ do PAA inválido |
| E07 | Se MDFe / Evento for gerado por PAA (grupo: infPAA): O CNPJ do certificado de assinatura ICP Brasil deverá ser igual ao CNPJ do PAA (tag: CNPJPAA) | Obrig. | 910 | Rej. | Rejeição: CNPJ do PAA difere do CNPJ de assinatura |
| E08 | Se MDFe / Evento for gerado por PAA (grupo: infPAA): Verificar se o CNPJ do PAA (tag: CNPJPAA) existe na relação de Provedores de Autorização e Assinatura homologados pelo ENCAT | Obrig. | 911 | Rej. | Rejeição: Provedor de Assinatura e Autorização não existe na base da SEFAZ |
| E09 | Se MDFe / Evento for gerado por PAA (grupo: infPAA) Verificar se o CNPJ do Emitente (tag: CNPJ grupo emit) possui vínculo ativo com o PAA (tag: CNPJPAA)<br>**Observação:** Verificar no banco de dados de Vínculo de PAA distribuído pela SVRS | Obrig. | 912 | Rej. | Rejeição: Emitente não associado ao PAA |
| E10 | Se MDFe / Evento for gerado por PAA (grupo: infPAA): Verificar se a chave pública RSA (grupo: RSAKeyValue) pertence ao vínculo CNPJ do Emitente x CNPJ PAA no banco de dados de Vínculo PAA distribuído pela SVRS | Obrig. | 913 | Rej. | Rejeição: Chave RSA não corresponde a relação contribuinte x PAA |
| E11 | Se MDFe / Evento for gerado por PAA (grupo: infPAA) Validar assinatura RSA (tag: SignatureValue) com a chave pública do MEI (grupo: RSAKeyValue) | Obrig. | 914 | Rej. | Rejeição: Assinatura RSA do MEI inválida |
