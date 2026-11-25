<!-- p.11 -->

# 2.3 Regras de negócio do CTe Simplificado

As validações descritas a seguir aplicam-se ao CTe enviado ao serviço de recepção de CT-e (MOC Visão Geral).

| Grupo | Descrição |
| --- | --- |
| A | Validação do Certificado de Transmissão |
| A-1 | Validação do Certificado de Transmissão (NFF) |
| B-0 | Validação da Compactação da Mensagem |
| B | Validação Inicial do WebService |
| C | Validação da área de dados |
| C-1 | Validação do Ambiente de Autorização |
| D | Validação do Certificado de Assinatura |
| E | Validação da Assinatura Digital |
| E-1 | Validação da Assinatura Digital (Regime Especial NFF) |
| PAA | Validação do Provedor de Assinatura e Autorização (PAA) |

<!-- p.12 -->

## Validações Gerais

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
| --- | --- | --- | --- | --- | --- |
| **G001** | Verificar se o tipo do ambiente do CTe difere do ambiente do Web Service | Obrig. | 252 | Rej. | Rejeição: Ambiente informado diverge do Ambiente de recebimento |
| **G002** | Se Tipo do Ambiente for igual 2 (homologação): O campo razão social (xNome) do tomador deve ser informado com a literal:<br>“CTE EMITIDO EM AMBIENTE DE HOMOLOGACAO - SEM VALOR FISCAL”<br>**Exceção**: regra não será aplicada na hipótese de Regime Especial da NFF | Obrig. | 938 | Rej. | Rejeição: CTe emitido em ambiente de homologação com Razão Social do tomador diferente de CTE EMITIDO EM AMBIENTE DE HOMOLOGACAO - SEM VALOR FISCAL |
| **G003** | A série informada não deve estar na faixa entre 890-899 (reservada)<br><br>**Exceção**: regra não será aplicada na hipótese de Regime Especial da NFF | Obrig. | 670 | Rej. | Rejeição: Série utilizada não permitida no webservice |
| **G004** | Sigla da UF do Emitente difere da UF da Chave de Acesso<br><br>**Exceção**: regra não será aplicada na hipótese de Regime Especial da NFF | Obrig. | 247 | Rej. | Rejeição: Sigla da UF do Emitente diverge da UF autorizadora |
| **G005** | Se forma de emissão (tag:tpEmis) igual a 1 (Normal) dhCont e xJust não devem ser informados | Obrig, | 939 | Rej. | Rejeição: Campos da justificativa de entrada em contingência não podem ser informados para emissão normal |
| **G006** | Se Data de entrada em contingência estiver informada, esta deve ser menor ou igual à data de emissão | Obrig. | 588 | Rej. | Rejeição: Data de entrada em contingência posterior a data de emissão. |
| **G007** | Se Ambiente de Autorização SVC:<br>- Tipo de Emissão difere do tpEmis da SVC (7=SVC-RS e 8=SVC-SP)<br><br>**Observação**: CTe da forma emissão NFF poderá ser autorizado na SVRS no modo SVC por opção da UF autorizadora | Obrig. | 516 | Rej. | Rejeição: O tpEmis informado é incompatível com SVC-[SP/RS] |
| **G008** | Se ambiente de Autorização SVC:<br>- Não aceitar tipo de CTe diferente de 5 (CTe Simplificado) | Obrig. | 940 | Rej. | Rejeição: Tipo de CTe inválido para SVC |
| **G009** | Chave de acesso inválida (modelo diferente de 57) | Obrig. | 732 | Rej. | Rejeição: Chave de acesso inválida (modelo diferente de 57) |
| **G010** | Verificar Campo ID:<br>- Falta literal "CTe"<br>- Chave de Acesso do campo ID difere da concatenação dos campos correspondentes | Obrig. | 227 | Rej. | Rejeição: Erro na composição do Campo ID |
| **G011** | Dígito Verificador inválido da Chave de acesso resultante da concatenação dos campos correspondentes | Obrig. | 253 | Rej. | Rejeição: Dígito Verificador da chave de acesso composta inválido |
| **G012** | Se indicador de tomador for igual a Contribuinte (indIEToma=1):<br>- Rejeitar se o tomador indicado não possuir informação da IE ou se estiver informado “ISENTO” | Obrig. | 481 | Rej. | Rejeição: IE deve ser informada para tomador Contribuinte |
| **G013** | Se indicador de tomador for igual a Isento de Inscrição (indIEToma=2):<br>- Rejeitar se o tomador indicado não possuir informação de IE ou se estiver informada diferente do literal “ISENTO" | Obrig. | 482 | Rej. | Rejeição: IE do tomador isento deve ser preenchida com “ISENTO” |
| **G014** | Rejeitar quando informado tomador como Contribuinte Isento de Inscrição Estadual (indIEToma=2) em UF que não permite esta situação, conforme abaixo:<br>- AM, BA, CE, GO, MG, MS, MT, PE, RN, SE, SP | Obrig. | 617 | Rej. | Rejeição: UF do tomador não aceita ISENTO com Inscrição Estadual |
| **G015** | Se Tipo de Serviço for Normal:<br>- O grupo de informações da NFe (infNFe) deve ser informado | Obrig. | 941 | Rej. | Rejeição: O Grupo de informações da NFe devem ser informado para Tipo de Serviço Normal |
| **G016** | Se Tipo de Serviço for Redespacho / Subcontratação:<br>- O grupo de Documentos Anteriores (docAnt) deve ser informado | Obrig. | 942 | Rej. | Rejeição: Os documentos de transporte anterior devem ser informados para os tipos de serviço Subcontratação e Redespacho |

## Validações dos Modais

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
| --- | --- | --- | --- | --- | --- |
| **G017** | Verificar se a Versão do modal de transporte é suportada | Obrig. | 579 | Rej. | Rejeição: Versão informada para o modal não suportada |
| **G018** | Verificar Schema XML conforme o modal de transporte (parte específica do modal de transporte)<br><br>**Observação:** os schemas específicos dos modais do CTe simplificado são os mesmos do CTe Normal. | Obrig. | 580 | Rej. | Rejeição: Falha no Schema XML específico para o modal |

<!-- p.13 -->

