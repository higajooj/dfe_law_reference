<!-- p.11 -->
# 3. Alterações de leiaute da Nota Fiscal eletrônica

## 3.1 Grupo F. Identificação do Local de Retirada

Criados novos campos para complementação das informações de identificação do estabelecimento e do endereço do local de retirada:

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **F01** | **retirada** | **G** | **A01** | | **0-1** | | **Identificação do Local de retirada. Informar somente se diferente do endereço do remetente.** |
| F02 | CNPJ | CE | F01 | N | 1-1 | 0 ou 14 | CNPJ. Informar CNPJ ou CPF. Preencher os zeros não significativos. |
| F02a | CPF | CE | F01 | N | 1-1 | 11 | CPF |
| F02b | xNome | E | F01 | C | 0-1 | 2-60 | Razão Social ou Nome do Expedidor |
| F03 | xLgr | E | F01 | C | 1-1 | 2 - 60 | Logradouro |
| F04 | nro | E | F01 | C | 1-1 | 1 - 60 | Número |
| F05 | xCpl | E | F01 | C | 0-1 | 1 - 60 | Complemento |
| F06 | xBairro | E | F01 | C | 1-1 | 2 - 60 | Bairro |
| F07 | cMun | E | F01 | N | 1-1 | 7 | Código do município. Utilizar a Tabela do IBGE (Anexo IX - Tabela de UF, Município e País). Informar ‘9999999 ‘para operações com o exterior. |
| F08 | xMun | E | F01 | C | 1-1 | 2 - 60 | Nome do município. Informar ‘EXTERIOR ‘para operações com o exterior. |
| F09 | UF | E | F01 | C | 1-1 | 2 | Sigla da UF. Informar ‘EX’ para operações com o exterior. |
| F10 | CEP | E | F01 | N | 0-1 | 8 | Código do CEP. Informar os zeros não significativos. |
| F11 | cPais | E | F01 | N | 0-1 | 4 | Código do País. Utilizar a Tabela do BACEN (Anexo IX - Tabela de UF, Município e País). |
| F12 | xPais | E | F01 | C | 0-1 | 2 - 60 | Nome do País |
| F13 | fone | E | F01 | N | 0-1 | 6 - 14 | Telefone. Preencher com o Código DDD + número do telefone. Nas operações com exterior é permitido informar o código do país + código da localidade + número do telefone (v2.0) |
| F14 | email | E | F01 | C | 0-1 | 1 - 60 | Endereço de e-mail do Expedidor |
| F15 | IE | E | F01 | N | 0-1 | 2 - 14 | Inscrição Estadual do Estabelecimento Expedidor. Informar somente os algarismos, sem os caracteres de formatação (ponto, barra, hífen, etc.). |

## 3.2 Grupo G. Identificação do Local de Entrega

Criados novos campos para complementação das informações de identificação do estabelecimento e do endereço do local de entrega:

<!-- p.12 -->
| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **G01** | **entrega** | **G** | **A01** | | **0-1** | | **Identificação do Local de entrega. Informar somente se diferente do endereço destinatário.** |
| G02 | CNPJ | CE | G01 | N | 1-1 | 0 ou 14 | CNPJ. Informar CNPJ ou CPF. Preencher os zeros não significativos. (v2.0) |
| G02a | CPF | CE | G01 | N | 1-1 | 11 | CPF |
| G02b | xNome | E | G01 | C | 0-1 | 2-60 | Razão Social ou Nome do Recebedor |
| G03 | xLgr | E | G01 | C | 1-1 | 2 - 60 | Logradouro |
| G04 | nro | E | G01 | C | 1-1 | 1 - 60 | Número |
| G05 | xCpl | E | G01 | C | 0-1 | 1 - 60 | Complemento |
| G06 | xBairro | E | G01 | C | 1-1 | 2 - 60 | Bairro |
| G07 | cMun | E | G01 | N | 1-1 | 7 | Código do município. Utilizar a Tabela do IBGE (Anexo IX - Tabela de UF, Município e País). Informar ‘9999999 ‘para operações com o exterior. |
| G08 | xMun | E | G01 | C | 1-1 | 2 - 60 | Nome do município. Informar ‘EXTERIOR ‘para operações com o exterior. |
| G09 | UF | E | G01 | C | 1-1 | 2 | Sigla da UF. Informar ‘EX’ para operações com o exterior. |
| G10 | CEP | E | G01 | N | 0-1 | 8 | Código do CEP. Informar os zeros não significativos. |
| G11 | cPais | E | G01 | N | 0-1 | 4 | Código do País. Utilizar a Tabela do BACEN (Anexo IX - Tabela de UF, Município e País). |
| G12 | xPais | E | G01 | C | 0-1 | 2 - 60 | Nome do País |
| G13 | fone | E | G01 | N | 0-1 | 6 - 14 | Telefone. Preencher com o Código DDD + número do telefone. Nas operações com exterior é permitido informar o código do país + código da localidade + número do telefone (v2.0) |
| G14 | email | E | G01 | C | 0-1 | 1 - 60 | Endereço de e-mail do Recebedor |
| G15 | IE | E | G01 | N | 0-1 | 2 - 14 | Inscrição Estadual do Estabelecimento Recebedor. Informar somente os algarismos, sem os caracteres de formatação (ponto, barra, hífen, etc.). |

