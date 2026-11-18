<!-- p.04 -->

# 2.b Evento de Manifestação do Adquirente

Inclusão do *layout* do Evento de Manifestação do Adquirente:

Os grupos infEventoMiaA e infEventoMiaR são mutuamente excludentes, devendo ser informado apenas um deles por evento.

*Layout* do Evento de Manifestação da NFS-e Via – Versão 1.00

<!-- REVISAR p.04: a descrição do grupo infEvento (linha em destaque laranja) consta apenas como "c" no original -->

| CAMINHO NO XML | CAMPO | ELE | TIPO | OCOR. | TAM. | DESCRIÇÃO |
|---|---|---|---|---|---|---|
| **evento/** | **evento** | **Raiz** | **-** | **-** | **-** | **TAG raiz** |
| evento/ | versao | A | C | 1-1 | 1-4V2 | Versão do leiaute do evento |
| **evento/** | **infEvento** | **G** | **-** | **1-1** | **-** | **c** |
| evento/infEvento/ | id | ID | C | 1-1 | 62 | O identificador do evento é composto pela concatenação de campos que constam no leiaute.<br><br>A formação deste identificador considera o literal ""EVT"" associado a outras 59 posições numéricas, conforme descrito abaixo:<br><br>""EVT"" +<br>Chave de acesso da NFS-e Via (50) + Código do Evento (06) +<br>Número sequencial do evento (nSeqEvento) (03)<br><br>O código do evento de Manifestação corresponde ao valor tag infEvento sem a primeira posição:<br>Manifestação do Adquirente da NFS-e Via - Aceite - tag e203202 - código do evento 203202<br>Manifestação do Adquirente da NFS-e Via - Rejeição - tag e203204 - código do evento 203204 |
| evento/infEvento/ | verAplic | E | C | 0-1 | 1-20 | Versão do aplicativo que gerou o evento. |
| evento/infEvento/ | nSeqEvento | E | N | 1-1 | 3 | Número sequencial do evento para o mesmo tipo de evento.<br><br>Para os eventos que possam existir mais de um evento do mesmo tipo o ambiente gerador deverá numerar de forma sequencial. |
| evento/infEvento/ | chNFSeVia | CE | N | 1-1 | 50 | Identificador da NFS-e a qual o evento será vinculada. |
| evento/infEvento/ | dhEvento | E | D | 1-1 | - | Data e hora do evento no formato AAAA-MM-DDThh:mm:ssTZD (UTC - Universal Coordinated Time, onde TZD pode ser -02:00 (Fernando de Noronha), -03:00 (Brasília) ou -04:00 (Manaus), no horário de verão serão -01:00, -02:00 e -03:00. Ex.: 2010-08-19T13:00:15-03:00. |

<!-- p.05 -->

| CAMINHO NO XML | CAMPO | ELE | TIPO | OCOR. | TAM. | DESCRIÇÃO |
|---|---|---|---|---|---|---|
| evento/infEvento/ | tpAmb | E | N | 1-1 | 1 | Tipo de ambiente:<br><br>1 - Produção;<br>2 - Homologação; |
| **evento/infEventoMiaA/** | **e203202** | **CG** | **-** | **1-1** | **-** | **Parte Específica do Registro de Evento de Manifestação de NFS-e Via - Com Aceite.** |
| evento/infEvento/e203202/ | xDesc | E | C | 1-1 | 5-60 | Descrição do evento:<br>"Manifestação de Informação do Adquirente da NFS-e Via - Com Aceite" |
| evento/infEvento/e203202/ | tpNi | E | N | 1-1 | 1 | Tipo de Identificação do Adquirente:<br><br>1 - CPF<br>2 - CNPJ |
| evento/infEvento/e203202/ | CNPJCPF | E | C | 1-1 | 11 ou 14 | Para pessoa jurídica, informar o CNPJ do Adquirente da NfS-e Via, conforme padrão vigente da Receita Federal<br><br>Para pessoa física, informar o CPF do Adquirente da NfS-e Via, conforme padrão vigente da Receita Federal |
| evento/infEvento/e203202/ | xRazaoSocial | E | C | 1-1 | 02-60 | Nome ou Razão Social do Adquirente. |
| **evento/infEventoMiaR/** | **e203204** | **CG** | **-** | **1-1** | **-** | **Parte Específica do Registro de Evento de Manifestação de NFS-e Via - Com Rejeição.** |
| evento/infEvento/e203204/ | xDesc | E | C | 1-1 | 5-60 | Descrição do evento:<br>"Manifestação de Informação do Adquirente da NFS-e Via - Com Rejeição" |
| evento/infEvento/e203204/ | tpNi | E | N | 1-1 | 1 | Tipo de Identificação do Adquirente:<br><br>1 - CPF<br>2 - CNPJ |
| evento/infEvento/e203204/ | CNPJCPF | E | C | 1-1 | 11-14 | CNPJ ou CNPF do Adquirente da NFS-e Via. |
| evento/infEvento/e203204/ | xRazaoSocial | E | C | 1-1 | 02-60 | Nome ou Razão Social do Adquirente. |
| evento/infEvento/e203204/ | cMotivo | E | N | 1-1 | 1 | Motivo da Rejeição da NFS-e Via:<br><br>1 - NFS-e Via em duplicidade;<br>2 - Não ocorrência da passagem do veículo;<br>3 – Data da passagem do veículo;<br>4 – Categoria do Veículo;<br>5 - Placa do veículo;<br>6 – Valor do serviço;<br>7 – Modo de Pagamento;<br>8 – Valor das deduções;<br>99 - Outros; |
| evento/infEvento/e203204/ | xMotivoRejeita | E | C | 0-1 | 15-55 | Descrição para explicar o Motivo da Rejeição da NFS-e Via pelo adquirente do Serviço de Exploração de via. |
| **evento/** | **Signature** | **G** | **-** | **1-1** | **-** | **Assinatura do registro segundo o Padrão XML Digital Signature.** |

<!-- p.06 -->

Nas linhas seguintes, o original apresenta destaque em amarelo com texto em vermelho.

| CAMINHO NO XML | CAMPO | ELE | TIPO | OCOR. | TAM. | DESCRIÇÃO |
|---|---|---|---|---|---|---|
| | dhReg | | | | | Data/Hora da recepção do Evento de NFS-e Via.<br>Data e hora no formato UTC (Universal Coordinated Time):<br>AAAA-MM-DDThh:mm:ssTZD |
| | nReg | | | | | "Número do Registro" do Evento da NFS-e Via |
