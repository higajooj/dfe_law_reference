# 4 Serviço Síncrono de Recepção MDF-e (Modelo 58)

## Validação do Certificado Digital do Transmissor (protocolo TLS)

| # | Regra de Validação | Crítica | Msg | Efeito |
|---|---|---|---|---|
| **A08** | Se a forma de emissão (tpEmis) do MDF-e for Regime Especial da Nota Fiscal Fácil (3):<br>Rejeitar se o certificado de transmissor for diferente do certificado e-CNPJ da SEFAZ Virtual RS | Obrig. | 900 | Rej. |

## Validações do Certificado utilizado na Assinatura Digital do MDF-e

| # | Regra de Validação | Crítica | Msg | Efeito |
|---|---|---|---|---|
| **E08** | Se a forma de emissão (tpEmis) do MDF-e for Regime Especial da Nota Fiscal Fácil (3):<br>Rejeitar se o certificado de assinatura for diferente do certificado da SEFAZ Virtual RS | Obrig. | 901 | Rej. |

<!-- p.08 -->

## Validações da Assinatura Digital do MDF-e

| # | Regra de Validação | Crítica | Msg | Efeito |
|---|---|---|---|---|
| **F03** | CNPJ-Base do Emitente difere do CNPJ-Base do Certificado Digital<br><br>**Exceção**: Se a forma de emissão do MDF-e for Regime Especial da Nota Fiscal Fácil, o CNPJ de assinatura será o e-CNPJ da SVRS | Obrig. | 213 | Rej. |

## Validações das Regras de Negócio MDF-e

| # | Regra de Validação | Crítica | Msg | Efeito |
|---|---|---|---|---|
| **G002** | Código da UF do Emitente difere da UF do Web Service<br>**Exceção: regra não será aplicada na hipótese de Regime Especial da NFF** | Obrig. | 226 | Rej. |
| **G003** | Sigla da UF do Emitente difere da UF do Web Service<br>**Exceção: regra não será aplicada na hipótese de Regime Especial da NFF** | Obrig. | 247 | Rej. |
| **G032** | Se informado grupo CT-e, para cada um dos CT-e relacionados:<br>Acesso BD CT-e da SEFAZ Autorizadora (Chave: CNPJ/CPF Emit, Modelo, Serie, Nro.) com as informações da chave chCTe indicado.<br>&nbsp;&nbsp;&nbsp;&nbsp;- Verificar se CT-e existe<br><br>Observação: Retornar a chave do CT-e inexistente<br>Exceção: CT-e em contingência fica dispensado dessa validação | Obrig. | 671 | Rej. |
| **G056** | Se informado CPF do Emitente:<br>Série informada deve estar na faixa 920-969<br><br>**Exceção**: MDF-e que possuir forma de emissão do Regime Especial da Nota Fiscal Fácil deverá aceitar a série indicada no app para Emitente com CPF | Obrig. | 233 | Rej. |
| **G057** | Se informado CPF do Emitente:<br>O tipo de emitente deve ser Transporte Próprio (tpEmit=2)<br><br>**Exceção**: MDF-e que possuir forma de emissão do Regime Especial da Nota Fiscal Fácil deverá aceitar tipo de emitente Transportador de Carga (tpEmit=1) para Emitente com CPF | Obrig. | 234 | Rej. |
| **G058** | IE Emitente deve ser informada (zeros ou nulo)<br><br>**Exceção**: A IE não será informada se a forma de emissão (tpEmis) do MDF-e for Regime Especial da Nota Fiscal Fácil (3) | Obrig. | 229 | Rej. |
| **G059** | Se informada IE do emitente (tpEmis diferente de 3):<br>Validar IE Emitente (erro no dígito de controle)<br>Obs.: Antes da validação, a IE deverá ser normalizada, na aplicação da SEFAZ, com o acréscimo de zeros não significativos previstos na definição do formato da IE, se necessário.<br>Exemplo: IE informada 130000019, formato da IE: NNNNNNNNNND, a IE deve ser padronizada para 00130000019, com o acréscimo dos zeros não significativos necessários para a validação do dígito verificador. | Obrig. | 209 | Rej. |
| **G060** | Se informada IE do emitente (tpEmis diferente de 3):<br><br>- Emitente deve estar habilitado na base de dados para emissão do MDF-e | Obrig. | 203 | Rej. |
| **G061** | Se informada IE do emitente (tpEmis diferente de 3):<br><br>Acessar Cadastro de Emitentes (Chave: UF, IE):<br>- IE emitente não cadastrada | Facult. | 230 | Rej. |
| **G062** | Se informada IE do emitente (tpEmis diferente de 3):<br><br>- IE Emitente deve estar vinculada ao CNPJ (tratar Regime Especial de IE única) | Obrig. | 231 | Rej. |
| **G063** | Município do Emitente diverge da UF (verificar se as 2 posições da esquerda do código de município que identifica o código da UF é compatível com a sigla da UF informada)<br><mark>**Exceção**: regra não será aplicada na hipótese de Regime Especial da NFF</mark> | Obrig. | 407 | Rej |

<!-- p.09 -->

