<!-- p.14 -->
# 4.7 Validação das Regras de Negócio

| # | Regra de Validação | Aplic. | Msg | Descrição Erro |
|---|---|---|---|---|
| P07-10 | Atributo “Id” não corresponde à concatenação dos campos do evento (“ID” + tpEvento + chNFe + nSeqEvento) (*1) | Obrig. | 572 | Rejeição: Erro Atributo ID do evento não corresponde a concatenação dos campos (“ID” + tpEvento + chNFe + nSeqEvento) |
| P08-10 | Código do órgão de recepção do Evento diverge do definido para este evento (*1) | Obrig. | 250 | Rejeição: UF diverge da UF autorizadora |
| P09-10 | Tipo do ambiente difere do ambiente do Web Service (*1) | Obrig. | 252 | Rejeição: Ambiente informado diverge do Ambiente de recebimento |
| P10-10 | Se informado CNPJ do Autor do Evento:<br>- CNPJ inválido (zeros, nulo ou DV inválido) (*1) | Obrig. | 489 | Rejeição: CNPJ informado inválido (DV ou zeros) |
| P11-10 | Se informado o CPF do Autor do evento:<br>- CPF inválido (zeros, nulo ou DV inválido) (*1) | Obrig. | 490 | Rejeição: CPF informado inválido (DV ou zeros) |
| P12-10 | Validação da Chave de Acesso (tag:chNFe):<br>- Dígito verificador inválido (*1) | Obrig. | 236 | Rejeição: Chave de Acesso com dígito verificador inválido |
| P12-14 | - Código UF inválido (*1) | Obrig. | 614 | Rejeição: Chave de Acesso inválida (Código UF inválido) |
| P12-18 | - Ano < 06 ou Ano maior que Ano corrente (*1) | Obrig. | 615 | Rejeição: Chave de Acesso inválida (Ano < 06 ou Ano maior que Ano corrente) |
| P12-22 | - Mês = 0 ou Mês > 12 (*1) | Obrig. | 616 | Rejeição: Chave de Acesso inválida (Mês < 1 ou Mês > 12) |
| P12-26 | - CNPJ/CPF zerado ou dígito inválido (*1)<br>**Nota**: Considerar a Série para determinar se CNPJ/CPF na Chave de Acesso. CNPJ: Série=[0909], CPF: Série<>[0-909] | Obrig. | 617 | Rejeição: Chave de Acesso inválida (CNPJ/CPF zerado ou dígito inválido) |
| P12-30 | - Modelo diferente de 55 | Obrig. | 450 | Rejeição: Modelo da NF-e diferente de 55 |
| P12-34 | - Número NF = 0 (*1) | Obrig. | 619 | Rejeição: Chave de Acesso inválida (número NF = 0) |
| P12-40 | - UF da Chave de Acesso diverge da UF Autorizadora | Obrig. | 249 | Rejeição: UF da Chave de Acesso diverge da UF autorizadora |
| P12-44 | - CNPJ/CPF do Autor diverge do CNPJ/CPF da Chave de Acesso<br>**Nota**: Considerar a Série para determinar se CNPJ/CPF na Chave de Acesso. CNPJ: Série=[0909], CPF: Série<>[0-909] | Obrig. | 574 | Rejeição: Autor do evento diverge do emissor da NF-e |
| P13-10 | Data do evento maior que a data de processamento (aceitar tolerância de até 5 minutos) (*1) | Obrig. | 578 | Rejeição: A data do evento não pode ser maior que a data do processamento |
| P20-10 | UF do Autor (cOrgaoAutor) diverge da UF da Chave de Acesso | Obrig. | 455 | Rejeição: Órgão Autor do evento difere da UF da Chave de Acesso |
| | **\*\*\* Banco de Dados: Emitente** | | | |
| 1P10-10 | Acesso ao Cadastro de Contribuintes (Chave: CNPJ do Autor):<br>- Verificar se Emitente não autorizado a emitir NF-e | Obrig. | 203 | Rejeição: Emissor não habilitado para emissão de NF-e |
| 1P10-20 | - Verificar situação fiscal do emitente | Obrig. | 240 | Rejeição: Irregularidade fiscal do emitente |
| | **\*\*\* Banco de Dados: NF-e** | | | |
| 2P12-10 | Acesso BD NFE (Chave: CNPJ/CPF da Chave de Acesso, Modelo, Série e Número):<br>- Chave Acesso inexistente para o tpEvento que exige a existência da NF-e (*1)<br>**Nota**: Caso exista no banco de dados uma NF-e com Chave de Acesso divergente, opcionalmente, deverá ser concatenado a Chave de Acesso existente na descrição do erro, caso o CNPJ/CPF do Autor do <!-- p.15 -->Evento seja o mesmo CNPJ/CPF da Chave de Acesso. | Obrig. | 494 | Rejeição: Chave de Acesso Inexistente [chNFe:999...999] |
| 2P12-22 | - Verificar se NF-e está denegada ou cancelada | Obrig. | 580 | Rejeição: Evento exige uma NF-e autorizada |
| 2P13-10 | - Data do evento menor que a Data de Emissão da NF-e (*1) | Obrig. | 577 | Rejeição: A data do evento não pode ser menor que a data de emissão da NF-e |
| 2P13-14 | - Data do evento menor que a Data de Autorização da NF-e não emitida em contingência (tpEmis=1)<br>**Nota**: Na comparação acima, aceitar uma tolerância de 5 minutos, devido ao sincronismo de horário entre o servidor da Empresa e o servidor da SEFAZ Autorizadora. | Obrig. | 579 | Rejeição: A data do evento não pode ser menor que a data de autorização da NF-e |
| | **\*\*\* Banco de Dados: Evento** | | | |
| 3P15-10 | Acesso BD de Eventos (Chave: Chave de Acesso, tpEvento, nSeqEvento):<br>- Duplicidade do evento (tpEvento + chNFe + nSeqEvento) (*1) | Obrig. | 573 | Rejeição: Duplicidade de Evento |
| | **\*\*\* Banco de Dados: Evento 2** | | | |
| 4P15-10 | Acesso BD de Eventos (Chave: Chave de Acesso, tpEvento=110192, nSeqEvento):<br>- Evento inexistente | Obrig. | 459 | Rejeição: Cancelamento de Evento inexistente |
| 4P22-10 | - Número do Protocolo não encontrado | Obrig. | 460 | Rejeição: Protocolo do Evento difere do cadastrado |

**Nota**: (*1) Validações genéricas do Registro de Evento.
