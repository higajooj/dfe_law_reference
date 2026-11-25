<!-- p.39 -->

# 4.3. Serviço de Recepção de CTe Outros Serviços (modelo 67)

O Serviço de Recepção de CTe para Outros Serviços é o serviço oferecido pelos Portais das Secretarias de Fazenda dos Estados para recepção dos CTe OS emitidos pelos contribuintes credenciados em sua unidade federada.

A forma de processamento do serviço de recepção de CTe Outros Serviços é síncrona sem a formação de lotes. O contribuinte deve transmitir um CTe OS (modelo 67) através do Web Service de recepção de CTe OS e receberá o resultado do processamento na mesma conexão.

**Função:** serviço destinado à recepção de mensagens de envio de CTe OS (modelo 67).

**Processo:** síncrono.

**Nome Serviço:** CTeRecepcaoOSV4

**Método:** cteRecepcaoOS

**Parâmetro da Mensagem da área de dados:** Compactada utilizando GZip (Base64)

## 4.3.1 Leiaute Mensagem de Entrada

Entrada: Estrutura XML do CTe OS está definido no documento Anexo I: Manual de Orientações do Contribuinte – Leiaute e Regras de Validação.

**Schema XML:** CTeOS_v9.99.xsd

## 4.3.2 Leiaute Mensagem de Retorno

Retorno: Estrutura XML com a mensagem do resultado do envio do CTe OS

**Schema XML:** retCTeOS_v9.99.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **CR01** | **retCTeOS** | **Raiz** | **-** | **-** | **-** | **-** | **TAG raiz da Resposta** |
| CR02 | versao | A | CR01 | N | 1-1 | 2v2 | Versão do leiaute |
| CR03 | tpAmb | E | CR01 | N | 1-1 | 1 | Identificação do Ambiente:<br>1 – Produção / 2 - Homologação |
| CR04 | cUF | E | CR01 | N | 1-1 | 2 | Código da UF que atendeu à solicitação. |
| CR05 | verAplic | E | CR01 | C | 1-1 | 1-20 | Versão do Aplicativo que recebeu o CTe OS. |
| CR06 | cStat | E | CR01 | N | 1-1 | 3 | Código do status da resposta |
| CR07 | xMotivo | E | CR01 | C | 1-1 | 1-255 | Descrição literal do status da resposta |
| CR08 | protCTe | E | CR01 | G | 0-1 | XML | Resposta ao processamento do CTe OS |

## 4.3.3 Leiaute do CTe OS processado

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **PR01** | **protCTe** | **Raiz** | **-** | **-** | **-** | **-** | **TAG raiz da resposta processamento** |
| PR02 | versao | A | PR01 | N | 1-1 | 2v2 | Versão do leiaute |
| **PR03** | **infProt** | **G** | **PR01** | **-** | **1-1** | **-** | **Informações do protocolo de resposta** |
| PR04 | Id | A | PR03 | C | 0-1 | - | <!-- p.40 -->Identificador da TAG a ser assinada, somente precisa ser informado se a UF assinar a resposta.<br>Em caso de assinatura da resposta pela SEFAZ preencher o campo com o Nro do Protocolo, precedido com o literal “ID” |
| PR05 | tpAmb | E | PR03 | N | 1-1 | 1 | Identificação do Ambiente:<br>1 – Produção / 2 - Homologação |
| PR06 | verAplic | E | PR03 | C | 1-1 | 1-20 | Versão do Aplicativo que recebeu o CTe OS. |
| PR07 | chCTe | E | PR03 | N | 1-1 | 44 | Chave de acesso do CTe OS |
| PR08 | dhRecbto | E | PR03 | D | 1-1 | - | Data e Hora do Processamento<br>Formato = AAAA-MM-DDTHH:MM:SS TZD<br>Preenchido com data e hora da gravação do CTe no Banco de Dados.<br>Em caso de Rejeição, com data e hora do recebimento do Arquivo de CTe enviado. |
| PR09 | nProt | E | PR03 | N | 0-1 | 15 | Número do protocolo de autorização do CTe OS |
| PR10 | digVal | E | PR03 | C | 0-1 | 28 | Digest Value do CTe OS processado, utilizado para conferir a integridade com o CTe OS original |
| PR11 | cStat | E | PR03 | N | 1-1 | 3 | Código do status da resposta para o CTe OS |
| PR12 | xMotivo | E | PR03 | C | 1-1 | 1-255 | Descrição literal do status da resposta para o CTe OS |
| **PR13** | **infFisco** | **G** | **PR01** | **-** | **0-1** | **-** | **Grupo reservado para envio de mensagem do Fisco para o contribuinte** |
| PR14 | cMsg | E | PR13 | N | 1-1 | 3 | Código de status da mensagem do fisco |
| PR15 | xMsg | E | PR13 | C | 1-1 | 1-255 | Mensagem do Fisco para o contribuinte |
| **PR16** | **Signature** | **G** | **PR01** | **XML** | **0-1** | **-** | **Assinatura XML do grupo identificado pelo atributo “ID”<br>A decisão de assinar a mensagem fica a critério da UF interessada.** |

## 4.3.4 Regras de Validação Básicas do Serviço

Deverão ser aplicadas as validações gerais conforme quadro abaixo:

| Grupo | Descrição |
|---|---|
| A | Validação do Certificado de Transmissão (protocolo TLS) |
| B-0 | Validação da Compactação da Mensagem |
| B | Validação Inicial da Mensagem no Web Service |
| C | Validação da Área de Dados da mensagem |
| C-1 | Validação do Ambiente de Autorização<br>• Detectar UF pela UF da chave de acesso |

## 4.3.5 Validação das regras de negócio do CTe OS

As regras de negócio que serão aplicadas ao CTe OS estão descritas **Grupo H** constante no item 2.2 do Anexo I: Manual de Orientações do Contribuinte – Leiaute e Regras de Validação.

## 4.3.6 Final do Processamento do CTe OS

A validação do CTe OS poderá resultar em:

- **Rejeição** – o CTe OS será descartado, não sendo armazenada no Banco de Dados podendo ser corrigido e novamente transmitido;
- **Autorização de uso** – o CTe OS será armazenado no Banco de Dados.

<!-- p.41 -->

| Validação – De forma do CTe | Validação – Situação do CTe | Consequência – Para o contribuinte | Consequência – Banco de Dados |
|---|---|---|---|
| Inválida | Rejeição | Corrigir CTe | Não gravar |
| Válida | Autorização de uso | Prestação Autorizada | Gravar |

Para cada CTe OS autorizado será atribuído um número de protocolo da SEFAZ.