| # | Regra de Validação | Crítica | Msg | Efeito |
|---|---|---|---|---|
| **G071** | Se modal rodoviário:<br>- Verificar se existe MDF-e não encerrado, para a placa principal (mesmo CNPJ base / CPF do emitente do MDF-e, mesma placa, mesmo tipo de emitente e mesma UF descarregamento).<br>Observação: retornar chave de acesso e protocolo de autorização mais antigo que causa o bloqueio<br><br>**Exceção**: essa regra não deverá ser aplicada para MDF-e com forma de emissão (tpEmis=3) Regime Especial da Nota Fiscal Fácil | Obrig. | 611 | Rej. |
| **G072** | Verificar se existe MDF-e não encerrado para o CNPJ / CPF do emitente com mais de 30 dias desde a autorização.<br>Observação: retornar chave de acesso e protocolo de autorização mais antigo que causa o bloqueio.<br><br>**Exceção**: essa regra não deverá ser aplicada para MDF-e com forma de emissão (tpEmis=3) Regime Especial da Nota Fiscal Fácil | Obrig. | 686 | Rej. |
| **G073** | Se modal rodoviário:<br>Verificar se existe MDF-e não encerrado para a placa do veículo com o mesmo CNPJ Base / CPF do emitente com mais de 5 dias desde a autorização indicando no máximo duas UF de percurso além do carregamento e descarregamento.<br>Observação: retornar chave de acesso e protocolo de autorização mais antigo que causa o bloqueio.<br><br>**Exceção**: essa regra não deverá ser aplicada para MDF-e com forma de emissão (tpEmis=3) Regime Especial da Nota Fiscal Fácil | Obrig. | 462 | Rej. |
| **G074** | Se modal rodoviário:<br>- Verificar se existe MDF-e não encerrado, para a placa principal (mesmo CNPJ base / CPF do emitente do MDF-e, mesma placa, mesmo tipo de emitente e contendo o par UF de Carregamento/ UF de Descarregamento no sentido oposto ao MDF-e que está sendo autorizado).<br>Observação: retornar chave de acesso e protocolo de autorização mais antigo que causa o bloqueio<br><br>**Exceção**: essa regra não deverá ser aplicada para MDF-e com forma de emissão (tpEmis=3) Regime Especial da Nota Fiscal Fácil | Obrig. | 662 | Rej. |
| **G077** | Se modal Rodoviário e Tipo Emitente for igual a Prestador de Serviço de Transporte (tpEmit=1) ou transportador que emitirá CT-e globalizado (tpEmit=3):<br>-Rejeitar se o grupo de informações do seguro da carga não estiver informado<br><br>**Exceção**: o grupo do seguro poderá não ser informado para MDF-e com forma de emissão (tpEmis=3) Regime Especial da Nota Fiscal Fácil | Obrig. | 698 | Rej |
| **G078** | Se modal Rodoviário e Tipo Emitente for igual a Prestador de Serviço de transporte (tpEmit=1) ou transportador que emitirá CT-e globalizado (tpEmit=3) e informado grupo de seguro da carga:<br>-Rejeitar se alguma informação do grupo seguro não estiver informada<br>Observação: Verificar preenchimento de CNPJ da seguradora, infSeg, nApol e nAver<br><br>**Exceção**: o nAver poderá não ser informado para MDF-e com forma de emissão (tpEmis=3) Regime Especial da Nota Fiscal Fácil | Obrig. | 699 | Rej |
| **G079** | Se modal Rodoviário e Tipo Emitente for igual a Prestador de Serviço de Transporte (tpEmit=1) ou transportador que emitirá CT-e globalizado (tpEmit=3), informado grupo de seguro da carga e indicado responsável pelo seguro contratante (tpResp=2):<br>- Rejeitar se não estiver informado CNPJ ou CPF do responsável pelo seguro<br><br>**Exceção**: o responsável pelo seguro poderá não ser informado para MDF-e com forma de emissão (tpEmis=3) Regime Especial da Nota Fiscal Fácil | Obrig. | 542 | Rej. |
| **G092** | Se modal rodoviário e informado RNTRC<br>Verificar situação do RNTRC<br><br>**Exceção**: essa regra não deverá ser aplicada para MDF-e com forma de emissão (tpEmis=3) Regime Especial da Nota Fiscal Fácil | Facult. | 682 | Rej. |
| **G105** | Se modal rodoviário e Tipo Emitente for igual a Prestador de Serviço de Transporte (tpEmit=1) ou transportador que emitirá CT-e globalizado (tpEmit=3) e MDF-e possuir apenas um DF-e transportado no grupo infDoc:<br><!-- p.10 -->O grupo de informações da carga lotação (infLotacao) deve estar informado<br><br>Observação: regra de validação aplicável em produção a partir de 06/07/2020 [COVID-19]<br><br>**Exceção**: essa regra não deverá ser aplicada para MDF-e com forma de emissão (tpEmis=3) Regime Especial da Nota Fiscal Fácil | Facult. | 726 | Rej. |
| **G106** | Se a forma de emissão do MDF-e (tpEmis) for diferente de Regime Especial da Nota Fiscal Fácil (3):<br>- O grupo de informações do pedido da NFF (infSolicNFF) não pode estar preenchido | Obrig. | 902 | Rej. |
