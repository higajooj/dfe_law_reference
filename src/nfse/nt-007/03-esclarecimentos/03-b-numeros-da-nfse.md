<!-- p.09 -->

# 3.b Números da NFS-e

Na plataforma NFS-e, quando da emissão pelos emissores públicos nacionais, a numeração das notas fiscais (número da NFS-e, campo “nNFSe”) não é definida pelo contribuinte, sendo atribuída exclusivamente pela Sefin Nacional quando uma DPS é recepcionada e processada para conversão em NFS-e.

Esse modelo centralizado de geração de numeração, embora padronizado e alinhado a diretrizes nacionais, pode resultar em situações nas quais determinados números sequenciais são reservados pela plataforma, mas não culminam na efetiva emissão e persistência da NFS-e no Ambiente de Dados Nacional (ADN). Essa circunstância acarreta a possibilidade de existência de intervalos, popularmente denominados “pulos”, na sequência numérica das notas fiscais de um mesmo contribuinte.

Esse processo ocorre, de forma simplificada, conforme a seguinte dinâmica:

1. O contribuinte encaminha uma ou múltiplas DPS simultaneamente, prática comum em sistemas informatizados que operam com processamento concorrente (múltiplas *threads*);
2. Para cada DPS recepcionada, a Sefin Nacional executa as seguintes etapas:
   - Reserva um número sequencial de NFS-e;
   - Processa a geração da nota fiscal e tenta persistir os respectivos dados no ADN.

Uma vez reservado, o número sequencial passa a estar vinculado de forma irrevogável àquele processo específico de geração da NFS-e.

Em determinadas situações, a NFS-e pode não ser persistida no ADN, mesmo após a reserva do número sequencial. Isso pode ocorrer, entre outros motivos, em razão de:

- Timeouts ou falhas temporárias de banco de dados;
- Erros internos não previamente catalogados;
- Indisponibilidades momentâneas dos serviços da Plataforma Nacional;
- Alta concorrência de processamento, especialmente quando múltiplas requisições simultâneas tentam gerar notas fiscais.

Nessas hipóteses, embora a NFS-e não seja efetivamente registrada no ADN, o número previamente reservado não pode ser reutilizado, em observância aos princípios de unicidade, rastreabilidade e integridade do processo de emissão fiscal.

Como consequência direta desse mecanismo, podem surgir lacunas na numeração das NFS-e, não existindo, para determinado número, uma nota fiscal válida associada. Tais intervalos decorrem <!-- p.10 -->exclusivamente do funcionamento técnico do processo de geração/autorização da Sefin Nacional e não representam irregularidade fiscal, falha do contribuinte ou inconsistência cadastral.
