<!-- p.20 -->

# 14 Nova regra para CTe OS de Transporte de Valores

Devido a apuração do imposto na reforma tributária ser em razão da UF e município de destino, o CTe OS de Transporte de Valores deverá passar a exigir essas informações.

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **H020a** Se tipo de serviço = Transporte de Valores<br>- UF de fim e Município de Fim da prestação devem estar preenchidos<br>**Observação: Esta regra será aplicada em produção somente a partir de 05/01/2026** | Obrig. | 380 | Rej. | Rejeição: UF e Município de Fim da prestação devem estar preenchidas para Transporte de Valores |
