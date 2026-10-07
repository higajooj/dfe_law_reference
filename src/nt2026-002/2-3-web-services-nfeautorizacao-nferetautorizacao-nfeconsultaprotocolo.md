<!-- p.5 -->
# 2.3. Web Services - NfeAutorizacao, NFeRetAutorizacao e NFeConsultaProtocolo

Atualmente já existe a possibilidade da Sefaz retornar uma mensagem para o contribuinte, no grupo PR13, na estrutura XML do protNFe (Dados do Protocolo de recebimento da NF-e). As informações resultantes das aplicações das regras de validação serão colocadas nos campos da mensagem de retorno, conforme detalhado abaixo:

| Natureza da mensagem | Elemento pai | Código | Motivo |
|---|---|---|---|
| Rejeição | PR03 (infProt) | PR11 (cStat) | PR12 (xMotivo) |
| Alerta | PR13 (Sequência XML) | PR14 (cMsg) | PR15 (xMsg) |

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **PR01** | **protNFe** | **Raiz** | **-** | **-** | **-** | **-** | **TAG raiz do Protocolo de recebimento da NFe** |
| PR02 | versao | A | PR01 | N | 1-1 | 2v2 | Versão do leiaute das informações de Protocolo. |
| **PR03** | **infProt** | **G** | **PR01** | **-** | **1-1** | **-** | **Informações do Protocolo de resposta.<br>TAG a ser assinada** |
| PR04 | Id | ID | PR03 | C | 0-1 | - | Identificador da TAG a ser assinada, somente precisa ser informado se a UF assinar a resposta.<br>Em caso de assinatura da resposta pela SEFAZ preencher o campo com o Número do Protocolo, precedido com o literal “ID” |
| PR05 | tpAmb | E | PR03 | N | 1-1 | 1 | Identificação do Ambiente:<br>1 - Produção/2 - Homologação |
| PR06 | verAplic | E | PR03 | C | 1-1 | 1-20 | Versão do Aplicativo que processou o Lote.<br>A versão deve ser iniciada com a sigla da UF nos casos de WS próprio ou a sigla SVAN ou SVRS nos demais casos. |
| PR07 | chNFe | E | PR03 | N | 1-1 | 44 | Chave de Acesso da NF-e (vide item 5.4) |
| PR08 | dhRecbto | E | PR03 | D | 1-1 | - | Preenchido com a data e hora do processamento (informado também no caso de rejeição).<br>Formato: “AAAA-MM-DDThh:mm:ssTZD” (UTC - Universal Coordinated Time). |
| PR09 | nProt | E | PR03 | N | 0-1 | 15, 17 | Número do Protocolo da NF-e |
| PR10 | digVal | E | PR03 | C | 0-1 | 28 | Digest Value da NF-e processada<br>Utilizado para conferir a integridade da NFe original. |
| PR11 | cStat | E | PR03 | N | 1-1 | 3-4 | Código do status da resposta para a NF-e |
| PR12 | xMotivo | E | PR03 | C | 1-1 | 1-255 | Descrição literal do status da resposta para a NF-e. |
| **PR13** | **Sequência XML** | **G** | **PR03** | | **0-5** | | **Grupo de informações para envio de mensagens do interesse da SEFAZ (Criado na NT 2018.005)** |
| PR14 | cMsg | E | PR13 | N | 0-1 | 1-4 | Código da Mensagem. (Criado na NT 2018.005) |
| PR15 | xMsg | E | PR13 | C | 1-1 | 1-255 | Mensagem da SEFAZ para o emissor. (Criado na NT 2018.005) |
| **PR90** | **Signature** | **G** | **PR01** | **xml** | **0-1** | **-** | **Assinatura XML do grupo identificado pelo atributo “Id”.<br>A decisão de assinar a mensagem fica a critério da UF interessada.** |
