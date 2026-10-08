<!-- p.16 -->
# 4.5. Banco de Dados: Destinatário

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| 5E17-40 | 55 | Destinatário em situação irregular perante o Fisco, vedada operação na UF (CCC.cSitCNPJ=3-Vedado) (NT 2019.001 v1.00) | Obrig. | 302 | ~~Den.~~ Rej. | ~~Uso Denegado~~ Rejeição: Irregularidade fiscal do destinatário |
| 5E17-60 | 55 | – Destinatário com CNPJ vedado na UF (CCC.cSitCNPJ=3-Vedado) (NT 2019.001 v1.00) | Obrig. | 303 | ~~Den.~~ Rej. | ~~Uso Denegado~~ Rejeição: Destinatário não habilitado a operar na UF |

> **Revogado/Descontinuado:** nas RVs 5E17-40 e 5E17-60, os termos “Den.” e “Uso Denegado” estão riscados no original.
