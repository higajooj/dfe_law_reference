<!-- p.14 -->

# 4 Serviço de Recepção CT-e OS (RV)

## Validações das Regras Específicas

<!-- REVISAR p.14: nas regras N29a a N29g, as colunas Crítica e Efeito aparecem invertidas na fonte (Rej. sob Crítica; Obrig. sob Efeito); transcrito conforme a imagem -->

| # | Regra de Validação | Crítica | Msg | Efeito |
|---|---|---|---|---|
| **N29a** | Se tipo de serviço = Excesso de Bagagem e informada chave de BP-e referenciada<br>(infDocRef\chBPe):<br>Validar chave de acesso do BP-e referenciado<br>Retornar o motivo da rejeição da Chave de Acesso: CNPJ zerado ou inválido, Ano < 2017 ou maior que atual, Mês inválido (0 ou > 12), Modelo diferente de 63, Número zerado, Tipo de emissão inválido, UF inválida ou DV inválido)<br>[chBPe: 99999999999999999999999999999999999999999999]<br>[Motivo: XXXXXXXXXXXX] | Rej. | 891 | Obrig. |
| **N29b** | Se tipo de serviço = Excesso de Bagagem e informada chave de BP-e referenciada:<br>(infDocRef\chBPe):<br>- O BP-e referenciado deve existir<br>Acesso BD BPE (Chave: CNPJ Emit, Modelo, Série, Nro) | Rej. | 892 | Obrig, |
| **N29c** | Se tipo de serviço = Excesso de Bagagem e informada chave de BP-e referenciada:<br>(infDocRef\chBPe):<br>- O BP-e referenciado não pode existir com diferença na chave de acesso<br>Retornar a chave de acesso já autorizada, o número do protocolo e data de autorização do BP-e<br>[chBPe: 99999999999999999999999999999999999999999999]<br>[nProt:999999999999999][dhAut: AAAA-MM-DDTHH:MM:SS TZD]. | Rej. | 893 | Obrig, |
| **N29d** | Se tipo de serviço = Excesso de Bagagem e informada chave de BP-e referenciada:<br>(infDocRef\chBPe):<br>O BP-e referenciado não pode estar cancelado <mark>ou substituído</mark> | Rej. | 894 | Obrig. |
| **N29e** | Se tipo de serviço = Excesso de Bagagem e informada chave de BP-e referenciada:<br>(infDocRef\chBPe):<br>O BP-e referenciado não pode ter evento de não embarque associado | Rej. | 895 | Obrig. |
| **N29f** | Se tipo de serviço = Excesso de Bagagem e informada chave de BP-e referenciada:<br>(infDocRef\chBPe):<br>O BP-e referenciado deve possuir pelo menos um evento de excesso de bagagem associado | Rej. | 896 | Obrig. |
| **N29g** | Se tipo de serviço = Excesso de Bagagem e informada chave de BP-e referenciada:<br>(infDocRef\chBPe):<br>O CNPJ da chave de acesso do BP-e referenciado deve ser do mesmo emitente do CT-e OS | Rej. | 897 | Obrig. |
| **N030** | Se tipo de serviço = Transporte de Valores<br>- Verificar se existe CT-e OS autorizado há mais de 45 dias para o mesmo CNPJ do emitente sem que exista pelo menos um evento de Informações da GTV vinculado<br><br>**Observação:** Retornar a chave de acesso do CT-e OS mais antigo que causou o bloqueio<br><br>**Observação 2:** Essa validação não deve ser aplicada no ambiente de homologação.<br><br>**Observação 3:** A validação não deve ser aplicada a CT-e OS de transporte de valores que relacionam GTVe | Obrig. | 758 | Rej. |
| **N75a** | Se Tipo do CT-e= 3 (Substituição) e informado CT-e de anulação:<br>- Validar chave de acesso do CT-e de anulação<br>Retornar o motivo da rejeição da Chave de Acesso: CNPJ zerado ou inválido, Ano < 2009 ou maior que atual, Mês inválido (0 ou > 12), Modelo diferente de 57, Número zerado, Tipo de emissão inválido, UF inválida ou DV inválido)<br>[chCTe: 99999999999999999999999999999999999999999999]<br>[Motivo: XXXXXXXXXXXX] | Obrig. | 848 | Rej. |

