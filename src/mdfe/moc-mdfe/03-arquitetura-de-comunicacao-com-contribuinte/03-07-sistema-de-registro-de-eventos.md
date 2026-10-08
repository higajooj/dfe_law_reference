# 3.7 Sistema de Registro de Eventos

O Sistema de Registro de Eventos do MDFe – SRE é o modelo genérico que permite o registro de evento de interesse do MDFe originado a partir do próprio contribuinte ou da administração tributária.

Um evento é o registro de um fato relacionado com o documento fiscal eletrônico, esse evento pode ou não modificar a situação do documento (por exemplo: cancelamento) ou até mesmo substituí-lo por outro (por exemplo: substituição).

<!-- p.28 -->

O serviço para registro de eventos será disponibilizado pelo Ambiente Autorizador através de Web Service de processamento síncrono e será propagado para os demais órgãos interessados pelo mecanismo de compartilhamento de documentos fiscais eletrônicos. As mensagens de evento utilizarão o padrão XML já definido para o projeto MDFe contendo a assinatura digital do emissor do evento (seja ele contribuinte ou fisco).

O registro do evento requer a existência do MDFe vinculada no Ambiente Autorizador, contudo alguns tipos de eventos poderão ser registrados sem que exista o MDFe na base de dados do autorizador em conformidade com as regras de negócio estabelecidas para este tipo de evento.

O modelo de mensagem do evento deverá ter um conjunto mínimo de informações comuns, a saber:

- Identificação do autor da mensagem;
- Identificação do evento;
- Identificação do MDFe vinculado;
- Informações específicas do evento;
- Assinatura digital da mensagem;

O Web Service será único com a funcionalidade de tratar eventos de forma genérica para facilitar a criação de novos eventos sem a necessidade de criação de novos serviços e com poucas alterações na aplicação de Registro de Eventos do Ambiente Autorizador.

O leiaute da mensagem de Registro de Evento seguirá o modelo adotado para o documento MDFe, contendo uma parte genérica (comum a todos os tipos de evento) e uma parte específica onde será inserido o XML correspondente a cada tipo de evento em uma tag do tipo `any`.

As regras de validação referentes à parte genérica dos eventos estarão descritas no item 5 deste manual.

As validações específicas de cada tipo de evento estarão descritas no item 6 deste Manual, originando um novo subitem para cada tipo de evento especificado.

O Pacote de Liberação de schemas do MDFe deverá conter o leiaute da parte genérica do Registro de Eventos e um schema para cada leiaute específico dos eventos definidos neste manual.

<!-- p.29 -->

## 3.7.1 Relação dos Tipos de Evento

Os eventos identificados abaixo serão construídos gradativamente pelo ambiente autorizador, assim como novos eventos poderão ser identificados e acrescentados nesta tabela em futuras versões deste MOC.

| Tipo de Evento | Descrição Evento | Autor do Evento | Meio Informação | MDFe deve existir? |
|---|---|---|---|---|
| **Evento: Empresa Emitente** | | | | |
| 110111 | Cancelamento | 1- Emitente | 1=via WS Evento | Sim |
| 110112 | Encerramento | 1- Emitente | 1=via WS Evento | Sim |
| 110114 | Inclusão de Condutor | 1- Emitente | 1=via WS Evento | Sim |
| 110115 | Inclusão de DF-e | 1- Emitente | 1=via WS Evento | Sim |
| 110116 | Pagamento da operação de transporte | 1 - Emitente | 1=via WS Evento | Sim |
| 110118 | Alteração no Pagamento do Serviço de Transporte | 1 - Emitente | 1=via WS Evento | Sim |
| **Evento: Contratante** | | | | |
| 110117 | Confirmação do Serviço de Transporte | 4 – Contratante | 1=via WS Evento | Sim |
| **Evento: Fisco / Outros** | | | | |
| 310620 | Registro de Passagem | 3-Fisco | 1=via WS Evento | Não |
| 510620 | Registro de Passagem Automático (ONE) | 5-Outros | 1=via WS Evento | Não |
| 310112 | Encerramento do Fisco | 3 – Fisco (SVRS) | 1=via WS Evento | Sim |
| **Evento: Fisco Emitente** | | | | |
| 240170 | Liberação Prazo Cancelamento | 2-Fisco Emitente | 1=via WS Evento; 2=via Extranet MDFe | Sim |
| **Evento: FAT-e** | | | | |
| 900120 | Registro de Cessão Ônus Gravame de D-e | 9-SVBA | 1=via WS Evento | Sim |
| 900121 | Cancelamento de Registro de Cessão Ônus Gravame de D-e | 9-SVBA | 1=via WS Evento | Sim |
| 900134 | Pagamento Total de D-e | 9-SVBA | 1=via WS Evento | Sim |
| 900135 | Cancelamento de Pagamento Total de D-e | 9-SVBA | 1=via WS Evento | Sim |
| 900136 | Baixa de Ativo Financeiro em Garantia | 9-SVBA | 1=via WS Evento | Sim |
| 900137 | Cancelamento de Baixa de Ativo Financeiro em Garantia | 9-SVBA | 1=via WS Evento | Sim |

## 3.7.2 Eventos de Marcação

Serão gerados eventos de marcação a partir do MDFe para os casos em que o documento referenciar outro, seja CTe, NFe ou outro MDFe.

<!-- p.30 -->

Eventos dessa natureza ocorrem por necessidade de marcação dos documentos relacionados na carga de um MDFe, para evitar seu cancelamento e dar ciência as administrações tributárias da efetiva prestação do serviço de transporte.

Esses eventos serão gerados automaticamente pelo Fisco no momento da autorização dos documentos e assinados digitalmente com certificado digital do ambiente autorizador do MDFe.

São exemplos de eventos de marcação:

- Evento MDFe autorizado/cancelado no CTe e nas NFe
- Evento registro de passagem posto fiscal/automático no CTe e NFe

Os eventos de marcação serão propagados nos documentos fiscais transportados à medida que estes forem inseridos pelo evento de Inclusão de DF-e (110115) no MDFe com indicação de carregamento posterior.

