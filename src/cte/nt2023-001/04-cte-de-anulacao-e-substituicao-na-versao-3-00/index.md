<!-- p.06 -->

# 4 CTe de Anulação e Substituição na Versão 3.00

O CTe com tipo anulação e substituição deixam de existir na versão 3.00.

A nova sistemática de substituição passa a ser possível apenas na versão 4.00.

As seguintes Regras de Validação devem ser executadas no início das validações de CTe, CTeOS e GTVe:

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| Se Tipo do CT-e= 2 (Anulação) ou 3 (Substituição), rejeitar o CTe | Obrig. | <mark>990</mark> | Rej. | Rejeição: Vedado a utilização do CTe de anulação ou substituição na versão 3.00 |
| O grupo de dado do CTe de substituição não pode ser informado (grupo: infCteSub) | Obrig. | <mark>991</mark> | Rej. | Rejeição: Dados do CTe de substituição não são permitidos na versão 3.00 |

Todas as regras de validação associadas aos CTe de anulação e substituição perdem o sentido porque o ambiente de autorização não passará por elas.
