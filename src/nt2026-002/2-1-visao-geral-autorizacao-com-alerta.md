<!-- p.4 -->
# 2.1. Visão Geral da Autorização com Alerta

Esta Nota Técnica implementa a possibilidade de autorizar a NF-e com **mensagem de alerta** para o emitente e/ou para o destinatário. A nota será autorizada normalmente, e o alerta será retornado em campo específico do protocolo de autorização, conforme apresentado nesta seção.

O objetivo é avisar tanto emitente quanto destinatário que nesta NF-e existe uma inconsistência que deve ser verificada, sem que esta inconsistência seja motivo suficiente para provocar uma rejeição.

Atualmente, a aplicação das regras de validação da NF-e pode resultar nos seguintes códigos de processamento (cStat):

| CÓDIGO | EFEITO | RESULTADO DO PROCESSAMENTO DA SOLICITAÇÃO |
|---:|---|---|
| 100 | Autorização | Autorizado o uso da NF-e |
| 150 | Autorização | Autorizado o uso da NF-e, autorização fora de prazo |
| XXXX | Rejeição | Rejeição: [mensagem correspondente ao código da rejeição] |

A modificação introduzida por esta Nota Técnica cria um novo resultado de processamento, inicialmente somente para a NFC-e: “Autorizado o uso da NF-e, com alerta” (cStat = 120).

As regras de validação que geram alertas estão identificadas nesta Nota Técnica com o efeito “Alerta”. Com esta alteração, os possíveis resultados da validação da NF-e passam a ser:

| CÓDIGO | EFEITO | RESULTADO DO PROCESSAMENTO DA SOLICITAÇÃO |
|---:|---|---|
| 100 | Autorização | Autorizado o uso da NF-e |
| 120 | Autorização | Autorizado o uso da NF-e, com alerta |
| 150 | Autorização | Autorizado o uso da NF-e, autorização fora de prazo |
| XXXX | Rejeição | Rejeição: [mensagem correspondente ao código da rejeição] |

<!-- p.5 -->

Desta forma, o processamento das regras de validação resultará em um dos seguintes resultados:

- **Autorização de uso** - a NF-e será armazenada no banco de dados;
- **Autorização de uso com alerta(s)** - a NF-e será armazenada no banco de dados, não necessitando ser corrigida e novamente transmitida para solucionar a origem do alerta;
- **Rejeição** - a NF-e será descartada, não sendo armazenada no banco de dados, podendo ser corrigida e novamente transmitida.

Caso o documento seja autorizado fora de prazo e contenha alertas, será retornado o código “120 - Autorizado o uso da NF-e, com alerta”.
