<!-- p.08 -->

# 4 Serviço Síncrono de Recepção CT-e (Modelo 57)

## Validação do Certificado Digital do Transmissor (protocolo TLS)

| # | Regra de Validação | Crítica | Msg | Efeito |
|---|---|---|---|---|
| **A08** | Se a forma de emissão (tpEmis) do CT-e for Regime Especial da Nota Fiscal Fácil (3):<br>No ambiente de autorização da SVRS:<br>Rejeitar se o certificado de transmissor for diferente do certificado e-CNPJ da SEFAZ Virtual RS | Obrig. | 900 | Rej. |
| **A09** | Se ambiente de autorização diferente da SVRS, rejeitar quando a forma de emissão (tpEmis) do CT-e for Regime Especial da Nota Fiscal Fácil | Obrig. | 906 | Rej. |

## Validações do Certificado utilizado na Assinatura Digital do CT-e

| # | Regra de Validação | Crítica | Msg | Efeito |
|---|---|---|---|---|
| **E08** | Se a forma de emissão (tpEmis) do CT-e for Regime Especial da Nota Fiscal Fácil (3): Rejeitar se o certificado de assinatura for diferente do certificado da SEFAZ Virtual RS | Obrig. | 901 | Rej. |

## Validações da Assinatura Digital do CT-e

| # | Regra de Validação | Crítica | Msg | Efeito |
|---|---|---|---|---|
| **F03** | CNPJ-Base do Emitente difere do CNPJ-Base do Certificado Digital<br><br>**Exceção**: Se a forma de emissão do CT-e for Regime Especial da Nota Fiscal Fácil, o CNPJ de assinatura será o e-CNPJ da SVRS | Obrig. | 213 | Rej. |

## Validações das Regras de Negócio CT-e

