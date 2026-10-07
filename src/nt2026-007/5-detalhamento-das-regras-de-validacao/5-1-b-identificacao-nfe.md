<!-- p.6 -->
# 5.1. B. Identificação da Nota Fiscal eletrônica

| # | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| B02-10 | 55/65 | Código da UF do Emitente difere da UF do Web Service<br>**Exceção:** Na SVRS, a regra acima não se aplica para modelo 55 quando não informada a IE do emitente (contribuinte exclusivo do IBS/CBS).<br>**Observação:** Regra de validação para todas as SEFAZ Autorizadoras. | Obrig. | 226 | Rej. | Rejeição: Código da UF do Emitente diverge da UF autorizadora |
| B25-90 | 55/65 | Se a finalidade da NF-e for diferente de Nota de Crédito e Nota de Débito (tag: finNFe<>5 e finNFe<>6):<br>- Não informado ICMS (tag: ICMS) e não informado ISSQN (tag: ISSQN)<br>**Exceção 1:** a regra acima não se aplica no caso de tpOperGov=2-Recebimento do pagamento.<br>**Exceção 2:** Para modelo 55, na SVRS, a regra acima não se aplica quando não informada a IE do emitente (tag: emit/IE) - contribuinte exclusivo do IBS/CBS.<br>**Observação:** Regra de validação para todas as SEFAZ Autorizadoras. | Obrig. | 1002 | Rej. | Rejeição: NF-e sem informação de ICMS / ISSQN |
