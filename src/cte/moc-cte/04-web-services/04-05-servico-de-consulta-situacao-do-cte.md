<!-- p.45 -->

# 4.5. Serviço de Consulta Situação do CTe

**Função**: serviço destinado ao atendimento de solicitações de consulta da situação atual do CTe (modelos 57, 67 e 64) na Base de Dados do Portal da Secretaria da Fazenda.

**Processo**: síncrono.

**Nome Serviço**: CTeConsultaV4

**Método**: cteConsultaCT

**Parâmetro da Mensagem da área de dados**: XML sem compactação

## 4.5.1 Leiaute Mensagem de Entrada

**Entrada**: Estrutura XML contendo a consulta por chave de acesso do CTe

**Schema XML**: consSitCTe_v9.99.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **FP01** | **consSitCTe** | **Raiz** | **-** | **-** | **-** | **-** | **TAG raiz** |
| GP02 | versao | A | GP01 | N | 1-1 | 2v2 | Versão do leiaute |
| GP03 | tpAmb | E | GP01 | N | 1-1 | 1 | Identificação do Ambiente:<br>1 – Produção / 2 - Homologação |
| GP04 | xServ | E | GP01 | C | 1-1 | 9 | Serviço solicitado: ‘CONSULTAR’ |
| GP05 | chCTe | E | GP01 | N | 1-1 | 44 | Chave de acesso do CTe |

## 4.5.2 Leiaute Mensagem de Retorno

**Retorno**: Estrutura XML com o resultado da consulta situação.

**Schema XML**: retConsSitCTe_v9.99.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **FR01** | **retConsSitCTe** | **Raiz** | **-** | **-** | **-** | **-** | **TAG raiz da Resposta** |
| GR02 | versao | A | GR01 | N | 1-1 | 2v2 | Versão do leiaute |
| GR03 | tpAmb | E | GR01 | N | 1-1 | 1 | Identificação do Ambiente:<br>1 – Produção / 2 - Homologação |
| GR04 | verAplic | E | GR01 | C | 1-1 | 1-20 | Versão do Aplicativo que processou a consulta |
| GR05 | cStat | E | GR01 | N | 1-1 | 3 | Código do status da resposta |
| GR06 | xMotivo | E | GR01 | C | 1-1 | 1-255 | Descrição literal do status da resposta |
| GR07 | cUF | E | GR01 | N | 1-1 | 2 | Código da UF que atendeu à solicitação |
| GR08 | protCTe | G | GR01 | XML | 0-1 | - | Protocolo de autorização de uso do CTe |
| GR09 | procEventoCTe | G | GR01 | XML | 0-N | - | Informações dos eventos e respectivo protocolo de registro de evento. |

## 4.5.3 Descrição do Processo de Web Service

Este método será responsável por receber as solicitações referentes à consulta de situação de CTe enviados para o Ambiente Autorizador. Seu acesso é permitido apenas pela chave única de identificação do conhecimento de transporte eletrônico.

<!-- p.46 -->

O aplicativo do contribuinte envia a solicitação para o Web Service do Ambiente Autorizador. Ao receber a solicitação a aplicação do Ambiente Autorizador processará a solicitação de consulta, validando a Chave de Acesso do CTe, e retornará mensagem contendo a situação atual do CTe na Base de Dados, o respectivo Protocolo (mensagem de Autorização de uso) e os eventos que estiverem associados ao CTe (informações do evento e protocolo de registro de evento).

O processamento da requisição das consultas deste Web Service será limitado no período de consulta para 180 dias da data de emissão do CTe.

**Importante**: O sistema da SEFAZ Autorizadora deverá considerar o modelo do documento indicado na chave de acesso para aplicar as validações sobre a base de dados de CTe de Carga (57), sobre o CTe de Outros Serviços (67) ou GTVe (64) no caso de a SEFAZ ter optado por trabalhar com bases distintas.

## 4.5.4 Regras de Validação Básicas do Serviço

Deverão ser aplicadas as validações gerais conforme quadro abaixo:

| Grupo | Descrição |
|---|---|
| A | Validação do Certificado de Transmissão (protocolo TLS) |
| B | Validação Inicial da Mensagem no Web Service |
| C | Validação da Área de Dados da mensagem |
| C-1 | Validação do Ambiente e Autorização<br>• Detectar UF pela UF da chave de acesso<br>• Não aplicar a regra C09 |

## 4.5.5 Validação das Regras de Negócio da Consulta Situação

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **L01** Tipo do ambiente informado difere do ambiente do Web Service | Obrig. | 252 | Rej. | Rejeição: Ambiente informado diverge do Ambiente de recebimento |
| **L02** Verificar se o ano – mês da chave de acesso está com atraso superior a 6 meses em relação ao ano – mês atual<br><br>**Observação:** Essa validação poderá considerar também a data completa de emissão do CTe | Obrig | 731 | Rej. | Rejeição: Consulta a uma Chave de Acesso muito antiga |
| **L03** - Validar chave de acesso<br>Retornar motivo da rejeição da Chave de Acesso: CNPJ/CPF zerado ou inválido, Ano < 2009 ou maior que atual, Mês inválido (0 ou > 12), Modelo diferente de 57/67/64, Número zerado, Tipo de emissão inválido, UF inválida ou DV inválido)<br>[Motivo: XXXXXXXXXXXX] | Obrig. | 236 | Rej. | Rejeição: Chave de Acesso inválida |
| **L04** Acesso BD CTe (Chave: UF, CNPJ/CPF Emit, Modelo, Série, Nro):<br>- Verificar se CTe não existe<br><br>**Observação**: SE o CTe não existir, deverá ser verificado em BD CTE-EVENTOS (Chave: UF, CNPJ/CPF Emit, Modelo, Série, Nro obtidos na<br><!-- p.47 -->chave de acesso do CTe):<br>- Verificar se existe EPEC para a chave natural do CTe:<br>&nbsp;&nbsp;&nbsp;Se existir deverá ser retornado apenas o procEvento | Obrig. | 217 | Rej. | Rejeição: CTe não consta na base de dados da SEFAZ |
| **L05** Verificar se campo “Código Numérico” informado na Chave de Acesso é diferente do existente no BD | Obrig. | 216 | Rej. | Rejeição: Chave de acesso difere da cadastrada |
| **L06** Chave de Acesso difere da existente em BD (opcionalmente a descrição do erro, campo xMotivo, tem concatenada a Chave de Acesso, quando o autor da consulta for o emissor) | Obrig. | 600 | Rej. | Rejeição: Chave de Acesso difere da existente em BD |

## 4.5.6 Final do Processamento

O processamento do pedido de consulta de status de CTe pode resultar em uma mensagem de erro caso o CTe não seja localizado. Caso localizado, retorna a situação atual do CTe, apresentando o cStat com um dos valores, 100 (“Autorizado o Uso do CTe”) ou 101 (“Cancelamento de CTe homologado”), além do respectivo protocolo de autorização de uso ou registro de eventos.

O Ambiente de Autorização SVC retornará apenas status de CTe autorizados na SVC, ou seja, caso um documento tenha sido autorizado na SEFAZ original e logo após esta tenha acionado a SVC, a consulta sobre este CTe somente poderá ser direcionada à SEFAZ original quando esta restabelecer seu serviço, já os documentos autorizados na SVC poderão ser consultados diretamente neste ambiente a qualquer tempo, independente da SVC estar ativa para recepção.
