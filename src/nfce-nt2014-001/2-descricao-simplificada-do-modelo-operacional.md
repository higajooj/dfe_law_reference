<!-- p.4 -->
# 2. Descrição Simplificada do Modelo Operacional

A empresa emissora de NFC-e deverá gerar um arquivo eletrônico em formato XML obedecendo leiaute específico. O *Web Service* de manutenção do CSC NFC-e oferecerá três funcionalidades distintas: consulta de códigos de segurança ativos, revogação de código de segurança ativo e requisição de novo código de segurança.

O arquivo eletrônico gerado pelo contribuinte será transmitido pela Internet, para o ambiente autorizador, que fará uma pré-validação do arquivo e devolverá uma mensagem eletrônica com o resultado da validação.

Cada contribuinte (CNPJ Raiz) poderá manter até dois CSC ativos simultaneamente. O *Web Service* fará o controle para garantir que esta regra seja respeitada. Na hipótese de haver dois CSC ativos, só será aceita a requisição de novo CSC após a revogação de um deles.

A funcionalidade de consulta de CSC ativos poderá ser usada a qualquer tempo sem nenhum tipo de restrição.
