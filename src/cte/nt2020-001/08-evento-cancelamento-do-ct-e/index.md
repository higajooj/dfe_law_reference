<!-- p.12 -->

# 8 Evento Cancelamento do CT-e

## Validações das Regras Específicas

| # | Regra de Validação | Crítica | Msg | Efeito |
|---|---|---|---|---|
| **M03** | Emitente deve estar habilitado na base de dados para emissão do CT-e<br><br>**Exceção**: Esta regra não será aplicada quando a forma de emissão do CT-e (tpEmis) for Regime Especial da Nota Fiscal Fácil (3) | Obrig. | 203 | Rej. |
| **M04** | Verificar Situação Fiscal irregular do Emitente<br><br>**Exceção**: Esta regra não será aplicada quando a forma de emissão do CT-e (tpEmis) for Regime Especial da Nota Fiscal Fácil (3) | Obrig. | 240 | Rej. |
