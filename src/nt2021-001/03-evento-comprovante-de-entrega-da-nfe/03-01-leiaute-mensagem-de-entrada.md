<!-- p.5 -->

# 3.1 Leiaute Mensagem de Entrada

O Web Service de Registro de Evento possui uma interface genérica, complementada por uma área específica para cada tipo de evento. Segue o leiaute da mensagem de entrada deste evento.

**Schema XML: envEventoEntregaNFe_v9.99.xsd**

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **P01** | **envEvento** | **Raiz** | **-** | **-** | **-** | **-** | **TAG raiz** |
| P02 | versao | A | P01 | N | 1-1 | 2v2 | Versão do leiaute |
| P03 | idLote | E | P01 | N | 1-1 | 1-15 | Identificador de controle do Lote de envio do Evento. Número sequencial único para identificação do Lote, de uso exclusivo do autor do evento. O Web Service não faz qualquer uso deste identificador. |
| **P04** | **evento** | **G** | **P01** | **xml** | **1-20** | **-** | **Evento, um lote pode conter até 20 eventos** |
| P05 | versao | A | P04 | N | 1-1 | 2v2 | Versão do leiaute do evento |
| **P06** | **infEvento** | **G** | **P04** | **-** | **1-1** | **-** | **Grupo de informações do registro do Evento** |
| P07 | Id | ID | P06 | C | 1-1 | 54 | Identificador da TAG a ser assinada, formado por: “ID” + tpEvento + Chave da NF-e + nSeqEvento |
| P08 | cOrgao | E | P06 | N | 1-1 | 2 | Código do órgão de recepção do Evento, conforme Tabela do IBGE. Utilizar código 91 - Ambiente Nacional, para este evento. |
| P09 | tpAmb | E | P06 | N | 1-1 | 1 | Identificação do Ambiente: 1=Produção; 2=Homologação |
| P10 | CNPJ | CE | P06 | N | 1-1 | 14 | Informar o CNPJ/CPF do autor do Evento. |
| P11 | CPF | CE | P06 | N | 1-1 | 11 | |
| P12 | chNFe | E | P06 | N | 1-1 | 44 | Chave de Acesso da NF-e à qual o evento será vinculado |
| P13 | dhEvento | E | P06 | D | 1-1 | - | Data e hora do evento. Formato AAAA-MM-DDThh:mm:ssTZD (UTC) |
| P14 | tpEvento | E | P06 | N | 1-1 | 6 | Código do evento: 110130 - “Comprovante Entrega da NF-e” |
| P15 | nSeqEvento | E | P06 | N | 1-1 | 1-2 | Sequencial do evento para o mesmo tipo de evento.<br>O autor do evento deve numerar de forma sequencial os eventos deste tipo, com os valores de 1 a 99.<br>**Nota**: Para informar um novo evento de “Comprovante de Entrega da NF-e” para a mesma NF-e, o evento anterior deverá estar cancelado. |
| P16 | verEvento | E | P06 | N | 1-1 | 2v2 | Versão do grupo de detalhe do evento. |
| **P17** | **detEvento** | **G** | **P06** | | **1-1** | **-** | **Detalhes do evento** |
| P18 | versao | A | P17 | N | 1-1 | 2v2 | Informar o mesmo valor da tag “verEvento” (P16) |
| P19 | descEvento | E | P17 | C | 1-1 | 5-60 | Veja a descrição do evento, junto com o Tipo de Evento documentado anteriormente. |
| P20 | cOrgaoAutor | E | P17 | N | 1-1 | 2 | Código do Órgão Autor do Evento. Informar o Código da UF para este Evento. |
| P21 | tpAutor | E | P17 | N | 1-1 | 1 | Informar 1=Empresa Emitente.<br>**Valores**: 1=Empresa Emitente, 2=Empresa destinatária; 3=Empresa; 5=Fisco; 6=RFB; 9=Outros Órgãos; |
| P22 | verAplic | E | P17 | C | 1-1 | 1-20 | Versão do aplicativo do Autor do Evento. |
| P30 | dhEntrega | E | P17 | D | 1-1 | - | Data e hora do final da entrega. Formato AAAA-MM-DDThh:mm:ssTZD. |
| P31 | nDoc | E | P17 | C | 1-1 | 2-20 | Número do documento de identificação da pessoa que assinou o Comprovante de Entrega da NF-e |
| P32 | xNome | E | P17 | C | 1-1 | 2-60 | Nome da pessoa que assinou o Comprovante de Entrega da NF-e |
| P33 | latGPS | E | P17 | N | 0-1 | [-]2v6 | Latitude do ponto de entrega |
| P34 | longGPS | E | P17 | N | 0-1 | [-]3v6 | Longitude do ponto de entrega |
| P35 | hashComprovante | E | P17 | C | 1-1 | 28 | Hash SHA-1, no formato Base64, resultante da concatenação de: Chave de Acesso da NF-e + Base64 da imagem capturada do Comprovante de Entrega da NF-e.<br>**Nota 1**: A critério do autor do evento, este campo pode ser utilizado como índice para acesso as informações do Comprovante de Entrega da NF-e.<br>**Nota 2**: A SEFAZ não tem nenhum controle sobre a informação do Comprovante de Entrega da NF-e. |
| <!-- p.6 -->P36 | dhHashComprovante | E | P17 | D | 0-1 | - | Data e hora da geração do hash do Comprovante de Entrega da NF-e. Formato AAAA-MM-DDThh:mm:ssTZD. |
| **P91** | **Signature** | **G** | **P04** | **XML** | **1-1** | **-** | **Assinatura Digital do documento XML, a assinatura deverá ser aplicada no elemento infEvento** |
