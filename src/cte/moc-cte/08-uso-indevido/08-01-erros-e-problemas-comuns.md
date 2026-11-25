# 8.1. Erros e problemas comuns

O erro e problema mais comum encontrado nos ambientes de autorização é o envio repetido (em looping) de requisições para os Web Services dos sistemas autorizadores de documentos fiscais eletrônicos. Normalmente isso ocorre devido algum erro na aplicação do emissor de documentos fiscais eletrônicos ou má utilização do usuário.

Após o envio de uma requisição para o sistema autorizador, essa requisição pode ser autorizada ou rejeitada. Caso ela seja rejeitada, o usuário do sistema deverá verificar o motivo da rejeição e corrigi-la, se assim desejar, ou caso a rejeição seja indevida (o sistema autorizador rejeitou de forma equivocada) deverá entrar em contato com a SEFAZ autorizadora.

Seguem alguns exemplos de “Consumo Indevido” que podem ocorrer nos Web Services:

| Web Service | Aplicação com erro/problema |
|---|---|
| Envio de CTe | Aplicação da empresa em “looping” enviando o mesmo CTe rejeitado por erro de Schema, ou em “loop” com CTe rejeitado por um erro específico.<br>Usuário do sistema fica enviando manualmente o mesmo CTe (efeito pica-pau). |
| Registro de Evento do CTe | Aplicação da empresa em “looping” enviando o mesmo Pedido Evento (exemplo: cancelamento), que sempre é rejeitado.<br>Usuário do sistema fica enviando manualmente o mesmo evento (efeito pica-pau). |
| Consulta Situação do CTe | Algumas empresas utilizam esta consulta para verificar a disponibilidade dos serviços da SEFAZ Autorizadora, consultando a mesma Chave de Acesso, em “looping”.<br>Usuário do sistema fica enviando manualmente o mesmo pedido de consulta do CTe durante meses (efeito pica-pau). |
| Consulta Status Serviço | Aplicação em “loop” consumindo o Web Service em uma frequência maior do que a prevista. |
