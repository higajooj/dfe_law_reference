<!-- p.8 -->
# 03.2 Validação da Área de Dados (Item 4.1.3 do MOC v7.0, Anexo I)

Seguem as alterações em regras de validação:

## DA. Autorização – Área de dados do Lote de NF-e

| # | Regra de Validação | Aplic. | Msg | Descrição Erro |
|---|---|---|---|---|
| ~~GAP03a-2~~ | ~~Solicitada resposta síncrona para UF que não disponibiliza este atendimento (indSinc=1)~~ | ~~Facult.~~ | ~~776~~ | ~~Rejeição: Solicitada resposta síncrona para UF que não disponibiliza este atendimento~~ |
| GAP03a-3 | Solicitação de resposta assíncrona (indSinc=0) para lote com somente 1 (uma) NF-e. (NT 2025.001)<br>Observação: Implantação em produção em 13/10/25. | Obrig. | 452 | Rejeição: Solicitada resposta assíncrona para Lote com somente 1 (uma) NF-e |

> **Revogado/Descontinuado:** RV GAP03a-2 riscada no original (Aplic., Msg e texto da regra e da descrição).
