<!-- p.05 -->

# Criação de campo para informar o ICMS Previsto Pagamento Antecipado

O novo campo 'ICMS Previsto Pagamento Antecipado' deverá ser informado quando o documento fiscal emitido for referente a um pagamento realizado antes do fornecimento. O objetivo do campo é permitir a correta tributação do pagamento antecipado, com a identificação do valor do ICMS que incidirá no momento do fornecimento futuro.

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| ... |  |  |  |  |  |  |  |
| | **gICMSPrevistoPagtoAntecip** | **CG** | **imp/ICMS** | **G** | **0-1** | **-** | **Grupo utilizado exclusivamente na determinação da BC de IBS e CBS em cenários específicos de pagamento antecipado, informar nas hipóteses:<br>• tpPagAnt = 1 - Pagamento Antecipado<br>• tpOperGov = 4-Recebimento do pagamento com fornecimento posterior.** |
| | vICMSPrevisto | E | gICMSPrevistoPagtoAntecip | E | 1-1 | 13v2 | Valor do ICMS a incidir no momento do fornecimento futuro.<br><br>Observação: Em cenários onde não há valor de ICMS devido, informar 0. |

**Validações do ICMS Previsto em Pagamento Antecipado**

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| Se o DFe não for de compra governamental ou de pagamento antecipado:<br>- Grupo ICMSPrevistoPagtoAntecip não deve ser informado | Obrig. | 1051 | Rej. | Rejeição: Grupo do ICMS Previsto no Pagamento Antecipado informado indevidamente |
| Se DFe for de compra governamento ou de pagamento antecipado:<br>- Se tipo pagamento antecipado (tpPagAnt) for DIFERENTE de: 1 - Pagamento Antecipado<br>E<br>- Se tipo de operação (tpOperGov) com ente governamental for DIFERENTE de 4-Recebimento do pagamento com fornecimento posterior<br>E informado Grupo ICMSPrevistoPagtoAntecip | Obrig. | 1052 | Rej. | Rejeição: Grupo do ICMS Previsto no Pagamento Antecipado informado indevidamente |
| Se DFe for de compra governamento ou de pagamento antecipado:<br>- Se tipo pagamento antecipado (tpPagAnt) for IGUAL a 1 - Pagamento Antecipado<br>OU<br>- Se tipo de operação (tpOperGov) com ente governamental for IGUAL de 4-Recebimento do pagamento com fornecimento posterior<br>E NÃO informado Grupo ICMSPrevistoPagtoAntecip | Obrig. | 1053 | Rej. | Rejeição: Grupo do ICMS Previsto no Pagamento Antecipado DEVE SER informado |

**Observação**: Implantação em homologação em 01/02/2027.

Implantação em produção em 01/03/2027.
