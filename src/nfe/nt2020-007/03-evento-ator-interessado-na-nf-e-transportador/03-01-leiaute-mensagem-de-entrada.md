<!-- p.5 -->
# 03.1 Leiaute Mensagem de Entrada

O Web Service de Registro de Evento possui uma interface genérica, complementada por uma área específica para cada tipo de evento. Segue o leiaute da mensagem de entrada.

**Schema XML: envEventoNFe_v9.99.xsd**  
**Schema XML - parte específica: leiauteEventoAtorInteressado_v1.00.xsd**

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **P01** | **envEvento** | **Raiz** | **-** | **-** | **-** | **-** | **TAG raiz** |
| P02 | versao | A | P01 | N | 1-1 | 2v2 | Versão do leiaute |
| P03 | idLote | E | P01 | N | 1-1 | 1-15 | Identificador de controle do Lote de envio do Evento. Número sequencial único para identificação do Lote, de uso exclusivo do autor do evento. O Web Service não faz uso deste identificador. |
| **P04** | **evento** | **G** | **P01** | **xml** | **1-20** | **-** | **Evento, um lote pode conter até 20 eventos** |
| P05 | versao | A | P04 | N | 1-1 | 2v2 | Versão do leiaute do evento |
| **P06** | **infEvento** | **G** | **P04** | **-** | **1-1** | **-** | **Grupo de informações do registro do Evento** |
| P07 | Id | ID | P06 | C | 1-1 | 54 | Identificador da TAG a ser assinada, formado por:<br>“ID” + tpEvento + Chave da NF-e + nSeqEvento |
| P08 | cOrgao | E | P06 | N | 1-1 | 2 | Código do órgão de recepção do Evento, conforme Tabela do IBGE. Código da UF do Emitente, ou:<br>91 - Ambiente Nacional |
| P09 | tpAmb | E | P06 | N | 1-1 | 1 | Identificação do Ambiente:<br>1=Produção; 2=Homologação |
| P10 | CNPJ | CE | P06 | N | 1-1 | 14 | Informar o CNPJ/CPF do autor do Evento. |
| P11 | CPF | CE | P06 | N | 1-1 | 11 | |
| P12 | chNFe | E | P06 | N | 1-1 | 44 | Chave de Acesso da NF-e que o evento será vinculado. |
| P13 | dhEvento | E | P06 | D | 1-1 | - | Data e hora do evento. Formato AAAA-MM-DDThh:mm:ss TZD (UTC) |
| P14 | tpEvento | E | P06 | N | 1-1 | 6 | Código do evento:<br>110150 - “Ator interessado na NF-e” |
| P15 | nSeqEvento | E | P06 | N | 1-1 | 1-2 | Sequencial do evento para o mesmo tipo de evento. Valores de 1 a 20. |
| P16 | verEvento | E | P06 | N | 1-1 | 2v2 | Versão do grupo de detalhe do evento. |
| **P17** | **detEvento** | **G** | **P06** | | **1-1** | **-** | **Detalhes do evento** |
| P18 | versao | A | P17 | N | 1-1 | 2v2 | Informar o mesmo valor da tag “verEvento” (P16) |
| P19 | descEvento | E | P17 | C | 1-1 | 5-60 | Descrição do Evento, conforme documentado junto com o Código do Evento (Id: P14). |
| P20 | cOrgaoAutor | E | P17 | N | 1-1 | 2 | Código da UF do emitente do Evento. |
| P21 | tpAutor | E | P17 | N | 1-1 | 1 | Informar uma das opções abaixo:<br>1=Geração do Evento pelo Emitente;<br>2=Geração do Evento pelo Destinatário;<br>3=Geração do Evento pelo Transportador Contratado;<br>**Valores**: 1=Empresa Emitente, 2=Empresa Destinatária; 3=Empresa Transportadora. |
| P22 | verAplic | E | P17 | C | 1-1 | 1-20 | Versão do aplicativo do Autor do Evento. |
| **P23** | **autXML** | **G** | **P17** | **-** | **1-1** | **-** | **Pessoas autorizadas a acessar o XML da NF-e** |
| P24 | CNPJ | CE | P23 | N | 1-1 | 3-14 | CNPJ autorizado |
| P25 | CPF | CE | P23 | N | 1-1 | 3-11 | CPF autorizado |
| P26 | tpAutorizacao | E | P17 | N | 0-1 | 1 | 0 – Não permite;<br>1 – Permite o transportador autorizado pelo emitente ou destinatário autorizar outros transportadores para ter acesso ao download da NF-e |
| <!-- p.6 -->P27 | xCondUso | E | P17 | C | 0-1 | - | Condição de uso do tipo de autorização para o transportador: “O emitente ou destinatário da NF-e, declara que permite o transportador declarado no campo CNPJ/CPF deste evento a autorizar os transportadores subcontratados ou redespachados a terem acesso ao download da NF-e” |
| **P91** | **Signature** | **G** | **P04** | **XML** | **1-1** | **-** | **Assinatura Digital do documento XML, a assinatura deverá ser aplicada no elemento infEvento.** |
