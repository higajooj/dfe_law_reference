# 4 Validação das Regras do MDF-e

<!-- p.10 -->
**Validações das Regras dos Modais**

| # | Regra de Validação | Crítica | Msg | Efeito |
|---|---|---|---|---|
| | Se modal rodoviário e Tipo Emitente for igual a Prestador de Serviço de Transporte (tpEmit=1) ou transportador que emitirá CT-e globalizado (tpEmit=3) e indicador de pagamento for a prazo (tag:indPag=1):<br>O grupo de informações a prazo deve ser informado (grupo:infPrazo) | Obrig. | 724 | Rej. |
| | Se modal rodoviário e Tipo Emitente for igual a Prestador de Serviço de Transporte (tpEmit=1) ou transportador que emitirá CT-e globalizado (tpEmit=3) e indicador de pagamento for a vista (tag:indPag=0):<br>O grupo de informações a prazo NÃO deve ser informado (grupo:infPrazo) | Obrig. | 729 | Rej. |
| | Se modal rodoviário e Tipo Emitente for igual a Prestador de Serviço de Transporte (tpEmit=1) ou transportador que emitirá CT-e globalizado (tpEmit=3), o grupo produto predominante deve estar informado (grupo: prodPred)<br><br>**Observação:** <mark>regra de validação aplicável em produção a partir de 06/07/2020 [COVID-19]</mark> | Facult. | 725 | Rej. |
| | Se modal rodoviário e Tipo Emitente for igual a Prestador de Serviço de Transporte (tpEmit=1) ou transportador que emitirá CT-e globalizado (tpEmit=3) e MDF-e possuir apenas um DF-e transportado no grupo infDoc:<br>O grupo de informações da carga lotação (infLotacao) deve estar informado<br><br>**Observação:** <mark>regra de validação aplicável em produção a partir de 06/07/2020 [COVID-19]</mark> | Facult. | 726 | Rej. |
| | Se modal rodoviário e Tipo Emitente for igual a Prestador de Serviço de Transporte (tpEmit=1) ou transportador que emitirá CT-e globalizado (tpEmit=3) e informado grupo de pagamento, rejeitar se CNPJ/CPF do responsável pelo pagamento estiver inválido | Obrig. | 727 | Rej. |
| | Se modal rodoviário e Tipo Emitente for igual a Prestador de Serviço de Transporte (tpEmit=1) ou transportador que emitirá CT-e globalizado (tpEmit=3) e informado grupo de pagamento, rejeitar se CNPJ do IPEF estiver inválido | Obrig. | 728 | Rej. |
