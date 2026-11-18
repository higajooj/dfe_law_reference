<!-- p.03 -->

# 1. Introdução

Este documento contempla a quinta versão dos novos agrupamentos e campos opcionais do layout da Nota Fiscal de Serviço eletrônica – NFS-e padrão nacional relacionados à tributação do Imposto sobre Bens e Serviços – IBS e da Contribuição sobre Bens e Serviços – CBS incidentes nas operações de serviços, em atendimento às alterações previstas na Emenda Constitucional nº 132 de, 20 de dezembro de 2023, que deu ensejo à Reforma Tributária do Consumo – RTC. Importante observar que esta nota técnica substitui as versões anteriores.

Os novos agrupamentos de campos foram inseridos a partir do layout atual da NFS-e, presente no documento “ANEXO_I-SEFIN_ADN-DPS_NFSe-SNNFSe.xlsx”, aba “LEIAUTE NFS-e ADN” que consta na sessão de documentação técnica no Portal da NFS-e: <https://www.gov.br/nfse/pt-br/biblioteca/documentacao-tecnica/documentacao-atual>.

Importante esclarecer que o conjunto de campos apresentados neste documento é uma quinta versão, resultado de estudos técnicos realizados tomando como base o texto da Lei Complementar – LC nº 214, de 16 de janeiro de 2025, e sua divulgação objetiva dar transparência aos Estados, aos Municípios, às empresas prestadoras de serviço e de Tecnologia da Informação – TI e contribuintes para que possam se familiarizar com o novo padrão que deverá vigorar a partir de janeiro de 2026. Os estudos técnicos permanecem e novas versões deverão ser publicadas nas próximas semanas com atualizações do layout proposto. Mesmo com a publicação desta Nota Técnica - NT, os novos campos e grupos de informações que estarão presentes no layout da NFS-e nos ambientes de Produção e de Produção Restrita (homologação/testes) em janeiro de 2026 serão aqueles publicados na NT 004, de 19 de agosto de 2025. As evoluções/atualizações aqui publicadas serão disponibilizadas nesses ambientes em data futura, a ser divulgada no Portal da NFS-e.

Para melhor compreensão dos agrupamentos que serão apresentados no próximo tópico desta Nota Técnica, a seguir é apresentada a modelagem do processo de emissão da NFS-e. O emissor (prestador de serviços) preenche a Declaração de Prestação de Serviço (DPS) que será enviada à “Sefin Nacional”, responsável pela validação das informações, cálculo dos tributos e autorização da NFS-e. Caso as informações atendam aos requisitos, será gerada a NFS-e em formato XML com o destaque dos tributos devidos e que poderá ser acessada pelo emissor e demais envolvidos na operação. É importante observar que a DPS é assinada e encapsulada no interior da nota gerada e que, dessa forma, há dois grupos de informações apresentados neste documento: um relativo à DPS com campos que serão informados pelo contribuinte e outro que, a partir dessas informações, terá campos calculados pela plataforma.

<!-- p.04 -->

```mermaid
flowchart LR
    E1(["Emissor"]) -- "Preenche e envia a DPS" --> S["Sefin Nacional<br/>Validação · Emite a NFS-e"]
    S -- "Recebe a NFS-e" --> E2(["Emissor"])
```

*Figura: fluxo de emissão da NFS-e (redesenhado em mermaid). Equação do original: DPS + tributos devidos (ISS, IBS, CBS…), chave da nota etc. = NFS-e, em que a DPS é encapsulada na NFS-e gerada.*

Junto a esta nota técnica, foram também publicados dois anexos na seção de documentação técnica do portal da NFS-e (<https://www.gov.br/nfse/pt-br/biblioteca/documentacao-tecnica>):

- **AnexoVI-LeiautesRN_RTC_IBSCBS-V1.02.01.xlsx**
  Composto por três tabelas, este anexo possui o layout da NFS-e com os novos grupos referentes ao IBS e à CBS (“Leiaute DPS_NFS-e - RT”) e as primeiras regras de negócio do grupo “IBSCBS” da DPS (“RN DPS - RTC_IBSCBS”) e da NFS-e (“RN NFS-e - RTC_IBSCBS”);

- **AnexoVII-IndOp_IBSCBS_V1.00.00-.xlsx**
  Composto por uma tabela com os códigos indicadores da operação que serão referenciados no campo “cIndOp” da DPS. A tabela foi baseada no art. 11 da Lei Complementar – LC Nº 214, de 16 de janeiro de 2025.
