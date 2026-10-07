<!-- p.21 -->
# 8. Novas Regras de Validação

### Grupo A: Validação do Certificado de Transmissão (protocolo TLS) (regra A08)

O arquivo XML da NF-e será gerado pelo Portal Nacional da NFF; por este motivo, se tpEmis=3 (NF-e emitida ao abrigo do regime especial NFF), o certificado digital utilizado para transmitir o arquivo XML somente poderá ser da Sefaz Virtual do Rio Grande do Sul (SVRS).

| # | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|
| A08 | NF-e do regime nota fiscal fácil (tpEmis = 3) e CNPJ-Base do certificado digital de transmissão difere do CNPJ-Base da SVRS (NT 2021.002) | Obrig | 832 | Rej. | Rejeição: CNPJ incorreto na transmissão da NFF |

### Grupo F: Validação da Assinatura Digital (regra F03B)

O arquivo XML da NF-e será gerado pelo Portal Nacional da NFF; por este motivo, se tpEmis=3 (NF-e emitida ao abrigo do regime especial NFF), o certificado digital utilizado para assinar o arquivo XML somente poderá ser da Sefaz Virtual do Rio Grande do Sul (SVRS).

| # | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|
| F03B | NF-e do regime nota fiscal fácil (tpEmis = 3) e CNPJ-Base do certificado digital de assinatura difere do CNPJ-Base da SVRS (NT 2021.002) | Obrig | 818 | Rej. | Rejeição: CNPJ incorreto na assinatura da NFF |

### Grupo ZE. Informações da Nota Fiscal Fácil – NFF (regra ZE01-10)

Somente pode ser informado o grupo para informações da solicitação da NFF para tpEmis = 3-NFF.

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| ZE01-10 | 55/65 | Tipo de emissão diferente de Nota Fiscal Fácil (tpEmis <> 3-NFF) e preenchida informação de solicitação de NFF (infSolicNFF) (NT 2021.002) | Obrig | 819 | Rej | Rejeição: Informação de Solicitação de NFF não pode estar preenchido |
| ZE01-20 | 55/65 | Tipo de emissão igual a Nota Fiscal Fácil (tpEmis = 3-NFF) e não preenchida informação de solicitação de NFF (infSolicNFF) (NT 2021.002) | Obrig | 834 | Rej | Rejeição: Informação de Solicitação de NFF não preenchida |

### Grupo I86. Informações Adicionais do Produto NFF (regra I86-10)

Somente pode ser informado grupo de produto NFF (infProdNFF) para tpEmis = 3-NFF ou procEmi = 1 ou 2 – NF Avulsa.

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| I86-10 | 55/65 | Tipo de emissão diferente de Nota Fiscal Fácil (tpEmis <> 3-NFF) e NF-e não é avulsa (procEmi <> 1 ou 2) e preenchido grupo de produto NFF (infProdNFF) (NT 2021.002) | Obrig | 820 | Rej | Rejeição: Informado produto fiscal de NFF |

<!-- p.22 -->
### Grupo I87. Informações de Embalagem do Produto (regras I87-10)

Informações de embalagem do produto (infProdEmb) disponíveis apenas para tpEmis = 3-NFF ou procEmi = 1 ou 2 – NF Avulsa.

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| I87-10 | 55/65 | Tipo de emissão diferente de Nota Fiscal Fácil (tpEmis <> 3-NFF) ou NF-e Avulsa (procEmi=1 ou 2) e preenchida a embalagem do produto (infProdEmb) (NT 2021.002) | Obrig | 833 | Rej | Rejeição: Informada embalagem do produto |
