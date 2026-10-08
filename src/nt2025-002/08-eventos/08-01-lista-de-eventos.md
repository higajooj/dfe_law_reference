<!-- p.75 -->
# 8.1. Lista de eventos

Esta NT cria os eventos a seguir para a apuração do IBS e da CBS.

Esses eventos serão autorizados na SVRS – SEFAZ VIRTUAL DO RIO GRANDE DO SUL. As URLs de produção e homologação podem ser encontradas no Portal Nacional da NFe, na aba Serviços, Relação de Serviços Web.

| CÓDIGO | EVENTO | Autor |
|---|---|---|
| 112110 | Informação de efetivo pagamento integral para liberar crédito presumido do adquirente | Emitente |
| 112120 | Importação em ALC/ZFM não convertida em isenção | Emitente |
| 112130 | Perecimento, perda, roubo ou furto durante o transporte contratado pelo fornecedor | Emitente |
| 112140 | Fornecimento não realizado com pagamento antecipado | Emitente |
| 112150 | Atualização da Data de Previsão de Entrega | Emitente |
| 211110 | Solicitação de Apropriação de crédito presumido | Emitente/Destinatário |
| 211124 | Perecimento, perda, roubo ou furto durante o transporte contratado pelo adquirente | Destinatário |
| 211128 | Aceite de débito na apuração por emissão de nota de crédito | Destinatário |
| 211130 | Imobilização de Item | Destinatário |
| 211140 | Solicitação de Apropriação de Crédito de Combustível | Destinatário |

<!-- p.76 -->
| CÓDIGO | EVENTO | Autor |
|---|---|---|
| 211150 | Solicitação de Apropriação de Crédito para bens e serviços que dependem de atividade do adquirente | Destinatário |
| 212110 | Manifestação sobre Pedido de Transferência de Crédito de IBS em Operações de Sucessão | Sucessora |
| 212120 | Manifestação sobre Pedido de Transferência de Crédito de CBS em Operações de Sucessão | Sucessora |
| 412120 | Manifestação do Fisco sobre Pedido de Transferência de Crédito de IBS em Operações de Sucessão | Fisco |
| 412130 | Manifestação do Fisco sobre Pedido de Transferência de Crédito de CBS em Operações de Sucessão | Fisco |

Criado também um código de Evento de Cancelamento genérico que será utilizado para o cancelamento de qualquer um dos Eventos citados anteriormente nesta Nota Técnica. Neste Evento deve ser informado o código do Evento a ser cancelado.

| CÓDIGO | EVENTO | Autor |
|---|---|---|
| 110001 | Cancelamento de Evento | Idem ao Autor do Evento que está sendo cancelado |
