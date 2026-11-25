<!-- p.26 -->

# 3.7. Sistema de Registro de Eventos

O Sistema de Registro de Eventos do CTe – SRE é o modelo genérico que permite o registro de evento de interesse do CTe originado a partir do próprio contribuinte ou da administração tributária.

Um evento é o registro de um fato relacionado com o documento fiscal eletrônico, esse evento pode ou não modificar a situação do documento (por exemplo: cancelamento) ou até mesmo substituí-lo por outro (por exemplo: substituição).

O serviço para registro de eventos será disponibilizado pelo Ambiente Autorizador através de Web Service de processamento síncrono e será propagado para os demais órgãos interessados pelo mecanismo de compartilhamento de documentos fiscais eletrônicos. As mensagens de evento utilizarão o padrão XML já definido para o projeto CTe contendo a assinatura digital do emissor do evento (seja ele contribuinte ou fisco).

O registro do evento requer a existência do CTe vinculado no Ambiente Autorizador, contudo alguns tipos de eventos poderão ser registrados sem que exista o CTe na base de dados do autorizador em conformidade com as regras de negócio estabelecidas para este tipo de evento.

O modelo de mensagem do evento deverá ter um conjunto mínimo de informações comuns, a saber:

- Identificação do autor da mensagem;
- Identificação do evento;
- Identificação do CTe vinculado;
- Informações específicas do evento;
- Assinatura digital da mensagem.

O Web Service será único com a funcionalidade de tratar eventos de forma genérica para facilitar a criação de novos eventos sem a necessidade de criação de novos serviços e com poucas alterações na aplicação de Registro de Eventos do Ambiente Autorizador.

O leiaute da mensagem de Registro de Evento seguirá o modelo adotado para o documento CTe, contendo uma parte genérica (comum a todos os tipos de evento) e uma parte específica onde será inserido o XML correspondente a cada tipo de evento em uma tag do tipo ***any***.

As regras de validação referentes à parte genérica dos eventos estarão descritas no item 5 deste manual.

As validações específicas de cada tipo de evento estarão descritas no item 6 deste Manual, originando um novo subitem para cada tipo de evento especificado.

<!-- p.27 -->

O Pacote de Liberação de schemas do CTe deverá conter o leiaute da parte genérica do Registro de Eventos e um schema para cada leiaute específico dos eventos definidos neste manual.

## 3.7.1 Relação dos Tipos de Evento

Os eventos identificados abaixo serão construídos gradativamente pelo ambiente autorizador, assim como novos eventos poderão ser identificados e acrescentados nesta tabela em futuras versões deste MOC.

