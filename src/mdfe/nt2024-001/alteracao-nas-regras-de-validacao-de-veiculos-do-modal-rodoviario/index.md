# Alteração nas regras de validação de veículos do modal rodoviário

| ID | Regra | Obrigatoriedade | Código | Ação | Mensagem |
|---|---|---|---|---|---|
| F89a | <mark>Se modal rodoviário, UF Carregamento e Descarregamento forem diferentes de Exterior:<br><br>Verificar se as placas informadas (veículo Tração e Reboques) estão válidas de acordo com validador do órgão SENATRAN<br><br>Observação: Validação será aplicada após integração prevista com o órgão SENATRAN for efetivada</mark> | <mark>Facul.</mark> | <mark>521</mark> | <mark>Rej.</mark> | <mark>Rejeição: Placa de veículo inválida conforme SENATRAN</mark> |
| F89b | <mark>Se modal rodoviário, UF Carregamento e Descarregamento forem diferentes de Exterior:<br><br>Verificar se a placa informada para o veículo de tração (tag: veicTracao) é do tipo Tração conforme base de dados do RNTRC da ANTT</mark> | <mark>Facul.</mark> | <mark>522</mark> | <mark>Rej.</mark> | <mark>Rejeição: Placa informada no veículo de tração pertence a um veículo rebocável</mark> |
| F89c | <mark>Se modal rodoviário e tipo do rodado for igual a Cavalo Mecânico (tag: tpRod=03):<br><br>Rejeitar se não informado ao menos 1 veículo de reboque</mark> | <mark>Obrig.</mark> | <mark>523</mark> | <mark>Rej</mark> | <mark>Rejeição: Pelo menos um reboque deve ser colocado na composição em um transporte com cavalo mecânico.</mark> |
| ~~F113~~ | ~~Se modal rodoviário, UF Carregamento e Descarregamento forem diferentes de Exterior e informado RNTRC<br>Verificar se foi informado CIOT quando este for obrigatório para o RNTRC~~ | ~~Facult~~ | ~~684~~ | ~~Rej~~ | ~~Rejeição: CIOT obrigatório para RNTRC informado.~~ |

> **Revogado/Descontinuado:** a regra F113 aparece riscada no original (texto riscado em vermelho).
