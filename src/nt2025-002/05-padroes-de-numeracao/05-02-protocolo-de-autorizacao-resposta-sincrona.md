<!-- p.11 -->
# 5.2. Protocolo de Autorização da NF-e / NFC-e – Resposta Síncrona

Alteração da seção 5.1.2 do MOC - Leiaute Mensagem de Retorno.

**Schema XML: retEnviNFe_v2.00.xsd**

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **AR01** | **retEnviNFe** | **Raiz** | **-** | **-** | **-** | **-** | **TAG raiz da Resposta** |
| AR02 | versao | A | AR01 | N | 1-1 | 1-2v2 | Versão do leiaute |
| AR03 | tpAmb | E | AR01 | N | 1-1 | 1 | Identificação do Ambiente: 1 – Produção/2 - Homologação |
| AR04 | verAplic | E | AR01 | C | 1-1 | 1-20 | Versão do Aplicativo que recebeu o Lote.<br>A versão deve ser iniciada com a sigla da UF nos casos de WS próprio ou a sigla SVAN ou SVRS nos demais casos. |
| AR05 | cStat | E | AR01 | N | 1-1 | 3-4 | Código do status da resposta (vide item 5.2) |
| AR06 | xMotivo | E | AR01 | C | 1-1 | 1-255 | Descrição literal do status da resposta |
| AR06a | cUF | E | AR01 | N | 1-1 | 2 | Código da UF que atendeu a solicitação. |

<!-- p.12 -->
| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| AR06b | dhRecbto | E | AR01 | D | 1-1 | | Preenchido com a data e hora do processamento (informado também no caso de rejeição).<br>Formato: “AAAA-MM-DDThh:mm:ssTZD” (UTC - Universal Coordinated Time). |
| **AR07** | **infRec** | **CG** | **AR01** | **-** | **0-1** | **-** | **Dados do Recibo do Lote (Só é gerado se o Lote for aceito e o processamento for assíncrono)** |
| AR08 | nRec | E | AR07 | N | 1-1 | 15 | Número do Recibo gerado pelo Portal da Secretaria de Fazenda Estadual (vide item 5.5). |
| AR10 | tMed | E | AR07 | N | 1-1 | Nv1-4 | Tempo médio de resposta do serviço (em segundos) dos últimos 5 minutos (vide item 5.7).<br>Nota: Caso o tempo médio de resposta fique abaixo de 1 (um) segundo, o tempo será informado como 1 segundo. Arredondar as frações de segundos para cima. |
| | -x- | | | | | | |
| AR11 | protNFe | CG | AR01 | - | 0-1 | - | Dados do Protocolo de recebimento da NF-e gerado no caso do processamento síncrono do Lote de NF-e. Ver descrição do “protNFe” no item 4.2.2. |

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **PR01** | **protNFe** | **Raiz** | **-** | **-** | **-** | **-** | **TAG raiz do Protocolo de recebimento da NFe** |
| PR02 | versao | A | PR01 | N | 1-1 | 2v2 | Versão do leiaute das informações de Protocolo. |
| **PR03** | **infProt** | **G** | **PR01** | **-** | **1-1** | **-** | **Informações do Protocolo de resposta. TAG a ser assinada** |
| PR04 | Id | ID | PR03 | C | 0-1 | - | Identificador da TAG a ser assinada, somente precisa ser informado se a UF assinar a resposta. Em caso de assinatura da resposta pela SEFAZ preencher o campo com o Nro do Protocolo, precedido com o literal “ID” |
| PR05 | tpAmb | E | PR03 | N | 1-1 | 1 | Identificação do Ambiente: 1 – Produção/2 - Homologação |
| PR06 | verAplic | E | PR03 | C | 1-1 | 1-20 | Versão do Aplicativo que processou o Lote.<br>A versão deve ser iniciada com a sigla da UF nos casos de WS próprio ou a sigla SVAN ou SVRS nos demais casos. |
| PR07 | chNFe | E | PR03 | N | 1-1 | 44 | Chave de Acesso da NF-e (vide item 5.4) |
| PR08 | dhRecbto | E | PR03 | D | 1-1 | - | Preenchido com a data e hora do processamento (informado também no caso de rejeição).<br>Formato: “AAAA-MM-DDThh:mm:ssTZD” (UTC - Universal Coordinated Time). |
| PR09 | nProt | E | PR03 | N | 0-1 | 15,17 | Número do Protocolo da NF-e (vide item 5.8) |
| PR10 | digVal | E | PR03 | C | 0-1 | 28 | Digest Value da NF-e processada. Utilizado para conferir a integridade da NFe original. |
| PR11 | cStat | E | PR03 | N | 1-1 | 3-4 | Código do status da resposta para a NF-e (vide item 5.2). |
| PR12 | xMotivo | E | PR03 | C | 1-1 | 1-255 | Descrição literal do status da resposta para a NF-e. |
| **PR13** | **Signature** | **G** | **PR01** | **xml** | **0-1** | **-** | **Assinatura XML do grupo identificado pelo atributo “Id”.<br>A decisão de assinar a mensagem fica a critério da UF interessada.** |
