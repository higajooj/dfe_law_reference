<!-- p.14 -->
# 6.3.7 Validações gerais do WS NfeRecepcaoEvento

| # | Regra de Validação | Aplic. | Msg | Descrição Erro |
|---|---|---|---|---|
| **P07-10** | Atributo “Id” não corresponde à concatenação dos campos do evento (“ID” + tpEvento + chNFe + nSeqEvento) (\*1) | Obrig. | 572 | Rejeição: Erro Atributo ID do evento não corresponde a concatenação dos campos (“ID” + tpEvento + chNFe + nSeqEvento) |
| **P08-10** | Código do órgão de recepção do Evento diverge do definido para este evento (\*1) | Obrig. | 250 | Rejeição: UF diverge da UF autorizadora |
| **P09-10** | Tipo do ambiente difere do ambiente do Web Service (\*1) | Obrig. | 252 | Rejeição: Ambiente informado diverge do Ambiente de recebimento |
| **P10-10** | Se informado CNPJ do Autor do Evento:<br>- CNPJ inválido (zeros, nulo ou DV inválido) (\*1) | Obrig. | 489 | Rejeição: CNPJ informado inválido (DV ou zeros) |
| **P11-10** | Se informado o CPF do Autor do evento:<br>- CPF inválido (zeros, nulo ou DV inválido) (\*1) | Obrig. | 490 | Rejeição: CPF informado inválido (DV ou zeros) |
| **P12-10** | Validação da Chave de Acesso (tag:chNFe):<br>- Dígito verificador inválido (\*1) | Obrig. | 236 | Rejeição: Chave de Acesso com dígito verificador inválido |
| **P12-14** | - Código UF inválido (\*1) | Obrig. | 614 | Rejeição: Chave de Acesso inválida (Código UF inválido) |
| **P12-18** | - Ano < 06 ou Ano maior que Ano corrente (\*1) | Obrig. | 615 | Rejeição: Chave de Acesso inválida (Ano < 06 ou Ano maior que Ano corrente) |
| **P12-22** | - Mês = 0 ou Mês > 12 (\*1) | Obrig. | 616 | Rejeição: Chave de Acesso inválida (Mês < 1 ou Mês > 12) |
| **P12-26** | - CNPJ/CPF zerado ou dígito inválido (\*1)<br>**Nota**: Considerar a Série para determinar se CNPJ/CPF na Chave de Acesso. CNPJ: Série=[0-909], CPF: Série<>[0-909] | Obrig. | 617 | Rejeição: Chave de Acesso inválida (CNPJ/CPF zerado ou dígito inválido) |
| **P12-30** | - Modelo diferente de 55 ou 65 (\*1) | Obrig. | 618 | Rejeição: Chave de Acesso inválida (modelo diferente de 55/65) |
| **P12-34** | - Número NF = 0 (\*1) | Obrig. | 619 | Rejeição: Chave de Acesso inválida (número NF = 0) |
| **P13-10** | Data do evento maior que a data de processamento (aceitar tolerância de até 5 minutos) (\*1) | Obrig. | 578 | Rejeição: A data do evento não pode ser maior que a data do processamento |
| **2P13-10** | Data do evento menor que a Data de Emissão da NF-e | Obrig. | 577 | Rejeição: A data do evento não pode ser menor que a data de emissão da NF-e |
| **2P13-14** | Data do evento menor que a Data de Autorização da NF-e não emitida em contingência (tpEmis=1)<br>**Nota**: Na comparação acima, aceitar uma tolerância de 5 minutos, devido ao sincronismo de horário entre o servidor da Empresa e o servidor da SEFAZ Autorizadora. | Obrig. | 579 | Rejeição: A data do evento não pode ser menor que a data de autorização da NF-e não emitida em contingência |
| | ***** Banco de Dados: Evento | | | |
| **3P15-10** | Acesso BD de Eventos (Chave: Chave de Acesso, tpEvento, nSeqEvento):<br>- Duplicidade do evento (tpEvento + chNFe + nSeqEvento) (\*1) | Obrig. | 573 | Rejeição: Duplicidade de Evento |
| | ***** Banco de Dados: NF-e | | | |
| **2P21-10** | Se tpAutor=2-Empresa Destinatário:<br>- CNPJ/CPF do Autor diverge do CNPJ/CPF do Destinatário da NF-e | Obrig. | 575 | Rejeição: O autor do evento diverge do destinatário da NF-e |

\*1 – Validações genéricas do registro de evento.
