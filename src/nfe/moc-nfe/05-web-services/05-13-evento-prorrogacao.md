<!-- p.117 -->

# 5.13. Web Service – NFeRecepcaoEvento – Pedido de Prorrogação

**Função:** serviço destinado à recepção de mensagem de Evento da NF-e

O Pedido de Prorrogação é um evento para prorrogar o prazo de retorno de produtos de uma NF-e de remessa para industrialização por encomenda com suspensão do ICMS. Este evento é de implementação facultativa dos Estados. As UFs que determinarem em sua legislação local a suspensão do ICMS podem utilizar o mesmo recurso para receberem os pedidos de prorrogação de operações internas. Por enquanto apenas São Paulo adota esta NT.

<!-- p.118 -->

O registro de um novo Pedido de Prorrogação não substitui o Pedido de Prorrogação anterior, ou seja, serão eventos cumulativos. Recomenda-se agrupar a maior quantidade de itens em cada Pedido de Prorrogação.

A seção 3.4 apresenta o fluxo operacional destes eventos.

**Autor do Evento:** O autor do evento é o emissor da NF-e. A mensagem XML do evento será assinada com o certificado digital que tenha o CNPJ base do Emissor da NF-e.

**Códigos dos eventos:**

- 111500 – Pedido de Prorrogação 1º prazo
- 111501 – Pedido de Prorrogação 2º prazo

## 5.13.1. Leiaute Mensagem de Entrada

Entrada: Estrutura XML da parte específica do evento, a ser inserida na tag detEvento (P17) da Parte Geral do Web Service de Registro de Eventos especificada na seção 5.8.

**Schema XML: envRemIndus_v1.0.xsd**

**Tabela 5-46 – Leiaute Mensagem de Entrada do Web Service NFeRecepcaoEvento – Pedido de Prorrogação**

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| P17 | versao | A | P17 | | 1-1 | | Versão do Pedido de Prorrogação |
| P18 | descEvento | E | P17 | C | 1-1 | 5-60 | “Pedido de Prorrogação” ou “Pedido de Prorrogacao” |
| P19 | nProt | E | P17 | N | 1-1 | 15 | Informar o número do Protocolo de Autorização da NF-e a ser Prorrogada. |
| P20 | itemPedido | G | P17 | | 1-990 | | Item do Pedido de Prorrogação. Recomenda-se agrupar a maior quantidade de itens em cada Pedido de Prorrogação |
| P21 | numItem | A | P17 | N | 1-1 | 1-3 | Número do item da NF-e. O número do item deverá ser o mesmo número do item na NF-e |
| P22 | qtdeItem | E | P17 | N | 1-1 | 11v0-4 | Quantidade de comercialização do item que será solicitada a prorrogação de prazo |

## 5.13.2. Leiaute Mensagem de Retorno

Retorno: Estrutura XML com a mensagem do resultado da transmissão, conforme retorno do Web Service de Registro de Eventos – Parte Geral, especificado no item 5.8.2.

Descrição do resultado do processamento do evento (xEvento): Pedido de Prorrogação registrado

**Schema XML: retEnvRemIndus_v1.0.xsd**

O leiaute desta mensagem de retorno não apresenta nenhuma diferença com relação à Schema XML: retEnvEvento_v1.00.xsd Tabela 5-33.

## 5.13.3. Regras de Validação

Serão aplicadas as regras de validação gerais apresentadas no item 5.8.4 e as regras de negócio específicas que podem ser vistas na Tabela 5-47 (NT 2015.001).

**Tabela 5-47 – Regras de Validação Específicas do Evento Pedido de Prorrogação**

| # | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|
| <!-- p.119 --> P12 | Data do evento não pode ser menor que a data de autorização para o evento de Pedido de Prorrogação | Obrig. | 641 | Rej. | Rejeição: A data do evento não pode ser menor que a data de autorização para o evento |
| P11 | Verificar se a NF-e está autorizada (não pode estar cancelada nem denegada) | Obrig. | 580 | Rej. | Rejeição: O evento exige uma NF-e autorizada |
| P10 | Acesso Cadastro Contribuinte:<br>- Verificar Emitente não autorizado a emitir NF-e | Obrig. | 203 | Rej. | Rejeição: Emissor não habilitado para emissão da NF-e |
| P10 | - Verificar Situação Fiscal irregular do Emitente | Obrig. | 240 | Rej. | Rejeição: Cancelamento/Inutilização – Irregularidade Fiscal do Emitente |
| P13-14 | Verificar o sequencial do evento (P14 – nSeqEvento) é um valor válido (último + 1) conforme tipo de evento (P13/P14) | Obrig. | 594 | Rej. | Rejeição: O número de sequência do evento informado é maior que o permitido |
| P11-19 | Verificar se o número Protocolo informado difere do nro. Protocolo da NF-e | Obrig. | 222 | Rej. | Rejeição: Protocolo de Autorização de Uso difere do cadastrado |
| P13-14 | Verificar a quantidade de eventos do tipo “1º pedido”. A soma dos pedidos do tipo “1º pedido” sem resposta do Fisco não deverá exceder 20 pedidos | Obrig. | 638 | Rej. | Rejeição: A quantidade de Pedidos de Prorrogação 1º prazo excede o valor limite de 20 Pedidos de Prorrogação autorizados e sem resposta do Fisco |
| P13-14 | Verificar a quantidade de eventos do tipo “2º pedido”. A soma dos pedidos do tipo “2º pedido” sem resposta do Fisco não deverá exceder 20 pedidos | Obrig. | 639 | Rej. | Rejeição: A quantidade de Pedidos de Prorrogação 2° prazo excede o valor limite de 20 Pedidos de Prorrogação autorizados e sem resposta do Fisco. |

## 5.13.4. Final do Processamento do Lote

O resultado do processamento do lote está especificado na seção Web Service de Registro de Eventos – Parte Geral, item 5.8.5.

Deverá ser impedido o cancelamento da NF-e caso exista pelo menos um item do Pedido de Prorrogação de Prazo deferido pelo Fisco (tpEvento=411500 ou 411501, com statPedido=1).

No caso de rejeição do Pedido de Cancelamento da NF-e recebido pela empresa, o fisco usará o código de rejeição “811-Pedido de Prorrogação deferido impede o cancelamento da NF-e”.

Nota: Como o mesmo Pedido da Empresa (tag:”idPedido”) pode ter diferentes respostas pelo Fisco, deve ser considerada a resposta do Fisco com maior “nSeqEvento” de resposta do Fisco.