## Validações das Notas Fiscais Eletrônicas

**Observação:** As validações abaixo devem ser aplicadas a cada item do CTe (grupo: det)

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
| --- | --- | --- | --- | --- | --- |
| **G019** | Se informado grupo de informações de NFe (det/infNFe)<br>- Verificar se existe alguma chave de acesso de NFe duplicada no CTe (independente do item em que aparece)<br>Retornar a chave duplicada e o número do item | Obrig. | 527 | Rej. | Rejeição: NFe duplicada no CTe<br>[chNFe:99999999999999999999999999999999999999999999]<br>[nItem:999] |
| **G020** | Para cada uma das NFe´s relacionadas:<br>- Validar chave de acesso<br><br>Retornar a primeira chave inválida e o motivo da rejeição da Chave de Acesso: CNPJ / CPF zerado ou inválido, Ano < 2005 ou maior que atual, Mês inválido (0 ou > 12), Modelo diferente de 55, Número zerado, Tipo de emissão inválido, UF inválida ou DV inválido) | Obrig. | 843 | Rej. | Rejeição: Chave de acesso da NFe transportada inválida<br>[chNFe:99999999999999999999999999999999999999999999]<br>[Motivo: XXXXXXXXXXXX]<br>[nItem:999] |
| **G0021** | Para cada uma das NFe´s relacionadas:<br><br>Verificar se o Ano/Mês da chave de acesso são anteriores a 6 meses da Data de Autorização do CTe | Obrig. | 943 | Rej. | Rejeição: Chave de acesso da NFe transportada muito antiga<br>[chNFe:99999999999999999999999999999999999999999999]<br>{nItem:999] |
| **G022** | Para cada uma das NFe´s relacionadas:<br>- Acessar BD CHAVES NFE (Chave: UF, CNPJ/CPF Emit, Modelo, Série, Nro):<br>- A NFe deve existir<br>Retornar a primeira chave de acesso de NFe inexistente.<br><br>**Exceção**: NFe em contingência fica dispensada dessa validação (verificar tpEmis da chave de acesso da NFe) | Facult. | 661 | Rej. | Rejeição: NFe inexistente na base de dados da SEFAZ<br>[chNFe:99999999999999999999999999999999999999999999]<br>[nItem:999] |
| **G023** | Para cada uma das NFe´s relacionadas:<br>- Acessar BD CHAVES NFE (Chave: UF, CNPJ/CPF Emit, Modelo, Série, Nro):<br>- A NFe não pode existir com diferença de chave de acesso<br>Retornar a primeira chave de acesso de NFe e o número do item com situação inválida. | Facult. | 662 | Rej. | Rejeição: NFe com diferença de Chave de Acesso<br>[chNFe:99999999999999999999999999999999999999999999]<br>[nItem:999] |
| **G024** | Para cada uma das NFe´s relacionadas:<br>- Acessar BD CHAVES NFE (Chave: UF, CNPJ/CPF Emit, Modelo, Série, Nro): A NFe não pode estar cancelada ou denegada<br>Retornar a primeira chave de acesso e o número do item de NFe com situação inválida. | Facult. | 652 | Rej. | Rejeição: NFe não pode estar cancelada ou denegada<br>[chNFe:99999999999999999999999999999999999999999999]<br>[nItem:999] |

\* As regras facultativas em relação a existência da NFe dependem de elas existirem no ambiente de autorização do CTe

## Validações do Redespacho e Subcontratação

