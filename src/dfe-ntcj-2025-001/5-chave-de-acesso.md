<!-- p.8 -->
# 5. Chave de Acesso do Documento Fiscal Eletrônico

A chave de Acesso de qualquer DFe possui uma estrutura composta pela concatenação de campos da identificação do DFe com 44 posições:

|  | Código da UF | AAMM da emissão | CNPJ do Emitente | Modelo (mod) | Série (serie) | Número | Forma de emissão | Código Numérico | DV |
|---|---|---|---|---|---|---|---|---|---|
| **Qtd Digitos** | 02 | 04 | 14 | 02 | 03 | 09 | 01 | 08 | 01 |

| Campo | Descrição |
|---|---|
| cUF | Código da UF do emitente do Documento Fiscal |
| AAMM | Ano e Mês de emissão do DFe |
| CNPJ | CNPJ do emitente (\* em alguns DFe nessas posições poderá existir CPF) |
| mod | Modelo do Documento Fiscal |
| serie | Série do Documento Fiscal |
| nNF | Número do Documento Fiscal |
| tpEmis | forma de emissão do DFe (diz respeito a emissão normal ou as contingências) |
| cXXX | Código Numérico que compõe a Chave de Acesso |
| cDV | Dígito Verificador da Chave de Acesso |

A expressão regular que verifica a chave de acesso passa a suportar letras nas 12 primeiras posições do CNPJ:

`[0-9]{6}[A-Z0-9]{12}[0-9]{26}`

**Observação:** Se algumas letras forem vedadas na composição do CNPJ Alfa, isto deve ser considerado também para a chave de acesso.

## Cálculo do DV da Chave de Acesso

O cálculo do DV da chave de acesso deverá aplicar a mesma lógica da validação do CNPJ Alfa, trocando todos os caracteres (44) que compõe a chave (números e letras) pelos números correspondentes da tabela ASCII subtraindo 48. Posteriormente à substituição, deverá ser aplicado o cálculo do Modulo 11 para a totalidade dos dígitos resultantes da chave de acesso.

## Regras de Validação

As regras de validação que verificam a lei de formação da chave de acesso possuem diversas ocorrências em cada um dos DFe, seja para verificar o DFe que está sendo autorizado, seja para relacionar um outro DFe como documento originário, realizar uma substituição e referenciação, registrar um evento e até no serviço de consulta chave de acesso.

Da mesma forma que as validações de CNPJ, não será necessário alterar nada na redação destas validações, no geral elas indicam que o CNPJ que compõe a chave de acesso deve ser válido, portanto, consideram-se as regras dispostas no item 2 desta nota técnica.

**Nota aos Autorizadores:** As rotinas de validação de Chave de acesso devem rejeitar chaves contendo CNPJ Alfanuméricos informados anteriores a data de implantação de cada ambiente (homologação e produção), mesmo que seja admitida a informação na validação de schema (já modificado). A rejeição aplicada nesse caso será a de falha no CNPJ informado na chave de acesso.