## 3.3 Grupo K. Detalhamento Específico de Medicamento e de matérias-primas farmacêuticas

Atualizado o leiaute para que seja informado o motivo da isenção da ANVISA em campo separado do código de produto da ANVISA.

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **K01** | **med** | **CG** | **I90** | | **1-1** | | **Detalhamento de Medicamentos e de matérias-primas farmacêuticas. Informar apenas quando se tratar de medicamentos ou de matérias-primas farmacêuticas, permite ocorrências.** |
| K01a | cProdANVISA | E | K01 | C | 1-1 | 6,13 | Código de Produto da ANVISA. Utilizar o número do registro ANVISA ou preencher com o literal “ISENTO”, no caso de medicamento isento de registro na ANVISA. |
| K01b | xMotivoIsencao | E | K01 | C | 0-1 | 1-255 | Motivo da isenção da ANVISA. Obs.: Para medicamento isento de registro na ANVISA, informar o número da decisão que o isenta, como por exemplo o número da<!-- p.13 --> Resolução da Diretoria Colegiada da ANVISA (RDC). |
| K06 | vPMC | E | K01 | N | 1-1 | 13v2 | Preço máximo consumidor |

## 3.4 Grupo N. Grupo Tributação do ICMS= 60

Criado novo campo para informar o valor do ICMS Próprio do Substituto.

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **N08** | **ICMS60** | **CG** | **N01** | | **1-1** | | **Grupo Tributação do ICMS = 60. Tributação ICMS cobrado anteriormente por substituição tributária** |
| N11 | orig | E | N08 | N | 1-1 | 1 | Origem da mercadoria<br>0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8;<br>1 - Estrangeira - Importação direta, exceto a indicada no código 6;<br>2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7;<br>3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40% e inferior ou igual a 70%;<br>4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes;<br>5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%;<br>6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural;<br>7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural.<br>8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%; |
| N12<!-- p.14 --> | CST | E | N08 | N | 1-1 | 2 | Tributação do ICMS = 60. 60=ICMS cobrado anteriormente por substituição tributária |
| **N25.1** | **-x-** | **G** | **N08** | | **0-1** | | **Sequência XML. Grupo opcional.** |
| N26 | vBCSTRet | E | N25.1 | N | 1-1 | 13v2 | Valor da BC do ICMS ST retido. Valor da BC do ICMS ST cobrado anteriormente por ST (v2.0). O valor pode ser omitido quando a legislação não exigir a sua informação. (NT 2011/004) |
| N26a | pST | E | N25.1 | N | 1-1 | 3v2-4 | Alíquota suportada pelo Consumidor Final. Deve ser informada a alíquota do cálculo do ICMS-ST, já incluso o FCP caso incida sobre a mercadoria. Exemplo: alíquota da mercadoria na venda ao consumidor final = 18% e 2% de FCP. A alíquota a ser informada no campo pST deve ser 20%. (Atualizado NT 2016/002) |
| N26b | vICMSSubstituto | E | N25.1 | N | 0-1 | 13v2 | Valor do ICMS próprio do Substituto. Valor do ICMS Próprio do Substituto cobrado em operação anterior |
| N27 | vICMSSTRet | E | N25.1 | N | 1-1 | 13v2 | Valor do ICMS ST retido. Valor do ICMS ST cobrado anteriormente por ST (v2.0). O valor pode ser omitido quando a legislação não exigir a sua informação. (NT 2011/004) |
| **N27.1** | **-x-** | **G** | **N08** | | **0-1** | | **Sequência XML. Grupo opcional. (Incluído na NT 2016/002)** |
| N27a | vBCFCPSTRet | E | N27.1 | N | 1-1 | 13v2 | Valor da Base de Cálculo do FCP retido anteriormente. Informar o valor da Base de Cálculo do FCP retido anteriormente por ST |
| N27b | pFCPSTRet | E | N27.1 | N | 1-1 | 3v2-4 | Percentual do FCP retido anteriormente por Substituição Tributária. Percentual relativo ao Fundo de Combate à Pobreza (FCP) retido por substituição tributária. |
| N27d | vFCPSTRet | E | N27.1 | N | 1-1 | 13v2 | Valor do FCP retido por Substituição Tributária. Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP) retido por substituição tributária. |
| **N33** | **-x-** | **G** | **N08** | | **0-1** | | **Sequência XML. Grupo opcional para informações do ICMS Efetivo (Incluído na NT 2016/002)** |
| N34 | pRedBCEfet | E | N33 | N | 1-1 | 3v2-4 | Percentual de redução da base de cálculo efetiva. Percentual de redução, caso estivesse submetida ao regime comum de tributação, para obtenção da base de cálculo efetiva (vBCEfet). Obs.: opcional a critério da UF. |
| N35 | vBCEfet | E | N33 | N | 1-1 | 13v2 | Valor da base de cálculo efetiva. Valor da base de cálculo que seria atribuída à operação própria do contribuinte substituído, caso<!-- p.15 --> estivesse submetida ao regime comum de tributação, obtida pelo produto do Vprod por (1-pRedBCEfet). Obs.: opcional a critério da UF. |
| N36 | pICMSEfet | E | N33 | N | 1-1 | 3v2-4 | Alíquota do ICMS efetiva. Alíquota do ICMS na operação a consumidor final, caso estivesse submetida ao regime comum de tributação. Obs.: opcional a critério da UF. |
| N37 | vICMSEfet | E | N33 | N | 1-1 | 13v2 | Valor do ICMS efetivo. Obtido pelo produto do valor do campo pICMSEfet pelo valor do campo vBCEfet, caso estivesse submetida ao regime comum de tributação. Obs.: opcional a critério da UF. |

