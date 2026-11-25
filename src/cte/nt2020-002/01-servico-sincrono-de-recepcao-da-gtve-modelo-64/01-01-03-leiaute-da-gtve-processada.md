# 1.1.3 Leiaute da GTVe processada

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **PR01** | **protCTe** | **Raiz** | **-** | **-** | **-** | **-** | **TAG raiz da resposta processamento** |
| PR02 | versao | A | PR01 | N | 1 - 1 | 2v2 | Versão do leiaute |
| **PR03** | **infProt** | **G** | **PR01** | **-** | **1 - 1** | **-** | **Informações do protocolo de resposta** |
| PR04 | Id | A | PR03 | C | 0 - 1 | - | Identificador da TAG a ser assinada, somente precisa ser informado se a UF assinar a resposta.<br>Em caso de assinatura da resposta pela SEFAZ <!-- p.06 -->preencher o campo com o Nro do Protocolo, precedido com o literal “ID” |
| PR05 | tpAmb | E | PR03 | N | 1 - 1 | 1 | Identificação do Ambiente:<br>1 – Produção / 2 - Homologação |
| PR06 | verAplic | E | PR03 | C | 1 - 1 | 1-20 | Versão do Aplicativo que recebeu a GTVe |
| PR07 | chCTe | E | PR03 | N | 1 - 1 | 44 | Chave de acesso da GTVe |
| PR08 | dhRecbto | E | PR03 | D | 1 - 1 | - | Data e Hora do Processamento<br>Formato = AAAA-MM-DDTHH:MM:SS TZD<br>Preenchido com data e hora da gravação do CT-e no Banco de Dados.<br>Em caso de Rejeição, com data e hora do recebimento do Arquivo de GTVe enviado. |
| PR09 | nProt | E | PR03 | N | 0 - 1 | 15 | Número do protocolo de autorização do GTVe |
| PR10 | digVal | E | PR03 | C | 0 - 1 | 28 | Digest Value da GTVe processada, utilizado para conferir a integridade com a GTVe original |
| PR11 | cStat | E | PR03 | N | 1 - 1 | 3 | Código do status da resposta para a GTVe |
| PR12 | xMotivo | E | PR03 | C | 1 - 1 | 1-255 | Descrição literal do status da resposta para a GTVe |
| **PR13** | **infFisco** | **G** | **PR01** | **-** | **0 - 1** | **-** | **Grupo reservado para envio de mensagem do Fisco para o contribuinte** |
| PR14 | cMsg | E | PR13 | N | 1 - 1 | 3 | Código de status da mensagem do fisco |
| PR15 | xMsg | E | PR13 | C | 1 - 1 | 1-255 | Mensagem do Fisco para o contribuinte |
| **PR16** | **Signature** | **G** | **PR01** | **XML** | **0 - 1** | **-** | **Assinatura XML do grupo identificado pelo atributo “ID”<br>A decisão de assinar a mensagem fica a critério da UF interessada.** |
