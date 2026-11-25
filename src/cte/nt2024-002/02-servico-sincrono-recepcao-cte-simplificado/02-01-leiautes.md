<!-- p.06 -->

# 2.1 Leiautes

## 2.1.1 Leiaute Mensagem de Entrada

**Entrada**: Estrutura XML do CTe Simplificado está definido ao final desta Nota técnica.

**Schema XML**: cteSimp_v9.99.xsd

## 2.1.2 Leiaute Mensagem de Retorno

**Retorno**: Estrutura XML com a mensagem do resultado do envio de CTe Simplificado

**Schema XML**: retCTeSimp _v9.99.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **CR01** | **retCTeSimp** | **Raiz** | **-** | **-** | **-** | **-** | **TAG raiz da Resposta** |
| CR02 | versao | A | CR01 | N | 1-1 | 2v2 | Versão do leiaute |
| CR03 | tpAmb | E | CR01 | N | 1-1 | 1 | Identificação do Ambiente:<br>1 – Produção / 2 - Homologação |
| CR04 | cUF | E | CR01 | N | 1-1 | 2 | Código da UF que atendeu à solicitação. |
| CR05 | verAplic | E | CR01 | C | 1-1 | 1-20 | Versão do Aplicativo que recebeu o CTe |
| CR06 | cStat | E | CR01 | N | 1-1 | 3 | Código do status da resposta |
| CR07 | xMotivo | E | CR01 | C | 1-1 | 1-255 | Descrição literal do status da resposta |
| CR08 | protCTe | E | CR01 | G | 0-1 | XML | Resposta ao processamento do CTe |

<!-- p.07 -->

## 2.1.3 Leiaute do Protocolo de resposta

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **PR01** | **protCTe** | **Raiz** | **-** | **-** | **-** | **-** | **TAG raiz da resposta processamento** |
| PR02 | versao | A | PR01 | N | 1-1 | 2v2 | Versão do leiaute |
| PR03 | infProt | G | PR01 | - | 1-1 | - | Informações do protocolo de resposta |
| PR04 | Id | A | PR03 | C | 0-1 | - | Identificador da TAG a ser assinada, somente precisa ser informado se a UF assinar a resposta.<br>Em caso de assinatura da resposta pela SEFAZ preencher o campo com o Nro do Protocolo, precedido com o literal “ID” |
| PR05 | tpAmb | E | PR03 | N | 1-1 | 1 | Identificação do Ambiente:<br>1 – Produção / 2 - Homologação |
| PR06 | verAplic | E | PR03 | C | 1-1 | 1-20 | Versão do Aplicativo que recebeu o CTe |
| PR07 | chCTe | E | PR03 | N | 1-1 | 44 | Chave de acesso do CTe |
| PR08 | dhRecbto | E | PR03 | D | 1-1 | - | Data e Hora do Processamento<br>Formato = AAAA-MM-DDTHH:MM:SS TZD<br>Preenchido com data e hora da gravação do CTe no Banco de Dados.<br>Em caso de Rejeição, com data e hora do recebimento do Arquivo de CTe enviado. |
| PR09 | nProt | E | PR03 | N | 0-1 | 15 | Número do protocolo de autorização do CTe |
| PR10 | digVal | E | PR03 | C | 0-1 | 28 | Digest Value do CTe processado, utilizado para conferir a integridade com o CTe original |
| PR11 | cStat | E | PR03 | N | 1-1 | 3 | Código do status da resposta para o CTe |
| PR12 | xMotivo | E | PR03 | C | 1-1 | 1-255 | Descrição literal do status da resposta para o CTe |
| PR13 | infFisco | G | PR01 | - | 0-1 | - | Grupo reservado para envio de mensagem do Fisco para o contribuinte |
| PR14 | cMsg | E | PR13 | N | 1-1 | 3 | Código de status da mensagem do fisco |
| PR15 | xMsg | E | PR13 | C | 1-1 | 1-255 | Mensagem do Fisco para o contribuinte |
| PR16 | Signature | G | PR01 | XML | 0-1 | - | Assinatura XML do grupo identificado pelo atributo “ID”<br>A decisão de assinar a mensagem fica a critério da UF interessada. |

**Observação:** O CTe simplificado é do mesmo modelo do CTe, diferenciado apenas pelo tipo, portanto eles irão utilizar o mesmo protCTe.

## 2.1.4 Leiaute do CTe Simplificado para compartilhamento (procCTeSimp)

O compartilhamento de documentos é feito utilizando o leiaute do proc (contém o DFe + o protocolo). No caso do CTe simplificado será utilizada a seguinte estrutura:

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **PA01** | **<mark>cteSimpProc</mark>** | **G** | **-** | **-** | **1-1** | | **Grupo de informações do CTe Simplificado e respectiva autorização de uso** |
| PA02 | versao | A | P01 | N | 1-1 | 1-4 | Versão do procCTe |
| PA03 | ipTransmissor | A | P01 | C | 0-1 | | Identificação do endereço IP do emitente transmissor do CTe |
| PA04 | nPortaCon | A | P01 | N | 0-1 | 1-5 | Porta de origem utilizada na conexão (de 0 a 65535) |
| PA05 | dhConexao | A | P01 | D | 0-1 | | Data e hora da conexão de origem.<br>Formato: AAAA-MM-DDThh:mm:ssTZD |
| PA06 | CTeSimp | G | P01 | XML | 1-1 | | XML do CTe Simplificado |
| PA07 | protCTe | G | P01 | XML | 1-1 | | XML da autorização de uso do CTe |
