# Limitação de tempo nas chaves de acesso relacionadas no MDFe

Visando qualificar o sistema de autorização e com vistas aos inúmeros eventos de marcação que são gerados de forma automática no trânsito de mercadorias, entende-se relevante manter uma data de corte na indicação de chaves de acesso de documentos associados ao MDFe.

| ID | Regra | Obrigatoriedade | Código | Ação | Mensagem |
|---|---|---|---|---|---|
| F30a | <mark>Se informado grupo CTe, para cada um dos CTe relacionados:<br>Verificar se o Ano/Mês da chave de acesso são anteriores a 6 meses da Data de Autorização do MDFe</mark> | <mark>Obrig.</mark> | <mark>518</mark> | <mark>Rej.</mark> | <mark>Rejeição: Chave de acesso do CTe muito antiga<br>[chCTe: 99999999999999999999999999999999999999999999]</mark> |
| F37a | <mark>Se informado grupo NFe, para cada uma das NFe relacionadas:<br>Verificar se o Ano/Mês da chave de acesso são anteriores a 6 meses da Data de Autorização do MDFe</mark> | <mark>Obrig.</mark> | <mark>519</mark> | <mark>Rej.</mark> | <mark>Rejeição: Chave de acesso da NFe informada muito antiga<br>[chNFe: 99999999999999999999999999999999999999999999]</mark> |
| F45a | <mark>Se informado o grupo MDFeTransp, para cada um dos MDFe relacionados:<br>Verificar se o Ano/Mês da chave de acesso são anteriores a 6 meses da Data de Autorização do MDFe</mark> | <mark>Obrig.</mark> | <mark>520</mark> | <mark>Rej.</mark> | <mark>Rejeição: Chave de acesso de MDFe informada muito antiga<br>[chMDFe: 99999999999999999999999999999999999999999999]</mark> |