| Tipo de Evento | Modelo de CTe | Descrição Evento | Tipo de Autor do Evento | Tipo de Meio Informação | Local Evento | CTe deve existir? |
|---|---|---|---|---|---|---|
| **Evento: Empresa Emitente** | | | | | | |
| 110110 | 57 e 67 | Carta de Correção | 1-Empresa Emitente | 1=via WS Evento | SEFAZ Autoriz. | Sim |
| 110111 | 57, 67 e 64 | Cancelamento | 1-Empresa Emitente | 1=via WS Evento | SEFAZ Autoriz. | Sim |
| 110113 | 57 | EPEC | 1-Empresa Emitente | 1=via WS Evento | SVC | Não |
| 110160 | 57 | Registros do Multimodal | 1-Empresa Emitente | 1=via WS Evento | SEFAZ Autoriz. | Sim |
| 110170 | 67 | Informações da GTV | 1-Empresa Emitente | 1=via WS Evento | SEFAZ Autoriz. | Sim |
| 110180 | 57 | Comprovante de Entrega | 1-Empresa Emitente | 1=via WS Evento | SEFAZ Autoriz. | Sim |
| 110181 | 57 | Cancelamento do Comprovante de Entrega | 1-Empresa Emitente | 1=via WS Evento | SEFAZ Autoriz. | Sim |
| **Evento: Fisco** | | | | | | |
| 310620 | 57 | Registro de Passagem | 3-Fisco | 1=via WS Evento | Ambiente Nacional | Não |
| 510620 | 57 | Registro de Passagem Automático | 3-Fisco | 1=via WS Evento | Ambiente Nacional | Não |
| 310610 | 57 | MDFe Autorizado | 3-Fisco | 1=via WS Evento | Ambiente Nacional Cte | Não |
| 310611 | 57 | MDFe Cancelado | 3-Fisco | 1=via WS Evento | Ambiente Nacional Cte | Não |
| **Evento: Fisco do Emitente** | | | | | | |
| 240130 | 57 e 67 | Autorizado CTe complementar | 2-Fisco do Emitente | 1=via WS Evento ou 4=via integração | SEFAZ Autoriz. | Sim |
| 240131 | 57 e 67 | Cancelado CTe complementar | 2-Fisco do Emitente | 1=via WS Evento ou 4=via integração | SEFAZ Autoriz. | Sim |
| 240140 | 57 e 67 | CTe de Substituição | 2-Fisco do Emitente | 1=via WS Evento ou 4=via integração | SEFAZ Autoriz. | Sim |
| 240160 | 57 | Liberação de EPEC | 2-Fisco do Emitente | 1=via WS Evento ou 4=via integração | SVC | Sim |
| 240170 | 57 e 67 | Liberação Prazo Cancelamento | 2–Fisco do Emitente | 1=via WS Evento ou 4=via integração | SEFAZ Autoriz. | Sim |
| 240180 | 64 | Autorizado CTe OS | 2-Fisco do Emitente | 1=via WS Evento ou 4=via integração | SEFAZ Autoriz. | Sim |
| 240181 | 64 | Cancelado CTe OS | 2-Fisco do Emitente | 1=via WS Evento ou 4=via integração | SEFAZ Autoriz. | Sim |
| <!-- p.28 -->**Evento: Fisco do CTe relacionado** | | | | | | |
| 440130 | 57 | Autorizado Redespacho | 4-Fisco da chave relacionada | 1=via WS Evento ou 4=via integração | SEFAZ Autoriz. | Não |
| 440140 | 57 | Autorizado Redespacho intermediário | 4-Fisco da chave relacionada | 1=via WS Evento ou 4=via integração | SEFAZ Autoriz. | Não |
| 440150 | 57 | Autorizado Subcontratação | 4-Fisco da chave relacionada | 1=via WS Evento ou 4=via integração | SEFAZ Autoriz. | Não |
| 440160 | 57 | Autorizado Serviço Vinculado Multimodal | 4-Fisco da chave relacionada | 1=via WS Evento ou 4=via integração | SEFAZ Autoriz. | Não |
| **Evento: Tomador** | | | | | | |
| 610110 | 57 e 67 | Prestação do Serviço em Desacordo | 6-Tomador | 1=via WS Evento ou Portal da SVRS | SEFAZ Autoriz. | Sim |
| 610111 | 57 e 67 | Cancelamento do Evento Prestação do Serviço em Desacordo | 6-Tomador | 1=via WS Evento ou Portal da SVRS | SEFAZ Autoriz. | Sim |

## 3.7.2 Eventos de Marcação

Serão gerados eventos de marcação a partir do CTe para os casos em que o documento referenciar outro, seja CTe ou NFe.

Eventos dessa natureza ocorrem por necessidade de marcação dos documentos relacionados na carga de um CTe, para evitar seu cancelamento e dar ciência às administrações tributárias da efetiva prestação do serviço de transporte.

Esses eventos serão gerados automaticamente pelo Fisco no momento da autorização dos documentos e assinados digitalmente com certificado digital do ambiente autorizador ou ambiente nacional do CTe.

São exemplos de eventos de marcação:

- Evento CTe autorizado/cancelado nas NFe;
- Evento registro de passagem posto fiscal/automático nas NFe;
- Evento autorizado Redespacho em CTe relacionados;
- Evento autorizado CTe de Substituição.
