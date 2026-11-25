<!-- p.36 -->

# 4.2. Serviço de Recepção de CTe de Transporte de Carga (modelo 57)

O Serviço de Recepção de CTe é o serviço oferecido pelos Portais das Secretarias de Fazenda dos Estados para recepção dos CTe de transporte de carga emitidos pelos contribuintes credenciados para emissão deste documento.

A forma de processamento do serviço de recepção de CTe é síncrona sem a formação de lotes. O contribuinte deve transmitir um CTe (modelo 57) através do Web Service de recepção de CTe e receberá o resultado do processamento na mesma conexão.

**Função:** serviço destinado à recepção de mensagens de envio de CTe.

**Processo:** síncrono.

**Nome Serviço:** CTeRecepcaoSincV4

**Método:** cteRecepcao

**Parâmetro da Mensagem da área de dados:** Compactada utilizando GZip (Base64)

## 4.2.1 Leiaute Mensagem de Entrada

Entrada: Estrutura XML do CTe está definido no documento Anexo I: Manual de Orientações do Contribuinte – Leiaute e Regras de Validação.

**Schema XML:** CTe_v9.99.xsd

## 4.2.2 Leiaute Mensagem de Retorno

Retorno: Estrutura XML com a mensagem do resultado do envio do CTe

**Schema XML:** retCTe_v9.99.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **BR01** | **retCTe** | **Raiz** | **-** | **-** | **-** | **-** | **TAG raiz da Resposta** |
| BR02 | versao | A | BR01 | N | 1-1 | 2v2 | Versão do leiaute |
| BR03 | tpAmb | E | BR01 | N | 1-1 | 1 | Identificação do Ambiente:<br>1 – Produção / 2 - Homologação |
| BR04 | cUF | E | BR01 | N | 1-1 | 2 | Código da UF que atendeu à solicitação. |
| BR05 | verAplic | E | BR01 | C | 1-1 | 1-20 | Versão do Aplicativo que recebeu o CTe. |
| BR06 | cStat | E | BR01 | N | 1-1 | 3 | Código do status da resposta |
| BR07 | xMotivo | E | BR01 | C | 1-1 | 1-255 | Descrição literal do status da resposta |
| BR08 | protCTe | E | BR01 | G | 0-1 | XML | Resposta ao processamento do CTe |

<!-- p.37 -->

## 4.2.3 Leiaute do CTe processado

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **PR01** | **protCTe** | **Raiz** | **-** | **-** | **-** | **-** | **TAG raiz da resposta processamento** |
| PR02 | versao | A | PR01 | N | 1-1 | 2v2 | Versão do leiaute |
| **PR03** | **infProt** | **G** | **PR01** | **-** | **1-1** | **-** | **Informações do protocolo de resposta** |
| PR04 | Id | A | PR03 | C | 0-1 | - | Identificador da TAG a ser assinada, somente precisa ser informado se a UF assinar a resposta.<br>Em caso de assinatura da resposta pela SEFAZ preencher o campo com o Nro do Protocolo, precedido com o literal “ID” |
| PR05 | tpAmb | E | PR03 | N | 1-1 | 1 | Identificação do Ambiente:<br>1 – Produção / 2 - Homologação |
| PR06 | verAplic | E | PR03 | C | 1-1 | 1-20 | Versão do Aplicativo que recebeu o CTe. |
| PR07 | chCTe | E | PR03 | N | 1-1 | 44 | Chave de acesso do CTe |
| PR08 | dhRecbto | E | PR03 | D | 1-1 | - | Data e Hora do Processamento<br>Formato = AAAA-MM-DDTHH:MM:SS TZD<br>Preenchido com data e hora da gravação do CTe no Banco de Dados.<br>Em caso de Rejeição, com data e hora do recebimento do Arquivo de CTe enviado. |
| PR09 | nProt | E | PR03 | N | 0-1 | 15 | Número do protocolo de autorização do CTe |
| PR10 | digVal | E | PR03 | C | 0-1 | 28 | Digest Value do CTe processado, utilizado para conferir a integridade com o CTe original |
| PR11 | cStat | E | PR03 | N | 1-1 | 3 | Código do status da resposta para o CTe |
| PR12 | xMotivo | E | PR03 | C | 1-1 | 1-255 | Descrição literal do status da resposta para o CTe |
| **PR13** | **infFisco** | **G** | **PR01** | **-** | **0-1** | **-** | **Grupo reservado para envio de mensagem do Fisco para o contribuinte** |
| PR14 | cMsg | E | PR13 | N | 1-1 | 3 | Código de status da mensagem do fisco |
| PR15 | xMsg | E | PR13 | C | 1-1 | 1-255 | Mensagem do Fisco para o contribuinte |
| **PR16** | **Signature** | **G** | **PR01** | **XML** | **0-1** | **-** | **Assinatura XML do grupo identificado pelo atributo “ID”<br>A decisão de assinar a mensagem fica a critério da UF interessada.** |

## 4.2.4 Regras de Validação Básicas do Serviço

Deverão ser aplicadas as validações gerais conforme quadro abaixo:

| Grupo | Descrição |
|---|---|
| A | Validação do Certificado de Transmissão (protocolo TLS) |
| A-1 | Validação do Certificado de Transmissão NFF |
| B-0 | Validação da Compactação da Mensagem |
| B | Validação Inicial da Mensagem no Web Service |
| C | Validação da Área de Dados da mensagem |
| C-1 | Validação do Ambiente de Autorização<br>• Detectar UF pela UF da chave de acesso |

## 4.2.5 Validação das regras de negócio do CTe

As regras de negócio que serão aplicadas ao CTe estão descritas **Grupo G** constante no item 2.1 do Anexo I: Manual de Orientações do Contribuinte – Leiaute e Regras de Validação.

<!-- p.38 -->

## 4.2.6 Final do Processamento do CTe

A validação do CTe poderá resultar em:

- **Rejeição** – o CTe será descartado, não sendo armazenada no Banco de Dados podendo ser corrigido e novamente transmitido;
- **Autorização de uso** – o CTe será armazenado no Banco de Dados;

| Validação – De forma do CTe | Validação – Situação do CTe | Consequência – Para o contribuinte | Consequência – Banco de Dados |
|---|---|---|---|
| Inválida | Rejeição | Corrigir CTe | Não gravar |
| Válida | Autorização de uso | Prestação Autorizada | Gravar |

Para cada CTe autorizado será atribuído um número de protocolo da SEFAZ.
