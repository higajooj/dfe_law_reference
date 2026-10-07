<!-- p.13 -->
# 5.4. Protocolo de Autorização do Pedido de Inutilização

Alteração da seção 5.3.2 do MOC - Leiaute Mensagem de Retorno.

**Schema XML: retInutNFe_v4.00.xsd**

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **DR01** | **retInutNFe** | **Raiz** | **-** | **-** | **-** | **-** | **TAG raiz da Resposta** |
| DR02 | versao | A | DR01 | N | 1-1 | 1-2v2 | Versão do leiaute |
| **DR03** | **infInut** | **G** | **DR01** | **-** | **1-1** | **-** | **Dados da resposta - TAG a ser assinada** |
| DR04 | Id | ID | DR03 | C | 0-1 | 17 | Identificador da TAG a ser assinada, somente precisa ser informado se a UF assinar a resposta. Em caso de assinatura da resposta pela SEFAZ preencher o campo com o Nro do Protocolo, precedido com o literal “ID”. |
| DR05 | tpAmb | E | DR03 | N | 1-1 | 1 | Identificação do Ambiente: 1 – Produção/2 – Homologação |
| DR06 | verAplic | E | DR03 | C | 1-1 | 1-20 | Versão do Aplicativo que processou o pedido de inutilização. A versão deve ser iniciada com a sigla da UF nos casos de WS próprio ou a sigla SVAN ou SVRS nos demais casos. |
| DR07 | cStat | E | DR03 | N | 1-1 | 3-4 | Código do status da resposta (vide item 5.2). |
| DR08 | xMotivo | E | DR03 | C | 1-1 | 1-255 | Descrição literal do status da resposta. |
| DR09 | cUF | E | DR03 | N | 1-1 | 2 | Código da UF que atendeu a solicitação |
| | | | | | | | **Os campos a seguir são obrigatórios no caso de homologação da inutilização cStat=102.**<br>**Os campos de dhRecbto e nProt não serão preenchidos em caso de erro** |

<!-- p.14 -->
| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| DR10 | ano | E | DR03 | N | 0-1 | 2 | Ano de inutilização da numeração |
| DR11 | CNPJ | E | DR03 | C | 0-1 | 14 | CNPJ do emitente |
| DR12 | mod | E | DR03 | N | 0-1 | 2 | Modelo da NF-e |
| DR13 | serie | E | DR03 | N | 0-1 | 1-3 | Série da NF-e |
| DR14 | nNFIni | E | DR03 | N | 0-1 | 1-9 | Número da NF-e inicial a ser inutilizada |
| DR15 | nNFFin | E | DR03 | N | 0-1 | 1-9 | Número da NF-e final a ser inutilizada |
| DR16 | dhRecbto | E | DR03 | D | 1-1 | - | Preenchido com a data e hora do processamento (informado também no caso de rejeição).<br>Formato: “AAAA-MM-DDThh:mm:ssTZD” (UTC - Universal Coordinated Time). |
| DR17 | nProt | E | DR03 | N | 0-1 | 15, 17 | Número do Protocolo de Inutilização (vide item 5.8). |
| **DR18** | **Signature** | **G** | **DR01** | **xml** | **0-1** | **-** | **Assinatura XML do grupo identificado pelo atributo “Id”. A decisão de assinar a mensagem fica a critério da UF interessada.** |