**Observação:** As validações abaixo devem ser aplicadas a cada item do CTe (grupo: det)

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
| --- | --- | --- | --- | --- | --- |
| **G025** | Se estiver informado o grupo de documentos anteriores (infDocAnt):<br>- Verificar se existe alguma chave de acesso de CTe duplicada nos documentos anteriores.<br>Retornar a chave duplicada e o número do item | Obrig. | 543 | Rej. | Rejeição: Chave de CTe duplicada em documentos anteriores<br>[chCTe:99999999999999999999999999999999999999999999]<br>[nItem:999] |
| **G026** | Se estiver informado o grupo de documentos anteriores (infDocAnt):<br>- Rejeitar se o CNPJ base/CPF do tomador for diferente do CNPJ base/CPF do emissor das chaves de acesso dos CTe relacionados no infDocAnt | Obrig. | 944 | Rej. | Rejeição: CPF/CNPJ base do tomador deve ser igual ao CPF/CNPJ base dos CTe relacionados<br>[chCTe:99999999999999999999999999999999999999999999]<br>[nItem:999] |
| **G027** | Se estiver informado o grupo de documentos anteriores (infDocAnt) para cada um dos CTe´s relacionados:<br>- Validar chave de acesso<br>Retornar a primeira chave inválida e o motivo da rejeição da Chave de Acesso: CNPJ/CPF zerado ou inválido, Ano < 2009 ou maior que atual, Mês inválido (0 ou > 12), Modelo diferente de 57, Número zerado, Forma de emissão inválido, UF inválida ou DV inválido) | Obrig. | 844 | Rej. | Rejeição: Chave de acesso do CTe anterior inválida<br>[chCTe:99999999999999999999999999999999999999999999]<br>[Motivo: XXXXXXXXXXXX]<br>[nItem:999] |
| **G028** | Se informados grupos de informações de documentos eletrônicos (infDocAnt) para cada um dos CTe´s relacionados:<br>Verificar se o Ano/Mês da chave de acesso são anteriores a 6 meses da Data de Autorização do CTe | Obrig. | 945 | Rej. | Rejeição: Chave de acesso do CTe anterior muito antiga<br>[chCTe:99999999999999999999999999999999999999999999][nItem:999] |
| **G029** | Se estiver informado o grupo de documentos anteriores (infDocAnt) para cada um dos CTe´s relacionados:<br>- Acessar BD CHAVES CTE (Chave: UF, CNPJ/CPF Emit, Modelo, Série, Nro):<br><!-- p.14 -->- Os CTe informados em DocAnt (chCTe) devem existir<br>**Observação**: Retornar a primeira chave e número do item do CTe anterior inexistente | Facult. | 748 | Rej. | Rejeição: CTe referenciado em documentos anteriores inexistente na base de dados da SEFAZ<br>[chCTe:99999999999999999999999999999999999999999999]<br>[nItem:999] |
| **G030** | Se estiver informado o grupo de documentos anteriores (infDocAnt) para cada um dos CTe´s relacionados:<br>-Acessar BD CHAVES CTE (Chave: UF, CNPJ/CPF Emit, Modelo, Série, Nro):<br>- Os CTe informados em DocAnt (chCTe) não podem existir com diferença de chave de acesso<br>**Observação**: Retornar a primeira chave e número do item do CTe com chave divergente | Facult. | 749 | Rej. | Rejeição: CTe referenciado em documentos anteriores existe com diferença de chave de acesso<br>[chCTe:99999999999999999999999999999999999999999999]<br>[nItem:999] |
| **G031** | Se estiver informado o grupo de documentos anteriores (infDocAnt) para cada um dos CTe´s relacionados:<br>-Acessar BD CHAVES CTE (Chave: UF, CNPJ/CPF Emit, Modelo, Série, Nro):<br>- Os CTe informados em DocAnt (chCTe) não podem estar cancelados<br>**Observação**: Retornar a primeira chave e número do item do CTe anterior cancelado | Facult. | 750 | Rej. | Rejeição: CTe referenciado em documentos anteriores não pode estar cancelado<br>[chCTe:99999999999999999999999999999999999999999999]<br>[nItem:999] |
| **G032** | Se o tipo de serviço for igual a Subcontratação:<br>- Os CTe informados em DocAnt (chCTe) devem possuir o mesmo código de município de início e fim de prestação do item em que foram relacionados no CTe Simplificado de subcontratação<br>**Observação**: Retornar a primeira chave e número de item do CTe anterior com situação inválida | Facult. | 832 | Rej. | Rejeição: Município de início e fim de prestação do CTe de subcontratação devem ser iguais ao CTe subcontratado<br>[chCTe:99999999999999999999999999999999999999999999]<br>[nItem:999] |
| **G033** | Se estiver informado o grupo de documentos anteriores (infDocAnt) para cada um dos CTe´s relacionados:<br>Se tipo da prestação for parcial (tag:tpPrest=2) deve ser informado o grupo de notas fiscais eletrônicas da prestação parcial (grupo infNFeTranspParcial) | Obrig. | 946 | Rej. | Rejeição: Prestação parcial exige informação das notas que foram entregues |
| **G034** | Se estiver informado o grupo de documentos anteriores (infDocAnt) para cada um dos CTe´s relacionados:<br>Se tipo da prestação for total (tag:tpPrest=1) NÃO DEVE ser informado o grupo de notas fiscais eletrônicas da prestação parcial (grupo infNFeTranspParcial) | Obrig. | 947 | Rej. | Rejeição: Prestação total não permite relacionar notas de prestação parcial |
| **G035** | Se estiver informado o grupo de documentos anteriores (infDocAnt) e prestação parcial:<br>- Verificar se existe alguma chave de acesso de NFe duplicada na lista de chaves de entrega parcial (independente do item em que aparece)<br>Retornar a chave duplicada e o número do item | Obrig. | 948 | Rej. | Rejeição: NFe duplicada na indicação de prestação parcial<br>[chNFe:99999999999999999999999999999999999999999999]<br>[nItem:999] |
| **G036** | Para cada uma das NFe´s relacionadas na prestação parcial:<br>- Validar chave de acesso<br><br>Retornar a primeira chave inválida e o motivo da rejeição da Chave de Acesso: CNPJ / CPF zerado ou inválido, Ano < 2005 ou maior que atual, Mês inválido (0 ou > 12), Modelo diferente de 55, Número zerado, Tipo de emissão inválido, UF inválida ou DV inválido) | Obrig. | 949 | Rej. | Rejeição: Chave de acesso da NFe indicada na prestação parcial inválida<br>[chNFe:99999999999999999999999999999999999999999999]<br>[Motivo: XXXXXXXXXXXX]<br>[nItem:999] |
| **G037** | Para cada uma das NFe´s relacionadas na prestação parcial<br><br>Verificar se o Ano/Mês da chave de acesso são anteriores a 6 meses da Data de Autorização do CTe | Obrig. | 950 | Rej. | Rejeição: Chave de acesso da NFe indicada na prestação parcial muito antiga<br>[chNFe:99999999999999999999999999999999999999999999]<br>{nItem:999] |
| **G038** | Para cada uma das NFe´s relacionadas na prestação parcial:<br>- Acessar BD CHAVES NFE (Chave: UF, CNPJ/CPF Emit, Modelo, Série, Nro):<br>- A NFe deve existir<br>Retornar a primeira chave de acesso de NFe inexistente.<br><br>**Exceção**: NFe em contingência fica dispensada dessa validação (verificar tpEmis da chave de acesso da NFe) | Facult. | 951 | Rej. | Rejeição: NFe indicada na prestação parcial inexistente na base de dados da SEFAZ<br>[chNFe:99999999999999999999999999999999999999999999]<br>[nItem:999] |
| **G039** | Para cada uma das NFe´s relacionadas na prestação parcial:<br>- Acessar BD CHAVES NFE (Chave: UF, CNPJ/CPF Emit, Modelo, Série, Nro):<br>- A NFe não pode existir com diferença de chave de acesso<br><!-- p.15 -->Retornar a primeira chave de acesso de NFe e o número do item com situação inválida. | Facult. | 952 | Rej. | Rejeição: NFe indicada na prestação parcial com diferença de Chave de Acesso<br>[chNFe:99999999999999999999999999999999999999999999]<br>[nItem:999] |
| **G040** | Para cada uma das NFe´s relacionadas na prestação parcial:<br>- Acessar BD CHAVES NFE (Chave: UF, CNPJ/CPF Emit, Modelo, Série, Nro): A NFe não pode estar cancelada ou denegada<br>Retornar a primeira chave de acesso e o número do item de NFe com situação inválida. | Facult. | 953 | Rej. | Rejeição: NFe indicada na prestação parcial não pode estar cancelada ou denegada<br>[chNFe:99999999999999999999999999999999999999999999]<br>[nItem:999] |

\* As regras facultativas em relação a existência da NFe dependem das mesmas existirem no ambiente de autorização do CTe

