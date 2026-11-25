# 5.1. Leiaute do Modal Rodoviário OS

<!-- p.95 -->

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| 1 | **rodoOS** | **G** | **0** | | **1 - 1** | | **Informações do modal Rodoviário** |
| 2 | TAF | CE | 1 | C | 1 - 1 | 12 | Termo de Autorização de Fretamento – TAF. *ER:* ER54. Registro obrigatório do emitente do CTe OS junto à ANTT, de acordo com a Resolução ANTT nº 4.777/2015 |
| 3 | NroRegEstadual | CE | 1 | C | 1 - 1 | 25 | Número do Registro Estadual. *ER:* ER72. Registro obrigatório do emitente do CTe OS junto à Agência Reguladora Estadual. |
| 4 | **veic** | **G** | **1** | | **0 - 1** | | **Dados do Veículo** |
| 5 | placa | E | 2 | C | 1 - 1 | 4 | Placa do veículo. *ER:* ER40. |
| 6 | RENAVAM | E | 2 | C | 0 - 1 | 9 - 11 | RENAVAM do veículo. *ER:* ER36. |
| 7 | **prop** | **G** | **2** | | **0 - 1** | | **Proprietário ou possuidor do Veículo.<br>Só preenchido quando o veículo não pertencer à empresa emitente do CTe OS** |
| 8 | CPF | CE | 3 | C | 1 - 1 | 11 | Número do CPF. *ER:* ER9. Informar os zeros não significativos. |
| 9 | CNPJ | CE | 3 | C | 1 - 1 | 14 | Número do CNPJ. *ER:* ER8. Informar os zeros não significativos. |
| 10 | TAF | CE | 3 | C | 1 - 1 | 12 | Termo de Autorização de Fretamento – TAF. *ER:* ER54. De acordo com a Resolução ANTT nº 4.777/2015 |
| 11 | NroRegEstadual | CE | 3 | C | 1 - 1 | 25 | Número do Registro Estadual. *ER:* ER72. Registro obrigatório do emitente do CTe OS junto à Agência Reguladora Estadual |
| 12 | xNome | E | 3 | C | 1 - 1 | 2 - 60 | Razão Social ou Nome do proprietário. *ER:* ER36. |
| # | --- x --- | - | 3 | - | 0 - 1 | | Sequência XML |
| 14 | IE | ES | 3 | C | 1 - 1 | 14 | Inscrição Estadual. *ER:* ER30. |
| 15 | UF | ES | 3 | C | 1 - 1 | 2 | UF. *Dom.:* D11. |
| 16 | tpProp | E | 3 | N | 1 - 1 | 1 | Tipo Proprietário ou possuidor. *Dom.:* D47. Preencher com:<br>0-TAC – Agregado;<!-- p.96 --><br>1-TAC Independente; ou<br>2 – Outros. |
| 17 | UF | E | 2 | C | 0 - 1 | 2 | UF em que veículo está licenciado. *Dom.:* D11. Sigla da UF de licenciamento do veículo. |
| 18 | **infFretamento** | **G** | **1** | | **0 - 1** | | **Dados do fretamento (apenas para Transporte de Pessoas)** |
| 19 | tpFretamento | E | 2 | N | 1 - 1 | 1 | Tipo Fretamento. *Dom.:* D1. Preencher com:<br>1 - Eventual<br>2 - Continuo |
| 20 | dhViagem | E | 2 | C | 0 - 1 | 21 | Data e hora da viagem (Apenas para fretamento eventual). *ER:* ER1. Formato AAAA-MM-DDTHH:MM:DD TZD |
