<!-- p.03 -->

# 1. Emissão por Decisão Administrativa ou Judicial

A emissão da Nota Fiscal de Serviço Eletrônica (NFS-e) por decisão administrativa ou judicial utiliza um fluxo específico criado na plataforma para atender a determinações judiciais ou administrativas que exigem o desvio das regras padrão de validação do documento fiscal.

Esta funcionalidade, também conhecida como “*bypass*”, visa atender às determinações estabelecidas por tais decisões, sendo importante ressaltar que o contribuinte deve primeiramente solicitar ao Município que cadastre no sistema a referida decisão, incluindo o número do processo administrativo ou judicial que a determinou, e autorize o contribuinte a utilizar esse fluxo específico de emissão. Somente após isso, esse contribuinte estará apto a emitir o documento em conformidade com a decisão.

Este fluxo específico possibilita a emissão dos documentos sem a necessidade de validação completa das regras de negócio aplicáveis ao processo padrão de emissão, conforme estabelecido no [ANEXO_I-SEFIN_ADN-DPS_NFSe-SNNFSe](https://www.gov.br/nfse/pt-br/biblioteca/documentacao-tecnica/documentacao-atual/anexo_i-sefin_adn-dps_nfse-snnfse-v1-00-20251210.xlsx) na planilha RN_DPS_NFS-e coluna “L”. Note que validações mínimas, tais como dígitos verificadores de CPF e CNPJ, ainda são aplicáveis, para garantir a integridade do documento fiscal e das bases de dados.

No caso de emissão via web, as orientações constam no “Guia do Emissor Público Nacional Web da NFS-e”. Para emissão via API, o contribuinte deve seguir as instruções aqui presentes.

No fluxo regular, o emissor do documento fiscal envia à Sefin nacional um arquivo em formato XML, chamado Declaração de Prestação de Serviço (DPS), contendo os dados básicos da operação. Esses dados são, então, validados e submetidos às regras de negócio do sistema, que agrega ao documento os dados parametrizados pelos Municípios e pelo CGNFS-e, tais como alíquotas, locais de incidência do ISSQN, além dos valores calculados pela plataforma (nativamente ou a partir de suas integrações, como aquela com a Calculadora de Tributos). Caso tudo esteja conforme as regras, a nota é gerada.

No fluxo de emissão por decisão administrativa ou judicial, o mecanismo é diferente. Neste caso, o emissor deve emitir a NFS-e completa (DPS + campos que normalmente são gerados no fluxo regular). Dessa forma, o arquivo emitido deve conter **todos** os campos obrigatórios da NFS-e, e não somente os dados básicos da DPS do fluxo regular. A plataforma não gerará os campos calculados, nem determinará o local de incidência ou alíquota do ISSQN. Todas as informações são de responsabilidade do contribuinte, ainda que contrariem as regras de negócio da plataforma.

Assim, o sistema nacional dispõe de bastante flexibilidade para comportar qualquer tipo de decisão administrativa ou judicial. Note, porém, que, neste caso, a responsabilidade pelas informações é inteiramente do contribuinte, que deve se ater ao que foi autorizado pela decisão, estando sujeito à fiscalização posterior para constatar se não extrapolou o que foi determinado pela decisão.
