<!-- p.6 -->
# 5.2. C. Identificação do Emitente

| # | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| C12-10 | 55/65 | Sigla da UF do Emitente difere da UF do Web Service<br>**Exceção:** Na SVRS, a regra acima não se aplica para modelo 55, quando não informada a IE do emitente (contribuinte exclusivo do IBS/CBS)<br>**Observação:** Regra de validação para todas as SEFAZ Autorizadoras. | Obrig. | 247 | Rej. | Rejeição: Sigla da UF do Emitente diverge da UF autorizadora |
| C17-10 | 55/65 | IE Emitente com zeros ou nulo<br>**Observação:** Regra de validação excluída para todas as SEFAZ Autorizadoras. | Obrig. | 229 | Rej. | Rejeição: IE do emitente não informada |
