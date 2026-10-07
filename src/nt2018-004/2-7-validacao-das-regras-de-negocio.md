<!-- p.8 -->
# 2.7. Validação das Regras de Negócio

| # | Regra de Validação | Aplic. | Msg | Descrição Erro |
|---|---|---|---|---|
| P07-10 | Atributo “Id” não corresponde à concatenação dos campos do evento (“ID” + tpEvento + chNFe + nSeqEvento) (*1) | Obrig. | 572 | Rejeição: Erro Atributo ID do evento não corresponde a concatenação dos campos (“ID” + tpEvento + chNFe + nSeqEvento) |
| P08-10 | Código do órgão de recepção do Evento diverge do definido para este evento (*1) | Obrig. | 250 | Rejeição: UF diverge da UF autorizadora |
| P09-10 | Tipo do ambiente difere do ambiente do Web Service (*1) | Obrig. | 252 | Rejeição: Ambiente informado diverge do Ambiente de recebimento |
| P10-10 | Se informado CNPJ do Autor do Evento:<br>- CNPJ inválido (zeros, nulo ou DV inválido) (*1) | Obrig. | 489 | Rejeição: CNPJ informado inválido (DV ou zeros) |
| P11-10 | Se informado o CPF do Autor do evento:<br>- CPF inválido (zeros, nulo ou DV inválido) (*1) | Obrig. | 490 | Rejeição: CPF informado inválido (DV ou zeros) |
| P11-20 | Se informado o CPF do Autor do evento e Modelo da Chave de Acesso = 65:<br>- Evento não disponível para Autor tipo pessoa física (*1) | Obrig. | 408 | Rejeição: Evento não disponível para Autor pessoa física |
| P12-10 | Validação da Chave de Acesso (tag:chNFe):<br>- Dígito verificador inválido (*1) | Obrig. | 236 | Rejeição: Chave de Acesso com dígito verificador inválido |
| P12-14 | - Código UF inválido (*1) | Obrig. | 614 | Rejeição: Chave de Acesso inválida (Código UF inválido) |
| P12-18 | - Ano < 06 ou Ano maior que Ano corrente (*1) | Obrig. | 615 | Rejeição: Chave de Acesso inválida (Ano < 06 ou Ano maior que Ano corrente) |
| P12-22 | - Mês = 0 ou Mês > 12 (*1) | Obrig. | 616 | Rejeição: Chave de Acesso inválida (Mês < 1 ou Mês > 12) |
| P12-26 | - CNPJ/CPF zerado ou dígito inválido (*1)<br>**Nota**: Considerar a Série para determinar se CNPJ/CPF na Chave de Acesso. CNPJ: Série=[0-909], CPF: Série<>[0-909] | Obrig. | 617 | Rejeição: Chave de Acesso inválida (CNPJ/CPF zerado ou dígito inválido) |
| P12-30 | - Modelo diferente de 55 ou 65 (*1) | Obrig. | 618 | Rejeição: Chave de Acesso inválida (modelo diferente de 55/65) |
| P12-34 | - Número NF = 0 (*1) | Obrig. | 619 | Rejeição: Chave de Acesso inválida (número NF = 0) |
| P12-40 | - UF da Chave de Acesso diverge da UF Autorizadora | Obrig. | 249 | Rejeição: UF da Chave de Acesso diverge da UF autorizadora |
| P12-44 | - CNPJ/CPF do Autor diverge do CNPJ/CPF da Chave de Acesso<br>**Nota**: Considerar a Série para determinar se CNPJ/CPF na Chave de Acesso. CNPJ: Série=[0-909], CPF: Série<>[0-909] | Obrig. | 574 | Rejeição: Autor do evento diverge do emissor da NF-e |
| P12-48 | - Se tpEvento=110112 e<br>&nbsp;&nbsp;- tpEmis da Chave de Acesso diferente de 1-Normal;<br>&nbsp;&nbsp;- tpEmis da Chave de Acesso substituta (tag: chNFeRef) diferente de 9-Contingência; | Obrig. | 920 | Rejeição: Tipo de Emissão inválido no Cancelamento por Substituição |
| P13-10 | Data do evento maior que a data de processamento (aceitar tolerância de até 5 minutos) (*1) | Obrig. | 578 | Rejeição: A data do evento não pode ser maior que a data do processamento |
| P15-10 | Número de sequência do evento diferente de 1 | Obrig. | 594 | Rejeição: Número de sequência do evento informado é maior do que o permitido |
| P20-10 | - Se tpEvento=110112 e<br>UF do Autor (cOrgaoAutor) diverge da UF da Chave de Acesso | Obrig. | 455 | Rejeição: Órgão Autor do evento difere da UF da Chave de Acesso |
| P31-10 | Se tpEvento=110112, validar a Chave de Acesso substituta (tag:chNFeRef):<br><!-- p.9 -->- Dígito verificador inválido | Obrig. | 910 | Rejeição: Chave de Acesso NF-e Substituta inválida (Dígito) |
| P31-14 | - Código UF inválido | Obrig. | 910 | Rejeição: Chave de Acesso NF-e Substituta inválida (Código UF) |
| P31-18 | - Ano < 06 ou Ano maior que Ano corrente | Obrig. | 910 | Rejeição: Chave de Acesso NF-e Substituta inválida (Ano) |
| P31-22 | - Mês = 0 ou Mês > 12 | Obrig. | 910 | Rejeição: Chave de Acesso NF-e Substituta inválida (Mês) |
| P31-26 | - CNPJ/CPF zerado ou dígito inválido<br>**Nota**: Considerar a Série para determinar se CNPJ/CPF na Chave de Acesso. CNPJ: Série=[0-909], CPF: Série<>[0-909] | Obrig. | 910 | Rejeição: Chave de Acesso NF-e Substituta inválida (CNPJ/CPF) |
| P31-30 | - Modelo diferente de 55 ou 65 | Obrig. | 910 | Rejeição: Chave de Acesso NF-e Substituta inválida (Modelo) |
| P31-34 | - Número NF = 0 | Obrig. | 910 | Rejeição: Chave de Acesso NF-e Substituta inválida (Número) |
| P31-38 | - Chave de Acesso da NF-e Substituta igual a Chave de Acesso da NF-e a ser cancelada | Obrig. | 911 | Rejeição: Chave de Acesso NF-e Substituta incorreta (mesma Chave de Acesso) |
| P31-42 | - Chave de Acesso da NF-e Substituta com UF divergente da Chave de Acesso da NF-e a ser cancelada | Obrig. | 911 | Rejeição: Chave de Acesso NF-e Substituta incorreta (Código da UF) |
| P31-46 | - Chave de Acesso da NF-e Substituta com CNPJ/CPF divergente da Chave de Acesso da NF-e a ser cancelada<br>**Nota**: Considerar a Série para determinar se CNPJ/CPF na Chave de Acesso. CNPJ: Série=[0-909], CPF: Série<>[0-909] | Obrig. | 911 | Rejeição: Chave de Acesso NF-e Substituta incorreta (CNPJ/CPF) |
| P31-52 | - Chave de Acesso da NF-e Substituta com Modelo divergente da Chave de Acesso da NF-e a ser cancelada | Obrig. | 911 | Rejeição: Chave de Acesso NF-e Substituta incorreta (Modelo) |
| **Banco de Dados: Emitente** | | | | |
| 1P10-10 | Acesso ao Cadastro de Contribuintes (Chave: CNPJ do Autor):<br>- Verificar se Emitente não autorizado a emitir NF-e | Obrig. | 203 | Rejeição: Emissor não habilitado para emissão de NF-e |
| 1P10-20 | - Verificar situação fiscal do emitente | Obrig. | 240 | Rejeição: Irregularidade fiscal do emitente |
| **Banco de Dados: NF-e** | | | | |
| 2P12-10 | Acesso BD NFE (Chave: CNPJ/CPF da Chave de Acesso, Modelo, Série e Número):<br>- Chave Acesso inexistente para o tpEvento que exige a existência da NF-e (*1)<br>**Nota**: Caso exista no banco de dados uma NF-e com Chave de Acesso divergente, opcionalmente, deverá ser concatenado a Chave de Acesso existente na descrição do erro, caso o CNPJ/CPF do Autor do Evento seja o mesmo CNPJ/CPF da Chave de Acesso. | Obrig. | 494 | Rejeição: Chave de Acesso Inexistente (chNFe:999...999] |
| 2P12-14 | - Se tpEvento=110111 (Cancelamento Normal):<br>&nbsp;&nbsp;- Se modelo=55 (NF-e) e NF autorizada há mais de 24 horas;<br>&nbsp;&nbsp;- Se modelo=65 (NFC-e) e NF autorizada há mais de 30 minutos.<br>**Nota:** Considera a exceção de prazo definida em legislação estadual | Obrig. | 501 | Rejeição: Prazo de cancelamento superior ao previsto na Legislação |
| 2P12-18 | - Se tpEvento=110112 (Cancelamento por Substituição): verificar se NF-e autorizada há mais de 7 dias (168 horas).<br>**Nota**: Considera a exceção de prazo definida em legislação estadual | Obrig. | 501 | Rejeição: Prazo de cancelamento superior ao previsto na Legislação |
| 2P12-22 | - Verificar se NF-e está denegada ou cancelada | Obrig. | 580 | Rejeição: Evento exige uma NF-e autorizada |
| <!-- p.10 -->2P13-10 | - Data do evento menor que a Data de Emissão da NF-e (*1) | Obrig. | 577 | Rejeição: A data do evento não pode ser menor que a data de emissão da NF-e |
| 2P13-14 | - Data do evento menor que a Data de Autorização da NF-e não emitida em contingência (tpEmis=1)<br>**Nota**: Na comparação acima, aceitar uma tolerância de 5 minutos, devido ao sincronismo de horário entre o servidor da Empresa e o servidor da SEFAZ Autorizadora. | Obrig. | 579 | Rejeição: A data do evento não pode ser menor que a data de autorização da NF-e |
| 2P23-10 | - Número do Protocolo informado diverge do número do Protocolo da NF-e | Obrig. | 222 | Rejeição: Protocolo de Autorização de Uso difere do cadastrado |
| **Banco de Dados: Evento** | | | | |
| 3P15-10 | Acesso BD de Eventos (Chave: Chave de Acesso, tpEvento, nSeqEvento):<br>- Duplicidade do evento (tpEvento + chNFe + nSeqEvento) (*1) | Obrig. | 573 | Rejeição: Duplicidade de Evento |
| **Banco de Dados: Evento_2** | | | | |
| 4P15-14 | Se NF-e (Modelo 55): Acesso ao BD de Eventos (Chave: Chave de Acesso, tag:chNFe):<br>- Existe evento de Manifestação do Destinatário - tpEvento = “210220-Confirmação da Operação”<br>**Exceção**: A NF-e pode ter mais de um tipo de Manifestação do Destinatário, prevalecendo a última manifestação. Permitir o cancelamento se após o evento de “Confirmação” existir um dos eventos abaixo:<br>- “210220 – Desconhecimento da Operação”<br>- “210240 – Operação não Realizada”. | Obrig. | 221 | Rejeição: Confirmado o recebimento da NF-e pelo destinatário |
| 4P15-18 | - Existe evento de Conhecimento de Transporte ou MDF-e Autorizado, tpEvento:<br>- “610600 – CT-e Autorizado” (Cancelamento: 610601)<br>- “610610 – MDF-e Autorizado” (Cancelamento: 610611)<br>- “610614 - MDF-e Autorizado com CT-e” (Canc: 610615)<br>**Exceção**: Uma NF-e pode participar de vários CT-e / MDF-e. Permitir o cancelamento se todos os eventos deste tipo tiverem o correspondente evento de cancelamento. | Obrig. | 690 | Rejeição: Pedido de Cancelamento para NF-e com CT-e / MDF-e |
| 4P15-22 | - Existe evento de Registro de Passagem, tpEvento:<br>- “610500 – Registro de Passagem NF-e” (Canc: 610501);<br>- “610510 – Registro de Passagem MDF-e” (Canc: 610511)<br>- “610514 – Registro Passagem MDF-e com CT-e” (Canc: 610515)<br>~~- “610550 – Registro Passagem NF-e BRId”~~<br>- “610552 – Registro Passagem Automático MDF-e”<br>- “610554 – Registro Passagem Automático MDF-e com CT-e”<br>**Exceção**: Uma NF-e pode ter vários Registros de Passagem. Permitir o cancelamento se todos os eventos deste tipo tiverem o correspondente evento de cancelamento. | Obrig. | 219 | Rejeição: Circulação da NF-e verificada |
| 4P15-26 | - Existe evento da Suframa, tpEvento:<br>- “990900 – Vistoria SUFRAMA”;<br>- “9910910 – Internalização SUFRAMA”; | Obrig. | 304 | Rejeição: Pedido de Cancelamento para NF-e com evento da Suframa |
| <!-- p.11 -->**Banco de Dados: NF-e_2** | | | | |
| 5P31-10 | Se tpEvento=110112 (Cancelamento por Substituição): Acesso BD NFE (Chave: Chave de Acesso Substituta, tag:chNFeRef):<br>- Chave Acesso Substituta inexistente | Obrig. | 912 | Rejeição: NF-e Substituta inexistente |
| 5P31-14 | - Situação da NF-e = Denegada ou Cancelada | Obrig. | 913 | Rejeição: NF-e Substituta Denegada ou Cancelada |
| 5P31-20 | - Data de emissão da NF-e substituta (chNFeRef) maior que 2 horas da data de emissão da NF-e a ser cancelada (chNFe) | Obrig. | 914 | Rejeição: Data de emissão da NF-e Substituta maior que 2 horas da data de emissão da NF-e a ser cancelada |
| 5P31-24 | - Valor total da NF-e substituta (chNFeRef) difere do valor total da NF-e a ser cancelada (chNFe) | Obrig. | 915 | Rejeição: Valor total da NF-e Substituta difere do valor da NF-e a ser cancelada |
| 5P31-28 | - Valor total do ICMS da NF-e substituta (chNFeRef) difere do valor total do ICMS da NF-e a ser cancelada (chNFe) | Obrig. | 916 | Rejeição: Valor total do ICMS da NF-e Substituta difere do valor da NF-e a ser cancelada |
| 5P31-32 | - Se foi identificado o destinatário na NF-e original (CNPJ/CPF/ID Estrangeiro):<br>- Identificação do destinatário (CNPJ/CPF/ID Estrangeiro, IE) da NF-e substituta (chNFeRef) difere da identificação do destinatário da NF-e a ser cancelada (chNFe). | Obrig. | 917 | Rejeição: Identificação do destinatário da NF-e Substituta difere da identificação do destinatário da NF-e a ser cancelada. |
| 5P31-36 | - Quantidade de Itens da NF-e substituta (chNFeRef) difere da quantidade de itens da NF-e a ser cancelada (chNFe). | Obrig. | 918 | Rejeição: Quantidade de itens da NF-e Substituta difere da quantidade de itens da NF-e a ser cancelada. |
| 5P31-40 | - Verificar se o item da NF-e substituta (chNFeRef) difere do respectivo item da NF-e a ser cancelada (chNFe).<br>**Nota**: Verificar divergência para os campos cProd, cEAN, xProd, NCM, CFOP, uCom, qCom, vUnCom, vProd, indTot | Obrig. | 919 | Rejeição: Item da NF-e Substituta difere do mesmo item da NF-e a ser cancelada. |

> **Revogado/Descontinuado:** a linha “610550 – Registro Passagem NF-e BRId” (regra 4P15-22) está riscada no original.

Nota: (*1) Validações genéricas do Registro de Evento.
