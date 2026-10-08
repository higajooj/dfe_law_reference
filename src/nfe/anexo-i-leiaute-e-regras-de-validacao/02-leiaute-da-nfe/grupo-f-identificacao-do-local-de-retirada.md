# Grupo F. Identificação do Local de Retirada

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **80** | **retirada (F01)** | **G** | **A01** |  | **0-1** |  | **Identificação do Local de retirada<br>Informar somente se diferente do endereço do remetente.** |
| 81 | CNPJ (F02) | CE | F01 | N | 1-1 0 | ou 14 | CNPJ<br>Informar CNPJ ou CPF. Preencher os zeros não significativos. |
| 81a | CPF (F02a) | CE | F01 | N | 1-1 | 11 | CPF |
| 81b | xNome (F02b) | E | F01 | C | 0-1 | 2-60 | Razão Social ou Nome do Expedidor<br>(Criado na NT 2018.005) |
| 82 | xLgr (F03) | E | F01 | C | 1-1 | 2 - 60 | Logradouro |
| 83 | nro (F04) | E | F01 | C | 1-1 | 1 - 60 | Número |
| 84 | xCpl (F05) | E | F01 | C | 0-1 | 1 - 60 | Complemento |
| 85 | xBairro (F06) | E | F01 | C | 1-1 | 2 - 60 | Bairro |
| 86 | cMun (F07) | E | F01 | N | 1-1 | 7 | Código do município<br>Utilizar a Tabela do IBGE (Seção 8.2 do MOC – Visão Geral, Tabela de UF, Município e País). Informar ‘9999999 ‘para operações com o exterior. |
| 87 | xMun (F08) | E | F01 | C | 1-1 | 2 - 60 | Nome do município<br>Informar ‘EXTERIOR ‘para operações com o exterior. |
| 88 | UF (F09) | E | F01 | C | 1-1 | 2 | Sigla da UF<br>Informar ‘EX’ para operações com o exterior. <!-- p.16 --> |
| 88a | CEP (F10) | E | F01 | N | 0-1 | 8 | Código do CEP<br>Informar os zeros não significativos. (Criado na NT 2018.005) |
| 88b | cPais (F11) | E | F01 | N | 0-1 | 4 | Código do País<br>Utilizar a Tabela do BACEN (Seção 8.3 do MOC – Visão Geral,Tabela de UF, Município e País). (Criado na NT 2018.005) |
| 88c | xPais (F12) | E | F01 | C | 0-1 | 2 - 60 | Nome do País<br>(Criado na NT 2018.005) |
| 88d | fone (F13) | E | F01 | N | 0-1 | 6 - 14 | Telefone<br>Preencher com o Código DDD + número do telefone. Nas operações com exterior é permitido informar o código do país + código da localidade + número do telefone (v2.0) (Criado na NT 2018.005) |
| 88e | email (F14) | E | F01 | C | 0-1 | 1 - 60 | Endereço de e-mail do Expedidor<br>(Criado na NT 2018.005) |
| 88f | IE (F15) | E | F01 | N | 0-1 | 2 - 14 | Inscrição Estadual do Estabelecimento Expedidor<br>Informar somente os algarismos, sem os caracteres de formatação (ponto, barra, hífen, etc.). (Criado na NT 2018.005) |
