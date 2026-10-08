<!-- p.18 -->
# 5. Alterações em Regras de Validação – Web Service de Registro de Eventos

No caso de registro de eventos realizado em NF-e emitida ao abrigo da NFF, o CNPJ autor deve ser o da Sefaz Virtual do Rio Grande do Sul (SVRS), e não se aplicam as necessidades de verificar se o CNPJ do autor está autorizado a emitir NF-e e a sua regularidade fiscal.

A Chave de Acesso de NF-e emitida ao abrigo da NFF (tpEmis=3) possui uma regra de formação onde a série não identifica se a Chave de Acesso contém um CPF ou CNPJ. É necessário identificar essa informação de uma forma alternativa.

| # | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|
| P12-26 | CNPJ/CPF zerado ou dígito inválido (*1)<br>Nota 01: Considerar a Série para determinar se CNPJ/CPF na Chave de Acesso.<br>CNPJ: Série=[0-909], CPF: Série<>[0-909];<br>Nota 02: Caso tpEmis = 3-NFF, considerar o 5º dígito do número da nota (nNF) para determinar se CNPJ/CPF na Chave de Acesso:<br>CNPJ: 5º dígito do nNF = “1” , CPF: 5º dígito do nNF = “2” (NT 2021.002). | | | | |
| P12-44 | CNPJ/CPF do Autor diverge do CNPJ/CPF da Chave de Acesso<br>Nota 01: Considerar a Série para determinar se CNPJ/CPF na Chave de Acesso.<br>CNPJ: Série=[0-909], CPF: Série<>[0-909]<br>Nota 02: Caso tpEmis = 3-NFF, considerar o 5º dígito do número da nota (nNF) para determinar se CNPJ/CPF na Chave de Acesso:<br>CNPJ: 5º dígito do nNF = “1” , CPF: 5º dígito do nNF = “2” (NT 2021.002)<br><br>Exceção: Para NFF (tpEmis = 3-NFF) CNPJ do certificado é somente o da SVRS (NT 2021.002) | Obrig. | 574 | Rej. | Rejeição: Autor do evento diverge do emissor da NF-e |
| **Banco de Dados: Emitente** | | | | | |
| 1P10-10 | Acesso ao Cadastro de Contribuintes (Chave: CNPJ do Autor):<br>Verificar se emitente não autorizado a emitir NF-e<br>Exceção: Não se aplica para NFF (tpEmis = 3-NFF) (NT 2021.002) | Obrig. | 203 | Rej. | Rejeição: Emissor não habilitado para emissão de NF-e |
| 1P10-20 | Verificar situação fiscal do emitente<br>Exceção: Não se aplica para NFF (tpEmis = 3-NFF) (NT 2021.002) | Obrig. | 240 | Rej. | Rejeição: Irregularidade fiscal do emitente |
| 2P12-14 | Se tpEvento=110111 (Cancelamento Normal): verificar se NF-e autorizada há mais de 1 dia (24 horas).<br>Nota: Considera a exceção de prazo definida em legislação estadual.<br>Exceção: Não se aplica para NFF (tpEmis = 3-NFF) (NT 2021.002) | Obrig. | 501 | Rej. | Rejeição: Prazo de cancelamento superior ao previsto na Legislação |

*1........Validações genéricas do Registro de Evento.
