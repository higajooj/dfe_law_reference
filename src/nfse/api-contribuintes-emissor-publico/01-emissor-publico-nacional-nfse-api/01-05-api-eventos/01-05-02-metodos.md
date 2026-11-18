# 1.5.2. Métodos

Para o processamento realizado sobre o Pedido de Registro de Evento devem ser compreendidos:

- Esquemas relativos aos eventos reconhecidos pelo Sistema Nacional NFS-e;
- Leiaute do Pedido de Registro de Evento de NFS-e;

<!-- p.05 -->

- Leiaute do Evento de NFS-e;
- Regras de negócio aplicadas sobre o pedido de registro de evento;
- Parametrizações que o município emissor da NFS-e realiza previamente para utilização nas validações sobre o Pedido de Registro de Evento de NFS-e;
- Estes itens e todas as regras e observações de negócio para todos os eventos de NFS-e do Sistema Nacional NFS-e estão anotadas e disponíveis nas planilhas do arquivo AnexoII-LeiautesRN_Eventos-SNNFSe deste manual.

O processo de transação completa de utilização dos eventos de NFS-e tem a seguinte sequência:

1. O solicitante envia o pedido de registro de evento;
2. O sistema valida, registra ou rejeita o pedido de registro de evento;
3. O sistema, caso aceite o pedido de registro de evento, gera o evento de NFS-e que ficará vinculado ao documento da nota, cuja chave de acesso da NFS-e estiver informada no pedido;
4. O sistema envia comunicação de aceite ou rejeição do pedido de registro de evento ao solicitante;

### a) POST – /nfse/{chaveAcesso}/eventos

É um modelo genérico que permite o registro de eventos originados a partir de: Emitentes da NFS-e; Não Emitentes da NFS-e; Município Emissor; Município de Incidência e do Módulo de Apuração Nacional;

Um evento é o registro de um fato relacionado a uma NFS-e. Esse evento pode ou não modificar a situação do documento (por exemplo: cancelamento de NFS-e) ou simplesmente dar ciência sobre a confirmação da prestação de serviço pelo tomador (por exemplo: Manifestação de NFS-e - Confirmação).

O serviço para registro de eventos será disponibilizado pelas Sefins geradoras de NFS-e (Sefin Nacional e demais Sefins municipais que desejarem seguir o padrão nacional para NFS-e) através de um processamento síncrono na API Eventos. Assim como as NFS-e, os eventos são um tipo de documento fiscal eletrônico e serão compartilhados pelo ADN NFS-e conforme regras de visibilidade de documentos. As mensagens de comunicação com a API utilizarão o padrão JSON, já definido para o projeto NFS-e, enquanto o leiaute do DF-e utiliza o padrão XML contendo a assinatura digital do emissor do evento.

Para o registro do evento é necessário a existência da NFS-e na Sefin geradora de NFS-e, em conformidade com as regras de negócio estabelecidas para os eventos de NFS-e.

O modelo de mensagem do evento deverá ter um conjunto mínimo de informações comuns, a saber:

- Identificação do autor da mensagem;
- Identificação do evento;
- Identificação da NFS-e vinculada;
- Informações específicas do evento;
- Assinatura digital da mensagem;

A API de eventos será única com a funcionalidade de tratar eventos de forma genérica para facilitar a criação de novos eventos sem a necessidade de criação de novos serviços e com poucas alterações na aplicação de Pedido de Registro de Eventos da Sefin geradora de NFS-e.

O leiaute da mensagem do Pedido de Registro de Evento seguirá o modelo, contendo uma parte genérica (comum a todos os tipos de evento) e uma parte específica onde será inserido o XML correspondente a cada tipo de evento.

As regras de validação referentes às partes genérica e específica dos eventos estão descritas em tabela específica no AnexoII-LeiautesRN_Eventos-SNNFSe.

### b) GET – /nfse/{chaveAcesso}/eventos

Consulta eventos por chave de acesso. O solicitante informa a chave de acesso de uma NFS-e e a API retorna todos os eventos vinculados à chave de acesso de NFS-e informada na consulta.

<!-- p.06 -->

### c) GET – /nfse/{chaveAcesso}/eventos/{tipoEvento}

Consulta eventos por chave de acesso e tipo. O solicitante informa a chave de acesso e o tipo de evento (código identificador do evento). A API retorna o(s) evento(s) do tipo especificado vinculado(s) à chave de acesso de NFS-e informada na consulta.

### d) GET – /nfse/{chaveAcesso}/eventos/{tipoEvento}/{numSeqEvento}

Consulta eventos por chave de acesso, tipo e sequencial do evento. O solicitante informa a chave de acesso, o tipo de evento (código identificador do evento) e o número sequencial específico do tipo de evento desejado (caso o tipo de evento permita mais de um evento do mesmo tipo para a mesma nota, caso contrário o número sequencial deve ser igual a 1). A API retorna exatamente o evento com o número sequencial solicitado, do tipo especificado, vinculado à chave de acesso de NFS-e informada na consulta.
