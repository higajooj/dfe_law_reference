<!-- p.10 -->
# 4 Alteração nas regras de validação do MDF-e

| Regra de Validação | Crítica | Msg | Efeito |
|---|---|---|---|
| Se modal Rodoviário e Tipo Emitente for igual a Prestador de Serviço de Transporte (tpEmit=1) ou transportador que emitirá CT-e globalizado (tpEmit=3) ou <mark>Transportador Próprio que informou o Tipo de Transportador (tpEmi=2 com tag tpTransp informada)</mark> e não estiverem preenchidos:<br>1. Responsável pela Geração do CIOT<br>Ou<br>2. Responsável pelo pagamento do Vale-pedágio<br>Então:<br>- Rejeitar se não estiver informado pelo menos um tomador de serviço (grupo infContratante) | Obrig. | 578 | Rej. |
| Se modal rodoviário e Tipo Emitente for igual a Prestador de Serviço de Transporte (tpEmit=1) ou transportador que emitirá CT-e globalizado (tpEmit=3) ou <mark>Transportador Próprio que informou o Tipo de Transportador (tpEmi=2 com tag tpTransp informada)</mark> e indicador de pagamento for a prazo (tag:indPag=1):<br>O grupo de informações a prazo deve ser informado (grupo:infPrazo) | Obrig. | 724 | Rej. |
| Se modal rodoviário e Tipo Emitente for igual a Prestador de Serviço de Transporte (tpEmit=1) ou transportador que emitirá CT-e globalizado (tpEmit=3) ou <mark>Transportador Próprio que informou o Tipo de Transportador (tpEmi=2 com tag tpTransp informada)</mark> e indicador de pagamento for a vista (tag:indPag=0):<br>O grupo de informações a prazo NÃO deve ser informado (grupo:infPrazo) | Obrig. | 729 | Rej. |
| Se modal rodoviário e Tipo Emitente for igual a Prestador de Serviço de Transporte (tpEmit=1) ou transportador que emitirá CT-e globalizado (tpEmit=3) ou <mark>Transportador Próprio que informou o Tipo de Transportador (tpEmi=2 com tag tpTransp informada)</mark>, o grupo produto predominante deve estar informado (grupo: prodPred) | Facult. | 725 | Rej. |

<!-- p.11 -->

| Regra de Validação | Crítica | Msg | Efeito |
|---|---|---|---|
| Se modal rodoviário e Tipo Emitente for igual a Prestador de Serviço de Transporte (tpEmit=1) ou transportador que emitirá CT-e globalizado (tpEmit=3) ou <mark>Transportador Próprio que informou o Tipo de Transportador (tpEmi=2 com tag tpTransp informada)</mark> e MDF-e possuir apenas um DF-e transportado no grupo infDoc:<br>O grupo de informações da carga lotação (infLotacao) deve estar informado | Facult. | 726 | Rej. |
| Se modal rodoviário e Tipo Emitente for igual a Prestador de Serviço de Transporte (tpEmit=1) ou transportador que emitirá CT-e globalizado (tpEmit=3) ou <mark>Transportador Próprio que informou o Tipo de Transportador (tpEmi=2 com tag tpTransp informada)</mark> e informado grupo de pagamento, rejeitar se CNPJ/CPF do responsável pelo pagamento estiver inválido | Obrig. | 727 | Rej. |
| Se modal rodoviário e Tipo Emitente for igual a Prestador de Serviço de Transporte (tpEmit=1) ou transportador que emitirá CT-e globalizado (tpEmit=3) ou <mark>Transportador Próprio que informou o Tipo de Transportador (tpEmi=2 com tag tpTransp informada)</mark> e informado grupo de pagamento, rejeitar se CNPJ do IPEF estiver inválido | Obrig. | 728 | Rej. |
