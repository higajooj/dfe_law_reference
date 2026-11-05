<!-- p.4 -->
# 02. Tabela de Código de Classificação Tributária do IBS e da CBS

A Lei Complementar nº 214 de 16/01/2025, definiu na Seção V – Disposições transitórias, Art. 62, a obrigatoriedade para União, Estados, o Distrito Federal e os Municípios adaptarem os sistemas autorizadores de Documentos Fiscais Eletrônicos (DFe) vigentes para utilização de leiaute padronizado, que permita aos contribuintes informarem os dados relativos ao Imposto sobre Bens e Serviços (IBS), Contribuição sobre Bens e Serviços (CBS) e Imposto Seletivo (IS).

Atendendo a este comando, foram publicadas Notas Técnicas referente a reforma tributária, além de diversas outras disposições, que introduziram o Grupo UB: Informações dos tributos IBS / CBS e Imposto Seletivo. Nesse grupo, posicionado no nível de item na NF-e e na NFS-e, o contribuinte deve informar os códigos “CST-IBS/CBS” e “cClassTrib”.

Cada par de códigos “CST-IBS/CBS” e “cClassTrib” está associado a um dispositivo específico da Lei Complementar nº 214/2025 e normas complementares, tornando objetiva a informação do contribuinte sobre como interpreta a tributação do IBS e da CBS para cada item da NFe.

O significado de cada coluna da tabela está descrito a seguir. A codificação que deve ser utilizada nas tags do grupo UB corresponde às colunas “CST-IBS/CBS” e “cClassTrib”. Como os mesmos códigos se aplicam à Nota Fiscal de Serviços – NFS-e, a tabela também <!-- p.5 -->contém informações referentes a esse documento, para facilitar a utilização por contribuintes que porventura o utilizem.

**CST-IBS/CBS**: Código de Situação Tributária do IBS e da CBS.

**Descrição CST-IBS/CBS**: Significado do Código de Situação Tributária do IBS e da CBS.

**cClassTrib**: Classificação Tributária do IBS e da CBS; os três primeiros dígitos são idênticos ao CST-IBS/CBS.

**Nome cClassTrib**: Nome reduzido para apresentação da Classificação Tributária

**Descrição cClassTrib**: Situação a que se refere a Classificação Tributária do IBS e da CBS.

**LC Redação**: Redação do dispositivo do LC 214/2025 onde a situação a que se refere a Classificação Tributária do IBS e da CBS está prevista.

**LC 214/25:** Dispositivo da LC 214/2025 onde a situação a que se refere a Classificação Tributária do IBS e da CBS está prevista.

**Regulamento CBS:** Redação do dispositivo do Decreto nº 12.955, de 29 de abril de 2026, onde a situação a que se refere a Classificação Tributária da CBS está prevista.

**Regulamento IBS:** Redação do dispositivo da Resolução CGIBS nº 6, de 30 de abril de 2026, onde a situação a que se refere a Classificação Tributária do IBS está prevista.

**Tipo de Alíquota**: Define o tipo de alíquota aplicável, conforme disposto na Lei Complementar nº 214/2025.

**pRedIBS**: Percentual de redução da alíquota do IBS associado ao código informado em cClassTrib.

**pRedCBS**: Percentual de redução da alíquota da CBS correspondente ao cClassTrib.

**Indicadores de exigência de grupos**: Indicadores que estabelecem a exigência, permissão ou vedação de preenchimento de campos no respectivo Documento Fiscal Eletrônico (DFe), conforme especificado em Nota Técnica. São eles: ind_gTribRegular, ind_gCredPresOper, ind_gMonoPadrao, ind_gMonoReten, ind_gMonoRet, ind_gpBioDiferenca, ind_gEstornoCred

**tpRBSN:** Define as formas de receita bruta aplicáveis aos contribuintes do Simples Nacional.

<!-- p.6 -->**tpDoacao:** define para quais cClassTrib o campo indDoacao no documento não pode ser preenchido, deve obrigatoriamente ser preenchido ou deve ser preenchido quando a doação for tributada conforme Art. 6º, 2º, I. <!-- REVISAR p.6: possível "§" ausente antes de "2º" em "Art. 6º, 2º, I." (fonte mostra "Art. 6º, 2º, I.") -->

**dIniVig e dFimVig**: início e final de vigência deste cClassTrib.

**DataAtualização:** data da última atualização do cClassTrib.

**Indicadores de modelos de documentos:** Indicadores que estabelecem a permissão ou não de informar o cClassTrib no respectivo documento: indNFeABI, indNFe, indNFCe, indCTe, indCTeOS, indBPe, indBPeTA, indBPeTM, indNF3e, indNFSe, indNFSeVia, indNFCom, indNFAg, indNFGas, indDERE, indDIR, indDUIMP.

**Esclarecimento sobre documentos em desenvolvimento:**

- indNFeABI = indicador da Nota Fiscal Eletrônica de Alienação de Bens Imóveis
- indNFGas = indicador da Nota Fiscal para operações com Gás Canalizado
- indDERE = indicador de Declarações de Regimes Específicos

**ANEXO:** Identificação do número do anexo correspondente na Lei Complementar nº 214/2025 ou regulamentos de IBS ou CBS, conforme aplicável à classificação tributária. Foi criado o conceito de **anexo técnico**, com numeração no formato **ZXXXY**, em que **XXX** corresponde ao número do artigo que define a lista de **NCM/NBS relacionadas** e **Y** é o número sequencial das ocorrências no mesmo artigo. Quando o primeiro dígito do anexo técnico for 9, o número do artigo corresponde ao da Lei Complementar nº 214/2025. Quando o primeiro dígito for 8, o número do artigo corresponde ao do regulamento do IBS ou CBS.

**Link:** link para o artigo da Lei Complementar 214/25 referente ao cClassTrib
