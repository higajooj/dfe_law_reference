# 11.1 Detalhes técnicos da Contingência

Ao emitir um MDFe em contingência Off-line, algumas modificações deverão ser realizadas no arquivo XML, caracterizando esse tipo de emissão.

A primeira providência é selecionar a forma de emissão correta no campo tpEmis com a opção Contingência Off-line (2).

Na escolha de contingência Off-line do MDFe (tpEmis = 2) não é necessária a adoção de série específica ou a utilização de papel especial. Todavia, deve ser observado o prazo de envio para autorização do MDFe até 168 horas contadas a partir de sua emissão em contingência.

Outro ponto importante é a recomendação de que se avance um número na sequência da numeração quando da entrada em contingência a fim de evitar que o MDFe emitido em contingência seja posteriormente rejeitado por duplicidade.

Também cabe alertar que, superado o problema técnico, na transmissão do MDFe emitido em contingência, deve-se manter a mesma chave de acesso, inclusive com a manutenção do mesmo código numérico original (campo cMDF).

O DAMDFE do MDFe emitido em contingência deverá conter a informação impressa "EMISSÂO EM CONTINGÊNCIA", sendo que nesse documento obrigatoriamente conterá a chave de acesso dos documentos eletrônicos que o manifesto agrega ou informações pertinentes aos documentos em papel.

Além disso, o QR Code impresso no DAMDFE do MDFe emitido em contingência conterá o parâmetro sign assinando a chave de acesso com o certificado digital que efetuou a assinatura do MDFe. Isto possibilita que na consulta via QR Code, pelo usuário, a SEFAZ retorne a informação de que se trata de emissão em contingência, além de garantir a autoria do emitente do MDFe pelo certificado digital.
