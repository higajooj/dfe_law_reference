# Grupo C. Identificação do Emitente da Nota Fiscal eletrônica

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **30** | **emit (C01)** | **G** | **A01** |  | **1-1** |  | **Identificação do emitente da NF-e** |
| 31 | CNPJ (C02) | CE | C01 | N | 1-1 | 14 | CNPJ do emitente<br>Informar o CNPJ do emitente. Na emissão de NF-e avulsa pelo Fisco, as informações do remetente serão informadas neste grupo. O CNPJ ou CPF deverão ser informados com os zeros não significativos. |
| 31a | CPF (C02a) | CE | C01 | N | 1-1 | 11 | CPF do remetente |
| 32 | xNome (C03) | E | C01 | C | 1-1 | 2 - 60 | Razão Social ou Nome do emitente |
| 33 | xFant (C04) | E | C01 | C | 0-1 | 1 - 60 | Nome fantasia |
| **34** | **enderEmit (C05)** | **G** | **C01** |  | **1-1** |  | **Endereço do emitente** |
| 35 | xLgr (C06) | E | C05 | C | 1-1 | 2 - 60 | Logradouro |
| 36 | nro (C07) | E | C05 | C | 1-1 | 1 - 60 | Número <!-- p.13 --> |
| 37 | xCpl (C08) | E | C05 | C | 0-1 | 1 - 60 | Complemento |
| 38 | xBairro (C09) | E | C05 | C | 1-1 | 2 - 60 | Bairro |
| 39 | cMun (C10) | E | C05 | N | 1-1 | 7 | Código do município<br>Utilizar a Tabela do IBGE (Seção 8.2 do MOC – Visão Geral, Tabela de UF, Município e País). |
| 40 | xMun (C11) | E | C05 | C | 1-1 | 2 - 60 | Nome do município |
| 41 | UF (C12) | E | C05 | C | 1-1 | 2 | Sigla da UF |
| 42 | CEP (C13) | E | C05 | N | 1-1 | 8 | Código do CEP<br>Informar os zeros não significativos. (NT 2011/004) |
| 43 | cPais (C14) | E | C05 | N | 0-1 | 4 | Código do País<br>1058=Brasil |
| 44 | xPais (C15) | E | C05 | C | 0-1 | 1 - 60 | Nome do País<br>Brasil ou BRASIL |
| 45 | fone (C16) | E | C05 | N | 0-1 | 6 - 14 | Telefone<br>Preencher com o Código DDD + número do telefone. Nas operações com exterior é permitido informar o código do país + código da localidade + número do telefone (v2.0) |
| 46 | IE (C17) | E | C01 | C | 1-1 | 2 - 14 | Inscrição Estadual do Emitente<br>Informar somente os algarismos, sem os caracteres de formatação (ponto, barra, hífen, etc.). |
| 47 | IEST (C18) | E | C01 | N | 0-1 | 2 - 14 | IE do Substituto Tributário<br>IE do Substituto Tributário da UF de destino da mercadoria, quando houver a retenção do ICMS ST para a UF de destino. |
| **47.1** | **-x- (C18.1)** | **G** | **C01** |  | **0-1** |  | **Sequência XML<br>Grupo opcional.** |
| 48 | IM (C19) | E | C18.1 | C | 1-1 | 1 - 15 | Inscrição Municipal do Prestador de Serviço<br>Informado na emissão de NF-e conjugada, com itens de produtos sujeitos ao ICMS e itens de serviços sujeitos ao ISSQN. |
| 49 | CNAE (C20) | E | C18.1 | N | 0-1 | 7 | CNAE fiscal<br>Campo Opcional. Pode ser informado quando a Inscrição Municipal (id:C19) for informada. |
| 49a | CRT (C21) | E | C01 | N | 1-1 | 1 | Código de Regime Tributário<br>1=Simples Nacional; 2=Simples Nacional, excesso sublimite de receita bruta; 3=Regime Normal. (v2.0). |
