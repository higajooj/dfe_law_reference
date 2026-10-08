# Grupo N04. Grupo Tributação do ICMS= 20

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **185** | **ICMS20 (N04)** | **CG** | **N01** |  | **1-1** |  | **Grupo Tributação do ICMS = 20<br>Tributação com redução de base de cálculo** |
| 186 | orig (N11) | E | N04 | N | 1-1 | 1 | Origem da mercadoria<br>0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8; 1 - Estrangeira - Importação direta, exceto a indicada no código 6; 2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7; 3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40% e inferior ou igual a 70%; 4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes; 5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%; 6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural; 7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural. 8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%; |
| 187 | CST (N12) | E | N04 | N | 1-1 | 2 | Tributação do ICMS = 20<br>20=Com redução de base de cálculo |
| 188 | modBC (N13) | E | N04 | N | 1-1 | 1 | Modalidade de determinação da BC do ICMS<br>0=Margem Valor Agregado (%); 1=Pauta (Valor); 2=Preço Tabelado Máx. (valor); 3=Valor da operação. |
| 189 | pRedBC (N14) | E | N04 | N | 1-1 | 3v2-4 | Percentual da Redução de BC |
| 190 | vBC (N15) | E | N04 | N | 1-1 | 13v2 | Valor da BC do ICMS |
| 191 | pICMS (N16) | E | N04 | N | 1-1 | 3v2-4 | Alíquota do imposto<br>Alíquota do ICMS sem o FCP. Quando for o caso, informar a alíquota do FCP no campo pFCP |
| 192 | vICMS (N17) | E | N04 | N | 1-1 | 13v2 | Valor do ICMS |
| **192.0** | **-x- (N17.1)** | **G** | **N04** |  | **0-1** |  | **Sequência XML<br>Grupo opcional. (Incluído na NT2016.002)** <!-- p.29 --> |
| 192.w | vBCFCP (N17a) | E | N17.1 | N | 1-1 | 13v2 | Valor da Base de Cálculo do FCP<br>Informar o valor da Base de Cálculo do FCP |
| 192.x | pFCP (N17b) | E | N17.1 | N | 1-1 | 3v2-4 | Percentual do ICMS relativo ao Fundo de Combate à Pobreza (FCP)<br>Percentual relativo ao Fundo de Combate à Pobreza (FCP). |
| 192.y | vFCP (N17c) | E | N17.1 | N | 1-1 | 13v2 | Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP)<br>Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP). |
| **192.1** | **-x- (N27.1)** | **G** | **N04** |  | **0-1** |  | **Sequência XML<br>Grupo opcional.** |
| 192.2 | (N28a) | E | N27.1 | N | 1-1 | 13v2 | Valor do ICMS desonerado<br>Informar apenas nos motivos de desoneração documentados abaixo. |
| 192.3 | (N28) | E | N27.1 | N | 1-1 | 2 | Motivo da desoneração do ICMS<br>Campo será preenchido quando o campo anterior estiver preenchido. Informar o motivo da desoneração: 3=Uso na agropecuária; 9=Outros; 12=Órgão de fomento e desenvolvimento agropecuário. |
