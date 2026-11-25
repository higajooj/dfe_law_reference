<!-- p.42 -->

# 4.4. Serviço de Recepção de GTVe (Modelo 64)

O Serviço de Recepção de Guia de Transporte de Valores Eletrônica é o serviço oferecido pelos Portais das Secretarias de Fazenda dos Estados para recepção das GTVe emitidos pelos contribuintes credenciados em sua unidade federada.

A forma de processamento do serviço de recepção de GTVe é síncrona sem a formação de lotes. O contribuinte deve transmitir uma GTVe (modelo 64) através do Web Service de recepção de GTVe e receberá o resultado do processamento na mesma conexão.

**Função**: serviço destinado à recepção de mensagens de envio de GTVe (modelo 64).

**Processo**: síncrono.

**Nome Serviço**: CTeRecepcaoGTVeV4

**Método**: cteRecepcaoGTVe

**Parâmetro da Mensagem da área de dados**: Compactada utilizando GZip (Base64)

## 4.4.1 Leiaute Mensagem de Entrada

**Entrada**: Estrutura XML da GTVe está definido ao final desta Nota técnica.

**Schema XML**: GTVe_v9.99.xsd

## 4.4.2 Leiaute Mensagem de Retorno

**Retorno**: Estrutura XML com a mensagem do resultado do envio da GTVe

**Schema XML**: retGTVe_v9.99.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **DR01** | **retGTVe** | **Raiz** | **-** | **-** | **-** | **-** | **TAG raiz da Resposta** |
| DR02 | Versão | A | DR01 | N | 1-1 | 2v2 | Versão do leiaute |
| DR03 | tpAmb | E | DR01 | N | 1-1 | 1 | Identificação do Ambiente:<br>1 – Produção / 2 - Homologação |
| DR04 | cUF | E | DR01 | N | 1-1 | 2 | Código da UF que atendeu à solicitação. |
| DR05 | verAplic | E | DR01 | C | 1-1 | 1-20 | Versão do Aplicativo que recebeu a GTVe. |
| DR06 | cStat | E | DR01 | N | 1-1 | 3 | Código do status da resposta |
| DR07 | xMotivo | E | DR01 | C | 1-1 | 1-255 | Descrição literal do status da resposta |
| DR08 | protCTe | E | DR01 | G | 0-1 | XML | Resposta ao processamento da GTVe |

## 4.4.3 Leiaute da GTVe processada

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **PR01** | **protCTe** | **Raiz** | **-** | **-** | **-** | **-** | **TAG raiz da resposta processamento** |
| PR02 | versao | A | PR01 | N | 1-1 | 2v2 | Versão do leiaute |
| PR03 | infProt | G | PR01 | - | 1-1 | - | Informações do protocolo de resposta |
| PR04 | Id | A | PR03 | C | 0-1 | - | <!-- p.43 -->Identificador da TAG a ser assinada, somente precisa ser informado se a UF assinar a resposta.<br>Em caso de assinatura da resposta pela SEFAZ preencher o campo com o Nro do Protocolo, precedido com o literal “ID” |
| PR05 | tpAmb | E | PR03 | N | 1-1 | 1 | Identificação do Ambiente:<br>1 – Produção / 2 - Homologação |
| PR06 | verAplic | E | PR03 | C | 1-1 | 1-20 | Versão do Aplicativo que recebeu a GTVe |
| PR07 | chCTe | E | PR03 | N | 1-1 | 44 | Chave de acesso da GTVe |
| PR08 | dhRecbto | E | PR03 | D | 1-1 | - | Data e Hora do Processamento<br>Formato = AAAA-MM-DDTHH:MM:SS TZD<br>Preenchido com data e hora da gravação do CTe no Banco de Dados.<br>Em caso de Rejeição, com data e hora do recebimento do Arquivo de GTVe enviado. |
| PR09 | nProt | E | PR03 | N | 0-1 | 15 | Número do protocolo de autorização do GTVe |
| PR10 | digVal | E | PR03 | C | 0-1 | 28 | Digest Value da GTVe processada, utilizado para conferir a integridade com a GTVe original |
| PR11 | cStat | E | PR03 | N | 1-1 | 3 | Código do status da resposta para a GTVe |
| PR12 | xMotivo | E | PR03 | C | 1-1 | 1-255 | Descrição literal do status da resposta para a GTVe |
| PR13 | infFisco | G | PR01 | - | 0-1 | - | Grupo reservado para envio de mensagem do Fisco para o contribuinte |
| PR14 | cMsg | E | PR13 | N | 1-1 | 3 | Código de status da mensagem do fisco |
| PR15 | xMsg | E | PR13 | C | 1-1 | 1-255 | Mensagem do Fisco para o contribuinte |
| PR16 | Signature | G | PR01 | XML | 0-1 | - | Assinatura XML do grupo identificado pelo atributo “ID”<br>A decisão de assinar a mensagem fica a critério da UF interessada. |

## 4.4.4 Regras de Validação Básicas do Serviço

Deverão ser aplicadas as validações gerais conforme quadro abaixo:

| Grupo | Descrição |
|---|---|
| A | Validação do Certificado de Transmissão (protocolo TLS) |
| B-0 | Validação da Compactação da Mensagem |
| B | Validação Inicial da Mensagem no Web Service |
| C | Validação da Área de Dados da mensagem |
| C-1 | Validação do Ambiente de Autorização<br>• Detectar UF pela UF da chave de acesso |

## 4.4.5 Validação das regras de negócio da GTVe

As regras de negócio que serão aplicadas a GTVe estão descritas **Grupo I** constante no item 2.3 do Anexo I: Manual de Orientações do Contribuinte – Leiaute e Regras de Validação.

## 4.4.6 Final do Processamento da GTVe

A validação da GTVe poderá resultar em:

- **Rejeição** – a GTVe será descartada, não sendo armazenada no Banco de Dados podendo ser corrigido e novamente transmitida;
- **Autorização de uso** – a GTVe será armazenada no Banco de Dados;

<!-- p.44 -->

| Validação de forma da GTVe | Consequência: Para o contribuinte | Consequência: Banco de Dados |
|---|---|---|
| Inválida | Corrigir GTVe | Não gravar |
| Válida | Prestação autorizada | Gravar |

Para cada GTVe autorizada será atribuído um número de protocolo da SEFAZ.
