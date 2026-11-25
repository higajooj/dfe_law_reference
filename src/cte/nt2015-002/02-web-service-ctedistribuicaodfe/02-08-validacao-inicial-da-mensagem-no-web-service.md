<!-- p.12 -->

# 2.8 Validação Inicial da Mensagem no Web Service

| # | Regra de Validação | Aplic. | Msg | Descrição Erro |
|---|---|---|---|---|
| B01 | Tamanho do XML de Dados superior a 10 KB | Obrig. | 214 | Rejeição: Tamanho da mensagem excedeu o limite estabelecido |
| B02 | Verifica se o Servidor de Processamento está Paralisado Momentaneamente | Obrig. | 108 | Serviço Paralisado Momentaneamente (curto prazo) |
| B03 | Verifica se o Servidor de Processamento está Paralisado sem Previsão | Obrig. | 109 | Serviço Paralisado sem Previsão |

A mensagem será descartada se o tamanho exceder o limite previsto (10 KB). A aplicação do Ambiente Nacional não poderá permitir a recepção de mensagem com tamanho superior a 10 KB. Caso isto ocorra, a conexão poderá ser interrompida sem retorno da mensagem de erro se o controle do tamanho da mensagem for implementado por configurações do ambiente de rede (ex.: controle no firewall). No caso do controle de tamanho ser implementado por aplicativo poderá ocorrer a devolução da mensagem de erro 214.

Caso o Web Service fique disponível em ocasião que o serviço estiver paralisado, deverão ser implementadas as verificações 108 e 109. Estas validações poderão ser dispensadas se o Web Service não ficar disponível quando o serviço estiver paralisado.
