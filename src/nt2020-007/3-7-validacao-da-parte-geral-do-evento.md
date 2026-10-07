<!-- p.9 -->
# 03.7 Validação da parte geral do evento

| # | Regra de Validação | Aplic. | Msg | Descrição Erro |
|---|---|---|---|---|
| P07-10 | Atributo “Id” não corresponde à concatenação dos campos do evento (“ID” + tpEvento + chNFe + nSeqEvento) (\*1) | Obrig. | 572 | Rejeição: Erro Atributo ID do evento não corresponde a concatenação dos campos (“Id” + tpEvento + chNFe + nSeqEvento) |
| P08-10 | Código do órgão de recepção do Evento diverge do definido para este evento (\*1) | Obrig. | 250 | Rejeição: UF diverge da UF autorizadora |
| P09-10 | Tipo do ambiente difere do ambiente do Web Service (\*1) | Obrig. | 252 | Rejeição: Ambiente informado diverge do Ambiente de recebimento |
| P10-10 | Se informado CNPJ do Autor do Evento:<br>- CNPJ inválido (zeros, nulo ou DV inválido) (\*1) | Obrig. | 489 | Rejeição: CNPJ informado inválido (DV ou zeros) |
| P11-10 | Se informado o CPF do Autor do evento:<br>- CPF inválido (zeros, nulo ou DV inválido) (\*1) | Obrig. | 490 | Rejeição: CPF informado inválido (DV ou zeros) |
| P12-10 | Validação da Chave de Acesso da NF-e (tag: chNFe):<br>- Dígito verificador inválido (\*1) | Obrig. | 236 | Rejeição: Chave de Acesso com dígito verificador inválido |
| P12-14 | - Código UF inválido (\*1) | Obrig. | 614 | Rejeição: Chave de Acesso inválida (Código UF inválido) |
| P12-18 | - Ano < 06 ou Ano maior que Ano corrente (\*1) | Obrig. | 615 | Rejeição: Chave de Acesso inválida (Ano < 06 ou Ano maior que Ano corrente) |
| P12-22 | - Mês = 0 ou Mês > 12 (\*1) | Obrig. | 616 | Rejeição: Chave de Acesso inválida (Mês < 1 ou Mês > 12) |
| P12-26 | - CNPJ/CPF zerado ou dígito inválido (\*1)<br>Nota: Considerar a Série para determinar se CNPJ/CPF na Chave de Acesso.<br>CNPJ: Série=[0-909], CPF: Série<>[0-909] | Obrig. | 617 | Rejeição: Chave de Acesso inválida (CNPJ/CPF zerado ou dígito inválido) |
| ~~P12-30A~~ | ~~- Eventos somente da NF-e:~~<br>~~- Modelo diferente de 55~~ | ~~Obrig.~~ | ~~450~~ | ~~Rejeição: Modelo da NF-e diferente de 55~~ |
| J02f | Chave de Acesso inválida (modelo diferente de 55 e 65) (NT 2013.005) | Obrig. | 618 | Rejeição: Chave de Acesso inválida (modelo diferente de 55 e 65) |
| P12-34 | - Número NF = 0 (\*1) | Obrig. | 619 | Rejeição: Chave de Acesso inválida (número NF = 0) |
| P12-40 | Se tpAutor=1-Empresa Emitente:<br>- UF da Chave de Acesso diverge da UF Autorizadora | Obrig. | 249 | Rejeição: UF da Chave de Acesso diverge da UF autorizadora |
| P12-44 | - CNPJ/CPF do Autor diverge do CNPJ/CPF da Chave de Acesso (\*1)<br>Nota: Considerar a Série para determinar se CNPJ/CPF na Chave de Acesso.<br>CNPJ: Série=[0-909], CPF: Série<>[0-909] | Obrig. | 574 | Rejeição: Autor do evento diverge do emissor da NF-e |
| <!-- p.10 -->P13-10 | Data do evento maior que a data de processamento (aceitar tolerância de até 5 minutos) (\*2) | Obrig. | 578 | Rejeição: A data do evento não pode ser maior que a data do processamento |
| **\*\*\* Banco de Dados: Emitente** | | | | |
| ~~1P10-20~~ | ~~- Verificar situação fiscal do emitente~~ | ~~Obrig.~~ | ~~240~~ | ~~Rejeição: Irregularidade fiscal do emitente~~ |

> **Revogado/Descontinuado:** regras P12-30A e 1P10-20 riscadas no original.

(\*1) Essa regra somente deve ser aplicada se tpAutor=1  
(\*2) Validações genéricas do Registro de Evento.
