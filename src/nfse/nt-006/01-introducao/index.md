<!-- p.03 -->

# 1. Introdução

Em 30 de dezembro de 2025, foi publicada, no Diário Oficial da União, a Resolução CGNFS-E Nº 9 que institui o modelo da Nota Fiscal de Serviço eletrônica de Exploração de Via de padrão nacional (NFS-e Via) como parte integrante do Sistema Nacional da Nota Fiscal de Serviço eletrônica de padrão nacional (NFS-e) de que trata o Convênio celebrado entre as administrações tributárias da União, do Distrito Federal e dos Municípios, publicado no DOU de 1º de julho de 2022, Seção 3, página 56.

A presente Nota Técnica objetiva ratificar a documentação publicada em 23/12/2025 no portal nacional da NFS-e e tornar pública a primeira versão do layout da Nota Fiscal de Serviço eletrônica para Exploração de Via – NFS-e Via - padrão nacional relacionados à tributação do Imposto sobre Bens e Serviços – IBS, da Contribuição sobre Bens e Serviços – CBS e demais tributos incidentes nas operações de serviços de exploração de via, também em atendimento às alterações previstas na Emenda Constitucional nº 132 de, 20 de dezembro de 2023, que deu ensejo à Reforma Tributária do Consumo – RTC.

A primeira versão do *layout* da NFS-e Via, presente no documento “LeiautesRN_ADN-SNNFSeVia_V1.0_Produção”, abas “Leiaute_NFSeVia-ADN_NFSeVia”, “RN_NFSeVia-ADN_NFSeVia”, “LEIAUTE_EVENTO-ADN_NFS-e_Via” e “RN_EVENTO-ADN_NFS-e_Via” que consta na sessão de documentação técnica no Portal da NFS-e: <https://www.gov.br/nfse/pt-br/nfs-e-via/documentacao-tecnica>.

O layout ora divulgado corresponde à primeira versão desenvolvida em parceria com as concessionárias de exploração de via, após estudos técnicos realizados tomando como base os textos das Leis Complementares – LC nº 116/2003 de 31 de julho de 2003 e LC nº 214, de 16 de janeiro de 2025. Sua divulgação objetiva dar transparência aos Estados, aos Municípios, às empresas prestadoras de serviço e de Tecnologia da Informação – TI e contribuintes do novo padrão que passa a vigorar a partir de 1º de janeiro de 2026.

A modelagem da NFS-e Via compreende as seguintes etapas:

1) a concessionária deve parametrizar, no Portal de Gestão das Concessionárias (<https://via.nfse.gov.br/concessionarias/login>), os dados de concessão, abrangendo contratos, trechos, praças de cobrança, municípios e alíquotas tributárias;
2) com base neste cadastro, o sistema define a alíquota efetiva por trecho para uso no layout.
3) <!-- p.04 -->o emissor gera a nota em formato XML e transmite para o Ambiente Nacional da NFS-e;
4) o Ambiente Nacional valida as regras de arquivo e conteúdo de forma síncrona, fornecendo a resposta da validação imediatamente ao emitente.

Junto a esta nota técnica, foi também publicado o anexo na seção de documentação técnica do portal da NFS-e (<https://www.gov.br/nfse/pt-br/biblioteca/documentacao-tecnica>):

LeiautesRN_ADN-SNNFSeVia_V1.00.02- o documento é composto por 4 planilhas<!-- REVISAR p.04: texto diz "4 planilhas" mas lista 5 nomes; nome do arquivo aparece como "V1.0_Produção" e "V1.00.02" -->: “LeiauteRN_ADN-SNNFSeVia_V1.00.02-”, “Leiaute_NFSeVia-ADN_NFSeVia”, “RN_NFSeVia-ADN_NFSeVia”, “LEIAUTE_EVENTO-ADN_NFS-e_Via” e “RN_EVENTO-ADN_NFS-e_Via”.
