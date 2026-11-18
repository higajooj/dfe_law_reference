<!-- p.06 -->

# 1 Recepção da NFS-e Via

A concessionária emite o documento completo, com a chave de acesso da NFS_e Via e demais informações requisitadas no leiaute, transmite o documento fiscal para o ambiente nacional. O ambiente fará a validação do documento transmitido e retornará com a mensagem de válido ou de rejeitado, informando o erro que ocasionou a rejeição.

1) Válido – NFS-e Via emitida;

2) Rejeitado – NFS-e Via não emitida: o documento transmitido foi rejeitado devido a algum Erro de Validação - Rejeição/Inconsistências e será exibido a descrição do campo que apresentou o erro:

   - Erros de schema xml;
   - Erros de validação do conteúdo;
   - Erros de regras de negócio;

**Observação:** Para erros que geram a rejeição do documento, o processo de validação se encerra ao identificar o primeiro erro. Para os erros que geram inconsistências, a inconsistência é registrada e a validação continua até o fim do arquivo.