## Validações de Valores

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
| --- | --- | --- | --- | --- | --- |
| **G041** | Verificar se valor total do serviço não ultrapassa limite de R$ 9.999.999,99<br><br>**Observação**: A SEFAZ poderá aumentar o limite para contribuintes que operam com valores acima desse teto. | Obrig. | 650 | Rej. | Rejeição: Valor total do serviço superior ao limite permitido (R$ 9.999.999,99) |
| **G042** | - Verificar se Valor do ICMS corresponde ao Valor da base de cálculo X Aliquota.<br><br>**Observação**: Aplicar a regra de acordo com o grupo de informações de imposto informado (infCte/imp/ICMS). *Considerar uma tolerância de R$ 0,01 para mais ou para menos.* | Obrig. | 675 | Rej. | Rejeição: Valor do imposto não corresponde à base de cálculo X alíquota |
| **G043** | Valor total a receber <mark>(vTRec)</mark> deve ser menor ou igual ao Valor Total da Prestação do Serviço (<mark>vTPrest</mark>) | Obrig. | 531 | Rej. | Rejeição: Valor a receber deve ser menor ou igual Valor da Prestação |

## Validações do CFOP

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
| --- | --- | --- | --- | --- | --- |
| **G044** | Verificar se o CFOP informado pertence a operação de transporte.<br><br>**Observação**: Verificar a relação de CFOP válidos no item 12 do MOC Visão Geral | Obrig. | 676 | Rej. | Rejeição: CFOP informado inválido |
| **G045** | Verificar o CFOP informado considerando a seguinte matriz:<br>Se UF de início da prestação = UF de fim de prestação (e UF fim &lt;&gt; EX)<br>CFOP deve iniciar por 5<br>Se UF de início da prestação &lt;&gt; UF de fim da prestação (e UF fim &lt;&gt; EX)<br>CFOP deve iniciar por 6<br>Se UF fim de prestação = EX<br>CFOP deve iniciar por 7 | Obrig. | 519 | Rej. | Rejeição: CFOP inválido para operação |
| **G046** | Se UF do emitente for diferente da UF de início da prestação e UF de início e fim da prestação forem diferentes de EX:<br>CFOP deve ser igual a 5932 ou 6932<br><br>**Exceção**: regra não será aplicada na hipótese de Regime Especial da NFF | Obrig. | 524 | Rej. | Rejeição: CFOP inválido, informar 5932 ou 6932 |
| **G047** | Se UF do emitente for igual a UF de início da prestação e UF de início e fim da prestação forem diferentes de EX:<br>CFOP não pode ser 5932 ou 6932<br><br>**Exceção**: regra não será aplicada na hipótese de Regime Especial da NFF | Obrig. | 954 | Rej. | Rejeição: CFOP inválido, não informar 5932 ou 6932 |

