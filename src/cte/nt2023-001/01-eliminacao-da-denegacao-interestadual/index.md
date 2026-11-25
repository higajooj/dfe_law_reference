<!-- p.05 -->

# 1 Eliminação da Denegação Interestadual

As hipóteses da Denegação no processo de autorização dos documentos deixam de existir.

A validação do CTe poderá resultar em:

- **Rejeição** – o CTe será descartado, não sendo armazenada no Banco de Dados podendo ser corrigido e novamente transmitido;
- **Autorização de uso** – o CTe será armazenado no Banco de Dados;

| Validação: De forma do CTe | Validação: Situação do CTe | Consequência: Para o contribuinte | Consequência: Banco de Dados |
|---|---|---|---|
| Inválida | Rejeição | Corrigir CTe | Não gravar |
| Válida | Autorização de uso | Prestação Autorizada | Gravar |

## Regras de Validação de CTe, CTeOS e GTVe

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|
| G036 | Se Tipo do CT-e= 0 (Normal) ou 3 (Substituição), modal = ferroviário e informado CT-e emitido pela ferrovia de origem &lt;chCTeFerroOrigem&gt;<br>-Acessar BD CHAVES CTE (Chave: CNPJ Emit, Modelo, Série, Nro):<br>&nbsp;&nbsp;&nbsp;- O CT-e da Ferrovia de Origem não pode estar cancelado ~~ou denegado~~ | Facult. | 711 | Rej. | Rejeição: CTe da Ferrovia de Origem referenciado não pode estar cancelado ~~ou denegado~~ |
| G068 | Se estiver informado o grupo de documentos eletrônicos (idDocAntEle) em documentos anteriores:<br>-Acessar BD CHAVES CTE (Chave: CNPJ Emit, Modelo, Série, Nro):<br>&nbsp;&nbsp;&nbsp;- Os CT-e informados em DocAnt (chCTe) não podem estar cancelados ~~ou denegados~~<br>**Observação:** Retornar a primeira chave do CT-e anterior com situação inválida | Facult. | 750 | Rej. | Rejeição: CTe referenciado em documentos anteriores não pode estar cancelado ~~ou denegado~~ |
| G074 | Se Tipo do CT-e= 0 (Normal) ou 3 (Substituição) e Tipo de Serviço = “Serviço Vinculado a Multimodal”<br>-Acessar BD CHAVES CTE (Chave: CNPJ Emit, Modelo, Série, Nro):<br>&nbsp;&nbsp;&nbsp;- Os CT-e multimodal referenciados (chCTeMultimodal) não podem estar cancelados ~~ou denegados~~<br>Retornar a primeira chave do CT-e multimodal com situação inválida | Facult. | 692 | Rej. | Rejeição: CTe multimodal referenciado não pode estar cancelado ~~ou denegado~~<br>[chCTe: 99999999999999999999999999999999999999999999] |
| G096<br>N064 | Se Tipo do CT-e= 3 (Substituição):<br>- O CT-e substituído não pode estar cancelado ou denegado | Obrig. | 569 | Rej. | Rejeição: CT-e a ser substituído deve estar com a situação autorizada (não pode estar cancelado ~~ou denegado~~) |
| G133<br>N089<br>Q026 | ~~- Emitente em situação irregular perante o Fisco (tratar duplicidade na inserção do CT-e, evitando a inserção de mais de um CT-e denegado)~~ | ~~Obrig.~~ | ~~301<br>ou<br>205~~ | ~~Den.~~ | ~~Uso Denegado: Irregularidade fiscal do emitente~~ |

> **Revogado/Descontinuado:** no original, estão riscados o texto ~~ou denegado~~ das regras G036, G068, G074 e G096/N064 (somente na mensagem) e a linha inteira das regras G133/N089/Q026.

| # | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|
| G110 | Se informada IE do emitente (tpEmis diferente de 3):<br>- Emitente deve estar habilitado na base de dados para emissão do CTe<br><mark>**Observação**: IE em situação irregular perante o fisco deve rejeitar por esta regra para CTe, CTeOS e GTVe</mark> | Obrig. | 203 | Rej. | Rejeição: Emissor não habilitado para emissão do CTe |
| G183<br>N106 | ~~- Verificar se CT-e está denegado<br>Retornar Protocolo e data de denegação.<br>[nProt:999999999999999][dhDeneg: AAAA-MM-DDTHH:MM:SS TZD]~~ | ~~Obrig.~~ | ~~205~~ | ~~Rej.~~ | ~~Rejeição: CT-e está denegado na base de dados da SEFAZ~~ |

> **Revogado/Descontinuado:** no original, a regra G183/N106 inteira está riscada.

Nos eventos a verificação da situação do CTe denegado será mantida apenas por questão de compatibilidade com documentos que já existam na base nessa condição.
