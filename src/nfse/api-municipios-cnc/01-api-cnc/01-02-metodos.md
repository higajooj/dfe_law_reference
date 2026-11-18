# 1.2. Métodos

### a. POST – /CNC

Método da API que recepciona uma movimentação enviada pelo município. A API realiza validações de negócio sobre a movimentação recebida, rejeitando (se a validação não passar em ao menos uma das regras de negócio definidas para o CNC) ou incluindo/alterando as informações do(s) contribuinte(s).

O sistema retorna para o município a mensagem de erro com o motivo da rejeição da validação ou o arquivo com o NSU Movimento para cada movimentação efetivada.

### b. GET – /cad/CNC/{nsu}

Método que recupera o cadastro CNC NFSe pela chave de pesquisa. Caso a chave de pesquisa seja o NSU Cadastro os registros recuperados serão aqueles que tem as informações mais atualizadas.

### c. GET – /mov/CNC/{nsu}

Caso a chave de pesquisa seja o NSU Movimento serão recuperados os registros de atualizações a partir do NSU informado.

Para o processamento realizado sobre o CNC devem ser compreendidos:

- Leiaute Cadastro Contribuintes NFSe;
- Regras de negócio Cadastro CNC NFS-e;
- Leiaute CNC NFS-e;
- Leiaute Movimentação CNC NFSe;
- Leiaute de distribuição do CNC NFSe.

Estes itens estão disponíveis no `AnexoV-LeiautesRN_CNC-SNNFSe`, anexo a este manual.
