<!-- p.44 -->
# 4.5 Serviço de Consulta Status do Serviço de Autorização

- **Função:** serviço destinado à consulta do status do serviço prestado pelo Ambiente Autorizador.
- **Processo:** síncrono.
- **Nome Serviço:** MDFeStatusServico
- **Método:** mdfeStatusServicoMDF
- **Parâmetro da Mensagem da área de dados:** XML sem compactação

## 4.5.1 Leiaute Mensagem de Entrada

- **Entrada:** Estrutura XML contendo a consulta do status do serviço
- **Schema XML:** consStatServMDFe_v9.99.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **FP01** | **consStatServMDFe** | Raiz | - | - | - | - | TAG raiz |
| FP02 | versao | A | FP01 | N | 1-1 | 2v2 | Versão do leiaute |
| FP03 | tpAmb | E | FP01 | N | 1-1 | 1 | Identificação do Ambiente: 1 – Produção / 2 - Homologação |
| FP04 | xServ | E | FP01 | C | 1-1 | 6 | Serviço solicitado: 'STATUS' |

## 4.5.2 Leiaute Mensagem de Retorno

- **Retorno:** Estrutura XML com o resultado da consulta status serviço.
- **Schema XML:** retConsStatServMDFe_v9.99.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **FR01** | **retConsStatServMDFe** | Raiz | - | - | - | - | TAG raiz da Resposta |
| FR02 | versao | A | FR01 | N | 1-1 | 2v2 | Versão do leiaute |
| FR03 | tpAmb | E | FR01 | N | 1-1 | 1 | Identificação do Ambiente: 1 – Produção / 2 - Homologação |
| FR04 | verAplic | E | FR01 | C | 1-1 | 1-20 | Versão do Aplicativo que processou a consulta |
| FR05 | cStat | E | FR01 | N | 1-1 | 3 | Código do status da resposta |
| FR06 | xMotivo | E | FR01 | C | 1-1 | 1-255 | Descrição literal do status da resposta |
| FR07 | cUF | E | FR01 | N | 1-1 | 2 | Código da UF que atendeu à solicitação |
| FR08 | dhRecbto | E | FR01 | D | 1-1 | - | Data e hora de recebimento do pedido. Formato = AAAA-MM-DDTHH:MM:SS TZD |
| FR09 | tMed | E | FR01 | N | 0-1 | 1-4 | Tempo médio de resposta do serviço (em segundos) dos últimos 5 minutos |
| FR10 | dhRetorno | E | FR01 | D | 0-1 | - | Preencher com data e hora previstas para o retorno do Web Service, no formato AAAA-MM-DDTHH:MM:SS |
| FR11 | xObs | E | FR01 | C | 0-1 | 1-255 | Informações adicionais ao contribuinte |

## 4.5.3 Descrição do Processo de Web Service

Este método será responsável por receber as solicitações referentes à consulta do status do serviço do Ambiente Autorizador.

<!-- p.45 -->

O aplicativo do contribuinte envia a solicitação para o Web Service do Ambiente Autorizador. Ao receber a solicitação a aplicação do Ambiente Autorizador processará a solicitação de consulta, e retornará mensagem contendo o status do serviço.

A empresa que construir aplicativo que se mantenha em permanente "loop" de consulta a este Web Service, deverá aguardar um tempo mínimo de 3 minutos entre uma consulta e outra, evitando sobrecarga desnecessária dos servidores do Ambiente Autorizador.

## 4.5.4 Regras de Validação Básicas do Serviço

Deverão ser aplicadas as validações gerais conforme quadro abaixo:

| Grupo | Descrição |
|---|---|
| A | Validação do Certificado de Transmissão (protocolo TLS) |
| B | Validação Inicial da Mensagem no Web Service |
| C | Validação da Área de Dados da mensagem |

## 4.5.5 Validação das Regras de Negócio da Consulta Status Serviço

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|
| I01 | Tipo do ambiente informado difere do ambiente do Web Service | Obrig. | 252 | Rej. | Rejeição: Ambiente informado diverge do Ambiente de recebimento |
| I02 | Verifica se o Servidor de Processamento está Paralisado Momentaneamente | Obrig. | 108 | - | Serviço Paralisado Momentaneamente (curto prazo) |
| I03 | Verifica se o Servidor de Processamento está Paralisado sem Previsão | Obrig. | 109 | - | Serviço Paralisado sem Previsão |

## 4.5.6 Final do Processamento

O processamento do pedido de consulta de status de Serviço pode resultar em uma mensagem de erro ou retornar à situação atual do Servidor de Processamento, códigos de situação 107 ("Serviço em Operação"), 108 ("Serviço Paralisado Momentaneamente") e 109 ("Serviço Paralisado sem Previsão").

A critério da UF o campo xObs pode ser utilizado para fornecer maiores informações ao contribuinte, como por exemplo: "manutenção programada", "modificação de versão do aplicativo", "previsão de retorno", etc.
