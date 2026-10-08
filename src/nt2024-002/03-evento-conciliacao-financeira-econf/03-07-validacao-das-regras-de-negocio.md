<!-- p.10 -->
# 3.7. Validação das Regras de Negócio

| # | Regra de Validação | Aplic. | Msg | Descrição Erro |
|---|---|---|---|---|
| P07-10 | Atributo “Id” não corresponde à concatenação dos campos do evento (“ID” + tpEvento + chNFe + nSeqEvento) (*1) | Obrig. | 572 | Rejeição: Erro Atributo ID do evento não corresponde a concatenação dos campos (“Id” + tpEvento + chNFe + nSeqEvento) |
| P08-10 | Código do órgão de recepção do Evento diverge do definido para este evento (*1) | Obrig. | 250 | Rejeição: UF diverge da UF autorizadora |
| P09-10 | Tipo do ambiente difere do ambiente do Web Service (*1) | Obrig. | 252 | Rejeição: Ambiente informado diverge do Ambiente de recebimento |
| P10-10 | Se informado CNPJ do Autor do Evento:<br>- CNPJ inválido (zeros, nulo ou DV inválido) (*1) | Obrig. | 489 | Rejeição: CNPJ informado inválido (DV ou zeros) |
| P11-10 | Se informado o CPF do Autor do evento:<br>- CPF inválido (zeros, nulo ou DV inválido) (*1) | Obrig. | 490 | Rejeição: CPF informado inválido (DV ou zeros) |
| P12-10 | Validação da Chave de Acesso da NF-e (tag: chNFe):<br>- Dígito verificador inválido (*1) | Obrig. | 236 | Rejeição: Chave de Acesso com dígito verificador inválido |
| P12-14 | - Código UF inválido (*1) | Obrig. | 614 | Rejeição: Chave de Acesso inválida (Código UF inválido) |
| P12-18 | - Ano < 06 ou Ano maior que Ano corrente (*1) | Obrig. | 615 | Rejeição: Chave de Acesso inválida (Ano < 06 ou Ano maior que Ano corrente) |
| P12-22 | - Mês = 0 ou Mês > 12 (*1) | Obrig. | 616 | Rejeição: Chave de Acesso inválida (Mês < 1 ou Mês > 12) |
| P12-26 | - CNPJ/CPF zerado ou dígito inválido (*1)<br>Nota: Considerar a Série para determinar se CNPJ/CPF na Chave de Acesso. CNPJ: Série=[0-909], CPF: Série<>[0-909] | Obrig. | 617 | Rejeição: Chave de Acesso inválida (CNPJ/CPF zerado ou dígito inválido) |
| P12-28 | - Modelo diverge de 55/65 | Obrig. | 618 | Rejeição: Chave de Acesso inválida (Modelo diferente de 55/65) |
| P12-34 | - Número NF = 0 (*1) | Obrig. | 619 | Rejeição: Chave de Acesso inválida (número NF = 0) |
| P12-40 | - UF da Chave de Acesso diverge da UF Autorizadora | Obrig. | 249 | Rejeição: UF da Chave de Acesso diverge da UF autorizadora |
| P12-44 | - CNPJ/CPF do Autor diverge do CNPJ/CPF da Chave de Acesso<br>Nota: Considerar a Série para determinar se CNPJ/CPF na Chave de Acesso. CNPJ: Série=[0-909], CPF: Série<>[0-909] | Obrig. | 574 | Rejeição: Autor do evento diverge do emissor da NF-e |
| P13-10 | Data do evento maior que a data de processamento (aceitar tolerância de até 5 minutos) (*1) | Obrig. | 578 | Rejeição: A data do evento não pode ser maior que a data do processamento |
| P26-10 | Data de Pagamento maior que a data de processamento | Obrig. | 657 | Rejeição: Data de Pagamento inválida [nOcor:999] |
| <!-- p.11 -->P28-10 | Se informado CNPJ do estabelecimento onde o pagamento foi processado/transacionado/recebido:<br>- CNPJ inválido (zeros, nulo ou DV inválido) | Obrig. | 961 | Rejeição: CNPJ transacional do pagamento inválido [nOcor:999) |
| P30-10 | Se informado CNPJ da instituição financeira de pagamento, adquirente ou subadquirente:<br>- CNPJ inválido (zeros, nulo ou DV inválido) | Obrig. | 437 | Rejeição: CNPJ da instituição de pagamento inválido) [nOcor:999) |
| P34-10 | Se informado CNPJ do beneficiário de pagamento:<br>- CNPJ inválido (zeros, nulo ou DV inválido) | Obrig. | 208 | Rejeição: CNPJ informado inválido (DV ou zeros) [nOcor:999) |
| | **Banco de Dados: Emitente** | | | |
| 1P10-20 | Acesso ao Cadastro de Contribuintes (Chave: CNPJ/CPF do Autor do Evento):<br>- Verificar situação fiscal do emitente | Obrig. | 240 | Rejeição: Irregularidade fiscal do emitente |
| | **Banco de Dados: NF-e** | | | |
| 2P12-10 | Acesso BD NFE (Chave: Chave de Acesso):<br>- Chave Acesso inexistente para o tpEvento que exige a existência da NF-e (*1) | Obrig. | 494 | Rejeição: Chave de Acesso Inexistente |
| 2P12-22 | - Verificar se NF-e está denegada ou cancelada | Obrig. | 580 | Rejeição: Evento exige uma NF-e autorizada |
| 2P13-10 | - Data do evento menor que a Data de Emissão da NF-e (*1) | Obrig. | 577 | Rejeição: A data do evento não pode ser menor que a data de emissão da NF-e |
| 2P13-14 | - Data do evento menor que a Data de Autorização da NF-e não emitida em contingência (tpEmis=1)<br>**Nota**: Tolerância de 5 minutos, devido ao sincronismo de horário entre o servidor da Empresa e o servidor da SEFAZ Autorizadora. | Obrig. | 579 | Rejeição: A data do evento não pode ser menor que a data de autorização da NF-e |
| | **Banco de Dados: Evento** | | | |
| 3P15-10 | Acesso BD de Eventos (Chave: Chave de Acesso, tpEvento, nSeqEvento):<br>- Evento já existente (*1) | Obrig. | 573 | Rejeição: Duplicidade de Evento |

(*1) Validações genéricas do Registro de Evento.