## Validações do CTe de Substituição

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
| --- | --- | --- | --- | --- | --- |
| **G048** | Se Tipo do CTe= 6 (Substituição do CTe Simplificado):<br>- O tipo de emissão deve ser normal | Obrig. | 503 | Rej. | Rejeição: CTe substituto deve ter tipo de emissão = normal |
| **G049** | Se Tipo do CTe= 6 (Substituição do CTe Simplificado):<br>- Deve existir o grupo de informações do CTe de substituição | Obrig. | 505 | Rej. | Rejeição: Grupo CTe de Substituição não informado para o CTe de Substituição |
| **G050** | Se Tipo do CTe= 6 (Substituição do CTe Simplificado):<br>- Validar chave de acesso do CTe substituído<br><br>Retornar o motivo da rejeição da Chave de Acesso: CNPJ zerado ou inválido, Ano < 2009 ou maior que atual, Mês inválido (0 ou > 12), Modelo diferente de 57, Número zerado, Tipo de emissão inválido, UF inválida ou DV inválido)<br>[chCTe:99999999999999999999999999999999999999999999]<br>[Motivo: XXXXXXXXXXXX] | Obrig. | 847 | Rej. | Rejeição: Chave de acesso do CTe substituído inválida |
| **G051** | <!-- p.16 -->Se Tipo do CTe= 6 (Substituição do CTe Simplificado):<br>- O CTe substituído deve existir<br>Acesso BD CTE (Chave: UF, CNPJ Emit, Modelo, Série, Nro) | Obrig. | 568 | Rej. | Rejeição: CTe a ser substituído inexistente |
| **G052** | Se Tipo do CTe= 6 (Substituição do CTe Simplificado):<br>- CTe substituído não pode existir com diferença na Chave de Acesso<br>Retornar a chave de acesso já autorizada, o número do protocolo e data de autorização do CTe<br>[chCTe:99999999999999999999999999999999999999999999]<br>[nProt:999999999999999][dhAut: AAAA-MM-DDTHH:MM:SS TZD] | Obrig. | 673 | Rej. | Rejeição: CTe substituído com diferença de Chave de Acesso<br>[chCTe:99999999999999999999999999999999999999999999]<br>[nProt:999999999999999][dhAut: AAAA-MM-DDTHH:MM:SS TZD] |
| **G053** | Se Tipo do CTe= 6 (Substituição do CTe Simplificado):<br>- O CTe substituído não pode estar cancelado | Obrig. | 569 | Rej. | Rejeição: CTe a ser substituído deve estar com a situação autorizada (não pode estar cancelado) |
| **G054** | Se Tipo do CTe= 6 (Substituição do CTe Simplificado):<br>- O CTe substituído não pode ter sido substituído anteriormente | Obrig. | 570 | Rej. | Rejeição: CTe a ser substituído não pode ter sido substituído anteriormente |
| **G055** | Se Tipo do CTe= 6 (Substituição do CTe Simplificado):<br>- O CTe substituído não pode ter sido complementado | Obrig. | 659 | Rej. | Rejeição: CTe substituído não pode ter sido complementado |
| **G056** | Se Tipo do CTe= 6 (Substituição do CTe Simplificado):<br>- O CTe substituído deve possuir evento de Prestação do Serviço em Desacordo em situação autorizado.<br><br>**Observação**: Eventos de Cancelamento do Evento de Prestação em desacordo anulam eventos de Prestação em Descordo | Obrig. | 739 | Rej. | Rejeição: O CTe substituído deve possuir evento de Prestação do Serviço em Desacordo |
| **G057** | Se Tipo do CTe= 6 (Substituição do CTe Simplificado):<br>- O CTe substituído deve ser do Tipo = 5 (Simplificado) ou 6 (Substituição do CTe Simplificado) | Obrig. | 955 | Rej. | Rejeição: CTe a ser substituído deve ter Tipo = 5 (simplificado) ou 6 (Substituição de CTe Simplificado) |
| **G058** | Se Tipo do CTe= 6 (Substituição do CTe Simplificado):<br>- CNPJ do emitente do CTe substituto deve ser igual ao informado no CTe substituído | Obrig. | 510 | Rej. | Rejeição: CNPJ do emitente do CTe substituto deve ser igual ao informado no CTe substituído |
| **G059** | Se Tipo do CTe= 6 (Substituição do CTe Simplificado):<br>- IE do emitente do CTe substituto deve ser igual ao informado no CTe substituído | Obrig. | 553 | Rej. | Rejeição: A IE do emitente do CTe substituto deve ser igual ao informado no CTe substituído |
| **G060** | Se Tipo do CTe= 6 (Substituição do CTe Simplificado):<br>- UF de início da prestação do CTe substituto deve ser igual ao informado no CTe substituído | Obrig. | 559 | Rej. | Rejeição: A UF de início da prestação deve ser igual ao informado no CTe substituído |
| **G061** | Se Tipo do CTe= 6 (Substituição do CTe Simplificado):<br>- UF de fim da prestação do CTe substituto deve ser igual ao informado no CTe substituído | Obrig. | 560 | Rej. | Rejeição: A UF de fim da prestação deve ser igual ao informado no CTe substituído |
| **G062** | Se Tipo do CTe= 6 (Substituição do CTe Simplificado) e informado grupo de notas fiscais (infNFe):<br>- Todas NFe transportadas no CTe substituto devem ser as mesmas informadas no CTe substituído<br><br>**Observação**: verificar as NFe relacionadas em cada item | Obrig. | 734 | Rej. | Rejeição: As NFe transportadas do CTe substituto devem ser iguais às informadas no CTe substituído |
| **G063** | Se Tipo do CTe= 6 (Substituição do CTe Simplificado) e informado grupo de documentos anteriores (infDocAnt):<br>- Todos CTe relacionados no CTe substituto devem ser os mesmos informados no CTe substituído<br><br>**Observação**: verificar os CTe relacionados em cada item | Obrig. | 956 | Rej. | Rejeição: Os CTe anteriores relacionados no CTe substituto devem ser iguais aos informados no CTe substituído |
| **G064** | Se Tipo do CTe= 6 (Substituição do CTe Simplificado):<br>- O CTe substituído deve ser do mesmo tipo de serviço do CTe substituto | Obrig. | 834 | Rej. | Rejeição: O tipo de serviço do CTe de substituição deve ser igual ao CTe substituído |
| **G065** | Se Tipo do CTe= 6 (Substituição do CTe Simplificado):<br>- A autorização do CTe de substituição deve ocorrer em até 60 dias, ou outro limite conforme critério definido pela SEFAZ (a SEFAZ Virtual deve considerar a hora local do emissor para a validação) da data de autorização do CTe objeto substituição | Obrig. | 563 | Rej. | Rejeição: A substituição de um CTe deve ocorrer no prazo máximo de 60 dias contados da data de autorização do CTe objeto de Substituição |

## Validações da Alteração de Tomador

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
| --- | --- | --- | --- | --- | --- |
| **G066** | Se Tipo do CTe= 6 (Substituição do CTe Simplificado) sem informar indicador de alteração de tomador &lt;indAlteraToma&gt;:<br><br>- A marcação do tomador do CTe substituto deve ser igual a informada no CTe substituído | Obrig. | 738 | Rej. | Rejeição: A indicação do tomador do CTe de substituição deve ser igual à do CTe substituído |
| **G067** | <!-- p.17 -->Se Tipo do CTe= 6 (Substituição do CTe Simplificado), informado indicador de alteração de tomador &lt;indAlteraToma&gt;:<br>- O tomador indicado no CTe substituto deve ser diferente do indicado no CTe substituído | Obrig. | 742 | Rej. | Rejeição: Tomador do CTe substituto igual ao informado no CTe substituído para operação de alteração de tomador |

## Validações da Data de Emissão

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
| --- | --- | --- | --- | --- | --- |
| **G068** | Data/Hora de Emissão posterior à Data/Hora de Recebimento<br>(A SEFAZ Virtual deve considerar a hora local do emissor para a validação).<br>A SEFAZ deve tolerar uma diferença máxima de 5 minutos quando a data/hora de emissão for maior que a data de recebimento, em função da sincronização de horário de servidores. | Obrig. | 212 | Rej. | Rejeição Data de emissão CTe posterior a data de recebimento |
| **G069** | Se tipo de emissão for diferente de EPEC (tpEmis=4):<br>Data-Hora de Emissão com atraso superior a 168 horas em relação ao horário de recepção na SEFAZ Autorizadora. | Obrig. | 228 | Rej. | Rejeição: Data de Emissão muito atrasada |

