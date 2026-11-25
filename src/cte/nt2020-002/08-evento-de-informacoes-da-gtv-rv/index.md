# 8 Evento de Informações da GTV (RV)

## Validações das Regras Específicas

| # | Regra de Validação | Crítica | Msg | Efeito |
|---|---|---|---|---|
| **M02** | Verificar se o nSeqEvento é maior que o valor permitido (1-<mark>99</mark>) | Obrig. | 636 | Rej. |
| **M05a** | Verificar se CT-e OS informado é do tipo de serviço Transporte de Valores | Obrig. | 889 | Rej. |
| **M05b** | Rejeitar se o CT-e de valores informado possuir GTVe informadas | Obrig. | 890 | Rej. |
