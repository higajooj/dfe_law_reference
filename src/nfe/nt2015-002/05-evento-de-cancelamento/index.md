<!-- p.33 -->
# 05. Serviço: Evento de Cancelamento (NT 2011/006)

## 05.1 Alteração em Regras de Validação (item 4.9.8 da NT 2011/006)

No caso do Evento de Cancelamento para a NFC-e, o pedido de cancelamento fora do prazo é rejeitado com o código de erro 770 e com uma descrição de erro não documentada na NT 2013/005. Alterada a regra de validação de controle do prazo do cancelamento da NFC-e, eliminando o código de erro 770, passando a utilizar o código de erro 501 “Rejeição: Prazo de cancelamento superior ao previsto na Legislação”.

Ainda para o Evento de Cancelamento da Nota Fiscal, será observada uma tolerância na comparação do horário informado no evento e o horário da autorização da Nota Fiscal, devido ao sincronismo de horário entre o servidor da Empresa e o servidor da SEFAZ Autorizadora.

| # | Regra de Validação | Aplic. | Msg | Efeito |
|---|---|---|---|---|
| GA06a | Se Modelo = 65: NFC-e autorizada há mais de 24 horas. | Obrig. | 501 | Rej. |
| G13 | Data do evento não pode ser menor que a data de autorização para Nota Fiscal não emitida em contingência se a Nota Fiscal existir.<br>**Observação**: Na comparação dos horários acima, aceitar uma tolerância de 5 minutos, devido ao sincronismo de horário entre servidor da Empresa e o servidor da SEFAZ Autorizadora. | Obrig. | 579 | Rej. |

Nota: O evento de Registro de Passagem da NF-e bloqueia o cancelamento da Nota Fiscal na SEFAZ Autorizadora. Será eliminada a consulta ao antigo WebService Nacional de Registro de Passagem para as SEFAZ que ainda mantém esta prática (WS nfeTransitoCancelamento), já que a consulta a um WebService externo no momento da validação do pedido de cancelamento traz os inconvenientes de disponibilidade e tempo de resposta.
