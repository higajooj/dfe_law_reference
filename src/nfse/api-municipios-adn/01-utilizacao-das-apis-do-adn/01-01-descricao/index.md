<!-- p.03 -->

# 1.1. Descrição

As APIs descritas neste manual permitem que o contribuinte consulte documentos fiscais de serviços em que figure como emitente, tomador ou intermediário. Além disso, está disponível uma API para a consulta de eventos vinculados a um documento específico, mediante o uso da chave de acesso.

As consultas da API de Distribuição dos Contribuintes agora podem ser realizadas utilizando um certificado cujo CNPJ tenha o mesmo CNPJ Raiz do contribuinte para o qual se deseja consultar. No caso da consulta por NSU, um novo parâmetro foi adicionado, para que possa ser possível informar um CNPJ de consulta diferente do CNPJ do certificado utilizado para estabelecer a conexão (é feita a validação do CNPJ Raiz nesse caso, entre o parâmetro informado e o CNPJ do certificado utilizado).
