# Grupo N05. Grupo Tributação do ICMS= 30

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **193** | **ICMS30 (N05)** | **CG** | **N01** |  | **1-1** |  | **Grupo Tributação do ICMS = 30<br>Tributação Isenta ou não tributada e com cobrança do ICMS por substituição tributária** |
| 194 | orig (N11) | E | N05 | N | 1-1 | 1 | Origem da mercadoria<br>0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8; 1 - Estrangeira - Importação direta, exceto a indicada no código 6; 2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7; 3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40% e inferior ou igual a 70%; 4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes; 5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%; 6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural; 7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural. 8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%; |
| 195 | CST (N12) | E | N05 | N | 1-1 | 2 | Tributação do ICMS = 30<br>30=Isenta ou não tributada e com cobrança do ICMS por substituição tributária |
| 196 | modBCST (N18) | E | N05 | N | 1-1 | 1 | Modalidade de determinação da BC do ICMS ST<br>0=Preço tabelado ou máximo sugerido; 1=Lista Negativa (valor) 2=Lista Positiva (valor) 3=Lista Neutra (valor) 4=Margem Valor Agregado (%) 5=Pauta (valor) 6 = Valor da Operação (NT 2019.001) <!-- p.30 --> |
| 197 | pMVAST (N19) | E | N05 | N | 0-1 | 3v2-4 | Percentual da margem de valor Adicionado do ICMS ST |
| 198 | pRedBCST (N20) | E | N05 | N | 0-1 | 3v2-4 | Percentual da Redução de BC do ICMS ST |
| 199 | vBCST (N21) | E | N05 | N | 1-1 | 13v2 | Valor da BC do ICMS ST |
| 200 | pICMSST (N22) | E | N05 | N | 1-1 | 3v2-4 | Alíquota do imposto do ICMS ST<br>Alíquota do ICMS ST sem o FCP. Quando for o caso, informar a alíquota do FCP no campo pFCP (Atualizado NT2016.002) |
| 201 | vICMSST (N23) | E | N05 | N | 1-1 | 13v2 | Valor do ICMS ST<br>Valor do ICMS ST retido |
| **201.0** | **-x- (N23.1)** | **G** | **N05** |  | **0-1** |  | **Sequência XML<br>Grupo opcional. (Incluído na NT2016.002)** |
| 201.w | vBCFCPST (N23a) | E | N23.1 | N | 1-1 | 13v2 | Valor da Base de Cálculo do FCP<br>Informar o valor da Base de Cálculo do FCP retido por Substituição Tributária |
| 201.x | pFCPST (N23b) | E | N23.1 | N | 1-1 | 3v2-4 | Percentual do FCP retido por Substituição Tributária<br>Percentual relativo ao Fundo de Combate à Pobreza (FCP) retido por substituição tributária. |
| 201.y | vFCPST (N23d) | E | N23.1 | N | 1-1 | 13v2 | Valor do FCP retido por Substituição Tributária<br>Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP) retido por substituição tributária. |
| **201.1** | **-x- (N27.1)** | **G** | **N05** |  | **0-1** |  | **Sequência XML<br>Grupo opcional.** |
| 201.2 | (N28a) | E | N27.1 | N | 1-1 | 13v2 | Valor do ICMS desonerado<br>Informar apenas nos motivos de desoneração documentados abaixo. |
| 201.3 | (N28) | E | N27.1 | N | 1-1 | 2 | Motivo da desoneração do ICMS<br>Campo será preenchido quando o campo anterior estiver preenchido. Informar o motivo da desoneração: 6=Utilitários e Motocicletas da Amazônia Ocidental e Áreas de Livre Comércio (Resolução 714/88 e 790/94 – CONTRAN e suas alterações); 7=SUFRAMA; 9=Outros; |