## Validações do Emitente

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
| --- | --- | --- | --- | --- | --- |
| **G070** | Validar CNPJ Emitente (dígito controle, zeros ou nulo)<br><br>**Exceção**: O CNPJ não será informado se a forma de emissão (tpEmis) do CTe for Regime Especial da Nota Fiscal Fácil (3), em seu lugar será informado o CPF do TAC | Obrig. | 207 | Rej. | Rejeição: CNPJ do emitente inválido |
| **G071** | IE Emitente deve ser informada (zeros ou nulo)<br><br>**Exceção**: A IE não será informada se a forma de emissão (tpEmis) do CTe for Regime Especial da Nota Fiscal Fácil (3)<br><br>**Exceção 2**: Se CTe gerado por PAA (grupo: infPAA) a IE do Emitente é opcional (Contribuinte não inscrito na UF) | Obrig. | 229 | Rej. | Rejeição: IE do emitente não informada |
| **G072** | Se informada IE do emitente (tpEmis diferente de 3):<br>Validar IE Emitente (erro no dígito de controle)<br>Obs.: Antes da validação, a IE deverá ser normalizada, na aplicação da SEFAZ, com o acréscimo de zeros não significativos previstos na definição do formato da IE, se necessário.<br><br>Exemplo: IE informada 130000019, formato da IE: NNNNNNNNNND, a IE deve ser padronizada para 00130000019, com o acréscimo dos zeros não significativos necessários para a validação do dígito verificador. | Obrig. | 209 | Rej. | Rejeição: IE do emitente inválida |
| **G073** | Validar IE do Substituto Tributário, quando esta for informada (erro no dígito de controle)<br>**Observação**: Antes da validação, a IE deverá ser normalizada, na aplicação da SEFAZ, com o acréscimo de zeros não significativos previstos na definição do formato da IE, se necessário.<br><br>**Exemplo**: IE informada 130000019, formato da IE: NNNNNNNNNND, a IE deve ser padronizada para 00130000019, com o acréscimo dos zeros não significativos necessários para a validação do dígito verificador<br>**Exemplo**:A validação dessa IE deverá levar em consideração da UF do tomador do CTe | Obrig. | 614 | Rej. | Rejeição: IE do Substituto Tributário inválida |
| **G074** | Se informada IE do emitente (tpEmis diferente de 3):<br>Acessar Cadastro de Emitentes (Chave: UF, IE):<br>- IE emitente não cadastrada | Facult. | 230 | Rej. | Rejeição: IE do emitente não cadastrada |
| **G075** | Se informada IE do emitente (tpEmis diferente de 3):<br>- IE Emitente deve estar vinculada ao CNPJ (tratar Regime Especial de IE única) | Obrig. | 231 | Rej. | Rejeição: IE do emitente não vinculada ao CNPJ |
| **G076** | Se informada IE do emitente (tpEmis diferente de 3):<br>- Emitente deve estar habilitado na base de dados para emissão do CTe<br>**Observação**: IE em situação irregular perante o fisco deve rejeitar por esta regra | Obrig. | 203 | Rej. | Rejeição: Emissor não habilitado para emissão do CTe |
| **G077** | Se informada IE do emitente (tpEmis diferente de 3):<br>- IE emitente deve estar autorizada a emitir CTe para o modal de transporte informado | Obrig. | 585 | Rej. | Rejeição: IE Emitente não autorizada a emitir CTe para o modal informado |
| **G081** | Município do Emitente diverge da UF (verificar se as 2 posições da esquerda do código de município que identifica <!-- p.18 -->o código da UF é compatível com a sigla da UF informada)<br>**Exceção**: regra não será aplicada na hipótese de Regime Especial da NFF | Obrig. | 712 | Rej. | Rejeição: Código de Município diverge da UF de localização do emitente |
| **G082** | Código do Município Emitente inexistente (Tabela Municípios do IBGE) | Obrig. | 713 | Rej. | Rejeição: Município do Emitente inexistente |

(\*1) Validação possível na operação interestadual ou no ambiente da SEFAZ Virtual utilizando o CCC-Cadastro Centralizado de Contribuintes.

## Validações do Tomador

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
| --- | --- | --- | --- | --- | --- |
| **G083** | Se CNPJ Tomador informado:<br>- Validar CNPJ do Tomador (dígito de controle, zeros) | Obrig. | 444 | Rej. | Rejeição: CNPJ do tomador inválido |
| **G084** | Se CPF Tomador informado:<br>- Validar CPF do Tomador (dígito de controle, zeros) | Obrig. | 445 | Rej. | Rejeição: CPF do tomador inválido |
| **G085** | Se Tomador informado:<br>- Município deve pertencer à UF (verificar se as 2 posições da esquerda do código de município que identifica o código da UF estão de acordo com a sigla da UF informada) | Obrig. | 447 | Rej. | Rejeição: Código de Município diverge da UF de localização tomador |
| **G086** | Se Tomador informado:<br>- Código do Município deve existir (Tabela Municípios do IBGE) | Obrig. | 536 | Rej. | Rejeição: Município do Tomador inexistente |
| **G087** | Se IE Tomador informado:<br>- Validar IE do Tomador (erro no dígito de controle)<br>**Observação**: Antes da validação, a IE deverá ser normalizada, na aplicação da SEFAZ, com o acréscimo de zeros não significativos previstos na definição do formato da IE se necessário.<br>Exemplo: IE informada 130000019, formato da IE: NNNNNNNNNND, a IE deve ser padronizada para 00130000019, com o acréscimo dos zeros não significativos necessários para a validação do dígito verificador. | Obrig. | 448 | Rej. | Rejeição: IE do tomador inválida |
| **G088** | Se IE Tomador informada:<br>Acessar Cadastro de Contribuinte da UF (Chave: IE Tomador) (\*1)<br>- IE deve estar cadastrada | Facult. | 489 | Rej. | Rejeição: IE do tomador não cadastrada |
| **G089** | Se e IE e CNPJ Tomador informados:<br>Acessar Cadastro de Contribuinte da UF (Chave: IE Tomador) (\*1)<br>- IE deve estar vinculada ao CNPJ | Facult. | 490 | Rej. | Rejeição: IE do tomador não vinculada ao CNPJ |
| **G090** | Se e IE Tomador = “ISENTO” ou não informada<br>Acessar Cadastro de Contribuinte da UF (\*1)<br>- Tomador possui IE ativa na UF | Facult. | 719 | Rej. | Rejeição: IE do Tomador não informada |
| **G091** | Se Inscr. SUFRAMA do Tomador informada:<br>- Verificar dígito controle da Inscr. SUFRAMA | Obrig. | 235 | Rej. | Rejeição: Inscrição SUFRAMA inválida |
| **G092** | Se Inscr. SUFRAMA informada:<br>- Verificar UF tomador = AC-Acre, ou AM-Amazonas, ou RO-Rondônia, ou RR-Roraima, ou AP-Amapá (só para municípios 1600303-Macapá e 1600600-Santana) | Obrig. | 251 | Rej. | Rejeição: UF/Município destinatário não pertence a SUFRAMA |

