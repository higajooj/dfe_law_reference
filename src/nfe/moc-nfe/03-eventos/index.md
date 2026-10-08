<!-- p.27 -->
# 3. Eventos

Um evento é o registro de uma ocorrência relacionada com um documento fiscal eletrônico.

O evento pode modificar a situação do documento (por exemplo autorização de uso, cancelamento) ou simplesmente dar ciência sobre um acontecimento relacionado com o documento, sem modificar a sua situação (por exemplo carta de correção, registro de passagem).

O Sistema de Registro de Eventos da NF-e (SRE) é o modelo genérico que permite o registro da ocorrência por ator que pratica ou recepciona qualquer ocorrência que tenha vinculação ou interesse para a NF-e. A autorização de uso também é considerada um evento da NF-e, ainda que sua estrutura seja diferente dos demais eventos.

Os eventos são mensagens no formato XML gerados pela aplicação do contribuinte, por meio dos serviços oferecidos no Portal da Secretaria de Fazenda interessada ou por órgão público que realize atos relacionados com uma NF-e. O autor da assinatura da mensagem XML do evento pode ser o emissor da NF-e, o destinatário da NF-e ou o órgão que gerou o evento.

Os serviços para registro de eventos que não sejam de geração automática pelo sistema da NF-e são disponibilizados pelos Ambientes Autorizadores através de *Web Service* de processamento síncrono, e um evento é propagado automaticamente para os demais atores relacionados com este evento pelo mecanismo dos Fiscos de compartilhamento de documentos fiscais eletrônicos descrito no Capítulo **6**.

Existe um único *Web Service* com a funcionalidade de tratar eventos de forma genérica, para facilitar a criação de novos eventos sem a necessidade de criação de novos serviços, e com poucas alterações na aplicação de Registro de Eventos do Ambiente Autorizador.

O registro de um evento normalmente requer a existência no Ambiente Autorizador da NF-e à qual o evento se refere; contudo, alguns tipos de eventos podem ser registrados sem que exista a NF-e na base de dados do autorizador, em conformidade com as regras de negócio estabelecidas para estes eventos (por exemplo, o evento prévio de emissão em contingência evidentemente deve poder ser registrado para uma NF-e que ainda não tenha sido transmitida).

O modelo de mensagem de registro de evento possui o seguinte conjunto mínimo de informações comuns:

- Identificação do autor do registro;
- Identificação do evento;
- Identificação da NF-e vinculada;
- Informações específicas do evento;
- Assinatura digital da mensagem.

O leiaute da mensagem de Registro de Evento contém uma parte genérica (comum a todos os tipos de evento) e uma parte específica onde será inserido o XML correspondente a cada tipo de evento em uma tag do tipo ***any***. As regras de validação aplicadas nos *Web Service*s referentes à parte genérica dos eventos estão descritas na seção **5.8** deste manual. As validações específicas de cada tipo de evento estão descritas logo a seguir, em uma seção separada no capítulo **5** para cada tipo de evento.

<!-- p.28 -->
O Pacote de Liberação de schemas da NF-e[^1] contém o leiaute da parte genérica do Registro de Eventos e um schema para cada leiaute específico dos eventos definidos neste manual.

[^1]: Veja seção **4.5.**
