<!-- p.7 -->
# YC. Informações da Vinculação com a Transação de Pagamento do DF-e (Split Payment)

Este grupo de informações deverá ser informado sempre que a transação de pagamento for iniciada antes da emissão do DF-e. Exemplos: boleto gerado antes da emissão do DF-e; QR Code dinâmico Pix gerado antes da emissão do DF-e. Neste caso, o DF-e deverá reportar os dados das transações financeiras previamente iniciadas, ainda que estejam pendentes de efetivo pagamento e liquidação.

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **YC01** | **gPgtoVinc** | **G** | **A01** | **-** | **0-1** | **-** | **Grupo de informações da Vinculação com a Transação de Pagamento** |
| **YC02** | **gPgto** | **G** | **YC01** | **-** | **1-99** | **-** | **Dados de cada pagamento previsto para o DF-e** |
| YC03 | nPag | A | YC02 | N | 1-1 | 3 | Atributo numerador único de cada ocorrência de pagamento<br>**Observação:** O schema impede nPag duplicado |
| YC04 | idTransacao | A | YC02 | C | 1-1 | 2-35 | Atributo identificador da transação financeira, de acordo com a transação de pagamento<br>**Observação:** O schema impede idTransacao duplicado |
| YC05 | tpMeioPgto | E | YC02 | N | 1-1 | 2 | Código do meio de pagamento<br>**Observação:** consultar Tabela Nacional de Códigos de Meios de Pagamento (Informe Técnico 2026.001 dos DF-e). |
| YC06 | CNPJReceb | E | YC02 | C | 1-1 | 14 | CNPJ completo do recebedor do pagamento (fornecedor, plataforma, ou outra entidade que receba o pagamento do adquirente)<br>**Observação:** Indicar o CNPJ responsável pelo recebimento dos valores do adquirente na transação de pagamento. É possível que o CNPJ do recebedor seja diferente do CNPJ do fornecedor constante no documento fiscal. |
| YC07 | CNPJBasePSP | E | YC02 | C | 1-1 | 8 | CNPJ base da instituição financeira ou de pagamento utilizada pelo recebedor do pagamento (fornecedor, plataforma, ou outra entidade que receba o pagamento do adquirente) |