(\*1) Validação possível na operação interestadual ou no ambiente da SEFAZ Virtual utilizando o CCC-Cadastro Centralizado de Contribuintes

Não deve ser validado para CTe com tipo de emissão EPEC

## Validações Banco de Dados CTe

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
| --- | --- | --- | --- | --- | --- |
| **G093** | Acessar BD CTE (Chave: UF, CNPJ/CPF Emit, Modelo, Série, Nro):<br>- Verificar Duplicidade de CTe com diferença na Chave de Acesso (Campo de Código Numérico difere)<br>Retornar a chave de acesso já autorizada, o número do protocolo e data de autorização<br>[chCTe:99999999999999999999999999999999999999999999]<br>[nProt:999999999999999][dhAut: AAAA-MM-DDTHH:MM:SS TZD] | Obrig. | 539 | Rej. | Rejeição: Duplicidade de CTe, com diferença na Chave de Acesso<br>[chCTe:99999999999999999999999999999999999999999999]<br>[nProt:999999999999999][dhAut: AAAA-MM-DDTHH:MM:SS TZD] |
| **G094** | Acessar BD CTE (Chave: UF, CNPJ/CPF Emit, Modelo, Série, Nro):<br>- Verificar Duplicidade de CTe<br>Retornar Protocolo e data de autorização.<br>[nProt:999999999999999][dhAut: AAAA-MM-DDTHH:MM:SS TZD].<br>**Observação**: Esta validação leva em consideração o ambiente de autorização do DF-e | Obrig. | 204 | Rej. | Rejeição: Duplicidade de CTe<br>[nProt:999999999999999][dhAut: AAAA-MM-DDTHH:MM:SS TZD] |
| **G095** | - Verificar se CTe está cancelado<br>Retornar Protocolo e data de autorização do evento de cancelamento.<br>[nProt:999999999999999][dhCanc: AAAA-MM-DDTHH:MM:SS TZD] | Obrig. | 218 | Rej. | Rejeição: CTe já está cancelado na base de dados da SEFAZ<br>[nProt:999999999999999][dhCanc: AAAA-MM-DDTHH:MM:SS TZD]. |

<!-- p.19 -->

## Validações do Início e Fim da Prestação

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
| --- | --- | --- | --- | --- | --- |
| **G096** | Município de envio do CTe diverge da UF (verificar se as 2 posições da esquerda do código de município que identifica o código da UF estão de acordo com a sigla da UF informada) | Obrig. | 493 | Rej. | Rejeição: Código de Município diverge da UF de envio |
| **G097** | Código do Município de envio do CTe inexistente (Tabela Municípios do IBGE) | Obrig. | 537 | Rej. | Rejeição: Município de Envio inexistente |
| **G098** | Município de início da prestação diverge da UF (verificar se as 2 posições da esquerda do código de município que identifica o código da UF estão de acordo com a sigla da UF informada)<br>**Observação**: Essa validação deve ser aplicada a cada item informado no grupo det. Retornar o número do item que ocorreu a rejeição. | Obrig. | 456 | Rej. | Rejeição: Código de Município diverge da UF de início da prestação<br>[nItem: 999] |
| **G099** | Código do Município de início da prestação inexistente (Tabela Municípios do IBGE)<br>**Observação**: Essa validação deve ser aplicada a cada item informado no grupo det. Retornar o número do item que ocorreu a rejeição. | Obrig. | 541 | Rej. | Rejeição: Município de início da prestação inexistente<br>[nItem: 999] |
| **G100** | Município de término da prestação diverge da UF (verificar se as 2 posições da esquerda do código de município que identifica o código da UF estão de acordo com a sigla da UF informada)<br>**Observação**: Essa validação deve ser aplicada a cada item informado no grupo det. Retornar o número do item que ocorreu a rejeição. | Obrig. | 414 | Rej. | Rejeição: Código de Município diverge da UF de término da prestação<br>[nItem: 999] |
| **G101** | Código do Município de término da prestação inexistente (Tabela Municípios do IBGE)<br>**Observação**: Essa validação deve ser aplicada a cada item informado no grupo det. Retornar o número do item que ocorreu a rejeição. | Obrig. | 542 | Rej. | Rejeição: Município de término da prestação inexistente<br>[nItem: 999] |

## Validações do EPEC

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
| --- | --- | --- | --- | --- | --- |
| **G102** | Rejeitar se forma de emissão do CTe for 4 (EPEC) e Tipo de CTe DIFERENTE de Simplificado | Obrig. | 957 | Rej. | Rejeição: CTe EPEC deve ser do tipo Simplificado |
| **G103** | Se forma de emissão do CTe for diferente de 4 (EPEC):<br>Acessar BD CTe-EVENTOS (Chave: UF, CNPJ Emit, Modelo, Série, Nro obtidos na chave de acesso dos eventos registrados).<br>- Verificar se existe EPEC para a chave natural do CTe<br>**Observação**: Concatenar a chave de acesso do CTe da EPEC na resposta | Obrig. | 640 | Rej. | Rejeição: Tipo de emissão do CTe difere de EPEC com EPEC autorizado na SVC-XX para este documento. |
| **G104** | Se forma de emissão do CTe for 4 (EPEC):<br>Acessar BD CTe-EVENTOS pela chave de acesso:<br>- Verificar se existe Evento EPEC autorizado na SVC-[XX].<br><br>**Observação**: O processo de sincronização entre as SEFAZ poderá sofrer algum atraso. Em caso de receber essa rejeição, a empresa emitente deverá tentar a transmissão do CTe até que o EPEC esteja sincronizado com a SEFAZ Autorizadora. | Obrig. | 641 | Rej. | Rejeição: O evento prévio deste CTe não foi autorizado na SVC ou ainda não foi sincronizado.<br>[OBS: Em caso de atraso na sincronização, favor aguardar alguns instantes para nova tentativa de transmissão] |
| **G105** | Se forma de emissão do CTe for 4 (EPEC):<br>- Valor de ICMS, Valor de ICMS ST, Valor da Prestação e Valor Total da Carga do CTe devem ser iguais aos informados no evento prévio. | Obrig. | 642 | Rej. | Rejeição: Os valores de ICMS, ICMS ST, Prestação e Total da Carga do CTe devem ser iguais aos informados no EPEC. |
| **G106** | Se forma de emissão do CTe for 4 (EPEC):<br>- Tipo do Tomador do Serviço, CNPJ/CPF do Tomador e IE do tomador do CTe devem ser iguais aos informados no evento prévio. | Obrig. | 643 | Rej. | Rejeição: As informações do tomador de serviço do CTe devem ser iguais as informadas no EPEC |
| **G107** | Se forma de emissão do CTe for 4 (EPEC):<br>- Modal do CTe deve ser igual ao informado no evento prévio. | Obrig. | 644 | Rej. | Rejeição: A informação do modal do CTe deve ser igual a informada no EPEC |
| **G108** | Se forma de emissão do CTe for 4 (EPEC):<br>- UF de início e UF de fim de prestação do CTe devem ser iguais aos informados no evento prévio. | Obrig. | 645 | Rej. | Rejeição: A UF de início e fim de prestação do CTe devem ser iguais as informadas no EPEC. |
| **G109** | Se forma de emissão do CTe for 4 (EPEC):<br>- Data de emissão do CTe deve ser menor ou igual a data de autorização do evento prévio | Obrig. | 697 | Rej. | Rejeição: CTe com emissão anterior ao evento prévio (EPEC) |
| **G110** | Se forma de emissão do CTe for 4 (EPEC):<br>- Data de emissão do CTe deve ser igual a data de emissão do evento prévio | Obrig. | 756 | Rej. | Rejeição: Data de emissão do CTe deve ser igual à data de emissão da EPEC |

