<!-- p.06 -->
# Limitação de tempo nas chaves de acesso relacionadas no CTe

Visando qualificar o sistema de autorização e com vistas aos inúmeros eventos de marcação que são gerados de forma automática no trânsito de mercadorias, entende-se relevante manter uma data de corte na indicação de chaves de acesso de documentos associados ao CTe.

## CTe

| # | Regra de Validação | Aplic | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|
| G040a | Se Tipo do CTe= 0 (Normal) ou 3 (Substituição) e informados grupos de informações de documentos (infDoc) e NFe (infNfe), para cada uma das NFe´s relacionadas:<br><br>Verificar se o Ano/Mês da chave de acesso são anteriores a 6 meses da Data de Autorização do CTe | Obrig. | 930 | Rej. | Rejeição: Chave de acesso da NFe transportada muito antiga [chNFe:<br>999999999999999999999999999<br>99999999999999999] |
| G065a | Se Tipo do CTe= 0 (Normal) ou 3 (Substituição) e informados grupos de informações de documentos eletrônicos (idDocAntEle) em documentos anteriores (docAnt), para cada um dos CTe´s relacionados:<br><br>Verificar se o Ano/Mês da chave de acesso são anteriores a 6 meses da Data de Autorização do CTe | Obrig. | 931 | Rej. | Rejeição: Chave de acesso do CTe anterior muito antiga [chCTe:<br>999999999999999999999999999<br>99999999999999999] |
| G071a | Se Tipo do CTe= 0 (Normal) ou 3 (Substituição) e informado grupo de informações dos CTe multimodais vinculados (infCTeMultimodal), para cada um dos CTe´s relacionados (chCTeMultimodal):<br><br>Verificar se o Ano/Mês da chave de acesso são anteriores a 6 meses da Data de Autorização do CTe | Obrig. | 932 | Rej. | Rejeição: Chave de acesso do CTe multimodal muito antiga [chCTe:<br>999999999999999999999999999<br>99999999999999999] |
| G161a | Se Tipo do CTe= 1 (Complementar), para cada chave de CTe informado:<br><br>Verificar se o Ano/Mês da chave de acesso são anteriores a 12 meses da Data de Autorização do CTe<br><br>**Exceção:** Em caso de modal ferroviário <mark>ou aquaviário</mark> permitir até 24 meses da Data de Autorização do CTe | Obrig. | 933 | Rej. | Rejeição: Chave de acesso do CTe complementado muito antiga [chCTe:<br>999999999999999999999999999<br>99999999999999999] |

## CTe OS

| # | Regra de Validação | Aplic | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|
| H029a | Se tipo de serviço = Excesso de Bagagem e informada chave de BP-e referenciada (infDocRef\chBPe):<br><br>Verificar se o Ano/Mês da chave de acesso são anteriores a 6 meses da Data de Autorização do CTe OS | Obrig. | 934 | Rej | Rejeição: Chave de acesso do BPe referenciado muito antiga [chBPe:<br>99999999999999999999999999<br>999999999999999999] |
| H038a | Se Tipo do CTe = 0 (Normal) ou 3 (Substituição) e referenciado CTe cancelado (refCTeCanc):<br><br>Verificar se o Ano/Mês da chave de acesso são anteriores a 6 meses da Data de Autorização do CTe OS | Obrig. | 935 | Rej. | Rejeição: Chave de acesso do CTe referenciado muito antiga [chCTe:<br>99999999999999999999999999<br>999999999999999999] |
| H046a | Se tipo de serviço for Transporte de Valores e informado grupo infGTVe, para cada uma das chaves informadas:<br><br>Verificar se o Ano/Mês da chave de acesso da GTVe são anteriores a 6 meses da Data de Autorização do CTe OS | Obrig. | 936 | Rej. | Rejeição: Chave de acesso da GTVe muito antiga [chCTe:<br>99999999999999999999999999<br>999999999999999999] |
| H102a | Se Tipo do CTe= 1 (Complementar), para cada chave de CTe informado:<br><br>Verificar se o Ano/Mês da chave de acesso são anteriores a 12 meses da Data de Autorização do CTe<br><br>**Exceção:** Em caso de modal ferroviário <mark>ou aquaviário</mark> permitir até 24 meses da Data de Autorização do CTe | Obrig. | 933 | Rej. | Rejeição: Chave de acesso do CTe complementado muito antiga [chCTe:<br>999999999999999999999999999<br>99999999999999999] |