| # | Regra de Validação | Crítica | Msg | Efeito |
|---|---|---|---|---|
| **G002** | Se Tipo do Ambiente for igual 2 (homologação) e existir remetente, o campo razão social (xNome) deve ser informado com a literal:<br>"CT-E EMITIDO EM AMBIENTE DE HOMOLOGACAO - SEM VALOR FISCAL"<br><br>**Exceção: regra não será aplicada na hipótese de Regime Especial da NFF** | Obrig. | 646 | Rej. |
| **G003** | Se Tipo do Ambiente for igual 2 (homologação) e existir expedidor, o campo razão social (xNome) deve ser informado com a literal:<br>"CT-E EMITIDO EM AMBIENTE DE HOMOLOGACAO - SEM VALOR FISCAL"<br><br>**Exceção: regra não será aplicada na hipótese de Regime Especial da NFF** | Obrig. | 647 | Rej. |
| **G004** | Se Tipo do Ambiente for igual 2 (homologação) e existir recebedor, o campo razão social (xNome) deve ser informado com a literal:<br>"CT-E EMITIDO EM AMBIENTE DE HOMOLOGACAO - SEM VALOR FISCAL"<br><br>**Exceção: regra não será aplicada na hipótese de Regime Especial da NFF** | Obrig. | 648 | Rej. |
| **G005** | Se Tipo do Ambiente for igual 2 (homologação) e existir destinatário, o campo razão social (xNome) deve ser informado com a literal:<br>"CT-E EMITIDO EM AMBIENTE DE HOMOLOGACAO - SEM VALOR FISCAL"<br><br>**Exceção: regra não será aplicada na hipótese de Regime Especial da NFF** | Obrig. | 649 | Rej. |
| **G006** | A série informada não deve estar na faixa entre 890-899 (reservada)<br><br>**Exceção: regra não será aplicada na hipótese de Regime Especial da NFF** | Obrig. | 670 | Rej. |
| **G007** | <!-- p.09 -->Código da UF do Emitente difere da UF Autorizadora<br><br>**Exceção: regra não será aplicada na hipótese de Regime Especial da NFF** | Obrig. | 226 | Rej. |
| **G008** | Sigla da UF do Emitente difere da UF Autorizadora<br><br>**Exceção: regra não será aplicada na hipótese de Regime Especial da NFF** | Obrig. | 247 | Rej. |
| **G012** | Se Ambiente de Autorização SVC:<br>- Tipo de Emissão do tpEmis da SVC (7=SVC-RS e 8=SVC-SP)<br><br>**Observação:** CT-e da forma emissão NFF poderá ser autorizado na SVRS no modo SVC por opção da UF autorizadora | Obrig. | 516 | Rej. |
| **G052** | Para CT-e do tipo Normal, complementar ou Substituição, se UF do emitente for diferente da UF de início da prestação e UF de início e fim da prestação forem diferentes de EX: CFOP deve ser igual a 5932 ou 6932<br><br>**Exceção: regra não será aplicada na hipótese de Regime Especial da NFF** | Obrig. | 524 | Rej. |
| **G062** | Se estiver informado o grupo de documentos eletrônicos (idDocAntEle) em documentos anteriores:<br>- Rejeitar se o CNPJ/CPF do emitente de algum CT-e relacionado for diferente do CNPJ/CPF do emissor indicado no grupo emiDocAnt/CNPJ ou se estiver informado CPF<br>**Exceção: na hipótese de Regime Especial da NFF, será admitido CPF** | Obrig. | 733 | Rej. |
| **G063** | Se estiver informado o grupo de documentos eletrônicos (idDocAntEle) em documentos anteriores:<br>- Rejeitar se o CNPJ/CPF base do tomador for diferente do CNPJ/CPF base do emissor indicado no grupo emiDocAnt/CNPJ ou emiDocAnt/CPF | Obrig. | 745 | Rej. |
| **G065** | Se Tipo do CT-e= 0 (Normal) ou 3 (Substituição) e informados grupos de informações de documentos eletrônicos (idDocAntEle) em documentos anteriores (docAnt), para cada um dos CT-e´s relacionados:<br>- Validar chave de acesso<br>Retornar a primeira chave inválida e o motivo da rejeição da Chave de Acesso: CNPJ/CPF zerado ou inválido, Ano < 2009 ou maior que atual, Mês inválido (0 ou > 12), Modelo diferente de 57, Número zerado, Forma de emissão inválido, UF inválida ou DV inválido<br>[chCTe: 99999999999999999999999999999999999999999999]<br>[Motivo: XXXXXXXXXXXX] | Obrig. | 844 | Rej. |
| **G066** | Se estiver informado o grupo de documentos eletrônicos (idDocAntEle) em documentos anteriores:<br>- Acessar BD CHAVES CTE (Chave: CNPJ/CPF Emit, Modelo, Série, Nro):<br>&nbsp;&nbsp;- Os CT-e informados em DocAnt (chCTe) devem existir<br><br>**Observação**: Retornar a primeira chave do CT-e anterior inexistente | Facult. | 748 | Rej. |
| **G067** | Se estiver informado o grupo de documentos eletrônicos (idDocAntEle) em documentos anteriores:<br>-Acessar BD CHAVES CTE (Chave: CNPJ/CPF Emit, Modelo, Série, Nro):<br>&nbsp;&nbsp;- Os CT-e informados em DocAnt (chCTe) não podem existir com diferença de chave de acesso<br>Retornar a primeira chave do CT-e anterior com chave divergente | Facult. | 749 | Rej. |
| **G068** | Se estiver informado o grupo de documentos eletrônicos (idDocAntEle) em documentos anteriores:<br>-Acessar BD CHAVES CTE (Chave: CNPJ/CPF Emit, Modelo, Série, Nro):<br>&nbsp;&nbsp;- Os CT-e informados em DocAnt (chCTe) não podem estar cancelados ou denegados<br><br>**Observação**: Retornar a primeira chave do CT-e anterior com situação inválida | Facult. | 750 | Rej. |
| **G125** | Validar CNPJ Emitente (dígito controle, zeros ou nulo)<br><br>**Exceção**: O CNPJ não será informado se a forma de emissão (tpEmis) do CT-e for Regime Especial da Nota Fiscal Fácil (3), em seu lugar será informado o CPF do TAC, conforme alteração de schema descrita no item 3.3 | Obrig. | 207 | Rej. |
| **G126** | IE Emitente deve ser informada (zeros ou nulo)<br>**Exceção**: A IE não será informada se a forma de emissão (tpEmis) do CT-e for Regime Especial da Nota Fiscal Fácil (3) | Obrig. | 229 | Rej. |
| **G127** | <!-- p.10 -->Se informada IE do emitente (tpEmis diferente de 3):<br>Validar IE Emitente (erro no dígito de controle)<br>Obs.: Antes da validação, a IE deverá ser normalizada, na aplicação da SEFAZ, com o acréscimo de zeros não significativos previstos na definição do formato da IE, se necessário.<br>Exemplo: IE informada 130000019, formato da IE: NNNNNNNNNNND, a IE deve ser padronizada para 00130000019, com o acréscimo dos zeros não significativos necessários para a validação do dígito verificador. | Obrig. | 209 | Rej. |
| **G129** | Se informada IE do emitente (tpEmis diferente de 3):<br>Acessar Cadastro de Emitentes (Chave: UF, IE):<br>- IE emitente não cadastrada | Facult. | 230 | Rej. |
| **G130** | Se informada IE do emitente (tpEmis diferente de 3):<br>- IE Emitente deve estar vinculada ao CNPJ (tratar Regime Especial de IE única) | Obrig. | 231 | Rej. |
| **G131** | Se informada IE do emitente (tpEmis diferente de 3):<br>- Emitente deve estar habilitado na base de dados para emissão do CT-e | Obrig. | 203 | Rej. |
| **G132** | Se informada IE do emitente (tpEmis diferente de 3):<br>- IE emitente deve estar autorizada a emitir CT-e para o modal de transporte informado | Obrig. | 585 | Rej. |
| **G133** | Se informada IE do emitente (tpEmis diferente de 3):<br>- Verificar se Emitente em situação irregular perante o Fisco (tratar duplicidade na inserção do CT-e, evitando a inserção de mais de um CT-e denegado) | Obrig. | 301 ou 205 | Den. |
| <mark>**G134**</mark> | Município diverge da UF (verificar se as 2 posições da esquerda do código de município que identifica o código da UF é compatível com a sigla da UF informada)<br><br><mark>**Exceção**: regra não será aplicada na hipótese de Regime Especial da NFF</mark> | <mark>Obrig.</mark> | <mark>712</mark> | <mark>Rej.</mark> |
| **G180** | Acessar BD CTE (Chave: CNPJ/CPF Emit, Modelo, Série, Nro):<br>- Verificar Duplicidade de CT-e com diferença na Chave de Acesso (Campo de Código Numérico difere)<br>Retornar a chave de acesso já autorizada, o número do protocolo e data de autorização<br>[chCTe: 99999999999999999999999999999999999999999999][nProt:999999999999999][dhAut: AAAA-MM-DDTHH:MM:SS TZD] | Obrig. | 539 | Rej. |
| **G181** | Acessar BD CTE (Chave: CNPJ/CPF Emit, Modelo, Série, Nro):<br>- Verificar Duplicidade de CT-e<br>Retornar Protocolo e data de autorização.<br>[nProt:999999999999999][dhAut: AAAA-MM-DDTHH:MM:SS TZD]. | Obrig. | 204 | Rej. |
| **G244** | Se a forma de emissão do CT-e (tpEmis) for diferente de Regime Especial da Nota Fiscal Fácil (3):<br>- O grupo de informações do pedido da NFF (infSolicNFF) não pode estar preenchido | Obrig. | 902 | Rej. |

