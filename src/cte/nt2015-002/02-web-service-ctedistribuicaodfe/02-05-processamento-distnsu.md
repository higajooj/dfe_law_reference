<!-- p.10 -->

# 2.5 Processamento da Requisição de Distribuição de Conjunto de DF-e a Partir do NSU Informado (distNSU)

O Web Service deverá gerar lotes com até 50 documentos ao interessado com informações dos documentos fiscais eletrônicos que tenham o número sequencial único (NSU) superior ao NSU informado.

Caso o NSU informado seja menor que o primeiro NSU disponível para distribuição, a aplicação do Ambiente Nacional deverá fornecer os documentos a partir do primeiro disponível para consulta.

A criação do lote de documentos deverá observar as seguintes regras:

- Ordem crescente de NSU
- O lote poderá conter qualquer tipo de documento válido e seu respectivo NSU
- Quantidade máxima de documentos no lote: 50 documentos

Documentos emitidos pela própria empresa não estarão disponíveis para consulta.

Importante ressaltar que o processo de recepção e sincronização não será realizado em ordem cronológica de emissão ou autorização de uso, uma vez que a geração do NSU dos documentos será organizada por ordem cronológica de recepção pelo Ambiente Nacional.

Não existe necessidade de o Ambiente Nacional estar sincronizado em tempo real com todos os documentos fiscais autorizados. Como a geração do NSU será organizada por ordem de inserção de documentos, a empresa ou pessoa conseguirá recuperar todos os documentos de seu interesse tão logo estes sejam recebidos pelo Ambiente Nacional do CT-e.

É conveniente manter um controle do primeiro NSU válido para consulta.

A resposta do WS do Ambiente Nacional poderá ser:

- Rejeição - com a devolução da mensagem com o motivo da falha informado no cStat;
- Nenhum documento localizado - não existe documentos fiscais para o CNPJ/CPF informado - cStat="137-Nenhum documento localizado";
- Documento localizado - com a devolução dos documentos fiscais encontrados - cStat="138-Documento localizado".

A empresa deverá aguardar um tempo mínimo de uma hora para efetuar uma nova solicitação de distribuição caso receba a indicação que não existem mais documentos a serem pesquisados na base de dados do Ambiente Nacional. Se o NSU informado (tag:ultNSU) for igual ao maior NSU do Ambiente Nacional (tag:maxNSU), então não existem mais documentos a serem pesquisados no momento.
