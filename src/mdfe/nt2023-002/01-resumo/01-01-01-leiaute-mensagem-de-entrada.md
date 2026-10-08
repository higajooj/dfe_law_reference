<!-- p.4 -->

# 1.1.1 Leiaute Mensagem de Entrada

**Entrada:** Estrutura XML contendo a consulta por chave de acesso do MDFe

**Schema XML: consSitMDFe_v9.99.xsd**

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **DP01** | **consSitMDFe** | **Raiz** | **-** | **-** | **-** | **-** | **TAG raiz** |
| DP02 | versao | A | DP01 | N | 1-1 | 2v2 | Versão do leiaute |
| DP03 | tpAmb | E | DP01 | N | 1-1 | 1 | Identificação do Ambiente:<br>1 – Produção / 2 - Homologação |
| DP04 | xServ | E | DP01 | C | 1-1 | 9 | Serviço solicitado: ‘CONSULTAR’ |
| DP05 | chMDFe | E | DP01 | N | 1-1 | 44 | Chave de acesso do MDFe |
