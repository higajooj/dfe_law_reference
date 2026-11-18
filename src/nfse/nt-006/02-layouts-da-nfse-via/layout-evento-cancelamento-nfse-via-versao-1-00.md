<!-- p.12 -->

# *Layout* do Evento de cancelamento da NFS-e Via – Versão 1.00

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **E01** | **evento** | **Raiz** | **-** | **-** | **-** | **-** | **TAG raiz** |
| E02 | versao | A | E01 | C | 1-1 | 1-4V2 | Versão do leiaute do evento |
| **E03** | **infEvento**<!-- REVISAR p.12: descrição do grupo infEvento aparece apenas como "c" no original; transcrito literalmente --> | **G** | **E01** | **-** | **1-1** | **-** | **c** |
| E04 | id | ID | E03 | C | 1-1 | 62 | O identificador do evento é composto pela concatenação de campos que constam no leiaute.<br><br>A formação deste identificador considera o literal "EVT" associado a outras 59 posições numéricas, conforme descrito abaixo:<br><br>"EVT" +<br>Chave de acesso da NFS-e Via (50) + Código do Evento (06) +<br>Número sequencial do evento (nSeqEvento) (03)<br><br>O código do evento corresponde ao valor informado na tag infEvento sem a primeira posição:<br>Cancelamento de NFS-e Via - tag e101101 - código do evento 101101<br>Cancelamento de NFS-e Via por substituição - tag e105102 - código do evento 105102 |
| E05 | verAplic | E | E03 | C | 0-1 | 1-20 | Versão do aplicativo que gerou o evento. |
| E06 | nSeqEvento | E | E03 | N | 1-1 | 3 | Número sequencial do evento para o mesmo tipo de evento.<br><br>Para os eventos que ocorrem somente uma vez, como é o caso do cancelamento, o nSeqEvento = 001.<br><br>Para os eventos que possam existir mais de um evento do mesmo tipo o ambiente gerador deverá numerar de forma sequencial. |
| E07 | chNFSeVia | CE | E03 | N | 1-1 | 50 | Identificador da NFS-e a qual o evento será vinculada. |
| E08 | dhEvento | E | E03 | D | 1-1 | - | Data e hora do evento no formato AAAA-MM-DDThh:mm:ssTZD (UTC - Universal Coordinated Time, onde TZD pode ser -02:00 (Fernando de Noronha), -03:00 (Brasília) ou -04:00 (Manaus), no horário de verão serão -01:00, -02:00 e -03:00. Ex.: 2010-08-19T13:00:15-03:00. |
| E09 | tpAmb | E | E03 | N | 1-1 | 1 | Tipo de ambiente:<br>1 - Produção;<br>2 - Homologação; |
| **E10** | **e101101** | **CG** | **E03** | **-** | **1-1** | **-** | **Parte Específica do Registro de Evento<br>Evento Cancelamento de NFS-e** |
| E11 | xDesc | E | E10 | C | 1-1 | 5-60 | Descrição do evento:<br>"Cancelamento de NFS-e" |
| E12 | cMotivo | E | E10 | N | 1-1 | 1 | Código de justificativa de cancelamento:<br><br>2 - Serviço não Prestado; |
| E13 | xMotivo | E | E10 | C | 1-1 | 15-255 | Descrição para explicitar o motivo indicado neste evento. |
| **E14** | **e105102** | **CG** | **E03** | **-** | **1-1** | **-** | **Parte Específica do Registro de Evento<br>Cancelamento de NFS-e por Substituição** |
| E15 | xDesc | E | E14 | C | 1-1 | 5-60 | Descrição do evento:<br>"Cancelamento de NFS-e por Substituição" |
| <!-- p.13 -->E16 | cMotivo | E | E14 | N | 1-1 | 1 | Código de justificativa de cancelamento substituição:<br><br>1 - Erro na Emissão |
| E17 | xMotivo | E | E14 | C | 0-1 | 15-255 | Descrição para explicitar o motivo indicado neste evento. |
| E18 | chSubstituta | E | E14 | C | 1-1 | 50 | Chave de Acesso da NFS-e substituta. |
| **E19** | **Signature** | **G** | **E01** | **-** | **1-1** | **-** | **Assinatura do registro segundo o Padrão XML Digital Signature.** |
|  | <mark>dhReg</mark><!-- REVISAR p.13: linha sem caminho, Ele, Tipo, Ocor. e Tam. no original (destaque amarelo, texto vermelho); campos deixados em branco --> |  |  |  |  |  | <mark>Data/Hora da recepção do Evento de NFS-e Via.<br>Data e hora no formato UTC (Universal Coordinated Time):<br>AAAA-MM-DDThh:mm:ssTZD</mark> |
|  | <mark>nReg</mark> |  |  |  |  |  | <mark>"Número do Registro" do Evento da NFS-e Via</mark> |