<!-- p.20 -->

## Validações dos Autorizados ao XML do CTe

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
| --- | --- | --- | --- | --- | --- |
| **G111** | Se informada autorização download XML com CNPJ:<br>- Validar CNPJ (zeros ou dígito inválido) | Obrig. | 699 | Rej. | Rejeição: CNPJ autorizado para download inválido |
| **G112** | Se informada autorização download do XML com CPF:<br>- Validar CPF (zeros, nulo, números repetidos (111, 222, etc.), ou dígito de controle inválido) | Obrig. | 700 | Rej. | Rejeição: CPF autorizado para download inválido |
| **G113** | Se informada autorização download XML:<br>- Verificar se existe duplicidade de CPF/CNPJ informado no CTe | Obrig. | 715 | Rej. | Rejeição: Documento autorizado ao XML duplicado no CTe |
| **G114** | Verificar se CNPJ/CPF informado já não existe declarado como um dos atores do CTe | Obrig. | 828 | Rej. | Rejeição: CNPJ/CPF autorizado já declarado no CTe (remet/dest/exped/receb/tom) |

## Validações do Responsável Técnico

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
| --- | --- | --- | --- | --- | --- |
| **G115** | Não informado o grupo de informações do responsável técnico<br>**Observação**: Implementação à critério da UF | Facul. | 867 | Rej. | Rejeição: Obrigatória as informações do responsável técnico |
| **G116** | Se informado grupo do responsável técnico (infRespTec):<br>- Validar CNPJ (dígito controle, zeros ou nulo). | Facul. | 836 | Rej. | Rejeição: CNPJ do desenvolvedor do sistema inválido (zerado ou dígito inválido) |

## Validações do QR Code

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
| --- | --- | --- | --- | --- | --- |
| **G117** | O grupo de informações do QRCode (infCTeSupl) deve ser informado | Obrig. | 850 | Rej. | Rejeição: O QR Code do CTe deve ser informado |
| **G118** | Endereço do site do Portal Nacional para a Consulta via QR Code difere do previsto.<br>Nota: O uso diferenciado de maiúsculas ou minúsculas não deve ser considerado na validação.<br>Observação: Para consultar as URLs utilizadas no QR Code, acesse: https://dfe-portal.svrs.rs.gov.br/CTe/Servicos | Obrig. | 851 | Rej. | Rejeição: Endereço do site da UF da Consulta via QR Code diverge do previsto |
| **G119** | Parâmetro Chave de Acesso no QR Code diverge da Chave de Acesso do CTe | Obrig. | 852 | Rej. | Rejeição: Parâmetro chave de acesso do QR Code divergente do CTe |
| **G120** | Se tipo de emissão for igual a EPEC (tpEmis=4):<br>O parâmetro sign deve informado no QR-Code | Obrig. | 853 | Rej. | Rejeição: Parâmetro sign não informado no QR Code para emissão em contingência |
| **G121** | Se tipo de emissão for igual a Normal ou SVC:<br>O parâmetro sign não deve ser informado no QR-Code | Obrig. | 854 | Rej. | Rejeição: Parâmetro sign não deve ser informado no QR Code para emissão Normal |
| **G122** | Se tipo de emissão for igual a EPEC (tpEmis=4):<br>Valor da assinatura (sign) do QR-Code difere do valor calculado | Obrig. | 855 | Rej. | Rejeição: Assinatura do QR-Code difere do calculado |

As validações referentes ao QR Code serão aplicadas somente após data previamente acertada entre Fisco e empresas, podendo essa data ser de prazo distinto e superior da data de entrada em produção deste MOC.

## Validações da NFF

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
| --- | --- | --- | --- | --- | --- |
| **G123** | Se a forma de emissão do CTe (tpEmis) for diferente de Regime Especial da Nota Fiscal Fácil (3):<br>- O grupo de informações do pedido da NFF (infSolicNFF) não pode estar preenchido | Obrig. | 902 | Rej. | Rejeição: Grupo de informações do pedido de emissão da NFF deve ser preenchido apenas para forma de emissão NFF527 |

## 2.3.1 Final do Processamento do CTe

A validação do CTe poderá resultar em:

- **Rejeição** – O CTe será descartado, não sendo armazenado no Banco de Dados podendo ser corrigido e novamente transmitido;
- **Autorização de uso** – O CTe será armazenado no Banco de Dados;

| Validação de forma do CTe | Consequência: Para o contribuinte | Consequência: Banco de Dados |
| --- | --- | --- |
| Inválida | Corrigir CTe | Não gravar |
| Válida | Prestação autorizada | Gravar |

Para cada CTe autorizada será atribuído um número de protocolo da SEFAZ.
