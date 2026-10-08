<!-- p.76 -->
# 8.2. Registro de Eventos

O Web Service de Registro de Evento possui uma parte geral, complementada por uma área específica para cada tipo de evento.

A parte geral se mantém a mesma para envio de todos os eventos e está especificada na seção 5.8 do Manual de Orientação do Contribuinte (MOC) e na seção Web Service – NFeRecepcaoEvento – Parte Geral do MOC Online.

A mensagem de retorno será modificada, conforme apresentado na seção Leiaute Mensagem de Retorno e o leiaute das partes específicas dos novos eventos está detalhado nas seções seguintes.

**Importante:**

> Atualmente a empresa pode montar um Lote com até 20 Eventos em cada requisição enviada para o Web Service de Eventos. O uso de Lote de documentos a serem autorizados pode resultar em uma dificuldade operacional para as empresas e uma potencial perda de controle, principalmente no caso de rejeição de algum evento dentro do Lote. Nesse sentido, futuramente, deverá ser eliminada a possibilidade de uso de Lote para o envio dos Eventos.
>
> Para esses novos Eventos vinculados a Reforma Tributária, orientamos as empresas a não compor Lote, enviando cada Evento individualmente.
