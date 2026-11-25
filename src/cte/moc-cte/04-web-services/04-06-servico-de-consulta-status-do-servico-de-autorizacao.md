<!-- p.48 -->

# 4.6. Serviço de Consulta Status do Serviço de Autorização

**Função**: serviço destinado à consulta do status do serviço prestado pelo Portal da Secretaria de Fazenda Estadual.

**Processo**: síncrono.

**Nome Serviço**: CTeStatusServicoV4

**Método**: cteStatusServicoCT

**Parâmetro da Mensagem da área de dados**: XML sem compactação

## 4.6.1 Leiaute Mensagem de Entrada

**Entrada**: Estrutura XML contendo a consulta do status do serviço

**Schema XML**: consStatServCTe_v9.99.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **HP01** | **consStatServCTe** | **Raiz** | **-** | **-** | **-** | **-** | **TAG raiz** |
| HP02 | versao | A | HP01 | N | 1-1 | 2v2 | Versão do leiaute |
| HP03 | tpAmb | E | HP01 | N | 1-1 | 1 | Identificação do Ambiente:<br>1 – Produção / 2 - Homologação |
| HP04 | cUF | E | HP01 | N | 1-1 | 2 | Código da UF para verificação do Status.<br><br>**Observação**: em caso de UF que autoriza em modo SVC (para SVC-RS e SVC-SP) o sistema irá responder com o status da ativação da SVC |
| HP05 | xServ | E | HP01 | C | 1-1 | 6 | Serviço solicitado: ‘STATUS’ |

## 4.6.2 Leiaute Mensagem de Retorno

**Retorno**: Estrutura XML com o resultado da consulta status serviço.

**Schema XML**: retConsStatServCTe_v9.99.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **HR01** | **retConsStatServCTe** | **Raiz** | **-** | **-** | **-** | **-** | **TAG raiz da Resposta** |
| HR02 | versao | A | HR01 | N | 1-1 | 2v2 | Versão do leiaute |
| HR03 | tpAmb | E | HR01 | N | 1-1 | 1 | Identificação do Ambiente:<br>1 – Produção / 2 - Homologação |
| HR04 | verAplic | E | HR01 | C | 1-1 | 1-20 | Versão do Aplicativo que processou a consulta |
| HR05 | cStat | E | HR01 | N | 1-1 | 3 | Código do status da resposta |
| HR06 | xMotivo | E | HR01 | C | 1-1 | 1-255 | Descrição literal do status da resposta |
| HR07 | cUF | E | HR01 | N | 1-1 | 2 | Código da UF que atendeu à solicitação |
| HR08 | dhRecbto | E | HR01 | D | 1-1 | - | Data e hora de recebimento do pedido<br>Formato = AAAA-MM-DDTHH:MM:SS TZD |
| HR09 | tMed | E | HR01 | N | 0-1 | 1-4 | Tempo médio de resposta do serviço (em segundos) dos últimos 5 minutos |
| HR10 | dhRetorno | E | HR01 | D | 0-1 | - | Preencher com data e hora previstas para o retorno do Web Service, no formato AAA-MM-DDTHH:MM:SS |
| HR11 | xObs | E | HR01 | C | 0-1 | 1-255 | Informações adicionais ao contribuinte |

<!-- p.49 -->

## 4.6.3 Descrição do Processo de Web Service

Este método será responsável por receber as solicitações referentes à consulta do status do serviço do Ambiente Autorizador.

O aplicativo do contribuinte envia a solicitação para o Web Service do Ambiente Autorizador. Ao receber a solicitação a aplicação do Ambiente Autorizador processará a solicitação de consulta, e retornará mensagem contendo o status do serviço.

A empresa que construir aplicativo que se mantenha em permanente "loop" de consulta a este Web Service, deverá aguardar um tempo mínimo de 3 minutos entre uma consulta e outra, evitando sobrecarga desnecessária dos servidores do Ambiente Autorizador.

## 4.6.4 Validações Básicas do Serviço

Deverão ser aplicadas as validações gerais conforme quadro abaixo:

| Grupo | Descrição |
|---|---|
| A | Validação do Certificado de Transmissão (protocolo TLS) |
| B | Validação Inicial da Mensagem no Web Service |
| C | Validação da Área de Dados da mensagem |
| C-1 | Validação do Ambiente de Autorização<br>• Detectar UF pela tag cUF (se informada)<br>• Não aplicar a regra C09 |

## 4.6.5 Validação das Regras de Negócio da Consulta Status Serviço

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **M01** Tipo do ambiente informado difere do ambiente do Web Service | Obrig. | 252 | Rej. | Rejeição: Ambiente informado diverge do Ambiente de recebimento |
| **M02** Verifica se o Servidor de Processamento está Paralisado Momentaneamente | Obrig. | 108 | - | Serviço Paralisado Momentaneamente (curto prazo) |
| **M03** Verifica se o Servidor de Processamento está Paralisado sem Previsão | Obrig. | 109 | - | Serviço Paralisado sem Previsão |
| **M04** Se o Ambiente de Autorização for SVC-[SP/RS]<br>Caso a UF for informada pertencer a SVC e estiver com o serviço de contingência ativado | Obrig. | 113 | - | Serviço SVC em operação. Desativação prevista para a UF em dd/mm/aa, às hh:mm horas |
| **M05** Se e UF informada for atendida pela SVC do ambiente autorizador [SVC-RS / SVC-SP]:<br>Se a SVC estiver desativada para a UF informada | Obrig. | 114 | - | SVC-[SP/RS] desabilitada pela SEFAZ de Origem |

## 4.6.6 Final do Processamento

O processamento do pedido de consulta de status de Serviço pode resultar em uma mensagem de erro ou retornar à situação atual do Servidor de Processamento, códigos de situação 107 (“Serviço <!-- p.50 -->em Operação”), 108 (“Serviço Paralisado Momentaneamente”) e 109 (“Serviço Paralisado sem Previsão”).

A critério da UF o campo xObs pode ser utilizado para fornecer maiores informações ao contribuinte, como por exemplo: “manutenção programada”, “modificação de versão do aplicativo”, “previsão de retorno”, etc.
