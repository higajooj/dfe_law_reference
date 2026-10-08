# Grupo E. Identificação do Destinatário da Nota Fiscal eletrônica

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **62** | **dest (E01)** | **G** | **A01** |  | **0-1** |  | **Identificação do Destinatário da NF-e<br>Grupo Obrig.atório para a NF-e (modelo 55).** |
| 63 | CNPJ (E02) | CE | E01 | N | 1-1 | 14 | CNPJ do destinatário<br>Informar o CNPJ ou o CPF do destinatário, preenchendo os zeros não significativos. No caso de operação com o exterior, ou para comprador estrangeiro informar a tag "idEstrangeiro”. |
| 64 | CPF (E03) | CE | E01 | N | 1-1 | 11 | CPF do destinatário |
| 64a | (E03a) | CE | E01 | C | 1-1 | 0,5,20 | Identificação do destinatário no caso de comprador estrangeiro<br>Informar esta tag no caso de operação com o exterior, ou para comprador estrangeiro. Informar o número do passaporte ou outro documento legal para identificar pessoa estrangeira (campo aceita valor nulo). Observação: Campo aceita algarismos, letras (maiúsculas e minúsculas) e os caracteres do conjunto que segue: [:.+-/()] |
| 65 | xNome (E04) | E | E01 | C | 0-1 | 2 - 60 | Razão Social ou nome do destinatário<br>Tag Obrigatória para a NF-e (modelo 55) e opcional para a NFC-e. |
| **66** | **enderDest (E05)** | **G** | **E01** |  | **0 -1** |  | **Endereço do Destinatário da NF-e<br>Grupo Obrig.atório para a NF-e (modelo 55).** |
| 67 | xLgr (E06) | E | E05 | C | 1-1 | 2 - 60 | Logradouro |
| 68 | nro (E07) | E | E05 | C | 1-1 | 1 - 60 | Número |
| 69 | xCpl (E08) | E | E05 | C | 0-1 | 1 - 60 | Complemento |
| 70 | xBairro (E09) | E | E05 | C | 1-1 | 2 - 60 | Bairro |
| 71 | cMun (E10) | E | E05 | N | 1-1 | 7 | Código do município<br>Utilizar a Tabela do IBGE (Seção 8.2 do MOC – Visão Geral, - Tabela de UF, Município e País). |
| 72 | xMun (E11) | E | E05 | C | 1-1 | 2 - 60 | Nome do município<br>Informar ‘EXTERIOR ‘para operações com o exterior. |
| 73 | UF (E12) | E | E05 | C | 1-1 | 2 | Sigla da UF<br>Informar ‘EX’ para operações com o exterior. |
| 74 | CEP (E13) | E | E05 | N | 0-1 | 8 | Código do CEP<br>Informar os zeros não significativos. |
| 75 | cPais (E14) | E | E05 | N | 0-1 | 2 - 4 | Código do País<br>Utilizar a Tabela do BACEN (Seção 8.3 do MOC – Visão Geral, Tabela de UF, Município e País). |
| 76 | xPais (E15) | E | E05 | C | 0-1 | 2 - 60 | Nome do País |
| 77 | fone (E16) | E | E05 | N | 0-1 | 6 - 14 | Telefone<br>Preencher com o Código DDD + número do telefone. Nas operações com exterior é permitido informar o código do país + código da localidade + número do telefone (v2.0) |
| 77a | indIEDest (E16a) | E | E01 | N | 1-1 | 1 | Indicador da IE do Destinatário<br>1=Contribuinte ICMS (informar a IE do destinatário); 2=Contribuinte isento de Inscrição no cadastro de Contribuintes 9=Não Contribuinte, que pode ou não possuir Inscrição Estadual no Cadastro de Contribuintes do ICMS. Nota 1: No caso de NFC-e informar indIEDest=9 e não informar a tag IE do destinatário; Nota 2: No caso de operação com o Exterior informar indIEDest=9 e não informar a tag IE do destinatário; Nota 3: No caso de Contribuinte Isento de Inscrição (indIEDest=2), não informar a tag IE do destinatário. <!-- p.15 --> |
| 78 | IE (E17) | E | E01 | N | 0-1 | 2 - 14 | Inscrição Estadual do Destinatário<br>Campo opcional. Informar somente os algarismos, sem os caracteres de formatação (ponto, barra, hífen, etc.). |
| 79 | ISUF (E18) | E | E01 | N | 0-1 | 8 - 9 | Inscrição na SUFRAMA<br>Obrig.atório, nas operações que se beneficiam de incentivos fiscais existentes nas áreas sob controle da SUFRAMA. A omissão desta informação impede o processamento da operação pelo Sistema de Mercadoria Nacional da SUFRAMA e a liberação da Declaração de Ingresso, prejudicando a comprovação do ingresso / internamento da mercadoria nestas áreas. (v2.0) |
| 79.1 | IM (E18a) | E | E01 | C | 0-1 | 1 - 15 | Inscrição Municipal do Tomador do Serviço<br>Campo opcional, pode ser informado na NF-e conjugada, com itens de produtos sujeitos ao ICMS e itens de serviços sujeitos ao ISSQN. |
| 79a | email (E19) | E | E01 | C | 0-1 | 1 - 60 | email<br>Campo pode ser utilizado para informar o e-mail de recepção da NF-e indicada pelo destinatário (v2.0) |
