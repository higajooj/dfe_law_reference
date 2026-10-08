<!-- p.9 -->
# 3.3. Grupo YB. Informações do Intermediador da Transação

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **398.26** | **YB01** | **infIntermed** | **Grupo de Informações do Intermediador da Transação** | **G** | **A01** | | **0-1** | | **Obrigatório o preenchimento do Grupo de Informações do Intermediador da Transação nos casos de “operação não presencial pela internet em site de terceiros (intermediadores)** |
| 398.27 | YB02 | CNPJ | CNPJ do Intermediador da Transação (agenciador, plataforma de delivery, marketplace e similar) de serviços e de negócios. | E | YB01 | N | 1-1 | 14 | Informar o CNPJ do Intermediador da Transação (agenciador, plataforma de delivery, marketplace e similar) de serviços e de negócios. |
| 398.28 | YB03 | idCadIntTran | Identificador cadastrado no intermediador | E | YB01 | C | 1-1 | 2-60 | Nome do usuário ou identificação do perfil do vendedor no site do intermediador (agenciador, plataforma de delivery, marketplace e similar) de serviços e de negócios. |
