<!-- p.09 -->

# 5 Alteração nas Formas de Emissão do CTe, CTeOS e CTe Simplificado

O tipo de emissão (tpEmis) deixa de aceitar o valor 5 – Contingência FSDA, por consequência, todas as regras de validação relacionadas a FSDA deixam de ser aplicadas.

<mark>O evento EPEC deixa de ser aceito pelo ambiente de autorização, mas o CTe com tipo de emissão EPEC continua sendo recepcionado para que os eventos já registrados possam ser conciliados.</mark>

Novo tipo de emissão Contingência OffLine (tpEmis=2) passa a ser aceito no CTe de forma imediata.

| Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| tpEmis | E | Ide | E | 1-1 | 1 | Preencher com:<br>1 - Normal;<br>3 - Regime Especial NFF;<br>2 - Contingência Offline;<br><mark>**4 - EPEC pela SVC (em desativação);**</mark><br>~~5 - Contingência FSDA;~~<br>7 - Autorização pela SVC-RS;<br>8 - Autorização pela SVC-SP |

> **Revogado/Descontinuado:** o valor 5 - Contingência FSDA de tpEmis, riscado na tabela acima.

Os eventos EPEC (110113) e Liberação de EPEC (24160) deixam de fazer parte da listagem de eventos aceitos no ambiente de autorização, se eventos destes tipos forem enviados, deverá ocorrer a rejeição de 629 - Rejeição: O tpEvento informado inválido.

Todo bloco de especificação destes eventos fica revogado do MOC do CTe.

**Alteração em Regras de validação (Grupo G CTe / Grupo H CTeOS)**

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|
| G008<br>H004 | Se forma de emissão do CTe for diferente de 2 (Contingência OffLine) ~~5 (FS-DA)~~:<br>dhCont e xJust não devem ser informados | Obrig. | 586 | Rej. | Rejeição: Data e Justificativa de entrada em contingência não devem ser informadas para tipo de emissão diferente de Contingência Offline ~~FS-DA~~. |
| G009<br>H005 | Se forma de emissão do CTe for igual a 2 (Contingência OffLine) ~~5 (FS-DA)~~:<br>dhCont e xJust devem ser informados | Obrig. | 587 | Rej. | Rejeição: Data e Justificativa de entrada em contingência devem ser informadas |
| ~~G008a<br>H004a~~ | Com a mudança de schema impedindo FSDA a regra fica obsoleta:<br>~~Rejeitar tipo de emissão (tag:tpEmis) igual a 5 (FS-DA)<br>Exceção: A exceção permite-se uso do FS-DA para CTe emitidos da SEFAZ Minas Gerais~~ | ~~Obrig~~ | ~~928~~ | ~~Rej.~~ | ~~Rejeição: Tipo de emissão FS-DA não é permitido~~ |
| G103<br>H077 | Se tipo de emissão for diferente de Contingência OffLine (tpEmis=2) <mark>e EPEC (tpEmis=4):</mark><br>Data-Hora de Emissão com atraso superior a 168 horas em relação ao horário de recepção na SEFAZ Autorizadora.<br>~~Exceção: Esta regra mantem a redação somente para SEFAZ MG~~<br><mark>**Exceção**: CTe com Data de Emissão muito atrasada será aceito, desde que tenha sido emitido em<!-- p.10 -->contingência Off-Line (tag:tpEmis=2) ou EPEC. O CTe transmitido para a SEFAZ Autorizadora após o prazo de 168 horas deve retornar: cStat=”150- Autorizado Uso de CTe, autorização fora de prazo”.</mark><br><br><mark>**Exceção 2**: Essa regra não será aplicada se informado grupo de Juros e Multa (gMultaJuros) ou grupo de Antecipação de Pagamento (gPagAntecipado)</mark> | Obrig. | 228 | Rej. | Rejeição: Data de Emissão muito atrasada |
| G215<br>H131 | Se tipo de emissão for igual a Contingência OffLine (tpEmis=2) <mark>ou EPEC (tpEmis=4):</mark><br>O parâmetro sign deve informado no QR-Code<br>~~Exceção: Esta regra mantem a redação somente para SEFAZ MG~~ | Obrig. | 853 | Rej. | Rejeição: Parâmetro sign não informado no QR Code para emissão em contingência |
| G217<br>H133 | Se tipo de emissão for igual Contingência OffLine (tpEmis=2) <mark>ou EPEC (tpEmis=4):</mark><br>Valor da assinatura (sign) do QR-Code difere do valor calculado<br>~~Exceção: Esta regra mantem a redação somente para SEFAZ MG~~ | Obrig. | 855 | Rej. | Rejeição: Assinatura do QR-Code difere do calculado |

**Alteração nas regras de validação de Eventos**

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|
| N09 | Se ambiente de Autorização SVC:<br><br>- Rejeitar se Tipo de Evento for diferente de ~~EPEC (110113)~~ ou Cancelamento (110111) | Obrig. | 530 | Rej. | Rejeição: Se ambiente SVC, rejeitar eventos diferentes de ~~EPEC~~, Liberação EPEC e Cancelamento |
