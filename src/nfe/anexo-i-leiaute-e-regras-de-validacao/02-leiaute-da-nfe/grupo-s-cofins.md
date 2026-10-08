# Grupo S. COFINS

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **293** | **COFINS (S01)** | **G** | **M01** |  | **0-1** |  | **Grupo COFINS<br>Informar apenas um dos grupos S02, S03, S04 ou S04 com base valor atribuído ao campo de CST da COFINS** |
| **294** | **COFINSAliq (S02)** | **CG** | **S01** |  | **1-1** |  | **Grupo COFINS tributado pela alíquota** |
| 295 | CST (S06) | E | S02 | N | 1-1 | 2 | Código de Situação Tributária da COFINS<br>01=Operação Tributável (base de cálculo = valor da operação alíquota normal (cumulativo/não cumulativo)); 02=Operação Tributável (base de cálculo = valor da operação (alíquota diferenciada)); |
| 296 | vBC (S07) | E | S02 | N | 1-1 | 13v2 | Valor da Base de Cálculo da COFINS |
| 297 | pCOFINS (S08) | E | S02 | N | 1-1 | 3v2-4 | Alíquota da COFINS (em percentual) |
| 298 | vCOFINS (S11) | E | S02 | N | 1-1 | 13v2 | Valor da COFINS |
| **299** | **(S03)** | **CG** | **S01** |  | **1-1** |  | **Grupo de COFINS tributado por Qtde** |
| 300 | CST (S06) | E | S03 | N | 1-1 | 2 | Código de Situação Tributária da COFINS<br>03=Operação Tributável (base de cálculo = quantidade vendida x alíquota por unidade de produto); |
| 301 | qBCProd (S09) | E | S03 | N | 1-1 | 12v0-4 | Quantidade Vendida |
| 302 | vAliqProd (S10) | E | S03 | N | 1-1 | 11v0-4 | Alíquota da COFINS (em reais) |
| 303 | vCOFINS (S11) | E | S03 | N | 1-1 | 13v2 | Valor da COFINS |
| 304 | COFINSNT (S04) | CG | S01 |  | 1-1 |  | Grupo COFINS não tributado |
| 305 | CST (S06) | E | S04 | N | 1-1 | 2 | Código de Situação Tributária da COFINS<br>04=Operação Tributável (tributação monofásica, alíquota zero); 05=Operação Tributável (Substituição Tributária); 06=Operação Tributável (alíquota zero); 07=Operação Isenta da Contribuição; 08=Operação Sem Incidência da Contribuição; 09=Operação com Suspensão da Contribuição; <!-- p.55 --> |
| **306** | **(S05)** | **CG** | **S01** |  | **1-1** |  | **Grupo COFINS Outras Operações** |
| 307 | CST (S06) | E | S05 | N | 1-1 | 2 | Código de Situação Tributária da COFINS<br>49=Outras Operações de Saída; 50=Operação com Direito a Crédito - Vinculada Exclusivamente a Receita Tributada no Mercado Interno; 51=Operação com Direito a Crédito - Vinculada Exclusivamente a Receita Não Tributada no Mercado Interno; 52=Operação com Direito a Crédito – Vinculada Exclusivamente a Receita de Exportação; 53=Operação com Direito a Crédito - Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno; 54=Operação com Direito a Crédito - Vinculada a Receitas Tributadas no Mercado Interno e de Exportação; 55=Operação com Direito a Crédito - Vinculada a Receitas Não-Tributadas no Mercado Interno e de Exportação; 56=Operação com Direito a Crédito - Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno, e de Exportação; 60=Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita Tributada no Mercado Interno; 61=Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita Não-Tributada no Mercado Interno; 62=Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita de Exportação; 63=Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno; 64=Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas no Mercado Interno e de Exportação; 65=Crédito Presumido - Operação de Aquisição Vinculada a Receitas Não-Tributadas no Mercado Interno e de Exportação; 66=Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno, e de Exportação; 67=Crédito Presumido - Outras Operações; 70=Operação de Aquisição sem Direito a Crédito; 71=Operação de Aquisição com Isenção; 72=Operação de Aquisição com Suspensão; 73=Operação de Aquisição a Alíquota Zero; 74=Operação de Aquisição; sem Incidência da Contribuição; 75=Operação de Aquisição por Substituição Tributária; 98=Outras Operações de Entrada; 99=Outras Operações; <!-- p.56 --> |
| **307.1** | **-x- (S06.1)** | **CG** | **S05** |  | **1-1** |  | **Sequência XML<br>Informar os campos S07 e S08 para cálculo da COFINS em percentual.** |
| 308 | vBC (S07) | E | S06.1 | N | 1-1 | 13v2 | Valor da Base de Cálculo da COFINS |
| 309 | pCOFINS (S08) | E | S06.1 | N | 1-1 | 3v2-4 | Alíquota da COFINS (em percentual) |
| **309.1** | **-x- (S08.1)** | **CG** | **S05** |  | **1-1** |  | **Sequência XML<br>Informar os campos S09 e S10 para cálculo da COFINS em valor.** |
| 310 | qBCProd (S09) | E | S08.1 | N | 1-1 | 12v0-4 | Quantidade Vendida |
| 311 | vAliqProd (S10) | E | S08.1 | N | 1-1 | 11v0-4 | Alíquota da COFINS (em reais) |
| 312 | vCOFINS (S11) | E | S05 | N | 1-1 | 13v2 | Valor da COFINS |
