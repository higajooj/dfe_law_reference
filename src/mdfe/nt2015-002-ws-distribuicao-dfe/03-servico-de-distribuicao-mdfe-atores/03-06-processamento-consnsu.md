# 3.6 Processamento da Requisição de Distribuição de DF-e vinculado ao NSU informado (consNSU)

Considerando que o Ambiente Nacional gera NSU sem lacunas, o processo de distribuição de conjunto de DF-e a partir do NSU informado (tag:`distNSU`) disponibiliza para o interessado uma sequência de numeração ordenada de forma ascendente. A identificação de alguma lacuna na base de dados do interessado indica que houve alguma falha no processo de distribuição dos documentos.

Neste caso, o interessado deve consultar pontualmente os NSU identificados como faltantes em sua base de dados através do método `mdfeDistDFeInteresse` do Web Service `MDFeDistribuicaoDFe` informando o NSU desejado no conteúdo da tag `consNSU` no XML de requisição.

A resposta do WS poderá ser:

- **Rejeição** - com a devolução da mensagem com o motivo da falha informado no `cStat`;
- **Nenhum documento localizado** – indicando que o Ambiente Nacional não gerou o NSU e o interessado deve desconsiderá-lo – `cStat`=”137-Nenhum documento localizado”;
- **Documento localizado** – com a devolução do documento fiscal encontrado – `cStat`=”138-Documento localizado”.
