# 3.1. Abreviações utilizadas nas colunas de cabeçalho do leiaute

<!-- p.67 -->

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **389** | **cobr (Y01)** | **G** | **A01** |  | **0-1** |  | **grupo de Cobrança** |

**a) coluna #**: identificador da linha da tabela;

**b) coluna ID**: identificação do campo, alguns campos relacionados com tributos podem aparecer mais de uma vez no leiaute em função da estrutura de grupos de choice baseados no CST – Código de Tributação do ICMS.

Exemplo:

O preenchimento dos campos de tributos relacionados com o “ICMS Normal e ST” depende do conteúdo informado no código de Tributação do ICMS (campo N12), que pode assumir um dos seguintes valores:

- 00 - Tributada integralmente;
- 10 - Tributada e com cobrança do ICMS por substituição tributária;
- 20 - Com redução de base de cálculo;
- 30 - Isenta ou não tributada e com cobrança do ICMS por substituição tributária;
- 40 - Isenta;
- 41 - Não tributada;
- 50 - Suspensão;
- 51 - Diferimento;
- 60 - ICMS cobrado anteriormente por substituição tributária;
- 70 - Com redução de base de cálculo e cobrança do ICMS por substituição tributária;
- 90 - Outros.

Assim, conforme o código de Tributação do ICMS aplicável para a situação, o grupo de tributo “ICMS Normal e ST” deverá ter os campos assinalados com ‘S’ ou ‘?’ da seguinte tabela:

| ID | Campo | Descrição | 00 | 10 | 20 | 30 | 40 | 41 | 50 | 51 | 60 | 70 | 90 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| N11 | Orig | Origem da mercadoria | S | S | S | S | S | S | S | S | S | S | ? |
| N12 | CST | Tributação do ICMS | S | S | S | S | S | S | S | S | S | S | ? |
| N13 | modBC | Modalidade de determinação da BC do ICMS | S | S | S | N | N | N | N | ? | N | S | ? |
| N14 | pRedBC | Percentual da Redução de BC | N | N | S | N | N | N | N | ? | N | S | ? |
| N15 | vBC | Valor da BC do ICMS | S | S | S | N | N | N | N | ? | N | S | ? |
| N16 | pICMS | Alíquota do imposto | S | S | S | N | N | N | N | ? | N | S | ? |
| N17 | vICMS | Valor do ICMS | S | S | S | N | N | N | N | ? | N | S | ? |
| N18 | modBCST | Modalidade de determinação da BC do ICMS ST | N | S | N | S | N | N | N | N | N | S | ? |
| N19 | pMVAST | Percentual da margem de valor Adicionado do ICMS ST | N | S | N | S | N | N | N | N | N | S | ? |
| N20 | pRedBCST | Percentual da Redução de BC do ICMS ST | N | ? | N | ? | N | N | N | N | N | ? | ? |
| N21 | vBCST | Valor da BC do ICMS ST | N | S | N | S | N | N | N | N | S | S | ? <!-- p.68 --> |
| N22 | pICMSST | Alíquota do imposto do ICMS ST | N | S | N | S | N | N | N | N | N | S | ? |
| N23 | vICMSST | Valor do ICMS ST | N | S | N | S | N | N | N | N | S | S | ? |
| N24 | UFST | UF para qual é devido o ICMS ST | N | N | N | N | N | N | N | N | N | N | ? |
| N25 | pBCop | Percentual da BC operação própria | N | N | N | N | N | N | N | N | N | N | ? |
| N26 | vBCSTRet | Valor da BC do ICMS Retido Anteriormente | N | N | N | N | N | S | N | N | S | N | ? |
| N27 | vICMSSTRet | Valor do ICMS Retido Anteriormente | N | N | N | N | N | S | N | N | S | N | ? |
| N28 |  | Motivo da desoneração do ICMS | N | N | N | N | N | N | N | N | N | N | ? |
| N31 | vBCSTDest | Valor da BC do ICMS ST da UF destino | N | N | N | N | N | S | N | N | N | N | N |
| N32 | vICMSSTDest | Valor do ICMS ST da UF destino | N | N | N | N | N | S | N | N | N | N | N |

* “S” – o campo deve ser informado, “N” – o campo não deve ser informado e “?” – a exigência do campo depende da situação fática.

**c) coluna campo**: identificador do nome do campo, como a nomenclatura dos nomes dos campos foi padronizada. Um nome de campo é utilizado para identificar campos diferentes, como por exemplo, a IE, que pode ser do emitente ou do destinatário. A diferenciação dos campos é realizada considerando as tags de grupo.

**d) coluna Ele**:

<!-- p.69 -->

- A - indica que o campo é um atributo do Elemento anterior;
- E - indica que o campo é um Elemento;
- CE – indica que o campo é um Elemento que deriva de uma Escolha (Choice);
- G – indica que o campo é um Elemento de Grupo;
- CG - indica que o campo é um Elemento de Grupo que deriva de uma Escolha (Choice);
- ID – indica que o campo é um ID da XML 1.0;
- RC – indica que o campo é uma _key constraint_ (Restrição de Chave) para garantir a unicidade e presença do valor;

**e) coluna Pai**: indica qual é o elemento pai;

**f) coluna Tipo**:

- N – campo numérico;
- C – campo alfanumérico;
- D – campo data;

**g) Coluna Ocorrência**: _x-y_, onde _x_ indica a ocorrência mínima e _y_ a ocorrência máxima;

**h) Coluna tamanho**: _x-y(vz),_ onde _x_ indica o tamanho mínimo e _y_ o tamanho máximo; _v_, quando presente, indica a possibilidade de valores decimais (vírgula) e _z_ indica a quantidade máxima de casas decimais do campo; a existência de um único valor indica que o campo tem tamanho fixo, devendo-se informar a quantidade de caracteres exigidos, preenchendo-se os zeros não significativos; tamanhos separados por vírgula indicam que o campo deve ter um dos tamanhos fixos da lista.

<!-- REVISAR p.69: a fonte traz "dev e ter" no item h) (provável erro de texto); transcrito como "deve ter" -->
