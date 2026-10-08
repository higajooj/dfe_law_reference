# Grupo G. Identificação do Local de Entrega

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **89** | **entrega (G01)** | **G** | **A01** |  | **0-1** |  | **Identificação do Local de entrega<br>Informar somente se diferente do endereço destinatário.** |
| 90 | CNPJ (G02) | CE | G01 | N | 1-1 0 | ou 14 | CNPJ<br>Informar CNPJ ou CPF. Preencher os zeros não significativos. (v2.0) |
| 90a | CPF (G02a) | CE | G01 | N | 1-1 | 11 | CPF |
| 90b | xNome (G02b) | E | G01 | C | 0-1 | 2-60 | Razão Social ou Nome do Recebedor<br>(Criado na NT 2018.005) |
| 91 | xLgr (G03) | E | G01 | C | 1-1 | 2 - 60 | Logradouro |
| 92 | nro (G04) | E | G01 | C | 1-1 | 1 - 60 | Número |
| 93 | xCpl (G05) | E | G01 | C | 0-1 | 1 - 60 | Complemento |
| 94 | xBairro (G06) | E | G01 | C | 1-1 | 2 - 60 | Bairro |
| 95 | cMun (G07) | E | G01 | N | 1-1 | 7 | Código do município<br>Utilizar a Tabela do IBGE (Seção 8.2 do MOC – Visão Geral,Tabela de UF, Município e País). Informar ‘9999999 ‘para operações com o exterior. |
| 96 | xMun (G08) | E | G01 | C | 1-1 | 2 - 60 | Nome do município<br>Informar ‘EXTERIOR ‘para operações com o exterior. |
| 97 | UF (G09) | E | G01 | C | 1-1 | 2 | Sigla da UF<br>Informar ‘EX’ para operações com o exterior. |
| 97a | CEP (G10) | E | G01 | N | 0-1 | 8 | Código do CEP<br>Informar os zeros não significativos. (Criado na NT 2018.005) |
| 97b | cPais (G11) | E | G01 | N | 0-1 | 4 | Código do País<br>Utilizar a Tabela do BACEN (Seção 8.3 do MOC – Visão Geral, Município e País). (Criado na NT 2018.005) |
| 97c | xPais (G12) | E | G01 | C | 0-1 | 2 - 60 | Nome do País<br>(Criado na NT 2018.005) |
| 97d | fone (G13) | E | G01 | N | 0-1 | 6 - 14 | Telefone<br>Preencher com o Código DDD + número do telefone. Nas operações com exterior é permitido informar o código do país + código da localidade + número do telefone (v2.0) (Criado na NT 2018.005) |
| 97e | email (G14) | E | G01 | C | 0-1 | 1 - 60 | Endereço de e-mail do Recebedor<br>(Criado na NT 2018.005) |
| 97f | IE (G15) | E | G01 | N | 0-1 | 2 - 14 | Inscrição Estadual do Estabelecimento Recebedor<br>Informar somente os algarismos, sem os caracteres de formatação (ponto, barra, hífen, etc.). (Criado na NT 2018.005) <!-- p.17 --> |
