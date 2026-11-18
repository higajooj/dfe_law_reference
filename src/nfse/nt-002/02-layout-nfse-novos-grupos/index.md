# 2. Layout NFS-e: Novos Grupos no Contexto da EC nº 132/2023

Para melhor compreensão das informações disponibilizadas nos layouts dispostos neste tópico, segue um breve glossário.

- **CAMINHO NO XML**: O XML (Extensible Markup Language) é uma linguagem de marcação utilizada para estruturar e armazenar dados em um formato legível por máquina que obedece aos layouts dispostos neste documento e que possui regras a serem seguidas, em uma sequência pré-definida e ordenada. Esta coluna informa o path, ou caminho, ordenado em que as informações devem ser dispostas na formatação do XML.

- **CAMPO**: Nome do campo/informação que deve constar no XML.

- **ELE**: Elemento ou valor do campo que deve ser informado. Pode ser dos tipos:
  - ID: Campo identificador do documento;
  - E: Element (Elemento), atributo deve ser informado no campo;
  - G: Group (Grupo), tag que identifica um grupo de informações que será formado por elements (E), choice elements (CE) ou outros grupos;
  - CG: Choice Group (Grupo de Escolha), tag que identifica um grupo que deverá ser informado a depender da escolha do emitente;
  - CE: Choice Element (Elemento de Escolha), elemento de uma lista pré-determinada, a ser preenchida pelo emitente.

<!-- p.05 -->

- **TIPO**: Tipo do campo que deve ser informado para a tag específica. Pode ser dos tipos:
  - N: Numérico;
  - C: Caractere;
  - D: Data.

  Nas tags G ou CG (Group ou Choice Group), como são apenas informações de agrupamento de campos, não há um tipo relacionado.

- **OCOR.**: Quantidade de ocorrências possíveis para o campo/tag. Por exemplo:
  - 0-1: A informação não é obrigatória e, caso seja informada, só será possível de ser informada uma única vez no documento;
  - 1-1: Informação obrigatória e que deverá ser informada apenas uma vez no documento;
  - 1-60: Informação obrigatória que deverá ser informada até, no máximo, 60 vezes no documento.

- **TAM.**: Tamanho da informação para o campo/tag. Por exemplo:
  - 14: Campo de tamanho fixo com 14 caracteres ou números;
  - 1-150: Campo de tamanho variável, podendo possuir de 1 a 150 caracteres ou números;
  - 1-3V2: Campo de tamanho variável, podendo possuir de 1 a 3 números mais duas casas decimais.

  Nas tags G ou CG (Group ou Choice Group), como são apenas informações de agrupamento de campos, não há um tamanho relacionado.

- **DESCRIÇÃO**: Descrição sucinta do que representa cada campo e como deve ser preenchido.
