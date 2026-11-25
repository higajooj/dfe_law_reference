# 6 Serviço Recepção Eventos – parte Geral (RV)

## Validações das Regras Específicas

| # | Regra de Validação | Crítica | Msg | Efeito |
|---|---|---|---|---|
| **L10** | - Validar chave de acesso<br>Retornar motivo da rejeição da Chave de Acesso: CNPJ/CPF zerado ou inválido, Ano < 2009 ou maior que atual, Mês inválido (0 ou > 12), Modelo diferente de 57/67/64, Número zerado, Tipo de emissão inválido, UF inválida ou DV inválido)<br>[Motivo: XXXXXXXXXXXX] | Obrig. | 236 | Rej. |
| **L12a** | Se tipo do evento for EXCLUSIVO de GTVe (modelo 64):<br>Rejeitar se Chave de acesso for de modelo diferente de 64 | Obrig. | 875 | Rej |
| **L12b** | <!-- p.16 --><mark>Se tipo de evento for permitido apenas para CT-e e CTe- OS:<br>Rejeitar se Chave de acesso for de modelo diferente de 57 ou 67</mark> | <mark>Obrig.</mark> | <mark>595</mark> | <mark>Rej.</mark> |

**Observação:** GTVe aceita apenas eventos do tipo:

- Cancelamento (Emitente),
- CT-e OS Autorizado (Fisco),
- CT-e OS Cancelado (Fisco) e
- Liberação do Prazo de Cancelamento (Fisco)
