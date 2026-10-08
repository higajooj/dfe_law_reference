# Grupo YB. Informações do Intermediador da Transação

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **398.26** | **infIntermed (YB01)** | **G** | **A01** |  | **0-1** |  | **Grupo de Informações do Intermediador da Transação<br>Obrigatório o preenchimento do Grupo de Informações do Intermediador da Transação nos casos de “operação não presencial pela internet em site de terceiros (intermediadores) (Incluído na NT2020.006)** |
| 398.27 | CNPJ (YB02) | E | YB01 | N | 1-1 | 14 | CNPJ do Intermediador da Transação (agenciador, plataforma de delivery, marketplace e similar) de serviços e de negócios.<br>Informar o CNPJ do Intermediador da Transação (agenciador, plataforma de delivery, marketplace e similar) de serviços e de negócios. |
| 398.28 | idCadIntTran (YB03) | R | YB01 | C | 1-1 | 60 | Identificador cadastrado no intermediador<br>Nome do usuário ou identificação do perfil do vendedor no site do intermediador (agenciador, plataforma de delivery, marketplace e similar) de serviços e de negócios. |