## Validações da GTVe

<!-- REVISAR p.15: o código N38f aparece duas vezes na fonte (regras "A GTVe não pode estar cancelada" e "chaves duplicadas"), com N38e entre elas; transcrito literalmente -->

| # | Regra de Validação | Crítica | Msg | Efeito |
|---|---|---|---|---|
| **N038a** | Se tipo de serviço for diferente de Transporte de Valores<br>- O grupo de informações infGTVe não pode estar informado | Obrig. | 881 | Rej. |
| **N38b** | Se tipo de serviço for Transporte de Valores e informado grupo infGTVe, para cada uma das chaves informadas:<br>- Validar chave de acesso da GTVe<br><!-- p.15 -->Retornar o motivo da rejeição da Chave de Acesso: CNPJ zerado ou inválido, Ano < 2020 ou maior que atual, Mês inválido (0 ou > 12), Modelo diferente de 64, Número zerado, Tipo de emissão inválido, UF inválida ou DV inválido)<br>[chCTe: 99999999999999999999999999999999999999999999]<br>[Motivo: XXXXXXXXXXXX] | Obrig. | 882 | Rej. |
| **N38c** | Se tipo de serviço for Transporte de Valores e informado grupo infGTVe, para cada uma das chaves informadas:<br>- A GTVe deve existir na base de dados da SEFAZ<br>Acesso BD CTE (Chave: CNPJ Emit, Modelo, Série, Nro) | Obrig, | 883 | Rej. |
| **N38d** | Se tipo de serviço for Transporte de Valores e informado grupo infGTVe, para cada uma das chaves informadas:<br>- A GTVe não pode existir com diferença na chave de acesso<br>Retornar a chave de acesso já autorizada, o número do protocolo e data de autorização da GTVe<br>[chCTe: 99999999999999999999999999999999999999999999]<br>[nProt:999999999999999][dhAut: AAAA-MM-DDTHH:MM:SS TZD]. | Obrig. | 884 | Rej. |
| **N38f** | Se tipo de serviço for Transporte de Valores e informado grupo infGTVe, para cada uma das chaves informadas:<br>- A GTVe não pode estar cancelada | Obrig. | 885 | Rej. |
| **N38e** | Se tipo de serviço for Transporte de Valores e informado grupo infGTVe, para cada uma das chaves informadas:<br>- A GTVe deve possuir o mesmo CNPJ de emitente do CT-e OS. | Obrig. | 886 | Rej. |
| **N38f** | Se tipo de serviço for Transporte de Valores e informado grupo infGTVe, para cada uma das chaves informadas:<br>- Não podem ser informadas chaves duplicadas de GTVe no CT-e OS | Obrig. | 887 | Rej. |
| **N38g** | Se tipo do componente da GTVe (infGTVe\Comp\tpComp) for igual a Outros (6), a tag xComp deve ser informada. | Obrig. | 898 | Rej. |
| **N38h** | A soma dos valores componentes das GTVe (infGTVe\Comp\vComp) de todas as GTVe informadas deve ser igual ao valor total da Prestação do Serviço (vPrest\vTPrest)<br><br>**Observação:** deverá ser tolerada uma diferença de R$ 0,10 em virtude de arredondamento | Obrig. | 899 | Rej. |

Cada GTVe relacionada no CT-e OS deverá receber o evento de marcação automático “Autorizado CT-e OS” (240180).

Em caso de cancelamento do CT-e OS, as mesmas GTVe deverão receber o evento “Cancelado CT-e OS” (240181).