## 3.5 Grupo N. Grupo de Repasse do ICMS ST

Criados novos campos para informar Fundo de Combate à Pobreza (FCP) retido anteriormente por ST.

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **N10b** | **ICMSST** | **CG** | **N01** | | **1-1** | | **Grupo de Repasse de ICMS ST retido anteriormente em operações interestaduais com repasses através do Substituto Tributário. Grupo de informação do ICMS ST devido para a UF de destino, nas operações interestaduais de produtos que tiveram retenção antecipada de ICMS por ST na UF do remetente. Repasse via Substituto Tributário. (v2.0)** |
| N11 | orig | E | N10b | N | 1-1 | 1 | Origem da mercadoria<br>0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8;<br>1 - Estrangeira - Importação direta, exceto a indicada no código 6;<br>2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7;<br>3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40% e inferior ou igual a 70%;<br>4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos<!-- p.16 --> Ajustes;<br>5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%;<br>6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural;<br>7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural.<br>8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%; |
| N12 | CST | E | N10b | N | 1-1 | 2 | 41=Não Tributado (v2.0).<br>60= cobrado anteriormente por substituição tributária (Incluído NT 2016/002) |
| N26 | vBCSTRet | E | N10b | N | 1-1 | 13v2 | Valor do BC do ICMS ST retido na UF remetente. Informar o valor da BC do ICMS ST retido na UF remetente (v2.0) |
| N26a | pST | E | N10b | N | 0-1 | 3v2-4 | Alíquota suportada pelo Consumidor Final. Deve ser informada a alíquota do cálculo do ICMS-ST, já incluso o FCP caso incida sobre a mercadoria. Exemplo: alíquota da mercadoria na venda ao consumidor final = 18% e 2% de FCP. A alíquota a ser informada no campo pST deve ser 20%. |
| N26b | vICMSSubstituto | E | N25.1 | N | 0-1 | 13v2 | Valor do ICMS próprio do Substituto. Valor do ICMS Próprio do Substituto cobrado em operação anterior |
| N27 | vICMSSTRet | E | N10b | N | 1-1 | 13v2 | Valor do ICMS ST retido na UF remetente. Informar o valor do ICMS ST retido na UF remetente (v2.0) |
| **N27.1** | **-x-** | **G** | **N10b** | | **0-1** | | **Sequência XML. Grupo opcional para informações do FCP retido anteriormente por ST** |
| N27a | vBCFCPSTRet | E | N27.1 | N | 1-1 | 13v2 | Valor da Base de Cálculo do FCP retido anteriormente. Informar o valor da Base de Cálculo do FCP retido anteriormente por ST |
| N27b | pFCPSTRet | E | N27.1 | N | 1-1 | 3v2-4 | Percentual do FCP retido anteriormente por Substituição Tributária. Percentual relativo ao Fundo de Combate à Pobreza (FCP) retido por substituição tributária. |
| N27d | vFCPSTRet | E | N27.1 | N | 1-1 | 13v2 | Valor do FCP retido por Substituição Tributária. Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP) retido por substituição tributária. |
| N31 | vBCSTDest | E | N10b | N | 1-1 | 13v2 | Valor da BC do ICMS ST da UF destino. Informar o valor da BC do ICMS ST da UF destino (v2.0) |
| N32 | vICMSSTDest | E | N10b | N | 1-1 | 13v2 | Valor do ICMS ST da UF destino. Informar o valor do ICMS ST da UF destino (v2.0) |
| **N33** | **-x-** | **G** | **N10b** | | **0-1** | | **Sequência XML. Grupo opcional para informações do ICMS Efetivo** |
| N34<!-- p.17 --> | pRedBCEfet | E | N33 | N | 1-1 | 3v2-4 | Percentual de redução da base de cálculo efetiva. Percentual de redução, caso estivesse submetida ao regime comum de tributação, para obtenção da base de cálculo efetiva (vBCEfet). Obs.: opcional a critério da UF. |
| N35 | vBCEfet | E | N33 | N | 1-1 | 13v2 | Valor da base de cálculo efetiva. Valor da base de cálculo que seria atribuída à operação própria do contribuinte substituído, caso estivesse submetida ao regime comum de tributação, obtida pelo produto do Vprod por (1- pRedBCEfet). Obs.: opcional a critério da UF. |
| N36 | pICMSEfet | E | N33 | N | 1-1 | 3v2-4 | Alíquota do ICMS efetiva. Alíquota do ICMS na operação a consumidor final, caso estivesse submetida ao regime comum de tributação. Obs.: opcional a critério da UF. |
| N37 | vICMSEfet | E | N33 | N | 1-1 | 13v2 | Valor do ICMS efetivo. Obtido pelo produto do valor do campo pICMSEfet pelo valor do campo vBCEfet, caso estivesse submetida ao regime comum de tributação. Obs.: opcional a critério da UF. |

