# 7 Evento de Cancelamento (RV)

## Validações das Regras Específicas

<!-- REVISAR p.16: o código M07 aparece duas vezes na fonte (segunda regra aplicável ao modelo 64); transcrito literalmente -->

| # | Regra de Validação | Crítica | Msg | Efeito |
|---|---|---|---|---|
| **M07** | <mark>Se modelo do CT-e for igual a 57 (Carga) ou 67 (CT-e OS):</mark><br>Verificar CT-e autorizado há mais de 168 horas (7 dias)<br><br>**Observação:** Exceto se existir evento de Manifestação do Fisco do tipo “Liberação do Prazo de Cancelamento” | Obrig. | 220 | Rej. |
| **M07** | <mark>Se modelo for igual a 64 (GTVe):</mark><br><mark>Verificar se GTVe autorizada há mais de 45 dias</mark><br><br>**Observação:** Exceto se existir evento de Manifestação do Fisco do tipo “Liberação do Prazo de Cancelamento” | Obrig. | 876 | Rej. |
| **M19** | Se modelo do CT-e for igual a 64 (GTVe):<br>Vedado o cancelamento se existir evento de CT-e OS Autorizado em situação autorizado para a GTVe | Obrig. | 888 | Rej. |
