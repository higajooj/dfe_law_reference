<!-- p.17 -->
# 7 Tabela de códigos de erros e descrições de mensagens de erros

| Código | RESULTADO DO PROCESSAMENTO DA SOLICITAÇÃO |
|---|---|
| 128 | Lote de evento processado |
| 135 | Evento registrado e vinculado à NF-e |
| 136 | Evento registrado, mas não vinculado à NF-e |

| Código | MOTIVOS DE NAO ATENDIMENTO DA SOLICITACAO |
|---|---|
| 236 | Rejeição: Chave de Acesso com dígito verificador inválido |
| 250 | Rejeição: UF diverge da UF autorizadora |
| 252 | Rejeição: Ambiente informado diverge do Ambiente de recebimento |
| 489 | Rejeição: CNPJ informado inválido (DV ou zeros) |
| 490 | Rejeição: CPF informado inválido (DV ou zeros) |
| 496 | Rejeição: A chave de acesso da NF-e informada no evento está com código de tpEmis inválido. |
| 572 | Rejeição: Erro Atributo ID do evento não corresponde a concatenação dos campos (“ID” + tpEvento + chNFe + nSeqEvento) |
| 573 | Rejeição: Duplicidade de Evento |
| 575 | Rejeição: O autor do evento diverge do destinatário da NF-e |
| 577 | Rejeição: A data do evento não pode ser menor que a data de emissão da NF-e |
| 578 | Rejeição: A data do evento não pode ser maior que a data do processamento |
| 579 | Rejeição: A data do evento não pode ser menor que a data de autorização para NF-e não emitida em contingência |
| 594 | Rejeição: O número de sequência do evento informado é maior que o permitido |
| 595 | Rejeição: Obrigatória a informação da justificativa do evento. |
| 596 | Rejeição: Evento apresentado fora do prazo: [prazo vigente] |
| 614 | Rejeição: Chave de Acesso inválida (Código UF inválido) |
| 615 | Rejeição: Chave de Acesso inválida (Ano < 06 ou Ano maior que Ano corrente) |
| 616 | Rejeição: Chave de Acesso inválida (Mês < 1 ou Mês > 12) |
| 617 | Rejeição: Chave de Acesso inválida (CNPJ/CPF zerado ou dígito inválido) |
| 618 | Rejeição: Chave de Acesso inválida (modelo diferente de 55/65) |
| 619 | Rejeição: Chave de Acesso inválida (número NF = 0) |
| 650 | Rejeição: Evento de "Ciência da Emissão" para NF-e Cancelada ou Denegada |
| 651 | Rejeição: Evento de "Desconhecimento da Operação" para NF-e Cancelada ou Denegada |
| 655 | Rejeição: Evento de Ciência da Emissão informado após a manifestação final do destinatário |
| 658 | Rejeição: UF do destinatário da Chave de Acesso diverge da UF autorizadora |

OBS.:

1. Recomendado a não utilização de caracteres especiais ou acentuação nos textos das mensagens de erro.
2. Recomendado que o campo **xMotivo** da mensagem de erro para o código 999 seja informado com a mensagem de erro do aplicativo ou do sistema que gerou a exceção não prevista.
