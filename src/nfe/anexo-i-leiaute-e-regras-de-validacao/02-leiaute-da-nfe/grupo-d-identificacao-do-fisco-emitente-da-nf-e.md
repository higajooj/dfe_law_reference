# Grupo D. Identificação do Fisco Emitente da NF-e

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **50** | **avulsa (D01)** | **G** | **A01** |  | **0-1** |  | **<br>Informações do fisco emitente (uso exclusivo do fisco)** |
| 51 | CNPJ (D02) | E | D01 | C | 1-1 | 14 | CNPJ do órgão emitente<br>Informar os zeros não significativos. |
| 52 | xOrgao (D03) | E | D01 | C | 1-1 | 1 - 60 | Órgão emitente |
| 53 | matr (D04) | E | D01 | C | 1-1 | 1 - 60 | Matrícula do agente do Fisco |
| 54 | xAgente (D05) | E | D01 | C | 1-1 | 1 - 60 | Nome do agente do Fisco |
| 55 | fone (D06) | E | D01 | N | 0-1 | 6 - 14 | Telefone<br>Preencher com Código DDD + número do telefone (v2.0) (NT 2011/004) |
| 56 | UF (D07) | E | D01 | C | 1-1 | 2 | Sigla da UF |
| 57 | nDAR (D08) | E | D01 | C | 0-1 | 1- 60 | Número do Documento de Arrecadação de Receita<br>(NT 2011/004) |
| 58 | dEmi (D09) | E | D01 | D | 0-1 |  | Data de emissão do Documento de Arrecadação<br>Formato: “AAAA-MM-DD” (NT 2011/004) |
| 59 | vDAR (D10) | E | D01 | N | 0-1 1 | - 13v2 | Valor Total constante no Documento de arrecadação de Receita<br>(NT 2011/004) <!-- p.14 --> |
| 60 | repEmi (D11) | E | D01 | C | 1-1 | 1 - 60 | Repartição Fiscal emitente |
| 61 | dPag (D12) | E | D01 | D | 0-1 |  | Data de pagamento do Documento de Arrecadação<br>Formato: “AAAA-MM-DD” |
