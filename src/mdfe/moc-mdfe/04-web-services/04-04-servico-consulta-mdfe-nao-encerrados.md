<!-- p.41 -->
# 4.4 Serviço de Consulta MDFe não encerrados

- **Função:** serviço destinado à consulta MDFe não encerrados na base de dados do ambiente autorizador.
- **Processo:** síncrono.
- **Nome Serviço:** MDFeConsNaoEnc
- **Método:** mdfeConsNaoEnc
- **Parâmetro da Mensagem da área de dados:** XML sem compactação

## 4.4.1 Leiaute Mensagem de Entrada

- **Entrada:** Estrutura XML contendo a consulta de MDFe não encerrados do emitente
- **Schema XML:** consMDFeNaoEnc_v9.99.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **EP01** | **consMDFeNaoEnc** | Raiz | - | - | - | - | TAG raiz |
| EP02 | versao | A | EP01 | N | 1-1 | 2v2 | Versão do leiaute |
| EP03 | tpAmb | E | EP01 | N | 1-1 | 1 | Identificação do Ambiente: 1 – Produção / 2 - Homologação |
| EP04 | xServ | E | EP01 | C | 1-1 | 24 | Serviço solicitado: 'CONSULTAR NÃO ENCERRADOS' |
| EP05 | CNPJ | CE | EP01 | N | 1-1 | 14 | Informar zeros não significativos |
| EP06 | CPF | CE | EP01 | N | 1-1 | 11 | Informar zeros não significativos. Apenas para emitente pessoa física com inscrição estadual |

## 4.4.2 Leiaute Mensagem de Retorno

- **Retorno:** Estrutura XML com o resultado da consulta status serviço.
- **Schema XML:** retConsMDFeNaoEnc_v9.99.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **ER01** | **retConsMDFeNaoEnc** | Raiz | - | - | - | - | TAG raiz da Resposta |
| ER02 | versao | A | ER01 | N | 1-1 | 2v2 | Versão do leiaute |
| ER03 | tpAmb | E | ER01 | N | 1-1 | 1 | Identificação do Ambiente: 1 – Produção / 2 - Homologação |
| ER04 | verAplic | E | ER01 | C | 1-1 | 1-20 | Versão do Aplicativo que processou a consulta |
| ER05 | cStat | E | ER01 | N | 1-1 | 3 | Código do status da resposta |
| ER06 | xMotivo | E | ER01 | C | 1-1 | 1-255 | Descrição literal do status da resposta |
| ER07 | cUF | E | ER01 | N | 1-1 | 2 | Código da UF que atendeu à solicitação |
| **ER08** | **infMDFe** | G | ER01 | - | 0-N | - | Grupo da relação de MDFe não encerrados |
| ER09 | chMDFe | E | ER08 | N | 1-1 | 44 | Chave de acesso do MDFe não encerrado |
| ER10 | nProt | E | ER08 | N | 1-1 | 15 | Protocolo de autorização do MDFe não encerrado |

<!-- p.42 -->

## 4.4.3 Descrição do Processo de Web Service

Este método será responsável por receber as solicitações referentes à consulta de MDFe não encerrados pelo emitente (Situação Autorizado). Seu acesso é permitido apenas pelo CNPJ / CPF do emitente do MDFe.

O aplicativo do contribuinte envia a solicitação para o Web Service do Ambiente Autorizador. Ao receber a solicitação a aplicação do Ambiente Autorizador processará a solicitação de consulta, validando o CNPJ / CPF do emitente, e retornará mensagem contendo a relação de chaves de acesso e número de protocolo dos MDFe não encerrados na Base de Dados.

## 4.4.4 Regras de Validação Básicas do Serviço

Deverão ser aplicadas as validações gerais conforme quadro abaixo:

| Grupo | Descrição |
|---|---|
| A | Validação do Certificado de Transmissão (protocolo TLS) |
| B | Validação Inicial da Mensagem no Web Service |
| C | Validação da Área de Dados da mensagem |

## 4.4.5 Validação das Regras de Negócio da Consulta Não Encerrados

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|
| H01 | Tipo do ambiente informado difere do ambiente do Web Service | Obrig. | 252 | Rej. | Rejeição: Ambiente informado diverge do Ambiente de recebimento |
| H02 | Se informado CNPJ do emitente: Validar CNPJ Emitente (dígito controle, zeros ou nulo). | Obrig. | 207 | Rej. | Rejeição: CNPJ do emitente inválido |
| H03 | Se informado CPF do emitente: Validar CPF Emitente (dígito controle, zeros ou nulo). | Obrig. | 210 | Rej. | Rejeição: CPF do emitente inválido |
| H04 | Se Certificado conter CNPJ do emitente: CNPJ-Base do Emitente difere do CNPJ-Base do Certificado Digital.<br>**Exceção:** Esta regra não se aplica a CNPJ Emitente que possui vínculo ativo no cadastro de PAA da SVRS | Obrig. | 213 | Rej. | Rejeição: CNPJ-Base do Emitente difere do CNPJ-Base do Certificado Digital |
| H05 | Se Certificado conter CPF do emitente: CPF do Emitente difere do CPF do Certificado Digital. | Obrig. | 202 | Rej. | Rejeição: CPF do Emitente difere do CPF do Certificado Digital |
| H06 | Emitente não credenciado a emissão de MDFe<br>**Exceção:** Esta regra não se aplica a CNPJ Emitente que possui vínculo ativo no cadastro de PAA da SVRS | Obrig. | 203 | Rej. | Rejeição: Emissor não habilitado para emissão do MDFe |

<!-- p.43 -->

## 4.4.6 Final do Processamento

A mensagem de retorno poderá ser:

- **MDFe não encerrados localizados** – cStat=111, com a relação de chaves de acesso e protocolos de autorização dos manifestos não encerrados;
- **MDFe não encerrados não localizados** – cStat=112