## 3.6 Grupo N. Grupo CRT=1 (CSON 500)

Criado novo campo para informar o valor do ICMS Próprio do Substituto.

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **N10g** | **ICMSSN500** | **CG** | **N01** | | **1-1** | | **Grupo CRT=1 – Simples Nacional e CSOSN = 500. Tributação ICMS pelo Simples Nacional, CSOSN=500 (v2.0)** |
| N11 | orig | E | N10g | N | 1-1 | 1 | Origem da mercadoria<br>0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8;<br>1 - Estrangeira - Importação direta, exceto a indicada no código 6;<br>2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7;<br>3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40% e inferior ou igual a 70%;<br>4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos<!-- p.18 --> básicos de que tratam as legislações citadas nos Ajustes;<br>5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%;<br>6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural;<br>7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural.<br>8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%; |
| N12a | CSOSN | E | N10g | N | 1-1 | 3 | Código de Situação da Operação – Simples Nacional. 500=ICMS cobrado anteriormente por substituição tributária (substituído) ou por antecipação. (v2.0) |
| **N25.1** | **-x-** | **G** | **N10g** | | **0-1** | | **Sequência XML. Grupo opcional.** |
| N26 | vBCSTRet | E | N25.1 | N | 1-1 | 13v2 | Valor da BC do ICMS ST retido. Valor da BC do ICMS ST cobrado anteriormente por ST (v2.0). O valor pode ser omitido quando a legislação não exigir a sua informação. (NT 2011/004) |
| N26a | pST | E | N25.1 | N | 1-1 | 3v2-4 | Alíquota suportada pelo Consumidor Final. Deve ser informada a alíquota do cálculo do ICMS-ST, já incluso o FCP. Exemplo: alíquota da mercadoria na venda ao consumidor final = 18% e 2% de FCP. A alíquota a ser informada no campo pST deve ser 20%. (Atualizada NT 2016/002) |
| N26b | vICMSSubstituto | E | N25.1 | N | 0-1 | 13v2 | Valor do ICMS próprio do Substituto. Valor do ICMS próprio do Substituto cobrado em operação anterior |
| N27 | vICMSSTRet | E | N25.1 | N | 1-1 | 13v2 | Valor do ICMS ST retido. Valor do ICMS ST cobrado anteriormente por ST (v2.0). O valor pode ser omitido quando a legislação não exigir a sua informação. (NT 2011/004) |
| **N27.1** | **-x-** | **G** | **N10g** | | **0-1** | | **Sequência xml. Grupo opcional. (Incluído na NT 2016/002)** |
| N27a | vBCFCPSTRet | E | N27.1 | N | 1-1 | 13v2 | Valor da Base de Cálculo do FCP retido anteriormente. Informar o valor da Base de Cálculo do FCP retido anteriormente por ST |
| N27b<!-- p.19 --> | pFCPSTRet | E | N27.1 | N | 1-1 | 3v2-4 | Percentual do FCP retido anteriormente por Substituição Tributária. Percentual relativo ao Fundo de Combate à Pobreza (FCP). |
| N27d | vFCPSTRet | E | N27.1 | N | 1-1 | 13v2 | Valor do FCP retido por Substituição Tributária. Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP) retido por substituição tributária. |
| **N33** | **-x-** | **G** | **N10g** | | **0-1** | | **Sequência XML. Grupo opcional para informações do ICMS Efetivo. (Incluído na NT 2016/002)** |
| N34 | pRedBCEfet | E | N33 | N | 1-1 | 3v2-4 | Percentual de redução da base de cálculo efetiva. Percentual de redução, caso estivesse submetida ao regime comum de tributação, para obtenção da base de cálculo efetiva (vBCEfet). Obs.: opcional a critério da UF. |
| N35 | vBCEfet | E | N33 | N | 1-1 | 13v2 | Valor da base de cálculo efetiva. Valor da base de cálculo que seria atribuída à operação própria do contribuinte substituído, caso estivesse submetida ao regime comum de tributação, obtida pelo produto do Vprod por (1- pRedBCEfet). Obs.: opcional a critério da UF. |
| N36 | pICMSEfet | E | N33 | N | 1-1 | 3v2-4 | Alíquota do ICMS efetiva. Alíquota do ICMS na operação a consumidor final, caso estivesse submetida ao regime comum de tributação. Obs.: opcional a critério da UF. |
| N37 | vICMSEfet | E | N33 | N | 1-1 | 13v2 | Valor do ICMS efetivo. Obtido pelo produto do valor do campo pICMSEfet pelo valor do campo vBCEfet, caso estivesse submetida ao regime comum de tributação. Obs.: opcional a critério da UF. |

