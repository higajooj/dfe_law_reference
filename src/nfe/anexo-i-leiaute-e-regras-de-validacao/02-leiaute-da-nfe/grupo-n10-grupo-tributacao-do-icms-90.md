<!-- p.37 -->

# Grupo N10. Grupo Tributação do ICMS= 90

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **232** | **ICMS90 (N10)** | **CG** | **N01** |  | **1-1** |  | **Grupo Tributação do ICMS = 90<br>Tributação ICMS: Outros** |
| 233 | orig (N11) | E | N10 | N | 1-1 | 1 | Origem da mercadoria<br>0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8; 1 - Estrangeira - Importação direta, exceto a indicada no código 6; 2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7; 3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40% e inferior ou igual a 70%; 4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes; 5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%; 6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural; 7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural. 8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%; |
| 234 | CST (N12) | E | N10 | N | 1-1 | 2 | Tributação do ICMS = 90<br>90=Outros |
| **234.1** | **-x- (N12.1)** | **G** | **N10** |  | **0-1** |  | **Sequência XML<br>Grupo opcional.** |
| 235 | modBC (N13) | E | N12.1 | N | 1-1 | 1 | Modalidade de determinação da BC do ICMS<br>0=Margem Valor Agregado (%); 1=Pauta (Valor); 2=Preço Tabelado Máx. (valor); 3=Valor da operação. |
| 236 | vBC (N15) | E | N12.1 | N | 1-1 | 13v2 | Valor da BC do ICMS |
| 237 | pRedBC (N14) | E | N12.1 | N | 0-1 | 3v2-4 | Percentual da Redução de BC |
| 238 | pICMS (N16) | E | N12.1 | N | 1-1 | 3v2-4 | Alíquota do imposto<br>Alíquota do ICMS sem o FCP. Quando for o caso, informar a alíquota do FCP no campo pFCP (Atualizado NT2016.002) |
| 239 | vICMS (N17) | E | N12.1 | N | 1-1 | 13v2 | Valor do ICMS |
| **239.0** | **-x- (N17.0)** | **G** | **N12.1** |  | **0-1** |  | **Sequência XML<br>Grupo opcional. (Incluído na NT2016.002)** |
| 239.w | vBCFCP (N17a) | E | N17.0 | N | 1-1 | 13v2 | Valor da Base de Cálculo do FCP<br>Informar o valor da Base de Cálculo do FCP |
| 239.x | pFCP (N17b) | E | N17.0 | N | 1-1 | 3v2-4 | Percentual do ICMS relativo ao Fundo de Combate à Pobreza (FCP)<br>Percentual relativo ao Fundo de Combate à Pobreza (FCP). Nota: Percentual máximo de 2%, conforme a legislação. |
| 239.y | vFCP (N17c) | E | N17.0 | N | 1-1 | 13v2 | Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP)<br>Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP). |
| **239.1** | **-x- (N17.1)** | **G** | **N10** |  | **0-1** |  | **Sequência XML<br>Grupo opcional.** |
| 240 | modBCST (N18) | E | N17.1 | N | 1-1 | 1 | Modalidade de determinação da BC do ICMS ST<br>0=Preço tabelado ou máximo sugerido 1=Lista Negativa (valor) 2=Lista Positiva (valor) 3=Lista Neutra (valor) 4=Margem Valor Agregado (%) 5=Pauta (valor) <!-- p.38 --> |
| 241 | pMVAST (N19) | E | N17.1 | N | 0-1 | 3v2-4 | Percentual da margem de valor Adicionado do ICMS ST |
| 242 | pRedBCST (N20) | E | N17.1 | N | 0-1 | 3v2-4 | Percentual da Redução de BC do ICMS ST |
| 243 | vBCST (N21) | E | N17.1 | N | 1-1 | 13v2 | Valor da BC do ICMS ST |
| 244 | pICMSST (N22) | E | N17.1 | N | 1-1 | 3v2-4 | Alíquota do imposto do ICMS ST<br>Alíquota do ICMS ST sem o FCP. Quando for o caso, informar a alíquota do FCP no campo pFCP (Atualizado NT2016.002) |
| 245 | vICMSST (N23) | E | N17.1 | N | 1-1 | 13v2 | Valor do ICMS ST<br>Valor do ICMS ST retido |
| **245.0** | **-x- (N23.1)** | **G** | **N17.1** |  | **0-1** |  | **Sequência XML<br>Grupo opcional. (Incluído na NT2016.002)** |
| 245.w | vBCFCPST (N23.a) | E | N23.1 | N | 1-1 | 13v2 | Valor da Base de Cálculo do FCP retido por Substituição Tributária<br>Informar o valor da Base de Cálculo do FCP retido por Substituição Tributária |
| 245.x | pFCPST (N23.b) | E | N23.1 | N | 1-1 | 3v2-4 | Percentual do FCP retido por Substituição Tributária<br>Percentual relativo ao Fundo de Combate à Pobreza (FCP) retido por substituição tributária. |
| 245.y | vFCPST (N23.d) | E | N23.1 | N | 1-1 | 13v2 | Valor do FCP retido por Substituição Tributária<br>Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP) retido por substituição tributária. |
| **245.1** | **-x- (N27.1)** | **G** | **N10** |  | **0-1** |  | **Sequência XML<br>Grupo opcional.** |
| 245.2 | (N28a) | E | N27.1 | N | 1-1 | 13v2 | Valor do ICMS desonerado<br>Informar apenas nos motivos de desoneração documentados abaixo. |
| 245.3 | (N28) | E | N27.1 | N | 1-1 | 2 | Motivo da desoneração do ICMS<br>Campo será preenchido quando o campo anterior estiver preenchido. Informar o motivo da desoneração: 3=Uso na agropecuária; 9=Outros; 12=Órgão de fomento e desenvolvimento agropecuário. |
