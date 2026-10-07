<!-- p.4 -->
# 1. Resumo

Esta Nota Técnica disponibiliza os novos eventos de Insucesso na Entrega da NF-e e Cancelamento do evento de Insucesso na Entrega da NF-e, conforme disposto no Ajuste SINIEF 58/2022 de 09 de dezembro de 2022.

Quando a entrega da mercadoria não envolver um Conhecimento de Transporte Eletrônico (CT-e), mas estiver relacionado direto com a NF-e, criam-se os eventos abaixo:

- Insucesso na Entrega da NF-e (tpEvento= 110192);
- Cancelamento do Insucesso na Entrega da NF-e (tpEvento= 110193).

O novo evento fiscal da NF-e visa registrar as operações de transporte que ocorreram, mas que por algum motivo (recusa do destinatário ou a sua não localização, por exemplo), não foi possível a conclusão do serviço com a efetivação da entrega da mercadoria ao recebedor.

O evento permite ao remetente, quando a entrega for realizada acobertada pela NF-e, registrar, por meio de um evento fiscal, na respectiva nota fiscal eletrônica que acoberta a entrega da mercadoria os motivos que impediram a entrega. Evento similar foi criado na NT 2023.002 para as entregas realizadas por meio do Conhecimento de Transporte Eletrônico – CT-e.

Tais eventos visam substituir a ressalva que atualmente é aposta no verso do DANFE conforme previsto no § 3° da cláusula décima do Ajuste SINIEF 07/05, ao informar que o motivo do fato que ensejou o retorno da mercadoria não entregue ao destinatário deverá estar indicado no verso do DANFE:

> “§ 3º O emitente de NF-e deverá guardar pelo prazo estabelecido na legislação tributária o DANFE que acompanhou o retorno de mercadoria não entregue ao destinatário e que contenha o motivo do fato em seu verso.”

A ausência desses eventos obriga hoje o transportador a portar o DANFE impresso ainda que esteja autorizado a apresentá-lo em meio eletrônico, para que possa se resguardar perante o Fisco, com a citada ressalva no verso desse documento, de eventual insucesso na entrega. A necessidade de portar o Danfe impresso é uma medida contrária às medidas que vem sendo adotadas pelas Administrações Tributárias para modernização e celeridade do tráfego de dados e sobretudo de simplificação das obrigações tributárias.

Assim, para que a possibilidade da dispensa da apresentação em papel se torne realmente efetiva se faz necessária a criação desses eventos.

Por fim, esses eventos irão simplificar e agilizar a logística do transportador na medida em que este passará a poder, no exato momento em que ocorrer o insucesso da entrega, realizar na NF-e os eventos ora propostos, a fim de que possa prosseguir com o transporte das mercadorias objeto do insucesso resguardando-o perante o Fisco em eventual fiscalização móvel, por exemplo.

Em suma, com o processo de virtualização das informações fiscais nos documentos fiscais eletrônicos e com a previsão da apresentação do documento auxiliar da NF-e em meio eletrônico, faz-se necessário a previsão do evento de insucesso na entrega, para que o registro possa ser efetuado de forma virtual, substituindo a indicação no verso do DANFE em papel.
