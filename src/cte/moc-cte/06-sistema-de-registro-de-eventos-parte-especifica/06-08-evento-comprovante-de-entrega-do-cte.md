<!-- p.73 -->

# 6.8. Evento Comprovante de Entrega do CTe

**Função:** Evento para indicar a efetivação da entrega da carga pelo transportador.

**Autor do Evento:** O autor do evento é o emissor do CTe. A mensagem XML do evento será assinada com o certificado digital que tenha o CNPJ base do Emissor do CTe.

**Modelo:** CTe de Transporte de Cargas (modelo 57)

**Código do Tipo de Evento: 110180** (Este evento exige CTe autorizado)

**Schema XML:** evCECTe_v9.99.xsd

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **IP01** | **evCECTe** | **G** | **-** | **-** | **-** | **-** | **TAG raiz** |
| IP02 | descEvento | E | IP01 | C | 1 - 1 | 30 | Descrição do Evento: “Comprovante de Entrega do CTe” |
| IP03 | nProt | E | IP01 | N | 1 - 1 | 15 | Informar o número do protocolo de autorização do CTe |
| IP04 | dhEntrega | E | IP01 | D | 1 - 1 | - | Data e Hora da Conclusão da Entrega<br>Formato = AAAA-MM-DDTHH:MM:SS TZD |
| IP05 | nDoc | E | IP01 | C | 1 - 1 | 2-20 | Documento de identificação da pessoa que recebeu a entrega |
| IP06 | xNome | E | IP01 | C | 1 - 1 | 2-60 | Nome da pessoa que recebeu a entrega |
| IP07 | latitude | E | IP01 | N | 0 - 1 | [-]2,6 | Latitude do ponto da entrega (detectado pelo equipamento do transportador, exemplo: PDA, tablet, celular) |
| IP08 | longitude | E | IP01 | N | 0 - 1 | [-]3,6 | Longitude do ponto da entrega (detectado pelo equipamento do transportador, exemplo: PDA, tablet, celular) |
| IP09 | hashEntrega | E | IP01 | C | 1 - 1 | 28 | Hash (SHA1) no formato Base64 resultante da concatenação: Chave de acesso do CTe + Base64 da imagem capturada da entrega (Exemplo: imagem capturada da assinatura eletrônica, digital do recebedor, foto, etc)<br>**Nota 1**: A critério do autor deste evento, este campo pode ser utilizado como índice para acesso as informações do Comprovante de entrega.<br>**Nota 2**: A SEFAZ não tem nenhum controle sobre a informação deste campo.<br><br>**Observação:** 28 caracteres são representados no schema como 20 bytes do tipo base64Binary |
| IP10 | dhHashEntrega | E | IP01 | D | 1 - 1 | - | Data e hora da geração do hash da entrega<br>Formato = AAAA-MM-DDTHH:MM:SS TZD |
| **IP11** | **infEntrega** | **G** | **IP01** | **-** | **0 - 2000** | **-** | **Grupo de informações das entregas. Informar apenas para CTe com tipo de serviço Normal** |
| IP12 | chNFe | E | IP11 | C | 1 - 1 | 44 | Chave de acesso da NFe que está sendo entregue |

<!-- p.74 -->

## 6.8.1 Validação das Regras Específicas do Evento

| Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|
| **O01** Verificar se o nSeqEvento é maior que o valor permitido (1-999) | Obrig. | 636 | Rej. | Rejeição: O número sequencial do evento é maior que o permitido |
| **O02** Verificar se CTe já está denegado<br>**Observação:** Regra mantida para garantir compatibilidade com CTe antigos que possam estar na situação denegado | Obrig. | 205 | Rej. | Rejeição: CTe está denegado na base de dados da SEFAZ |
| **O03** Verificar se CTe já está cancelado | Obrig. | 218 | Rej. | Rejeição: CTe já está cancelado na base de dados da SEFAZ<br>[nProt:999999999999999][dhCanc: AAAA-MM-DDTHH:MM:SS TZD]. |
| **O04** Verificar se número do Protocolo informado difere do número do Protocolo do CTe | Obrig. | 222 | Rej. | Rejeição: Protocolo de Autorização de Uso difere do cadastrado |
| **O05** Rejeitar se CTe for do tipo Complemento de Valores | Obrig. | 869 | Rej. | Rejeição: Evento não permitido para CTe Complementar |
| **O06** Rejeitar se a data/hora da entrega for inferior a data de emissão do CTe ou superior a data/hora atual | Obrig. | 872 | Rej. | Rejeição: Data e hora da entrega inválida |
| **O07** Rejeitar se a data/hora do hash do comprovante da entrega for inferior a data de emissão do CTe ou superior a data/hora atual | Obrig. | 873 | Rej. | Rejeição: Data e hora do hash do comprovante de entrega inválida |
| **O08** Se o CTe não possuir indicador de CTe globalizado informado:<br>Rejeitar se existir outro evento de Comprovante de Entrega na situação autorizado (não possui cancelamento do comprovante de entrega) para este CTe | Obrig. | 870 | Rej. | Rejeição: Não é permitido mais de um comprovante de entrega para CTe (exceto CTe Globalizado) |
| **O09** Se CTe for do tipo de serviço Normal e possuir preenchido o grupo infNFe:<br>O grupo infEntrega deve ser informado | Obrig. | 865 | Rej. | Rejeição: Comprovante de entrega deve relacionar NFe para CTe de tipo de serviço Normal |
| **O10** Se o CTe for do tipo de serviço diferente de Normal<br>O grupo infEntrega não deve ser informado<br>**Exceção**: Esta regra não será aplicada quando a forma de emissão do CTe (tpEmis) for Regime Especial da Nota Fiscal Fácil (3) e o CTe for de Subcontratação | Obrig. | 871 | Rej. | Rejeição: Comprovante de entrega não pode informar NFe para CTe de tipo de serviço diferente de Normal |
| **O11** Se informada NFe, para cada uma das NFe relacionadas:<br>- Validar chave de acesso da NFe<br>Retornar a primeira chave inválida e o motivo da rejeição da Chave de Acesso: CNPJ / CPF zerado ou inválido, Ano < 2005 ou maior que atual, Mês inválido (0 ou > 12), Modelo diferente de 55, Número zerado, Tipo de emissão inválido, UF inválida ou DV inválido)<br>[chNFe: 99999999999999999999999999999999999999999999]<br>[Motivo: XXXXXXXXXXXX] | Obrig. | 860 | Rej. | Rejeição: Chave de acesso da NFe indicada no comprovante de entrega inválida |
| <!-- p.75 -->**O12** Se informada NFe, para cada uma das NFe relacionadas:<br>- Acessar BD CHAVES NFE (Chave: UF, CNPJ/CPF Emit, Modelo, Série, Nro):<br>- A NFe deve existir<br>**Exceção**: NFe em contingência fica dispensada dessa validação (verificar tpEmis da chave de acesso da NFe)<br>Retornar a primeira chave de NFe inexistente | Facult. | 661 | Rej. | Rejeição: NFe inexistente na base de dados da SEFAZ |
| **O13** Se informada NFe, para cada uma das NFe relacionadas:<br>- Acessar BD CHAVES NFE (Chave: UF, CNPJ/CPF Emit, Modelo, Série, Nro):<br>- A NFe não pode existir com diferença de chave de acesso<br>Retornar a primeira chave de NFe com chave divergente | Facult. | 662 | Rej. | Rejeição: NFe com diferença de Chave de Acesso |
| **O14** Se informada NFe, para cada uma das NFe relacionadas:<br>- Acessar BD CHAVES NFE (Chave: UF, CNPJ/CPF Emit, Modelo, Série, Nro):<br>- A NFe não pode estar cancelada ou denegada<br>Retornar a primeira chave de NFe com situação inválida | Facult. | 652 | Rej. | Rejeição: NFe não pode estar cancelada ou denegada |
| **O15** Se informada NFe, para cada uma das NFe relacionadas:<br>A NFe não pode estar duplicada no grupo infEntrega<br>Retornar a primeira chave de NFe em duplicidade no grupo entrega | Facult. | 861 | Rej. | Rejeição: NFe em duplicidade no evento comprovante de entrega |
| **O16** Se informada NFe, para cada uma das NFe relacionadas:<br>A NFe não pode estar vinculada em outro evento de Comprovante de Entrega para o mesmo CTe na situação autorizado (não possui cancelamento do comprovante de entrega)<br>Retornar a primeira chave de NFe com evento pré-existente | Facult. | 863 | Rej. | Rejeição: NFe já possui comprovante de entrega para este CTe |
| **O17** Se informada NFe, para cada uma das NFe relacionadas:<br>A NFe deve estar relacionada nos documentos transportados do CTe<br>Retornar a primeira chave de NFe que não está relacionada ao CTe | Facult. | 864 | Rej. | Rejeição: NFe não possui relação com este CTe |

## 6.8.2 Final do Processamento

Se o evento de Comprovante de entrega do CTe for homologado o status de retorno deverá ser cStat=135.

Este evento deverá ser propagado nas notas fiscais eletrônicas relacionadas de forma automática, conforme Boletim Técnico do projeto NFe.
