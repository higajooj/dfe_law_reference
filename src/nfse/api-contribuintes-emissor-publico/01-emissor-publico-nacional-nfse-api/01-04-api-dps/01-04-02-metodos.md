# 1.4.2. Métodos

O processamento se dá em dois métodos distintos com objetivos separados, Get e Head. Realiza uma consulta ao banco de dados da Sefin Nacional NFS-e com os parâmetros da DPS informados, retornando a chave de acesso da NFS-e correspondente à DPS consultada ou somente a informação de que a NFS-e referente à DPS consultada foi gerada, sem informar a chave de acesso.

### a) GET – /dps/{id}

Recupera a chave de acesso da NFS-e a partir do identificador do DPS. O solicitante informa a identificação da DPS e a API retorna a chave de acesso da NFS-e correspondente. Somente podem ser consultados identificadores de DPS emitidos através Sefin Nacional NFS-e e desde que a identificação do certificado digital da conexão solicitante corresponda a um dos atores informados na DPS da NFS-e (Prestador, Tomador ou Intermediário). Caso contrário a solicitação será negada.

### b) HEAD – /dps/{id}

O método Head é uma consulta para informar se uma NFS-e foi gerada ou não a partir do identificador da DPS. Este método atende a qualquer usuário desde que realize a consulta com um certificado digital válido.
