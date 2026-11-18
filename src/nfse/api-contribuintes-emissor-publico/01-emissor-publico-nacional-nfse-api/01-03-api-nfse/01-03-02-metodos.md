# 1.3.2. Métodos

### a) POST – /nfse

Geração síncrona de Nota Fiscal de Serviço eletrônica. Através de um método POST a API recepciona uma DPS emitida pelo contribuinte e enviada pelo solicitante do serviço. A API realiza validações de negócio sobre a DPS recebida, rejeitando (se a validação não passar em ao menos uma das regras de negócio definidas para a DPS) ou gerando a NFS-e. O sistema retorna para o solicitante a mensagem de erro com o motivo da rejeição da validação ou o arquivo XML da NFS-e gerada com a DPS.

Um caso à parte ocorre quando a DPS enviada contém uma chave de acesso de uma NFS-e já gerada pelo sistema para ser substituída. A API verifica a existência desta NFS-e e, encontrada, o sistema realiza os mesmos procedimentos descritos anteriormente para validação da DPS e gera um Evento de Cancelamento de NFS-e por Substituição. Este evento é vinculado à NFS-e original, cancelando-a. É gerada a NFS-e substituta e retornado ao solicitante o arquivo XML da NFS-e gerada com a DPS enviada.

Para o processamento realizado sobre a DPS devem ser compreendidos:

- Esquemas e Leiaute DPS e NFS-e;
- Regras de negócio aplicadas sobre a DPS para gerar a NFS-e;

<!-- p.04 -->

Estes itens estão disponíveis no AnexoI-LeiautesRN_DPS_NFSe-SNNFSe deste manual.

São também necessários para o processamento realizado na DPS para a geração da NFS-e as integrações com:

- Parametrizações do convênio do município emissor da NFS-e;
- Parametrizações que o município emissor da NFS-e realiza previamente no Sistema Nacional NFS-e que são utilizadas nas validações sobre a DPS;
- Informações do cadastro nacional de contribuintes NFS-e;
- Informações das integrações com os cadastros CNPJ, CPF e Simples Nacional;

### b) GET – /nfse/{chaveAcesso}

Consulta NFS-e pela chave de acesso. Através de um método GET a API obtém uma NFS-e a partir de uma chave de acesso como parâmetro na consulta realizada pelo solicitante.
