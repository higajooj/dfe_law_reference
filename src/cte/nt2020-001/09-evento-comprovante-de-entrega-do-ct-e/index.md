# 9 Evento Comprovante de Entrega do CT-e

## Validações das Regras Específicas

| # | Regra de Validação | Crítica | Msg | Efeito |
|---|---|---|---|---|
| **M11** | Se o CT-e for do tipo de serviço diferente de Normal<br>O grupo infEntrega não deve ser informado<br><br>**Exceção**: Esta regra não será aplicada quando a forma de emissão do CT-e (tpEmis) for Regime Especial da Nota Fiscal Fácil (3) e o CT-e for de Subcontratação | Obrig. | 871 | Rej. |
