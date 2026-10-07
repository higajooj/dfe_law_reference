<!-- p.15 -->
# 6.3.8 Regras de validação específica dos eventos de manifestação do Destinatário

| # | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|
| **H01** | Evento de “Operação não Realizada” deve ter uma justificativa | Obrig. | 595 | Rej. | Rejeição: Obrigatória a informação da justificativa do evento. |
| ~~**H02**~~ | ~~O nSeqEvento deve ser = 1~~ | ~~Obrig.~~ | ~~594~~ | ~~Rej.~~ | ~~Rejeição: O número de sequencia do evento informado é maior que o permitido~~ |
| **H02** | O nSeqEvento deve ser, no máximo, 2 (dois) | Obrig. | 594 | Rej. | Rejeição: O número de sequencia do evento informado é maior que o permitido |
| **H03** | Verificar prazo de recepção do evento, em relação a data da autorização<br>\*ver prazos no item 3 | Obrig. | 596 | Rej. | Rejeição: Evento apresentado fora do prazo: [prazo vigente] |
| **H04** | Evento de “Ciência da Emissão” para NF-e Cancelada ou Denegada | Obrig. | 650 | Rej. | Rejeição: Evento de "Ciência da Emissão" para NF-e Cancelada ou Denegada |
| **H05** | Evento de “Desconhecimento da Operação” para NF-e Cancelada ou Denegada | Obrig. | 651 | Rej. | Rejeição: Evento de "Desconhecimento da Operação" para NF-e Cancelada ou Denegada |
| **H06** | Evento de "Ciência da Emissão" informado após a Manifestação final do destinatário (Confirmação da Operação, Operação não Realizada ou Desconhecimento). | Obrig. | 655 | Rej. | Rejeição: Evento de Ciência da Emissão informado após a manifestação final do destinatário |
| **H07** | Se Evento do Destinatário, verificar se UF do destinatário corresponde a UF do Web Service (Nota: esta validação não se aplica para o Ambiente Nacional, no atendimento de todas as UF) | Obrig. | 658 | Rej. | Rejeição: UF do destinatário da Chave de Acesso diverge da UF autorizadora |
| **H08** | A chave de acesso da NF-e informada no evento está com o tpEmis inválido, (posição 35 da chave) <> 1, 2, 3, 4, 5, 6, 7 | Obrig | 496 | Rej. | Rejeição: A chave de acesso da NF-e informada no evento está com código de tpEmis inválido. |
