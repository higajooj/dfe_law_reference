# 8.1 Erros e problemas comuns

O erro e problema mais comum encontrado nos ambientes de autorização é o envio repetido (em looping) de requisições para os Web Services dos sistemas autorizadores de documentos fiscais eletrônicos. Normalmente isso ocorre devido algum erro na aplicação do emissor de documentos fiscais eletrônicos ou má utilização do usuário.

Após o envio de uma requisição para o sistema autorizador, essa requisição pode ser autorizada ou rejeitada. Caso ela seja rejeitada, o usuário do sistema deverá verificar o motivo da rejeição e corrigi-la, se assim desejar, ou caso a rejeição seja indevida (o sistema autorizador rejeitou de forma equivocada) deverá entrar em contato com a SEFAZ autorizadora.

Seguem alguns exemplos de "Consumo Indevido" que podem ocorrer nos Web Services:

| Web Service | Aplicação com erro/problema |
|---|---|
| Envio de MDFe | Aplicação da empresa em "looping" enviando o mesmo MDFe rejeitado por erro de Schema, ou em "loop" com MDFe rejeitado por um erro específico. Usuário do sistema fica enviando manualmente o mesmo MDFe (efeito pica-pau). |
| Consulta Resultado do Processamento assíncrono | Aplicação da empresa efetua "looping" consultando os números de Recibo em sequência, mesmo para Número de Recibo que não foram gerados para sua empresa. Usuário do sistema fica enviando manualmente a mesma consulta (efeito pica-pau). |
| Registro de Evento do MDFe | Aplicação da empresa em "looping" enviando o mesmo Pedido Evento (exemplo: cancelamento), que sempre é rejeitado. Usuário do sistema fica enviando manualmente o mesmo evento (efeito pica-pau). |
| Consulta Situação do MDFe | Algumas empresas utilizam esta consulta para verificar a disponibilidade dos serviços da SEFAZ Autorizadora, consultando a mesma Chave de Acesso, em "looping". Usuário do sistema fica enviando manualmente o mesmo pedido de consulta do MDFe durante meses (efeito pica-pau). |
| Consulta Status Serviço | Aplicação em "loop" consumindo o Web Service em uma frequência maior do que a prevista. |
