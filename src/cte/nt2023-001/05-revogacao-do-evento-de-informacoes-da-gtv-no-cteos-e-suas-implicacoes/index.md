<!-- p.07 -->

# 5 Revogação do Evento de Informações da GTV no CTeOS e suas implicações

Revoga-se o evento de Informações da GTV (em papel) no CTeOS de Transporte de valores para as versões 3.00 e 4.00.

Tipo de evento revogado: 110170.

Em relação as Regras de Validação do CTeOS as seguintes alterações serão aplicadas a versão 3.00 (até sua total desativação) e na versão 4.00:

Regra de Validação revogada:

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| ~~Se tipo de serviço = Transporte de Valores<br>- Verificar se existe CTe OS autorizado há mais de 45 dias para o mesmo CNPJ do emitente sem que exista pelo menos um evento de Informações da GTV vinculado~~<br><br>~~**Observação:** Retornar a chave de acesso do CTe OS mais antigo que causou o bloqueio~~<br>~~**Observação 2:** Essa validação não deve ser aplicada no ambiente de homologação.~~<br><br>~~**Observação 3:** A validação não deve ser aplicada a CTe OS de transporte de valores que relacionam GTVe~~ | ~~Facult.~~ | ~~758~~ | ~~Rej.~~ | ~~Rejeição: Existe CTe OS de Transporte de Valores autorizado há mais de 45 dias sem informar as GTV<br>[chCTe: 99999999999999999999999999999999999999999]~~ |

> **Revogado/Descontinuado:** a regra de Transporte de Valores acima está inteira riscada no original.

Nova Regra de Validação para Transporte de Valores:

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|
| H045a | **<mark>Se o CTe for do tipo Normal ou Substituição e</mark> tipo de serviço for igual a Transporte de Valores<br>- O grupo de informações infGTVe DEVE estar informado** | Obrig. | 927 | Rej. | Rejeição: Informações da GTVe devem ser preenchidas para CTe OS de transporte de valores |
