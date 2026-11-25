# 7. WebService – Evento Cancelamento

| Regra de Validação | Aplic. | Msg | Efeito |
| --- | --- | --- | --- |
| **M17** Vedado o cancelamento se existir evento de MDF-e Autorizado para o CT-e<br>OBS: Se o MDF-e for cancelado deverá existir um evento de Cancelamento do MDF-e, nesse caso, o CT-e poderá ser cancelado. | Obrig. | 528 | Rej. |
| **M18** Se o CT-e for Multimodal<br>Vedado o cancelamento se existir evento de CT-e Vinculado a Multimodal em situação autorizado referenciando o CT-e Multimodal | Obrig. | 529 | Rej. |
