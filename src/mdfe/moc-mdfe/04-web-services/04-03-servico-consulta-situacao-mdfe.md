<!-- p.39 -->
# 4.3 Serviço de Consulta Situação do MDFe

- **Função:** serviço destinado ao atendimento de solicitações de consulta da situação atual do MDFe na Base de Dados do Ambiente Autorizador.
- **Processo:** síncrono.
- **Nome Serviço:** MDFeConsulta
- **Método:** mdfeConsultaMDF
- **Parâmetro da Mensagem da área de dados:** XML sem compactação

## 4.3.1 Leiaute Mensagem de Entrada

- **Entrada:** Estrutura XML contendo a consulta por chave de acesso do MDFe
- **Schema XML:** consSitMDFe_v9.99.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **DP01** | **consSitMDFe** | Raiz | - | - | - | - | TAG raiz |
| DP02 | versao | A | DP01 | N | 1-1 | 2v2 | Versão do leiaute |
| DP03 | tpAmb | E | DP01 | N | 1-1 | 1 | Identificação do Ambiente: 1 – Produção / 2 - Homologação |
| DP04 | xServ | E | DP01 | C | 1-1 | 9 | Serviço solicitado: 'CONSULTAR' |
| DP05 | chMDFe | E | DP01 | N | 1-1 | 44 | Chave de acesso do MDFe |

## 4.3.2 Leiaute Mensagem de Retorno

- **Retorno:** Estrutura XML com o resultado da consulta situação.
- **Schema XML:** retConsSitMDFe_v9.99.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **DR01** | **retConsSitMDFe** | Raiz | - | - | - | - | TAG raiz da Resposta |
| DR02 | versao | A | DR01 | N | 1-1 | 2v2 | Versão do leiaute |
| DR03 | tpAmb | E | DR01 | N | 1-1 | 1 | Identificação do Ambiente: 1 – Produção / 2 - Homologação |
| DR04 | verAplic | E | DR01 | C | 1-1 | 1-20 | Versão do Aplicativo que processou a consulta |
| DR05 | cStat | E | DR01 | N | 1-1 | 3 | Código do status da resposta |
| DR06 | xMotivo | E | DR01 | C | 1-1 | 1-255 | Descrição literal do status da resposta |
| DR07 | cUF | E | DR01 | N | 1-1 | 2 | Código da UF que atendeu à solicitação |
| DR08 | protMDFe | G | DR01 | XML | 0-1 | - | Protocolo de autorização de uso do MDFe |
| DR09 | procEventoMDFe | G | DR01 | XML | 0-N | - | Informações dos eventos e respectivo protocolo de registro de evento. |

## 4.3.3 Descrição do Processo de Web Service

Este método será responsável por receber as solicitações referentes à consulta de situação de MDFe enviados para o Ambiente Autorizador. Seu acesso é permitido apenas pela chave única de identificação do manifesto eletrônico de documentos fiscais.

<!-- p.40 -->

O aplicativo do contribuinte envia a solicitação para o Web Service do Ambiente Autorizador. Ao receber a solicitação a aplicação do Ambiente Autorizador processará a solicitação de consulta, validando a Chave de Acesso do MDFe, e retornará mensagem contendo a situação atual do MDFe na Base de Dados, o respectivo Protocolo (mensagem de Autorização de uso) e os eventos que estiverem associados ao MDFe (informações do evento e protocolo de registro de evento).

O processamento da requisição das consultas deste Web Service será limitado no período de consulta para 180 dias da data de emissão do MDFe.

## 4.3.4 Regras de Validação Básicas do Serviço

Deverão ser aplicadas as validações gerais conforme quadro abaixo:

| Grupo | Descrição |
|---|---|
| A | Validação do Certificado de Transmissão (protocolo TLS) |
| B | Validação Inicial da Mensagem no Web Service |
| C | Validação da Área de Dados da mensagem |

## 4.3.5 Validação das Regras de Negócio da Consulta Situação

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|
| G01 | Tipo do ambiente informado difere do ambiente do Web Service | Obrig. | 252 | Rej. | Rejeição: Ambiente informado diverge do Ambiente de recebimento |
| G02 | Verificar se o ano – mês da chave de acesso está com atraso superior a 6 meses em relação ao ano – mês atual | Obrig. | 460 | Rej. | Rejeição: Consulta a uma Chave de Acesso muito antiga |
| G03 | Validar chave de acesso. Retornar motivo da rejeição da Chave de Acesso: CNPJ / CPF zerado ou inválido, Ano < 2012 ou maior que atual, Mês inválido (0 ou > 12), Modelo diferente de 58, Número zerado, Tipo de emissão inválido, UF inválida ou DV inválido) [Motivo: XXXXXXXXXXXX] | Obrig. | 236 | Rej. | Rejeição: Chave de Acesso inválida [Motivo: XXXXXXXXX] |
| G04 | Acesso BD MDFe (Chave: CNPJ / CPF Emit, Modelo, Série, Nro): Verificar se MDFe não existe | Obrig. | 217 | Rej. | Rejeição: MDFe não consta na base de dados da SEFAZ |
| G05 | Verificar se campo "Código Numérico" informado na Chave de Acesso é diferente do existente no BD | Obrig. | 216 | Rej. | Rejeição: Chave de Acesso difere da cadastrada |
| G06 | Chave de Acesso difere da existente em BD (opcionalmente a descrição do erro, campo xMotivo, tem concatenada a Chave de Acesso, quando o autor da consulta for o emissor) | Obrig. | 600 | Rej. | Rejeição: Chave de Acesso difere da existente em BD |

## 4.3.6 Final do Processamento

No processamento do pedido de consulta situação de MDFe pode resultar em uma mensagem de erro, caso o MDFe não seja localizado. Ou, caso localizado, retornar à situação atual do MDFe consultado, retornando o cStat com um dos valores, 100 ("Autorizado o Uso do MDFe"), 101 ("Cancelamento de MDFe homologado"), 132 ("Encerramento de MDFe homologado") e o respectivo protocolo de autorização de uso e registro de eventos.
