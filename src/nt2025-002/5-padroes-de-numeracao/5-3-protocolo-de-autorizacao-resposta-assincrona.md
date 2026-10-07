<!-- p.12 -->
# 5.3. Protocolo de Autorização da NF-e – Resposta Assíncrona (Consulta Recibo)

Alteração da seção 5.2.2 do MOC - Leiaute Mensagem de Retorno.

**Retorno:** Estrutura XML com o resultado do processamento da mensagem de envio de lote de NF-e.

- Para cada Protocolo de uma NF-e processada teremos o seguinte leiaute:

**Schema XML: retConsReciNFe_v4.00.xsd**

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **PR01** | **protNFe** | **Raiz** | **-** | **-** | **-** | **-** | **TAG raiz do Protocolo de recebimento da NFe** |

<!-- p.13 -->
| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| PR02 | versao | A | PR01 | N | 1-1 | 2v2 | Versão do leiaute das informações de Protocolo. |
| **PR03** | **infProt** | **G** | **PR01** | **-** | **1-1** | **-** | **Informações do Protocolo de resposta. TAG a ser assinada** |
| PR04 | Id | ID | PR03 | C | 0-1 | - | Identificador da TAG a ser assinada, somente precisa ser informado se a SEFAZ Autorizadora assinar a resposta. Neste caso, preencher o campo com o Número do Protocolo, precedido com o literal “ID” |
| PR05 | tpAmb | E | PR03 | N | 1-1 | 1 | Identificação do Ambiente: 1=Produção/2=Homologação |
| PR06 | verAplic | E | PR03 | C | 1-1 | 1-20 | Versão do Aplicativo que processou o Lote. A versão deve ser iniciada com a sigla da UF nos casos de WS próprio ou a sigla SVAN ou SVRS nos demais casos. |
| PR07 | chNFe | E | PR03 | N | 1-1 | 44 | Chave de Acesso da NF-e |
| PR08 | dhRecbto | E | PR03 | D | 1-1 | - | Preenchido com a data e hora do processamento (informado também no caso de rejeição). Formato: “AAAA-MM-DDThh:mm:ssTZD” (UTC – Universal Coordinated Time). |
| PR09 | nProt | E | PR03 | N | 0-1 | 15,17 | Número do Protocolo da NF-e, conforme item **4.3.5** do MOC |
| PR10 | digVal | E | PR03 | C | 0-1 | 28 | Digest Value da NF-e processada. Utilizado para conferir a integridade da NFe original. |
| PR11 | cStat | E | PR03 | N | 1-1 | 3-4 | Código do status da resposta |
| PR12 | xMotivo | E | PR03 | C | 1-1 | 1-255 | Descrição literal do status da resposta para a NF-e. |
| **PR13** | **Sequência XML** | **G** | **PR03** | - | **0-1** | - | **Grupo de informações para envio de mensagens do interesse da SEFAZ (Criado na NT 2018.005)** |
| PR14 | cMsg | E | PR13 | N | 0-1 | 1-4 | Código da Mensagem. (Criado na NT 2018.005) |
| PR15 | xMsg | E | PR13 | C | 1-1 | 1-200 | Mensagem da SEFAZ para o emissor. (Criado na NT 2018.005) |
| **PR90** | **Signature** | **G** | **PR01** | **xml** | **0-1** | **-** | **Assinatura XML do grupo identificado pelo atributo “Id”.<br>A decisão de assinar a mensagem fica a critério da UF interessada.** |
