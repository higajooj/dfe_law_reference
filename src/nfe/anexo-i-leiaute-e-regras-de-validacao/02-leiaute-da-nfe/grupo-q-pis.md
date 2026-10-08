# Grupo Q. PIS

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **267** | **PIS (Q01)** | **G** | **M01** |  | **0-1** |  | **Grupo PIS<br>Informar apenas um dos grupos Q02, Q03, Q04 ou Q05 com base valor atribuído ao campo Q06 – CST do PIS** <!-- p.52 --> |
| **268** | **PISAliq (Q02)** | **CG** | **Q01** |  | **1-1** |  | **Grupo PIS tributado pela alíquota** |
| 269 | CST (Q06) | E | Q02 | N | 1-1 | 2 | Código de Situação Tributária do PIS<br>01=Operação Tributável (base de cálculo = valor da operação alíquota normal (cumulativo/não cumulativo)); 02=Operação Tributável (base de cálculo = valor da operação (alíquota diferenciada)); |
| 270 | vBC (Q07) | E | Q02 | N | 1-1 | 13v2 | Valor da Base de Cálculo do PIS |
| 271 | pPIS (Q08) | E | Q02 | N | 1-1 | 3v2-4 | Alíquota do PIS (em percentual) |
| 272 | vPIS (Q09) | E | Q02 | N | 1-1 | 13v2 | Valor do PIS |
| **273** | **PISQtde (Q03)** | **CG** | **Q01** |  | **1-1** |  | **Grupo PIS tributado por Qtde** |
| 274 | CST (Q06) | E | Q03 | N | 1-1 | 2 | Código de Situação Tributária do PIS<br>03=Operação Tributável (base de cálculo = quantidade vendida x alíquota por unidade de produto); |
| 275 | qBCProd (Q10) | E | Q03 | N | 1-1 | 12v0-4 | Quantidade Vendida |
| 276 | vAliqProd (Q11) | E | Q03 | N | 1-1 | 11v0-4 | Alíquota do PIS (em reais) |
| 277 | vPIS (Q09) | E | Q03 | N | 1-1 | 13v2 | Valor do PIS |
| **278** | **PISNT (Q04)** | **CG** | **Q01** |  | **1-1** |  | **Grupo PIS não tributado** |
| 279 | CST (Q06) | E | Q04 | N | 1-1 | 2 | Código de Situação Tributária do PIS<br>04=Operação Tributável (tributação monofásica (alíquota zero)); 05=Operação Tributável (Substituição Tributária); 06=Operação Tributável (alíquota zero); 07=Operação Isenta da Contribuição; 08=Operação Sem Incidência da Contribuição; 09=Operação com Suspensão da Contribuição; |
| **280** | **PISOutr (Q05)** | **CG** | **Q01** |  | **1-1** |  | **Grupo PIS Outras Operações** |
| 281 | CST (Q06) | E | Q05 | N | 1-1 | 2 | Código de Situação Tributária do PIS<br>49=Outras Operações de Saída; 50=Operação com Direito a Crédito - Vinculada Exclusivamente a Receita Tributada no Mercado Interno; 51=Operação com Direito a Crédito - Vinculada Exclusivamente a Receita Não Tributada no Mercado Interno; 52=Operação com Direito a Crédito – Vinculada Exclusivamente a Receita de Exportação; 53=Operação com Direito a Crédito - Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno; 54=Operação com Direito a Crédito - Vinculada a Receitas Tributadas no Mercado Interno e de Exportação; 55=Operação com Direito a Crédito - Vinculada a Receitas Não-Tributadas no Mercado Interno e de Exportação; 56=Operação com Direito a Crédito - Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno, e de Exportação; 60=Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita Tributada no Mercado Interno; 61=Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita Não-Tributada no Mercado Interno; 62=Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita de Exportação; 63=Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno; 64=Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas no Mercado Interno e de Exportação; 65=Crédito Presumido - Operação de Aquisição Vinculada a Receitas Não-Tributadas no Mercado Interno e de Exportação; 66=Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno, e de Exportação; 67=Crédito Presumido - Outras Operações; 70=Operação de Aquisição sem Direito a Crédito; 71=Operação de Aquisição com Isenção; 72=Operação de Aquisição com Suspensão; 73=Operação de Aquisição a Alíquota Zero; 74=Operação de Aquisição; sem Incidência da Contribuição; 75=Operação de Aquisição por Substituição Tributária; 98=Outras Operações de Entrada; 99=Outras Operações; <!-- p.53 --> |
| **281.1** | **-x- (Q06.1)** | **CG** | **Q05** |  | **1-1** |  | **Sequência XML<br>Informar os campos Q07 e Q08 se o cálculo do PIS em percentual.** <!-- p.54 --> |
| 282 | vBC (Q07) | E | Q06.1 | N | 1-1 | 13v2 | Valor da Base de Cálculo do PIS |
| 283 | pPIS (Q08) | E | Q06.1 | N | 1-1 | 3v2-4 | Alíquota do PIS (em percentual) |
| **283.1** | **-x- (Q08.1)** | **CG** | **Q05** |  | **1-1** |  | **Sequência XML<br>Informar os campos Q10 e Q11 se o cálculo do PIS for em valor.** |
