<!-- p.7 -->
# Anexo I – Erros e Problemas Comuns

O erro e problema mais comum encontrado pelas UFs é o envio repetido (em *looping*) de requisições para os Web Services dos sistemas autorizadores de documentos fiscais eletrônicos. Normalmente isso ocorre devido algum erro na aplicação do emissor de documentos fiscais eletrônicos ou má utilização do usuário.

Após o envio de uma requisição para o sistema autorizador, essa requisição pode ser autorizada ou rejeitada. Caso ela seja rejeitada, o usuário do sistema deverá verificar o motivo da rejeição e corrigi-la, se assim desejar, ou caso a rejeição seja indevida (o sistema autorizador rejeitou de forma equivocada) deverá entrar em contato com a SEFAZ autorizadora.

Seguem alguns exemplos de “Consumo Indevido” dos Web Services existentes:

| Web Services | Aplicação com erro/problema |
|---|---|
| Envio de Lote de NF-e. | • Aplicação da empresa em “looping” enviando o mesmo Lote de NF-e rejeitado por erro de Schema, ou em “loop” com NF e rejeitada por um erro específico.<br>• Usuário do sistema fica enviando manualmente a mesma NF-e (efeito pica-pau). |
| Consulta Resultado do Lote. | • Aplicação da empresa efetua “looping” consultando os números de Recibo de Lote em sequência, mesmo para Número de Recibo que não foram gerados para sua empresa.<br>• Usuário do sistema fica enviando manualmente a mesma consulta (efeito pica-pau). |
| Evento da NF-e. | • Aplicação da empresa em “looping” enviando o mesmo Pedido de Cancelamento ou Evento, que sempre é rejeitado.<br>• Usuário do sistema fica enviando manualmente o mesmo cancelamento ou evento (efeito pica-pau). |
| Inutilização de Numeração. | • Aplicação da empresa em “looping” enviando o mesmo pedido de inutilização, que sempre é rejeitado.<br>• Usuário do sistema fica enviando manualmente o mesmo pedido de Inutilização (efeito pica-pau). |
| Consulta Situação da NF-e (Consulta Protocolo). | • Algumas empresas utilizam esta consulta para verificar a disponibilidade dos serviços da SEFAZ Autorizadora, consultando a mesma Chave de Acesso, em “looping”.<br>• Algumas empresas mantêm em “looping” uma consulta às Chaves de Acesso de NF-e destinadas para sua empresa. Em alguns casos, fica sendo consultada uma Chave de Acesso inexistente durante meses.<br>• Usuário do sistema fica enviando manualmente o mesmo pedido de consulta da NF-e (efeito pica-pau). |
| Consulta Status Serviço | • Aplicação em “loop” consumindo o Web Service em uma frequência maior do que a prevista. |