## 3.7 Grupo ZD. Informações do Responsável Técnico

Novo grupo criado nesta NT.

<!-- p.20 -->
| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **ZD01** | **infRespTec** | **G** | **A01** | | **0-1** | | **Informações do Responsável Técnico pela emissão do DF-e. Grupo para informações do responsável técnico pelo sistema de emissão do DF-e** |
| ZD02 | CNPJ | E | ZD01 | N | 1-1 | 14 | CNPJ da pessoa jurídica responsável pelo sistema utilizado na emissão do documento fiscal eletrônico. Informar o CNPJ da pessoa jurídica responsável pelo sistema utilizado na emissão do documento fiscal eletrônico. |
| ZD04 | xContato | E | ZD01 | C | 1-1 | 2-60 | Nome da pessoa a ser contatada. Informar o nome da pessoa a ser contatada na empresa desenvolvedora do sistema utilizado na emissão do documento fiscal eletrônico. |
| ZD05 | email | E | ZD01 | C | 1-1 | 6-60 | E-mail da pessoa jurídica a ser contatada. Informar o e-mail da pessoa a ser contatada na empresa desenvolvedora do sistema. |
| ZD06 | fone | E | ZD01 | N | 1-1 | 6-14 | Telefone da pessoa jurídica/física a ser contatada. Informar o telefone da pessoa a ser contatada na empresa desenvolvedora do sistema. Preencher com o Código DDD + número do telefone. |
| **ZD07** | **-x-** | **G** | **ZD01** | | **0-1** | | **Sequência XML. Grupo de informações do Código de Segurança do Responsável Técnico - CSTR** |
| ZD08 | idCSRT | E | ZD07 | N | 1-1 | 2 | Identificador do CSRT. Identificador do CSRT utilizado para montar o hash do CSRT |
| ZD09 | hashCSRT | E | ZD07 | C | 1-1 | 28 | Hash do CSRT. O hashCSRT é o resultado da função hash (SHA-1 – Base64) do CSRT fornecido pelo fisco mais a Chave de Acesso da NFe. |

