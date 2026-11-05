<!-- p.12 -->
# 07.09 Alterações na versão 1.70

**Tabela cClassTrib**

- Atualização de textos
- Criação de novos cClassTribs:
  - **000006** - Situações tributadas integralmente pelo IBS e CBS realizadas por autônomo.
  - **200055** - Fornecimento dos serviços com redução de alíquota de 60% realizado por autônomo.
  - **200056** - Fornecimento dos serviços com redução de alíquota de 30% realizado por autônomo.
  - **400003** - Bagagens.
  - **400004** - Remessas internacionais.
  - **550026** - Regimes de admissão temporária com suspensão total do pagamento dos tributos (ZFM).
  - <!-- p.13 -->**550027** - Regimes de Aperfeiçoamento (Drawback).
  - **550028** - Regimes de Aperfeiçoamento (Admissão temporária).
  - **550029** - Zona de Processamento de Exportação.
- Atualização de indicadores nos seguintes cClassTrib:
  - Desativação para ind_gCredPresOper: 410014
  - Desativação para indNFeABI: 410028
  - Ativação para indNFe: 410022, 410023, 410024, 410025
  - Desativação para indCTeOS: 200001
  - Desativação para indNFSe: 410028
  - Desativação para indDERE: 410034
  - Ativação para indDIR: 410037
  - Desativação para indDIR: 200012, 200033
  - Desativação para indDUIMP: 550021
- Inclusão de anexo para cClassTrib: 200002, 550008, 550009, 550010, 550011, 550012, 550013, 550015, 550018

**Tabela cCredPres**

- Atualização de texto
- Criação das colunas indDecPag, indNFe, indNFCe, indCTe, indNFSe
- Atualização do indicador no seguinte cCredPres:
  - Desativação para “Apropria via NF?” : 01, 03