## 3.8 Protocolo de recebimento da NF-e

Criados novos campos para que, a critério da UF, possa ser retornado uma mensagem de interesse da SEFAZ para o contribuinte.

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **PR01** | **protNFe** | **Raiz** | **-** | **-** | **-** | **-** | **TAG raiz do Protocolo de recebimento da NFe** |
| PR02 | versao | A | PR01 | N | 1-1 | 2v2 | Versão do leiaute das informações de Protocolo. |
| **PR03** | **infProt** | **G** | **PR01** | **-** | **1-1** | **-** | **Informações do Protocolo de resposta.<br>TAG a ser assinada** |
| PR04 | Id | ID | PR03 | C | 0-1 | - | Identificador da TAG a ser assinada, somente precisa ser informado se a UF assinar a resposta.<br>Em caso de assinatura da resposta pela SEFAZ preencher o campo com o Número do Protocolo, precedido com o literal “ID” |
| PR05 | tpAmb | E | PR03 | N | 1-1 | 1 | Identificação do Ambiente:<br>1 – Produção/2 - Homologação |
| PR06<!-- p.21 --> | verAplic | E | PR03 | C | 1-1 | 1-20 | Versão do Aplicativo que processou o Lote. A versão deve ser iniciada com a sigla da UF nos casos de WS próprio ou a sigla SVAN ou SVRS nos demais casos. |
| PR07 | chNFe | E | PR03 | N | 1-1 | 44 | Chave de Acesso da NF-e (vide item 5.4) |
| PR08 | dhRecbto | E | PR03 | D | 1-1 | - | Preenchido com a data e hora do processamento (informado também no caso de rejeição).<br>Formato: “AAAA-MM-DDThh:mm:ssTZD” (UTC - Universal Coordinated Time). |
| PR09 | nProt | E | PR03 | N | 0-1 | 15 | Número do Protocolo da NF-e (vide item 5.8) |
| PR10 | digVal | E | PR03 | C | 0-1 | 28 | Digest Value da NF-e processada. Utilizado para conferir a integridade da NFe original. |
| PR11 | cStat | E | PR03 | N | 1-1 | 3 | Código do status da resposta para a NF-e (vide item 5.2). |
| PR12 | xMotivo | E | PR03 | C | 1-1 | 1-255 | Descrição literal do status da resposta para a NF-e. |
| **PR13** | **Sequência XML** | **G** | **PR03** | | **0-1** | | **Grupo de informações para envio de mensagens do interesse da SEFAZ** |
| PR14 | cMsg | E | PR13 | N | 0-1 | 1-4 | Código da Mensagem. |
| PR15 | xMsg | E | PR13 | C | 1-1 | 1-200 | Mensagem da SEFAZ para o emissor. |
| **PR90** | **Signature** | **G** | **PR01** | **xml** | **0-1** | **-** | **Assinatura XML do grupo identificado pelo atributo “Id”<br>A decisão de assinar a mensagem fica a critério da UF interessada.** |
